"use strict";

/* ===========================================================================
   Cantus & Chronicle
   Picks a random chant from the vendored Chant-of-the-Day repertoire, renders it
   in Exsurge square notation, plays it (playback.js / window.ChantPlayback), and
   shows its Latin + English. See ROADMAP.md for the phased plan.
   =========================================================================== */

/* ---- Elements ------------------------------------------------------------ */

const scoreEl = document.getElementById("score");
const playBtn = document.getElementById("play-btn");
const playNote = document.getElementById("play-note");
const titleEl = document.getElementById("chant-title");
const modeEl = document.getElementById("chant-mode");
const latinEl = document.getElementById("chant-latin");
const translationEl = document.getElementById("chant-translation");
const usagesEl = document.getElementById("chant-usages");
const relatedEl = document.getElementById("chant-related");
const commentarySection = document.getElementById("chant-commentary-section");
const commentaryText = document.getElementById("chant-commentary-text");
const commentarySourceEl = document.getElementById("chant-commentary-source");
const sourceNote = document.getElementById("source-note");
const randomBtn = document.getElementById("random-btn");
const backBtn = document.getElementById("back-btn");

/* ---- Layout constants (carried from Chant of the Day) -------------------- */

const CHANT_SCALE = 1.2;      // px per Exsurge layout unit
const MIN_LAYOUT_WIDTH = 220; // floor so very narrow panels still lay out

/* ---- Build the chant list ------------------------------------------------
   Walk the six data globals into one flat list, deduped by chant identity so a
   chant reused on many feasts (e.g. Annunciation reuses the Advent "rorate")
   appears once. Identity = GregoBase id from `source`, gabc-hash as fallback. */

function gabcHash(gabc) {
  let h = 0;
  for (let i = 0; i < gabc.length; i++) {
    h = (h * 31 + gabc.charCodeAt(i)) | 0;
  }
  return "h" + (h >>> 0).toString(36);
}

function chantIdentity(entry) {
  const m = /#(\d+)/.exec(entry.source || "");
  return m ? "gb" + m[1] : gabcHash(entry.gabc || "");
}

// Introit-shaped tables map feastKey -> entry. Proper-shaped tables map
// feastKey -> { part -> entry }. Collect every entry that carries a gabc.
function collectChants() {
  const byId = new Map();

  function add(entry) {
    if (!entry || typeof entry.gabc !== "string" || !entry.gabc.trim()) return;
    const id = chantIdentity(entry);
    if (!byId.has(id)) byId.set(id, Object.assign({ id }, entry));
  }

  function walkIntroits(table) {
    if (!table) return;
    Object.keys(table).forEach((k) => add(table[k]));
  }
  function walkPropers(table) {
    if (!table) return;
    Object.keys(table).forEach((k) => {
      const parts = table[k];
      if (parts && typeof parts === "object") Object.keys(parts).forEach((p) => add(parts[p]));
    });
  }

  walkIntroits(window.INTROITS);
  walkIntroits(window.INTROITS_1962);
  walkIntroits(window.COMMON_INTROITS);
  walkPropers(window.PROPERS);
  walkPropers(window.PROPERS_1962);
  walkPropers(window.COMMON_PROPERS);

  return Array.from(byId.values());
}

/* ---- Exsurge workarounds (verbatim from Chant of the Day — see ROADMAP
   "Standing constraints"; do not remove) ----------------------------------- */

// Force ragged-right layout; default full-justify strands the custos at the margin.
if (window.exsurge && window.exsurge.ChantLine) {
  window.exsurge.ChantLine.prototype.justifyElements = function () {};
}

// The minified bundle references AccidentalType as a free global; re-export it.
if (typeof window.AccidentalType === "undefined") {
  window.AccidentalType = { Flat: -1, Natural: 0, Sharp: 1 };
}

// Strip a mid-chant courtesy custos ("f+::c4") that crashes Exsurge's parser and
// renders a blank staff; keep the bar + new clef.
function sanitizeGabc(gabc) {
  return gabc.replace(/[a-m]\+(?=::)/g, "");
}

// Fix NaN neume heights before layoutChantLines derives line heights.
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

/* ---- Build the renderable chant list ------------------------------------
   A few chants in the repertoire carry gabc that the minified Exsurge build can't
   parse (e.g. a GregoBase spacing hint it mistakes for a custos → "Custod is not
   defined"). Chant of the Day surfaces one chant per day so it rarely meets these;
   the explorer picks at random from all ~500, so pre-flight parse each and drop the
   handful that throw, keeping "Another chant" from ever landing on a dead render.
   Runs after the workarounds above so accidental-bearing chants validate correctly. */

