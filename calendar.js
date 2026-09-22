"use strict";

/*
 * calendar.js — a tiny, pure-JS resolver for the modern General Roman Calendar.
 *
 * PLAN.md originally proposed precomputing a calendar with `romcal` at build
 * time, but this machine has no Node toolchain, so the calendar is computed in
 * the browser instead. Everything sits behind one function, `RESOLVE_DAY`, so a
 * romcal-generated lookup table or a 1962-Missal backend can replace the guts
 * later without touching the rest of the app.
 *
 *   window.RESOLVE_DAY(date) -> {
 *     date,        // "YYYY-MM-DD"
 *     title,       // human label, e.g. "11th Sunday in Ordinary Time"
 *     season,      // advent | christmas | ordinary | lent | easter
 *     color,       // violet | white | green | rose | red | black
 *     rank,        // Solemnity | Feast | Sunday | Feria
 *     isSunday,
 *     dayKey,      // proper-of-the-day key (named feasts + Sundays), or null
 *     sundayKey,   // key of the Sunday governing this week (for ferial fallback)
 *     seasonKey    // season-level fallback key
 *   }
 *
 * The KEYS it emits (e.g. "rorate", "laetare", "ot-11") are the same keys used
 * in data/introits.js. The resolver itself knows nothing about which introits
 * are authored — app.js does the lookup + fallback against INTROITS.
 *
 * V1 simplifications (documented so the gaps are intentional, not bugs):
 *   - Epiphany is fixed to Jan 6 (not transferred to a Sunday).
 *   - Ascension stays on Thursday; Corpus Christi is the Sunday (US usage).
 *
 * Sanctoral precedence (the fixed feasts the Diocese of La Crosse lists):
 *   Fixed/sanctoral feasts override Ordinary-Time Sundays and every ferial day.
 *   They do NOT override the Sundays of Advent, Lent, or Easter, the Triduum, or
 *   the marquee movable solemnities. When a feast is impeded by one of those it is
 *   simply not shown — there is no automatic transferral (a documented V2 gap). A
 *   couple of days carry more than one Mass on the same date (Christmas: Midnight /
 *   Dawn / Day; the Assumption: two options); those expose an `options` array and
 *   the app lets the reader switch between them.
 */

