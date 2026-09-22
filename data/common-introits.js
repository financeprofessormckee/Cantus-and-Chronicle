"use strict";

/*
 * data/common-introits.js — the Introit of each Common-of-Saints Mass
 * formulary (Graduale Romanum, modern calendar only). Unlike
 * data/introits.js, these keys are never resolved by date — RESOLVE_DAY
 * never emits a "common-*" dayKey. They're browsed directly from a picker
 * (app.js's Commons mode), driven by window.COMMON_CATEGORIES below. See
 * sources/gregobase/build-common-of-saints.py and
 * common-of-saints-worklist.md for provenance.
 */

window.COMMON_CATEGORIES = [
  { key: "common-apostles", label: "Common of Apostles (Mihi autem)", group: "Apostles" },
  { key: "common-martyr", label: "Common of a Martyr (In virtute tua)", group: "Martyrs" },
  { key: "common-confessor-bishop", label: "Common of a Bishop (Statuit ei Dominus)", group: "Confessors & Doctors" },
  { key: "common-confessor-doctor", label: "Common of a Doctor / Confessor (In medio Ecclesiae)", group: "Confessors & Doctors" },
  { key: "common-virgin", label: "Common of a Virgin (Specie tua)", group: "Virgins & Holy Women" },
  { key: "common-confessor", label: "Common of a Confessor (Os justi)", group: "Confessors & Doctors" },
  { key: "common-confessor-2", label: "Common of a Confessor (Justus ut palma)", group: "Confessors & Doctors" },
  { key: "common-virgin-martyr", label: "Common of a Virgin Martyr (Loquebar)", group: "Virgins & Holy Women" },
  { key: "common-several-martyrs", label: "Common of Several Martyrs (Sapientiam Sanctorum)", group: "Martyrs" },
  { key: "common-virgin-not-martyr", label: "Common of a Virgin (Dilexisti)", group: "Virgins & Holy Women" },
  { key: "common-holy-women", label: "Common of Holy Women (Cognovi)", group: "Virgins & Holy Women" },
  { key: "common-martyr-2", label: "Common of a Martyr (Beatus vir)", group: "Martyrs" },
  { key: "common-martyr-3", label: "Common of a Martyr (Laetabitur)", group: "Martyrs" },
  { key: "common-martyr-bishop", label: "Common of a Martyr Bishop (Sacerdotes Dei)", group: "Martyrs" },
  { key: "common-pope", label: "Common of a Pope (Si diligis me)", group: "Confessors & Doctors" },
];


