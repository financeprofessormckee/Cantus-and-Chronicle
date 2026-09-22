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
 *     <g class="ChantNotationElement"> whose children include the note glyph AND
 *     its lyric <text>. Highlighting that group therefore lights the note and its
 *     syllable together. The groups line up 1:1 with score.notations once the
 *     auto-inserted clef (start of each line) and custos (end of each line, glyph
 *     "Custod…") groups are filtered out — verified across the whole corpus.
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
  var VOLUME = 0.33;      // peak gain per note (monophonic, so no summing worries)

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
  function pitchToNumber(p) { return p.step + 12 * p.octave; }
  function numberToFreq(m) { return 440 * Math.pow(2, (m - REF_M) / 12); }

  /* ---- Module state ------------------------------------------------------- */
  var audioCtx = null;
  var periodicWave = null;
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
  function getAudioCtx() {
    if (!audioCtx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      audioCtx = new AC();
      periodicWave = audioCtx.createPeriodicWave(
        new Float32Array(PARTIALS_REAL), new Float32Array(PARTIALS_IMAG));
    }
    return audioCtx;
  }

  // Voice one note now, for lenSec seconds. Envelope mirrors jgabc: ramp up over
  // ATTACK, hold, then ease down over RELEASE (setTargetAtTime time-constants are
  // the ms/3000 jgabc uses).
  function voice(freq, lenSec) {
    var ctx = audioCtx;
    if (!ctx) return;
    var now = ctx.currentTime;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.setPeriodicWave(periodicWave);
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, now);
    gain.gain.setTargetAtTime(VOLUME, now, ATTACK_MS / 3000);
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

  function clearHighlight() {
    if (activeGroup) { activeGroup.classList.remove("chant-active"); activeGroup = null; }
  }

  function highlight(group) {
    if (group === activeGroup) return;
    clearHighlight();
    if (group) { group.classList.add("chant-active"); activeGroup = group; }
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
        out.push({ rest: true, beats: REST_BEATS, group: null });
        lastNoteStep = null;
        return;
      }

      sounding.forEach(function (n) {
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

        var step = { rest: false, freq: numberToFreq(pitchToNumber(n.pitch)), beats: beats, group: group };
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

  function tick() {
    // Bail if the score was re-rendered (date/part change) underneath us.
    if (!svgEl || !svgEl.isConnected) { finish(); return; }
    if (cursor >= steps.length) { finish(); return; }

    var step = steps[cursor++];
    var secs = quarterSec() * step.beats;
    if (step.rest) {
      clearHighlight();
    } else {
      highlight(step.group);
      voice(step.freq, secs);
    }
    timer = setTimeout(tick, secs * 1000);
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
    return steps.length > 0;   // false => nothing playable (caller disables the button)
  }

  function play() {
    if (playing || !steps.length) return;
    if (!getAudioCtx()) { if (statusCb) statusCb("Audio isn't supported in this browser."); return; }
    playing = true;
    if (cursor >= steps.length) cursor = 0;
    if (statusCb) statusCb("playing");
    tick();
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

  function isPlaying() { return playing; }

  return {
    load: load,
    play: play,
    pause: pause,
    toggle: toggle,
    stop: stop,
    setTempo: setTempo,
    resumeContext: resumeContext,
    isPlaying: isPlaying
  };
})();
