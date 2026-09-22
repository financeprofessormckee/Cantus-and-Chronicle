"use strict";

/*
 * playback.js — jgabc-style chant playback with a note+syllable highlight that
 * follows the audio. window.ChantPlayback.
 *
 * A single Exsurge `score` object is the source of truth for BOTH the sound and
 * the on-screen highlight, so they can never drift apart:
 *
 *   - Audio: every sounding note's pitch (note.pitch = {step 0..11, octave}) maps
 *     to a frequency and is voiced by a small Web Audio synth. There is no MIDI /
 *     soundfont; the timbre is a periodic wave + soft envelope ported from jgabc's
 *     bit101/tones voice, which sounds more like chant than the old organ patch.
 *   - Rhythm: durations are the free rhythm chant actually uses — a quarter by
 *     default, lengthened at morae and episemata and before a quilisma (per
 *     jgabc's util.js), so it breathes at cadences instead of ticking evenly.
 *   - Highlight: Exsurge renders each notation as its own
 *     <g class="ChantNotationElement"> whose children include the note glyph(s) AND
 *     its lyric <text>. The groups line up 1:1 with score.notations once the
 *     auto-inserted clef (start of each line) and custos (end of each line, glyph
 *     "Custod…") groups are filtered out — verified across the whole corpus. A
 *     single-note syllable tints its whole group; a multi-note neume additionally
 *     resolves its own sounding glyph (the group's <use> children, in note order) so
 *     the exact note gets a brighter tint against the syllable's dimmer one, and
 *     degrades to the whole-group tint if a neume shape's glyph count doesn't line
 *     up with its note count.
 *   - Click-to-seek: every clickable notation group (one per non-rest step) gets a
 *     click listener that seeks `cursor` to that group's first step and plays from
 *     there, so tapping a word/note starts playback at that point in the chant.
 *
 * Our vendored exsurge.min.js emits no per-note ids/source-index and minifies
 * Mora/HorizontalEpisema to the same class name, so marks are detected with
 * `instanceof exsurge.Mora` / `exsurge.HorizontalEpisema` (distinct constructors)
 * and the highlight is keyed by notation *index*, not by any DOM id.
 */

