"use strict";

/*
 * data/common-propers.js — the sung propers (Gradual/Alleluia/
 * Offertory/Communion) for each Common-of-Saints Mass formulary, keyed
 * the same as data/common-introits.js's window.COMMON_INTROITS. See that
 * file's header and sources/gregobase/build-common-of-saints.py for how
 * these are authored.
 */

window.COMMON_PROPERS = {
  "common-apostles": {
    gradual: {
      title: "Nimis honorati sunt",
      latin: "Nimis honoráti sunt amíci tui, Deus : nimis confortátus est principátus eórum. ℣. Dinumerábo eos, et super arénam multiplicabúntur.",
      translation: "Your friends, O God, are made exceedingly honorable: their principality is exceedingly strengthened. ℣. I will number them, and they shall be multiplied above the sand.",
      mode: "Gradual · Common of Apostles · Mode II",
      gabc: "(c3) NI(egf)mis(f.) *(,) ho(f)no(f)rá(hfghvF'Egef)ti(g) sunt(f.) (;) a(f)mí(hf/hi'j)ci(h_f) tu(f_e)i,(gxegFE.) (,) De(e[ll:1]d/fef)us :(fd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) ni(hh)mis(h) con(h)for(h)tá(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF')tus(f) est(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) prin(d)ci(ef)pá(f.0/[-0.5]hvGF'g)tus(e) e(f)ó(hf/h_i)rum.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Di(f)nu(h)me(hi)rá(i)bo(ij) e(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)os :(ji..) (:) et(i) su(k.i!jw!kvJI')per(i) a(ij)ré(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)nam(f.) *(:) mul(d)ti(ef)pli(f.0/[-0.5]hvGF'g)ca(ef)bún(hf/h_i~)tur.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #148)"
    },
    alleluia: {
      title: "Nimis honorati sunt",
      latin: "Allelúia. ℣. Nimis honoráti sunt amíci tui, Deus : nimis confortátus est principátus eórum.",
      translation: "Alleluia. ℣. Your friends, O God, are made exceedingly honorable: their principality is exceedingly strengthened.",
      mode: "Alleluia · Common of Apostles · Mode VIII",
      gabc: "(c3) AL(def)le(f_e/f!gwhg)lú(fhh'1h){ia}.(hiHF'fe.) *(;) ij.(gh//efED.f!gwhhg ehf/gffe.) (::) ℣. Ni(hv.gih)mis(h) ho(h)no(hg)rá(gh!ivvHFhfg)ti(h) sunt(g.) (;) a(gf)mí(hji)ci(h) tu(gh)i,(f_e) De(hvvGE.gxfgFD./!egF'E/!fe)us :(e.) (:) ni(efeh)mis(h) con(h)for(h)tá(hfh'GE//fhF'DgxgvFEf.0/[-0.5]hhh/ijHF.1)(,)(g_[oh:h]i_[oh:h]g_[oh:h]ivHG'he.gxf_e/!g_[oh:h]egxgvFEfd)tus(e) est(d.) (;) prin(fd~)ci(e)pá(ef)tus(f) *() e(f)ó(hg/hfh)rum.(ghFE.) (,) (df!hvF'E//d.0f!gwhghvGFg.//egf'gvE'Defe.) (,) (gxhhvF'EfgED.gyhhvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #130)"
    },
    offertory: {
      title: "Nimis honorati",
      latin: "Nimis honoráti sunt amíci tui, Deus : nimis confortátus est principátus eórum, allelúia.",
      translation: "Your friends, O God, are made exceedingly honorable: their principality is exceedingly strengthened, alleluia.",
      mode: "Offertory · Common of Apostles · Mode IV",
      gabc: "(c4) NI(ixe!fg!hv//ig/hvFD'/ewf!gvFE)mis(e.) (,) * ho(dg)no(gih)rá(h!iwj!kvJH)ti(h_g) sunt(giH'G/h.) (;) a(ef)mí(d/fgf)ci(e) tu(fgF0'/[-0.5]{ix}E0fg/hihhg)i(g./fg!hv/hV!g.) (,) De(g_[oh:h]f/hvGFgvFE)us :(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) ni(df)mis(fff//fv./fff) (,) con(df/gV!ef~)for(e)tá(ff/h)tus(h/jjj) est(ixg/jjjvH'G/hv./fh/ig/ff/ded.) (:) prin(df/gV!ef~)ci(e)pá(ff/h_g/hvGF)tus(g.) (,) e(g/jjjh)ó(hv./giH'G)rum,(gvFEf_e//g_[oh:h]f/gffe.) (:) al(f)le(e!fg/hgh)lú(hjg){ia}.(gvFEf_e//g_[oh:h]f/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #10326)"
    },
    communion: {
      title: "Vos qui secuti",
      latin: "Vos, qui secúti estis me, sedébitis super sedes, judicántes duódecim tribus Israël.",
      translation: "You who have followed me shall sit upon seats, judging the twelve tribes of Israel.",
      mode: "Communion · Common of Apostles · Mode I",
      gabc: "(c4) VOS,(df!gh) *(,) qui(g) se(g)cú(g)ti(ge) e(fg)stis(efED'e) me,(e[ll:1]d..) (;) se(d)dé(f)bi(fff)tis(dfddc.) (,) su(ixfg!hi)per(hg~) se(f.e!fwgfg)des,(gf..) (:) ju(f)di(ghg)cán(h)tes(g) du(f)ó(g)de(fe)cim(dfddc.) (,) tri(fffd//ef!gh)bus(f_e) Is(d)ra(de!fvED'e)el.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1028)"
    },
  },
  "common-martyr": {
    gradual: {
      title: "Gloriosus Deus",
      latin: "Gloriósus Deus in sanctis suis : mirábilis in majestáte, fáciens prodígia. ℣. Déxtera tua, Dómine, glorificáta est in virtúte : déxtera manus tua confrégit inimícos.",
      translation: "God is glorious in his saints: wondrous in majesty, working wonders. ℣. Your right hand, O Lord, is magnified in strength: your right hand has slain the enemy.",
      mode: "Gradual · Common of a Martyr · Mode I",
      gabc: "(f3) GLo(c)ri(c)ó(ef)sus(fhf/gffe.) *(,) De(ghG'Fhv.giH'GF)us(f.) (;) in(f!gwh) san(hv.g!ijH'GF'g)ctis,(f.) (,) (ef!hhhvGFg.f!gwhhvGF'hf/gffe.) (:) mi(f!gw!hi)rá(hi)bi(ihhvGF'g)lis(f.) (,) (ef!hhhvGFg.f!gwhhvGF'hf/gffe.) (;) in(f!gwhhvGF'g) ma(ef)je(h.f!gwh)stá(hiHF'g)te,(f.) (,) (ef!hvGFh_g//e.f!gw!hvGF'hf/gffe.) (:) fá(h_[oh:h]i_[oh:h]h_[oh:h])ci(kxh.i!jwkj)ens(j) pro(jij)dí(hi'j)gi(hvGF)a.(f//gh/iffe.) (,) (ef!h/[1]{/[-1]kx}h/ij!kvJH'//ih/ihhf.) (f+::c4) ℣. Déx(dh)te(h)ra(h) tu(h)a(hg) Dó(ixhv.fh!ivHGhv.)(,)(fghjij//h!jjjvGFh./jjh/jjg/j_i)mi(h_[oh:h]i_[oh:h]h_[oh:h])ne,(h.) (;) glo(fg)ri(f)fi(gh)cá(h)ta(g./h!iw!jvIH') est(hgg) (,) in(f) vir(ghg~)tú(h_f/gh!jv.ijh.1)(,)(ixjjvH'GhiG'FghF'Dfv.e!gwhgh)te :(ixhf/higff/ded.) (:) déx(hj)te(h)ra(ghg) ma(f)nus(ghg) tu(h_f/gh!jv.ijh.1)(,)(ixjjvH'GhiGF.)(,)(hf/gh!jjvH'Gh)a,(ixhf/higff/ded.) (:) con(d)fré(dfED'fvED.)(,)(de!fg/hjIH'hgh.ixfh!ivGF'E//f!gw!hi)git(hg__) *(,) in(g)i(gh)mí(ixjhiGF'h!jjvH'G)cos.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #888)"
    },
    alleluia: {
      title: "Gloriosus Deus",
      latin: "Allelúia. ℣. Gloriósus Deus in sanctis ejus : mirábilis in majestáte, fáciens prodígia.",
      translation: "Alleluia. ℣. God is glorious in his saints: wondrous in majesty, working wonders.",
      mode: "Alleluia · Common of a Martyr · Mode IV",
      gabc: "(c4) AL(d!ff)le(ef)lú(ghG'Fg_[uh:l]h){ia}.(hjH'G) *(,) (h_dev.fg/h_g h_dev.fg!hvGF'hgge.) (::) ℣. Glo(h)ri(h)ó(h')sus(g) De(ghG'E)us(fgfg.) (,) in(gh) san(hg/hf/ghg)ctis(gd) e(e!gfg)jus :(fe..) (:) mi(f)rá(gh)bi(gf)lis(g') in(f) ma(d')je(f)stá(fv.fffdgvFE.)(,)(df/h_f/g_[oh:h]efv.df/gef)te,(fe..) (;) fá(ef'g)ci(g)ens(gdf.) *() pro(e)dí(ef'g)gi(f!hgh)a.(hjH'G) (,) (h_dev.fg/h_g h_dev.fg!hvGF'hgge.) (::)",
      source: "Graduale Romanum (GregoBase #274)"
    },
    offertory: {
      title: "In virtute tua",
      latin: "In virtúte tua, Dómine, laetábitur justus, et super salutáre tuum exsultábit veheménter : desidérium ánimae ejus tribuísti ei.",
      translation: "In your strength, O Lord, the just man shall joy, and in your salvation he shall rejoice exceedingly: you have given him his heart's desire.",
      mode: "Offertory · Common of a Martyr · Mode VI",
      gabc: "(c2) IN(c) vir(d)tú(ff)te(f) tu(f)a,(f.) *(,) Dó(fgf)mi(exfee)ne,(c!ece.) (;) lae(c)tá(ffg)bi(f)tur(fg/hg/h_g) ju(fg!hvGF'g)stus,(gf..) (:) et(f) su(f!gwh'!iv)per(h) sa(h)lu(h)tá(h/jjh/i_[uh:l]j)re(g_[oh:h]fg) tu(d!fff/g_[oh:h]f)um(f.) (;) ex(g)sul(f)tá(f)bit(d!ff) ve(d)he(ff/gf)mén(deD~'C~)ter :(dc..) (:) de(c)si(d)dé(ffg)ri(f)um(f.) (,) á(hj)ni(g)mae(f) e(d!fffvEDevD~C~)jus(dc..) (;) tri(c)bu(d)í(ffg)sti(f) e(f!gwhghjjh//giH'GF.)(,)(fff//fgf/ghg/hf/g_[oh:h]f)i.(f.) (::)",
      source: "Graduale Romanum (GregoBase #667)"
    },
    communion: {
      title: "Posuisti Domine",
      latin: "Posuísti, Dómine, in cápite ejus corónam de lápide pretióso.",
      translation: "You have set, O Lord, upon his head a crown of precious stone.",
      mode: "Communion · Common of a Martyr · Mode VI",
      gabc: "(c4) PO(c)su(d)í(ff)sti(fe/ghf') Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])ne(f.) *(;) in(f) cá(ixf!gwh'!iv)pi(h)te(h') e(j)jus(hhg) co(h!iwj)ró(h_ghvGF'g)nam(gf..) (;) de(fv.egf) lá(fg)pi(deDC'd)de(d_c) pre(f)ti(gfhvGF)ó(f_[oh:h]g_[oh:h]f_[oh:h])so.(f.) (::)",
      source: "Graduale Romanum (GregoBase #586)"
    },
  },
  "common-confessor-bishop": {
    gradual: {
      title: "Corona aurea",
      latin: "Coróna áurea super caput ejus, expréssa signo sanctitátis, glória honóris, et opus fortitúdinis. ℣. Quóniam praevenísti eum in benedictiónibus dulcédinis : posuísti in cápite ejus corónam de lápide pretióso.",
      translation: "A crown of gold upon his head, engraved with the seal of holiness, the glory of honor, and a work of might. ℣. For you have gone before him with blessings of sweetness: you have set upon his head a crown of precious stone.",
      mode: "Gradual · Common of a Bishop Confessor · Mode III",
      gabc: "(c3) CO(e)ró(fhg)na(h.) *(,) áu(hh//hhh.f!gwh/i_[oh:h]h//j_ijvIG)re(g)a(ig/hi/jh) (,) (hhh'ih/ihhg.) (;) su(f)per(fhg) ca(hihhf)put(hig'/hiffe.) (,) e(fhg/h_fiihhg)jus :(gv.eg/ihh/fgf.) (:) ex(f)prés(hf/ghg)sa(ge/f!hhhvFE'ec) (,) si(d_e)gno(e) san(e)cti(eg)tá(g)tis,(fgF'Ef!hh/f!hhhvGF'hee[ll:1]d.0) (:) gló(fh)ri(ef)a(f) ho(f)nó(hf/gh!ivFE')ris,(feec) (;) et(e) o(ef)pus(fef) for(fe)ti(f!hh)tú(gxfe/fgE'DefD'C)(,)(ef!hvvF'Eff//efg)di(e)nis.(c./eec//e[ll:1]d/ec..) (::) ℣. Quó(ef)ni(e)am(fh) prae(hg)ve(hi)ní(ihhgh)sti(h_g) (,) e(jji/jihhf/ig/h_[oh:h]i_[oh:h]h_[oh:h])(,)(hhhvFEhg/h_i)um(ih/ihhg.) (;) in(f) be(fi)ne(ihhf)di(f!gwh)cti(h)ó(gh/jij)ni(hg)bus(g.) (,) dul(g)cé(h_fhvGE)di(f!gwh_g)nis :(gv.eg/ihh/fgf.) (:) po(f)su(ef)í(fhf/hhfg)sti(f.) (,) in(fg~) cá(ge/f!hhhvFE'ec)pi(de)te(e.) (,) e(eg)jus(fgF'Ef!hh/f!hhhvGF'hee[ll:1]d.0) (;) co(f)ró(hf/gh!ivFE')nam(feec) (,) de(e) lá(ef)pi(f)de(fef) ()* pre(fe)ti(f!hh)ó(gxfe/fgE'DefD'C)(,)(ef!hvvF'Eff//ef/ge)so.(c./eec//e[ll:1]d/ec..) (::)",
      source: "Graduale Romanum (GregoBase #771)"
    },
    alleluia: {
      title: "Corona aurea",
      latin: "Allelúia. ℣. Coróna áurea super caput ejus, expréssa signo sanctitátis, glória honóris, et opus fortitúdinis.",
      translation: "Alleluia. ℣. A crown of gold upon his head, engraved with the seal of holiness, the glory of honor, and a work of might.",
      mode: "Alleluia · Common of a Bishop Confessor · Mode I",
      gabc: "(c4) AL(ddc~)le(egE'Cd.0/egED'ew!fvED)lú(dV!cd~){ia}.(d.) (;) * ij.(dhhvGEfvED.ce!fg'EDffd.) (;) (c/!ee//c/!dd//ce!gvvFDee) (,) (dfegvEDffd.) (::) ℣. Co(cd)ró(dfddce//fg'EDffd)na(d) áu(dc~)re(cd)a(d.) (;) su(d)per(dh~) ca(ixhiH'GhvGEfvED)put(dfddc.) (,) e(dfe/fg!hvF'ED.ef!gvEDffd)jus :(d.) (:) ex(dfd)prés(cd)sa(d.) (,) si(cd~)gno(d) san(dh/jjggf/gh.)(,)(hggf/gh/jjggf/gh.)(,)(g.h!iwj!kvJ'IH'Gh.)(,)(hkkj/klJ'IH)cti(gh)tá(g.h!iwj/kjjvIH)tis,(gh..) (;) gló(h)ri(gh)a(h) ho(hjI'Gi!jk)nó(ih/jjh)ris,(h.) (:) et(d) o(cd)pus(d) *() for(d)ti(d_c)tú(egE'Cd.0/egED'ew!fvED'd)di(cd)nis.(d.) (;) (dhhvGEfvED.ce!fg'EDffd.) (;) (c/!ee//c/!dd//ce!gvvFDee) (,) (dfegvEDffd.) (::)",
      source: "Graduale Romanum (GregoBase #413)"
    },
    offertory: {
      title: "Sacerdotes Domini",
      latin: "Sacerdótes Dómini incénsum et panes ófferunt Deo : et ídeo sancti erunt Deo suo, et non pólluent nomen ejus, allelúia.",
      translation: "The priests of the Lord offer incense and loaves to God: and therefore shall they be holy to their God, and not pollute his name, alleluia.",
      mode: "Offertory · Common of a Bishop Confessor · Mode IV",
      gabc: "(c4) SA(f)cer(d!ewf)dó(f)tes(e'fg) *() Dó(ixghf___//ih/igh)mi(e)ni(egf/gffe.) (;) in(f)cén(fgf)sum(ff) et(df~) pa(fff/ghggef)nes(e_[oh:h][ll:1]d) (,) óf(gh)fe(g/jjj)runt(hjhhg) De(gh)o :(hg..) (:) et(ixgih'ivGF') íd(g)e(f)o(f_e) (,) san(ef'g~)cti(g) e(ixhig)runt(ghF'E) (;) De(gh)o(gjh) su(ghf/ghg)o,(gvFD//ef/gfgd.) (:) et(df/gef) non(f) pól(ixef/hiHG')lu(hggfg)ent(g_[oh:h]d) (,) no(df/gef)men(f) e(f_[oh:h]g_[oh:h]f_[oh:h])jus,(f.) (;) al(f!gwhg~)le(ixh_f/ih/igh)lú(e){ia}.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #645)"
    },
    communion: {
      title: "Fidelis servus",
      latin: "Fidélis servus et prudens, quem constítuit Dóminus super famíliam suam : ut det illis in témpore trítici mensúram.",
      translation: "A faithful and wise servant, whom the Lord set over his household: to give them their measure of wheat in due season.",
      mode: "Communion · Common of a Bishop Confessor · Mode VII",
      gabc: "(c3) FI(e)dé(f)lis(ge) ser(fh~)vus(h.) *() et(hg~) pru(hi)dens,(i.) (;) quem(i) con(i)stí(ijij)tu(ih)it(h) Dó(hi)mi(h)nus(hg/hih.) (;) su(h)per(hg) fa(ge)mí(gh)li(f!h'i)am(hg~) su(e.)am :(e.) (:) ut(h) det(h) il(hih)lis(e.) (,) in(ghf~) tém(hi~)po(ijiigh)re(hg..) (;) trí(i!jw!kvJI'ih//i_[oh:h]ghvGF'//gh'i!jv)ti(hf)ci(hi) men(hg~)sú(efe___)ram.(e.) (::)",
      source: "Graduale Romanum (GregoBase #1008)"
    },
  },
  "common-confessor-doctor": {
    gradual: {
      title: "Justus ut palma",
      latin: "Justus ut palma florébit : sicut cedrus Líbani multiplicábitur, in domo Dómini. ℣. Ad annuntiándum mane misericórdiam tuam, et veritátem tuam per noctem.",
      translation: "The just shall flourish like the palm tree: he shall grow up like the cedar of Lebanon, in the house of the Lord. ℣. To show forth your mercy in the morning, and your truth in the night.",
      mode: "Gradual · Common of a Doctor · Mode II",
      gabc: "(c3) JU(egf)stus(f.) *(,) ut(f) pal(f)ma(f) flo(f)ré(hfghvF'Ege/fg)bit :(f.) (:) sic(f)ut(f) ce(hf/hi'j)drus(gxhffegvFE.) (,) Lí(e)ba(e[ll:1]d/fef)ni(fd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) mul(hh)ti(h)pli(h)cá(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF')bi(f)tur(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) in(d) do(de'fhvGF'g)mo(ef) Dó(hf)mi(hi)ni.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHFgwhf.1) (::) ℣. Ad(f) an(h)nun(hi)ti(i)án(i)dum(ij~) ma(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)ne(ji..) (:) mi(i!jw!kvJI'jw!kvJI)se(i)ri(i)cór(i)di(i)am(ij~) tu(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)am,(f.) (:) et(hh) ve(h)ri(h)tá(h)tem(hi~) tu(ivH'GE//fhGEfh..)(,)(gi!jvHF)am(fhF'Efhhf//hvvGF'hee[ll:1]d.0) *(:) per(de'fhvGFgef) no(hf/h_i)ctem.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #34)"
    },
    alleluia: {
      title: "Justus ut palma",
      latin: "Allelúia. ℣. Justus ut palma florébit : et sicut cedrus, quae in Líbano est, multiplicábitur.",
      translation: "Alleluia. ℣. The just shall flourish like the palm tree: and shall grow up like the cedar that is in Lebanon.",
      mode: "Alleluia · Common of a Doctor · Mode I",
      gabc: "(c4) AL(c)le(d!fdf)lú(ef!gvFEfg~){ia}.(g.) *(;) ij.(hvGFgvFEf_g hvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'ED de!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::) ℣. Ju(fhg___)stus(g_[oh:h]e//fgf/gddc.) (,) ut(cd) pal(ef'g~)ma(gv.e!g_4[uh:l]h) flo(fvED)ré(d.c!dw!evDCde)bit,(d.) (:) et(dede) sic(c)ut(e) ce(ixg_[uh:l]h/ig/h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(ixce!g_4[uh:l]h/!ig/!h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(gv.ef/g_[oh:h]e/f_dev.)(,)(gv.ef/g_[oh:h]e/f_dev.c!dwe'!fv)drus(e[ll:1]d..) (:) * mul(c)ti(d!fdf)pli(f)cá(ef!gvFE)bi(fg)tur.(g.) (,) (hvGFgvFEf_g hvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'ED de!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::)",
      source: "Graduale Romanum (GregoBase #946)"
    },
    offertory: {
      title: "Justus ut palma florebit",
      latin: "Justus ut palma florébit : sicut cedrus, quae in Líbano est, multiplicábitur.",
      translation: "The just shall flourish like the palm tree: he shall grow up like the cedar that is in Lebanon.",
      mode: "Offertory · Common of a Doctor · Mode IV",
      gabc: "(c4) JU(e.f!gwhgfffdgvFE)stus(fff) *(,) ut(dge) pal(gh)ma(g!jjjvH'GF.//ixfff!gwhg/hih.) (,) flo(ghf)ré(dgF'E)bit :(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) sic(dg)ut(gh) ce(h!iwj!kvJH//gih)drus,(hjHG'hffe.) (,) quae(ghf) in(fe~) Lí(ghF'E//fh)ba(h_g!jjjvH'G)no(g_[oh:h]f//hvGFgvFE) est,(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (;) mul(ff)ti(dgf)pli(f)cá(ixff/hihhghvGFg_[oh:h]e//hggf/ghg')bi(e)tur.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #777)"
    },
    communion: {
      title: "Fidelis servus",
      latin: "Fidélis servus et prudens, quem constítuit Dóminus super famíliam suam : ut det illis in témpore trítici mensúram.",
      translation: "A faithful and wise servant, whom the Lord set over his household: to give them their measure of wheat in due season.",
      mode: "Communion · Common of a Doctor · Mode VII",
      gabc: "(c3) FI(e)dé(f)lis(ge) ser(fh~)vus(h.) *() et(hg~) pru(hi)dens,(i.) (;) quem(i) con(i)stí(ijij)tu(ih)it(h) Dó(hi)mi(h)nus(hg/hih.) (;) su(h)per(hg) fa(ge)mí(gh)li(f!h'i)am(hg~) su(e.)am :(e.) (:) ut(h) det(h) il(hih)lis(e.) (,) in(ghf~) tém(hi~)po(ijiigh)re(hg..) (;) trí(i!jw!kvJI'ih//i_[oh:h]ghvGF'//gh'i!jv)ti(hf)ci(hi) men(hg~)sú(efe___)ram.(e.) (::)",
      source: "Graduale Romanum (GregoBase #1008)"
    },
  },
  "common-virgin": {
    gradual: {
      title: "Specie tua",
      latin: "Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna. ℣. Propter veritátem, et mansuetúdinem, et justítiam : et dedúcet te mirabíliter déxtera tua.",
      translation: "With your comeliness and your beauty, set out, proceed prosperously, and reign. ℣. Because of truth, and meekness, and justice: and your right hand shall conduct you wonderfully.",
      mode: "Gradual · Common of a Virgin · Mode V",
      gabc: "(c4) SPé(ff)ci(f)e(f_e/g_[uh:l]h) tu(gf)a,(fv.d!ff/ge'/fgd'/e[ll:1]ddc.) *(;) et(f) pul(f)chri(h)tú(jh/jjj)di(jh/jjj)ne(jh/jjlvKJ'k) (,) tu(kjjh/jhhf)a(fh//g!jjjh/jhh/fgf.) (:) in(f)tén(ghgh)de,(ixhg/hiGF./[-1]iyh!iwj) (,) pró(hf)spe(gf)re(f_g//d!f'g//fh!jvGF'fd//ff/ge'/fgd'/e[ll:1]ddc.) (;) pro(d)cé(fd/fff)de,(dc__) (,) et(ff) re(ixhhg/hh//ixgh!ivGFhh//f!h'j)gna.(iyjkijh.) (,) (fg/h!jj/klijh.0ixgiHF.1) (z0::c3) ℣. Pro(d)pter(d) ve(d)ri(fh)tá(hv.hihhfh.)(,)(df!hvv//hihhfh./gh/ihi)tem,(hh) (;) et(d) man(d)su(d)e(fe)tú(eh)di(h)nem(ih) (,) (hhh'/ihhg./[-0.5]i/jiih.0/[-0.5]j/kjjh.0/[-0.5]i/jiig./h/ihh//fh//ghFE'e[ll:1]d.0) (;) et(d) ju(d)stí(fdfED//f_d/ef!gwhhi)ti(h)am :(hhi!kvvh_[oh:h]i_[oh:h]h._[oh:h]) (:) et(f) de(fi)dú(i)cet(ih/jkihhf/hh/ijH'Gh) te(h.) (;) mi(h)ra(h)bí(i_[oh:h]h//ghG'Fi_[oh:h]h//h'hhvFEfe//f/hhivHGh')li(h)ter(h.) *(;) déx(hh)te(h)ra(h) tu(ihhf//hh/ijH'G)a.(hhhf//hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #174)"
    },
    alleluia: {
      title: "Specie tua",
      latin: "Allelúia. ℣. Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna.",
      translation: "Alleluia. ℣. With your comeliness and your beauty, set out, proceed prosperously, and reign.",
      mode: "Alleluia · Common of a Virgin · Mode VIII",
      gabc: "(c3) AL(def)le(f_e/f!gwhg)lú(fhh'1h){ia}.(hiHF'fe.) *(;) ij.(gh//efED.f!gwhhg ehf/gffe.) (::) ℣. Spé(hv.gih)ci(hg)e(g) tu(gh!ivvH'Fhf/gh)a,(g.) (;) et(g) pul(g)chri(gf)tú(hji)di(h)ne(gh) tu(f_ehvvGE.gxfgFD.1gxegF'Efe)a(e.) (:) in(e)tén(feh)de,(h.) (,) pró(hfh'GE//fhF'D//gxgvFEf.0/[-0.5]hhh/ijHF.1)(,)(g_[oh:h]i_[oh:h]g_[oh:h]ivHG'he.gxf_e/g_[oh:h]e//gvFEfd)spe(e[ll:1]d)re(d.) (;) pro(fd)cé(ef)de,(f) *() et(f) re(hg/hfh)gna.(ghFE.) (,) (df!hvF'E//d.0f!gwhghvGFg.//egf'gvE'Defe.) (,) (gxhhvF'EfgED.gyhhvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #406)"
    },
    offertory: {
      title: "Desiderium animae",
      latin: "Desidérium ánimae ejus tribuísti ei, Dómine, et voluntáte labiórum ejus non fraudásti eum : posuísti in cápite ejus corónam de lápide pretióso.",
      translation: "You have given her her heart's desire, O Lord, and have not withheld from her the will of her lips: you have set upon her head a crown of precious stone.",
      mode: "Offertory · Common of a Virgin · Mode VI",
      gabc: "(c4) DE(c)si(d)dé(ff)ri(fhg)um(ghff) *(`) á(d!fffg)ni(f)mae(f) e(fg!hv_G~F~)jus(gf..) (;) tri(fg)bu(f)í(g_[oh:h]f)sti(f_e) e(fg)i,(ixg!iiivG'F) (,) Dó(fg)mi(f)ne,(fggf.0) (:) et(fd~) vo(fgf)lun(gh)tá(hj)te(g) la(f)bi(f)ó(f)rum(fhg) e(fg!hv_G~F~)jus(gf..) (;) non(fh/jhj) frau(gf~)dá(fgF'D)sti(fg) e(fgF'D)um :(dfddc.) (:) po(f)su(g)í(gh/jhj)sti(g) in(f) cá(gh)pi(g)te(f) e(hf/gh)jus(g.) (;) co(f)ró(hv.fhg)nam(g.) (,) de(ixgih) lá(ixij)pi(g)de(fgF'D) (`) pre(ff)ti(gh)ó(ixhf/!gh/!jjh/!/!giH'GF.)(,)(fff//fgf/ghg/hf/g_[oh:h]f)so.(f.) (::)",
      source: "Graduale Romanum (GregoBase #722)"
    },
    communion: {
      title: "Quinque prudentes",
      latin: "Quinque prudéntes vírgines accepérunt óleum in vasis suis cum lampádibus : média autem nocte clamor factus est : Ecce sponsus venit : exíte óbviam Christo Dómino.",
      translation: "The five wise virgins took oil in their vessels with their lamps: and at midnight there was a cry made: Behold the bridegroom comes; go out to meet Christ the Lord.",
      mode: "Communion · Common of a Virgin · Mode V",
      gabc: "(c3) QUin(dde~)que(d) *() pru(d)dén(ef~)tes(f) vír(f!gwh)gi(e)nes(deD/B.1) (;) ac([ull:1{1]b)ce(b[ull:}])pé(ded)runt(dc~) ó(efef)le(ef)um(f.) (;) in(df~) va(f)sis(ef) su(d)is(dc) cum(e) lam(ef~)pá(d)di(de!fvED'e)bus :(e[ll:1]d..) (:) mé(f)di(e)a(d) au(e)tem(f) no(hjI'H)cte(h.) (,) cla(hi)mor(j_i) fa(h)ctus(gh) est :(hihh/fgf.) (;) Ec(f)ce(e_[oh:h][ll:1]d) spon(e)sus(f) ve(hjI'H)nit(h.) (,) ex(i)í(i!jwk)te(h.) ób(gxffg)vi(e[ll:1]d)am(d.) (,) Chri(gxd!ffg)sto(ehhh.f!gw!hvGE'fgd') Dó(d)mi(d_[oh:h]e_[oh:h]d_[oh:h])no.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1301)"
    },
  },
  "common-confessor": {
    gradual: {
      title: "Justus ut palma",
      latin: "Justus ut palma florébit : sicut cedrus Líbani multiplicábitur, in domo Dómini. ℣. Ad annuntiándum mane misericórdiam tuam, et veritátem tuam per noctem.",
      translation: "The just shall flourish like the palm tree: he shall grow up like the cedar of Lebanon, in the house of the Lord. ℣. To show forth your mercy in the morning, and your truth in the night.",
      mode: "Gradual · Common of a Confessor · Mode II",
      gabc: "(c3) JU(egf)stus(f.) *(,) ut(f) pal(f)ma(f) flo(f)ré(hfghvF'Ege/fg)bit :(f.) (:) sic(f)ut(f) ce(hf/hi'j)drus(gxhffegvFE.) (,) Lí(e)ba(e[ll:1]d/fef)ni(fd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) mul(hh)ti(h)pli(h)cá(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF')bi(f)tur(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) in(d) do(de'fhvGF'g)mo(ef) Dó(hf)mi(hi)ni.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHFgwhf.1) (::) ℣. Ad(f) an(h)nun(hi)ti(i)án(i)dum(ij~) ma(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)ne(ji..) (:) mi(i!jw!kvJI'jw!kvJI)se(i)ri(i)cór(i)di(i)am(ij~) tu(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)am,(f.) (:) et(hh) ve(h)ri(h)tá(h)tem(hi~) tu(ivH'GE//fhGEfh..)(,)(gi!jvHF)am(fhF'Efhhf//hvvGF'hee[ll:1]d.0) *(:) per(de'fhvGFgef) no(hf/h_i)ctem.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #34)"
    },
    alleluia: {
      title: "Beatus vir qui suffert",
      latin: "Allelúia. ℣. Beátus vir, qui suffert tentatiónem : quóniam, cum probátus fúerit, accípiet corónam vitae.",
      translation: "Alleluia. ℣. Blessed is the man that endures temptation: for when he has been proved, he shall receive the crown of life.",
      mode: "Alleluia · Common of a Confessor · Mode I",
      gabc: "(c4) AL(df)le(e/ghfgvFE'D)lú(gh){ia}.(gh..) *(;) ij.(gihgiHG'gd//efED'/!dc/e/ggh.) (,) (gihgiHG'gd//efED'/!dc/de/fee[ll:1]d.0) (::) ℣. Be(c!e'g)á(ghGE'fvED.cd/fde)tus(efvfe) vir,(e.) (;) qui(e_[oh:h]c) suf(eg/fhggvFE)fert(e.) (,) ten(g.h!iwjjvIH)ta(g!igh)ti(ghe)ó(fv.efd)nem :(e[ll:1]d..) (:) quó(e_[uh:l]g!hi)ni(h)am(h) cum(h) pro(h)bá(h)tus(hg) fú(hj)e(ghggvFE'f)rit,(fe..) (;) ac(ec)cí(eg)pi(fhggvFE)et(e.) (,) co(cd'e)ró(e_0[uh:l]fvE'Cd_e)nam(e.) *() vi(e/ghfgvFE'Dgh)tae.(gh..) (;) (gihgiHG'gd//efED'/!dcevggh.) (,) (gihgiHG'gd//efED'/!dc/de/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #724)"
    },
    offertory: {
      title: "Veritas mea",
      latin: "Véritas mea et misericórdia mea cum ipso : et in nómine meo exaltábitur cornu ejus.",
      translation: "My truth and my mercy shall be with him: and in my name shall his horn be exalted.",
      mode: "Offertory · Common of a Confessor · Mode II",
      gabc: "(f4) VE(hh)ri(hiH'G)tas(ggh~) me(h!jjh/jjhgih)a,(h.) *(;) et(h!jjj) mi(h)se(g)ri(h)cór(h!iwj/kj)di(j)a(jkjji) me(h!iwj)a(jkjji) (,) cum(hg) i(h!iw!jvIH'i)pso :(hg..) (:) et(h) in(jhj') nó(j)mi(kvJH)ne(j_i) me(jijg)o(e!geg.) (;) ex(d)al(e)tá(gh)bi(hg)tur(h') cor(j)nu(jkjji) e(h!iwjij)jus.(ih..) (::)",
      source: "Graduale Romanum (GregoBase #630)"
    },
    communion: {
      title: "Beatus servus",
      latin: "Beátus servus, quem, cum vénerit dóminus, invénerit vigilántem : amen, dico vobis, super ómnia bona sua constítuet eum.",
      translation: "Blessed is that servant, whom his lord, when he comes, shall find watching: amen I say to you, he will set him over all his goods.",
      mode: "Communion · Common of a Confessor · Mode III",
      gabc: "(c2) BE(exdde)á(cf)tus(f) ser(g_[oh:h]f/g!hwihi)vus,(ih..) *(,) quem,(hj) cum(h) vé(jkj)ne(i)rit(hvGF) Dó(h_i)mi(h)nus,(h.) (,) in(fh~)vé(h)ne(ghg)rit(ef) vi(g)gi(fe)lán(df)tem :(c.) (:) a(cd)men(f) di(fe)co(d) vo(fvEC)bis,(c.) (,) su(f)per(g) ó(i)mni(h)a(g) bo(g)na(f) su(g)a(f_g) (,) con(gf~)stí(g!hwi)tu(f)et(exfgF'Efgf) e(exdfee)um.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1154)"
    },
  },
  "common-confessor-2": {
    gradual: {
      title: "Os justi",
      latin: "Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium. ℣. Lex Dei ejus in corde ipsíus : et non supplantabúntur gressus ejus.",
      translation: "The mouth of the just shall meditate wisdom, and his tongue shall speak judgment. ℣. The law of his God is in his heart: and his steps shall not be supplanted.",
      mode: "Gradual · Common of a Confessor · Mode I",
      gabc: "(c4) OS(ddcdfffddcd) ju(dfd/fffvED)sti(dfddc.) ~*(;) me(d)di(fddc)tá(fg)bi(ixfhg/hi)tur(h.) (,) sa(hjhhg)pi(hggf)én(fh!jvH'Gh)ti(h)am,(ixhv.f.g!hwihhggf.0) (:) et(dh) lin(h_g/jij)gua(h_f/hg) (`) e(g_[oh:h]eg)jus(gvF'EDfvED) (,) (fge'/fgd'/e[ll:1]ddc.) (;) lo(fgh!jvIH'G)qué(gf)tur(f.) (,) ju(f)dí(f)ci(gvFD)um.(dc/d!ff/ghG'Efgf/!f/ded.) (::) ℣. Lex(dh) De(h)i(g) e(h!jij)jus(h.) (,) (g/hhg/hh//gh!jjjhjvvIH'jggf.0) (:) in(f) cor(ixghgh//fh!ivGE'fvDC'//d!ff//g/hhg/hh,gh!jj//jjjkvJH)de(j_i) i(j_i)psí(j_i)us(jjjvIH'jggf.0) (:) et(f) non(ixghgh//fh!ivGF'E//fg!hvhg) (`) sup(h)plan(g_[oh:h]e~)ta(fg)bún(gffvE~D~)tur(d/ffd) (,) (fge'/fgd'/e[ll:1]ddc.) *(;) gres(ff)sus(fg) e(g_[oh:h]f/hgh)jus.(hvvGF'EC//d!ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #511)"
    },
    alleluia: {
      title: "Beatus vir qui timet",
      latin: "Allelúia. ℣. Beátus vir, qui timet Dóminum : in mandátis ejus cupit nimis.",
      translation: "Alleluia. ℣. Blessed is the man that fears the Lord: he shall delight exceedingly in his commandments.",
      mode: "Alleluia · Common of a Confessor · Mode V",
      gabc: "(c3) AL(d!f'h~)le(h_f)lú(fh'/ih~){ia}.(iv.hiHF'fd.) *(;) ij.(gxfgF'Egyhighf.dfe/fee[ll:1]d.0) (::) ℣. Be(d.0f!gwh)á(h_iH//E./!gxgfgE'Dd'f/h_f)tus(fh/i_[oh:h]hjvIH) vir,(h.) (;) qui(h_f) ti(gxg)met(gyf_e/highf.gxegF'Ef') Dó(d)mi(d_[oh:h]e_[oh:h]d_[oh:h])num :(d.) (:) in(d) man(d)dá(efeffefv.)(,)(h_[oh:h]i_[oh:h]h'_[oh:h]ivHF'Ef.//hiH'F)tis(gxgvFE) e(gxf@h!fg~)jus(f.) *(;) cu(de'f)pit(fhGF') ni(i)mis.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #765)"
    },
    offertory: {
      title: "In virtute tua",
      latin: "In virtúte tua, Dómine, laetábitur justus, et super salutáre tuum exsultábit veheménter : desidérium ánimae ejus tribuísti ei.",
      translation: "In your strength, O Lord, the just man shall joy, and in your salvation he shall rejoice exceedingly: you have given him his heart's desire.",
      mode: "Offertory · Common of a Confessor · Mode VI",
      gabc: "(c2) IN(c) vir(d)tú(ff)te(f) tu(f)a,(f.) *(,) Dó(fgf)mi(exfee)ne,(c!ece.) (;) lae(c)tá(ffg)bi(f)tur(fg/hg/h_g) ju(fg!hvGF'g)stus,(gf..) (:) et(f) su(f!gwh'!iv)per(h) sa(h)lu(h)tá(h/jjh/i_[uh:l]j)re(g_[oh:h]fg) tu(d!fff/g_[oh:h]f)um(f.) (;) ex(g)sul(f)tá(f)bit(d!ff) ve(d)he(ff/gf)mén(deD~'C~)ter :(dc..) (:) de(c)si(d)dé(ffg)ri(f)um(f.) (,) á(hj)ni(g)mae(f) e(d!fffvEDevD~C~)jus(dc..) (;) tri(c)bu(d)í(ffg)sti(f) e(f!gwhghjjh//giH'GF.)(,)(fff//fgf/ghg/hf/g_[oh:h]f)i.(f.) (::)",
      source: "Graduale Romanum (GregoBase #667)"
    },
    communion: {
      title: "Amen dico vobis",
      latin: "Amen dico vobis : quod vos, qui reliquístis ómnia et secúti estis me, céntuplum accipiétis, et vitam aetérnam possidébitis.",
      translation: "Amen I say to you: that you who have left all things and followed me, shall receive a hundredfold, and shall possess life everlasting.",
      mode: "Communion · Common of a Confessor · Mode I",
      gabc: "(c4) A(d!ewfe)men(fgf) (,) * di(f)co(fe) vo(ghghvGF'g)bis :(f_e//fvEDe[ll:1]d..) (;) quod(d!ewf) vos,(f_[oh:h]g_[oh:h]d_[oh:h]fv.) (,) qui(c) re(d)li(f)quí(fe)stis(g) ó(fg)mni(fvED)a,(d!ewf.) (;) et(c) se(d)cú(f)ti(fe) e(ghgh)stis(fg) me,(fggf.0) (:) cén(h)tu(hg)plum(h) ac(f)ci(f)pi(g)é(fvED)tis,(ff) (;) et(fh~) vi(h)tam(g) ae(fe)tér(ghghvG~F~)nam(gvFE'DCd.) (,) pos(f_e/ggh)si(fe)dé(d)bi(de!fvED'e)tis.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1337)"
    },
  },
  "common-virgin-martyr": {
    gradual: {
      title: "Dilexisti justitiam",
      latin: "Dilexísti justítiam, et odísti iniquitátem. ℣. Proptérea unxit te Deus, Deus tuus, óleo laetítiae.",
      translation: "You have loved justice, and hated iniquity. ℣. Therefore has God, your God, anointed you with the oil of gladness.",
      mode: "Gradual · Common of a Virgin Martyr · Mode VIII",
      gabc: "(c4) DI(c)le(dc)xí(cg)sti(gv.fffddc.) (,) * ju(c)stí(c!geghjh___!iwj)ti(ghg___)am,(g.) (;) et(f) o(gh)dí(jj/kjk)sti(kjj) (,) in(gh)i(h)qui(hjh)tá(g)tem.(f/ghffd//gvgf/gjhhg.) (::) ℣. Pro(gf)ptér(gf)e(hj)a(jjjvHG'hjjlvKJ'Ijg..) (;) un(gh)xit(h_g) te(g) De(g_[oh:h]f/ghffd)us,(d.) (,) De(gg)us(g) tu(ghg___)us,(g.) (;) ó(g)le(fg)o(gggvED'/!eg'//hvGFg.) *(,) lae(gf)tí(gf)ti(hj)ae.(jjk//iijhhg.) (,) (ijGF.h!iwjji gjh/ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #394)"
    },
    alleluia: {
      title: "Adducentur Regi virgines",
      latin: "Allelúia. ℣. Adducéntur Regi Vírgines post eam : próximae ejus afferéntur tibi in laetítia.",
      translation: "Alleluia. ℣. After her shall virgins be brought to the King: her neighbors shall be brought to you in gladness.",
      mode: "Alleluia · Common of a Virgin Martyr · Mode III",
      gabc: "(c4) AL(eef)le(dg)lú(g_[oh:h]i_[oh:h]g_[oh:h]/h!iwjjk){ia}.(i.) *(;) ij.(g.h!iwj_h//jh/ig.) (,) (g.h!iwj_h//jh/igge.) (,) (ef'ghghF'Ef_gffe.) (::) ℣. Ad(c.d!ewff)du(fg)cén(ixg_[oh:h]f/g/ig/hffd./fg/ighhV!gh~)tur(f.) (;) re(f.0h!iwjj)gi(ixjjvIG') vír(ixgjjh~)gi(h_[oh:h]i_[oh:h]h_[oh:h])nes(h.) (;) post(fg'hjhhfg) e(fg)am :(gv.ff/ded.) (:) pró(de!f'g)xi(ghg)mae(fg) e(ghg___)jus(g.) (;) af(f)fe(ghg)rén(ixh/ig/hh//gg/hfg.)(,)(ixgjjh/ig/hh//gg/hfg.)(,)(ixjjjh/ig/hh//gg/hfg.)(,)(ef/ghgfv.efd.1)(,)(de!fvghgfffd~)tur(ef~) ti(d_[oh:h]e_[oh:h]d_[oh:h])bi(d.) *(;) in(fc~) lae(d)tí(d!fff/g_[oh:h]f)ti(f!hgh)a.(hhf.) (,) (h_ghvFDgff'fvEC//ggf/ghdd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #208)"
    },
    offertory: {
      title: "Afferentur post eam",
      latin: "Afferéntur Regi Vírgines post eam : próximae ejus afferéntur tibi in laetítia et exsultatióne.",
      translation: "After her shall virgins be brought to the King: her neighbors shall be brought to you in gladness and rejoicing.",
      mode: "Offertory · Common of a Virgin Martyr · Mode I",
      gabc: "(c4) AF(c)fe(d)rén(f)tur(fff/ded.) ()* re(fg)gi(fe/fggf.0) (;) vír(fgffe)gi(de!fvED'e)nes(e[ll:1]d..) (`) post(dg) e(gf)am :(f.) (:) pró(hf/gh!jjh)xi(g)mae(fggf) e(d!ew!fvED)jus(dc/ded.) (;) af(c)fe(d)rén(ffd//fgf/ge/fgd)tur(dV!cd~) ti(d)bi.(dc/d!fffc//fvED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #768)"
    },
    communion: {
      title: "Confundantur superbi",
      latin: "Confundántur supérbi, quia injúste iniquitátem fecérunt in me : ego autem in mandátis tuis exercébor, in tuis justificatiónibus, ut non confúndar.",
      translation: "Let the proud be confounded, because they have done unjustly towards me: but I will meditate on your commandments, on your justifications, that I be not confounded.",
      mode: "Communion · Common of a Virgin Martyr · Mode I",
      gabc: "(c4) COn(fe~)fun(f)dán(gh)tur(ffe) su(dc)pér(d!ewfef)bi,(e[ll:1]d..) (;) * qui(d)a(d) in(dh~)jú(h)ste(ixhg/hih.) (,) in(g)i(g)qui(ge)tá(ghgh)tem(g) fe(f)cé(g)runt(fe) in(d) me :(fddc.) (:) e(c.d!ewffg)go(f) au(ffe~)tem(ixghg/hih.) in(g) man(h)dá(jj)tis(kjjh) tu(ixh.g!hwihi)is(ih..) (,) ex(h)er(fg~)cé(g.f!gwh_g)bor,(ghG'Fg.) (;) in(f) tu(gh)is(h) ju(hf)sti(g)fi(gf)ca(fe)ti(d)ó(d!ew!fvED')ni(d)bus,(dc/ded.) (;) ut(cd) non(fg'h) con(f_e)fún(d_c/d!ewf)dar.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1032)"
    },
  },
  "common-several-martyrs": {
    gradual: {
      title: "Anima nostra sicut passer",
      latin: "Anima nostra, sicut passer, erépta est de láqueo venántium. ℣. Láqueus contrítus est, et nos liberáti sumus : adjutórium nostrum in nómine Dómini, qui fecit caélum et terram.",
      translation: "Our soul has been delivered as a sparrow out of the snare of the fowlers. ℣. The snare is broken, and we are delivered: our help is in the name of the Lord, who made heaven and earth.",
      mode: "Gradual · Common of Several Martyrs · Mode V",
      gabc: "(c3) A(dd)ni(d)ma(d) no(ded//d'd)stra,(d_b/dec'/de[ull:0]b'/cbba.) *(;) sic(d)ut(f) pas(hf/hhh)ser,(h.) (,) e(h_g/i!jwk)ré(i_[oh:h]h)pta(h) est(hihh/fgf.) (;) de(h_f) lá(h)que(hi)o(i) ve(ihhf)nán(gxhfgED')ti(d!f'h)um.(gyhighf.) (,) (de/f!hh/ijghf.gxegFD.1) (::) ℣. Lá(d)que(gxf)us(fh/ih/i_[oh:h]hivFD'//fh.ivFD'f!hfg.) (,) (fh/ih/i_[oh:h]h//ivFD'e_[oh:h][ll:1]d.0ddd!f_h/ijh.1) (,) con(hi'j)trí(i_[oh:h]h)tus(h) est,(hg/i_[oh:h]hjvIH'Ghf..) (:) et(hh) nos(h) li(h)be(h)rá(ih/ij_h ih/ij_ij//hi/jij)ti(jh/jkihhf.) (,) su(hf/hhh)mus :(h.f!gwh!iv.hi/jhh/iih.0) (:) ad(hhi)ju(h)tó(hi)ri(h)um(hf~) no(hi)strum(h.) (,) in(hf~) nó(hi)mi(h)ne(hh) Dó(hih/ihjvIG'hvF'Ef!hhivHG)mi(hg)ni,(h.) (;) qui(hh) fe(h)cit(h) cae(ivHF)lum(f.) *(,) et(f!h'i) ter(hgiHF)ram.(f.//de/f!hh/ijghf.gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #432)"
    },
    alleluia: {
      title: "Justi epulentur",
      latin: "Allelúia. ℣. Justi epuléntur, et exsúltent in conspéctu Dei : et delecténtur in laetítia.",
      translation: "Alleluia. ℣. Let the just feast, and rejoice before God: and be delighted with gladness.",
      mode: "Alleluia · Common of Several Martyrs · Mode I",
      gabc: "(c4) AL(d/ff)le(ef!gvEDffd)lú(ixfghig/h_e/fg~){ia}.(g.) *(,) ij.(def!gvEDffd) (,) (def!gvEDhv.ghF'ED.) (,) (e_[uh:l]g//fgfdeddc.) (,) (fff/g_[uh:l]hGE'fee[ll:1]d.0) (::) ℣. Ju(dffeggvFE'fd)sti(d.) (,) e(d)pu(dh)lén(ixhv.f'!hi'GFhv.def!hvGE'fd)tur,(d.) (;) et(d) ex(d)súl(d!fff)tent(e_[oh:h][ll:1]devDCddc.) (,) in(c.d!ewf) con(fg_[uh:l]h~)spé(hvGF'fvED)ctu(dv.cd!evDC'd) De(d!ewfef)i :(e[ll:1]d..) (:) de(f)le(ghg)ctén(h'/jhhg/he/f_g//dfED.)(,)(ixdh'/jhhg/he/f_g eg!ivHGhvFDfvED)(,)(hhggf/hjh___)tur(h.) *(;) in(d!ff) lae(ef!gvEDffd)tí(ixfghig/h_e)ti(fg)a.(g.) (,) (def!gvEDffd) (,) (def!gvEDhv.ghF'ED.) (,) (e_[uh:l]g//fgfdeddc.) (,) (fff/g_[uh:l]hGE'fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #896)"
    },
    offertory: {
      title: "Exsultabunt sancti",
      latin: "Exsultábunt Sancti in glória, laetabúntur in cubílibus suis : exaltatiónes Dei in fáucibus eórum.",
      translation: "The saints shall rejoice in glory, they shall be joyful in their beds: the high praises of God shall be in their mouth.",
      mode: "Offertory · Common of Several Martyrs · Mode IV",
      gabc: "(c4) EX(d)sul(dfd~)tá(f)bunt(ef'g) *(,) san(gh)cti(ef!ghF'EfvEDe[ll:1]d..) (;) in(f) gló(ef!ghGE'f)ri(f)a,(egff/ded.) (:) lae(d)ta(dh)bún(he/f_g)tur(ixgh/if/gge.) (,) in(g) cu(gh)bí(h)li(g)bus(g) su(gh!jjh//fhf/gh)is :(g.) (:) ex(d)al(dh~)ta(h)ti(h)ó(hgh)nes(h) De(ixhiHG'hffef)i(fe..) (;) in(ef'g~) fáu(g_[oh:h]fh)ci(g)bus(fffdgvFE.) (,) e(ef/hg)ó(gv.efD'Cd)rum.(f_d/f!gwhgh//ghF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #33)"
    },
    communion: {
      title: "Dico autem vobis",
      latin: "Dico autem vobis amícis meis : Ne terreámini ab his, qui vos persequúntur.",
      translation: "But I say to you, my friends: Be not afraid of them who persecute you.",
      mode: "Communion · Common of Several Martyrs · Mode VIII",
      gabc: "(c4) DI(gg)co(g) au(g)tem(gh~) vo(hvGF//g.h!iwjg)bis(g.) *(,) a(gh)mí(jkjk)cis(ij) me(hjI'G)is :(g.) (;) ne(g) ter(hih)re(g)á(e)mi(ffg)ni(gvFED.) (,) ab(fg) his,(ghgh) qui(fg) vos(g.h!iwjg) per(f)se(ghg)quún(h!jj/hi~)tur.(g.) (::)",
      source: "Graduale Romanum (GregoBase #699)"
    },
  },
  "common-virgin-not-martyr": {
    gradual: {
      title: "Specie tua",
      latin: "Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna. ℣. Propter veritátem, et mansuetúdinem, et justítiam : et dedúcet te mirabíliter déxtera tua.",
      translation: "With your comeliness and your beauty, set out, proceed prosperously, and reign. ℣. Because of truth, and meekness, and justice: and your right hand shall conduct you wonderfully.",
      mode: "Gradual · Common of a Virgin · Mode V",
      gabc: "(c4) SPé(ff)ci(f)e(f_e/g_[uh:l]h) tu(gf)a,(fv.d!ff/ge'/fgd'/e[ll:1]ddc.) *(;) et(f) pul(f)chri(h)tú(jh/jjj)di(jh/jjj)ne(jh/jjlvKJ'k) (,) tu(kjjh/jhhf)a(fh//g!jjjh/jhh/fgf.) (:) in(f)tén(ghgh)de,(ixhg/hiGF./[-1]iyh!iwj) (,) pró(hf)spe(gf)re(f_g//d!f'g//fh!jvGF'fd//ff/ge'/fgd'/e[ll:1]ddc.) (;) pro(d)cé(fd/fff)de,(dc__) (,) et(ff) re(ixhhg/hh//ixgh!ivGFhh//f!h'j)gna.(iyjkijh.) (,) (fg/h!jj/klijh.0ixgiHF.1) (z0::c3) ℣. Pro(d)pter(d) ve(d)ri(fh)tá(hv.hihhfh.)(,)(df!hvv//hihhfh./gh/ihi)tem,(hh) (;) et(d) man(d)su(d)e(fe)tú(eh)di(h)nem(ih) (,) (hhh'/ihhg./[-0.5]i/jiih.0/[-0.5]j/kjjh.0/[-0.5]i/jiig./h/ihh//fh//ghFE'e[ll:1]d.0) (;) et(d) ju(d)stí(fdfED//f_d/ef!gwhhi)ti(h)am :(hhi!kvvh_[oh:h]i_[oh:h]h._[oh:h]) (:) et(f) de(fi)dú(i)cet(ih/jkihhf/hh/ijH'Gh) te(h.) (;) mi(h)ra(h)bí(i_[oh:h]h//ghG'Fi_[oh:h]h//h'hhvFEfe//f/hhivHGh')li(h)ter(h.) *(;) déx(hh)te(h)ra(h) tu(ihhf//hh/ijH'G)a.(hhhf//hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #174)"
    },
    alleluia: {
      title: "Adducentur Regi virgines",
      latin: "Allelúia. ℣. Adducéntur Regi Vírgines post eam : próximae ejus afferéntur tibi in laetítia.",
      translation: "Alleluia. ℣. After her shall virgins be brought to the King: her neighbors shall be brought to you in gladness.",
      mode: "Alleluia · Common of a Virgin · Mode III",
      gabc: "(c4) AL(eef)le(dg)lú(g_[oh:h]i_[oh:h]g_[oh:h]/h!iwjjk){ia}.(i.) *(;) ij.(g.h!iwj_h//jh/ig.) (,) (g.h!iwj_h//jh/igge.) (,) (ef'ghghF'Ef_gffe.) (::) ℣. Ad(c.d!ewff)du(fg)cén(ixg_[oh:h]f/g/ig/hffd./fg/ighhV!gh~)tur(f.) (;) re(f.0h!iwjj)gi(ixjjvIG') vír(ixgjjh~)gi(h_[oh:h]i_[oh:h]h_[oh:h])nes(h.) (;) post(fg'hjhhfg) e(fg)am :(gv.ff/ded.) (:) pró(de!f'g)xi(ghg)mae(fg) e(ghg___)jus(g.) (;) af(f)fe(ghg)rén(ixh/ig/hh//gg/hfg.)(,)(ixgjjh/ig/hh//gg/hfg.)(,)(ixjjjh/ig/hh//gg/hfg.)(,)(ef/ghgfv.efd.1)(,)(de!fvghgfffd~)tur(ef~) ti(d_[oh:h]e_[oh:h]d_[oh:h])bi(d.) *(;) in(fc~) lae(d)tí(d!fff/g_[oh:h]f)ti(f!hgh)a.(hhf.) (,) (h_ghvFDgff'fvEC//ggf/ghdd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #208)"
    },
    offertory: {
      title: "Filiae regum",
      latin: "Fíliae regum in honóre tuo, ástitit regína a dextris tuis in vestítu deauráto, circúmdata varietáte.",
      translation: "The daughters of kings are in your honor; the queen stood on your right hand in gilded clothing, surrounded with variety.",
      mode: "Offertory · Common of a Virgin · Mode III",
      gabc: "(c3) FI(e/hhh)li(h)ae(h) re(hihh'hh)gum(hihh'hh//ihh'hh_fh.) *(,) in(fh) ho(fh)nó(h_i)re(hi) tu(f!h'i)o,(ijijvIHih..) (:) á(fh/ih)sti(hhh)tit(hhh) re(h)gí(fh!ivHG'F)na(fhffe.) (,) a(ef) dex(h_f/hji)tris(hji) tu(hiH'F)is(gf..) (;) in(e) ve(f)stí(fh!ivHF)tu(f_h) (,) de(f!hhf'hvE'D)au(de/fef)rá(f!hh/ij)to,(ijiih.0) (:) cir(h)cúm(fh)da(hhh/ijH'F)ta(fhffe.) (,) va(f_e)ri(f_e)e(hhg)tá(gih./ghF'Ehv.//ghF'Ehig'hvF'E)te.(fv.efEC.) (::)",
      source: "Graduale Romanum (GregoBase #1333)"
    },
    communion: {
      title: "Quinque prudentes",
      latin: "Quinque prudéntes vírgines accepérunt óleum in vasis suis cum lampádibus : média autem nocte clamor factus est : Ecce sponsus venit : exíte óbviam Christo Dómino.",
      translation: "The five wise virgins took oil in their vessels with their lamps: and at midnight there was a cry made: Behold the bridegroom comes; go out to meet Christ the Lord.",
      mode: "Communion · Common of a Virgin · Mode V",
      gabc: "(c3) QUin(dde~)que(d) *() pru(d)dén(ef~)tes(f) vír(f!gwh)gi(e)nes(deD/B.1) (;) ac([ull:1{1]b)ce(b[ull:}])pé(ded)runt(dc~) ó(efef)le(ef)um(f.) (;) in(df~) va(f)sis(ef) su(d)is(dc) cum(e) lam(ef~)pá(d)di(de!fvED'e)bus :(e[ll:1]d..) (:) mé(f)di(e)a(d) au(e)tem(f) no(hjI'H)cte(h.) (,) cla(hi)mor(j_i) fa(h)ctus(gh) est :(hihh/fgf.) (;) Ec(f)ce(e_[oh:h][ll:1]d) spon(e)sus(f) ve(hjI'H)nit(h.) (,) ex(i)í(i!jwk)te(h.) ób(gxffg)vi(e[ll:1]d)am(d.) (,) Chri(gxd!ffg)sto(ehhh.f!gw!hvGE'fgd') Dó(d)mi(d_[oh:h]e_[oh:h]d_[oh:h])no.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1301)"
    },
  },
  "common-holy-women": {
    gradual: {
      title: "Specie tua",
      latin: "Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna. ℣. Propter veritátem, et mansuetúdinem, et justítiam : et dedúcet te mirabíliter déxtera tua.",
      translation: "With your comeliness and your beauty, set out, proceed prosperously, and reign. ℣. Because of truth, and meekness, and justice: and your right hand shall conduct you wonderfully.",
      mode: "Gradual · Common of Holy Women · Mode V",
      gabc: "(c4) SPé(ff)ci(f)e(f_e/g_[uh:l]h) tu(gf)a,(fv.d!ff/ge'/fgd'/e[ll:1]ddc.) *(;) et(f) pul(f)chri(h)tú(jh/jjj)di(jh/jjj)ne(jh/jjlvKJ'k) (,) tu(kjjh/jhhf)a(fh//g!jjjh/jhh/fgf.) (:) in(f)tén(ghgh)de,(ixhg/hiGF./[-1]iyh!iwj) (,) pró(hf)spe(gf)re(f_g//d!f'g//fh!jvGF'fd//ff/ge'/fgd'/e[ll:1]ddc.) (;) pro(d)cé(fd/fff)de,(dc__) (,) et(ff) re(ixhhg/hh//ixgh!ivGFhh//f!h'j)gna.(iyjkijh.) (,) (fg/h!jj/klijh.0ixgiHF.1) (z0::c3) ℣. Pro(d)pter(d) ve(d)ri(fh)tá(hv.hihhfh.)(,)(df!hvv//hihhfh./gh/ihi)tem,(hh) (;) et(d) man(d)su(d)e(fe)tú(eh)di(h)nem(ih) (,) (hhh'/ihhg./[-0.5]i/jiih.0/[-0.5]j/kjjh.0/[-0.5]i/jiig./h/ihh//fh//ghFE'e[ll:1]d.0) (;) et(d) ju(d)stí(fdfED//f_d/ef!gwhhi)ti(h)am :(hhi!kvvh_[oh:h]i_[oh:h]h._[oh:h]) (:) et(f) de(fi)dú(i)cet(ih/jkihhf/hh/ijH'Gh) te(h.) (;) mi(h)ra(h)bí(i_[oh:h]h//ghG'Fi_[oh:h]h//h'hhvFEfe//f/hhivHGh')li(h)ter(h.) *(;) déx(hh)te(h)ra(h) tu(ihhf//hh/ijH'G)a.(hhhf//hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #174)"
    },
    alleluia: {
      title: "Specie tua",
      latin: "Allelúia. ℣. Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna.",
      translation: "Alleluia. ℣. With your comeliness and your beauty, set out, proceed prosperously, and reign.",
      mode: "Alleluia · Common of Holy Women · Mode VIII",
      gabc: "(c3) AL(def)le(f_e/f!gwhg)lú(fhh'1h){ia}.(hiHF'fe.) *(;) ij.(gh//efED.f!gwhhg ehf/gffe.) (::) ℣. Spé(hv.gih)ci(hg)e(g) tu(gh!ivvH'Fhf/gh)a,(g.) (;) et(g) pul(g)chri(gf)tú(hji)di(h)ne(gh) tu(f_ehvvGE.gxfgFD.1gxegF'Efe)a(e.) (:) in(e)tén(feh)de,(h.) (,) pró(hfh'GE//fhF'D//gxgvFEf.0/[-0.5]hhh/ijHF.1)(,)(g_[oh:h]i_[oh:h]g_[oh:h]ivHG'he.gxf_e/g_[oh:h]e//gvFEfd)spe(e[ll:1]d)re(d.) (;) pro(fd)cé(ef)de,(f) *() et(f) re(hg/hfh)gna.(ghFE.) (,) (df!hvF'E//d.0f!gwhghvGFg.//egf'gvE'Defe.) (,) (gxhhvF'EfgED.gyhhvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #406)"
    },
    offertory: {
      title: "Diffusa est gratia",
      latin: "Diffúsa est grátia in lábiis tuis : proptérea benedíxit te Deus in aetérnum.",
      translation: "Grace is poured abroad upon your lips: therefore has God blessed you for ever.",
      mode: "Offertory · Common of Holy Women · Mode VIII",
      gabc: "(c4) DIf(df)fú(ef!ghhghhgh)sa(fhg) est(g.) *(,) grá(hv./[-0.5]jkjkvJ'I)ti(jjj_h)a(hg..) (;) in(hggf~) lá(h_g/jjjh//jkJ'I)bi(jjjhhg)is(h.) tu(gjIH'hg)is :(ghggf.0) (:) pro(hj)ptér(jjj//jkj)e(jj/kj)a(jkjjgh.) (,) be(gihhg)ne(g)dí(hv./[-0.5]jkj)xit(j) te(jkjj) De(ji)us(j.) (;) in(jjj_ghjkj) ae(jjj_g//hj/klj)tér(jjj_g//jvIH'hg~)num,(ghggf.0) (:) et(fh) in(hjI'H) saé(gj//j'1j//jjj)cu(jj/k_[hl:1]j)lum(j.) (,) saé(jkjjg//hj/kj/kjjh//jjj_h/jj//jkj//hiH'G)cu(fg)li.(g.) (,) (jjvH'Gh_ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #177)"
    },
    communion: {
      title: "Dilexisti justitiam",
      latin: "Dilexísti justítiam, et odísti iniquitátem : proptérea unxit te Deus, Deus tuus, óleo laetítiae.",
      translation: "You have loved justice, and hated iniquity: therefore God, your God, has anointed you with the oil of gladness.",
      mode: "Communion · Common of Holy Women · Mode IV",
      gabc: "(c3) DI(e)le(e)xí(gih)sti(gv.efED.) *(,) ju(h)stí(g.h!iwjij./h!iwji)ti(gihh)am,(hg..) (;) et(h) o(ij)dí(jjijjij)sti(ijii/ghg.) (,) in(h)i(gh'i)qui(h)tá(gvFEf./e!hghhvGF)tem :(f!gwh.) (:) pro(h_e)ptér(f/ggh)e(ggh)a(ggh.) (,) un(f!i'j~)xit(i) te(i) De(i_[oh:h]hjvIHivHG)us,(g.) (;) De(hhh)us(hhh) tu(hjI'HjvIHivHG)us.(g.) (::)",
      source: "Graduale Romanum (GregoBase #799)"
    },
  },
};

