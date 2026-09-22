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
const tempoSlider = document.getElementById("tempo-slider");
const tempoValue = document.getElementById("tempo-value");
const pitchSlider = document.getElementById("pitch-slider");
const pitchValue = document.getElementById("pitch-value");
const volumeSlider = document.getElementById("volume-slider");
const volumeValue = document.getElementById("volume-value");
const verseToggle = document.getElementById("verse-toggle");
const verseBlock = document.getElementById("verse-block");
const verseLatinEl = document.getElementById("verse-latin");
const verseTranslationEl = document.getElementById("verse-translation");
const gloriaPatriLabel = document.getElementById("gloria-patri-label");
const gloriaPatriLatinEl = document.getElementById("gloria-patri-latin");
const gloriaPatriTranslationEl = document.getElementById("gloria-patri-translation");

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

/* ---- The chant list -------------------------------------------------------
   A few chants carry gabc the minified Exsurge build can't parse or lay out.
   Don't pre-flight them at boot: parsing costs ~150 ms per chant, so checking all
   ~500 froze the page for seconds (Chant of the Day only ever parses one).
   Instead the renderer reports failures and showChant skips/flags them lazily.
   Rendering itself -- the Exsurge workarounds, gabc sanitizing and the neume
   repair -- is Chant of the Day's chant-render.js (window.ChantRender), shared
   verbatim so the two apps can't drift apart again. */

const CHANTS = collectChants();

// O(1) id -> entry lookup for chip/deep-link navigation. An id missing here
// (not in the repertoire) must no-op rather than throw.
const chantsById = new Map(CHANTS.map((c) => [c.id, c]));

function renderText(entry) {
  titleEl.textContent = entry.title || "";
  modeEl.textContent = entry.mode || "";
  latinEl.textContent = entry.latin || "";
  translationEl.textContent = entry.translation || "";
  sourceNote.textContent = entry.source ? "Source: " + entry.source : "";
  renderVerseBlock(entry);
}

/* ---- Psalm verse + Gloria Patri (Introits with a `fullGabc`) --------------
   Ported from Chant of the Day. The doxology's text is invariant across every
   Introit, so it lives once here rather than in each data entry. */

const GLORIA_PATRI = {
  latin: "Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in saécula saeculórum. Amen.",
  translation: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen."
};

// Whether the psalm-verse toggle is on (see applyVerseToggle).
let verseOn = false;