window.COMMON_INTROITS = {
  "common-apostles": {
    title: "Mihi autem nimis",
    latin: "Mihi autem nimis honoráti sunt amíci tui, Deus : nimis confortátus est principátus eórum.",
    translation: "But to me your friends, O God, are made exceedingly honorable: their principality is exceedingly strengthened.",
    mode: "Introit · Common of Apostles · Mode II",
    reference: "Ps. 139:17",
    gabc: "(f3) MI(e)HI(f) au(f)tem(hh) * ni(ihi)mis(ihi_[oh:h]f) (,) ho(fi)no(i)rá(ij)ti(ih) sunt(hv.gih.) (,) a(f)mí(ege)ci(f) tu(f)i,(hhi) De(fgF'E)us :(e.) (:) ni(h)mis(hhh) con(f)for(fi~)tá(i)tus(h) est(hji.) (,) prin(hihh)ci(ef)pá(hhi)tus(h) e(h)ó(hjI'H)rum.(hhh/f_[oh:h]g_[oh:h]f._[oh:h]) (::)",
    source: "Graduale Romanum (GregoBase #475)",
    blurb: {
      text: "Shared by every apostle's feast (it also serves St. Thomas, Dec. 21), this text attracted an unusually large polyphonic tradition: settings survive by Dufay, Isaac, Stolzer, Carissimi, Palestrina (Offertoria totius anni, 1593), and Thomas Tallis, whose 1575 Latin motet (published in his and Byrd's joint Cantiones Sacrae) was later given new English words and sung as the anthem \"Blessed be thy name.\"",
      source: "CPDL ChoralWiki, \"Mihi autem nimis\"; CPDL ChoralWiki, \"Blessed be thy name (Thomas Tallis).\"",
    },
  },
  "common-martyr": {
    title: "In virtute tua",
    latin: "In virtúte tua, Dómine, laetábitur justus : et super salutáre tuum exsultábit veheménter : desidérium ánimae ejus tribuísti ei.",
    translation: "In your strength, O Lord, the just man shall joy: and in your salvation he shall rejoice exceedingly: you have given him his heart's desire.",
    mode: "Introit · Common of a Martyr · Mode VII",
    reference: "Ps. 21:2-3",
    gabc: "(c3) IN(e) vir(ef~)tú(f)te(f) tu(fdfe)a(e.) (,) * Dó(fh)mi(hhh)ne,(h.) (;) lae(hg)tá(hji)bi(ihhg)tur(h.f!gwh) ju(efe___)stus,(e.) (:) et(e) su(ef/hgh)per(h) sa(h)lu(h)tá(h)re(fh) tu(hg/hif)um(fe..) (;) ex(ef/hg)sul(h)tá(gh'i)bit(i) ve(ijh)he(f!gwh)mén(hi~)ter :(h.) (:) de(hg)si(h)dé(hji)ri(h)um(h') á(h)ni(hhh)mae(e) e(ghffd~)jus(d.) (;) tri(ef)bu(e)í(e.f!gwh/ihi)sti(ihh) e(efe___)i.(e.) (::)",
    source: "Graduale Romanum (GregoBase #316)",
    blurb: {
      text: "Psalm 21 opens, in the Douay-Rheims, with the words \"In thy strength, O Lord, the king shall joy\", and the Vulgate Latin has \"lætabitur rex\". The introit quietly shifts that word: where the psalm says rex, the king, the chant sings justus, the just man, turning an explicitly royal psalm into a portrait of the martyr. The antiphon also stops midway through verse 3, taking \"Thou hast given him his heart's desire\" and leaving aside the remainder of that verse, \"and hast not withholden from him the will of his lips.\"",
      source: "Ps. 21:2-3 (Vulgate numbering Ps. 20:2-3) (Douay-Rheims; Latin from the Clementine Vulgate)",
    },
  },
  "common-confessor-bishop": {
    title: "Statuit ei Dominus",
    latin: "Státuit ei Dóminus testaméntum pacis, et príncipem fecit eum : ut sit illi sacerdótii dígnitas in aetérnum.",
    translation: "The Lord made a covenant of peace with him, and made him a prince: that the dignity of priesthood should be to him for ever.",
    mode: "Introit · Common of a Bishop Confessor · Mode I",
    reference: "Ecclus. 45:30",
    gabc: "(c4) STá(ixdh'!iv)tu(h)it(h') *() e(h)i(h) Dó(hjjh)mi(ixihig)nus(hg..) (;) te(ixhig)sta(f)mén(fg)tum(ghF'Ef) pa(d_[oh:h]e_[oh:h]d_[oh:h])cis,(d.) (:) et(d) prín(df!gh~)ci(g)pem(g) fe(ixhig)cit(f') e(fg'h)um :(h.) (;) ut(h) sit(jj) il(jk)li(h.) (,) sa(jj)cer(j)dó(j)ti(j')i(kvJ'Ij') dí(h)gni(h_[oh:h]i_[oh:h]h_[oh:h])tas(h.) (;) in(de!fg//ef'h) ae(hghfgvFE)tér(d!ewfef)num.(e[ll:1]d..) (::)",
    source: "Graduale Romanum (GregoBase #456)",
    blurb: {
      text: "Statuit ei Dominus draws on Ecclesiasticus 45:30, adjusting the verse in two ways: it inserts \"Dominus\" to make the subject explicit, and it omits the phrase \"et semini ejus\" from the closing line on priestly dignity, fitting a text that was originally about Phinees and his descendants to any bishop. The surrounding verses, which praise Phinees for standing firm in the shameful fall of the people, stay off the page. The same Latin text inspired a polyphonic setting, Statuit ei Dominus, op. 30 (1924), by the Belgian composer Jules Van Nuffel.",
      source: "Ecclus. 45:30 (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Jules Van Nuffel\" (rev. 1370427755)",
    },
  },
  "common-confessor-doctor": {
    title: "In medio Ecclesiae",
    latin: "In médio Ecclésiae apéruit os ejus : et implévit eum Dóminus spíritu sapiéntiae, et intelléctus : stolam glóriae índuit eum.",
    translation: "In the midst of the Church he opened his mouth: and the Lord filled him with the spirit of wisdom and understanding: he clothed him with a robe of glory.",
    mode: "Introit · Common of a Doctor · Mode VI",
    reference: "Ecclus. 15:5",
    gabc: "(c4) IN(df~) mé(fff)di(f)o(f) *() Ec(f)clé(gfg)si(f)ae(fff) (,) a(cd)pé(fff)ru(f)it(f) os(g_[oh:h]f) e(f_[oh:h]g_[oh:h]f_[oh:h])jus :(f.) (:) et(f) im(f)plé(ixf!gwh'!iv)vit(h) e(hjjh)um(h.) Dó(gh)mi(gf)nus(f.) (,) spí(fh)ri(g)tu(f) sa(fgf)pi(ef'g)én(gh~)ti(f)ae,(fgf.) (,) et(f) in(ef'g)tel(hghf)lé(f)ctus :(fffc..) (:) sto(fdf)lam(f) gló(ghf)ri(f_d)ae(d_c) (,) ín(ff)du(f)it(ff) e(f_[oh:h]g_[oh:h]f_[oh:h])um.(f.) (::)",
    source: "Graduale Romanum (GregoBase #233)",
    blurb: {
      text: "Ecclesiasticus 15:5 is a promise in its original context: Wisdom herself, the verse says, \"shall open his mouth\" and \"shall clothe him with a robe of glory,\" with the verbs in the future tense and no named actor other than Wisdom. The Introit shifts the tense to the past and inserts \"Dóminus\" as the explicit actor, so where the scripture reads \"aperiet os ejus\" the chant sings \"apéruit os ejus... implévit eum Dóminus,\" turning a promise into a declaration of what the Lord has already accomplished in the Doctor being honored.",
      source: "Ecclus. 15:5 (Douay-Rheims; Latin from the Clementine Vulgate)",
    },
  },
  "common-virgin": {
    title: "Me exspectaverunt",
    latin: "Me exspectavérunt peccatóres ut pérderent me : testimónia tua, Dómine, intelléxi : omnis consummatiónis vidi finem : latum mandátum tuum nimis.",
    translation: "The wicked have waited for me to destroy me: but I have understood your testimonies, O Lord: I have seen an end of all perfection: your commandment is exceedingly broad.",
    mode: "Introit · Common of a Virgin · Mode II",
    reference: "Ps. 119:95-96",
    gabc: "(f3) ME(hf/hhh) ex(h)spe(h)cta(h)vé(hih)runt(hhh) *() pec(hih)ca(f)tó(f/hhf)res,(f.) (,) ut(fef) pér(h.f!gw!hi)de(h)rent(hiH'Gh) me :(f.) (:) te(f)sti(h)mó(hi)ni(i)a(i) tu(i)a,(i) Dó(ij)mi(ih)ne,(h.) (,) in(h)tel(h)lé(gh!ijIG'h)xi :(h.) (;) o(fi)mnis(i) con(i)sum(ih~)ma(h!jij)ti(h)ó(f!hgh)nis(f.) (,) vi(fhg)di(hi) fi(fgF'E)nem :(e.) (:) la(h)tum(gihh) man(ef)dá(hhi)tum(h) tu(h_f)um(i) ni(hiH'F)mis.(f.) (::)",
    source: "Graduale Romanum (GregoBase #938)",
    blurb: {
      text: "Me exspectaverunt draws its two verses directly from Psalm 119, verses 95 and 96, quoted complete and in sequence without omission or rearrangement. The Gospel of the day, from Matthew 13, closes with Jesus asking his disciples \"Intellexistis haec omnia?\", have you understood all these things. The introit's answer, spoken in the voice of the virgin, has already been given: \"testimonia tua, Domine, intellexi,\" meaning that the Lord's testimonies have been understood, an answer offered in prayer before the Gospel question is even asked.",
      source: "Ps. 119:95-96 (Vulgate numbering Ps. 118:95-96) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C6a (Missale Romanum formulary)",
    },
  },
  "common-confessor": {
    title: "Os justi",
    latin: "Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium : lex Dei ejus in corde ipsíus.",
    translation: "The mouth of the just shall meditate wisdom, and his tongue shall speak judgment: the law of his God is in his heart.",
    mode: "Introit · Common of a Confessor · Mode VI",
    reference: "Ps. 37:30-31",
    gabc: "(c4) OS(ff) ju(fgff)sti(c.) (,) * me(c)di(dcd)tá(fd/fffg)bi(f)tur(ffe) sa(g)pi(hghf)én(f)ti(f_[oh:h]g_[oh:h]f_[oh:h])am,(f.) (:) et(f) lin(gh~)gua(h) e(ixhiH~'G~)jus(h_g) (,) lo(fg)qué(f)tur(fe) ju(df)dí(fe/f_g)ci(d!ew!fvE'DC'd)um :(cd/ed..) (:) lex(c) De(df)i(f) e(e/gh~)jus(h.) (,) in(g) cor(f)de(ghghg) i(f)psí(f_[oh:h]g_[oh:h]f_[oh:h])us.(f.) (::)",
    source: "Graduale Romanum (GregoBase #1374)",
    blurb: {
      text: "Psalm 37, verses 30 and 31, supply the text, but the introit stops before the end of verse 31. The full verse reads: \"Lex Dei ejus in corde ipsius, et non supplantabuntur gressus ejus,\" the law of his God is in his heart, and his steps shall not be supplanted. The final clause is left aside, and the antiphon closes on the image of the law dwelling in the heart. The Gospel of the day then opens, in Matthew 5:13-19, with Christ addressing his disciples: \"Vos estis sal terrae,\" you are the salt of the earth.",
      source: "Ps. 37:30-31 (Vulgate numbering Ps. 36:30-31) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C4a (Missale Romanum formulary)",
    },
  },
  "common-confessor-2": {
    title: "Justus ut palma",
    latin: "Justus ut palma florébit : sicut cedrus Líbani multiplicábitur : plantátus in domo Dómini, in átriis domus Dei nostri.",
    translation: "The just shall flourish like the palm tree: he shall grow up like the cedar of Lebanon: planted in the house of the Lord, in the courts of the house of our God.",
    mode: "Introit · Common of a Confessor · Mode I",
    reference: "Ps. 92:13-14",
    gabc: "(c4) JU(d!ffd/fff)stus(e_[oh:h][ll:1]d_[oh:h]) (,) * ut(cd) pal(cd'f)ma(fvvED') flo(d)ré(d!ew!fvED)bit :(dff'1f//fff) (;) sic(c)ut(d) ce(f)drus(g) Lí(f)ba(gh)ni(h.) (,) mul(h)ti(h)pli(h)cá(hjhhg)bi(hggfg)tur :(fg..) (:) plan(df)tá(fff/g_[oh:h]f)tus(f) in(f) do(fg)mo(gffd) Dó(d)mi(dff'1f/g_[oh:h]f)ni,(f.) (;) in(f) á(f_[oh:h]g_[oh:h]f_[oh:h])tri(f)is(f) do(fg)mus(gff) De(d)i(c!fff) no(d_c/fff/ced)stri.(d.) (::)",
    source: "Graduale Romanum (GregoBase #108)",
    blurb: {
      text: "Justus ut palma draws on Psalm 92:13-14, but quietly reshapes verse 14 to hold both verses together. The psalm's verse 14 reads in the plural: \"Plantati in domo Domini, in atriis domus Dei nostri florebunt.\" The chant replaces the plural \"plantati...florebunt\" with the singular \"plantátus,\" so the whole text stays focused on the single \"justus\" of verse 13 and his flourishing, rather than shifting to a collective. The Gospel of the day, from Matthew 5, opens with Christ addressing those same disciples as the salt of the earth and the light of the world.",
      source: "Ps. 92:13-14 (Vulgate numbering Ps. 91:13-14) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C4a (Missale Romanum formulary)",
    },
  },
  "common-virgin-martyr": {
    title: "Loquebar de testimoniis",
    latin: "Loquébar de testimóniis tuis in conspéctu regum, et non confundébar : et meditábar in mandátis tuis, quae diléxi nimis.",
    translation: "I spoke of your testimonies before kings, and was not ashamed: and I meditated on your commandments, which I loved exceedingly.",
    mode: "Introit · Common of a Virgin Martyr · Mode V",
    reference: "Ps. 119:46-47",
    gabc: "(c3) LO(df)qué(hhi)bar(h.) *(,) de(h) te(h)sti(h)mó(i)ni(h.f!gwh)is(h) tu(hi!jvIH'i)is(ih..) (;) in(h) con(iji~)spé(j)ctu(h) re(hjIH'i)gum,(h.) (,) et(fdf) non(hh) con(ijh)fun(hh)dé(h_[oh:h]i_[oh:h]h_[oh:h])bar :(h.) (:) et(h_) me(e)di(f)tá(hhi)bar(h.) (,) in(hihh) man(ef)dá(hhi)tis(h) tu(hh/ijh)is,(f/hhfh.) (;) quae(d) di(ef)lé(f/hhf)xi(e) ni(ef/hfh)mis.(d.) (::)",
    source: "Graduale Romanum (GregoBase #510)",
    blurb: {
      text: "Loquebar de testimoniis draws its two verses from Psalm 119. The chant's version of the second verse intensifies the text: where the Vulgate reads simply \"quæ dilexi,\" the chant sings \"quæ diléxi nimis,\" adding a note of excess or abundance to the love declared for God's commandments. The Gospel appointed for the same Mass is the parable of the ten virgins from Matthew 25:1-13, whose imagery of wise preparedness frames the Virgin Martyr's witness.",
      source: "Ps. 119:46-47 (Vulgate numbering Ps. 118:46-47) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C6 (Missale Romanum formulary)",
    },
  },
  "common-several-martyrs": {
    title: "Sapientiam Sanctorum",
    latin: "Sapiéntiam Sanctórum narrent pópuli, et laudes eórum núntiet ecclésia : nómina autem eórum vivent in saéculum saéculi.",
    translation: "Let the peoples declare the wisdom of the saints, and the church proclaim their praise: and their names shall live forever.",
    mode: "Introit · Common of Several Martyrs · Mode I",
    reference: "Ecclus. 44:15, 14",
    gabc: "(c4) SA(h)pi(h)én(h)ti(gf)am(f) *() san(gfg)ctó(ixhgih)rum(h.) (,) nar(g_[oh:h]f)rent(hfh) pó(h)pu(h!iwj_h)li,(h.) (:) et(h) lau(jk~)des(k) e(kj)ó(kljjhi)rum(i_[oh:h]h) (,) nún(j)ti(jk)et(ki) ec(j)clé(i)si(hjI'H)a :(h.) (:) nó(h)mi(g)na(ghg) au(h)tem(f) e(hfh)ó(jh/jjjk)rum(j.) (,) vi(h!jjh)vent(h) in(hg/hfg) saé(d)cu(ff)lum(gvF'Ef') saé(d)cu(d_[oh:h]e_[oh:h]d_[oh:h])li.(d.) (::)",
    source: "Graduale Romanum (GregoBase #11)",
    blurb: {
      text: "Sapientiam Sanctorum draws from two consecutive verses in Ecclesiasticus 44, but reverses their order: verse 15 comes first in the chant, and verse 14 supplies the closing phrase, \"nomen eorum vivit in generationem et generationem,\" their name lives unto generation and generation. The surrounding verses of Ecclesiasticus 44 speak of the seed and children of the holy fathers enduring forever, so the most proclamatory lines were drawn from a longer meditation on inheritance and memory. At this Mass, the Introit leads into a Gospel from Luke 6 that closes with Christ's own promise to the persecuted: \"merces vestra multa est in cœlo,\" your reward is great in heaven.",
      source: "Ecclus. 44:15, 14 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C3a (Missale Romanum formulary)",
    },
  },
  "common-virgin-not-martyr": {
    title: "Dilexisti justitiam",
    latin: "Dilexísti justítiam, et odísti iniquitátem : proptérea unxit te Deus, Deus tuus, óleo laetítiae prae consórtibus tuis.",
    translation: "You have loved justice, and hated iniquity: therefore God, your God, has anointed you with the oil of gladness above your fellows.",
    mode: "Introit · Common of a Virgin · Mode VIII",
    reference: "Ps. 45:8",
    gabc: "(c4) DI(g)le(g)xí(hjg)sti(g_[oh:h]f) *() ju(g)stí(g.h!iwjjk)ti(j)am,(j.) (;) et(j) o(j)dí(jkj)sti(jjj) in(gh)i(h)qui(hfhg)tá(ghg___)tem :(g.) (:) pro(fg)ptér(gjj)e(hg)a(ghggf.0) (,) un(gh/i.h!iwj)xit(hjg) te(g) De(ghG'F)us,(f.) (,) De(fg'h)us(h) tu(ixhgivHG'hf)us,(f.) (;) ó(g)le(fg)o(g) lae(h)tí(jj)ti(hg)ae(g/jjh/jggf.0) (;) prae(g) con(hi~)sór(i.h!iwj)ti(hg)bus(gv.f!hfg) tu(ghg___)is.(g.) (::)",
    source: "Graduale Romanum (GregoBase #629)",
    blurb: {
      text: "Set for unaccompanied SATB choir by the contemporary composer Robert Hugill (2004) as part of Tempus per Annum, his ongoing sequence of motets setting the Latin Introit for every Sunday and major feast of the church year.",
      source: "CPDL ChoralWiki, \"Dilexisti justitiam (Robert Hugill).\"",
    },
  },
  "common-holy-women": {
    title: "Cognovi Domine",
    latin: "Cognóvi, Dómine, quia aéquitas judícia tua : et in veritáte tua humiliásti me : confíge timóre tuo carnes meas, a mandátis tuis tímui.",
    translation: "I have known, O Lord, that your judgments are equity: and in your truth you have humbled me. Pierce my flesh with your fear; I am afraid because of your commandments.",
    mode: "Introit · Common of Holy Women · Mode III",
    reference: "Ps. 119:75, 120",
    gabc: "(c4) CO(eef)gnó(dge)vi(gh) *() Dó(hkjji)mi(ji)ne,(j.) (;) qui(g)a(h) aé(h!jj)qui(h)tas(hgh.) (,) ju(f)dí(ef'h)ci(gfg)a(ghG'Fghg) tu(egff)a,(fe..) (:) et(e!fw!gh) in(g) ve(g)ri(h)tá(hjIH')te(h) tu(gfg)a(ghhg.) (;) hu(dg)mi(g/hji)li(j)á(jjj)sti(ixhvGF'gwh!ivHG'h) me :(hg..) (:) con(dg)fí(g/hji)ge(j) ti(j)mó(jjj)re(h) tu(h!iw!jvIH)o(hgh.) (,) car(ixe.f!gw!hihhg~)nes(gh) me(g_[oh:h]f)as,(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) a(g) man(g)dá(h!jjj)tis(h) tu(hg)is(gihig.) (,) non(gh) me(e.f!gwh) re(h)pél(g_[oh:h]fhvGFgvF~E~)las.(e.) (::)",
    source: "Graduale Romanum (GregoBase #619)",
    blurb: {
      text: "Cognovi Domine draws from two verses of Psalm 119 that stand forty-five verses apart: verse 75 and verse 120. The compiler joined them into a single continuous prayer, so the humble submission of the first half and the plea to be pierced with holy fear arrive together without interruption. There is also a small but deliberate change: where verse 120 of the psalm reads \"a judiciis enim tuis timui\" (afraid of your judgments), the antiphon sings \"a mandátis tuis tímui\" (afraid because of your commandments), shifting from judgments to commandments as the object of awe.",
      source: "Ps. 119:75, 120 (Vulgate numbering Ps. 118:75, 120) (Douay-Rheims; Latin from the Clementine Vulgate)",
    },
  },
  "common-martyr-2": {
    title: "In virtute tua",
    latin: "In virtúte tua, Dómine, laetábitur justus : et super salutáre tuum exsultábit veheménter : desidérium ánimae ejus tribuísti ei.",
    translation: "In your strength, O Lord, the just man shall joy: and in your salvation he shall rejoice exceedingly: you have given him his heart's desire.",
    mode: "Introit · Common of a Martyr · Mode VII",
    reference: "Ps. 21:2-3",
    gabc: "(c3) IN(e) vir(ef~)tú(f)te(f) tu(fdfe)a(e.) (,) * Dó(fh)mi(hhh)ne,(h.) (;) lae(hg)tá(hji)bi(ihhg)tur(h.f!gwh) ju(efe___)stus,(e.) (:) et(e) su(ef/hgh)per(h) sa(h)lu(h)tá(h)re(fh) tu(hg/hif)um(fe..) (;) ex(ef/hg)sul(h)tá(gh'i)bit(i) ve(ijh)he(f!gwh)mén(hi~)ter :(h.) (:) de(hg)si(h)dé(hji)ri(h)um(h') á(h)ni(hhh)mae(e) e(ghffd~)jus(d.) (;) tri(ef)bu(e)í(e.f!gwh/ihi)sti(ihh) e(efe___)i.(e.) (::)",
    source: "Graduale Romanum (GregoBase #316)",
    blurb: {
      text: "Psalm 21 opens, in the Douay-Rheims, with the words \"In thy strength, O Lord, the king shall joy\", and the Vulgate Latin has \"lætabitur rex\". The introit quietly shifts that word: where the psalm says rex, the king, the chant sings justus, the just man, turning an explicitly royal psalm into a portrait of the martyr. The antiphon also stops midway through verse 3, taking \"Thou hast given him his heart's desire\" and leaving aside the remainder of that verse, \"and hast not withholden from him the will of his lips.\"",
      source: "Ps. 21:2-3 (Vulgate numbering Ps. 20:2-3) (Douay-Rheims; Latin from the Clementine Vulgate)",
    },
  },
  "common-martyr-3": {
    title: "Laetabitur justus",
    latin: "Laetábitur justus in Dómino, et sperábit in eo : et laudabúntur omnes recti corde.",
    translation: "The just shall rejoice in the Lord, and shall hope in him: and all the upright of heart shall be praised.",
    mode: "Introit · Common of a Martyr · Mode VIII",
    reference: "Ps. 64:11",
    gabc: "(c3) LAe(e)tá(hh)bi(fd)tur(e) *() ju(fe/hhvF'E)stus(f.) (`) in(hh) Dó(ihi)mi(igh)no,(ih..) (;) et(f) spe(h_g)rá(gh!ijH'G)bit(hhe/hh) (,) in(hvvGF'E) e(ef/gffe)o :(efee[ll:1]d.0) (:) et(ef) lau(e)da(hh)bún(e!hhh/i_[oh:h]h)tur(h.) (,) o(hg/hih)mnes(fv.de'f) re(f!hhf/hhh)cti(hvGF) cor(fg~)de.(e.) (::)",
    source: "Graduale Romanum (GregoBase #251)",
    blurb: {
      text: "Laetabitur justus draws its single verse from the close of Psalm 64, where it serves as the psalm's resolving line. The verses immediately before it describe persecutors falling into confusion, bystanders struck with fear, and the people at last declaring the works of God. The antiphon lifts only that final turn toward rejoicing, leaving the account of affliction behind. What reaches the singer is the psalm's destination, stripped of the journey that leads there.",
      source: "Ps. 64:11 (Vulgate numbering Ps. 63:11) (Douay-Rheims; Latin from the Clementine Vulgate)",
    },
  },
  "common-martyr-bishop": {
    title: "Sacerdotes Dei",
    latin: "Sacerdótes Dei, benedícite Dóminum : sancti et húmiles corde, laudáte Deum.",
    translation: "O priests of God, bless the Lord: holy and humble of heart, praise God.",
    mode: "Introit · Common of a Martyr Bishop · Mode VI",
    reference: "Dan. 3:84, 87",
    gabc: "(c4) SA(d)cer(bxdbc)dó(dc/fffg)tes(f) De(fg)i,(f.) *(;) be(f)ne(f)dí(fg'h)ci(h)te(ixjhiGF'fghi.g!hw!ivHG') Dó(f)mi(fg!hvGF'g)num;(gf..) (:) san(f)cti(fff) et(d) hú(d!ffd)mi(dcf)les(ghf) cor(gh~)de,(h.) (;) lau(fg~)dá(gjjh)te(h.) De(fgh!jvvH'GF'fh'GFgf)um.(f.)",
    source: "Graduale Romanum (GregoBase #227)",
    blurb: {
      text: "Sacerdotes Dei draws two verses from the canticle sung by the three young men in the furnace in Daniel 3, a litany that moves through priests, servants, spirits of the just, and many others, each called in turn to bless the Lord. The introit takes verse 84 and verse 87, passing over the two verses between them, and joins them directly. The wording is also compressed: where the Vulgate of verse 84 reads \"Benedicite, sacerdotes Domini, Domino,\" the chant gives \"Sacerdotes Dei, benedicite Dominum,\" and the closing \"laudate et superexaltate eum in sæcula\" becomes the briefer \"laudate Deum.\"",
      source: "Dan. 3:84, 87 (Douay-Rheims; Latin from the Clementine Vulgate)",
    },
  },
  "common-pope": {
    title: "Si diligis me",
    latin: "Si díligis me, Simon Petre, pasce agnos meos, pasce oves meas.",
    translation: "If you love me, Simon Peter, feed my lambs, feed my sheep.",
    mode: "Introit · Common of a Pope · Mode III",
    reference: "John 21:15-17",
    gabc: "(c4) SI(e[ll:1]d) dí(g)li(hj)gis(ij) me,(j.) *(,) Si(jjj_h)mon(hk) Pe(kj)tre,(jkjji.) (;) pa(gh'j)sce(jjjvIH) a(h!iwj)gnos(h_g) me(g_[oh:h]f)os,(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (;) pa(g.h!iw!jvIH)sce(jj) o(jjg)ves(g.h!iw!jvIHi.g!hw!ivHG) me(egff)as.(fe..) (::)",
    source: "Graduale Romanum (GregoBase #674)",
    blurb: {
      text: "Si diligis me compresses three verses of John 21 into a single sentence. In the full exchange, Jesus asks Peter three times whether he loves him and three times commands him to tend the flock; this Introit takes the opening address from verse 15, then joins the two distinct commands, \"pasce agnos meos\" and \"pasce oves meas,\" the second of which does not appear until verse 17, at the close of the whole exchange. The Mass built around it continues the theme: its Epistle from 1 Peter 5 opens with \"páscite qui in vobis est gregem Dei,\" and its Gospel is Matthew 16, the scene where Jesus promises Peter the keys of the kingdom.",
      source: "John 21:15-17 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C4b (Missale Romanum formulary)",
    },
  },
  "common-martyr-paschal": {
    title: "Protexisti me",
    latin: "Protexísti me, Deus, a convéntu malignántium, allelúja : a multitúdine operántium iniquitátem, allelúja, allelúja.",
    translation: "You have protected me, O God, from the assembly of the malignant, alleluia: from the multitude of the workers of iniquity, alleluia, alleluia.",
    mode: "Introit · Common of a Martyr (Paschal Time) · Mode VII",
    reference: "Ps. 64:3",
    gabc: "(c2) PR{o}(cd)te(c)xí(cd'f)sti(f) me(gfg) ()* De(gh!ivHG'h)us(hg..) (;) a(g) con(gf~)vén(g!iiivH~G~)tu(hg) ma(f)li(gffe)gnán(fg~)ti(gh!ivHG'h)um,(hg..) (,) al(ghf~)le(g)lú(g!hwihi){ia} :(hg..) (:) a(gf) mul(g)ti(i)tú(h/iji)di(hiHG'h)ne(hg..) (,) o(g)pe(gi)rán(i)ti(i_[oh:h]hivHG'h)um(h_g) in(gh)i(h)qui(fh)tá(ghffef)tem,(fe..) (;) al(fg~)le(g)lú(fge/fgf){ia},(f.) (,) al(fg)le(ghffvE'DC)lú(cdc___){ia}.(c.) (::)",
    source: "Graduale Romanum (GregoBase #340)",
    blurb: {
      text: "Protexisti me draws a single verse from Psalm 64, setting it as God's word of past protection rather than a petition. The verse just before it is a cry to be delivered from the fear of the enemy; the verses that follow describe those enemies as having whetted their tongues like a sword in order to shoot in secret the undefiled, the Latin word being immaculatum. Sung at a martyr's Mass, the introit lets that surrounding context of hidden violence against the innocent speak quietly in the background.",
      source: "Ps. 64:3 (Vulgate numbering Ps. 63:3) (Douay-Rheims; Latin from the Clementine Vulgate)",
    },
  },
  "common-martyr-2-paschal": {
    title: "Protexisti me",
    latin: "Protexísti me, Deus, a convéntu malignántium, allelúja : a multitúdine operántium iniquitátem, allelúja, allelúja.",
    translation: "You have protected me, O God, from the assembly of the malignant, alleluia: from the multitude of the workers of iniquity, alleluia, alleluia.",
    mode: "Introit · Common of a Martyr (Paschal Time) · Mode VII",
    reference: "Ps. 64:3",
    gabc: "(c2) PR{o}(cd)te(c)xí(cd'f)sti(f) me(gfg) ()* De(gh!ivHG'h)us(hg..) (;) a(g) con(gf~)vén(g!iiivH~G~)tu(hg) ma(f)li(gffe)gnán(fg~)ti(gh!ivHG'h)um,(hg..) (,) al(ghf~)le(g)lú(g!hwihi){ia} :(hg..) (:) a(gf) mul(g)ti(i)tú(h/iji)di(hiHG'h)ne(hg..) (,) o(g)pe(gi)rán(i)ti(i_[oh:h]hivHG'h)um(h_g) in(gh)i(h)qui(fh)tá(ghffef)tem,(fe..) (;) al(fg~)le(g)lú(fge/fgf){ia},(f.) (,) al(fg)le(ghffvE'DC)lú(cdc___){ia}.(c.) (::)",
    source: "Graduale Romanum (GregoBase #340)",
    blurb: {
      text: "Protexisti me draws a single verse from Psalm 64, setting it as God's word of past protection rather than a petition. The verse just before it is a cry to be delivered from the fear of the enemy; the verses that follow describe those enemies as having whetted their tongues like a sword in order to shoot in secret the undefiled, the Latin word being immaculatum. Sung at a martyr's Mass, the introit lets that surrounding context of hidden violence against the innocent speak quietly in the background.",
      source: "Ps. 64:3 (Vulgate numbering Ps. 63:3) (Douay-Rheims; Latin from the Clementine Vulgate)",
    },
  },
  "common-several-martyrs-paschal": {
    title: "Sancti tui",
    latin: "Sancti tui, Dómine, benedícent te : glóriam regni tui dicent, allelúja, allelúja.",
    translation: "Your saints, O Lord, shall bless you: they shall speak of the glory of your kingdom, alleluia, alleluia.",
    mode: "Introit · Common of Several Martyrs (Paschal Time) · Mode III",
    reference: "Ps. 145:10-11",
    gabc: "(c4) SAn(f)cti(fff/d_[oh:h]e_[oh:h]d_[oh:h]) tu(g)i,(h) *(,) Dó(hkjji)mi(ji)ne,(j.) (;) be(jjj)ne(g!hwih)dí(j)cent(gh~) te :(e.) (:) gló(ef)ri(g)am(ghj) re(hi)gni(h) tu(hhg)i(h!iwj) di(h!iw!jvI'HG'h)cent,(hg..) (:) al(e)le(f)lú(gf~){ia},(g.) (,) al(gf~)le(g_[oh:h]e/f!gwh_g)lú(ghghFD'ewf/ge~){ia}.(e.) (::)",
    source: "Graduale Romanum (GregoBase #1231)",
    blurb: {
      text: "Psalm 145 opens verse 10 with all creation giving praise, \"Let all thy works, O Lord, praise thee,\" before turning to the saints. This Introit drops that first half entirely, beginning instead with the saints alone, then borrows only the first clause of verse 11, setting aside its continuation, \"et potentiam tuam loquentur,\" they shall tell of thy power. Two verses are drawn down to a single beam of attention on the saints and their proclamation of God's kingdom, fitting for a feast in their honor.",
      source: "Ps. 145:10-11 (Vulgate numbering Ps. 144:10-11) (Douay-Rheims; Latin from the Clementine Vulgate)",
    },
  },
};

