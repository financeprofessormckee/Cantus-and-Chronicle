"use strict";

/*
 * calendar-1962.js — a resolver for the 1962 Missal (Extraordinary Form) temporal
 * cycle, a sibling to calendar.js. It exposes window.RESOLVE_DAY_1962 with the same
 * output contract as the modern RESOLVE_DAY, so app.js can swap calendars by pointing
 * window.RESOLVE_DAY at one or the other — nothing else in the app changes.
 *
 * Two deliberate differences from the modern resolver:
 *   - No lectionary `cycle`. The 1962 propers repeat every year (a one-year cycle),
 *     so the cycle letter the modern Ordinary-Time Sundays carry is simply omitted;
 *     app.js's resolveKeyFor already no-ops when `cycle` is undefined.
 *   - An extra `seasonLabel`. The 1962 seasons (Septuagesima, Time after Epiphany,
 *     Time after Pentecost, Passiontide…) don't map onto the five season *words*
 *     styles.css themes by. So `season` stays one of advent|christmas|lent|easter|
 *     ordinary (purely for the body theme + color), while `seasonLabel` carries the
 *     human season name for the day-card pill. The modern resolver sets no
 *     seasonLabel, so its pill is unchanged.
 *
 * V1 scope (mirrors the modern resolver's documented simplifications):
 *   - Temporal cycle Sundays + the marquee movable feasts, plus four fixed-date
 *     solemnities (Assumption, All Saints, All Souls, Immaculate Conception) that
 *     the modern calendar already authors with identical Graduale chant text — see
 *     the FIXED map below. The rest of the 1962 *sanctoral* (saints' days), octaves,
 *     commemorations, and impeded-feast transfers are out of scope — intentional
 *     gaps, not bugs.
 *   - Epiphany fixed to Jan 6; Ascension on Thursday; Corpus Christi on its Thursday;
 *     Christ the King on the last Sunday of October (the 1962 date).
 *
 * The KEYS it emits match data/introits-1962.js (window.INTROITS_1962).
 */