// Shows the psalm verse (+ Gloria Patri, when the entry's own gabc carries
// it -- Passiontide and Requiem Introits traditionally omit it) beneath the
// antiphon text, only when the toggle is on and the entry has one.
function renderVerseBlock(entry) {
  if (!verseOn || !entry || !entry.verse || !entry.fullGabc) {
    verseBlock.hidden = true;
    return;
  }
  verseBlock.hidden = false;
  verseLatinEl.textContent = entry.verse.latin || "";
  verseTranslationEl.textContent = entry.verse.translation || "";
  const gloria = !!entry.verse.gloriaPatri;
  gloriaPatriLabel.hidden = !gloria;
  gloriaPatriLatinEl.hidden = !gloria;
  gloriaPatriTranslationEl.hidden = !gloria;
  gloriaPatriLatinEl.textContent = gloria ? GLORIA_PATRI.latin : "";
  gloriaPatriTranslationEl.textContent = gloria ? GLORIA_PATRI.translation : "";
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
      // A related chant can be indexed but missing from CHANTS (no gabc) --
      // disable rather than link to a dead render.
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

// renderChantInto's onReady: hand the freshly rendered score to the engine.
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
// Chants whose layout crashed this session; random picks skip them.
const badIds = new Set();

// `random` marks a random pick: if it can't render, quietly swap in another
// (replacing its history entry) instead of showing the failure message.
function showChant(entry, random) {
  currentId = entry.id;
  window.ChantPlayback.stop();
  playBtn.disabled = true;
  playBtn.textContent = PLAY_LABEL;
  playNote.textContent = "";
  renderText(entry);
  renderUsages(entry);
  renderRelated(entry);
  renderCommentary(entry);
  verseToggle.disabled = !entry.fullGabc;
  const gabc = verseOn && entry.fullGabc ? entry.fullGabc : entry.gabc;
  window.ChantRender.renderChantInto(scoreEl, gabc, prepareAudio, function () {
    badIds.add(entry.id);
    if (random) pickRandom(true);
  });
  backBtn.hidden = backStack.length === 0;
}

// `replace` swaps the current history entry (used when replacing a random
// pick that failed to render) rather than pushing a new one.
function pickRandom(replace) {
  const pool = CHANTS.filter(function (c) { return !badIds.has(c.id) && c.id !== currentId; });
  if (pool.length === 0) return;
  const entry = pool[Math.floor(Math.random() * pool.length)];
  backStack.length = 0;
  showChant(entry, true);
  if (replace === true) history.replaceState({ id: entry.id }, "", location.pathname);
  else history.pushState({ id: entry.id }, "", location.pathname);
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

/* ---- Tempo / pitch / volume (ported from Chant of the Day) ---------------
   Each is live module state inside playback.js that survives load()/stop(),
   so these just set it once at boot and again on every slider move. The
   localStorage keys match Chant of the Day's; each site has its own origin. */

function applyTempo(bpm) {
  const min = Number(tempoSlider.min), max = Number(tempoSlider.max);
  bpm = Math.min(max, Math.max(min, bpm));
  window.ChantPlayback.setTempo(bpm);
  tempoSlider.value = bpm;
  tempoValue.textContent = bpm + " bpm";
  try { localStorage.setItem("chant-tempo", bpm); } catch (_) { /* private mode */ }
}

function readTempo() {
  let saved = null;
  try { saved = Number(localStorage.getItem("chant-tempo")); } catch (_) { /* private mode */ }
  return saved && saved > 0 ? saved : window.ChantPlayback.DEFAULT_BPM;
}

function applyPitch(semitones) {
  const min = Number(pitchSlider.min), max = Number(pitchSlider.max);
  semitones = Math.min(max, Math.max(min, semitones));
  window.ChantPlayback.setPitch(semitones);
  pitchSlider.value = semitones;
  pitchValue.textContent = (semitones > 0 ? "+" : "") + semitones + " st";
  try { localStorage.setItem("chant-pitch", semitones); } catch (_) { /* private mode */ }
}

function readPitch() {
  let saved = null;
  try { saved = localStorage.getItem("chant-pitch"); } catch (_) { /* private mode */ }
  saved = saved === null ? NaN : Number(saved);
  return Number.isFinite(saved) ? saved : window.ChantPlayback.DEFAULT_PITCH;
}

// Slider is a 0-100 percentage; playback.js's setVolume takes a 0-1 fraction.
function applyVolume(percent) {
  const min = Number(volumeSlider.min), max = Number(volumeSlider.max);
  percent = Math.min(max, Math.max(min, percent));
  window.ChantPlayback.setVolume(percent / 100);
  volumeSlider.value = percent;
  volumeValue.textContent = percent + "%";
  try { localStorage.setItem("chant-volume", percent); } catch (_) { /* private mode */ }
}

function readVolume() {
  let saved = null;
  try { saved = localStorage.getItem("chant-volume"); } catch (_) { /* private mode */ }
  saved = saved === null ? NaN : Number(saved);
  return Number.isFinite(saved) ? saved : Math.round(window.ChantPlayback.DEFAULT_VOLUME * 100);
}

/* ---- Psalm verse toggle ---------------------------------------------------
   Unlike the sliders, this changes which score renders, so applying it
   re-renders the chant on screen. Default off. */

function applyVerseToggle(on, silent) {
  verseOn = !!on;
  verseToggle.checked = verseOn;
  try { localStorage.setItem("chant-verse", verseOn ? "1" : "0"); } catch (_) { /* private mode */ }
  const entry = currentId && chantsById.get(currentId);
  if (!silent && entry) showChant(entry);
}

function readVerseToggle() {
  let saved = null;
  try { saved = localStorage.getItem("chant-verse"); } catch (_) { /* private mode */ }
  return saved === "1";
}

/* ---- Events + boot ------------------------------------------------------- */

tempoSlider.addEventListener("input", () => applyTempo(Number(tempoSlider.value)));
pitchSlider.addEventListener("input", () => applyPitch(Number(pitchSlider.value)));
volumeSlider.addEventListener("input", () => applyVolume(Number(volumeSlider.value)));
verseToggle.addEventListener("change", () => applyVerseToggle(verseToggle.checked));
applyTempo(readTempo());
applyPitch(readPitch());
applyVolume(readVolume());
applyVerseToggle(readVerseToggle(), true);

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