window.ChantPlayback = (function () {
  var ex = window.exsurge;

  /* ---- Voice (ported from jgabc js/tones.js) ------------------------------ */
  // Periodic-wave partials give the breathy, slightly reedy chant tone.
  var PARTIALS_REAL = [0, 0.3, 0.03, 0.05];
  var PARTIALS_IMAG = [0, 0, 0, 0];
  var ATTACK_MS = 100;    // fade-in
  var RELEASE_MS = 300;   // fade-out tail
  var DEFAULT_VOLUME = 0.33;  // peak gain per note (monophonic, so no summing worries)
  var volume = DEFAULT_VOLUME;

  /* ---- Rhythm ------------------------------------------------------------- */
  var DEFAULT_BPM = 165;                 // jgabc's default chant tempo
  var MORA_MULT = 2;                     // a dot doubles the note
  var PRE_QUILISMA_MULT = 1.8;           // the note before a quilisma broadens
  var EPISEMA_ADD = 0.9;                 // a horizontal episema lengthens
  var REST_BEATS = 1.3;                  // breath at a bar / phrase mark (no sound)

  // Pitch → frequency. note.pitch.step is a 0..11 chromatic degree (Exsurge's Step
  // enum), octave an integer; step + 12*octave is a MIDI-like number. REF_M anchors
  // it: la in the common octave (step 9, octave 1 -> 21) sounds as A4 (440 Hz), which
  // keeps the corpus in a comfortable ~220-990 Hz band. Lower REF_M to sing lower.
  var REF_M = 21;
  var DEFAULT_PITCH = 0;   // semitone offset from REF_M, live-adjustable
  var pitchShift = DEFAULT_PITCH;
  function pitchToNumber(p) { return p.step + 12 * p.octave; }
  function numberToFreq(m) { return 440 * Math.pow(2, (m - REF_M + pitchShift) / 12); }

  /* ---- Module state ------------------------------------------------------- */
  var audioCtx = null;
  var liveVoices = new Set();   // {osc, gain} currently sounding, for a hard stop
  var steps = [];               // flattened playable timeline (notes + rests)
  var svgEl = null;             // the rendered score SVG we highlight within
  var statusCb = null;          // (text) => void, for the little status line
  var endCb = null;             // () => void, called when a chant finishes
  var bpm = DEFAULT_BPM;
  var timer = null;             // pending setTimeout for the next step
  var cursor = 0;               // index into `steps`
  var playing = false;
  var activeGroup = null;       // currently highlighted <g>, if any

  function quarterSec() { return 60 / bpm; }

  /* ---- Synth -------------------------------------------------------------- */
  // A PeriodicWave is bound to the BaseAudioContext that created it, so an
  // OfflineAudioContext bounce (Phase 9b) needs its own instance rather than
  // the live audioCtx's — cached per-context since it's the same partials
  // every time.
  var periodicWaveByCtx = new WeakMap();
  function periodicWaveFor(ctx) {
    var pw = periodicWaveByCtx.get(ctx);
    if (!pw) {
      pw = ctx.createPeriodicWave(
        new Float32Array(PARTIALS_REAL), new Float32Array(PARTIALS_IMAG));
      periodicWaveByCtx.set(ctx, pw);
    }
    return pw;
  }

  function getAudioCtx() {
    if (!audioCtx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      audioCtx = new AC();
      periodicWaveFor(audioCtx);
    }
    return audioCtx;
  }

  // Voice one note on `ctx`, for lenSec seconds, starting at `at` (defaults to
  // "now" so the live playback path is unchanged). Envelope mirrors jgabc: ramp
  // up over ATTACK, hold, then ease down over RELEASE (setTargetAtTime
  // time-constants are the ms/3000 jgabc uses). Parameterized over `ctx`/`at` so
  // an offline OfflineAudioContext bounce can reuse this exact synth/envelope
  // rather than duplicating it.
  function voice(ctx, freq, lenSec, at) {
    if (!ctx) return;
    var now = at === undefined ? ctx.currentTime : at;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.setPeriodicWave(periodicWaveFor(ctx));
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, now);
    gain.gain.setTargetAtTime(volume, now, ATTACK_MS / 3000);
    var offAt = now + (lenSec * 1000 + ATTACK_MS) / 1000;
    gain.gain.setTargetAtTime(0, offAt, RELEASE_MS / 3000);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(offAt + RELEASE_MS / 1000 + 0.05);
    var v = { osc: osc, gain: gain };
    liveVoices.add(v);
    osc.onended = function () { liveVoices.delete(v); try { osc.disconnect(); gain.disconnect(); } catch (_) {} };
  }

  function silenceAll() {
    liveVoices.forEach(function (v) {
      try { v.gain.gain.cancelScheduledValues(audioCtx.currentTime); v.gain.gain.value = 0; v.osc.stop(); } catch (_) {}
    });
    liveVoices.clear();
  }

  /* ---- Highlight ---------------------------------------------------------- */
  // Exsurge auto-inserts a clef at each line start and a custos ("Custod…") at each
  // line end; neither is in score.notations. Every other ChantNotationElement group
  // is, in order — so filtering those two yields groups aligned 1:1 with notations.
  function notationGroups(svg) {
    var all = Array.prototype.slice.call(svg.querySelectorAll("g.ChantNotationElement"));
    return all.filter(function (g) {
      var uses = g.getElementsByTagName("use");
      for (var i = 0; i < uses.length; i++) {
        var href = uses[i].getAttribute("xlink:href") || uses[i].getAttribute("href") || "";
        if (/Clef|Custod/.test(href)) return false;
      }
      return true;
    });
  }

  var activeNoteEl = null;  // currently tinted single-note glyph, if using the dim/bright split

  function clearHighlight() {
    if (activeGroup) {
      activeGroup.classList.remove("chant-active");
      activeGroup.classList.remove("chant-active-syllable");
      activeGroup = null;
    }
    if (activeNoteEl) { activeNoteEl.classList.remove("chant-note-active"); activeNoteEl = null; }
  }

  // Takes a whole step (not just its group) so a multi-note neume can tint its
  // specific sounding glyph brighter than the rest of the syllable — see buildSteps.
  function highlight(step) {
    var group = step ? step.group : null;
    var noteEl = step ? step.noteEl : null;
    if (group === activeGroup && noteEl === activeNoteEl) return;
    clearHighlight();
    if (!group) return;
    activeGroup = group;
    if (noteEl) {
      activeNoteEl = noteEl;
      group.classList.add("chant-active-syllable");
      noteEl.classList.add("chant-note-active");
    } else {
      group.classList.add("chant-active");
    }
  }

  // A ChantNotationElement group's only <use> children are note-head glyphs (verified
  // empirically: mora dots/episema render as a <rect class="NeumeLine">, the lyric as
  // <text> — never as <use>), in the same left-to-right order the notes sound. So for a
  // multi-note neume (podatus, torculus, porrectus, …) the group's <use> list lines up
  // 1:1 with its sounding notes, letting each note claim its own glyph to tint. Some
  // ligatures (e.g. a porrectus's diagonal stroke) share one glyph across two notes and
  // pad the gap with an invisible "#None" placeholder — highlighting that placeholder is
  // a harmless no-op (dim syllable tint only, no distinct bright note), not a bug.
  function noteGlyphs(group) {
    return group ? Array.prototype.slice.call(group.querySelectorAll("use")) : [];
  }

  /* ---- Build the timeline from the score ---------------------------------- */
  // Returns a flat list of steps. A note step sounds and points at its notation's
  // DOM group; a rest step (bar / phrase mark) is a silent breath that clears the
  // highlight. Durations follow jgabc's free-rhythm rules. Highlighting degrades to
  // off (audio still plays) if the group count doesn't line up with the notations.
  function buildSteps(score, svg) {
    var groups = notationGroups(svg);
    var aligned = groups.length === score.notations.length;
    var Mora = ex.Mora, Episema = ex.HorizontalEpisema, QUIL = ex.NoteShape.Quilisma;
    var out = [];
    var lastNoteStep = null;   // for "lengthen the note before a quilisma"

    score.notations.forEach(function (nt, i) {
      var group = aligned ? groups[i] : null;
      var sounding = (nt.notes || []).filter(function (n) { return !n.isAccidental && n.pitch; });

      if (!sounding.length) {
        // Divider bar or a directive like "*": a silent breath.
        out.push({ rest: true, beats: REST_BEATS, group: null, groupIndex: null, noteIndex: null });
        lastNoteStep = null;
        return;
      }

      // Only bother resolving per-note glyphs for genuine multi-note neumes — a
      // single-note syllable already highlights its whole (one-note) group fine.
      // If the glyph count doesn't match the note count, leave every noteEl unset:
      // the step still carries `group`, so highlight() falls back to the plain
      // whole-group tint instead of the dim/bright split.
      var glyphs = sounding.length > 1 ? noteGlyphs(group) : [];
      var glyphsAligned = glyphs.length === sounding.length;

      sounding.forEach(function (n, j) {
        var beats = 1;
        var marks = n.markings || [];
        var hasMora = Mora && marks.some(function (m) { return m instanceof Mora; });
        var hasEpisema = Episema && marks.some(function (m) { return m instanceof Episema; });
        if (hasEpisema) beats += EPISEMA_ADD;
        if (hasMora) beats = Math.max(beats, MORA_MULT);

        // A quilisma broadens the PREVIOUS note (the quilisma itself passes quickly).
        if (n.shape === QUIL && lastNoteStep) {
          lastNoteStep.beats = Math.max(lastNoteStep.beats, PRE_QUILISMA_MULT);
        }

        var noteEl = glyphsAligned ? glyphs[j] : null;
        // pitchNum (not freq) is stored so a live pitch-shift change is picked up by
        // numberToFreq() at tick() time, the same live-read design setTempo() uses.
        var step = {
          rest: false, pitchNum: pitchToNumber(n.pitch), beats: beats,
          group: group, noteEl: noteEl,
          groupIndex: aligned ? i : null, noteIndex: j
        };
        out.push(step);
        lastNoteStep = step;
      });
    });
    return out;
  }

  /* ---- Scheduler ---------------------------------------------------------- */
  function finish() {
    playing = false;
    if (timer) { clearTimeout(timer); timer = null; }
    silenceAll();
    clearHighlight();
    cursor = 0;
    if (statusCb) statusCb("");
    if (endCb) endCb();
  }

  // The one place a step's beats become seconds — buildTimeline() and
  // totalDuration() below reuse this exact formula so they can never drift
  // from what tick() actually schedules.
  function stepSeconds(step) { return quarterSec() * step.beats; }

  function tick() {
    // Bail if the score was re-rendered (date/part change) underneath us.
    if (!svgEl || !svgEl.isConnected) { finish(); return; }
    if (cursor >= steps.length) { finish(); return; }

    var step = steps[cursor++];
    var secs = stepSeconds(step);
    if (step.rest) {
      clearHighlight();
    } else {
      highlight(step);
      voice(audioCtx, numberToFreq(step.pitchNum), secs);
    }
    timer = setTimeout(tick, secs * 1000);
  }

  // Shared body of play()/playFrom(): validate, then start ticking from `idx`.
  function startAt(idx) {
    if (!steps.length) return;
    if (!getAudioCtx()) { if (statusCb) statusCb("Audio isn't supported in this browser."); return; }
    if (timer) { clearTimeout(timer); timer = null; }
    silenceAll();
    clearHighlight();
    cursor = idx;
    playing = true;
    if (statusCb) statusCb("playing");
    tick();
  }

  /* ---- Click-to-seek -------------------------------------------------------- */
  // Wires each clickable notation group to seek playback to its first step. Called
  // once per load() — a fresh SVG (and its groups/listeners) replaces the old one on
  // every render, so there's nothing to unwire.
  function wireClicks() {
    var firstStepForGroup = new Map();
    steps.forEach(function (step, i) {
      if (step.group && !firstStepForGroup.has(step.group)) firstStepForGroup.set(step.group, i);
    });
    firstStepForGroup.forEach(function (idx, group) {
      group.classList.add("chant-clickable");
      group.addEventListener("click", function () {
        resumeContext().then(function () { playFrom(idx); });
      });
    });
  }

  /* ---- Public API --------------------------------------------------------- */
  // Resume/create the AudioContext from inside a click gesture (autoplay policy).
  function resumeContext() {
    var ctx = getAudioCtx();
    if (ctx && ctx.state === "suspended") return ctx.resume();
    return Promise.resolve();
  }

  // Attach a freshly rendered score + its SVG. Stops anything already playing.
  function load(score, svg, onStatus, onEnd) {
    stop();
    statusCb = onStatus || null;
    endCb = onEnd || null;
    svgEl = svg || null;
    steps = (score && svg) ? buildSteps(score, svg) : [];
    cursor = 0;
    if (steps.length) wireClicks();
    return steps.length > 0;   // false => nothing playable (caller disables the button)
  }

  function play() {
    if (playing || !steps.length) return;
    startAt(cursor >= steps.length ? 0 : cursor);
  }

  // Seek to a specific step (e.g. a clicked notation group) and play from there,
  // whether or not something was already playing.
  function playFrom(idx) {
    if (idx < 0 || idx >= steps.length) return;
    startAt(idx);
  }

  function pause() {
    if (!playing) return;
    playing = false;
    if (timer) { clearTimeout(timer); timer = null; }
    silenceAll();
    if (statusCb) statusCb("paused");
    // cursor stays put; play() resumes from the same note. Highlight stays on it.
  }

  function toggle() { if (playing) pause(); else play(); }

  function stop() {
    playing = false;
    if (timer) { clearTimeout(timer); timer = null; }
    silenceAll();
    clearHighlight();
    cursor = 0;
    if (statusCb) statusCb("");
  }

  function setTempo(newBpm) { if (newBpm > 0) bpm = newBpm; }

  // +/- one octave — stays inside the ~220-990 Hz comfortable band documented
  // above, and covers the real use case (transposing chant into a comfortable
  // vocal range) without wandering into an unusable register.
  function setPitch(semitones) { if (semitones >= -12 && semitones <= 12) pitchShift = semitones; }

  function setVolume(v) { if (v >= 0 && v <= 1) volume = v; }

  function isPlaying() { return playing; }

  // A DOM-free description of the whole chant's timing/pitch, one entry per
  // step, in the same order/duration math tick() uses (via stepSeconds()) so
  // an offline audio bounce or a frame-stepping video page can walk it without
  // ever touching the live scheduler or the SVG.
  function buildTimeline() {
    var t = 0;
    return steps.map(function (step) {
      var dur = stepSeconds(step);
      var entry = {
        t: t, dur: dur, rest: !!step.rest,
        pitchNum: step.rest ? null : step.pitchNum,
        freq: step.rest ? null : numberToFreq(step.pitchNum),
        groupIndex: step.groupIndex, noteIndex: step.noteIndex
      };
      t += dur;
      return entry;
    });
  }

  // Set (or clear) the on-screen highlight to a specific step index directly,
  // without advancing the scheduler or playing audio — for a frame-stepper
  // that needs a highlight state to screenshot.
  function setHighlightAt(index) {
    var step = (index >= 0 && index < steps.length) ? steps[index] : null;
    if (step) highlight(step); else clearHighlight();
  }

  // Total duration of the loaded chant, in seconds — same math as the last
  // buildTimeline() entry's t + dur, without needing to build the whole array.
  function totalDuration() {
    var total = 0;
    steps.forEach(function (step) { total += stepSeconds(step); });
    return total;
  }

  return {
    load: load,
    play: play,
    playFrom: playFrom,
    pause: pause,
    toggle: toggle,
    stop: stop,
    setTempo: setTempo,
    DEFAULT_BPM: DEFAULT_BPM,
    setPitch: setPitch,
    DEFAULT_PITCH: DEFAULT_PITCH,
    setVolume: setVolume,
    DEFAULT_VOLUME: DEFAULT_VOLUME,
    resumeContext: resumeContext,
    isPlaying: isPlaying,
    buildTimeline: buildTimeline,
    voice: voice,
    setHighlightAt: setHighlightAt,
    totalDuration: totalDuration,
    RELEASE_MS: RELEASE_MS,
    notationGroups: notationGroups
  };
})();