(function () {
  var DAY = 86400000;

  function ymd(y, m, d) { return new Date(Date.UTC(y, m - 1, d)); } // m is 1-based
  function addDays(date, n) { return new Date(date.getTime() + n * DAY); }
  function dow(date) { return date.getUTCDay(); } // 0 = Sunday
  function daysBetween(a, b) { return Math.round((b - a) / DAY); }
  function weeksBetween(a, b) { return Math.round((b - a) / DAY / 7); }
  function iso(date) {
    return (
      date.getUTCFullYear() + "-" +
      String(date.getUTCMonth() + 1).padStart(2, "0") + "-" +
      String(date.getUTCDate()).padStart(2, "0")
    );
  }
  function sameDay(a, b) { return iso(a) === iso(b); }
  function sundayOnOrBefore(date) { return addDays(date, -dow(date)); }
  function nextSunday(date) { // strictly after `date`
    var off = 7 - dow(date);
    return addDays(date, off === 0 ? 7 : off);
  }

  // Gregorian Easter — Meeus/Jones/Butcher algorithm (same as calendar.js).
  function easter(year) {
    var a = year % 19, b = Math.floor(year / 100), c = year % 100;
    var d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
    var g = Math.floor((b - f + 1) / 3);
    var h = (19 * a + b - d - g + 15) % 30;
    var i = Math.floor(c / 4), k = c % 4;
    var l = (32 + 2 * e + 2 * i - h - k) % 7;
    var mm = Math.floor((a + 11 * h + 22 * l) / 451);
    var month = Math.floor((h + l - 7 * mm + 114) / 31);
    var day = ((h + l - 7 * mm + 114) % 31) + 1;
    return ymd(year, month, day);
  }

  // Fixed-date sanctoral feasts for the 1962 Missal, keyed "M-D" -> record.
  // Mirrors calendar.js's SANCTORAL mechanism (calendar.js:139-170). The five
  // entries carried over from the V1 FIXED map (Assumption, Sorrows, All Saints,
  // All Souls, Immaculate Conception) share identical Graduale chant text with
  // the modern calendar; everything else is wired incrementally via the DO
  // Sancti-file method documented in sources/gregobase/1962-sanctoral-worklist.md.
  var SANCTORAL_1962 = {
    "1-20": { key: "fabian-sebastian", title: "Sts. Fabian and Sebastian, Martyrs", rank: "Duplex", color: "red" },
    "2-2": { key: "candlemas", title: "The Purification of the Blessed Virgin Mary (Candlemas)", rank: "Feast", color: "white" },
    "2-24": { key: "common-apostles", title: "St. Matthias, Apostle", rank: "Duplex II classis", color: "red" },
    "3-19": { key: "joseph", title: "St. Joseph, Spouse of the Blessed Virgin Mary", rank: "Duplex I classis", color: "white" },
    "3-25": { key: "annunciation", title: "The Annunciation of the Blessed Virgin Mary", rank: "Duplex I classis", color: "white" },
    "6-11": { key: "common-apostles", title: "St. Barnabas, Apostle", rank: "Duplex majus", color: "red" },
    "6-23": { key: "john-baptist-vigil", title: "The Nativity of St. John the Baptist (Vigil)", rank: "Duplex II classis", color: "violet" },
    "6-24": { key: "john-baptist", title: "The Nativity of St. John the Baptist", rank: "Duplex I classis", color: "white" },
    "6-28": { key: "peter-paul-vigil", title: "Sts. Peter and Paul, Apostles (Vigil)", rank: "Duplex II classis", color: "violet" },
    "6-29": { key: "peter-paul", title: "Sts. Peter and Paul, Apostles", rank: "Duplex I classis", color: "red" },
    "7-2": { key: "visitation", title: "The Visitation of the Blessed Virgin Mary", rank: "Duplex II classis", color: "white" },
    "7-25": { key: "common-apostles", title: "St. James, Apostle", rank: "Duplex II classis", color: "red" },
    "7-30": { key: "abdon-sennen", title: "Sts. Abdon and Sennen, Martyrs", rank: "Simplex", color: "red" },
    "8-6": { key: "transfiguration", title: "The Transfiguration of the Lord", rank: "Duplex II classis", color: "white" },
    "8-10": { key: "lawrence", title: "St. Lawrence, Deacon and Martyr", rank: "Duplex II classis", color: "red" },
    "8-14": { key: "assumption-vigil", title: "The Assumption of the Blessed Virgin Mary (Vigil)", rank: "Simplex", color: "violet" },
    "8-15": { key: "assumption", title: "The Assumption of the Blessed Virgin Mary", rank: "Solemnity" },
    "8-24": { key: "common-apostles", title: "St. Bartholomew, Apostle", rank: "Duplex II classis", color: "red" },
    "9-8": { key: "nativity-mary", title: "The Nativity of the Blessed Virgin Mary", rank: "Duplex II classis", color: "white" },
    "9-14": { key: "triumph-cross", title: "The Exaltation of the Holy Cross", rank: "Duplex II classis", color: "red" },
    "9-15": { key: "sorrows", title: "The Seven Sorrows of the Blessed Virgin Mary", rank: "Feast", color: "white" },
    "9-21": { key: "matthew", title: "St. Matthew, Apostle and Evangelist", rank: "Duplex II classis", color: "red" },
    "9-29": { key: "archangels", title: "Sts. Michael, Gabriel and Raphael, Archangels", rank: "Duplex I classis", color: "white" },
    "10-18": { key: "common-apostles", title: "St. Luke, Evangelist", rank: "Duplex II classis", color: "red" },
    "10-28": { key: "common-apostles", title: "Sts. Simon and Jude, Apostles", rank: "Duplex II classis", color: "red" },
    "11-1": { key: "all-saints", title: "All Saints", rank: "Solemnity" },
    "11-2": { key: "requiem", title: "The Commemoration of All the Faithful Departed (All Souls)",
      rank: "Feast", color: "violet" },
    "11-9": { key: "dedication-lateran", title: "The Dedication of the Archbasilica of Our Savior (St. John Lateran)",
      rank: "Duplex II classis", color: "white" },
    "11-18": { key: "dedication-lateran", title: "The Dedication of the Basilicas of Sts. Peter and Paul, Apostles",
      rank: "Duplex majus", color: "white" },
    "11-30": { key: "andrew", title: "St. Andrew, Apostle", rank: "Duplex II classis", color: "red" },
    "12-8": { key: "immaculate-conception", title: "The Immaculate Conception of the Blessed Virgin Mary",
      rank: "Solemnity" },
    "12-21": { key: "thomas-apostle", title: "St. Thomas, Apostle", rank: "Duplex II classis", color: "red" },
    "12-26": { key: "stephen", title: "St. Stephen, the First Martyr", rank: "Duplex II classis", color: "red" },
    "12-27": { key: "john-evangelist", title: "St. John, Apostle and Evangelist", rank: "Duplex II classis", color: "white" },
    "12-28": { key: "holy-innocents", title: "The Holy Innocents, Martyrs", rank: "Duplex II classis", color: "violet" }
  };
  function fixedFeast(date) {
    return SANCTORAL_1962[(date.getUTCMonth() + 1) + "-" + date.getUTCDate()] || null;
  }

  // "Lesser" 1962 saints — well-known feasts/commemorations with no Mass propers
  // of their own, so `key` points straight at a Common-of-Saints category (see
  // data/common-introits.js / data/common-propers.js), same mechanism as
  // calendar.js's LESSER table (calendar.js:172-197). Gated by `!isSun`
  // everywhere checked: a 1962 simplex/semiduplex/duplex feast never outranks a
  // Sunday Mass in this simplified model.
  var LESSER_1962 = {
    "1-14": { key: "common-confessor-doctor", title: "St. Hilary, Bishop, Confessor and Doctor of the Church", rank: "Duplex" },
    "1-22": { key: "common-several-martyrs", title: "Sts. Vincent and Anastasius, Martyrs", rank: "Semiduplex" },
    "1-29": { key: "common-confessor-doctor", title: "St. Francis de Sales, Bishop, Confessor and Doctor of the Church", rank: "Duplex" },
    "1-30": { key: "common-virgin-martyr", title: "St. Martina, Virgin and Martyr", rank: "Semiduplex" },
    "2-4": { key: "common-confessor-bishop", title: "St. Andrew Corsini, Bishop and Confessor", rank: "Duplex" },
    "2-8": { key: "common-confessor", title: "St. John of Matha, Confessor", rank: "Duplex" },
    "2-9": { key: "common-confessor-doctor", title: "St. Cyril of Alexandria, Bishop, Confessor and Doctor of the Church", rank: "Duplex" },
    "2-10": { key: "common-virgin", title: "St. Scholastica, Virgin", rank: "Duplex" },
    "3-4": { key: "common-confessor", title: "St. Casimir, Confessor", rank: "Semiduplex" },
    "3-7": { key: "common-confessor-doctor", title: "St. Thomas Aquinas, Confessor and Doctor of the Church", rank: "Duplex" },
    "3-8": { key: "common-confessor", title: "St. John of God, Confessor", rank: "Duplex" },
    "3-12": { key: "common-confessor-doctor", title: "St. Gregory the Great, Pope, Confessor and Doctor of the Church", rank: "Duplex" },
    "3-17": { key: "common-confessor-bishop", title: "St. Patrick, Bishop and Confessor", rank: "Duplex" },
    "3-18": { key: "common-confessor-doctor", title: "St. Cyril of Jerusalem, Bishop, Confessor and Doctor of the Church", rank: "Duplex" },
    "4-4": { key: "common-confessor-doctor", title: "St. Isidore, Bishop, Confessor and Doctor of the Church", rank: "Duplex" },
    "4-5": { key: "common-confessor", title: "St. Vincent Ferrer, Confessor", rank: "Duplex" },
    "4-21": { key: "common-confessor-doctor", title: "St. Anselm, Bishop, Confessor and Doctor of the Church", rank: "Duplex" },
    "4-27": { key: "common-confessor-doctor", title: "St. Peter Canisius, Confessor and Doctor of the Church", rank: "Duplex" },
    "4-30": { key: "common-virgin", title: "St. Catherine of Siena, Virgin", rank: "Duplex" },
    "5-9": { key: "common-confessor-doctor", title: "St. Gregory Nazianzen, Bishop, Confessor and Doctor of the Church", rank: "Duplex" },
    "5-10": { key: "common-confessor-bishop", title: "St. Antoninus, Bishop and Confessor", rank: "Duplex" },
    "5-16": { key: "common-confessor-bishop", title: "St. Ubaldus, Bishop and Confessor", rank: "Semiduplex" },
    "5-17": { key: "common-confessor", title: "St. Paschal Baylon, Confessor", rank: "Duplex" },
    "5-23": { key: "common-confessor", title: "St. John Baptist de Rossi, Confessor", rank: "Duplex" },
    "5-29": { key: "common-virgin", title: "St. Mary Magdalene de Pazzi, Virgin", rank: "Semiduplex" },
    "6-1": { key: "common-virgin", title: "St. Angela Merici, Virgin", rank: "Duplex" },
    "6-6": { key: "common-confessor-bishop", title: "St. Norbert, Bishop and Confessor", rank: "Duplex" },
    "6-13": { key: "common-confessor-doctor", title: "St. Anthony of Padua, Confessor and Doctor of the Church", rank: "Duplex" },
    "6-18": { key: "common-confessor-doctor", title: "St. Ephraem, Confessor and Doctor of the Church", rank: "Duplex" },
    "6-19": { key: "common-virgin", title: "St. Juliana Falconieri, Virgin", rank: "Duplex" },
    "7-29": { key: "common-virgin", title: "St. Martha, Virgin", rank: "Duplex" },
    "8-9": { key: "common-confessor", title: "St. John Mary Vianney, Confessor", rank: "Duplex" },
    "8-12": { key: "common-virgin", title: "St. Clare, Virgin", rank: "Duplex" },
    "8-17": { key: "common-confessor", title: "St. Hyacinth, Confessor", rank: "Duplex" },
    "8-19": { key: "common-confessor", title: "St. John Eudes, Confessor", rank: "Duplex" },
    "8-30": { key: "common-virgin", title: "St. Rose of Lima, Virgin", rank: "Duplex" },
    "8-31": { key: "common-confessor", title: "St. Raymond Nonnatus, Confessor", rank: "Duplex" },
    "10-6": { key: "common-confessor", title: "St. Bruno, Confessor", rank: "Duplex" },
    "10-13": { key: "common-confessor", title: "St. Edward the Confessor, King", rank: "Semiduplex" },
    "10-15": { key: "common-virgin", title: "St. Teresa of Ávila, Virgin", rank: "Duplex" },
    "11-10": { key: "common-confessor", title: "St. Andrew Avellino, Confessor", rank: "Duplex" },
    "11-11": { key: "common-confessor-bishop", title: "St. Martin of Tours, Bishop and Confessor", rank: "Duplex" },
    "11-16": { key: "common-virgin", title: "St. Gertrude, Virgin", rank: "Duplex" },
    "11-17": { key: "common-confessor-bishop", title: "St. Gregory Thaumaturgus, Bishop and Confessor", rank: "Duplex" },
    "11-22": { key: "common-virgin-martyr", title: "St. Cecilia, Virgin and Martyr", rank: "Duplex" },
    "11-24": { key: "common-confessor-doctor", title: "St. John of the Cross, Confessor and Doctor of the Church", rank: "Duplex" },
    "11-25": { key: "common-virgin-martyr", title: "St. Catherine of Alexandria, Virgin and Martyr", rank: "Duplex" },
    "12-7": { key: "common-confessor-doctor", title: "St. Ambrose, Bishop, Confessor and Doctor of the Church", rank: "Duplex" },
  };
  function lesserFeast(date) {
    return LESSER_1962[(date.getUTCMonth() + 1) + "-" + date.getUTCDate()] || null;
  }

  var ORDINAL = [
    "", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth",
    "Ninth", "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth",
    "Sixteenth", "Seventeenth", "Eighteenth", "Nineteenth", "Twentieth",
    "Twenty-first", "Twenty-second", "Twenty-third", "Twenty-fourth", "Twenty-fifth",
    "Twenty-sixth", "Twenty-seventh", "Twenty-eighth"
  ];
  function ordinal(n) { return ORDINAL[n] || (n + "th"); }
  var WEEKDAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Anchor dates for one civil year's worth of the 1962 calendar.
  function anchors(year) {
    var e = easter(year);
    var adventFour = sundayOnOrBefore(ymd(year, 12, 24));
    var adventOne = addDays(adventFour, -21);
    // Sunday within the Octave of the Nativity (Dec 26–31). If Christmas is itself a
    // Sunday there is no such Sunday, so its Mass moves to Dec 30.
    var sundayOctave = sundayOnOrBefore(ymd(year, 12, 31));
    if (sameDay(sundayOctave, ymd(year, 12, 25))) sundayOctave = ymd(year, 12, 30);
    // The Most Holy Name of Jesus: the Sunday falling Jan 2–5 (between the
    // Circumcision and the Epiphany). Some years no Sunday lands there.
    var holyName = nextSunday(ymd(year, 1, 1)); // first Sunday strictly after Jan 1
    if (daysBetween(ymd(year, 1, 1), holyName) > 4) holyName = null;
    return {
      year: year,
      easter: e,
      septuagesima: addDays(e, -63),
      sexagesima: addDays(e, -56),
      quinquagesima: addDays(e, -49),
      ashWednesday: addDays(e, -46),
      lentOne: nextSunday(addDays(e, -46)),  // first Sunday of Lent (Easter − 42)
      palmSunday: addDays(e, -7),
      easterSun: e,
      ascension: addDays(e, 39),            // Thursday
      sundayAfterAscension: addDays(e, 42),
      pentecost: addDays(e, 49),
      trinity: addDays(e, 56),
      corpusChristi: addDays(e, 60),        // Thursday after Trinity
      sacredHeart: addDays(e, 68),          // Friday after the octave of Corpus Christi
      epiphany: ymd(year, 1, 6),
      christmas: ymd(year, 12, 25),
      holyFamily: nextSunday(ymd(year, 1, 6)), // Sunday within the octave of Epiphany
      sundayOctaveNativity: sundayOctave,
      holyName: holyName,
      adventOne: adventOne,
      adventFour: adventFour,
      lastAfterPentecost: addDays(adventOne, -7),
      christKing: sundayOnOrBefore(ymd(year, 10, 31)) // last Sunday of October
    };
  }

  function resolve(input) {
    var date;
    if (input instanceof Date) {
      date = ymd(input.getFullYear(), input.getMonth() + 1, input.getDate());
    } else if (typeof input === "string") {
      var p = input.split("-");
      date = ymd(Number(p[0]), Number(p[1]), Number(p[2]));
    } else {
      var now = new Date();
      date = ymd(now.getFullYear(), now.getMonth() + 1, now.getDate());
    }

    var Y = date.getUTCFullYear();
    var A = anchors(Y);
    var isSun = dow(date) === 0;

    function out(o) {
      o.date = iso(date);
      o.isSunday = isSun;
      if (!o.rank) o.rank = isSun ? "Sunday" : "Feria";
      if (o.dayKey === undefined) o.dayKey = null;
      if (o.sundayKey === undefined) o.sundayKey = null;
      return o;
    }

    // ---- Fixed marquee feasts ----
    if (sameDay(date, A.christmas)) {
      return out({ title: "The Nativity of the Lord", season: "christmas", seasonLabel: "Christmastide",
        color: "white", rank: "Solemnity", dayKey: "puer-natus", seasonKey: "season-christmas",
        options: [{ label: "Midnight", key: "dominus-dixit" }, { label: "Dawn", key: "lux-fulgebit" },
          { label: "Day", key: "puer-natus" }] });
    }
    if (date.getUTCMonth() === 11 && date.getUTCDate() === 24) { // Dec 24
      return out({ title: "The Nativity of the Lord (Vigil)", season: "christmas", seasonLabel: "Advent",
        color: "white", rank: "Solemnity", dayKey: "christmas-vigil", seasonKey: "season-christmas" });
    }
    if (date.getUTCMonth() === 0 && date.getUTCDate() === 1) { // Jan 1
      return out({ title: "The Circumcision of the Lord", season: "christmas", seasonLabel: "Christmastide",
        color: "white", rank: "Solemnity", dayKey: "puer-natus", seasonKey: "season-christmas" });
    }
    if (sameDay(date, A.epiphany)) {
      return out({ title: "The Epiphany of the Lord", season: "christmas", seasonLabel: "Christmastide",
        color: "white", rank: "Solemnity", dayKey: "ecce-advenit", seasonKey: "season-christmas" });
    }

    // ---- Advent (Advent I .. Dec 23) ----
    if (date >= A.adventOne && date <= ymd(Y, 12, 24)) {
      var aw = 1 + weeksBetween(A.adventOne, sundayOnOrBefore(date));
      var akey = "ad-te-levavi", acolor = "violet";
      if (aw === 2) akey = "populus-sion";
      else if (aw === 3) { akey = "gaudete"; acolor = "rose"; }
      else if (aw === 4) akey = "rorate";
      // The Immaculate Conception (Dec 8) displaces an Advent weekday, but an
      // Advent Sunday outranks it (mirrors calendar.js's Advent/sanctoral rule).
      if (!isSun) {
        var adf = fixedFeast(date); if (adf) {
          return out({ title: adf.title, season: "advent", seasonLabel: "Advent",
            color: adf.color || "white", rank: adf.rank, dayKey: adf.key, seasonKey: "season-advent" });
        }
        var adl = lesserFeast(date); if (adl) {
          return out({ title: adl.title, season: "advent", seasonLabel: "Advent",
            color: adl.color || "white", rank: adl.rank, dayKey: adl.key, seasonKey: "season-advent" });
        }
      }
      return out({ title: ferial(aw, "of Advent", date, isSun), season: "advent", seasonLabel: "Advent",
        color: acolor, dayKey: isSun ? akey : null, sundayKey: akey, seasonKey: "season-advent" });
    }

    // ---- Christmastide (Dec 25 .. Jan 6); Jan 1 & Jan 6 handled above ----
    if (date >= A.christmas || date <= A.epiphany) {
      if (sameDay(date, A.sundayOctaveNativity)) {
        return out({ title: "Sunday within the Octave of the Nativity", season: "christmas",
          seasonLabel: "Christmastide", color: "white", rank: "Sunday",
          dayKey: "sunday-octave-nativity", seasonKey: "season-christmas" });
      }
      if (A.holyName && sameDay(date, A.holyName)) {
        return out({ title: "The Most Holy Name of Jesus", season: "christmas",
          seasonLabel: "Christmastide", color: "white", rank: "Feast",
          dayKey: "holy-name", seasonKey: "season-christmas" });
      }
      // Fixed feasts within Christmastide (Stephen/John/Innocents Dec 26-28,
      // Sylvester Dec 31, etc.) displace a Christmas-Time weekday, but a Sunday
      // (Holy Family or the Sunday within the Octave, already handled above)
      // outranks them (mirrors calendar.js:297).
      if (!isSun) {
        var cf = fixedFeast(date); if (cf) {
          return out({ title: cf.title, season: "christmas", seasonLabel: "Christmastide",
            color: cf.color || "white", rank: cf.rank, dayKey: cf.key, seasonKey: "season-christmas" });
        }
        var cl = lesserFeast(date); if (cl) {
          return out({ title: cl.title, season: "christmas", seasonLabel: "Christmastide",
            color: cl.color || "white", rank: cl.rank, dayKey: cl.key, seasonKey: "season-christmas" });
        }
      }
      return out({ title: "Christmastide", season: "christmas", seasonLabel: "Christmastide",
        color: "white", sundayKey: "puer-natus", seasonKey: "season-christmas" });
    }

    // ---- Time after Epiphany (Jan 7 .. Septuagesima eve) ----
    if (date > A.epiphany && date < A.septuagesima) {
      if (sameDay(date, A.holyFamily)) {
        return out({ title: "The Holy Family (First Sunday after Epiphany)", season: "ordinary",
          seasonLabel: "Time after Epiphany", color: "white", rank: "Feast",
          dayKey: "holy-family", seasonKey: "season-ordinary" });
      }
      var es = sundayOnOrBefore(date);
      var en = 1 + weeksBetween(A.holyFamily, es); // Holy Family is the 1st after Epiphany
      var ekey = en <= 2 ? "epiph-2" : "epiph-3"; // 2nd = Omnis terra; 3rd–6th = Adorate Deum
      if (!isSun) {
        var eef = fixedFeast(date); if (eef) {
          return out({ title: eef.title, season: "ordinary", seasonLabel: "Time after Epiphany",
            color: eef.color || "white", rank: eef.rank, dayKey: eef.key, seasonKey: "season-ordinary" });
        }
        var eel = lesserFeast(date); if (eel) {
          return out({ title: eel.title, season: "ordinary", seasonLabel: "Time after Epiphany",
            color: eel.color || "white", rank: eel.rank, dayKey: eel.key, seasonKey: "season-ordinary" });
        }
      }
      return out({ title: ferial(en, "Sunday after Epiphany", date, isSun, true), season: "ordinary",
        seasonLabel: "Time after Epiphany", color: "green",
        dayKey: isSun ? ekey : null, sundayKey: ekey, seasonKey: "season-ordinary" });
    }

    // ---- Septuagesima (pre-Lent, violet, 3 Sundays) ----
    if (date >= A.septuagesima && date < A.ashWednesday) {
      var skey, sname;
      if (date < A.sexagesima) { skey = "septuagesima"; sname = "Septuagesima"; }
      else if (date < A.quinquagesima) { skey = "sexagesima"; sname = "Sexagesima"; }
      else { skey = "quinquagesima"; sname = "Quinquagesima"; }
      if (!isSun) {
        var ssf = fixedFeast(date); if (ssf) {
          return out({ title: ssf.title, season: "lent", seasonLabel: "Septuagesima",
            color: ssf.color || "white", rank: ssf.rank, dayKey: ssf.key, seasonKey: "season-lent" });
        }
        var ssl = lesserFeast(date); if (ssl) {
          return out({ title: ssl.title, season: "lent", seasonLabel: "Septuagesima",
            color: ssl.color || "white", rank: ssl.rank, dayKey: ssl.key, seasonKey: "season-lent" });
        }
      }
      return out({ title: isSun ? sname + " Sunday" : WEEKDAY[dow(date)] + " after " + sname,
        season: "lent", seasonLabel: "Septuagesima", color: "violet",
        dayKey: isSun ? skey : null, sundayKey: skey, seasonKey: "season-lent" });
    }

    // ---- Lent & Passiontide (Ash Wednesday .. Holy Saturday) ----
    if (date >= A.ashWednesday && date < A.easterSun) {
      if (sameDay(date, A.ashWednesday)) {
        return out({ title: "Ash Wednesday", season: "lent", seasonLabel: "Lent", color: "violet",
          rank: "Feria", dayKey: "misereris", seasonKey: "season-lent" });
      }
      if (sameDay(date, addDays(A.easterSun, -3))) { // Holy Thursday
        // The evening Mass of the Lord's Supper opens the Sacred Triduum, so it is
        // no longer Lent proper (mirrors calendar.js's Holy Thursday handling).
        return out({ title: "Holy Thursday of the Lord's Supper", season: "easter",
          seasonLabel: "Passiontide", color: "white", rank: "Solemnity",
          dayKey: "nos-autem", seasonKey: "season-lent" });
      }
      if (date < A.lentOne) { // Thu–Sat after Ash Wednesday
        return out({ title: WEEKDAY[dow(date)] + " after Ash Wednesday", season: "lent",
          seasonLabel: "Lent", color: "violet", sundayKey: "misereris", seasonKey: "season-lent" });
      }
      // Fixed solemnities (Joseph Mar 19, Annunciation Mar 25) displace a Lenten
      // weekday, but a Sunday of Lent outranks them (mirrors calendar.js:318).
      if (!isSun) {
        var llfe = fixedFeast(date); if (llfe) {
          return out({ title: llfe.title, season: "lent", seasonLabel: "Lent",
            color: llfe.color || "white", rank: llfe.rank, dayKey: llfe.key, seasonKey: "season-lent" });
        }
        var lllf = lesserFeast(date); if (lllf) {
          return out({ title: lllf.title, season: "lent", seasonLabel: "Lent",
            color: lllf.color || "white", rank: lllf.rank, dayKey: lllf.key, seasonKey: "season-lent" });
        }
      }
      var ls = sundayOnOrBefore(date);
      var lw = 1 + weeksBetween(A.lentOne, ls); // Lent I = first Sunday of Lent
      var isPalm = sameDay(ls, A.palmSunday);
      var lkey, ltitle, lcolor = "violet", llabel = "Lent";
      if (isPalm) { lkey = "palm"; ltitle = "Palm Sunday"; llabel = "Passiontide"; }
      else if (lw === 5) { lkey = "passion"; ltitle = "Passion Sunday (First Sunday of the Passion)"; llabel = "Passiontide"; }
      else if (lw === 4) { lkey = "laetare"; ltitle = "Laetare Sunday (Fourth Sunday of Lent)"; lcolor = "rose"; }
      else { lkey = "lent-" + lw; ltitle = ordinal(lw) + " Sunday of Lent"; }
      if (!isSun) {
        ltitle = WEEKDAY[dow(date)] + " of the " + ordinal(lw) + " Week of Lent";
        if (lw >= 5) llabel = "Passiontide";
      }
      return out({ title: ltitle, season: "lent", seasonLabel: llabel, color: lcolor,
        dayKey: isSun ? lkey : null, sundayKey: lkey, seasonKey: "season-lent" });
    }

    // ---- Eastertide (Easter .. Pentecost) ----
    if (date >= A.easterSun && date <= A.pentecost) {
      if (sameDay(date, A.easterSun)) {
        return out({ title: "Easter Sunday of the Resurrection", season: "easter", seasonLabel: "Eastertide",
          color: "white", rank: "Solemnity", dayKey: "resurrexi", seasonKey: "season-easter" });
      }
      if (sameDay(date, A.pentecost)) {
        return out({ title: "Pentecost Sunday", season: "easter", seasonLabel: "Eastertide",
          color: "red", rank: "Solemnity", dayKey: "spiritus-domini", seasonKey: "season-easter" });
      }
      if (sameDay(date, A.ascension)) {
        return out({ title: "The Ascension of the Lord", season: "easter", seasonLabel: "Eastertide",
          color: "white", rank: "Solemnity", dayKey: "viri-galilaei", seasonKey: "season-easter" });
      }
      if (sameDay(date, A.sundayAfterAscension)) {
        return out({ title: "Sunday after the Ascension", season: "easter", seasonLabel: "Eastertide",
          color: "white", rank: "Sunday", dayKey: "sunday-after-ascension", seasonKey: "season-easter" });
      }
      // The Annunciation (Mar 25) can land in Eastertide on a weekday (mirrors
      // calendar.js:365-368).
      if (!isSun) {
        var eafe = fixedFeast(date); if (eafe) {
          return out({ title: eafe.title, season: "easter", seasonLabel: "Eastertide",
            color: eafe.color || "white", rank: eafe.rank, dayKey: eafe.key, seasonKey: "season-easter" });
        }
        var ealf = lesserFeast(date); if (ealf) {
          return out({ title: ealf.title, season: "easter", seasonLabel: "Eastertide",
            color: ealf.color || "white", rank: ealf.rank, dayKey: ealf.key, seasonKey: "season-easter" });
        }
      }
      // Eastertide Sundays/ferias by week index from Easter.
      var ew = weeksBetween(A.easterSun, sundayOnOrBefore(date));
      var EASTER_SUN = ["resurrexi", "quasimodo", "easter-misericordia", "easter-jubilate",
        "easter-cantate", "easter-vocem"];
      var EASTER_TITLE = ["Easter", "Low Sunday (Quasimodo)", "Second Sunday after Easter",
        "Third Sunday after Easter", "Fourth Sunday after Easter", "Fifth Sunday after Easter"];
      var ekey2 = EASTER_SUN[ew] || "resurrexi";
      var etitle = isSun ? (EASTER_TITLE[ew] || "Eastertide")
        : WEEKDAY[dow(date)] + (ew === 0 ? " in the Octave of Easter" : " after " + (EASTER_TITLE[ew] || "Easter"));
      return out({ title: etitle, season: "easter", seasonLabel: "Eastertide", color: "white",
        dayKey: isSun ? ekey2 : null, sundayKey: ekey2, seasonKey: "season-easter" });
    }

    // ---- Time after Pentecost (after Pentecost .. Advent I eve) ----
    if (sameDay(date, A.trinity)) {
      return out({ title: "Trinity Sunday", season: "ordinary", seasonLabel: "Time after Pentecost",
        color: "white", rank: "Solemnity", dayKey: "trinity", seasonKey: "season-ordinary" });
    }
    if (sameDay(date, A.corpusChristi)) {
      return out({ title: "Corpus Christi", season: "ordinary", seasonLabel: "Time after Pentecost",
        color: "white", rank: "Feast", dayKey: "cibavit", seasonKey: "season-ordinary" });
    }
    if (sameDay(date, A.sacredHeart)) {
      return out({ title: "The Most Sacred Heart of Jesus", season: "ordinary",
        seasonLabel: "Time after Pentecost", color: "white", rank: "Feast",
        dayKey: "sacred-heart", seasonKey: "season-ordinary" });
    }
    if (sameDay(date, A.christKing)) {
      return out({ title: "The Kingship of Our Lord Jesus Christ (Christ the King)", season: "ordinary",
        seasonLabel: "Time after Pentecost", color: "white", rank: "Solemnity",
        dayKey: "christ-king", seasonKey: "season-ordinary" });
    }
    // The Assumption, All Saints, and All Souls outrank the green Sunday after
    // Pentecost they fall on, as well as every weekday (mirrors calendar.js's
    // Ordinary-Time sanctoral-precedence rule).
    var pfe = fixedFeast(date);
    if (pfe) {
      return out({ title: pfe.title, season: "ordinary", seasonLabel: "Time after Pentecost",
        color: pfe.color || "white", rank: pfe.rank, dayKey: pfe.key, seasonKey: "season-ordinary" });
    }
    // Unlike the fixed feasts above, a lesser feast never outranks a Sunday
    // after Pentecost — gate this one on `!isSun` (mirrors calendar.js:403-405).
    if (!isSun) {
      var pl = lesserFeast(date);
      if (pl) {
        return out({ title: pl.title, season: "ordinary", seasonLabel: "Time after Pentecost",
          color: pl.color || "white", rank: pl.rank, dayKey: pl.key, seasonKey: "season-ordinary" });
      }
    }

    // Numbered Sundays after Pentecost (and resumed Sundays after Epiphany).
    var gs = sundayOnOrBefore(date);
    var w = weeksBetween(A.pentecost, gs);   // Pentecost = 0, Trinity = 1, …
    var key, title, label = "Time after Pentecost";
    if (sameDay(gs, A.lastAfterPentecost)) {
      key = "pent-23"; // the Last Sunday repeats the 23rd Sunday's introit (Dicit Dominus)
      title = "Last Sunday after Pentecost";
    } else if (w <= 23) {
      key = "pent-" + w;
      title = ordinal(w) + " Sunday after Pentecost";
    } else {
      // Resumed Sundays after Epiphany fill weeks 24 .. (last − 1); the one nearest
      // the Last Sunday takes the Sixth Sunday after Epiphany, counting down. Those
      // Sundays (3rd–6th) all share the "Adorate Deum" introit; the 2nd is "Omnis terra".
      var lastW = weeksBetween(A.pentecost, A.lastAfterPentecost);
      var ei = 6 - (lastW - 1 - w);
      if (ei < 2) ei = 2;
      key = ei <= 2 ? "epiph-2" : "epiph-3";
      title = "Resumed " + ordinal(ei) + " Sunday after Epiphany";
    }
    if (!isSun) {
      title = WEEKDAY[dow(date)] + " after the " + (w === 1 ? "First Sunday" : ordinal(w) + " Sunday") + " after Pentecost";
    }
    return out({ title: title, season: "ordinary", seasonLabel: label, color: "green",
      dayKey: isSun ? key : null, sundayKey: key, seasonKey: "season-ordinary" });

    // ---- helpers ----
    function ferial(weekNo, seasonWord, d, isSunday, sundayWord) {
      if (isSunday) {
        return sundayWord ? ordinal(weekNo) + " " + seasonWord
          : ordinal(weekNo) + " Sunday " + seasonWord;
      }
      return WEEKDAY[dow(d)] + " of the " + ordinal(weekNo) + " Week " +
        (sundayWord ? "after Epiphany" : seasonWord);
    }
  }

  window.RESOLVE_DAY_1962 = resolve;
})();
