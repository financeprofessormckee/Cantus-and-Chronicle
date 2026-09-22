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
];


window.COMMON_INTROITS = {
  "common-apostles": {
    title: "Mihi autem nimis",
    latin: "Mihi autem nimis honoráti sunt amíci tui, Deus : nimis confortátus est principátus eórum.",
    translation: "But to me your friends, O God, are made exceedingly honorable: their principality is exceedingly strengthened.",
    mode: "Introit · Common of Apostles · Mode II",
    gabc: "(f3) MI(e)HI(f) au(f)tem(hh) * ni(ihi)mis(ihi_[oh:h]f) (,) ho(fi)no(i)rá(ij)ti(ih) sunt(hv.gih.) (,) a(f)mí(ege)ci(f) tu(f)i,(hhi) De(fgF'E)us :(e.) (:) ni(h)mis(hhh) con(f)for(fi~)tá(i)tus(h) est(hji.) (,) prin(hihh)ci(ef)pá(hhi)tus(h) e(h)ó(hjI'H)rum.(hhh/f_[oh:h]g_[oh:h]f._[oh:h]) (::)",
    source: "Graduale Romanum (GregoBase #475)"
  },
  "common-martyr": {
    title: "In virtute tua",
    latin: "In virtúte tua, Dómine, laetábitur justus : et super salutáre tuum exsultábit veheménter : desidérium ánimae ejus tribuísti ei.",
    translation: "In your strength, O Lord, the just man shall joy: and in your salvation he shall rejoice exceedingly: you have given him his heart's desire.",
    mode: "Introit · Common of a Martyr · Mode VII",
    gabc: "(c3) IN(e) vir(ef~)tú(f)te(f) tu(fdfe)a(e.) (,) * Dó(fh)mi(hhh)ne,(h.) (;) lae(hg)tá(hji)bi(ihhg)tur(h.f!gwh) ju(efe___)stus,(e.) (:) et(e) su(ef/hgh)per(h) sa(h)lu(h)tá(h)re(fh) tu(hg/hif)um(fe..) (;) ex(ef/hg)sul(h)tá(gh'i)bit(i) ve(ijh)he(f!gwh)mén(hi~)ter :(h.) (:) de(hg)si(h)dé(hji)ri(h)um(h') á(h)ni(hhh)mae(e) e(ghffd~)jus(d.) (;) tri(ef)bu(e)í(e.f!gwh/ihi)sti(ihh) e(efe___)i.(e.) (::)",
    source: "Graduale Romanum (GregoBase #316)"
  },
  "common-confessor-bishop": {
    title: "Statuit ei Dominus",
    latin: "Státuit ei Dóminus testaméntum pacis, et príncipem fecit eum : ut sit illi sacerdótii dígnitas in aetérnum.",
    translation: "The Lord made a covenant of peace with him, and made him a prince: that the dignity of priesthood should be to him for ever.",
    mode: "Introit · Common of a Bishop Confessor · Mode I",
    gabc: "(c4) STá(ixdh'!iv)tu(h)it(h') *() e(h)i(h) Dó(hjjh)mi(ixihig)nus(hg..) (;) te(ixhig)sta(f)mén(fg)tum(ghF'Ef) pa(d_[oh:h]e_[oh:h]d_[oh:h])cis,(d.) (:) et(d) prín(df!gh~)ci(g)pem(g) fe(ixhig)cit(f') e(fg'h)um :(h.) (;) ut(h) sit(jj) il(jk)li(h.) (,) sa(jj)cer(j)dó(j)ti(j')i(kvJ'Ij') dí(h)gni(h_[oh:h]i_[oh:h]h_[oh:h])tas(h.) (;) in(de!fg//ef'h) ae(hghfgvFE)tér(d!ewfef)num.(e[ll:1]d..) (::)",
    source: "Graduale Romanum (GregoBase #456)"
  },
  "common-confessor-doctor": {
    title: "In medio Ecclesiae",
    latin: "In médio Ecclésiae apéruit os ejus : et implévit eum Dóminus spíritu sapiéntiae, et intelléctus : stolam glóriae índuit eum.",
    translation: "In the midst of the Church he opened his mouth: and the Lord filled him with the spirit of wisdom and understanding: he clothed him with a robe of glory.",
    mode: "Introit · Common of a Doctor · Mode VI",
    gabc: "(c4) IN(df~) mé(fff)di(f)o(f) *() Ec(f)clé(gfg)si(f)ae(fff) (,) a(cd)pé(fff)ru(f)it(f) os(g_[oh:h]f) e(f_[oh:h]g_[oh:h]f_[oh:h])jus :(f.) (:) et(f) im(f)plé(ixf!gwh'!iv)vit(h) e(hjjh)um(h.) Dó(gh)mi(gf)nus(f.) (,) spí(fh)ri(g)tu(f) sa(fgf)pi(ef'g)én(gh~)ti(f)ae,(fgf.) (,) et(f) in(ef'g)tel(hghf)lé(f)ctus :(fffc..) (:) sto(fdf)lam(f) gló(ghf)ri(f_d)ae(d_c) (,) ín(ff)du(f)it(ff) e(f_[oh:h]g_[oh:h]f_[oh:h])um.(f.) (::)",
    source: "Graduale Romanum (GregoBase #233)"
  },
  "common-virgin": {
    title: "Me exspectaverunt",
    latin: "Me exspectavérunt peccatóres ut pérderent me : testimónia tua, Dómine, intelléxi : omnis consummatiónis vidi finem : latum mandátum tuum nimis.",
    translation: "The wicked have waited for me to destroy me: but I have understood your testimonies, O Lord: I have seen an end of all perfection: your commandment is exceedingly broad.",
    mode: "Introit · Common of a Virgin · Mode II",
    gabc: "(f3) ME(hf/hhh) ex(h)spe(h)cta(h)vé(hih)runt(hhh) *() pec(hih)ca(f)tó(f/hhf)res,(f.) (,) ut(fef) pér(h.f!gw!hi)de(h)rent(hiH'Gh) me :(f.) (:) te(f)sti(h)mó(hi)ni(i)a(i) tu(i)a,(i) Dó(ij)mi(ih)ne,(h.) (,) in(h)tel(h)lé(gh!ijIG'h)xi :(h.) (;) o(fi)mnis(i) con(i)sum(ih~)ma(h!jij)ti(h)ó(f!hgh)nis(f.) (,) vi(fhg)di(hi) fi(fgF'E)nem :(e.) (:) la(h)tum(gihh) man(ef)dá(hhi)tum(h) tu(h_f)um(i) ni(hiH'F)mis.(f.) (::)",
    source: "Graduale Romanum (GregoBase #938)"
  },
  "common-confessor": {
    title: "Os justi",
    latin: "Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium : lex Dei ejus in corde ipsíus.",
    translation: "The mouth of the just shall meditate wisdom, and his tongue shall speak judgment: the law of his God is in his heart.",
    mode: "Introit · Common of a Confessor · Mode VI",
    gabc: "(c4) OS(ff) ju(fgff)sti(c.) (,) * me(c)di(dcd)tá(fd/fffg)bi(f)tur(ffe) sa(g)pi(hghf)én(f)ti(f_[oh:h]g_[oh:h]f_[oh:h])am,(f.) (:) et(f) lin(gh~)gua(h) e(ixhiH~'G~)jus(h_g) (,) lo(fg)qué(f)tur(fe) ju(df)dí(fe/f_g)ci(d!ew!fvE'DC'd)um :(cd/ed..) (:) lex(c) De(df)i(f) e(e/gh~)jus(h.) (,) in(g) cor(f)de(ghghg) i(f)psí(f_[oh:h]g_[oh:h]f_[oh:h])us.(f.) (::)",
    source: "Graduale Romanum (GregoBase #1374)"
  },
  "common-confessor-2": {
    title: "Justus ut palma",
    latin: "Justus ut palma florébit : sicut cedrus Líbani multiplicábitur : plantátus in domo Dómini, in átriis domus Dei nostri.",
    translation: "The just shall flourish like the palm tree: he shall grow up like the cedar of Lebanon: planted in the house of the Lord, in the courts of the house of our God.",
    mode: "Introit · Common of a Confessor · Mode I",
    gabc: "(c4) JU(d!ffd/fff)stus(e_[oh:h][ll:1]d_[oh:h]) (,) * ut(cd) pal(cd'f)ma(fvvED') flo(d)ré(d!ew!fvED)bit :(dff'1f//fff) (;) sic(c)ut(d) ce(f)drus(g) Lí(f)ba(gh)ni(h.) (,) mul(h)ti(h)pli(h)cá(hjhhg)bi(hggfg)tur :(fg..) (:) plan(df)tá(fff/g_[oh:h]f)tus(f) in(f) do(fg)mo(gffd) Dó(d)mi(dff'1f/g_[oh:h]f)ni,(f.) (;) in(f) á(f_[oh:h]g_[oh:h]f_[oh:h])tri(f)is(f) do(fg)mus(gff) De(d)i(c!fff) no(d_c/fff/ced)stri.(d.) (::)",
    source: "Graduale Romanum (GregoBase #108)"
  },
  "common-virgin-martyr": {
    title: "Loquebar de testimoniis",
    latin: "Loquébar de testimóniis tuis in conspéctu regum, et non confundébar : et meditábar in mandátis tuis, quae diléxi nimis.",
    translation: "I spoke of your testimonies before kings, and was not ashamed: and I meditated on your commandments, which I loved exceedingly.",
    mode: "Introit · Common of a Virgin Martyr · Mode V",
    gabc: "(c3) LO(df)qué(hhi)bar(h.) *(,) de(h) te(h)sti(h)mó(i)ni(h.f!gwh)is(h) tu(hi!jvIH'i)is(ih..) (;) in(h) con(iji~)spé(j)ctu(h) re(hjIH'i)gum,(h.) (,) et(fdf) non(hh) con(ijh)fun(hh)dé(h_[oh:h]i_[oh:h]h_[oh:h])bar :(h.) (:) et(h_) me(e)di(f)tá(hhi)bar(h.) (,) in(hihh) man(ef)dá(hhi)tis(h) tu(hh/ijh)is,(f/hhfh.) (;) quae(d) di(ef)lé(f/hhf)xi(e) ni(ef/hfh)mis.(d.) (::)",
    source: "Graduale Romanum (GregoBase #510)"
  },
  "common-several-martyrs": {
    title: "Sapientiam Sanctorum",
    latin: "Sapiéntiam Sanctórum narrent pópuli, et laudes eórum núntiet ecclésia : nómina autem eórum vivent in saéculum saéculi.",
    translation: "Let the peoples declare the wisdom of the saints, and the church proclaim their praise: and their names shall live forever.",
    mode: "Introit · Common of Several Martyrs · Mode I",
    gabc: "(c4) SA(h)pi(h)én(h)ti(gf)am(f) *() san(gfg)ctó(ixhgih)rum(h.) (,) nar(g_[oh:h]f)rent(hfh) pó(h)pu(h!iwj_h)li,(h.) (:) et(h) lau(jk~)des(k) e(kj)ó(kljjhi)rum(i_[oh:h]h) (,) nún(j)ti(jk)et(ki) ec(j)clé(i)si(hjI'H)a :(h.) (:) nó(h)mi(g)na(ghg) au(h)tem(f) e(hfh)ó(jh/jjjk)rum(j.) (,) vi(h!jjh)vent(h) in(hg/hfg) saé(d)cu(ff)lum(gvF'Ef') saé(d)cu(d_[oh:h]e_[oh:h]d_[oh:h])li.(d.) (::)",
    source: "Graduale Romanum (GregoBase #11)"
  },
  "common-virgin-not-martyr": {
    title: "Dilexisti justitiam",
    latin: "Dilexísti justítiam, et odísti iniquitátem : proptérea unxit te Deus, Deus tuus, óleo laetítiae prae consórtibus tuis.",
    translation: "You have loved justice, and hated iniquity: therefore God, your God, has anointed you with the oil of gladness above your fellows.",
    mode: "Introit · Common of a Virgin · Mode VIII",
    gabc: "(c4) DI(g)le(g)xí(hjg)sti(g_[oh:h]f) *() ju(g)stí(g.h!iwjjk)ti(j)am,(j.) (;) et(j) o(j)dí(jkj)sti(jjj) in(gh)i(h)qui(hfhg)tá(ghg___)tem :(g.) (:) pro(fg)ptér(gjj)e(hg)a(ghggf.0) (,) un(gh/i.h!iwj)xit(hjg) te(g) De(ghG'F)us,(f.) (,) De(fg'h)us(h) tu(ixhgivHG'hf)us,(f.) (;) ó(g)le(fg)o(g) lae(h)tí(jj)ti(hg)ae(g/jjh/jggf.0) (;) prae(g) con(hi~)sór(i.h!iwj)ti(hg)bus(gv.f!hfg) tu(ghg___)is.(g.) (::)",
    source: "Graduale Romanum (GregoBase #629)"
  },
  "common-holy-women": {
    title: "Cognovi Domine",
    latin: "Cognóvi, Dómine, quia aéquitas judícia tua : et in veritáte tua humiliásti me : confíge timóre tuo carnes meas, a mandátis tuis tímui.",
    translation: "I have known, O Lord, that your judgments are equity: and in your truth you have humbled me. Pierce my flesh with your fear; I am afraid because of your commandments.",
    mode: "Introit · Common of Holy Women · Mode III",
    gabc: "(c4) CO(eef)gnó(dge)vi(gh) *() Dó(hkjji)mi(ji)ne,(j.) (;) qui(g)a(h) aé(h!jj)qui(h)tas(hgh.) (,) ju(f)dí(ef'h)ci(gfg)a(ghG'Fghg) tu(egff)a,(fe..) (:) et(e!fw!gh) in(g) ve(g)ri(h)tá(hjIH')te(h) tu(gfg)a(ghhg.) (;) hu(dg)mi(g/hji)li(j)á(jjj)sti(ixhvGF'gwh!ivHG'h) me :(hg..) (:) con(dg)fí(g/hji)ge(j) ti(j)mó(jjj)re(h) tu(h!iw!jvIH)o(hgh.) (,) car(ixe.f!gw!hihhg~)nes(gh) me(g_[oh:h]f)as,(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) a(g) man(g)dá(h!jjj)tis(h) tu(hg)is(gihig.) (,) non(gh) me(e.f!gwh) re(h)pél(g_[oh:h]fhvGFgvF~E~)las.(e.) (::)",
    source: "Graduale Romanum (GregoBase #619)"
  },
};