(function () {
  var DAY = 86400000;

  // Build dates in UTC so day arithmetic never trips over daylight saving.
  function ymd(y, m, d) { return new Date(Date.UTC(y, m - 1, d)); } // m is 1-based
  function addDays(date, n) { return new Date(date.getTime() + n * DAY); }
  function dow(date) { return date.getUTCDay(); } // 0 = Sunday
  function daysBetween(a, b) { return Math.round((b - a) / DAY); }
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

  // Gregorian Easter — Meeus/Jones/Butcher algorithm.
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

  // Anchor dates for one civil year's worth of the calendar.
  function anchors(year) {
    var e = easter(year);
    var adventFour = sundayOnOrBefore(ymd(year, 12, 24)); // last Sun <= Dec 24
    var adventOne = addDays(adventFour, -21);
    // Holy Family: the Sunday within the Christmas octave (Dec 26-31). If Christmas
    // itself is a Sunday, that octave Sunday would be Christmas, so it moves to Dec 30.
    var holyFamily = sundayOnOrBefore(ymd(year, 12, 31));
    if (sameDay(holyFamily, ymd(year, 12, 25))) holyFamily = ymd(year, 12, 30);
    return {
      year: year,
      easter: e,
      ashWednesday: addDays(e, -46),
      palmSunday: addDays(e, -7),
      pentecost: addDays(e, 49),
      trinity: addDays(e, 56),
      corpusChristi: addDays(e, 63),     // Sunday after Trinity (US usage)
      epiphany: ymd(year, 1, 6),
      baptism: nextSunday(ymd(year, 1, 6)), // Sunday after Epiphany
      christmas: ymd(year, 12, 25),
      holyFamily: holyFamily,
      adventOne: adventOne,
      adventFour: adventFour,
      christTheKing: addDays(adventOne, -7)
    };
  }

  // Ordinary Time Sunday number, anchored on Christ the King = 34th Sunday.
  function otNumberAfterPentecost(sunday, A) {
    return 34 - daysBetween(sunday, A.christTheKing) / 7;
  }
  // Early OT (Baptism .. Ash Wednesday): the Sunday after Baptism is OT II.
  function otNumberBeforeLent(sunday, A) {
    var secondSunday = nextSunday(A.baptism);
    return 2 + daysBetween(secondSunday, sunday) / 7;
  }

  var ORDINAL = [
    "", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th",
    "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th",
    "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th",
    "29th", "30th", "31st", "32nd", "33rd", "34th"
  ];
  var WEEKDAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Sunday lectionary cycle (A/B/C) for a date in Ordinary Time. The cycle is keyed
  // to the civil year the liturgical year ends in, which for OT dates is the date's
  // own year: A when year % 3 == 1, B == 2, C == 0 (e.g. 2025 -> C, 2026 -> A).
  function lectionaryYear(date) {
    var r = date.getUTCFullYear() % 3;
    return r === 1 ? "A" : r === 2 ? "B" : "C";
  }

  function ferialTitle(weekNo, seasonWord, date) {
    if (dow(date) === 0) return ORDINAL[weekNo] + " Sunday " + seasonWord;
    return WEEKDAY[dow(date)] + " of the " + ORDINAL[weekNo] + " Week " + seasonWord;
  }

  // Fixed-date feasts (month-day), keyed to the introit keys in data/introits.js.
  // Jan 1 (Mary), Dec 24 (Christmas Vigil), Dec 25, Jan 6, Nov 2 are handled as
  // marquee days in resolve(); everything else lives here. `color` defaults white.
  var SANCTORAL = {
    "2-2":  { key: "candlemas", title: "The Presentation of the Lord", rank: "Feast" },
    "3-19": { key: "joseph", title: "Saint Joseph, Spouse of the Blessed Virgin Mary", rank: "Solemnity" },
    "3-25": { key: "annunciation", title: "The Annunciation of the Lord", rank: "Solemnity" },
    "5-14": { key: "common-apostles", title: "St. Matthias, Apostle", rank: "Feast", color: "red" },
    "5-31": { key: "visitation", title: "The Visitation of the Blessed Virgin Mary", rank: "Feast" },
    "6-11": { key: "common-apostles", title: "St. Barnabas, Apostle", rank: "Memorial", color: "red" },
    "6-23": { key: "john-baptist-vigil", title: "The Nativity of St. John the Baptist (Vigil)", rank: "Feast" },
    "6-24": { key: "john-baptist", title: "The Nativity of St. John the Baptist", rank: "Solemnity" },
    "6-28": { key: "peter-paul-vigil", title: "Sts. Peter and Paul, Apostles (Vigil)", rank: "Feast" },
    "6-29": { key: "peter-paul", title: "Sts. Peter and Paul, Apostles", rank: "Solemnity", color: "red" },
    "7-25": { key: "common-apostles", title: "St. James, Apostle", rank: "Feast", color: "red" },
    "8-6":  { key: "transfiguration", title: "The Transfiguration of the Lord", rank: "Feast" },
    "8-10": { key: "lawrence", title: "St. Lawrence, Deacon and Martyr", rank: "Feast", color: "red" },
    "8-24": { key: "common-apostles", title: "St. Bartholomew, Apostle", rank: "Feast", color: "red" },
    "8-14": { key: "assumption-vigil", title: "The Assumption of the Blessed Virgin Mary (Vigil)", rank: "Feast" },
    "8-15": { key: "assumption", title: "The Assumption of the Blessed Virgin Mary", rank: "Solemnity",
      options: [{ label: "Option 1", key: "assumption" }, { label: "Option 2", key: "assumption-opt2" }] },
    "9-8":  { key: "nativity-mary", title: "The Nativity of the Blessed Virgin Mary", rank: "Feast" },
    "9-14": { key: "triumph-cross", title: "The Exaltation of the Holy Cross", rank: "Feast", color: "red" },
    "9-15": { key: "sorrows", title: "Our Lady of Sorrows", rank: "Memorial", color: "white" },
    "7-3":  { key: "thomas-apostle", title: "St. Thomas, Apostle", rank: "Feast", color: "red" },
    "9-21": { key: "matthew", title: "St. Matthew, Apostle and Evangelist", rank: "Feast", color: "red" },
    "9-29": { key: "archangels", title: "Sts. Michael, Gabriel and Raphael, Archangels", rank: "Feast" },
    "10-18": { key: "common-apostles", title: "St. Luke, Evangelist", rank: "Feast", color: "red" },
    "10-28": { key: "common-apostles", title: "Sts. Simon and Jude, Apostles", rank: "Feast", color: "red" },
    "11-1": { key: "all-saints", title: "All Saints", rank: "Solemnity" },
    "11-9": { key: "dedication-lateran", title: "The Dedication of the Lateran Basilica", rank: "Feast" },
    "11-18": { key: "dedication-lateran", title: "The Dedication of the Basilicas of Sts. Peter and Paul, Apostles", rank: "Optional Memorial" },
    "11-30": { key: "andrew", title: "St. Andrew, Apostle", rank: "Feast", color: "red" },
    "12-8": { key: "immaculate-conception", title: "The Immaculate Conception of the Blessed Virgin Mary", rank: "Solemnity" },
    "12-26": { key: "stephen", title: "St. Stephen, the First Martyr", rank: "Feast", color: "red" },
    "12-27": { key: "john-evangelist", title: "St. John, Apostle and Evangelist", rank: "Feast" },
    "12-28": { key: "holy-innocents", title: "The Holy Innocents, Martyrs", rank: "Feast", color: "red" }
  };
  function fixedFeast(date) {
    return SANCTORAL[(date.getUTCMonth() + 1) + "-" + date.getUTCDate()] || null;
  }

  // "Lesser" saints — well-known optional memorials with no Mass propers of
  // their own, so `key` points straight at a Common-of-Saints category (see
  // data/common-introits.js / data/common-propers.js) instead of a per-saint
  // proper key. `feast()` doesn't care which table `key` resolves against —
  // app.js's getPart() falls back to the Commons tables when a key isn't a
  // real dayKey. Unlike SANCTORAL, these are gated on `!isSun` everywhere
  // they're checked (including Ordinary Time): a real Optional Memorial never
  // outranks a Sunday, unlike the higher-rank fixed feasts in SANCTORAL.
  var LESSER = {
    "1-2":  { key: "common-confessor-doctor", title: "Sts. Basil the Great and Gregory Nazianzen, Bishops and Doctors of the Church", rank: "Memorial" },
    "1-14": { key: "common-confessor-doctor", title: "St. Hilary, Bishop and Doctor of the Church", rank: "Optional Memorial" },
    "1-17": { key: "common-confessor-2", title: "St. Anthony, Abbot", rank: "Memorial" },
    "1-20": { key: "fabian-sebastian", title: "Sts. Fabian and Sebastian, Martyrs", rank: "Optional Memorial", color: "red" },
    "1-21": { key: "common-virgin-martyr", title: "St. Agnes, Virgin and Martyr", rank: "Memorial", color: "red" },
    "1-22": { key: "common-several-martyrs", title: "Sts. Vincent and Anastasius, Martyrs", rank: "Optional Memorial" },
    "1-27": { key: "common-virgin", title: "St. Angela Merici, Virgin", rank: "Optional Memorial" },
    "1-28": { key: "common-confessor-doctor", title: "St. Thomas Aquinas, Priest and Doctor of the Church", rank: "Optional Memorial" },
    "1-29": { key: "common-confessor-doctor", title: "St. Francis de Sales, Bishop and Doctor of the Church", rank: "Optional Memorial" },
    "2-5":  { key: "common-virgin-martyr", title: "St. Agatha, Virgin and Martyr", rank: "Memorial", color: "red" },
    "2-10": { key: "common-virgin", title: "St. Scholastica, Virgin", rank: "Optional Memorial" },
    "2-14": { key: "common-confessor-bishop", title: "Sts. Cyril and Methodius, Bishops", rank: "Optional Memorial" },
    "3-4":  { key: "common-confessor", title: "St. Casimir", rank: "Optional Memorial" },
    "3-8":  { key: "common-confessor", title: "St. John of God, Religious", rank: "Optional Memorial" },
    "3-17": { key: "common-confessor-bishop", title: "St. Patrick, Bishop", rank: "Optional Memorial" },
    "3-18": { key: "common-confessor-doctor", title: "St. Cyril of Jerusalem, Bishop and Doctor of the Church", rank: "Optional Memorial" },
    "4-4":  { key: "common-confessor-doctor", title: "St. Isidore, Bishop and Doctor of the Church", rank: "Optional Memorial" },
    "4-5":  { key: "common-confessor", title: "St. Vincent Ferrer, Priest", rank: "Optional Memorial" },
    "4-21": { key: "common-confessor-doctor", title: "St. Anselm, Bishop and Doctor of the Church", rank: "Optional Memorial" },
    "4-29": { key: "common-virgin", title: "St. Catherine of Siena, Virgin and Doctor of the Church", rank: "Optional Memorial" },
    "5-17": { key: "common-confessor", title: "St. Paschal Baylon, Religious", rank: "Optional Memorial" },
    "5-25": { key: "common-virgin", title: "St. Mary Magdalene de Pazzi, Virgin", rank: "Optional Memorial" },
    "6-6":  { key: "common-confessor-bishop", title: "St. Norbert, Bishop", rank: "Optional Memorial" },
    "6-9":  { key: "common-confessor-doctor", title: "St. Ephrem, Deacon and Doctor of the Church", rank: "Optional Memorial" },
    "6-13": { key: "common-confessor-doctor", title: "St. Anthony of Padua, Priest and Doctor of the Church", rank: "Optional Memorial" },
    "6-26": { key: "common-several-martyrs", title: "Sts. John and Paul, Martyrs", rank: "Optional Memorial" },
    "6-27": { key: "common-confessor-doctor", title: "St. Cyril of Alexandria, Bishop and Doctor of the Church", rank: "Optional Memorial" },
    "7-29": { key: "common-virgin", title: "Sts. Martha, Mary and Lazarus", rank: "Memorial" },
    "8-4":  { key: "common-confessor", title: "St. John Vianney, Priest", rank: "Memorial" },
    "8-11": { key: "common-virgin", title: "St. Clare, Virgin", rank: "Memorial" },
    "8-19": { key: "common-confessor", title: "St. John Eudes, Priest", rank: "Optional Memorial" },
    "8-23": { key: "common-virgin", title: "St. Rose of Lima, Virgin", rank: "Optional Memorial" },
    "9-3":  { key: "common-confessor-doctor", title: "St. Gregory the Great, Pope and Doctor of the Church", rank: "Memorial" },
    "9-13": { key: "common-confessor-doctor", title: "St. John Chrysostom, Bishop and Doctor of the Church", rank: "Optional Memorial" },
    "10-1": { key: "common-virgin", title: "St. Thérèse of the Child Jesus, Virgin and Doctor of the Church", rank: "Optional Memorial" },
    "10-4": { key: "common-confessor", title: "St. Francis of Assisi", rank: "Optional Memorial" },
    "10-6": { key: "common-confessor", title: "St. Bruno, Priest", rank: "Optional Memorial" },
    "10-15": { key: "common-virgin", title: "St. Teresa of Jesus (Ávila), Virgin and Doctor of the Church", rank: "Optional Memorial" },
    "11-11": { key: "common-confessor-bishop", title: "St. Martin of Tours, Bishop", rank: "Optional Memorial" },
    "11-16": { key: "common-virgin", title: "St. Gertrude, Virgin", rank: "Optional Memorial" },
    "11-22": { key: "common-virgin-martyr", title: "St. Cecilia, Virgin and Martyr", rank: "Optional Memorial" },
    "11-25": { key: "common-virgin-martyr", title: "St. Catherine of Alexandria, Virgin and Martyr", rank: "Optional Memorial" },
    "12-7": { key: "common-confessor-doctor", title: "St. Ambrose, Bishop and Doctor of the Church", rank: "Optional Memorial" },
    "12-13": { key: "common-virgin-martyr", title: "St. Lucy, Virgin and Martyr", rank: "Memorial", color: "red" },
    "12-14": { key: "common-confessor-doctor", title: "St. John of the Cross, Priest and Doctor of the Church", rank: "Memorial" },
    "12-21": { key: "common-confessor-doctor", title: "St. Peter Canisius, Priest and Doctor of the Church", rank: "Optional Memorial" }
  };
  function lesserFeast(date) {
    return LESSER[(date.getUTCMonth() + 1) + "-" + date.getUTCDate()] || null;
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

    // Build the day object for a fixed-date feast, themed to its enclosing season.
    function feast(rec, season) {
      return out({ key: rec.key, title: rec.title, season: season, color: rec.color || "white",
        rank: rec.rank, dayKey: rec.key, seasonKey: "season-" + season, options: rec.options });
    }

    // ---- Fixed marquee feasts (checked before the seasonal flow) ----
    if (sameDay(date, A.christmas)) {
      // The Nativity has three Masses; the Day Mass is the default, the others
      // are selectable. (Their dates coincide, so they cannot be separate days.)
      return out({ key: "puer-natus", title: "The Nativity of the Lord", season: "christmas",
        color: "white", rank: "Solemnity", dayKey: "puer-natus", seasonKey: "season-christmas",
        options: [{ label: "Midnight", key: "dominus-dixit" }, { label: "Dawn", key: "lux-fulgebit" },
          { label: "Day", key: "puer-natus" }] });
    }
    // Christmas Vigil — Dec 24 falls in the Advent range below, so intercept it here.
    if (date.getUTCMonth() === 11 && date.getUTCDate() === 24) {
      return out({ key: "christmas-vigil", title: "The Nativity of the Lord (Vigil)", season: "christmas",
        color: "white", rank: "Solemnity", dayKey: "christmas-vigil", seasonKey: "season-christmas" });
    }
    // Mary, the Holy Mother of God — Jan 1, the Octave Day of Christmas.
    if (date.getUTCMonth() === 0 && date.getUTCDate() === 1) {
      return out({ key: "mary-mother-of-god", title: "Mary, the Holy Mother of God", season: "christmas",
        color: "white", rank: "Solemnity", dayKey: "mary-mother-of-god", seasonKey: "season-christmas" });
    }
    if (sameDay(date, A.epiphany)) {
      return out({ key: "ecce-advenit", title: "The Epiphany of the Lord", season: "christmas",
        color: "white", rank: "Solemnity", dayKey: "ecce-advenit", seasonKey: "season-christmas" });
    }
    if (date.getUTCMonth() === 10 && date.getUTCDate() === 2) { // Nov 2
      return out({ key: "requiem", title: "The Commemoration of All the Faithful Departed (All Souls)",
        season: "ordinary", color: "violet", rank: "Feast", dayKey: "requiem", seasonKey: "season-ordinary" });
    }

    // ---- Advent (Advent I .. Dec 24) ----
    if (date >= A.adventOne && date <= ymd(Y, 12, 24)) {
      var aw = 1 + daysBetween(A.adventOne, sundayOnOrBefore(date)) / 7;
      var key = "ad-te-levavi", color = "violet";
      if (aw === 2) { key = "populus-sion"; }
      else if (aw === 3) { key = "gaudete"; color = "rose"; }
      else if (aw === 4) { key = "rorate"; }
      var sundayKey = key; // every Advent Sunday now has an authored introit
      // A fixed feast (e.g. the Immaculate Conception, Dec 8) displaces an Advent
      // ferial day, but an Advent Sunday outranks it.
      if (!isSun) {
        var af = fixedFeast(date); if (af) return feast(af, "advent");
        var alf = lesserFeast(date); if (alf) return feast(alf, "advent");
      }
      return out({ key: isSun ? sundayKey : "advent-feria", title: ferialTitle(aw, "of Advent", date),
        season: "advent", color: color, dayKey: isSun ? sundayKey : null,
        sundayKey: sundayKey, seasonKey: "season-advent" });
    }

    // ---- Christmas season (Dec 25 .. Baptism of the Lord) ----
    if (date >= A.christmas || date <= A.baptism) {
      if (sameDay(date, A.baptism)) {
        return out({ key: "baptism-lord", title: "The Baptism of the Lord", season: "christmas",
          color: "white", rank: "Feast", dayKey: "baptism-lord", seasonKey: "season-christmas" });
      }
      if (sameDay(date, A.holyFamily)) {
        return out({ key: "holy-family", title: "The Holy Family of Jesus, Mary and Joseph",
          season: "christmas", color: "white", rank: "Feast", dayKey: "holy-family",
          seasonKey: "season-christmas" });
      }
      // 2nd Sunday after the Nativity: a Sunday between Jan 1 and the Epiphany (Jan 6).
      if (isSun && date.getUTCMonth() === 0 && date.getUTCDate() >= 2 && date.getUTCDate() <= 5) {
        return out({ key: "dum-medium-silentium", title: "2nd Sunday after the Nativity",
          season: "christmas", color: "white", rank: "Sunday", dayKey: "dum-medium-silentium",
          seasonKey: "season-christmas" });
      }
      // Fixed feasts within the Christmas octave (Stephen, John, Holy Innocents,
      // Dec 26-28) displace a Christmas-Time weekday, but a Sunday (Holy Family or
      // the 2nd Sunday after the Nativity, already handled above) outranks them.
      if (!isSun) { var cfe = fixedFeast(date); if (cfe) return feast(cfe, "christmas"); }
      return out({ key: "christmas-feria", title: "Christmas Time", season: "christmas",
        color: "white", sundayKey: "puer-natus", seasonKey: "season-christmas" });
    }

    // ---- Lent (Ash Wednesday .. Holy Saturday) ----
    if (date >= A.ashWednesday && date < A.easter) {
      if (sameDay(date, A.ashWednesday)) {
        return out({ key: "misereris", title: "Ash Wednesday", season: "lent",
          color: "violet", rank: "Feria", dayKey: "misereris", seasonKey: "season-lent" });
      }
      if (sameDay(date, addDays(A.easter, -3))) { // Holy Thursday
        // The evening Mass of the Lord's Supper opens the Sacred Triduum, so it is
        // no longer Lent. The distinct season also stops the proper walk-back from
        // borrowing Palm Sunday's Offertory (Holy Thursday has none in the source).
        return out({ key: "nos-autem", title: "Holy Thursday of the Lord's Supper", season: "triduum",
          color: "white", rank: "Solemnity", dayKey: "nos-autem", seasonKey: "season-lent" });
      }
      // Fixed solemnities (Joseph Mar 19, Annunciation Mar 25) displace a Lenten
      // weekday, but a Sunday of Lent outranks them.
      if (!isSun) {
        var lfe = fixedFeast(date); if (lfe) return feast(lfe, "lent");
        var llf = lesserFeast(date); if (llf) return feast(llf, "lent");
      }
      if (date < addDays(A.ashWednesday, 4)) { // Ash Wed .. Sat before Lent I
        return out({ key: "lent-feria", title: "after Ash Wednesday", season: "lent",
          color: "violet", seasonKey: "season-lent" });
      }
      var ls = sundayOnOrBefore(date);
      var lentWeek = 1 + daysBetween(addDays(A.ashWednesday, 4), ls) / 7; // Lent I = first Sun
      var isPalm = sameDay(ls, A.palmSunday);
      var lentKey = isPalm ? "palm" : lentWeek === 4 ? "laetare" : "lent-" + lentWeek;
      var color2 = lentWeek === 4 ? "rose" : "violet";
      var title = isPalm ? "Palm Sunday of the Passion of the Lord"
        : ferialTitle(lentWeek, "of Lent", date);
      // cycle letter lets resolveKey pick the Scrutiny-Mass -b/-c variants
      // (lent-3/laetare/lent-5 split their Offertory/Communion by lectionary year).
      return out({ key: isSun ? lentKey : "lent-feria", title: title, season: "lent",
        color: color2, dayKey: isSun ? lentKey : null,
        sundayKey: lentKey, cycle: lectionaryYear(date), seasonKey: "season-lent" });
    }

    // ---- Easter Triduum + Eastertide (Easter .. Pentecost) ----
    if (date >= A.easter && date <= A.pentecost) {
      // Eastertide Sundays carry a lectionary-year letter so resolveKey can pick
      // the year-specific Communion variants (easter-N-b/-c, viri-galilaei-b/-c),
      // exactly as the Lenten Scrutiny Masses do.
      if (sameDay(date, A.easter)) {
        return out({ key: "resurrexi", title: "Easter Sunday of the Resurrection of the Lord",
          season: "easter", color: "white", rank: "Solemnity", dayKey: "resurrexi",
          cycle: lectionaryYear(date), seasonKey: "season-easter" });
      }
      if (sameDay(date, A.pentecost)) {
        return out({ key: "spiritus-domini", title: "Pentecost Sunday", season: "easter",
          color: "red", rank: "Solemnity", dayKey: "spiritus-domini",
          cycle: lectionaryYear(date), seasonKey: "season-easter" });
      }
      if (sameDay(date, addDays(A.easter, 39))) { // Ascension Thursday (Easter + 39)
        return out({ key: "viri-galilaei", title: "The Ascension of the Lord", season: "easter",
          color: "white", rank: "Solemnity", dayKey: "viri-galilaei",
          cycle: lectionaryYear(date), seasonKey: "season-easter" });
      }
      if (sameDay(date, addDays(A.easter, 48))) { // Vigil of Pentecost (the Saturday)
        return out({ key: "dum-sanctificatus", title: "Pentecost Sunday (Vigil)", season: "easter",
          color: "red", rank: "Solemnity", dayKey: "dum-sanctificatus",
          cycle: lectionaryYear(date), seasonKey: "season-easter" });
      }
      // The Annunciation (Mar 25) can land in Eastertide on a weekday.
      if (!isSun) {
        var efe = fixedFeast(date); if (efe) return feast(efe, "easter");
        var elf = lesserFeast(date); if (elf) return feast(elf, "easter");
      }
      var ew = 1 + daysBetween(A.easter, sundayOnOrBefore(date)) / 7;
      // ew 1 is Easter week (octave -> Resurrexi); ew 2..7 are the Eastertide Sundays.
      var easterKey = ew === 1 ? "resurrexi" : "easter-" + ew;
      return out({ key: isSun ? easterKey : "easter-feria",
        title: ferialTitle(ew, "of Easter", date), season: "easter", color: "white",
        dayKey: isSun ? easterKey : null, sundayKey: easterKey,
        cycle: lectionaryYear(date), seasonKey: "season-easter" });
    }

    // ---- Ordinary Time ----
    // Solemnities that fall in OT and that we author propers for (they displace the
    // green Sunday they land on, so that Sunday's OT number simply goes unused):
    if (sameDay(date, A.trinity)) {
      // Year C has its own introit (Caritas Dei); A & B use Benedicta sit. The
      // cycle letter lets resolveKey pick trinity-c when authored.
      return out({ key: "trinity", title: "The Most Holy Trinity", season: "ordinary", color: "white",
        rank: "Solemnity", dayKey: "trinity", cycle: lectionaryYear(date), seasonKey: "season-ordinary" });
    }
    if (sameDay(date, A.corpusChristi)) {
      return out({ key: "cibavit", title: "The Most Holy Body and Blood of Christ (Corpus Christi)",
        season: "ordinary", color: "white", rank: "Solemnity", dayKey: "cibavit", seasonKey: "season-ordinary" });
    }
    if (sameDay(date, addDays(A.easter, 68))) { // Sacred Heart: Friday after the 2nd Sun. after Pentecost
      return out({ key: "sacred-heart", title: "The Most Sacred Heart of Jesus",
        season: "ordinary", color: "white", rank: "Solemnity", dayKey: "sacred-heart", seasonKey: "season-ordinary" });
    }
    if (sameDay(date, A.christTheKing)) {
      return out({ key: "christ-king", title: "Our Lord Jesus Christ, King of the Universe",
        season: "ordinary", color: "white", rank: "Solemnity", dayKey: "christ-king", seasonKey: "season-ordinary" });
    }
    // Fixed feasts of the Lord and the saints outrank the green Ordinary-Time
    // Sunday they fall on, as well as every OT weekday.
    var otFeast = fixedFeast(date);
    if (otFeast) return feast(otFeast, "ordinary");
    // Unlike the fixed feasts above, a real Optional Memorial never outranks an
    // Ordinary-Time Sunday — gate this one on `!isSun`.
    if (!isSun) { var otLesser = lesserFeast(date); if (otLesser) return feast(otLesser, "ordinary"); }

    var beforeLent = date < A.ashWednesday;
    var govSunday = sundayOnOrBefore(date);
    var n = beforeLent ? otNumberBeforeLent(govSunday, A) : otNumberAfterPentecost(govSunday, A);
    var otKey = "ot-" + n;
    return out({
      key: isSun ? otKey : "ot-feria",
      title: ferialTitle(n, "in Ordinary Time", date),
      season: "ordinary", color: "green",
      dayKey: isSun ? otKey : null,
      sundayKey: otKey,
      cycle: lectionaryYear(date),
      seasonKey: "season-ordinary"
    });
  }

  window.RESOLVE_DAY = resolve;
  // Also exposed by name so app.js can swap between this and RESOLVE_DAY_1962.
  window.RESOLVE_DAY_MODERN = resolve;
})();