function isRenderable(gabc) {
  try {
    const ctxt = new window.exsurge.ChantContext();
    const score = window.exsurge.Gabc.loadChantScore(ctxt, sanitizeGabc(gabc), true);
    // The fatal cases (e.g. "Custod is not defined") throw here, synchronously,
    // not at parse — so performLayout is the check that actually catches them.
    score.performLayout(ctxt, function () {});
    return true;
  } catch (_) {
    return false;
  }
}

const CHANTS = (function () {
  const all = collectChants();
  // Exsurge logs freely to console.log during layout ("no glyphCode assigned!"),
  // which the validation pass multiplies across the whole repertoire. Mute it for
  // the duration so a clean console is left for real diagnostics.
  const realLog = console.log;
  console.log = function () {};
  let ok;
  try {
    ok = all.filter((c) => isRenderable(c.gabc));
  } finally {
    console.log = realLog;
  }
  const dropped = all.length - ok.length;
  if (dropped > 0) console.info("Cantus & Chronicle: skipped " + dropped + " unparseable chant(s) of " + all.length + ".");
  return ok;
})();

// O(1) id -> entry lookup for chip/deep-link navigation. Note this only covers
// renderable chants (CHANTS already dropped unparseable ones above), so a related
// chip whose target id isn't here must no-op rather than throw.
const chantsById = new Map(CHANTS.map((c) => [c.id, c]));

/* ---- Rendering (Exsurge) ------------------------------------------------- */

// Renders the gabc into #score. Layout is async; the finished score + svg are
// handed back through onReady(score, svg) once the SVG is in the DOM, so playback
// can drive audio + the follow-along highlight off the same score object.
function renderChant(gabc, onReady) {
  scoreEl.innerHTML = "";
  try {
    gabc = sanitizeGabc(gabc);
    const ctxt = new window.exsurge.ChantContext();
    const score = window.exsurge.Gabc.loadChantScore(ctxt, gabc, true);
    // Lay the score out to the panel width. Guard against an implausibly small
    // clientWidth (0 or a sub-pixel transient before the parchment card has been
    // laid out): that would collapse layoutWidth to the floor and cram/overlap the
    // first line. A real narrow phone is still well above 200px, so fall back to a
    // sensible default only when the reading is clearly pre-layout.
    let containerPx = scoreEl.clientWidth;
    if (!containerPx || containerPx < 200) containerPx = 660;
    const layoutWidth = Math.max(MIN_LAYOUT_WIDTH, containerPx / CHANT_SCALE);
    score.performLayout(ctxt, function () {
      repairNotationBounds(score);
      score.layoutChantLines(ctxt, layoutWidth, function () {
        scoreEl.innerHTML = score.createDrawable(ctxt);
        const svg = scoreEl.querySelector("svg");
        if (svg) {
          const PAD = 4;
          const bb = svg.getBBox();
          const vbW = bb.width + PAD * 2;
          const vbH = bb.height + PAD * 2;
          svg.setAttribute("viewBox", (bb.x - PAD) + " " + (bb.y - PAD) + " " + vbW + " " + vbH);
          svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svg.removeAttribute("height");
          svg.setAttribute("width", Math.round(vbW * CHANT_SCALE));
        }
        if (onReady) onReady(score, svg);
      });
    });
  } catch (err) {
    console.error("Exsurge render failed:", err);
    scoreEl.textContent = "Couldn't render this chant's notation.";
    if (onReady) onReady(null, null);
  }
}

function renderText(entry) {
  titleEl.textContent = entry.title || "";
  modeEl.textContent = entry.mode || "";
  latinEl.textContent = entry.latin || "";
  translationEl.textContent = entry.translation || "";
  sourceNote.textContent = entry.source ? "Source: " + entry.source : "";
}

