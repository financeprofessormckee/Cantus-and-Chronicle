// Shared Exsurge chant-notation renderer. Extracted from app.js (Phase 10) so
// that both the live app (app.js) and the private video pipeline (video.js)
// share one rendering path with one set of Exsurge workarounds, rather than
// forking them. This file is public (ported to the deploy repo alongside
// app.js/playback.js) since nothing in it is video-specific.
//
// Must load after vendor/exsurge.min.js and before anything that calls
// window.ChantRender.renderChantInto — the two patches below run at load
// time against window.exsurge.

(function () {
  // Target on-screen size of one Exsurge layout unit, in CSS pixels. Exsurge's
  // native units are small (a staff line-space is ~6 units), so at the container's
  // pixel width it would pack a whole antiphon onto one line and the notes would be
  // an illegible smear. We hand Exsurge a layout width in *its* units
  // (container px / SCALE) so it wraps lines at a readable density, then map units
  // back to px at this scale — keeping note size constant as the screen changes.
  const CHANT_SCALE = 1.2;
  // Floor on the layout width (Exsurge units): if a line is narrower than a single
  // neume, Exsurge's line-fill loop never advances and the page hangs. This keeps
  // very narrow screens safe.
  const MIN_LAYOUT_WIDTH = 220;

  // Exsurge sometimes leaves a neume's aggregate bounds.height as NaN even though
  // its own notes measured fine. That single NaN poisons everything downstream:
  // the line's height, the lyric baseline (lyricVerticalOffset), and the vertical
  // stacking of wrapped lines — so the lyrics land on top of the notes and every
  // line after the first collapses to y=0. Rebuild any bad height from the notes
  // before layoutChantLines consumes it.
  function repairNotationBounds(score) {
    score.notations.forEach(function (n) {
      if (isFinite(n.bounds.height)) return;
      var top = Infinity, bottom = -Infinity;
      (n.notes || []).forEach(function (note) {
        if (isFinite(note.bounds.y)) {
          top = Math.min(top, note.bounds.y);
          bottom = Math.max(bottom, note.bounds.y + (note.bounds.height || 0));
        }
      });
      if (isFinite(top) && isFinite(bottom)) {
        if (!isFinite(n.bounds.y)) n.bounds.y = top;
        n.bounds.height = bottom - top;
      } else {
        n.bounds.height = 0;
      }
    });
  }

  // Exsurge fully justifies every non-final chant line by default, spreading the
  // leftover width across its divisiones. On short lines that slack collapses into
  // large blank gaps with the custos stranded at the right margin. Render
  // ragged-right (the Graduale's natural look) by neutralizing justification — the
  // sole justification entry point is ChantLine.justifyElements.
  if (window.exsurge && window.exsurge.ChantLine) {
    window.exsurge.ChantLine.prototype.justifyElements = function () {};
  }

  // Exsurge's minified bundle defines its AccidentalType enum in one module scope
  // but references it as a free (global) name in convertGabcStaffPositionToScribamPitch,
  // so any chant whose pitches force an accidental decision throws "AccidentalType
  // is not defined" and fails to render (e.g. the Lenten tracts and a couple of
  // Ordinary-Time introits). Re-export the enum globally with Exsurge's own values
  // so that lookup resolves.
  if (typeof window.AccidentalType === "undefined") {
    window.AccidentalType = { Flat: -1, Natural: 0, Sharp: 1 };
  }

  // Same class of bug, one function over: Accidental.adjustStep -- the function
  // that actually performs the Ti->Te / Mi->Me (flat), Do->Du / Fa->Fu (sharp)
  // and inverse (natural) substitutions -- reads the bare global `Step`. It was
  // unreachable until the patch below, and would throw "Step is not defined" the
  // moment it became reachable. Values are Exsurge's own Step enum (a 0..11
  // chromatic degree; 8 is unused).
  if (typeof window.Step === "undefined") {
    window.Step = { Do: 0, Du: 1, Re: 2, Me: 3, Mi: 4, Fa: 5, Fu: 6, So: 7, La: 9, Te: 10, Ti: 11 };
  }

  // Exsurge DRAWS every accidental correctly but never SOUNDS one. Its
  // Accidental.applyToPitch is gated on `this.octave == t.octave`, and the
  // Accidental constructor -- (staffPosition, accidentalType) -- never assigns
  // `octave`, so the test is `undefined == <number>`: always false, adjustStep
  // never runs, and all 1800-odd accidentals in the corpus (e.g. the "ix" B-flats
  // running through Christ the King's "Potestas eius" Alleluia) sing as naturals.
  // playback.js reads pitch straight off score.notations[].notes[].pitch, so this
  // is the only place to fix it.
  //
  // Drop the octave test rather than repair it: adjustStep already keys on the
  // step (pitch class), a chant's ambitus is about a ninth, and "flatten this
  // pitch class for the rest of the word" is what a flat on the one B line of a
  // c4 chant means in practice.
  //
  // Not patched, deliberately: the cb3/cb4 clef-signature flat is broken the same
  // way (DoClef.staffPositionToPitch compares defaultAccidental.step, but
  // Accidental only ever sets staffPosition). No chant in data/ uses those clefs.
  if (window.exsurge && window.exsurge.Accidental) {
    window.exsurge.Accidental.prototype.applyToPitch = function (pitch) {
      pitch.step = this.adjustStep(pitch.step);
    };
  }

  // With accidentals audible, Exsurge's *scoping* of them starts to matter, and
  // it is off by one syllable. A GABC accidental holds until the end of its word
  // or the next divisio. Exsurge resets at bars correctly (the bar classes carry
  // resetsAccidentals), but its word reset lives in parseChantNotations and fires
  // AFTER createNotations has already converted that syllable's notes:
  //
  //     var g = this.createNotations(t, i, y, s);   // notes converted here
  //     ...
  //     (BeginningSyllable || SingleSyllable) && s.activeClef.resetAccidentals();
  //
  // Two consequences, measured over data/*.js: an accidental still active at the
  // end of a word bleeds into the next word's first syllable (68 note-events), and
  // an accidental written IN a word's first syllable is wiped before the rest of
  // that word is converted (92 note-events).
  //
  // Fix by wrapping createNotations rather than reimplementing parseChantNotations,
  // which also contains an unrelated broken test we must not disturb (it compares
  // constructor.name against "Accidental", which no minified class matches).
  // renderChantInto hands us one flag per syllable-match, in Exsurge's own parse
  // order; we reset before each word's first call, and undo Exsurge's late reset
  // for the calls that follow it. If the flags run out or don't line up, every
  // call delegates untouched and behavior falls back to Exsurge's own scoping.
  var wordStartFlags = null;   // boolean per createNotations call, or null to disable
  var flagCursor = 0;
  var prevWasWordStart = false;
  var carriedAccidental = null;

  // Exsurge's own tokenization, mirrored exactly so our flag list stays in
  // lockstep with its createNotations calls: words are whitespace-separated, and
  // each word is split into syllable matches by this regex (one call per match,
  // including the matches that yield no notations).
  var SYLLABLE_RE = /(?=.)((?:[^(])*)(?:\(?([^)]*)\)?)?/g;
  function wordStartFlagsFor(gabc) {
    var flags = [];
    var words = gabc.match(/\S+/g) || [];
    for (var w = 0; w < words.length; w++) {
      var word = words[w];
      if (word === "") continue;
      word = word.trim();
      SYLLABLE_RE.lastIndex = 0;
      var first = true, m, guard = 0;
      while ((m = SYLLABLE_RE.exec(word)) !== null) {
        flags.push(first);
        first = false;
        if (++guard > 4096) return null;   // regex stalled; disable rather than hang
      }
    }
    return flags;
  }

  if (window.exsurge && window.exsurge.Gabc && window.exsurge.Gabc.createNotations) {
    var origCreateNotations = window.exsurge.Gabc.createNotations;
    window.exsurge.Gabc.createNotations = function (ctxt, score, text, state) {
      var clef = state ? state.activeClef : null;
      var isWordStart = false;
      if (wordStartFlags && flagCursor < wordStartFlags.length) {
        isWordStart = wordStartFlags[flagCursor++];
        if (clef) {
          if (isWordStart) {
            clef.resetAccidentals();
          } else if (prevWasWordStart && carriedAccidental && clef.activeAccidental == null) {
            // Exsurge's late reset just cleared an accidental the previous
            // (word-initial) syllable set. Put it back for the rest of the word.
            clef.activeAccidental = carriedAccidental;
          }
        }
      } else if (wordStartFlags) {
        wordStartFlags = null;   // count mismatch: stop steering this render
      }
      var out = origCreateNotations.call(this, ctxt, score, text, state);
      // The clef can be created by this very call, so re-read it.
      var afterClef = state ? state.activeClef : null;
      carriedAccidental = afterClef ? afterClef.activeAccidental : null;
      prevWasWordStart = isWordStart;
      return out;
    };
  }

  // A manual custos sitting on a mid-chant clef change — the "(f+::c4)" token a
  // Gradual/Alleluia uses where its verse switches clef — breaks Exsurge two ways:
  // its parser does `new Custod` as an unbound free name ("Custod is not defined"),
  // and even past that its performLayout stalls on the glyph-less custos and the
  // score renders blank. The custos is only a courtesy guide note, so strip it and
  // keep the bar + new clef ("(::c4)"). Without this, St. Fabian & Sebastian's
  // "Gloriosus Deus" Gradual (and a couple of 1962 chants) render as an empty staff.
  //
  // A note-shape "optional height" print-engraving hint with a millimeter offset —
  // "[oh:h+2.87mm]" — hits the same `new Custod` crash for an unrelated reason:
  // Exsurge's tokenizer treats any token whose 2nd character is "+" as a custos
  // marker, and the "+2.87mm" inside the bracket qualifies. This bracket is a pure
  // print-kerning hint (it never encodes a pitch), so it's safe to drop outright —
  // unlike the custos above, there's no "keep the rest" step needed. Without this,
  // Lent 3's "Exsurge Domine" Gradual (both calendars) fails to render at all.
  // A liquescent "~" on an UPPERCASE (descending) note -- "F~", "E~" -- leaves
  // that note's bounds entirely NaN (x, y, width AND height), unlike the
  // height-only NaN repairNotationBounds handles above, so there's nothing
  // finite left to rebuild the geometry from. The NaN width then propagates
  // into the NEXT notation's x, and Exsurge's line-fill loop breaks the line
  // around the poisoned elements: Christ the King's "Postula a me" Offertory
  // rendered "Gen-" and "tes" as two near-empty lines of their own, which is
  // what the Phase 11.5 pilot review called "broken measures". Isolated to
  // uppercase + "~" specifically -- lowercase "f~" is fine, and the same neume
  // without the tildes is fine. The optional "'" matters: the 1962 Epiphany-2
  // Alleluia writes "egF'~D~", and a narrower rule matching only "D~" left its
  // "F'~" still poisoning a line -- a corpus sweep caught that straggler after
  // the first version had cleared everything else.
  //
  // Dropping the tilde costs only the diminutive (smaller) note head that marks
  // a descending liquescent; the note itself still renders, at the same pitch,
  // and the note COUNT is unchanged -- verified on that Offertory, which keeps
  // all 69 notations and 136 sounding notes either way, so playback timing, the
  // audio bounce and the highlight's group/note indices are untouched.
  function sanitizeGabc(gabc) {
    return gabc.replace(/[a-m]\+(?=::)/g, "")
      .replace(/\[oh:[^\]]*\+[^\]]*\]/g, "")
      .replace(/([A-M]'?)~/g, "$1");
  }

  // The synchronous part of Exsurge's ChantScore.performLayout.
  function layoutPreamble(ctxt, score) {
    score.startingClef.performLayout(ctxt);
    if (score.dropCap) score.dropCap.recalculateMetrics(ctxt);
    if (score.annotation) score.annotation.recalculateMetrics(ctxt);
  }

  // Drop-in for score.performLayout (+ its compileElement loop) that can fail.
  // Exsurge lays notations out in setTimeout chunks, so a crash there is uncaught
  // and its callback never fires -- a permanently blank score with nothing to
  // catch. Same preamble, same ~50 ms chunking, but errors reach onFail.
  function layoutScore(ctxt, score, onDone, onFail) {
    try {
      layoutPreamble(ctxt, score);
    } catch (err) {
      onFail(err);
      return;
    }
    var notations = score.notations;
    var i = 0;
    (function step() {
      try {
        if (i === 0) notations.forEach(function (n) { n.hasLyric(); });
        var deadline = Date.now() + 50;
        while (i < notations.length && Date.now() < deadline) {
          notations[i++].performLayout(ctxt);
        }
      } catch (err) {
        onFail(err);
        return;
      }
      if (i < notations.length) {
        setTimeout(step, 0);
      } else {
        score.compiled = true;
        onDone();
      }
    })();
  }

  // Exsurge's neume recognizer dies on some long compound neumes -- "fgwhgh",
  // "dewfef", "fg'hfg'h", "ihhfg" -- with "Cannot read properties of null (reading
  // 'setStaffPosition')": it groups the notes into a shape it assigns no glyph.
  // The trigger is the pitch contour, not any one modifier, so no sanitize regex
  // catches the class. Repair (only after a render has failed, so healthy chants
  // pay nothing): test each (…) group on its own, and split any that crash at a
  // note boundary with "!" (a space-less neume break), preferring one split. Every
  // pitch and modifier is kept and the note count is unchanged, so playback timing
  // and highlight indices are untouched; only that neume's ligature shape changes.
  // Seven Cantus & Chronicle chants hit this, e.g. GregoBase 8297 "Laudate Dominum".
  function groupLaysOut(clef, grp) {
    try {
      var ctxt = new window.exsurge.ChantContext();
      var score = window.exsurge.Gabc.loadChantScore(ctxt, "(" + clef + ") a(" + grp + ")", true);
      layoutPreamble(ctxt, score);
      score.notations.forEach(function (n) { n.hasLyric(); n.performLayout(ctxt); });
      return true;
    } catch (_) {
      return false;
    }
  }

  // Offsets of each pitch letter in a group, skipping [..] hints ("[ull:0]").
  function noteStarts(grp) {
    var starts = [], depth = 0;
    for (var i = 0; i < grp.length; i++) {
      var ch = grp[i];
      if (ch === "[") depth++;
      else if (ch === "]") depth--;
      else if (!depth && /[a-mA-M]/.test(ch)) starts.push(i);
    }
    return starts;
  }

  function splitGroup(clef, grp, depth) {
    if (groupLaysOut(clef, grp)) return grp;
    if (depth > 6) return null;
    var cuts = noteStarts(grp).slice(1).filter(function (p) { return "/!".indexOf(grp[p - 1]) === -1; });
    for (var k = 0; k < cuts.length; k++) {   // one split, if any suffices
      var a = grp.slice(0, cuts[k]), b = grp.slice(cuts[k]);
      if (groupLaysOut(clef, a) && groupLaysOut(clef, b)) return a + "!" + b;
    }
    for (var j = 0; j < cuts.length; j++) {   // else recurse
      var left = splitGroup(clef, grp.slice(0, cuts[j]), depth + 1);
      if (left === null) continue;
      var right = splitGroup(clef, grp.slice(cuts[j]), depth + 1);
      if (right !== null) return left + "!" + right;
    }
    return null;
  }

  function splitCrashingNeumes(gabc) {
    var clef = "c4";
    var realLog = console.log;
    console.log = function () {};   // Exsurge chatters "no glyphCode assigned!"
    try {
      return gabc.replace(/\(([^)]*)\)/g, function (whole, grp) {
        var c = grp.match(/(?:^|[^a-z])([cf]b?[1-4])(?![0-9])/);
        if (c) { clef = c[1]; return whole; }
        if (!/[a-mA-M]/.test(grp) || groupLaysOut(clef, grp)) return whole;
        var fixed = splitGroup(clef, grp, 0);
        return fixed === null ? whole : "(" + fixed + ")";
      });
    } finally {
      console.log = realLog;
    }
  }

  // Renders the gabc into targetEl. Exsurge's layout is async (it fires callbacks),
  // so the finished score + svg are handed back through onReady(score, svg) once
  // the SVG is in the DOM — playback.js drives audio and the follow-along highlight
  // off that same score object, so the two can never drift. app.js's live view
  // renders into #score, its print preview renders each proper into its own
  // container, and video.js renders into its own score-track element — all three
  // share this one layout path.
  //
  // If the chant can't be rendered (even after splitCrashingNeumes), targetEl
  // shows a message and onFail(err) is called if given, else onReady(null, null).
  // A render superseded by a newer one into the same element is dropped silently.
  function renderChantInto(targetEl, gabc, onReady, onFail) {
    var token = (targetEl._chantRenderToken || 0) + 1;
    targetEl._chantRenderToken = token;
    var current = function () { return targetEl._chantRenderToken === token; };
    var fail = function (err) {
      if (!current()) return;
      console.error("Exsurge render failed:", err);
      targetEl.textContent = "Couldn't render this chant's notation.";
      if (onFail) onFail(err);
      else if (onReady) onReady(null, null);
    };
    var sanitized;
    try {
      sanitized = sanitizeGabc(gabc);
    } catch (err) {
      fail(err);
      return;
    }
    attemptRender(targetEl, sanitized, onReady, current, function (err) {
      if (!current()) return;
      var repaired = splitCrashingNeumes(sanitized);
      if (repaired === sanitized) { fail(err); return; }
      attemptRender(targetEl, repaired, onReady, current, fail);
    });
  }

  function attemptRender(targetEl, gabc, onReady, current, onError) {
    targetEl.innerHTML = "";
    try {
      const ctxt = new window.exsurge.ChantContext();
      // Accidental scoping (see the createNotations wrapper above): the flags are
      // derived from the SANITIZED gabc, since that's the string Exsurge parses.
      // Parsing is synchronous inside loadChantScore, so the flags only need to be
      // live across that one call.
      let score;
      wordStartFlags = wordStartFlagsFor(gabc);
      flagCursor = 0;
      prevWasWordStart = false;
      carriedAccidental = null;
      try {
        score = window.exsurge.Gabc.loadChantScore(ctxt, gabc, true);
      } finally {
        wordStartFlags = null;
      }
      const containerPx = targetEl.clientWidth || 660;
      const layoutWidth = Math.max(MIN_LAYOUT_WIDTH, containerPx / CHANT_SCALE);
      layoutScore(ctxt, score, function () {
        if (!current()) return;
        // Layout has now set every notation's bounds; fix the NaN ones
        // before layoutChantLines derives line heights and the lyric baseline.
        let svg;
        try {
          repairNotationBounds(score);
          score.layoutChantLines(ctxt, layoutWidth, function () {});
          targetEl.innerHTML = score.createDrawable(ctxt);
          svg = targetEl.querySelector("svg");
          if (svg) fitViewBox(svg);
        } catch (err) {
          onError(err);
          return;
        }
        // Outside the try: an exception in the caller's onReady isn't a render failure.
        if (onReady) onReady(score, svg);
      }, onError);
    } catch (err) {
      onError(err);
    }
  }

  function fitViewBox(svg) {
    // Exsurge emits width/height but no viewBox. Derive a viewBox from the
    // content that actually rendered (getBBox also captures the drop-cap,
    // which spills left of x=0) so the score scales uniformly.
    const PAD = 4;
    const bb = svg.getBBox();
    if (!bb.width || !bb.height) {
      // getBBox() measures nothing inside a display:none subtree, and
      // writing the degenerate viewBox that falls out of it ("-4 -4 8
      // 8") silently scales a few units of the score across the whole
      // container -- which reads as a blank/garbled score rather than
      // as an error. Leave Exsurge's own width/height alone and say so.
      console.warn("ChantRender: score measured 0x0 (is the container display:none?); " +
        "skipping the viewBox rewrite");
      return;
    }
    const vbW = bb.width + PAD * 2;
    const vbH = bb.height + PAD * 2;
    svg.setAttribute("viewBox", (bb.x - PAD) + " " + (bb.y - PAD) + " " + vbW + " " + vbH);
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.removeAttribute("height");
    // Render at CHANT_SCALE px per unit; CSS max-width:100% reins it in on
    // screens narrower than that, and height:auto keeps the ratio.
    svg.setAttribute("width", Math.round(vbW * CHANT_SCALE));
  }

  window.ChantRender = {
    renderChantInto: renderChantInto,
    sanitizeGabc: sanitizeGabc
  };
})();