/* ---- Reverse index ("Used in the liturgy on:") ---------------------------
   data/chant-index.js (window.CHANT_INDEX, built by tools/build-index.py --
   see ROADMAP.md "Phase 2") maps each chant's id to every feast/day it's
   sung on. Render that list under the chant text; if the chant somehow has
   no recorded usages (shouldn't normally happen), render nothing at all
   rather than an empty header. */

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function renderUsages(entry) {
  usagesEl.innerHTML = "";
  const indexed = window.CHANT_INDEX && window.CHANT_INDEX[entry.id];
  const usages = indexed && Array.isArray(indexed.usages) ? indexed.usages : [];
  if (usages.length === 0) return;

  const heading = document.createElement("p");
  heading.className = "usages-heading";
  heading.textContent = "Used in the liturgy on:";
  usagesEl.appendChild(heading);

  const list = document.createElement("ul");
  list.className = "usages-list";

  const sorted = usages.slice().sort(function (a, b) {
    if (a.calendar !== b.calendar) return a.calendar === "modern" ? -1 : 1;
    return (a.feastTitle || "").localeCompare(b.feastTitle || "");
  });

  sorted.forEach(function (u) {
    const li = document.createElement("li");
    li.className = "usage-item";

    const badge = document.createElement("span");
    badge.className = "usage-badge " + (u.calendar === "1962" ? "usage-badge-1962" : "usage-badge-modern");
    badge.textContent = u.calendar === "1962" ? "1962" : "Modern";
    li.appendChild(badge);

    const text = document.createElement("span");
    text.className = "usage-text";
    let label = u.feastTitle || u.feastKey;
    if (u.rank) label += " (" + u.rank + ")";
    // "introit" is the default/implicit part -- only call out the others.
    if (u.part && u.part !== "introit") label += " – " + capitalize(u.part);
    text.textContent = label;
    li.appendChild(text);

    list.appendChild(li);
  });

  usagesEl.appendChild(list);
}

/* ---- Cross-navigation ("Other chants on this feast") ---------------------
   For each of this chant's usages, find the other chants sung on that same
   feast (same calendar + feastKey, a different part) by scanning CHANT_INDEX.
   ~1,545 usage rows total -- cheap enough to scan at render time; no need to
   bake this into tools/build-index.py. See ROADMAP.md "Phase 3". */

function relatedByUsage(entry) {
  const indexed = window.CHANT_INDEX && window.CHANT_INDEX[entry.id];
  const usages = indexed && Array.isArray(indexed.usages) ? indexed.usages : [];
  const groups = [];

  usages.forEach(function (usage) {
    const seen = new Set();
    const related = [];
    Object.keys(window.CHANT_INDEX).forEach(function (id) {
      if (id === entry.id) return;
      const candidate = window.CHANT_INDEX[id];
      const match = (candidate.usages || []).find(function (u) {
        return u.calendar === usage.calendar && u.feastKey === usage.feastKey && u.part !== usage.part;
      });
      if (!match || seen.has(id)) return;
      seen.add(id);
      related.push({ id: id, part: match.part, title: candidate.title });
    });
    if (related.length > 0) {
      groups.push({ feastTitle: usage.feastTitle || usage.feastKey, related: related });
    }
  });

  return groups;
}

function renderRelated(entry) {
  relatedEl.innerHTML = "";
  const groups = relatedByUsage(entry);
  if (groups.length === 0) return;

  const heading = document.createElement("p");
  heading.className = "usages-heading";
  heading.textContent = "Other chants on this feast:";
  relatedEl.appendChild(heading);

  groups.forEach(function (group) {
    const row = document.createElement("div");
    row.className = "related-group";

    const feastLabel = document.createElement("span");
    feastLabel.className = "related-feast";
    feastLabel.textContent = group.feastTitle + ":";
    row.appendChild(feastLabel);

    group.related.forEach(function (r) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "related-chip";
      // A related chant can be indexed but dropped from CHANTS as unparseable
      // by Exsurge -- disable rather than link to a dead render.
      if (!chantsById.has(r.id)) {
        chip.disabled = true;
      } else {
        chip.addEventListener("click", function () { loadChant(r.id); });
      }
      chip.textContent = capitalize(r.part) + (r.title ? " – " + r.title : "");
      row.appendChild(chip);
    });

    relatedEl.appendChild(row);
  });
}

/* ---- Optional commentary ("About this chant") -----------------------------
   data/commentary.js (window.COMMENTARY, seeded from Chant of the Day's
   authored blurbs by tools/build-commentary.py, folded into chant-index.js by
   tools/build-index.py -- see ROADMAP.md "Phase 4") gives some chants a
   {text, source} note. Hidden entirely when a chant has none. */

function renderCommentary(entry) {
  const indexed = window.CHANT_INDEX && window.CHANT_INDEX[entry.id];
  const commentary = indexed && indexed.commentary;
  if (!commentary || !commentary.text) {
    commentarySection.hidden = true;
    commentaryText.textContent = "";
    commentarySourceEl.textContent = "";
    return;
  }
  commentarySection.hidden = false;
  commentaryText.textContent = commentary.text;
  if (commentary.source) {
    commentarySourceEl.hidden = false;
    commentarySourceEl.textContent = "Source: " + commentary.source;
  } else {
    commentarySourceEl.hidden = true;
    commentarySourceEl.textContent = "";
  }
}

/* ---- Playback (playback.js: synth + follow-along highlight) -------------- */

const PLAY_LABEL = "▶ Hear it";
const PAUSE_LABEL = "⏸ Pause";

function onPlaybackStatus(text) {
  playNote.textContent = text || "";
  playBtn.textContent = window.ChantPlayback.isPlaying() ? PAUSE_LABEL : PLAY_LABEL;
}

// renderChant's onReady: hand the freshly rendered score to the engine.
function prepareAudio(score, svg) {
  const playable = window.ChantPlayback.load(score, svg, onPlaybackStatus, null);
  playBtn.textContent = PLAY_LABEL;
  playBtn.disabled = !playable;
}

async function onPlayClick() {
  // Unlock/resume the AudioContext inside the click gesture (autoplay policy).
  try { await window.ChantPlayback.resumeContext(); } catch (_) { /* ignore */ }
  window.ChantPlayback.toggle();
}

/* ---- Navigation: random pick, chip/deep-link loads, back-stack -----------
   showChant() is the one place that renders a chant onto the page; random
   pick, "Other chants on this feast" chips, deep links, and browser back/
   forward all funnel through it (or loadChant(), which wraps it with history
   bookkeeping) so they can't drift out of sync. See ROADMAP.md "Phase 3". */

let currentId = null;
const backStack = [];

function showChant(entry) {
  currentId = entry.id;
  window.ChantPlayback.stop();
  playBtn.disabled = true;
  playBtn.textContent = PLAY_LABEL;
  playNote.textContent = "";
  renderText(entry);
  renderUsages(entry);
  renderRelated(entry);
  renderCommentary(entry);
  renderChant(entry.gabc, prepareAudio);
  backBtn.hidden = backStack.length === 0;
}

function pickRandom() {
  if (CHANTS.length === 0) return;
  let entry;
  do {
    entry = CHANTS[Math.floor(Math.random() * CHANTS.length)];
  } while (CHANTS.length > 1 && entry.id === currentId);
  backStack.length = 0;
  showChant(entry);
  history.pushState({ id: entry.id }, "", location.pathname);
}

// Chip clicks + deep-link resolution funnel here. `push` is false when
// replaying browser back/forward (popstate already moved the history entry).
function loadChant(id, push) {
  const entry = chantsById.get(id);
  if (!entry) return; // dropped as unparseable -- no-op rather than break
  if (push !== false && currentId) backStack.push(currentId);
  showChant(entry);
  if (push !== false) history.pushState({ id: entry.id }, "", "?chant=" + entry.id);
}

function goBack() {
  const prevId = backStack.pop();
  if (!prevId) return;
  const entry = chantsById.get(prevId);
  if (!entry) return;
  showChant(entry);
  history.pushState({ id: entry.id }, "", "?chant=" + entry.id);
}

window.addEventListener("popstate", function (event) {
  const id = event.state && event.state.id;
  if (!id) return;
  const idx = backStack.indexOf(id);
  if (idx !== -1) backStack.length = idx; // trim the stack to match
  const entry = chantsById.get(id);
  if (entry) showChant(entry);
});

/* ---- Deep links: ?chant=<gregobaseId> / ?feast=<key>; random otherwise --- */

function resolveInitialChant() {
  const params = new URLSearchParams(location.search);
  const chantParam = params.get("chant");
  if (chantParam) {
    // Accept either the full id ("gb1") or the bare GregoBase number ("1").
    const entry = chantsById.get(chantParam) || chantsById.get("gb" + chantParam);
    if (entry) return entry;
  }
  const feastParam = params.get("feast");
  if (feastParam) {
    const entry = CHANTS.find(function (c) {
      const indexed = window.CHANT_INDEX && window.CHANT_INDEX[c.id];
      return indexed && (indexed.usages || []).some(function (u) { return u.feastKey === feastParam; });
    });
    if (entry) return entry;
  }
  return null;
}

/* ---- Events + boot ------------------------------------------------------- */

playBtn.addEventListener("click", onPlayClick);
randomBtn.addEventListener("click", pickRandom);
backBtn.addEventListener("click", goBack);

if (CHANTS.length === 0) {
  scoreEl.textContent = "No chant data loaded.";
  playBtn.disabled = true;
  randomBtn.disabled = true;
} else {
  const initial = resolveInitialChant();
  if (initial) {
    showChant(initial);
    history.replaceState({ id: initial.id }, "", "?chant=" + initial.id);
  } else {
    pickRandom();
  }
}
