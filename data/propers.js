/*
 * propers.js — the other SUNG propers for "Chant of the Day".
 *
 * The Introit lives in data/introits.js (window.INTROITS). This file holds the
 * remaining propers sung from the Graduale — Gradual, Alleluia (or Tract in
 * Lent), Offertory, and Communion — so app.js can offer them as tabs above the
 * score. Keyed by the SAME feast keys calendar.js emits and introits.js uses;
 * each feast carries one sub-entry per part:
 *
 *   window.PROPERS[<feastKey>] = {
 *     gradual:   { title, latin, translation, mode, gabc, source },
 *     alleluia:  { ... },     // a Lenten day carries `tract` instead
 *     offertory: { ... },
 *     communion: { ... },
 *   }
 *
 * A sub-entry mirrors an introit entry's shape. Only `gabc` is required for
 * display + playback: playback.js reads pitches straight from the rendered
 * Exsurge score, so no pre-baked playback field is needed. app.js shows a tab
 * only for the parts that actually exist for the day, and falls back to the
 * governing Sunday's propers on ferial days exactly as it does for the introit.
 *
 * --------------------------------------------------------------------------
 * NOTE TO THE MUSICIAN: like the introits, these are pulled from the
 * authoritative gabc on GregoBase (Graduale Romanum / Solesmes). Graduals,
 * Tracts, and Alleluias are given WHOLE (respond + verse) since they are sung
 * complete; Offertories and Communions are the antiphon. The `℣` marks the
 * verse. Playback is even quarter-notes (chant is unmeasured) and may sit an
 * octave from the printed clef — flag any wrong notes; they are a quick fix.
 *
 * COVERAGE: the full modern temporal cycle — all of Ordinary Time
 * (ot-2..ot-33 + Christ the King), the Advent & Christmas seasons, Lent &
 * Holy Week through Holy Thursday (with the Scrutiny-Mass year variants), the
 * whole of Eastertide through Pentecost (year-specific Communions keyed
 * -a/-b/-c), and the summer solemnities (Trinity, Corpus Christi, Sacred
 * Heart) — plus the full sanctoral already in the calendar. Remaining gaps are
 * tracked in ROADMAP.md. Each batch has its own build script + worklist under
 * sources/gregobase/.
 * --------------------------------------------------------------------------
 */

window.PROPERS = {
  "sorrows": {
    gradual: {
      title: "Dolorosa et lacrimabilis",
      latin: "Dolorósa et lacrimábilis es, Virgo María, stans juxta crucem Dómini Jesu Fílii tui Redemptóris. ℣. Virgo Dei Génitrix, quem totus non capit orbis, hoc crucis fert supplícium, auctor vitae factus homo.",
      translation: "Sorrowful and tearful are you, O Virgin Mary, standing by the cross of the Lord Jesus, your Son and Redeemer. ℣. O Virgin Mother of God, he whom the whole world cannot contain bears this torment of the cross, the author of life made man.",
      mode: "Gradual · Our Lady of Sorrows · Mode IV",
      reference: "Cf. John 19:25",
      gabc: "(c4) DO(fe)lo(fg)ró(g)sa(gv.ff/ded.) (,) * et(f) la(dfe)cri(fg)má(gff)bi(df)lis(egF'E) es,(e.) (;) Vir(e[ll:1]d~)go(g) Ma(hj)rí(i!jw!kvJI'H//fhf/gh)a,(g.) (:) stans(df) jux(feg)ta(gefd) cru(cd)cem(d.) (,) Dó(f)mi(gh)ni(ixh.0/[-0.5]ivHG'h/ef'g) Je(gf/hhvGE'fd)su(d.) (;) Fí(dc)li(f)i(gh) tu(ixh.0/[-0.5]ivHG')i(ef'g) Red(g)em(df)ptó(efED.)(,)(ixf.0/[-0.5]hiHG'ge./ghGF'Ef_gF'E)ris.(e.) (::) ℣. Vir(h)go(ixjhhgh/ef'!geg!ivHGhvFDe.) (,) (ghF'Eghfff'1dfED'fg'h) (,) De(gf/gh)i(g) Gé(f)ni(ghgh)trix,(hgh'1f) (;) quem(e[ll:1]d) to(f_g//ef!hvGE'fd)tus(d.) (,) non(e) ca(c)pit(d) or(d!ff//fffdfvED'ef'g)bis,(ghhg.) (:) hoc(h) cru(gf/gh)cis(g) fert(fg) sup(f)plí(f)ci(ghgh)um,(hgh'1f) (,) au(f)ctor(e[ll:1]d) vi(f_g//ef!hvGE'fd)tae(d.) *(;) fa(cd!ff)ctus(fg) ho(g_[oh:h]f/hgh)mo.(hhf.) (,) (h_ghvFDgff'fvEC//dd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #1383)",
      blurb: {
        text: "Dolorosa et lacrimabilis alludes to John 19:25 without quoting it directly: where that verse speaks of Mary standing by the cross in the third person, the Gradual turns toward her in the second person, addressing her directly as the one standing there. The day's Gospel, John 19:25-27, opens at that same moment, and the Gradual prepares it by first drawing the heart toward Mary herself. The verse, Virgo Dei Génitrix, quem totus non capit orbis, hoc crucis fert supplicium, auctor vitae factus homo, is not drawn from scripture but is a composed text, dwelling on the paradox of the Author of life made man and put to death.",
        source: "Cf. John 19:25 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Sancti-09-15 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Stabat sancta Maria",
      latin: "Allelúia. ℣. Stabat sancta María, caeli Regína, et mundi Dómina, juxta crucem Dómini nostri Jesu Christi dolorósa.",
      translation: "Alleluia. ℣. Holy Mary, Queen of heaven and Lady of the world, stood sorrowful beside the cross of our Lord Jesus Christ.",
      mode: "Alleluia · Our Lady of Sorrows · Mode II",
      reference: "Cf. John 19:25",
      gabc: "(f3) AL(fh~)le(gvFE'h)lú(gf~){ia}.(f.) *(;) ij.(ivHGF'Effg//hvGF'E/![ull:0{1]fc/!cb[ull:}]//fv.ef!gvgf.0) (::) ℣. Sta(f!gw!hvGF'E)bat(hij) san(kxkvJIH'GFghf)cta(f) Ma(fe)rí(fgff)a,(e.) (;) cae(fe)li(hij) Re(kxkvJIH'ih)gí(iki)na,(j.0kvJIH'GF.) (;) et(fgff) mun(e)di(ghi) Dó(ivH'GhvGFgf)mi(ef)na,(f.) (:) jux(h)ta(gf) cru(gvFEf!gwh)cem(gf) Dó(hi)mi(h)ni(g) no(ij)stri(j.) (,) Je(ji)su(gh) Chri(fvECef)sti(f/ghggf.0) *(,) do(fh)lo(gvFE'h)ró(gf)sa.(f.) (;) (ivHGF'Effg//hvGF'E/![ull:0{1]fc/!cb[ull:}]//fv.ef!gvgf.0) (::)",
      source: "Graduale Romanum (GregoBase #853)",
      blurb: {
        text: "John 19:25, the verse this Alleluia alludes to, places four women at the cross: Mary, her sister, Mary of Cleophas, and Mary Magdalen. The chant draws a single figure out of that group. Where the Gospel verse begins \"Stabant autem juxta crucem Jesu mater ejus,\" standing by the cross of Jesus his mother, the chant reshapes the scene as \"Stabat sancta María, caeli Regína, et mundi Dómina... dolorósa,\" isolating Mary, clothing her with the titles Queen of heaven and Lady of the world, and naming her grief.",
        source: "Cf. John 19:25 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    sequence: {
      title: "Stabat Mater",
      latin: "Stabat Mater dolorósa Juxta crucem lacrimósa, Dum pendébat Fílius. Cujus ánimam geméntem, Contristátam et doléntem, Pertransívit gládius. O quam tristis et afflícta Fuit illa benedícta Mater Unigéniti! Quae maerébat et dolébat, Pia Mater, dum vidébat Nati poenas ínclyti. Quis est homo qui non fleret, Matrem Christi si vidéret In tanto supplício? Quis non posset contristári, Christi Matrem contemplári Doléntem cum Fílio? Pro peccátis suae gentis Vidit Jesum in torméntis, Et flagéllis súbditum. Vidit suum dulcem natum Moriéndo desolátum, Dum emísit spíritum. Eia Mater, fons amóris, Me sentíre vim dolóris Fac, ut tecum lúgeam. Fac ut árdeat cor meum In amándo Christum Deum, Ut sibi compláceam. Sancta Mater, istud agas, Crucifíxi fige plagas Cordi meo válide. Tui nati vulneráti, Tam dignáti pro me pati, Poenas mecum dívide. Fac me tecum pie flere, Crucifíxo condolére, Donec ego víxero. Juxta crucem tecum stare, Et me tibi sociáre In planctu desídero. Virgo vírginum praeclára, Mihi jam non sis amára: Fac me tecum plángere. Fac ut portem Christi mortem, Passiónis fac consórtem, Et plagas recólere. Fac me plagis vulnerári, Fac me cruce inebriári, Et cruóre Fílii. Flammis ne urar succénsus, Per te Virgo, sim defénsus In die judícii. Christe, cum sit hinc exíre, Da per Matrem me veníre Ad palmam victóriae. Quando corpus moriétur, Fac ut ánimae donétur Paradísi glória. Amen. Allelúia.",
      translation: "The sorrowful Mother stood weeping beside the cross where her Son was hanging. Her grieving soul, sharing his sorrow and pain, a sword had pierced. O how sad and afflicted was that blessed Mother of the Only-begotten, who mourned and grieved and trembled as she beheld the sufferings of her glorious Child. Who would not weep to see the Mother of Christ in such distress? Who could not share her sorrow, beholding the devoted Mother suffering with her Son? For the sins of his people she saw Jesus in torment, given over to the scourges. She saw her sweet Child forsaken as he breathed forth his spirit. O Mother, fount of love, let me feel the strength of your sorrow, that I may mourn with you. Grant that my heart may burn with love of Christ my God, that I may be pleasing to him. Holy Mother, do this: engrave deep upon my heart the wounds of the Crucified. Share with me the sufferings of your Son, so willing to bear them for me. Let me weep with you in devotion, mourning with the Crucified, as long as I live. To stand with you beside the cross and to share your lament is my desire. O Virgin, glorious among virgins, be not bitter toward me now; let me mourn with you. Grant that I may bear the death of Christ, share in his Passion, and honor his wounds. Through you, O Virgin, may I be defended on the day of judgment. O Christ, when I must depart, grant that through your Mother I may come to the palm of victory. When my body dies, grant that to my soul be given the glory of Paradise. Amen. Alleluia.",
      stanzas: [
        { latin: "Stabat Mater dolorósa / Juxta crucem lacrimósa, / Dum pendébat Fílius.", translation: "The sorrowful Mother stood weeping beside the cross where her Son was hanging." },
        { latin: "Cujus ánimam geméntem, / Contristátam et doléntem, / Pertransívit gládius.", translation: "Her grieving soul, sharing his sorrow and pain, a sword had pierced." },
        { latin: "O quam tristis et afflícta / Fuit illa benedícta / Mater Unigéniti!", translation: "O how sad and afflicted was that blessed Mother of the Only-begotten," },
        { latin: "Quae maerébat et dolébat, / Pia Mater, dum vidébat / Nati poenas ínclyti.", translation: "who mourned and grieved and trembled as she beheld the sufferings of her glorious Child." },
        { latin: "Quis est homo qui non fleret, / Matrem Christi si vidéret / In tanto supplício?", translation: "Who would not weep to see the Mother of Christ in such distress?" },
        { latin: "Quis non posset contristári, / Christi Matrem contemplári / Doléntem cum Fílio?", translation: "Who could not share her sorrow, beholding the devoted Mother suffering with her Son?" },
        { latin: "Pro peccátis suae gentis / Vidit Jesum in torméntis, / Et flagéllis súbditum.", translation: "For the sins of his people she saw Jesus in torment, given over to the scourges." },
        { latin: "Vidit suum dulcem natum / Moriéndo desolátum, / Dum emísit spíritum.", translation: "She saw her sweet Child forsaken as he breathed forth his spirit." },
        { latin: "Eia Mater, fons amóris, / Me sentíre vim dolóris / Fac, ut tecum lúgeam.", translation: "O Mother, fount of love, let me feel the strength of your sorrow, that I may mourn with you." },
        { latin: "Fac ut árdeat cor meum / In amándo Christum Deum, / Ut sibi compláceam.", translation: "Grant that my heart may burn with love of Christ my God, that I may be pleasing to him." },
        { latin: "Sancta Mater, istud agas, / Crucifíxi fige plagas / Cordi meo válide.", translation: "Holy Mother, do this: engrave deep upon my heart the wounds of the Crucified." },
        { latin: "Tui nati vulneráti, / Tam dignáti pro me pati, / Poenas mecum dívide.", translation: "Share with me the sufferings of your Son, so willing to bear them for me." },
        { latin: "Fac me tecum pie flere, / Crucifíxo condolére, / Donec ego víxero.", translation: "Let me weep with you in devotion, mourning with the Crucified, as long as I live." },
        { latin: "Juxta crucem tecum stare, / Et me tibi sociáre / In planctu desídero.", translation: "To stand with you beside the cross and to share your lament is my desire." },
        { latin: "Virgo vírginum praeclára, / Mihi jam non sis amára: / Fac me tecum plángere.", translation: "O Virgin, glorious among virgins, be not bitter toward me now; let me mourn with you." },
        { latin: "Fac ut portem Christi mortem, / Passiónis fac consórtem, / Et plagas recólere.", translation: "Grant that I may bear the death of Christ, share in his Passion, and honor his wounds." },
        { latin: "Fac me plagis vulnerári, / Fac me cruce inebriári, / Et cruóre Fílii.", translation: "Let me be wounded with his wounds, made drunk by the cross and the Blood of your Son." },
        { latin: "Flammis ne urar succénsus, / Per te Virgo, sim defénsus / In die judícii.", translation: "Through you, O Virgin, may I be defended on the day of judgment." },
        { latin: "Christe, cum sit hinc exíre, / Da per Matrem me veníre / Ad palmam victóriae.", translation: "O Christ, when I must depart, grant that through your Mother I may come to the palm of victory." },
        { latin: "Quando corpus moriétur, / Fac ut ánimae donétur / Paradísi glória. Amen. Allelúia.", translation: "When my body dies, grant that to my soul be given the glory of Paradise. Amen. Alleluia." },
      ],
      mode: "Sequence · Our Lady of Sorrows · Mode II",
      gabc: "(f3) STa(f)bat(e) Ma(f)ter(fg) do(i)lo(h)ró(g)sa(f.) (;) Jux(h)ta(g) cru(f)cem(fe) la(f)cri(g)mó(f)sa,(e.) (;) Dum(g) pen(h)dé(g)bat(f) Fí(e)li(f)us.(f.) (::) 2. Cu(f)jus(e) á(f)ni(fg)mam(i) ge(h)mén(g)tem,(f.) (;) Con(h)tri(g)stá(f)tam(fe) et(f) do(g)lén(f)tem,(e.) (;) Per(g)trans(h)í(g)vit(f) glá(e)di(f)us.(f.) (::) 3. O(j) quam(h) tri(j)stis(ji) et(g) af(h)flí(g)cta(f.) (;) Fu(g)it(h) il(i)la(hg) be(h)ne(g)dí(i)cta(j.) (;) Ma(j)ter(i) U(h)ni(g)gé(f)ni(e)ti!(f.) (::) 4. Quae(j) mae(h)ré(j)bat(ji) et(g) do(h)lé(g)bat,(f.) (;) Pi(g)a(h) Ma(i)ter,(hg) dum(h) vi(g)dé(i)bat(j.) (;) Na(j)ti(i) poe(h)nas(g) ín(f)cly(e)ti.(f.) (::) 5. Quis(f) est(h) ho(i)mo(hg) qui(f) non(e) fle(f)ret,(g.) (;) Ma(h)trem(g) Chri(f)sti(fe) si(f) vi(e)dé(dxd)ret(c.) (;) In(f) tan(e)to(g) sup(h)plí(g)ci(f)o?(f.) (::) 6. Quis(f) non(h) pos(i)set(hg) con(f)tri(e)stá(f)ri,(g.) (;) Chri(h)sti(g) Ma(f)trem(fe) con(f)tem(e)plá(dxd)ri(c.) (;) Do(f)lén(e)tem(g) cum(h) Fí(g)li(f)o?(f.) (::) 7. Pro(f) pec(e)cá(c)tis(fe) su(g)ae(h) gen(g)tis(f.) (;) Vi(h)dit(j) Je(i)sum(hg) in(h) tor(g)mén(f)tis,(e.) (;) Et(g) fla(i)gél(g)lis(h) súb(g)di(f)tum.(f.) (::) 8. Vi(f)dit(e) su(c)um(fe) dul(g)cem(h) na(g)tum(f.) (;) Mo(h)ri(j)én(i)do(hg) de(h)so(g)lá(f)tum,(e.) (;) Dum(g) e(i)mí(g)sit(h) spí(g)ri(f)tum.(f.) (::) 9. E(f){ia}(f) Ma(h)ter,(hg) fons(f) a(g)mó(f)ris,(e.) (;) Me(g) sen(g)tí(h)re(gf) vim(h) do(i)ló(j)ris(j.) (;) Fac,(h) ut(h) te(g)cum(f) lú(e)ge(f)am.(f.) (::) 10. Fac(f) ut(f) ár(h)de(hg)at(f) cor(g) me(f)um(e.) (;) In(g) a(g)mán(h)do(gf) Chri(h)stum(i) De(j)um,(j.) (;) Ut(h) si(h)bi(g) com(f)plá(e)ce(f)am.(f.) (::) 11. San(j)cta(i) Ma(h)ter,(hg) i(h)stud(g) a(f)gas,(e.) (;) Cru(g)ci(h)fí(i)xi(hg) fi(i)ge(j) pla(h)gas(g.) (;) Cor(h)di(g) me(f)o(g) vá(h)li(g)de.(f.) (::) 12. Tu(j)i(i) na(h)ti(hg) vul(h)ne(g)rá(f)ti,(e.) (;) Tam(g) di(h)gná(i)ti(hg) pro(i) me(j) pa(h)ti,(g.) (;) Poe(h)nas(g) me(f)cum(g) dí(h)vi(g)de.(f.) (::) 13. Fac(f) me(j) te(j)cum(ih) pi(j)e(i) fle(h)re,(g.) (;) Cru(h)ci(g)fí(i)xo(ih) con(g)do(h)lé(g)re,(f.) (;) Do(e)nec(f) e(g)go(h) ví(g)xe(f)ro.(f.) (::) 14. Jux(f)ta(j) cru(j)cem(ih) te(j)cum(i) sta(h)re,(g.) (;) Et(h) me(g) ti(i)bi(ih) so(g)ci(h)á(g)re(f.) (;) In(e) plan(f)ctu(g) de(h)sí(g)de(f)ro.(f.) (::) 15. Vir(h)go(hi) vír(j)gi(ji)num(j) prae(i)clá(h)ra,(g.) (;) Mi(h)hi(i) jam(h) non(hg) sis(h) a(g)má(f)ra :(e.) (;) Fac(g) me(i) te(g)cum(h) plán(g)ge(f)re.(f.) (::) 16. Fac(h) ut(hi) por(j)tem(ji) Chri(j)sti(i) mor(h)tem,(g.) (;) Pas(h)si(i)ó(h)nis(hg) fac(h) con(g)sór(f)tem,(e.) (;) Et(g) pla(i)gas(g) re(h)có(g)le(f)re.(f.) (::) 17. Fac(f) me(h) pla(g)gis(gh) vul(i)ne(h)rá(g)ri,(f.) (;) Fac(e) me(h) cru(i)ce(i) in(h)e(g)bri(h)á(i)ri,(j.) (;) Et(h) cru(g)ó(f)re(e) Fí(g)li(f)i.(f.) (::) 18. Flam(f)mis(h) ne(g) u(gh)rar(i) suc(h)cén(g)sus,(f.) (;) Per(e) te(h) Vir(i)go,(ih) sim(g) de(h)fén(i)sus(j.) (;) In(h) di(g)e(f) ju(e)dí(g)ci(f)i.(f.) (::) 19. Chri(h)ste,(f) cum(f) sit(fe) hinc(f) ex(g)í(h)re,(g.) (;) Da(h) per(j) Ma(j)trem(ji) me(j) ve(h)ní(g)re(f.) (;) Ad(e) pal(f)mam(g) vi(i)ctó(h)ri(g)ae.(f.) (::) 20. Quan(h)do(f) cor(f)pus(fe) mo(f)ri(g)é(h)tur,(g.) (;) Fac(h) ut(j) á(j)ni(ji)mae(j) do(h)né(g)tur(f.) (;) Pa(e)ra(f)dí(g)si(i) gló(h)ri(g)a.(f.) (::) A(fgf)men.(ef..) (::) Al(e)le(h)lú(gf~){ia}.(f.) (::)",
      source: "Graduale Romanum (GregoBase #681)",
      blurb: {
        text: "The Stabat Mater keeps its gaze on the Mother beside her crucified Son. Later verses ask that Christ's wounds be remembered, that a singer stand by the cross, and that the Passion be shared.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Recordare Virgo Mater",
      latin: "Recordáre, Virgo Mater, in conspéctu Dei, ut loquáris pro nobis bona, et ut avértat indignatiónem suam a nobis.",
      translation: "Remember, O Virgin Mother, in the sight of God, to speak good things for us, and to turn away his indignation from us.",
      mode: "Offertory · Our Lady of Sorrows · Mode I",
      reference: "",
      gabc: "(c4) RE(d!ff/ggf/gh)cor(fe~)dá(gvFEC'd)re,(d.) *(,) Vir(d/ff/ggf/gh)go(fe) Ma(cd)ter,(d.) (,) in(f) con(gh)spé(hg)ctu(ge) De(gf)i,(dff'1ff) (;) ut(f!hj) lo(ji)quá(gf)ris(fgh) pro(f) no(g)bis(h) bo(fvEC'd)na,(d.) (:) et(f) ut(g) a(gh)vér(fe)tat(d.) (,) in(f)di(g)gna(hj)ti(j)ó(k)nem(i') su(j)am(h.) (;) a(d/ff/ggf/ghd/fffh!jvvIG'Fh.) (,) (h/jj/kkj/klh/jjjvIG'Fg_[uh:l]h) no(d!ewfef)bis. (e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #787)",
      blurb: {
        text: "Recordare Virgo Mater asks the Virgin Mother to stand before God and speak good things for the faithful. On the feast of the Seven Sorrows, the prayer asks her to turn God's indignation away from those who sing it.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Felices sensus",
      latin: "Felíces sensus beátae Maríae Vírginis, qui sine morte meruérunt martýrii palmam sub cruce Dómini.",
      translation: "Blessed are the senses of the Blessed Virgin Mary, which without death merited the palm of martyrdom beneath the cross of the Lord.",
      mode: "Communion · Our Lady of Sorrows · Mode I",
      reference: "",
      gabc: "(c4) FE(d)lí(f)ces(fe) sen(fge'fvED'e)sus(e[ll:1]d..) *(,) be(f)á(deDC'd)tae(d_c) Ma(f)rí(gh)ae(hvGF) Vír(ixghg/hi)gi(h)nis,(h.) (:) qui(f) si(gh)ne(hg) mor(ixhi)te(h.) (;) me(h)ru(hg/hfgvFE)é(d!ewfef)runt(e[ll:1]d..) (,) mar(h)tý(hj)ri(h)i(h) pal(ixh)mam(hg/hih.) (;) sub(dc) cru(fg'h)ce(f_e) Dó(cd)mi(d_c/d!ewf)ni.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1180)",
      blurb: {
        text: "Felices sensus calls Mary's senses blessed because beneath the cross they receive a martyr's palm without bodily death. The Communion presents that suffering as a witness at the cross.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
  },
  /* ===================================================================
   * New fixed-date sanctoral feasts (companion to the introits above):
   * Candlemas, the Visitation, the Nativity of the BVM, the Archangels,
   * St. Andrew, St. Stephen, St. John the Evangelist, the Holy Innocents.
   * Latin = GregoBase Solesmes (Graduale Romanum), gabc pulled by id; the
   * Visitation and Nativity of Mary draw on the Common of the BVM (each
   * lacks its own historic proper formulary). See
   * sources/gregobase/build-new-feasts.py and new-feasts-worklist.md.
   * =================================================================== */
  "candlemas": {
    gradual: {
      title: "Suscepimus Deus",
      latin: "Suscépimus, Deus, misericórdiam tuam in médio templi tui : secúndum nomen tuum, Deus, ita et laus tua in fines terrae. ℣. Sicut audívimus, ita et vídimus in civitáte Dei nostri, in monte sancto ejus.",
      translation: "We have received your mercy, O God, in the midst of your temple: according to your name, O God, so also is your praise unto the ends of the earth. ℣. As we have heard, so have we seen, in the city of our God, in his holy mountain.",
      mode: "Gradual · The Presentation of the Lord · Mode V",
      reference: "Ps. 48:10-11, 9",
      gabc: "(c4) SUs(d)cé(ffg)pi(f)mus,(f.) *(,) De(ghg'/hg)us,(gv.fgFD.1) (,) mi(d)se(ffg)ri(f)cór(fg~)di(f)am(f) tu(fffvDC'dff/hghf)am(f.) (;) in(hj~) mé(j)di(kvJH)o(h) tem(f)pli(h) tu(gv.fhf/gh)i :(g.) (:) se(h)cún(hg~)dum(j) no(j)men(ij) tu(hhg)um,(h_g) De(fg!hvGF'g)us,(gf..) (;) i(ffg)ta(f) et(f) laus(ghg'hvG'F) tu(fv.ege/f_d)a(dc..) (;) in(fgf) fi(fg'h)nes(ixhjHG'hw!ivHG') ter(f)rae.(fffvDC.) (,) (fg!hvGF.e!g'h//fhg/hggf.0) (z0::c3) ℣. Sic(d)ut(d) au(fe~)dí(eh)vi(h)mus,(h_[oh:h]i_[oh:h]h_2[oh:h]//i_[oh:h]hjvHF.1) (,) (h_g/ijh'___jvIH'jvIH'//hvGF.) (:) i(f!h'i)ta(ih/jkihhf.) (,) et(f) ví(hfh)di(hhh)mus(h.f!gwh!iv.hi/jhh/iih.0) (:) in(d) ci(d)vi(d)tá(d)te(d) De(d)i(d) no(de)stri,(d.) (,) in(d) mon(d)te(d) san(dfE'D)cto(ef) *() e(fhG'Fhhh)jus.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #50)",
      blurb: {
        text: "Suscepimus Deus draws its text from Psalm 48, but not in the order the psalm gives it. The body of the gradual sings verses 10 and 11, though it drops the closing phrase of verse 11, \"thy right hand is full of justice.\" The versicle then reaches back to verse 9, which comes before both of those verses in the psalm, so the chant moves forward through the psalm and then backward again.",
        source: "Ps. 48:10-11, 9 (Vulgate numbering Ps. 47:10-11, 9) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Senex puerum portabat",
      latin: "Allelúia. ℣. Senex púerum portábat : puer autem senem regébat.",
      translation: "Alleluia. ℣. The old man carried the Child: but the Child was his ruler.",
      mode: "Alleluia · The Presentation of the Lord · Mode I",
      reference: "",
      gabc: "(c4) AL(c)le(d!fdf)lú(ef!gvFEfg~){ia}.(g.) *(;) ij.(hvGFgvFEf_ghvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'EDde!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::) ℣. Se(fhg___)nex(g_[oh:h]e//fgf/gddc.) (,) pú(cd)e(ef'g)rum(gv.e!g_4[uh:l]h) por(fvED)tá(d.c!dw!evDCde)bat :(d.) (:) pu(dede)er(ce) au(ixg_[uh:l]h/ig/h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(ixce!g_4[uh:l]h/ig/h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(gv.ef/g_[oh:h]e/f_dev.)(,)(gv.ef/g_[oh:h]e/f_dev.c!dwe'!fv)tem(e[ll:1]d..) (;) se(c)nem(d!fdf) ()* re(ef!gvFE)gé(fg)bat.(g.) (,) (hvGFgvFEf_ghvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'EDde!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::)",
      source: "Graduale Romanum (GregoBase #429)",
      blurb: {
        text: "William Byrd set this text twice in his Gradualia: ac cantiones sacrae, liber primus of 1605. One setting appears among pieces for the Purification, alongside Suscepimus Deus, Nunc dimittis, and Responsum accepit Simeon. A second setting appears among the miscellaneous four-voice pieces in the same collection.",
        source: "Wikipedia, \"List of compositions by William Byrd\" (rev. 1353567302)",
      },
    },
    offertory: {
      title: "Diffusa est gratia",
      latin: "Diffúsa est grátia in lábiis tuis : proptérea benedíxit te Deus in aetérnum, et in saéculum saéculi.",
      translation: "Grace is poured abroad on your lips: therefore has God blessed you for ever, and for ages of ages.",
      mode: "Offertory · The Presentation of the Lord · Mode VIII",
      reference: "Ps. 45:3",
      gabc: "(c4) DIf(df)fú(ef!ghhghhgh)sa(fhg) est(g.) *(,) grá(hv./[-0.5]jkjkvJ'I)ti(jjj_h)a(hg..) (;) in(hggf~) lá(h_g/jjjh//jkJ'I)bi(jjjhhg)is(h.) tu(gjIH'hg)is :(ghggf.0) (:) pro(hj)ptér(jjj//jkj)e(jj/kj)a(jkjjgh.) (,) be(gihhg)ne(g)dí(hv./[-0.5]jkj)xit(j) te(jkjj) De(ji)us(j.) (;) in(jjj_ghjkj) ae(jjj_g//hj/klj)tér(jjj_g//jvIH'hg~)num,(ghggf.0) (:) et(fh) in(hjI'H) saé(gj//j'1j//jjj)cu(jj/k_[hl:1]j)lum(j.) (,) saé(jkjjg//hj/kj/kjjh//jjj_h/jj//jkj//hiH'G)cu(fg)li.(g.) (,) (jjvH'Gh_ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #177)",
      blurb: {
        text: "Diffusa est gratia begins in the middle of Psalm 45:3, dropping the verse's opening phrase, which in the Douay-Rheims reads \"Thou art beautiful above the sons of men.\" The psalm verse itself closes with \"benedixit te Deus in æternum,\" blessing \"for ever,\" but the Offertory extends that ending with \"et in saéculum saéculi,\" a second, emphatic phrase meaning \"and for ages of ages\" that does not appear in the psalm verse as it stands.",
        source: "Ps. 45:3 (Vulgate numbering Ps. 44:3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Responsum accepit Simeon",
      latin: "Respónsum accépit Símeon a Spíritu Sancto, non visúrum se mortem, nisi vidéret Christum Dómini.",
      translation: "Simeon received an answer from the Holy Spirit, that he should not see death, before he had seen the Christ of the Lord.",
      mode: "Communion · The Presentation of the Lord · Mode VIII",
      reference: "Luke 2:26",
      gabc: "(c4) RE(d)spón(fh~)sum(g) *() ac(g)cé(gh)pit(ghg) Sí(f)me(ghg)on(hvGFghd.1___) (,) a(d) Spí(g)ri(f)tu(e) San(fg~)cto,(d!ewf.) (;) non(d) vi(d)sú(fg'h)rum(g) se(gf) mor(hj)tem,(ji/jkJ'I) (,) ni(h)si(ji) vi(g)dé(h)ret(ghG'F) Chri(fh)stum(ji) Dó(g)mi(ghg___)ni.(g.) (::)",
      source: "Graduale Romanum (GregoBase #803)",
      blurb: {
        text: "Luke 2:26 gives this Communion its focus: the Spirit's promise to Simeon before he sees Christ. At the Presentation, the verse stands just before Simeon takes the Child in his arms and blesses God.",
        source: "Luke 2:26 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Sancti-02-02 (Missale Romanum formulary)",
      },
    },
  },
  "visitation": {
    gradual: {
      title: "Benedicta et venerabilis",
      latin: "Benedícta et venerábilis es, Virgo María : quae sine tactu pudóris invénta es mater Salvatóris. ℣. Virgo Dei Génitrix, quem totus non capit orbis, in tua se clausit víscera factus homo.",
      translation: "Blessed and venerable are you, O Virgin Mary: who without stain were found the mother of the Saviour. ℣. Virgin Mother of God, he whom the whole world cannot contain enclosed himself in your womb, being made man.",
      mode: "Gradual · The Visitation of the Blessed Virgin Mary · Mode IV",
      reference: "",
      gabc: "(c4) BE(fe)ne(fg)dí(g)cta(gv.ff/ded.) (,) * et(f) ve(dfe)ne(fg)rá(gff)bi(df)lis(egF'E) es,(e.) (;) Vir(e[ll:1]d~)go(g) Ma(hj)rí(i!jw!kvJI'H//fhf/gh)a :(g.) (:) quae(df) si(feg)ne(gefd) ta(cd)ctu(d.) pu(f)dó(gh)ris(ixh.0/[-0.5]ivHG'h/ef'g) (;) in(gh~)vén(hfhhvGE'fd)ta(cd) es(d.) (,) ma(dc/[1]{/[-3]ix}fg'h)ter(h.0/[-0.5]ivHG'ef'g) Sal(g)va(df)tó(efED.)(,)(ixf.0/[-0.5]hiHG'ge./ghGF'Ef_gF'E)ris.(e.) (::) ℣. Vir(h)go(ixjhhgh/ef'!geg!ivHGhvFDe.) (,) (ghF'Eghfff'1dfED'fg'h) (,) De(gf/gh)i(g) Gé(f)ni(ghgh)trix,(hgh'1f) (;) quem(e[ll:1]d) to(f_g//ef!hvGE'fd)tus(d.) (,) non(e) ca(c)pit(d) or(d!ff//fffdfvED'ef'g)bis,(ghhg.) (:) in(f) tu(f)a(ghgh) se(h) clau(hgh'1f)sit(e[ll:1]d) (,) ví(f_g//ef!hvGE'fd)sce(cd)ra(d.) (;) * fa(cd!ff)ctus(fg) ho(g_[oh:h]f/hgh)mo.(hhf.) (,) (h_ghvFDgff'fvEC//dd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #392)",
      blurb: {
        text: "Benedicta et venerabilis is sung between the Epistle and the Gospel, and the Gospel of the day (Luke 11:27-28) opens with a woman crying out from the crowd: \"Beátus venter, qui te portávit,\" blessed is the womb that bore you. The Gradual has just sung the same opening word, \"Benedícta,\" of Mary. The verse then presses further into that same image, describing the one whom the whole world cannot contain enclosing himself in Mary's womb, which is precisely the womb the Gospel woman singles out for blessing.",
        source: "Divinum Officium, Commune/C10 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Felix es sacra Virgo",
      latin: "Allelúia. ℣. Felix es, sacra Virgo María, et omni laude digníssima : quia ex te ortus est sol justítiae, Christus Deus noster.",
      translation: "Alleluia. ℣. Happy are you, O holy Virgin Mary, and most worthy of all praise: for out of you arose the sun of justice, Christ our God.",
      mode: "Alleluia · The Visitation of the Blessed Virgin Mary · Mode VIII",
      reference: "Cf. Mal. 4:2",
      gabc: "(c4) AL(g)le(ghG'Fg)lú(h/jh/jhhg~){ia}.(g'//hvG'Fg.) *(;) ij.(hjjikvJHG.ihj/hiHG.) (,) (kkg//hiHG.iih!iw!jvIH'hg.) (::) ℣. Fe(gjji)lix(i/jkJH'hg) es,(g.) (,) sa(hgh)cra(fh!jjlvKJH'G) Vir(fg~)go(g.) (,) Ma(ghG'Fg/hj)rí(ghg___)a,(g.) (:) et(g) o(ghG~'F~)mni(f) lau(hg/jjhivHG.)(,)(kkg//hiHG.iih!iw!jvI~H~)de(hg) di(hih')gnís(g)si(fg)ma :(g.) (:) qui(gd)a(fe) ex(fg) te(g.) or(hg/hf//gh!jvHGef!gvFEfg)tus(dc) est(c.) (;) sol(gf) ju(fh)stí(hg)ti(fg)ae,(g.) (,) Chri(gh)stus(g) De(g)us(ghG'Fg) ()* no(h/jh/jhhg~)ster.(g'//hvG'Fg.) (,) (hjjikvJHG.ihj/hiHG.) (,) (kkg//hiHG.iih!iw!jvIH'hg.) (::)",
      source: "Graduale Romanum (GregoBase #481)",
      blurb: {
        text: "Felix es sacra Virgo praises Mary as worthy of every praise because Christ, the sun of justice, arose from her. This Alleluia is sung for the Visitation of the Blessed Virgin Mary.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Beata es Virgo Maria",
      latin: "Beáta es, Virgo María, quae ómnium portásti Creatórem : genuísti qui te fecit, et in aetérnum pérmanes Virgo, allelúia.",
      translation: "Blessed are you, O Virgin Mary, who bore the Creator of all: you brought forth him who made you, and you remain a Virgin for ever, alleluia.",
      mode: "Offertory · The Visitation of the Blessed Virgin Mary · Mode VIII",
      reference: "",
      gabc: "(c4) BE(fg)á(g./[-0.5]hjHG'gf)ta(ghg___) es,(g.) *(,) Vir(jvIHk_[hl:1]j//ijh/ig./[-0.5]hi/jg.)(,)(jvIHk_[hl:1]j//ijh/ig./[-0.5]hi/jg.)(,)(ggghvGFg_[oh:h]d//g!jhi)go(hg..) (,) Ma(ig/h!jjk)rí(hg)a,(gd..) (;) quae(d) ó(d)mni(d)um(d) por(d)tá(dc/d!ff/gh/jg)sti(g.) (;) Cre(h)a(g)tó(gjI'Ghh//fh!jvGF'fd/ef!ghg)rem :(g.) (:) ge(g_[oh:h]d)nu(f_e)í(fhg)sti(g.) (,) qui(g) te(gh) fe(h_g/hiH'Gj_g//hiH'G//fg/hg/hjjh/i_[oh:h]g)cit,(g.) (:) et(hvGF) in(hji) ae(jhj)tér(hjg)num(gfh.) (,) pér(gj)ma(ji)nes(jkJH'//gi.hjIH'//g!jj/h_[oh:h]i_[oh:h]g_[oh:h]) Vir(ghg___)go,(g.) (:) al(g@k!ik~)le(kv.jkj'kvJ'IG.hj/ijHG.)(,)(h!kik./jkj'kvJ'IG.hi//hjg___)lú(ghg___){ia}.(g.) (::)",
      source: "Graduale Romanum (GregoBase #567)",
      blurb: {
        text: "At the Visitation's offertory, Beata es Virgo Maria blesses Mary as the one who bore the Creator and gave birth to the one who made her. The antiphon holds together maternity and enduring virginity in a compact praise for Mary.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Beata viscera",
      latin: "Beáta víscera Maríae Vírginis, quae portavérunt aetérni Patris Fílium.",
      translation: "Blessed is the womb of the Virgin Mary, which bore the Son of the eternal Father.",
      mode: "Communion · The Visitation of the Blessed Virgin Mary · Mode I",
      reference: "Cf. Luke 11:27",
      gabc: "(c4) BE(d)á(f)ta(fe) ví(fg)sce(efED'e)ra(e[ll:1]d..) (,) * Ma(f)rí(gh)ae(hvGF) Vír(ixghg/hi)gi(h)nis,(h.) (:) quae(f) por(gh~)ta(hg/hfgvFE)vé(d!ewfef)runt(e[ll:1]d..) (,) ae(h)tér(ixjhhg/hi)ni(h.) Pa(dc/fg'h)tris(f_e) Fí(cd)li(d_c/d!ewf)um.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #160)",
      blurb: {
        text: "Beata viscera alludes to Luke 11:27, where a woman in the crowd calls out to Jesus, in the Latin of the Vulgate: \"Beatus venter qui te portavit, et ubera quæ suxisti.\" The chant text draws on that cry but reshapes it, naming Mary by name, specifying her virginity, and identifying the child as the Son of the eternal Father. The same text was also set as a monophonic conductus by Pérotin (fl. c. 1200), the Notre Dame composer: Anonymous IV, a late-thirteenth-century English student who studied in Paris, lists \"Beata viscera etc.\" among Pérotin's works of that form.",
        source: "Cf. Luke 11:27 (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Pérotin\" (rev. 1367640205)",
      },
    },
  },
  "nativity-mary": {
    gradual: {
      title: "Benedicta et venerabilis",
      latin: "Benedícta et venerábilis es, Virgo María : quae sine tactu pudóris invénta es mater Salvatóris. ℣. Virgo Dei Génitrix, quem totus non capit orbis, in tua se clausit víscera factus homo.",
      translation: "Blessed and venerable are you, O Virgin Mary: who without stain were found the mother of the Saviour. ℣. Virgin Mother of God, he whom the whole world cannot contain enclosed himself in your womb, being made man.",
      mode: "Gradual · The Nativity of the Blessed Virgin Mary · Mode IV",
      reference: "",
      gabc: "(c4) BE(fe)ne(fg)dí(g)cta(gv.ff/ded.) (,) * et(f) ve(dfe)ne(fg)rá(gff)bi(df)lis(egF'E) es,(e.) (;) Vir(e[ll:1]d~)go(g) Ma(hj)rí(i!jw!kvJI'H//fhf/gh)a :(g.) (:) quae(df) si(feg)ne(gefd) ta(cd)ctu(d.) pu(f)dó(gh)ris(ixh.0/[-0.5]ivHG'h/ef'g) (;) in(gh~)vén(hfhhvGE'fd)ta(cd) es(d.) (,) ma(dc/[1]{/[-3]ix}fg'h)ter(h.0/[-0.5]ivHG'ef'g) Sal(g)va(df)tó(efED.)(,)(ixf.0/[-0.5]hiHG'ge./ghGF'Ef_gF'E)ris.(e.) (::) ℣. Vir(h)go(ixjhhgh/ef'!geg!ivHGhvFDe.) (,) (ghF'Eghfff'1dfED'fg'h) (,) De(gf/gh)i(g) Gé(f)ni(ghgh)trix,(hgh'1f) (;) quem(e[ll:1]d) to(f_g//ef!hvGE'fd)tus(d.) (,) non(e) ca(c)pit(d) or(d!ff//fffdfvED'ef'g)bis,(ghhg.) (:) in(f) tu(f)a(ghgh) se(h) clau(hgh'1f)sit(e[ll:1]d) (,) ví(f_g//ef!hvGE'fd)sce(cd)ra(d.) (;) * fa(cd!ff)ctus(fg) ho(g_[oh:h]f/hgh)mo.(hhf.) (,) (h_ghvFDgff'fvEC//dd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #392)",
      blurb: {
        text: "The Gospel of the day, Luke 11:27-28, opens with a woman in the crowd calling out to Christ: blessed is the womb that bore you and the breasts that nursed you. The Gradual's verse answers that same image directly, \"quem totus non capit orbis, in tua se clausit víscera factus homo,\" he whom the whole world cannot contain enclosed himself in your womb, being made man.",
        source: "Divinum Officium, Commune/C10 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Solemnitas gloriosae Virginis",
      latin: "Allelúia. ℣. Solémnitas gloriósae Vírginis Maríae, ex sémine Abrahae, ortae de tribu Juda, clara ex stirpe David.",
      translation: "Alleluia. ℣. The solemnity of the glorious Virgin Mary, sprung of the seed of Abraham, born of the tribe of Judah, illustrious of the stock of David.",
      mode: "Alleluia · The Nativity of the Blessed Virgin Mary · Mode VII",
      reference: "",
      gabc: "(c3) AL(d)le(efdeffe)lú(df!hvGFhh){ia}.(e.) (;) * ij.(hvijj/h/ii//efE'Dffe.) (,) (h'/ig'hvF'ED'C[ull:0]B.e.f!gwhhvG'FEffe.) (::) ℣. Sol(eh)é(h_gfge)mni(fe)tas(e.) (,) glo(d)ri(efef)ó(hvGF'ge)sae(e.) (;) Vír(ei)gi(iv.jkj/!jvIHjh/ij)nis(i.) (,) Ma(ij)rí(ij/kljkvJIjvIH'i)ae,(i.) (;) ex(i) sé(ij)mi(i)ne(ij/kljkvJIjvIHii) (,) (eijvIH'hvGF'E) A(de)bra(effe)hae,(e.) (:) or(e)tae(ehg) de(hi) tri(i./jkjjvIH'Ghih)bu(i.) (,) Ju(hv.fhG'FE'Dfgffe)da,(e.) (:) cla(d)ra(efdeffe) ex(d) stir(df!hvGFhh)pe(e.) (;) * Da(hvijj/h/ii//efE'Dffe.)(,)(h'/ig'hvF'ED'C[ull:0]B.e.f!gwhhvG'FEffe)vid.(e.) (::)",
      source: "Graduale Romanum (GregoBase #420)",
      blurb: {
        text: "Mary's Nativity receives an Alleluia that names her glorious solemnity and traces her descent through Abraham, Judah, and David. The verse celebrates her birth by placing it within a remembered ancestral line.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Beata es Virgo Maria",
      latin: "Beáta es, Virgo María, quae ómnium portásti Creatórem : genuísti qui te fecit, et in aetérnum pérmanes Virgo, allelúia.",
      translation: "Blessed are you, O Virgin Mary, who bore the Creator of all: you brought forth him who made you, and you remain a Virgin for ever, alleluia.",
      mode: "Offertory · The Nativity of the Blessed Virgin Mary · Mode VIII",
      reference: "",
      gabc: "(c4) BE(fg)á(g./[-0.5]hjHG'gf)ta(ghg___) es,(g.) *(,) Vir(jvIHk_[hl:1]j//ijh/ig./[-0.5]hi/jg.)(,)(jvIHk_[hl:1]j//ijh/ig./[-0.5]hi/jg.)(,)(ggghvGFg_[oh:h]d//g!jhi)go(hg..) (,) Ma(ig/h!jjk)rí(hg)a,(gd..) (;) quae(d) ó(d)mni(d)um(d) por(d)tá(dc/d!ff/gh/jg)sti(g.) (;) Cre(h)a(g)tó(gjI'Ghh//fh!jvGF'fd/ef!ghg)rem :(g.) (:) ge(g_[oh:h]d)nu(f_e)í(fhg)sti(g.) (,) qui(g) te(gh) fe(h_g/hiH'Gj_g//hiH'G//fg/hg/hjjh/i_[oh:h]g)cit,(g.) (:) et(hvGF) in(hji) ae(jhj)tér(hjg)num(gfh.) (,) pér(gj)ma(ji)nes(jkJH'//gi.hjIH'//g!jj/h_[oh:h]i_[oh:h]g_[oh:h]) Vir(ghg___)go,(g.) (:) al(g@k!ik~)le(kv.jkj'kvJ'IG.hj/ijHG.)(,)(h!kik./jkj'kvJ'IG.hi//hjg___)lú(ghg___){ia}.(g.) (::)",
      source: "Graduale Romanum (GregoBase #567)",
      blurb: {
        text: "For the Nativity of Mary, the offertory calls her blessed because she bore the Creator of all. Its praise turns on the wonder that the child she brings forth is also the one who made her.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Beatam me dicent",
      latin: "Beátam me dicent omnes generatiónes, quia fecit mihi magna qui potens est.",
      translation: "All generations shall call me blessed, for he who is mighty has done great things for me.",
      mode: "Communion · The Nativity of the Blessed Virgin Mary · Mode VI",
      reference: "Luke 1:48-49",
      gabc: "(c4) BE(d)á(ffg)tam(f) me(fh) di(hggfg)cent(gf..) *(,) o(fv.egF'D)mnes(d_c) ge(f)ne(f_e)ra(g)ti(ixg_[oh:h]i_[oh:h]g_[oh:h]!hwi)ó(f_[oh:h]g_[oh:h]f_[oh:h])nes,(f.) (:) qui(f)a(f) fe(ixf!gwh'!iv)cit(h) mi(hjj)hi(hj) ma(gf~)gna(fgff/ded.) (,) qui(f_e/ggh) pot(f)ens(fg!hvGF'g) est.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #286)",
      blurb: {
        text: "Beátam me dicent is drawn from two consecutive verses of the Magnificat, Luke 1:48-49, but it does not quote either verse whole. The opening of verse 48, \"quia respexit humilitatem ancillæ suæ,\" is left aside, and the chant picks up mid-verse with \"beatam me dicent omnes generationes,\" then continues into verse 49 while dropping its closing phrase, \"et sanctum nomen ejus.\" The Gospel appointed for the formulary that includes this Communion antiphon is Luke 1:41-50, so the congregation has heard these same words proclaimed aloud before receiving them again at Communion.",
        source: "Luke 1:48-49 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Sancti-08-15 (Missale Romanum formulary)",
      },
    },
  },
  "archangels": {
    gradual: {
      title: "Benedicite Dominum omnes Angeli",
      latin: "Benedícite Dóminum omnes Angeli ejus : poténtes virtúte, qui fácitis verbum ejus. ℣. Bénedic ánima mea Dóminum, et ómnia interióra mea nomen sanctum ejus.",
      translation: "Bless the Lord, all you his Angels: mighty in strength, who do his word. ℣. Bless the Lord, O my soul, and let all that is within me bless his holy name.",
      mode: "Gradual · Sts. Michael, Gabriel and Raphael, Archangels · Mode III",
      reference: "Ps. 103:20, 1",
      gabc: "(c4) BE(f)ne(ffff_c)dí(d!ewf_e)ci(f)te(fffd/fff) (,) * Dó(e.f!gwh_g)mi(hg)num(ixg_[uh:l]h//e.f!gw!higff/ded.) (;) o(g)mnes(hj) An(j)ge(j)li(j) e(jj//jjjvHGigh)jus :(h.) (,) (i_j_i_2/j_[hl:1]k_[hl:1]i'_[hl:1]//kvJ'IHjvIH) (,) (jj/ki'jvHG'jh'/ihhg.) (:) pot(g)én(hjI~H~)tes(jkJ'H) vir(jjh~)tú(jjj_g)te,(ixg_[uh:l]h//e.f!gw!higff/ded.) (;) qui(gji) fá(jji/j_k)ci(jkJ'Hg!ihi)tis(ij'k) ver(jk~)bum(g_[oh:h]f) (,) e(f!h'j~)jus.(i_[oh:h]g//ivHGhhf/hh) (,) (g!jj//jj//jjjvH'GF'Ef_h//ixivGFghg/hgge.) (::) ℣. Bé(e)ne(e)dic(ege/ghgff/ded.) (,) á(dc)ni(g)ma(hj) me(ijh)a(h.) Dó(h!jij)mi(hgh)num,(h.) (,) (i_j_i_2/j_[hl:1]k_[hl:1]i'_[hl:1]//kvJ'IHjvIH) (,) (jj/ki'jvHG'jh'/ihhg.) (:) et(ijg) ó(h_j)mni(j)a(jj) (,) in(ijg)ter(h_i)i(i)ó(ki/jk_[hl:1]j//ki/jk_[hl:1]jk//ij/kjkkj)ra(j_i) (,) me(jh/jjjvHG'h!jjjvHG'h)a(hv.gjh/ihhg.) (:) no(hji)men(jj//jjjh/ijHG.) (,) (jj//jjjh/ijHG.) (,) (jj/kh/jjk/jk/ljjj'1h/ijHG.) (,) (jg/i_[uh:l]j//gh!jjjvH'GF'fd.) (;) san(fd/ffd/ef!gh/jjj)ctum(g_[oh:h]f) *() e(f!h'j~)jus.(i_[oh:h]g//ivHGhhf/hh) (,) (g!jj//jj//jjjvH'GF'/[-0.5]{ix}E0f_h//ivGFghg/hgge.) (::)",
      source: "Graduale Romanum (GregoBase #609)",
      blurb: {
        text: "Benedicite Dominum omnes Angeli draws from two points of Psalm 103 in reverse order. The respond takes verse 20, a summons to the angels, and the verse then steps back to the psalm's very opening line, verse 1, where the soul turns the same blessing inward: \"Bless the Lord, O my soul, and let all that is within me bless his holy name.\" Verse 20 in its psalm context is one call in a chain that extends to all God's hosts and all his works (verses 21-22), but the chant lifts only the angel verse, pairing it with the psalm's personal opening to frame the feast.",
        source: "Ps. 103:20, 1 (Vulgate numbering Ps. 102:20, 1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Sancte Michael Archangele",
      latin: "Allelúia. ℣. Sancte Míchael Archángele, defénde nos in proélio : ut non pereámus in treméndo judício.",
      translation: "Alleluia. ℣. Holy Michael the Archangel, defend us in battle: that we may not perish in the dreadful judgment.",
      mode: "Alleluia · Sts. Michael, Gabriel and Raphael, Archangels · Mode VIII",
      reference: "",
      gabc: "(c4) AL(d)le(ggf)lú(hg~){ia}.(gv.efd.1) *(;) ij.(df!ghhgjvIHG.) (,) (giihkvJIH'GivHG'Fgh//fefd.) (,) (df!ghhgjvIH'hg.) (::) ℣. San(dg~)cte(gh) Mí(gf)cha(de)el(ev.dec.) (,) Arch(ghi)án(ih~)ge(h/jkJH'GF'g)le,(g.) (;) de(g)fén(e)de(fe) nos(d) in(d) proé(ef)li(g)o :(g/iihkvJIH'hg.) (:) ut(gk) non(k_[hl:1]g) per(hf)e(ghi)á(i.h!iw!jvI'HG)mus(g'/hfg.) (;) in(d) tre(ggf)mén(hg~)do(g.) * ju(f)dí(de)ci(ev.dec)o.(c.) (;) (df!ghhgjvIHG.) (,) (giihkvJIH'GivHG'Fgh//fefd.) (,) (df!ghhgjvIH'hg.) (::)",
      source: "Graduale Romanum (GregoBase #1103)",
      blurb: {
        text: "Saint Michael's Alleluia asks for defense in battle before the dreadful judgment. On the feast of Michael, Gabriel, and Raphael, the chant makes that plea a prayer for God's protection.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Benedicite Dominum, ministri ejus",
      latin: "Benedícite Dóminum omnes Angeli ejus : minístri ejus, qui fácitis verbum ejus, ad audiéndam vocem sermónum ejus.",
      translation: "Bless the Lord, all you his Angels: his ministers, who do his word, hearkening to the voice of his commands.",
      mode: "Offertory · Sts. Michael, Gabriel and Raphael, Archangels · Mode I",
      reference: "Ps. 103:20-21",
      gabc: "(c4) BE(c)ne(d)dí(ixdh'!iv)ci(h)te(h) *() Dó(h!jjj_h)mi(hg)num(h.) (;) o(f!gwhg~)mnes(h) An(hjh___!iwj)ge(g)li(fgffe) e(de!fvE~D~)jus :(e[ll:1]d..) (:) mi(d)ní(d!f'g)stri(g) e(hgh)jus,(ixhig'hvF'Df.) (;) qui(df) fá(ghg)ci(h)tis(gf) ver(hjI~'H~)bum(hgh) e(fg!hvG~F~)jus,(gf..) (:) ad(g) au(fgf)di(d)én(d!ew!fvEDevD~C~)dam(dc__) vo(f!hgh)cem(hjhghgfgF'Df.) (,) ser(d!fff)mó(f)num(fgffe) e(de!fvED'e)jus.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1270)",
      blurb: {
        text: "Benedicite Dominum, ministri ejus draws from two consecutive verses of Psalm 103, weaving them into a single text that matches neither verse exactly. The opening call to the angels and the closing phrase \"ad audiendam vocem sermonum ejus\" come from verse 20, while \"ministri ejus, qui facitis\" comes from verse 21. Where verse 21 ends with \"voluntatem ejus,\" his will, the Offertory substitutes \"verbum ejus,\" his word, borrowing that word from verse 20 and drawing both verses more tightly together around the theme of obedience to God's word.",
        source: "Ps. 103:20-21 (Vulgate numbering Ps. 102:20-21) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Benedicite omnes Angeli",
      latin: "Benedícite omnes Angeli Dómini Dóminum : hymnum dícite, et superexaltáte eum in saécula.",
      translation: "Bless the Lord, all you Angels of the Lord: sing a hymn, and exalt him above all for ever.",
      mode: "Communion · Sts. Michael, Gabriel and Raphael, Archangels · Mode III",
      reference: "Dan. 3:58",
      gabc: "(c4) BE(eef)ne(de)dí(gh)ci(g_[oh:h]f)te(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (,) * o(g)mnes(g) An(iij)ge(h)li(g) Dó(h)mi(g)ni(f) Dó(hih)mi(ghg___)num :(g.) (:) hy(g)mnum(g) dí(i_[uh:l]j)ci(h)te,(g.h!iwjiih.0) (;) et(h) su(iji)per(g)ex(h)al(g)tá(fg'h)te(g) e(efED'e)um(e[ll:1]d..) (,) in(fv.fffdeg_[uh:l]h) saé(gv.fg/hhg)cu(egff)la.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1127)",
      blurb: {
        text: "Benedicite omnes Angeli draws from verse 58 of Daniel 3, part of a long canticle in which the three young men in the fiery furnace call each part of creation in turn to bless the Lord: works of the Lord, angels, heavens, waters, and so on through many verses. The antiphon lifts only the angels' verse from that litany, and it adjusts the wording: where the Vulgate reads \"laudate et superexaltate,\" the antiphon substitutes \"hymnum dícite, et superexaltáte,\" replacing \"praise\" with a call to sing a hymn. St. Jerome noted in his own time that this entire section of Daniel 3 was absent from the Hebrew manuscripts he knew.",
        source: "Dan. 3:58 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "andrew": {
    gradual: {
      title: "Constitues eos principes",
      latin: "Constítues eos príncipes super omnem terram : mémores erunt nóminis tui, Dómine. ℣. Pro pátribus tuis nati sunt tibi fílii : proptérea pópuli confitebúntur tibi.",
      translation: "You shall make them princes over all the earth: they shall remember your name, O Lord. ℣. Instead of your fathers, sons are born to you: therefore shall the peoples praise you.",
      mode: "Gradual · St. Andrew, Apostle · Mode V",
      reference: "Ps. 45:17-18",
      gabc: "(c4) COn(d)stí(ff)tu(f!hgh)es(h) e(gg)os(gf..) *(,) prín(h)ci(ixi)pes(h_g//hiHF.ghFD.ev.dec.!/[-0.5]fg/!hggf.0) (;) su(jjk)per(j_h) o(jk~)mnem(j) ter(ixjhi)ram :(hgiHGkv.jkJ//F.0gh/jiih.0) (:) mé(ixj_h/i!jwk)mo(ixjk_[hl:1]J'_[hl:1]IH'i)res(h.) e(ixgh!i'j)runt(i_[oh:h]h) (,) nó(ixjhi)mi(gf)nis(f) tu(h_g)i,(jj) (`) Dó(ixjhi)mi(gf)ne.(fhg___) (,) (jkijh.fhg/hggf.0) (z0::c3) ℣. Pro(df) pá(hvvGFhvGEff//gxde!fgF'EfvEDe.)(,)(fh/ih/ih/ijh)tri(gh)bus(h.) (,) tu(ih/kkh/ih/kkvIH)is(hv.ghGF.) (;) na(h.i!jwk)ti(ih) sunt(h.) ti(f!hhe)bi(f.) (,) fí(gxfgFE.fgFD.fvEDe[ll:1]d)li(bd)i :(d.) (:) pro(de)ptér(ef)e(hf/ge)a(ef!hih.) (,) pó(h)pu(gh)li(gxfhE'D//hf/gf..) (,) con(d)fi(ef)te(f)bún(f)tur(hV_!fg~) *() ti(e.f!gwh)bi.(he) (,) (gxhfgED'//ef/hff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #307)",
      blurb: {
        text: "Psalm 45 verse 17 reads in full: \"Instead of thy fathers, sons are born to thee: thou shalt make them princes over all the earth.\" The gradual takes the second clause of that verse first, opening with \"Constitues eos principes,\" then draws its close from the opening of verse 18. The verse (℣) reverses the sequence, beginning where the psalm's verse 17 begins, \"Pro patribus tuis nati sunt tibi filii,\" before returning to verse 18. Verse 18 ends \"in æternum, et in sæculum sæculi,\" but the chant stops short of that closing phrase.",
        source: "Ps. 45:17-18 (Vulgate numbering Ps. 44:17-18) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Dilexit Andream Dominus",
      latin: "Allelúia. ℣. Diléxit Andréam Dóminus in odórem suavitátis.",
      translation: "Alleluia. ℣. The Lord loved Andrew for an odor of sweetness.",
      mode: "Alleluia · St. Andrew, Apostle · Mode I",
      reference: "",
      gabc: "(c4) AL(c)le(d!fdf)lú(ef!gvFEfg~){ia}.(g) *(;) ij.(hvGFgvFEf_ghvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'EDde!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::) ℣. Di(h)lé(h_g)xit(g_[oh:h]e//fgf/gddc.) (,) An(cd)dré(ef'g)am(gv.e!g_4[uh:l]h) Dó(fvED)mi(d.c!dw!evDCde)nus(d.) (:) in(dede) o(ce)dó(ixg_[uh:l]h/ig/h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(ixce!g_4[uh:l]h/ig/h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(gv.ef/g_[oh:h]e/f_dev.)(,)(gv.ef/g_[oh:h]e/f_dev.c!dwe'!fv)rem(e[ll:1]d..) *(:) su(c)a(d!fdf)vi(ef!gvFE)tá(fg)tis.(g.) (;) (hvGFgvFEf_ghvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'EDde!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::)",
      source: "Graduale Romanum (GregoBase #984)",
      blurb: {
        text: "St. Andrew's Alleluia speaks in one short sentence: the Lord loved Andrew with a sweet fragrance. The brief acclamation gives the apostle's feast a language of divine delight rather than biography.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "In omnem terram",
      latin: "In omnem terram exívit sonus eórum : et in fines orbis terrae verba eórum.",
      translation: "Their sound has gone forth into all the earth: and their words unto the ends of the world.",
      mode: "Offertory · St. Andrew, Apostle · Mode II",
      reference: "Ps. 19:5",
      gabc: "(c4) IN(e!g'h) o(hiH'G)mnem(g.ggg//hihi) ter(ghE'D)(,)(de/ghg___//hi/k_[hl:1]i/j_kh)ram(h.) *(;) ex(jj)í(j_i)vit(jjj_h) so(hjjh)nus(h.) e(gh)ó(hjj'1jjh//kjjh/ig)rum :(g.) (:) et(jj) in(j) fi(kjjh)nes(h) or(g!jjj)bis(j) ter(hig)rae(e!geg.) (;) ver(deg)ba(e/ghg___//ikj'kvJ'IH) e(h)ó(h)rum.(h!iwjjvIHiih.0) (::)",
      source: "Graduale Romanum (GregoBase #570)",
      blurb: {
        text: "In omnem terram draws on a single verse of Psalm 19, one verse lifted from a poem about the heavens declaring God's glory. The verses immediately surrounding it describe day and night exchanging knowledge, and the sun running its course across the sky. Taken on its own, the verse was applied in the liturgical commons for Apostles, its cosmic imagery turned to speak of those sent to preach to all the earth. The melody was later borrowed as the cantus firmus for an isorhythmic motet, Sub Arturo plebs, written by the English composer Johannes Alanus and conjecturally dated to around 1358 or the early 1370s.",
        source: "Ps. 19:5 (Vulgate numbering Ps. 18:5) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Isorhythm\" (rev. 1322163626); Wikipedia, \"Sub Arturo plebs\" (rev. 1326414432)",
      },
    },
    communion: {
      title: "Venite post me",
      latin: "Veníte post me : fáciam vos piscatóres hóminum : at illi, relíctis rétibus et navi, secúti sunt Dóminum.",
      translation: "Come after me: I will make you fishers of men: and they, leaving their nets and ship, followed the Lord.",
      mode: "Communion · St. Andrew, Apostle · Mode VIII",
      reference: "Matt. 4:19-20",
      gabc: "(c4) VE(g)ní(g)te(d) post(gV!eg~) me :(g.) *(,) fá(g!jij)ci(hg)am(g) vos(ggd.) (,) pi(d)sca(e)tó(gg)res(gih/i_[oh:h]h) hó(g)mi(gh!ivHG'h)num :(hg..) (:) at(j) il(jV!hj~)li,(j) re(j)lí(j)ctis(jh~) ré(ij)ti(hiHG'h)bus(hg..) (,) et(ge~) na(g//h'i/hig)vi,(g.) (;) se(g)cú(g)ti(h) sunt(gee[ll:1]d/geg) Dó(g)mi(ghg___)num.(g.) (::)",
      source: "Graduale Romanum (GregoBase #552)",
      blurb: {
        text: "Venite post me draws its words from Matthew 4:19-20, but it quietly adjusts them. The Vulgate's verse 20 reads \"relictis retibus secuti sunt eum,\" meaning they left their nets and followed him; the antiphon adds \"et navi\" (and ship) and replaces \"eum\" with \"Dominum,\" so that the disciples leave nets and ship and follow the Lord. The day's Gospel (Matt 4:18-22) goes on to the calling of James and John, who leave their nets and their father; the Communion antiphon stays with Andrew and Peter alone, folding the image of the abandoned ship into their response.",
        source: "Matt. 4:19-20 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Sancti-11-30 (Missale Romanum formulary)",
      },
    },
  },
  "stephen": {
    gradual: {
      title: "Sederunt principes",
      latin: "Sedérunt príncipes, et advérsum me loquebántur : et iníqui persecúti sunt me. ℣. Adjuva me, Dómine Deus meus : salvum me fac propter misericórdiam tuam.",
      translation: "Princes sat, and spoke against me: and the wicked persecuted me. ℣. Help me, O Lord my God: save me for your mercy's sake.",
      mode: "Gradual · St. Stephen, the First Martyr · Mode V",
      reference: "Ps. 119:23, 86",
      gabc: "(c3) SE(b)dé(dd/f_ef)runt(ded.) *(,) prín(de'f)ci(f)pes,(fefED'dfvEDe[ll:1]d..) (;) et(d) ad(d)vér(e)sum(f) me(h_[oh:h]i_[oh:h]h_[oh:h]/ihh/fgf.) (,) lo(f)que(hh)bán(hh//hh)tur :(f.) (:) et(f) in(h)í(i!jwk)qui(i.) per(h)se(h)cú(h)ti(gh) sunt(fe~) me.(dfe___//highf.dfe/fee[ll:1]d.0) (::) ℣. Ad(d)ju(d)va(f) me,(gxg) Dó(h)mi(h)ne(ihh'hfhv.ijh.1) (,) (hv.ijIH.ijHF.ghFD.1) (,) (fdfED//fd/ef!hh/ig/hf/hi!kkkh..) (;) De(f!h'i)us(ih/jkihhf.) (`) me(hf/hhh)us :(h.f!gwh!iv.hi/jhh/iih.0) (:) sal(d)vum(d) me(d) fac(d.) (,) pro(d)pter(d) mi(d)se(d)ri(d)cór(dfE'D)di(ef)am(f.) () * tu(fhG'Fhhh)am.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #906)",
      blurb: {
        text: "Sederunt principes draws from two verses of Psalm 119 that stand sixty-three verses apart. From verse 23, the compiler kept only the opening image of princes speaking against the psalmist, dropping the second half of the verse: \"but thy servant was employed in thy justifications.\" From verse 86, it dropped \"All thy statutes are truth\" and kept only the cry of unjust persecution and the plea for help. The composer Pérotin, who flourished around c. 1200, made a celebrated four-voice polyphonic setting of this gradual, singled out by the medieval writer known as Anonymous IV as among the finest works of its kind.",
        source: "Ps. 119:23, 86 (Vulgate numbering Ps. 118:23, 86) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Pérotin\" (rev. 1367640205)",
      },
    },
    alleluia: {
      title: "Video caelos apertos",
      latin: "Allelúia. ℣. Vídeo caelos apértos, et Jesum stantem a dextris virtútis Dei.",
      translation: "Alleluia. ℣. I see the heavens opened, and Jesus standing at the right hand of the power of God.",
      mode: "Alleluia · St. Stephen, the First Martyr · Mode II",
      reference: "Acts 7:55-56",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. Ví(f_e/f!gwh'!iv)de(jiihi)o(iv.hh/fgf.) (,) cae(fg)los(f) a(f)pér(f!hh/ijHF'ivH'GEf./hfhhf/ge)tos,(e.) (:) et(f) Je(ef)sum(f) stan(ffe/ffe/fc..)(,)(ef!hvvF'Ehhh)tem(ivH'Ghf..) (:) a(f) dex(f!h'i/jiihi)tris(iv.hh/fgf.) (,) vir(f)tú(f!hh/ijHF'ivH'GEf./hfhhf/ge)tis(e.) *(:) De(hh/i_[oh:h]h/jij)i.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #561)",
      blurb: {
        text: "Video caelos apertos draws on Acts 7:55, where Stephen, full of the Holy Spirit, sees the glory of God and Jesus standing on the right hand of God and cries out his vision to the council. The chant compresses his words: where the Vulgate has him say \"Ecce video cælos apertos, et Filium hominis stantem a dextris Dei,\" the chant reads \"Video caelos apertos, et Jesum stantem a dextris virtutis Dei,\" substituting the name Jesus for \"the Son of man\" and adding \"virtutis\" (power) before Dei. The verses marked as the chant's source end at verse 56, the moment the crowd rushes upon him, so the alleluia holds Stephen at the instant of his vision, just before the stoning begins.",
        source: "Acts 7:55-56 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Elegerunt Apostoli Stephanum",
      latin: "Elegérunt Apóstoli Stéphanum levítam, plenum fide et Spíritu Sancto : quem lapidavérunt Judaéi orántem, et dicéntem : Dómine Jesu, áccipe spíritum meum, allelúia.",
      translation: "The Apostles chose Stephen as deacon, a man full of faith and the Holy Spirit: whom the Jews stoned as he prayed and said: Lord Jesus, receive my spirit, alleluia.",
      mode: "Offertory · St. Stephen, the First Martyr · Mode VIII",
      reference: "Acts 6:5; 7:58",
      gabc: "(c4) E(c)le(df)gé(fv.ef!ghE'Cd./egg//gg)runt(hg..) (,) * A(g)pó(g_[oh:h]i_[oh:h]h_[oh:h]!iwjjg)sto(fg)li(gffvED.) (;) Sté(f)pha(fhg)num(hffe) le(d!ewf!gvEDe_[oh:h][ll:1]d)ví(cddc)tam,(c.) (:) ple(gh/ig/h_fgv.h!jj//jj)num(khhg~) fi(gg/hf/gge)de(e.) (;) et(e) Spí(h_g)ri(h_g)tu(high) San(f.)cto :(f.) (:) quem(fhG'Fgfdgff'ffc..) (;) la(cd)pi(df)da(fg)vé(gh/ig/h_fgv.h!jj//jj)runt(khhf~) Ju(hi)daé(g/hhg)i(g.) (;) o(d)rán(dg~)tem,(gffe) et(f) di(f!gwhg)cén(fg~)tem :(g.) (:) Dó(gji___)mi(jkj)ne(khhfh) Je(hv.fh/jhi/ghg)su,(g.) (;) ác(g!igh)ci(f.e!fwg)pe(gfgvFD'dc.) (;) spí(cd)ri(efg//hiH'G//hj/!jvjv'1IH'G)tum(hih) me(ghhg)um,(g.) (:) al(fh)le(high//egff'fddc.)(,)(defghg___)lú(fg~){ia}.(g.) (::)",
      source: "Graduale Romanum (GregoBase #462)",
      blurb: {
        text: "Elegerunt Apostoli Stephanum holds two moments together in a single flowing sentence: Stephen's election as deacon and his dying prayer under the stones. The text moves from the community's act of choosing him straight to his last words, so that his ministry and his martyrdom arrive together at the moment of the offering of gifts.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Video caelos apertos",
      latin: "Vídeo caelos apértos, et Jesum stantem a dextris virtútis Dei : Dómine Jesu, áccipe spíritum meum, et ne státuas illis hoc peccátum, quia nésciunt quid fáciunt.",
      translation: "I see the heavens opened, and Jesus standing at the right hand of the power of God: Lord Jesus, receive my spirit, and lay not this sin to their charge, for they know not what they do.",
      mode: "Communion · St. Stephen, the First Martyr · Mode VIII",
      reference: "Acts 7:55-56, 58-59",
      gabc: "(c4) VI(fg'h)de(g)o(g) *() cae(h)los(ghg) a(f)pér(ixhi~)tos,(g.) (;) et(gjI~H~) Je(jk)sum(k) stan(kj~)tem(k_[hl:1]j_[hl:1]) (,) a(j) dex(k)tris(jji) vir(h)tú(ij'k)tis(j) De(jjh/ig)i :(g.) (:) Dó(gk)mi(klk)ne(jkJ'I) Je(h)su,(jj) (,) ác(k)ci(j)pe(ji) spí(j)ri(jh)tum(i) me(ihhgh)um,(hg..) (:) et(g) ne(ge) stá(gh)tu(g)as(f) il(g)lis(e.) hoc(eg) pec(f)cá(efED'e)tum,(e[ll:1]d..) (;) qui(fe)a(f) né(gh)sci(fe)unt(d') quid(ef'g~) fá(g)ci(ghg___)unt.(g.) (::)",
      source: "Graduale Romanum (GregoBase #920)",
      blurb: {
        text: "Video caelos apertos draws from Acts 7:55, 58, and 59, omitting verse 56, where the crowd stops their ears and rushes at Stephen, and verse 57, where the stoning begins. The text therefore moves directly from Stephen's vision to his dying prayer, without the intervening violence. The chant also quietly replaces the Vulgate's \"Filium hominis\" with \"Jesum\", so where Acts 7:55 reads \"et Filium hominis stantem a dextris Dei\", the chant names him plainly.",
        source: "Acts 7:55-56, 58-59 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "john-evangelist": {
    gradual: {
      title: "Exiit sermo",
      latin: "Exiit sermo inter fratres, quod discípulus ille non móritur. ℣. Sed : Sic eum volo manére, donec véniam : tu me séquere.",
      translation: "A saying went abroad among the brethren, that this disciple should not die. ℣. But: So I will have him remain until I come: follow me.",
      mode: "Gradual · St. John, Apostle and Evangelist · Mode V",
      reference: "John 21:23, 19",
      gabc: "(c4) EX(ffg)i(f)it(f.) *(,) ser(fg~)mo(f) in(f)ter(gh~) fra(h_fgvFED.g_[oh:h]e/fg)tres,(f.) (;) quod(f) di(f)scí(hf/gh/jj/kjk)pu(jij)lus(h_g) il(ixh/jjvHF.1ivHGhf)le(f.) (;) non(ixf!hhi/gjjj.h!iw!jvIG'hw!ivHG') mó(f)ri(ff//ff)tur.(f_c) (,) (fg!hvGF.e!g'h//fhg/hggf.0) (z0::c3) ℣. Sed :(d) Sic(fe) e(eh)um(h) vo(h)lo(h) ma(h)né(h)re,(ihhe./h_[oh:h]i_[oh:h]h_[oh:h]/ihhe.) (,) (hi!kv//lvKI'jvHF.1) (,) (h_g/ijh'___jvIH'jvIH'//hvGF.) (:) do(f!h'i)nec(ih/jkihhf) vé(f)ni(hfhhe/fd)am :(d.) (:) * tu(de'f) me(f) sé(fhGF')que(i)re.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff/dfe/!fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #702)",
      blurb: {
        text: "Exiit sermo draws from two verses of John 21 in reverse order, taking verse 23 as its body and verse 19 as its versicle. The body quotes only the first half of verse 23, the rumor that spread among the disciples, and omits the corrective sentence that follows in scripture: \"Et non dixit ei Jesus: Non moritur, sed: Sic eum volo manere donec veniam.\" That correction is not lost to the worshipper, however, because it appears in full in the day's Gospel, John 21:19-24, sung immediately after the Gradual.",
        source: "John 21:23, 19 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Sancti-12-27 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Hic est discipulus",
      latin: "Allelúia. ℣. Hic est discípulus ille, qui testimónium pérhibet de his : et scimus quia verum est testimónium ejus.",
      translation: "Alleluia. ℣. This is the disciple who bears witness of these things: and we know that his testimony is true.",
      mode: "Alleluia · St. John, Apostle and Evangelist · Mode II",
      reference: "John 21:24",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. Hic(f_e/f!gwh'!iv//jiihi) est(iv.hh/fgf.) (,) di(f)scí(fg)pu(f)lus(f) il(f!hh/ijHF'ivH'GEf./hfhhf/ge)le,(e.) (:) qui(f) te(e)sti(f)mó(f)ni(f)um(f) pér(f)hi(ffe/ffe/fc..)(,)(ef!hvvF'E//hhi)bet(h) de(ivH'Ghf) his :(f.) (:) et(f) sci(f!h'i/jiihi)mus(iv.hh/fgf.) (,) qui(fg)a(f) ve(f!hh/ijHF'ivH'GEf./hfhhf/ge)rum(f) est(e.) (;) te(hh)sti(h)mó(h)ni(h)um(hi) *() e(i_[oh:h]h/jij)jus.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #914)",
      blurb: {
        text: "John 21:24 falls near the very close of the Gospel, with only one verse remaining after it. The chant quotes it closely but omits the phrase \"et scripsit hæc\", so where the scripture reads \"who giveth testimony of these things and hath written these things\", the verse as sung reads only \"who bears witness of these things\". The authorship claim, which the full verse carries as its center of gravity, falls silent. What remains is the testimony itself, and the quiet affirmation that it is true.",
        source: "John 21:24 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Justus ut palma florebit",
      latin: "Justus ut palma florébit : sicut cedrus, quae in Líbano est, multiplicábitur.",
      translation: "The just shall flourish like the palm tree: he shall grow up like the cedar of Lebanon.",
      mode: "Offertory · St. John, Apostle and Evangelist · Mode IV",
      reference: "Ps. 92:13",
      gabc: "(c4) JU(e.f!gwhgfffdgvFE)stus(fff) *(,) ut(dge) pal(gh)ma(g!jjjvH'GF.//ixfff!gwhg/hih.) (,) flo(ghf)ré(dgF'E)bit :(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) sic(dg)ut(gh) ce(h!iwj!kvJH//gih)drus,(hjHG'hffe.) (,) quae(ghf) in(fe~) Lí(ghF'E//fh)ba(h_g!jjjvH'G)no(g_[oh:h]f//hvGFgvFE) est,(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (;) mul(ff)ti(dgf)pli(f)cá(ixff/hihhghvGFg_[oh:h]e//hggf/ghg')bi(e)tur.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #777)",
      blurb: {
        text: "Justus ut palma florebit draws on a single verse from Psalm 92, leaving the verse that immediately follows it unsung. That next verse reads, \"Plantati in domo Domini, in atriis domus Dei nostri florebunt\": those planted in the house of the Lord shall flourish in his courts. The chant stops just before the psalm names the place that makes the flourishing possible.",
        source: "Ps. 92:13 (Vulgate numbering Ps. 91:13) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Exiit sermo",
      latin: "Exiit sermo inter fratres, quod discípulus ille non móritur : et non dixit Jesus : Non móritur : sed : Sic eum volo manére, donec véniam.",
      translation: "A saying went abroad among the brethren, that this disciple should not die: and Jesus did not say: He should not die: but: So I will have him remain until I come.",
      mode: "Communion · St. John, Apostle and Evangelist · Mode II",
      reference: "John 21:23",
      gabc: "(c3) EX(h)i(hhh)it(f.) * ser(fg~)mo(e) in(fh)ter(gh~) fra(f_[oh:h]g_[oh:h]f_[oh:h])tres,(f.) (;) quod(e) di(f)scí(h)pu(hi)lus(i) il(ij)le(i_[oh:h]h) (,) non(hgh) mó(f)ri(fgf)tur :(efe.) (:) et(ef) non(fi) di(iji)xit(hiH'G) Je(f)sus :(hv.ijIH.) (,) Non(hgh) mó(f)ri(fgf)tur :(efe.) (:) sed :(e) Sic(f) e(fi)um(i) vo(ij)lo(h) ma(h)né(f!gw!hvG'FE'f)re,(fe..) (;) do(f_ef)nec(edf) vé(f)ni(f!gwh_f)am.(f.) (::)",
      source: "Graduale Romanum (GregoBase #781)",
      blurb: {
        text: "Exiit sermo takes its text from John 21:23, the verse where a saying circulating among the early disciples is carefully corrected. The community had understood Jesus to mean that John would not die, but the verse insists Jesus said no such thing: \"So I will have him to remain till I come\" was not a promise of immortality. This same passage, John 21:19-24, is the Gospel read at this Mass, so the communion draws the congregation back to a word they have just heard, with its quiet insistence on what Jesus did and did not say.",
        source: "John 21:23 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Sancti-12-27 (Missale Romanum formulary)",
      },
    },
  },
  "holy-innocents": {
    gradual: {
      title: "Anima nostra",
      latin: "Anima nostra, sicut passer, erépta est de láqueo venántium : láqueus contrítus est, et nos liberáti sumus.",
      translation: "Our soul has escaped like a bird from the snare of the fowlers: the snare is broken, and we are delivered.",
      mode: "Gradual · The Holy Innocents, Martyrs · Mode II",
      reference: "Ps. 124:7-8",
      gabc: "(f3) A(ce)ni(ef)ma(f) *() no(f/hhh_f/hjIH'ihh'hhvF'Ef!gwhf)stra,(f.) (;) sic(f!hfh)ut(ef) pas(f!gwh/ih)ser,(f!hfh.) (,) e(ef)ré(hi)pta(ij) est(kxhj/kjji.) (;) de(kxh.i!jwk_[hl:1]j) lá(jji)que(ih)o(h!iwjihh/fgf.) (,) ve(hhi)nán(kxjkij)ti(h_f)um :(fhF'Ef.) (:) lá(fh)que(hhh//hv.hhh)us(fh) con(hih)trí(hi)tus(kxi./jki) est,(h.) (:) et(iv.hhhi) nos(ijhh/fgf.) (,) li(h_g)be(gihh)rá(iv.hjIH'hf/hih)ti(hv.hhh//hv.hhh) (,) su(f)mus.(f!hhh_f/hhh/f_[oh:h]g_[oh:h]f._[oh:h]) (::)",
      source: "Graduale Romanum (GregoBase #1031)",
      blurb: {
        text: "Both verses 7 and 8 of Psalm 124 belong to this gradual, giving it two distinct movements. The respond carries the image of the sparrow freed from the snare, while the following verse, \"Adjutorium nostrum in nomine Domini, qui fecit cælum et terram,\" names the ground of that deliverance: help is in the Lord who made heaven and earth. The psalm's preceding verses, which speak of enemies' teeth and an overpowering torrent, are left aside; the chant enters only at the moment of escape and resolution.",
        source: "Ps. 124:7-8 (Vulgate numbering Ps. 123:7-8) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Anima nostra",
      latin: "Allelúia. ℣. Anima nostra sicut passer erépta est de láqueo venántium : láqueus contrítus est, et nos liberáti sumus.",
      translation: "Alleluia. ℣. Our soul has escaped like a bird from the snare of the fowlers: the snare is broken, and we are delivered.",
      mode: "Alleluia · The Holy Innocents, Martyrs · Mode VII",
      reference: "Ps. 124:7-8",
      gabc: "(c2) AL(c)le(cfe)lú(fg~){ia}.(g.) *(,) ij.(ffg/e!g'h//fhg___!hwi_[oh:h]g.e.[ll:1]d!ewf/gffc) (,) (fffd//fe/gffvD'Cd_eddc.) (::) ℣. A(cfe)ni(fg)ma(g) no(ghF'Ef_g)stra(g.) (;) sic(g)ut(g) pas(g)ser(i.g!hw!ivHG') e(g)ré(ghF'E)pta(f_g) est(ghfgvFEfe..) (;) de(f) lá(e.f!gwh)que(hg)o(ghFDgv) ve(g)nán(gffvE'DC)ti(fg)um :(g.) (:) lá(cfe)que(fg)us(g) con(gh)trí(g!hwi/jiig!hwi_[oh:h]hivHG)tus(h_g) est,(g.) (:) et(g) nos(i.g!hwi_[oh:h]hivHGh_g) li(g)be(gf)rá(g)ti(dfe) () * su(fg)mus.(g.) (,) (ffg/e!g'h//fhg___!hwi_[oh:h]g.e.[ll:1]d!ewf/gffc) (,) (fffd//fe/gffvD'Cd_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #1302)",
      blurb: {
        text: "Anima nostra draws its verse from Psalm 124:7, which the psalm pairs with a second verse: \"Our help is in the name of the Lord, who made heaven and earth.\" The chant stops before that line, letting the image of the broken snare stand on its own, without the explanatory turn that follows it in the psalm.",
        source: "Ps. 124:7-8 (Vulgate numbering Ps. 123:7-8) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Anima nostra",
      latin: "Anima nostra, sicut passer, erépta est de láqueo venántium : láqueus contrítus est, et nos liberáti sumus.",
      translation: "Our soul has escaped like a bird from the snare of the fowlers: the snare is broken, and we are delivered.",
      mode: "Offertory · The Holy Innocents, Martyrs · Mode II",
      reference: "Ps. 124:7-8",
      gabc: "(f3) A(ce)ni(ef)ma(f) *() no(f/hhh_f/hjIH'ihh'hhvF'Ef!gwhf)stra,(f.) (;) sic(f!hfh)ut(ef) pas(f!gwh/ih)ser,(f!hfh.) (,) e(ef)ré(hi)pta(ij) est(kxhj/kjji.) (;) de(kxh.i!jwk_[hl:1]j) lá(jji)que(ih)o(h!iwjihh/fgf.) (,) ve(hhi)nán(kxjkij)ti(h_f)um :(fhF'Ef.) (:) lá(fh)que(hhh//hv.hhh)us(fh) con(hih)trí(hi)tus(kxi./jki) est,(h.) (:) et(iv.hhhi) nos(ijhh/fgf.) (,) li(h_g)be(gihh)rá(iv.hjIH'hf/hih)ti(hv.hhh//hv.hhh) (,) su(f)mus.(f!hhh_f/hhh/f_[oh:h]g_[oh:h]f._[oh:h]) (::)",
      source: "Graduale Romanum (GregoBase #1031)",
      blurb: {
        text: "Anima nostra takes both verses 7 and 8 of Psalm 124:7-8. The image of a sparrow freed from the fowler's snare gives way to the confession that the snare is broken and deliverance has come. The psalm's earlier images of enemies' teeth and an overwhelming torrent are left outside the chant, which begins at the moment of escape.",
        source: "Ps. 124:7-8 (Vulgate numbering Ps. 123:7-8) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Vox in Rama",
      latin: "Vox in Rama audíta est, plorátus et ululátus : Rachel plorans fílios suos, nóluit consolári, quia non sunt.",
      translation: "A voice was heard in Rama, lamentation and great mourning: Rachel weeping for her children, would not be comforted, because they are not.",
      mode: "Communion · The Holy Innocents, Martyrs · Mode VII",
      reference: "Matt. 2:18",
      gabc: "(c3) VOX(ii) in(h) Ra(hi)ma(i) *() au(ih~)dí(ij)ta(j) est,(i.) (;) plo(i)rá(iih)tus(g) et(h) u(i)lu(gh)lá(gh)tus :(g.) (:) Ra(i)chel(i.h!iwj_i) plo(g!igh)rans(h_g) fí(i)li(h)os(gh) su(f_[oh:h]g_[oh:h]e_[oh:h])os,(e.) (:) nó(ggh)lu(f!gwh)it(he) con(hhhf~)so(h)lá(hi)ri,(g.) (;) qui(iihivHGh.f!gwh'!iv)a(g) non(efe~___) sunt.(e.) (::)",
      source: "Graduale Romanum (GregoBase #136)",
      blurb: {
        text: "The Gospel proclaimed at this Mass runs from Matthew 2:13 through 2:18, closing with the exact words sung here at Communion. The antiphon is not drawn from the middle of a passage but is the Gospel's final verse, so the feast's Mass begins and ends, in a sense, with the same cry of lamentation. Matthew himself introduces the verse as the fulfillment of a prophecy, naming Jeremias as its source.",
        source: "Matt. 2:18 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Sancti-12-28 (Missale Romanum formulary)",
      },
    },
  },

  /* ===================================================================
   * Summer solemnities — the three post-Pentecost temporal keys already
   * carrying an introit in data/introits.js (trinity, cibavit,
   * sacred-heart). Latin = GregoBase Solesmes (Graduale Romanum), gabc
   * pulled by id; assignments per the modern Graduale Romanum, confirmed
   * on gregorien.info's Vatican-II calendar. This closes out proper-set
   * coverage for the whole temporal cycle. See
   * sources/gregobase/build-summer-solemnities.py.
   * =================================================================== */
  "trinity": {
    gradual: {
      title: "Benedictus es Domine qui intueris abyssos",
      latin: "Benedíctus es, Dómine, qui intuéris abýssos, et sedes super Chérubim. ℣. Benedíctus es, Dómine, in firmaménto caeli, et laudábilis in saécula.",
      translation: "Blessed are you, O Lord, who look upon the depths, and sit upon the Cherubim. ℣. Blessed are you, O Lord, in the firmament of heaven, and worthy of praise for ever.",
      mode: "Gradual · The Most Holy Trinity · Mode V",
      reference: "Dan. 3:55-56",
      gabc: "(c4) BE(d)ne(ff)dí(f!hgh)ctus(h) es,(ggf.0) *(,) Dó(h)mi(ixi)ne,(h_g//hiHF.ghFD.ev.dec./[-0.5]fg/hggf.0) (;) qui(j) in(jkJ'H)tu(jk)é(j)ris(ixjhiHGivHGkv.jkJ//F.0gh/jiih.0) (,) a(ixj_h/i!jwk)býs(jk_[hl:1]J'_[hl:1]IH'i)sos,(ih..) (:) et(g) se(ixhi'j)des(i_[oh:h]h) su(ixjhi)per(g_[oh:h]f) Ché(f)ru(hg)bim.(jkijh.fhg/hggf.0) (z0::c3) ℣. Be(d)ne(f)dí(hvvGFhvGEff//gxde!fgF'EfvEDe.)(,)(fh/ih/ih/ijh)ctus(gh) es(h.) (,) Dó(ih/kkh/ih/kkvIH)mi(h_ghvGF'g)ne,(gf..) (;) in(h.i!jwk) fir(ih~)ma(hf)mén(f!hhe)to(f.) (,) cae(gxfgFE.fgFD.fvEDe[ll:1]d)li,(d.) (:) et(d) lau(ef)dá(f)bi(f)lis(h_fg) () * in(e) saé(e.f!gwh)cu(h)la.(he) (,) (gxhfgED'//ef/hff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #965)",
      blurb: {
        text: "Benedictus es Domine qui intueris abyssos begins with God looking upon the depths and seated above the Cherubim. Its verse widens the praise from the depths to heaven's firmament.",
        source: "Dan. 3:55-56 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    alleluia: {
      title: "Benedictus es Domine Deus patrum nostrorum",
      latin: "Allelúia. ℣. Benedíctus es, Dómine, Deus patrum nostrórum, et laudábilis in saécula.",
      translation: "Alleluia. ℣. Blessed are you, O Lord, the God of our fathers, and worthy of praise for ever.",
      mode: "Alleluia · The Most Holy Trinity · Mode VIII",
      reference: "Dan. 3:52",
      gabc: "(c3) AL(e)le(ef)lú(fg){ia}.(e.) *(,) ij.(fe/fhGE.ee/fe/fe/fhGE.) (;) (giHG'FEfe//fhG'FEffe.) (::) ℣. Be(eee)ne(eh)dí(h)ctus(hg) es,(fe/fgffe.) (;) Dó(e)mi(ei)ne(i) De(ivHG'h)us(hg..) (,) pa(e)trum(gf~) no(hg)stró(fe)rum,(e./fhg/hihhg.) (:) et(eh) lau(hg~)dá(f)bi(fe)lis(e./fgffe.) *(;) in(eee) saé(e)cu(fg)la.(g_[oh:h]e) (,) (fe/fhGE.ee/fe/fe/fhGE.) (;) (giHG'FEfe//fhG'FEffe.) (::)",
      source: "Graduale Romanum (GregoBase #1289)",
      blurb: {
        text: "Daniel 3:52 is longer than what appears in this chant. The full verse continues: \"et laudabilis, et gloriosus, et superexaltatus in sæcula. Et benedictum nomen gloriæ tuæ sanctum: et laudabile, et superexaltatum in omnibus sæculis.\" The chant keeps only its opening words. Those words were first spoken inside a furnace: Daniel 3:51 shows the three young men, just rescued from the flames by an angel, breaking into praise together before a pagan king.",
        source: "Dan. 3:52 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Benedictus sit Deus Pater",
      latin: "Benedíctus sit Deus Pater, unigenitúsque Dei Fílius, Sanctus quoque Spíritus : quia fecit nobíscum misericórdiam suam.",
      translation: "Blessed be God the Father, and the only-begotten Son of God, and the Holy Spirit also: for he has shown us his mercy.",
      mode: "Offertory · The Most Holy Trinity · Mode III",
      reference: "Tob. 12:6",
      gabc: "(c4) BE(dg)ne(g./hji)dí(jkj)ctus(jvIH) sit(h.) (,) * De(hj!kvJH)us(hjhhg.) Pa(ikjjvIH)ter,(h_g//ih/igh.) (;) u(ef)ni(g)ge(h_g/jki'jvH'G)ni(g_[oh:h]fh)tús(ghfg)que(f.) (;) De(ffff_d/gih)i(g) Fí(g./hjh)li(f_d/fhg)us,(efg..) (:) San(gh/jij)ctus(gjj'1jj_gjv) quo(ixjjjvH'GF'gwh!ivHG'h)que(h_g) (,) Spí(hji)ri(jkjijh)tus :(ih..) (:) qui(dg)a(gj) fe(jjjvH'G)cit(g_[oh:h]f) no(hji)bís(jkjijH'G)cum(gf..) (;) mi(ef'g)se(fh/jgh)ri(ef)cór(g)di(g.h!iw!jvIH)am(h.) (,) su(hjH'G)am.(gvFEf_e//g_[oh:h]f/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1303)",
      blurb: {
        text: "Tobit 12:6 calls the faithful to bless God before all who live. Benedictus sit Deus Pater receives that blessing as praise of the Father, Son, and Holy Spirit for mercy.",
        source: "Tob. 12:6 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Benedicimus Deum caeli",
      latin: "Benedícimus Deum caeli, et coram ómnibus vivéntibus confitébimur ei : quia fecit nobíscum misericórdiam suam.",
      translation: "We bless the God of heaven, and before all the living we will give glory to him: for he has shown us his mercy.",
      mode: "Communion · The Most Holy Trinity · Mode IV",
      reference: "Tob. 12:6",
      gabc: "(c4) BE(h)ne(gf)dí(gh)ci(g)mus(e.) (,) * De(gef)um(e[ll:1]d/fg!hvGFghg) cae(egff)li,(fe..) (:) et(h) co(g)ram(h) ó(g_[oh:h]f)mni(gh)bus(h) vi(h)vén(gh)ti(gh)bus(g_[oh:h]e) (,) con(e)fi(gef)té(dgf)bi(df)mur(fgF'D) e(f!gwhgh)i :(hg..) (:) qui(gef)a(e_[oh:h][ll:1]d) fe(fgef)cit(e_[oh:h][ll:1]d) no(ixh)bís(jhhgi)cum(h_g/h_[oh:h]i_[oh:h]h._[oh:h]) (;) mi(h)se(ghfg)ri(f_e)cór(ef'g)di(g)am(hggf/ghg) su(egff)am.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #391)",
      blurb: {
        text: "Benedicimus Deum caeli carries Tobit 12:6 from blessing God before all the living to giving glory for mercy. The Trinity Communion makes public praise a response to the mercy already received.",
        source: "Tob. 12:6 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "cibavit": {
    gradual: {
      title: "Oculi omnium in te sperant",
      latin: "Óculi ómnium in te sperant, Dómine : et tu das illis escam in témpore opportúno. ℣. Áperis tu manum tuam : et imples omne ánimal benedictióne.",
      translation: "The eyes of all hope in you, O Lord: and you give them food in due season. ℣. You open your hand: and fill every living creature with blessing.",
      mode: "Gradual · The Most Holy Body and Blood of Christ (Corpus Christi) · Mode VII",
      reference: "Ps. 145:15-16",
      gabc: "(c2) O(c.d!ewff)cu(gffvED)li(d_c) *(,) ó(cd/ede)mni(cd!evDC'd)um(dc..) (;) in(cf) te(fg) spe(g'hvGF')rant,(gffe~) (,) Dó(fg)mi(g)ne :(gigivvHGhg/j_i//hjii/ghg.) (:) et(f) tu(h/iji) das(i_[oh:h]h) il(iiiv_[oh:h]H~G~)lis(ghgg/efe.) (;) e(ef!gh!ivGF'Ef_g)scam(ghff'fvE'DCdc..) (;) in(cd) tém(fe/f_g)po(gefvEDef)re(e./fgf'/gd//evDCdc..) (;) op(cd)por(fe~)tú(fgf)no.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::) ℣. A(g)pe(hgge/f'/gffe/g'/hgge//f'/gff)(,)(d!fffvDC'd!ff//eg!hvFEghG'Fgh)ris(gh) tu(g.) (;) ma(gigivvHGhg/j_i)num(i_[oh:h]h) (,) tu(hjI'HG)am :(gv.d_f!g!hw!ivHF'iv//hig/hhg.) (:) et(ghG'E) im(f!gwh)ples(g'/hg'/hff'f/gddc//dc/ded.) (,) o(cd)mne(c) á(c)ni(c.d!ew!fvED'e)mal(dc..) *(;) be(cd)ne(fe)di(fgf)cti(ge)ó(fg)ne.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::)",
      source: "Graduale Romanum (GregoBase #1230)",
      blurb: {
        text: "Oculi omnium looks to the Lord, whose open hand fills every living thing. On Corpus Christi, the Gradual receives this Psalm of trust as a prayer before the feast.",
        source: "Ps. 145:15-16 (Vulgate numbering Ps. 144:15-16) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    alleluia: {
      title: "Caro mea vere est cibus",
      latin: "Allelúia. ℣. Caro mea vere est cibus, et sanguis meus vere est potus : qui mandúcat meam carnem, et bibit meum sánguinem, in me manet, et ego in eo.",
      translation: "Alleluia. ℣. My flesh is food indeed, and my blood is drink indeed: he who eats my flesh, and drinks my blood, abides in me, and I in him.",
      mode: "Alleluia · The Most Holy Body and Blood of Christ (Corpus Christi) · Mode VII",
      reference: "John 6:56-57",
      gabc: "(c3) AL(d)le(efdeffe)lú(df!hvGFhh){ia}.(e.) *(;) ij.(hvijj/h/ii//efE'Dffe.) (,) (h'/ig'hvF'ED'CB.e.f!gwhhvG'FEffe.) (::) ℣. Ca(eh)ro(h_gfge) me(fe)a(e.) (,) ve(d)re(efef) est(f) ci(hvGF'ge)bus,(e.) (;) et(ei) san(iv.jkj/!jvIHjh/ij)guis(i) me(ij)us(i.) (,) ve(ij)re(i) est(i) po(j!kwljkvJIjvIHi)tus :(i.) (:) qui(ij) man(i)dú(ij/kljkvJIjvIHi)cat(i.) (;) me(eijvIH'hvGF'E)am(fe) car(de)nem,(e/ffe.) (;) et(e) bi(ehg)bit(hi) me(i./jkj/!jvIH'Ghih)um(i.) (,) sán(hv.fhG'FE'D//fg)gui(fe)nem,(e.) (;) in(d) me(efdeffe) ma(df!hvGFhh)net,(e.) (;) et(h) e(ijj)go(h) *() in(i) e(i)o.(efE'Dffe.) (,) (h'/ig'hvF'ED'CB.e.f!gwhhvG'FEffe.) (::)",
      source: "Graduale Romanum (GregoBase #774)",
      blurb: {
        text: "John 6 moves from the declaration of true food and drink to the promise of abiding in verses 56 and 57. The Corpus Christi Alleluia holds those two verses together as it leads toward Communion.",
        source: "John 6:56-57 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    sequence: {
      title: "Lauda Sion Salvatorem",
      latin: "Lauda Sion Salvatórem, Lauda ducem et pastórem, In hymnis et cánticis. Quantum potes, tantum aude: Quia major omni laude, Nec laudáre súfficis. Laudis thema speciális, Panis vivus et vitális Hódie propónitur. Quem in sacrae mensa coenae, Turbae fratrum duodénae Datum non ambígitur. Sit laus plena, sit sonóra, Sit jucúnda, sit decóra Mentis jubilátio. Dies enim solémnis ágitur, In qua mensae prima recólitur Hujus institútio. In hac mensa novi Regis, Novum Pascha novae legis, Phase vetus términat. Vetustátem nóvitas, Umbram fugat véritas, Noctem lux elíminat. Quod in coena Christus gessit, Faciéndum hoc expréssit In sui memóriam. Docti sacris institútis, Panem, vinum in salútis Consecrámus hóstiam. Dogma datur christiánis, Quod in carnem transit panis, Et vinum in sánguinem. Quod non capis, quod non vides, Animósa firmat fides, Praeter rerum órdinem. Sub divérsis speciébus, Signis tantum, et non rebus, Latent res exímiae. Caro cibus, sanguis potus: Manet tamen Christus totus Sub utráque spécie. A suménte non concísus, Non confráctus, non divísus: Integer accípitur. Sumit unus, sumunt mille: Quantum isti, tantum ille: Nec sumptus consúmitur. Sumunt boni, sumunt mali: Sorte tamen inaequáli, Vitae vel intéritus. Mors est malis, vita bonis: Vide paris sumptiónis Quam sit dispar éxitus. Fracto demum sacraménto, Ne vacílles, sed meménto Tantum esse sub fragménto, Quantum toto tégitur. Nulla rei fit scissúra: Signi tantum fit fractúra, Qua nec status, nec statúra Signáti minúitur. Ecce Panis Angelórum, Factus cibus viatórum: Vere panis filiórum, Non mitténdus cánibus. In figúris praesignátur, Cum Isaac immolátur, Agnus Paschae deputátur, Datur manna pátribus. Bone pastor, panis vere, Jesu, nostri miserére: Tu nos pasce, nos tuére, Tu nos bona fac vidére In terra vivéntium. Tu qui cuncta scis et vales, Qui nos pascis hic mortáles: Tuos ibi commensáles, Coherédes et sodáles Fac sanctórum cívium. Amen. Allelúia.",
      translation: "Praise, O Sion, your Savior; praise your leader and shepherd in hymns and songs. As much as you can, so much dare, for he is beyond all praise, nor can you praise him enough. Today a special theme of praise is set before us: the living and life-giving Bread. This, at the table of the holy supper, was without doubt given to the band of the twelve brethren. Let our praise be full and resounding; let the joy of the soul be glad and seemly. For a solemn day is kept, on which the first institution of this table is remembered. At this table of the new King, the new Passover of the new law brings the old to an end. The new supplants the old, truth puts the shadow to flight, light dispels the night. What Christ did at that supper, he commanded to be done in memory of him. Taught by his sacred precepts, we consecrate the bread and wine into the offering of our salvation. This is the teaching given to Christians: that the bread becomes his Body, and the wine his Blood. What you do not grasp, what you do not see, a living faith affirms, beyond the order of nature. Under different appearances, in signs and not in substance, wondrous things lie hidden. His Body is our food, his Blood our drink; yet Christ remains whole under each appearance. By the one who receives, he is neither divided nor broken; he is received whole and entire. One receives him, a thousand receive him; as much as one takes, so much do all, nor is he lessened by being received. The good receive him, and so do the wicked, but with unequal outcome, of life or of ruin. To the wicked it is death, to the good it is life; behold how unlike is the result of a like reception. When the sacrament is divided, do not waver, but remember that there is as much beneath a fragment as is contained in the whole. No breaking touches the reality; it is only the sign that is broken, whereby neither the state nor the stature of what is signified is lessened. Behold the Bread of Angels, made the food of pilgrims; truly the bread of children, not to be cast aside. In figures it was foreshadowed: when Isaac was offered, when the Paschal Lamb was appointed, when manna was given to the fathers. Good Shepherd, true Bread, O Jesus, have mercy on us; feed us and guard us, and bring us to see good things in the land of the living. You who know and can do all things, who feed us here as mortals, make us there your guests, the coheirs and companions of the holy citizens of heaven. Amen. Alleluia.",
      stanzas: [
        { latin: "Lauda Sion Salvatórem, / Lauda ducem et pastórem, / In hymnis et cánticis.", translation: "Praise, O Sion, your Savior; praise your leader and shepherd in hymns and songs." },
        { latin: "Quantum potes, tantum aude: / Quia major omni laude, / Nec laudáre súfficis.", translation: "As much as you can, so much dare, for he is beyond all praise, nor can you praise him enough." },
        { latin: "Laudis thema speciális, / Panis vivus et vitális / Hódie propónitur.", translation: "Today a special theme of praise is set before us: the living and life-giving Bread." },
        { latin: "Quem in sacrae mensa coenae, / Turbae fratrum duodénae / Datum non ambígitur.", translation: "This, at the table of the holy supper, was without doubt given to the band of the twelve brethren." },
        { latin: "Sit laus plena, sit sonóra, / Sit jucúnda, sit decóra / Mentis jubilátio.", translation: "Let our praise be full and resounding; let the joy of the soul be glad and seemly." },
        { latin: "Dies enim solémnis ágitur, / In qua mensae prima recólitur / Hujus institútio.", translation: "For a solemn day is kept, on which the first institution of this table is remembered." },
        { latin: "In hac mensa novi Regis, / Novum Pascha novae legis, / Phase vetus términat.", translation: "At this table of the new King, the new Passover of the new law brings the old to an end." },
        { latin: "Vetustátem nóvitas, / Umbram fugat véritas, / Noctem lux elíminat.", translation: "The new supplants the old, truth puts the shadow to flight, light dispels the night." },
        { latin: "Quod in coena Christus gessit, / Faciéndum hoc expréssit / In sui memóriam.", translation: "What Christ did at that supper, he commanded to be done in memory of him." },
        { latin: "Docti sacris institútis, / Panem, vinum in salútis / Consecrámus hóstiam.", translation: "Taught by his sacred precepts, we consecrate the bread and wine into the offering of our salvation." },
        { latin: "Dogma datur christiánis, / Quod in carnem transit panis, / Et vinum in sánguinem.", translation: "This is the teaching given to Christians: that the bread becomes his Body, and the wine his Blood." },
        { latin: "Quod non capis, quod non vides, / Animósa firmat fides, / Praeter rerum órdinem.", translation: "What you do not grasp, what you do not see, a living faith affirms, beyond the order of nature." },
        { latin: "Sub divérsis speciébus, / Signis tantum, et non rebus, / Latent res exímiae.", translation: "Under different appearances, in signs and not in substance, wondrous things lie hidden." },
        { latin: "Caro cibus, sanguis potus: / Manet tamen Christus totus / Sub utráque spécie.", translation: "His Body is our food, his Blood our drink; yet Christ remains whole under each appearance." },
        { latin: "A suménte non concísus, / Non confráctus, non divísus: / Integer accípitur.", translation: "By the one who receives, he is neither divided nor broken; he is received whole and entire." },
        { latin: "Sumit unus, sumunt mille: / Quantum isti, tantum ille: / Nec sumptus consúmitur.", translation: "One receives him, a thousand receive him; as much as one takes, so much do all, nor is he lessened by being received." },
        { latin: "Sumunt boni, sumunt mali: / Sorte tamen inaequáli, / Vitae vel intéritus.", translation: "The good receive him, and so do the wicked, but with unequal outcome, of life or of ruin." },
        { latin: "Mors est malis, vita bonis: / Vide paris sumptiónis / Quam sit dispar éxitus.", translation: "To the wicked it is death, to the good it is life; behold how unlike is the result of a like reception." },
        { latin: "Fracto demum sacraménto, / Ne vacílles, sed meménto / Tantum esse sub fragménto, / Quantum toto tégitur.", translation: "When the sacrament is divided, do not waver, but remember that there is as much beneath a fragment as is contained in the whole." },
        { latin: "Nulla rei fit scissúra: / Signi tantum fit fractúra, / Qua nec status, nec statúra / Signáti minúitur.", translation: "No breaking touches the reality; it is only the sign that is broken, whereby neither the state nor the stature of what is signified is lessened." },
        { latin: "Ecce Panis Angelórum, / Factus cibus viatórum: / Vere panis filiórum, / Non mitténdus cánibus.", translation: "Behold the Bread of Angels, made the food of pilgrims; truly the bread of children, not to be cast aside." },
        { latin: "In figúris praesignátur, / Cum Isaac immolátur, / Agnus Paschae deputátur, / Datur manna pátribus.", translation: "In figures it was foreshadowed: when Isaac was offered, when the Paschal Lamb was appointed, when manna was given to the fathers." },
        { latin: "Bone pastor, panis vere, / Jesu, nostri miserére: / Tu nos pasce, nos tuére, / Tu nos bona fac vidére / In terra vivéntium.", translation: "Good Shepherd, true Bread, O Jesus, have mercy on us; feed us and guard us, and bring us to see good things in the land of the living." },
        { latin: "Tu qui cuncta scis et vales, / Qui nos pascis hic mortáles: / Tuos ibi commensáles, / Coherédes et sodáles / Fac sanctórum cívium. Amen. Allelúia.", translation: "You who know and can do all things, who feed us here as mortals, make us there your guests, the coheirs and companions of the holy citizens of heaven. Amen. Alleluia." },
      ],
      mode: "Sequence · The Most Holy Body and Blood of Christ (Corpus Christi) · Mode VII",
      gabc: "(c3) LAu(c)da(e) Si(f)on(e) Sal(h)va(g)tó(f)rem,(e.) (;) Lau(f)da(g) du(e)cem(c) et(d) pa(c)stó(bc)rem,(e.) (;) In(f) hy(g)mnis(f) et(e) cán(d)ti(e)cis.(e.) (::) 2. Quan(c)tum(e) pot(f)es,(e) tan(h)tum(g) au(f)de :(e.) (;) Qui(f)a(g) ma(e)jor(c) o(d)mni(c) lau(bc)de,(e.) (;) Nec(f) lau(g)dá(f)re(e) súf(d)fi(e)cis.(e.) (::) 3. Lau(g)dis(e) the(f)ma(e) spe(i)ci(h)á(gvFE'f)lis,(g.) (;) Pa(g)nis(f) vi(h)vus(e) et(c) vi(d)tá(c)lis(b.) (;) Hó(f)di(g)e(f) pro(e)pó(d)ni(e)tur.(e.) (::) 4. Quem(g) in(e) sa(f)crae(e) men(i)sa(h) coe(gvFE'f)nae,(g.) (;) Tur(g)bae(f) fra(h)trum(e) du(c)o(d)dé(c)nae(b.) (;) Da(f)tum(g) non(f) am(e)bí(d)gi(e)tur.(e.) (::) 5. Sit(e) laus(i) ple(j)na,(h) sit(i) so(gf)nó(h)ra,(i.) (;) Sit(i) ju(h)cún(g)da,(f) sit(h) de(i)có(i)ra(e.) (;) Men(f)tis(g) ju(f)bi(e)lá(d)ti(e)o.(e.) (::) 6. Di(e)es(d) e(cb)nim(a) sol(e)é(f)mnis(e) á(d)gi(e)tur,(e.) (;) In(e) qua(d) men([ull:1{1]cb)sae(a[ull:}]) pri(e)ma(f) re(e)có(d)li(e)tur(e.) (;) Hu(h)jus(g) in(f)sti(e)tú(d)ti(e)o.(e.) (::) 7. In(e) hac(i) men(j)sa(h) no(i)vi(gf) Re(h)gis,(i.) (;) No(i)vum(h) Pa(g)scha(f) no(h)vae(i) le(i)gis,(e.) (;) Pha(f)se(g) ve(f)tus(e) tér(d)mi(e)nat.(e.) (::) 8. Ve(e)tu(d)stá(cb)tem(a) nó(ef)vi(d)tas,(e.) (;) Um(e)bram(d) fu([ull:1{1]cb)gat(a[ull:}]) vé(ef)ri(d)tas,(e.) (;) No(h)ctem(g) lux(f) e(e)lí(d)mi(e)nat.(e.) (::) 9. Quod(i) in(h) coe(i)na(ij) Chri(l)stus(k) ges(j)sit,(i.) (;) Fa(l)ci(k)én(j)dum(h) hoc(i) ex(j)prés(i)sit(e.) (;) In(f) su(g)i(f) me(e)mó(d)ri(e)am.(e.) (::) 10. Do(i)cti(h) sa(i)cris(ij) in(l)sti(k)tú(j)tis,(i.) (;) Pa(l)nem,(k) vi(j)num(h) in(i) sa(j)lú(i)tis(e.) (;) Con(f)se(g)crá(f)mus(e) hó(d)sti(e)am.(e.) (::) 11. Do(i)gma(h) da(i)tur(h) chri(k)sti(j)á(i)nis,(h.) (;) Quod(h) in(i) car(k)nem(j) trans(i)it(h) pa(i)nis,(i.) (;) Et(i) vi(g)num(h) in(fe) sán(d)gui(e)nem.(e.) (::) 12. Quod(i) non(h) ca(i)pis,(h) quod(k) non(j) vi(i)des,(h.) (;) A(h)ni(i)mó(k)sa(j) fir(i)mat(h) fi(i)des,(i.) (;) Prae(i)ter(g) re(h)rum(fe) ór(d)di(e)nem.(e.) (::) 13. Sub(i) di(h)vér(gh)sis(fe) spe(g)ci(h)é(ij)bus,(i.) (;) Si(h)gnis(i) tan(k)tum,(j) et(i) non(h) re(g)bus,(f.) (;) La(h)tent(i) res(e) ex(f)í(g)mi(f)ae.(e.) (::) 14. Ca(i)ro(h) ci(gh)bus,(fe) san(g)guis(h) po(ij)tus :(i.) (;) Ma(h)net(i) ta(k)men(j) Chri(i)stus(h) to(g)tus(f.) (;) Sub(h) u(i)trá(e)que(f) spé(g)ci(f)e.(e.) (::) 15. A(i) su(ij)mén(l)te(i) non(l) con(k)cí(j)sus,(i.) (;) Non(j) con(k)frá(l)ctus,(k) non(j) di(i)ví(i)sus :(g.) (;) In(i)te(g)ger(h) ac(fe)cí(d)pi(e)tur.(e.) (::) 16. Su(i)mit(ij) u(l)nus,(i) su(l)munt(k) mil(j)le :(i.) (;) Quan(j)tum(k) i(l)sti,(k) tan(j)tum(i) il(i)le :(g.) (;) Nec(i) sum(g)ptus(h) con(fe)sú(d)mi(e)tur.(e.) (::) 17. Su(e)munt(i) bo(i)ni,(h) su(i)munt(k) ma(jvIH)li :(i.) (;) Sor(i)te(j) ta(h)men(f) in(h)ae(i)quá(h)li,(g.) (;) Vi(e)tae(f) vel(e) in(f)té(d)ri(e)tus.(e.) (::) 18. Mors(e) est(i) ma(i)lis,(h) vi(i)ta(k) bo(jvIH)nis :(i.) (;) Vi(i)de(j) pa(h)ris(f) sum(h)pti(i)ó(h)nis(g.) (;) Quam(e) sit(f) dis(e)par(f) éx(d)i(e)tus.(e.) (::) 19. Fra(h)cto(g) de(f)mum(e) sa(f)cra(d)mén(e)to,(e.) (;) Ne(e) va(g)cíl(i)les,(i) sed(j) me(h)mén(i)to(i.) (;) Tan(i)tum(i) es(j)se(h) sub(i) frag(j)mén(i)to,(g.) (;) Quan(i)tum(g) to(h)to(fe) té(d)gi(e)tur.(e.) (::) 20. Nul(h)la(g) re(f)i(e) fit(f) scis(d)sú(e)ra :(e.) (;) Si(e)gni(g) tan(i)tum(i) fit(j) fra(h)ctú(i)ra,(i.) (;) Qua(i) nec(i) sta(j)tus,(h) nec(i) sta(j)tú(i)ra(g.) (;) Si(i)gná(g)ti(h) mi(fe)nú(d)i(e)tur.(e.) (::) 21. Ec(i)ce(h) Pa(i)nis(g) An(h)ge(f)ló(d)rum,(e.) (;) Fa(e)ctus(g) ci(i)bus(i) vi(j)a(h)tó(i)rum :(i.) (;) Ve(j)re(k) pa(l)nis(k) fi(ji)li(h)ó(i)rum,(i.) (;) Non(i) mit(g)tén(h)dus(fe) cá(d)ni(e)bus.(e.) (::) 22. In(i) fi(h)gú(i)ris(g) prae(h)si(f)gná(d)tur,(e.) (;) Cum(e) I(g)sa(i)ac(i) im(j)mo(h)lá(i)tur,(i.) (;) A(j)gnus(k) Pa(l)schae(k) de(ji)pu(h)tá(i)tur,(i.) (;) Da(i)tur(g) man(h)na(fe) pá(d)tri(e)bus.(e.) (::) 23. Bo(e)ne(e) pa(f)stor,(e) pa(g)nis(h) ve(ij)re,(i.) (;) Je(j)su,(k) no(j)stri(i) mi(j)se(gf)ré(h)re :(i.) (;) Tu(e) nos(g) pa(i)sce,(i) nos(j) tu(h)é(i)re,(i.) (;) Tu(i) nos(j) bo(h)na(f) fac(h) vi(g)dé(f)re(e.) (;) In(d) ter(f)ra(hi) vi(e)vén(f)ti(e)um.(e.) (::) 24. Tu(e) qui(e) cun(f)cta(e) scis(g) et(h) va(ij)les,(i.) (;) Qui(j) nos(k) pa(j)scis(i) hic(j) mor(gf)tá(h)les :(i.) (;) Tu(e)os(g) i(i)bi(i) com(j)men(h)sá(i)les,(i.) (;) Co(i)he(j)ré(h)des(f) et(h) so(g)dá(f)les(e.) (;) Fac(d) san(f)ctó(hi)rum(e) cí(f)vi(e)um.(e.) (::) A(efe)men.(de..) (,) Al(f)le(d)lú(fe~){ia}.(e.) (::)",
      source: "Graduale Romanum (GregoBase #308)",
      blurb: {
        text: "Thomas Aquinas composed Lauda Sion as the sequence for Pope Urban IV's new universal Corpus Christi solemnity. Its extended meditation on the living bread, consecration, and the figures of Isaac, the Paschal lamb, and manna makes it a doctrinal praise-poem rather than a brief Alleluia verse.",
        source: "Chant of the Day (this project's own chant entry); Urban Hannon, \"Lauda Sion as Doxological Compendium of St. Thomas's Eucharistic Theology,\" New Blackfriars 105, no. 2 (2024), 105–115",
      },
    },
    offertory: {
      title: "Sacerdotes Domini incensum et panes offerunt",
      latin: "Sacerdótes Dómini incénsum et panes ófferunt Deo : et ídeo sancti erunt Deo suo, et non pollúent nomen ejus, allelúia.",
      translation: "The priests of the Lord offer incense and bread to God: and therefore they shall be holy to their God, and shall not profane his name, alleluia.",
      mode: "Offertory · The Most Holy Body and Blood of Christ (Corpus Christi) · Mode IV",
      reference: "Lev. 21:6",
      gabc: "(c4) SA(f)cer(d!ewf)dó(f)tes(e'fg) *() Dó(ixghf___//ih/igh)mi(e)ni(egf/gffe.) (;) in(f)cén(fgf)sum(ff) et(df~) pa(fff/ghggef)nes(e_[oh:h][ll:1]d) (,) óf(gh)fe(g/jjj)runt(hjhhg) De(gh)o :(hg..) (:) et(ixgih'ivGF') íd(g)e(f)o(f_e) (,) san(ef'g~)cti(g) e(ixhig)runt(ghF'E) (;) De(gh)o(gjh) su(ghf/ghg)o,(gvFD//ef/gfgd.) (:) et(df/gef) non(f) pól(ixef/hiHG')lu(hggfg)ent(g_[oh:h]d) (,) no(df/gef)men(f) e(f_[oh:h]g_[oh:h]f_[oh:h])jus,(f.) (;) al(f!gwhg~)le(ixh_f/ih/igh)lú(e){ia}.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #645)",
      blurb: {
        text: "Leviticus 21:6 begins with the declaration of holiness and then names the priestly offering as its reason, stating in the Vulgate, \"Sancti erunt Deo suo, et non polluent nomen ejus: incensum enim Domini, et panes Dei sui offerunt.\" The Offertory reverses this order, leading instead with the act of offering, \"Sacerdotes Domini incensum et panes offerunt Deo,\" before drawing the conclusion about holiness. Sung at the moment when the bread and wine are brought to the altar, the chant's rearrangement places the visible action first.",
        source: "Lev. 21:6 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Quotiescumque manducabitis panem hunc",
      latin: "Quotiescúmque manducábitis panem hunc, et cálicem bibétis, mortem Dómini annuntiábitis, donec véniat : ítaque quicúmque manducáverit panem, vel bíberit cálicem Dómini indígne, reus erit córporis et sánguinis Dómini.",
      translation: "As often as you shall eat this bread, and drink the cup, you proclaim the death of the Lord, until he comes. Therefore whoever shall eat this bread, or drink the cup of the Lord unworthily, shall be guilty of the body and blood of the Lord.",
      mode: "Communion · The Most Holy Body and Blood of Christ (Corpus Christi) · Mode VII",
      reference: "1 Cor. 11:26-27",
      gabc: "(c3) QU{o}(e)ti(ei)es(i)cúm(i)que(e.) *(,) man(i)du(h)cá(kjki)bi(i)tis(i) pa(ij)nem(i) hunc,(i.) (,) et(h) cá(hi'j)li(j)cem(ji~) bi(hj)bé(ih)tis,(h.) (;) mor(hg)tem(f) Dó(hhi)mi(h)ni(h) an(h)nun(g)ti(h)á(i)bi(h)tis,(h.) (;) do(i!jwkj)nec(iji) vé(hg)ni(f!gwhg)at :(fe..) (:) í(fg)ta(f)que(f.) (,) qui(hg)cúm(efe)que(e.) man(e)du(f)cá(hi'j)ve(i)rit(i) pa(j)nem,(i.) (,) vel(i) bí(j)be(i)rit(i) cá(j)li(i)cem(h) Dó(ik)mi(i)ni(j) in(h)dí(hg/h_ih)gne(fe..) (;) re(fh)us(h) e(ge)rit(e) cór(fg)po(fe)ris(e.) et(e) sán(ef)gui(e)nis(e) Dó(fhg)mi(hih)ni.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #10950)",
      blurb: {
        text: "Quotiescumque manducabitis panem hunc takes its text from 1 Corinthians 11, the very passage proclaimed as the Epistle earlier in the same Mass. The antiphon draws on verses 26 and 27 precisely, moving from the proclamation that eating and drinking announces the Lord's death until he comes into Paul's warning that eating or drinking unworthily makes one guilty of the body and blood of the Lord. Verse 28, which calls each person to examine themselves before eating, is passed over, so that exhortation rests in the silence after Communion rather than in the sung text.",
        source: "1 Cor. 11:26-27 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent01-4 (Missale Romanum formulary)",
      },
    },
  },
  "sacred-heart": {
    gradual: {
      title: "Dulcis et rectus Dominus",
      latin: "Dulcis et rectus Dóminus, propter hoc legem dabit delinquéntibus in via. ℣. Díriget mansuétos in judício, docébit mites vias suas.",
      translation: "Sweet and righteous is the Lord, and for this he will give a law to sinners in the way. ℣. He will guide the meek in judgment, he will teach the gentle his ways.",
      mode: "Gradual · The Most Sacred Heart of Jesus · Mode I",
      reference: "Ps. 25:8-9",
      gabc: "(c4) DUl(ixdh!ivHGfhg/hi)cis(h.) *(,) et(h/jjkvJH.ixgiH'Gh) re(f!gwhg)ctus(h.) (,) Dó(ghG'Efgf/g_[uh:l]h)mi(d!ewfd)nus,(d.) (:) pro(dfd)pter(ddc) hoc(d_[oh:h]e_[oh:h]d_[oh:h]) (,) le(dh)gem(hg) da(gj)bit(jj) de(jkj)lin(jijvIHiij)quén(g)ti(g.h!iwj)bus(ih..) (;) in(fh) vi(ixh_g/jjvH'Ghig)a.(efd/f_h//ghG'Ef_g//fgFD.1) (::) ℣. Dí(dh)ri(h)get(h) man(h)su(hg)é(h)tos(hjH'GF.eg/hgh/fgFD.1) (,) (cd/fd//cd/ff/g.h!iw!jvIH.) (;) in(h) ju(h)dí(h)ci(h)o,(hjH'Gh/jjjh//jjjvIH'jggf.0) (:) do(hkkj)cé(jlKJ'kjj'jh)bit(i_[oh:h]h) (,) mi(ixhv.fhg/hiG'F//gf/ghff'fd!ewfef)tes(e[ll:1]d..) (,) vi(d/fff)as(g_[oh:h]f) () * su(f!hgh)as.(hhf.) (,) (h_ghvFDgff'fvEC//ddc/da..) (;) (cd!fvvDC'd/ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #1035)",
      blurb: {
        text: "Dulcis et rectus Dominus takes its words from Psalm 25, verses 8 and 9, drawn from a prayer whose surrounding verses dwell on sin and the need for pardon. The verses immediately before speak of the sins of youth, and those immediately after ask God to overlook great transgression. The chant sets aside that penitential frame and holds only these two verses about God's sweetness and his teaching of the gentle. It leads into a Gospel, John 19:31-37, in which a soldier opens Christ's side with a lance, the passage that grounds the theology of the Sacred Heart feast.",
        source: "Ps. 25:8-9 (Vulgate numbering Ps. 24:8-9) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent02-5 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Tollite jugum meum super vos",
      latin: "Allelúia. ℣. Tóllite jugum meum super vos, et díscite a me, quia mitis sum et húmilis corde, et inveniétis réquiem animábus vestris.",
      translation: "Alleluia. ℣. Take my yoke upon you, and learn from me, for I am meek and humble of heart: and you shall find rest for your souls.",
      mode: "Alleluia · The Most Sacred Heart of Jesus · Mode III",
      reference: "Matt. 11:29",
      gabc: "(c4) AL(cd)le(efED//gvFE)lú(de~){ia}.(e.) *(;) ij.(eg!hvhg/jg/hhvG'FE.) (,) (ef!gvvF'ED'ec./g.f!gwhG'FE'e[ll:1]d/ec/dde.) (::) ℣. Tól(ef!gvvFE)li(de)te(e.) (,) (eg!hvhg/jg/hhvG'FE.) ju(ef!gvvF'ED'ec)gum(c.) me(g.f!gwhG'FE)um(fe) su(de)per(effe) vos(e.) (:) et(dg) dí(gh)sci(g)te(g) a(gh!jvHG'hvGF'ED'e) me,(efvED'Cd.) (,) qui(ef!gvvFE)a(fe) mi(de)tis(effe) sum(e.) (;) et(dg/h!jjjvIGh_g/h_i) (,) (dg/h!jjjvIGh_g/h_i) (,) hú(jkkvJ'Ij)mi(hg)lis(hj) Cor(ghhg)de,(g.) (:) et(g) in(gh)ve(g)ni(gefvEDC'g)é(hg)tis(hj) ré(jjjvIGh_g/h_i)(,)(dg/h!jjjvIGh_g/h_i)(,)(jkkvJ'IHG.ij!kvkjjij)qui(hg)em(g.) *(;) a(g.h!iw!jvI'HG'F)ni(g)má(ghg)bus(fe) ve(de)stris.(e.) (,) (eg!hvhg/jg/hhvG'FE.) (,) (ef!gvvF'ED'ec./g.f!gwhG'FE'e[ll:1]d/ec/dde.) (::)",
      source: "Graduale Romanum (GregoBase #907)",
      blurb: {
        text: "Tollite jugum meum draws its verse from Matthew 11:29, lifting it out of a passage that moves from the invitation of verse 28, \"Come to me all you that labor and are burdened,\" through this call to learn meekness, and on to the reassurance of verse 30, \"For my yoke is sweet and my burden light.\" The alleluia verse omits both the summons that precedes it and the explanation that follows, resting the whole weight of the chant on the inner demand: take the yoke, learn humility, find rest. Palestrina set the same text as a four-voice motet, listed among the works collected in the Breitkopf and Härtel edition of his complete works.",
        source: "Matt. 11:29 (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"List of compositions by Giovanni Pierluigi da Palestrina\" (rev. 1309884587)",
      },
    },
    offertory: {
      title: "Improperium exspectavit cor meum",
      latin: "Impropérium exspectávit cor meum, et misériam : et sustínui qui simul mecum contristarétur, et non fuit : consolántem me quaesívi, et non invéni : et dedérunt in escam meam fel, et in siti mea potavérunt me acéto.",
      translation: "My heart has expected reproach and misery: and I looked for someone to grieve with me, but there was none: I sought one to comfort me, and I found none. And they gave me gall for my food, and in my thirst they gave me vinegar to drink.",
      mode: "Offertory · The Most Sacred Heart of Jesus · Mode VIII",
      reference: "Ps. 69:21",
      gabc: "(c4) IM(fgffe)pro(cd)pé(ff)ri(f!gwhgh)um(hg__) *(,) ex(gh)spe(g)ctá(h!iwj)vit(g) cor(g!jj//jjjhhg~) me(ixgih'ivGF')um,(gffe.) (;) et(g) mi(h!iwj_i)sé(jkjjh)ri(h!iw!jvI'HG'h)am :(hg..) (:) et(f) sus(g)tí(gjji)nu(ikjj)i(j_i) (,) qui(i) si(ikjj)mul(j_i) con(ij)tri(ij)sta(j)ré(jvIH)tur,(iki'/jkhhg.) (;) et(g!i'k~) non(k_[hl:1]ik) fu(ikjj'ji)it :(i.) (:) con(g!jjj)so(j)lán(ikjj)tem(jh~) me(iji) (,) quae(jkj)sí(jjjh)vi,(hg/hih.) (;) et(f!h'j~) non(j_h/jjjlvKJjv'1IH) in(hg~)vé(giH'GhvGF)ni :(f.) (:) et(f!gwh) de(hg)dé(hv.jj//jjj)runt(h!iw!jvI'HGhih.) (,) in(gf) e(ghg)scam(h) me(hjI'H)am(gf~) fel,(ghg/h_g/hjIH.) (:) et(fg) in(hg~) si(j)ti(j!kwl_k) me(kjji)a(hg..) (,) po(j)ta(jkj)vé(jjjh)runt(g.fgwh!ivH~G~) me(hg..) (,) a(h)cé(jkjjh/jjh/jjvH'G)to.(g!hwihhg.) (::)",
      source: "Graduale Romanum (GregoBase #486)",
      blurb: {
        text: "Improperium exspectavit cor meum draws from Psalm 69, beginning partway through verse 21 and omitting its opening phrase, \"In thy sight are all they that afflict me,\" then continuing without a break into verse 22, so that the two verses become a single lament. The Gospel of the day is John 19:31-37, which describes a soldier opening Christ's side with a lance after the crucifixion. The offertory's closing image, gall and vinegar given to the suffering figure of the psalm, places the congregation already inside that same scene before the Gospel is proclaimed.",
        source: "Ps. 69:21 (Vulgate numbering Ps. 68:21) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent02-5 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Dico vobis gaudium est",
      latin: "Dico vobis, gáudium est Ángelis Dei super uno peccatóre paeniténtiam agénte.",
      translation: "I say to you, there is joy among the angels of God over one sinner doing penance.",
      mode: "Communion · The Most Sacred Heart of Jesus · Mode V",
      reference: "Luke 15:10",
      gabc: "(c3) DI(h)co(f) vo(hi)bis,(i.) *(,) gáu(ij)di(i)um(h) est(h) An(h)ge(g)lis(i) De(h_[oh:h]i_[oh:h]f_[oh:h])i(f.) (;) su(f)per(e) u(f)no(e) pec(f)ca(d)tó(ef)re(f.) (,) pae(f)ni(h)tén(f)ti(e)am(f!gwhg/hih) a(f)gén(d_[oh:h]e_[oh:h]d~)te.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1058)",
      blurb: {
        text: "Dico vobis gaudium est quotes Luke 15:10, the closing line of the parable sequence about the lost sheep and lost coin. The antiphon compresses the Vulgate slightly: where Luke reads \"gaudium erit coram angelis Dei,\" the chant has \"gaudium est Angelis Dei,\" shifting from future to present tense and placing joy among the angels rather than before them.",
        source: "Luke 15:10 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent03-0r (Missale Romanum formulary)",
      },
    },
  },

  /* ===================================================================
   * Temporal cycle — Eastertide & Pentecost (the paschal temporal keys
   * already carrying an introit in data/introits.js; easter-2 is the
   * pre-existing pilot). Latin = GregoBase Solesmes (Graduale Romanum),
   * gabc pulled by id; assignments per the modern Graduale Romanum,
   * confirmed on gregorien.info's Vatican-II calendar. Paschaltide has
   * NO Gradual — only resurrexi keeps the one Eastertide Gradual
   * "Haec dies"; every other day is Alleluia + Offertory + Communion,
   * like easter-2. One Alleluia is shown per Sunday (the Mass sings two).
   * Cycle-split communions live under -a/-b/-c keys. See
   * sources/gregobase/build-easter.py.
   * =================================================================== */
  "resurrexi": {
    gradual: {
      title: "Haec dies",
      latin: "Haec dies, quam fecit Dóminus : exsultémus, et laetémur in ea. ℣. Confitémini Dómino, quóniam bonus : quóniam in saéculum misericórdia ejus.",
      translation: "This is the day which the Lord has made: let us be glad and rejoice therein. ℣. Give praise to the Lord, for he is good: for his mercy endures forever.",
      mode: "Gradual · Easter Sunday of the Resurrection · Mode II",
      reference: "Ps. 118:24, 1",
      gabc: "(c3) HAec(gxf_egvFEfd/f_h) di(hhhvFEfef)es,(f.) *(;) quam(ef) fe(hh)cit(hh//ijhhvF'Ef.) (,) Dó(hfh)mi(hhh)nus :(h.f!gwh!iv.hi/jhh/iih.0) (:) ex(f)sul(h)té(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF)mus,(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) et(de'f) lae(fef)té(hf/hhh)mur(hiHF.1) (;) in(ef) e(hf/h_i)a.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Con(f)fi(h)té(hi~)mi(i)ni(i) Dó(ih/ij!kvJH)mi(hi/jij)no,(j_0kvJH'//jh/j_i//kvJIkvJI.) (:) quó(h.0/[-0.5]ijijHF.h.0/[-0.5]ijHF.1e.f!gwh!iv./[-0.5]llvJ'I)ni(ji)am(i.) (,) bo(iv.hhhjv_I_H_3jv_I_H_3i_[oh:h]f)nus :(f.) (:) quó(hhi)ni(h)am(h) in(h) saé(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF')cu(f)lum(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) mi(d)se(de'f)ri(f)cór(f.0/[-0.5]hvGF'g)di(e)a(f) *() e(hf/h_i)jus.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1075)",
      blurb: {
        text: "Haec dies begins with Psalm 118 verse 24 and then returns to verse 1, reversing the psalm's order. Easter's Gradual moves from the day's rejoicing back to the mercy that makes praise possible.",
        source: "Ps. 118:24, 1 (Vulgate numbering Ps. 117:24, 1) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    alleluia: {
      title: "Pascha nostrum",
      latin: "Allelúia. ℣. Pascha nostrum immolátus est Christus.",
      translation: "Alleluia. ℣. Christ our Passover is sacrificed.",
      mode: "Alleluia · Easter Sunday of the Resurrection · Mode VII",
      reference: "1 Cor. 5:7",
      gabc: "(c3) AL(e)le(e)lú(ef'!hfi//gi~){ia}.(ii) *(;) ij.(g!iwjij//ijihiHF'fe.) (;) (iv.ji/jijvIG.hih'/!ivHF'fe.) (,) (iv.ef//efd.1/fhf/gffe.) (::) ℣. Pa(h)scha(g) no(ijij)strum(i_j_i_2/j_g//hi/j_i/j_g/hihhg.) (;) im(h)mo(i)lá(il.mvLKlvKJkkki)(;)(lv.mvLKlvKJkkki//jvIHh'hf/gh'i)(,)(jkIH'ivHF'fe.)(,)(g!hwigiigi)tus(giG'FE./[-0.5]gvFEfe) est(e.) *(;) Chri(e/f'h//f!igi)stus.(iie.) (,) (i'jvIH'ivHF'fe.) (,) (iv.ef//efd.1/fhf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #761). In Eastertide a second Paschal Alleluia follows; only the first is shown.",
      blurb: {
        text: "Pascha nostrum names Christ as the Church's Passover sacrifice. In the Easter Alleluia, the proclamation calls the Church to leave old leaven behind and keep the feast in joy.",
        source: "1 Cor. 5:7 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    sequence: {
      title: "Victimae paschali laudes",
      latin: "Víctimae pascháli laudes ímmolent Christiáni. Agnus redémit oves : Christus ínnocens Patri reconciliávit peccatóres. Mors et vita duéllo conflixére mirándo : dux vitae mórtuus, regnat vivus. Dic nobis María, quid vidísti in via? Sepúlcrum Christi vivéntis, et glóriam vidi resurgéntis : Angélicos testes, sudárium, et vestes. Surréxit Christus spes mea : praecédet suos in Galilaéam. Scimus Christum surrexísse a mórtuis vere : tu nobis, victor Rex, miserére. Amen. Allelúia.",
      translation: "To the Paschal Victim let Christians offer praises. The Lamb has redeemed the sheep: Christ the innocent has reconciled sinners to the Father. Death and life contended in a wondrous conflict: the Prince of life, who died, reigns living. Tell us, Mary, what did you see on the way? I saw the tomb of the living Christ, and the glory of his rising: the angelic witnesses, the shroud, and the linens. Christ my hope is risen: he goes before his own into Galilee. We know that Christ is truly risen from the dead: do you, O victorious King, have mercy on us. Amen. Alleluia.",
      stanzas: [
        { latin: "Víctimae pascháli laudes / ímmolent Christiáni.", translation: "To the Paschal Victim let Christians offer praises." },
        { latin: "Agnus redémit oves: / Christus ínnocens Patri reconciliávit peccatóres.", translation: "The Lamb has redeemed the sheep: Christ the innocent has reconciled sinners to the Father." },
        { latin: "Mors et vita duéllo conflixére mirándo: / dux vitae mórtuus, regnat vivus.", translation: "Death and life contended in a wondrous conflict: the Prince of life, who died, reigns living." },
        { latin: "Dic nobis María, / quid vidísti in via?", translation: "Tell us, Mary, what did you see on the way?" },
        { latin: "Sepúlcrum Christi vivéntis, et glóriam vidi resurgéntis: / Angélicos testes, sudárium, et vestes.", translation: "I saw the tomb of the living Christ, and the glory of his rising: the angelic witnesses, the shroud, and the linens." },
        { latin: "Surréxit Christus spes mea: / praecédet suos in Galilaéam.", translation: "Christ my hope is risen: he goes before his own into Galilee." },
        { latin: "Scimus Christum surrexísse a mórtuis vere: / tu nobis, victor Rex, miserére. Amen. Allelúia.", translation: "We know that Christ is truly risen from the dead: do you, O victorious King, have mercy on us. Amen. Alleluia." },
      ],
      mode: "Sequence · Easter Sunday of the Resurrection · Mode I",
      gabc: "(c4) VI(d)cti(c)mae(d) pa(f)schá(g)li(f) lau(e)des(d.) (,) * ím(h)mo(g)lent(e) Chri(g)sti(f)á(e)ni.(d.) (::) A(h)gnus(j) red(k)é(h)mit(g) o(h)ves :(h.) (;) Chri(h)stus(g) ín(h)no(g)cens(f) Pa(e)tri(d.) (,) re(f)con(g)ci(d)li(e)á(d)vit(c.) pec(e)ca(f)tó(e)res.(d.) (::) Mors(h) et(j) vi(k)ta(h) du(g)él(h)lo(h.) (,) con(h)fli(g)xé(h)re(g) mi(f)rán(e)do :(d.) (;) dux(f) vi(g)tae(d) mór(e)tu(d)us,(c.) re(e)gnat(f) vi(e)vus.(d.) (::) Dic(a) no(c)bis(d) Ma(f)rí(g)a,(e_[oh:h][ll:1]d) (,) quid(c) vi(f)dí(e)sti(d) in(e) vi(c)a?(d.) (::) Se(f)púl(h)crum(g) Chri(h)sti(f) vi(g)vén(fe~)tis,(d.) (;) et(d) gló(g)ri(f)am(g) vi(h)di(g) re(f)sur(g)gén(fe~)tis :(d.) (::) An(a)gé(c)li(d)cos(f) te(g)stes,(e_[oh:h][ll:1]d) (,) su(c)dá(f)ri(e)um,(d) et(e) ve(c)stes.(d.) (::) Sur(f)ré(h)xit(g) Chri(h)stus(f) spes(g) me(fe)a :(d.) (;) prae(d)cé(g)det(f) su(g)os(h) in(g) Ga(f)li(g)laé(fe)am.(d.) (::) Sci(h)mus(j) Chri(k)stum(h) sur(h)re(g)xís(h)se(h.) (,) a(h) mór(j)tu(g)is(f) ve(e)re :(d.) (;) tu(c) no(f)bis,(e) vi(g)ctor(h) Rex,(h.) (,) mi(f)se(g)ré(fe)re.(d.) (::) A(ded)men.(cd..) (,) Al(c)le(f)lú(e[ll:1]d~){ia}.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1086)",
      blurb: {
        text: "The Easter sequence gives its central answer to Mary. Mary's response names the tomb, angels, shroud, and risen Christ before the chant ends by asking the victorious King for mercy.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Terra tremuit",
      latin: "Terra trémuit, et quiévit, dum resúrgeret in judício Deus, allelúia.",
      translation: "The earth trembled and was still when God arose in judgment, alleluia.",
      mode: "Offertory · Easter Sunday of the Resurrection · Mode IV",
      reference: "Ps. 76:9-10",
      gabc: "(c4) TEr(dfe)ra(fffdf) ()* tré(ef'g)mu(gfh)it,(h.) (;) et(h/jjvH'G) qui(f!gwhg)é(gv.fhg)vit,(dgF'EfgFD.1) (:) dum(d!fffd~) re(ef)súr(gh)ge(gf)ret(fh!jjjh..) (;) in(dh) ju(h)dí(h/jjh)ci(g)o(giHG'h) De(ef!hvGE'fd)us,(d.) (:) al(d!fff//f_e/[1]{ix}fv.hiH'GF'fe~)le(ghg//f'/ge/f_d)(,)(df/hg//df/hg//f'/ge/f_d//hvGF'g)lú(e){ia}.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #725)",
      blurb: {
        text: "Terra tremuit draws its words from two consecutive verses of Psalm 76, but takes only their center. Verse 9 opens with the phrase \"thou hast caused judgment to be heard from heaven,\" and verse 10 closes with \"to save all the meek of the earth\"; the chant sets aside both of those phrases, keeping only the earth's trembling and God's arising in judgment. Sung on Easter Sunday, it precedes a Gospel from Mark 16 in which the women arrive at the tomb to find the stone already rolled away.",
        source: "Ps. 76:9-10 (Vulgate numbering Ps. 75:9-10) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pasc0-0 (Missale Romanum formulary); Divinum Officium, Pasc0-0.txt [Officium heading]",
      },
    },
    communion: {
      title: "Pascha nostrum immolatus est",
      latin: "Pascha nostrum immolátus est Christus, allelúia : ítaque epulémur in ázymis sinceritátis et veritátis, allelúia, allelúia, allelúia.",
      translation: "Christ our Passover is sacrificed, alleluia: therefore let us keep the feast with the unleavened bread of sincerity and truth, alleluia, alleluia, alleluia.",
      mode: "Communion · Easter Sunday of the Resurrection · Mode VI",
      reference: "1 Cor. 5:7-8",
      gabc: "(c4) PA(f)scha(f!hgh) no(f)strum(e.[ll:1]d!ewfd.1) *(;) im(fe~)mo(f)lá(gh)tus(gvFE'fwgfg) est(gf..) Chri(f)stus,(fe/fdf.) (,) al(f)le(f)lú(fhG~'F~){ia} :(f.) (:) í(d)ta(fffvDC'dff/hg/hf)que(f.) e(f)pu(fef)lé(fdec)mur(c.) (;) in(f) á(ghgh)zy(hgh)mis(gfg) sin(fd~)ce(fe)ri(f)tá(g)tis(f) et(e) ve(g_[uh:l]h)ri(gh)tá(f_[oh:h]g_[oh:h]f_[oh:h])tis,(f.) (:) al(f)le(f_d/fef_d)lú(d!ewf){ia},(c.) (,) al(dc~)le(f!gwh_ghvGF)lú(gh~){ia},(h.) (,) al(fg~)le(ixgiHG')lú(hggfg){ia}.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #952)",
      blurb: {
        text: "Pascha nostrum immolatus est joins verse 7 of 1 Corinthians 5 to the following verse, carrying Christ's sacrifice into the command to keep the feast. The Easter Communion thus moves from proclamation to sincerity and truth.",
        source: "1 Cor. 5:7-8 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Pasc0-0 (Missale Romanum formulary)",
      },
    },
  },
  "easter-3": {
    alleluia: {
      title: "Cognoverunt discipuli",
      latin: "Allelúia. ℣. Cognovérunt discípuli Dóminum Jesum in fractióne panis.",
      translation: "Alleluia. ℣. The disciples knew the Lord Jesus in the breaking of bread.",
      mode: "Alleluia · 3rd Sunday of Easter · Mode III",
      reference: "Luke 24:35",
      gabc: "(c4) AL(e)le(egfefEDee[ll:1]d)lú(g!hwi'!jv){ia}.(ih) *(,) ij.(jvIHjji//gh/ihhg) (;) (gh!jvvIGhh//gh/i_[oh:h]g) (,) (gh!jvvIGhhvGF//ghg/hgge.) (::) ℣. Co(efE'D)gno(g)vé(hj)runt(ih/jkJH'Ghhg.) (,) di(hih)scí(iji)pu(hg)li(h!iwji/kjji.) (;) Dó(g!jj)mi(jj)num(i_[oh:h]h) Je(i)sum(g/hhf/gg//egee[ll:1]d/efe.) (:) in(e) fra(egf)cti(ef'g)ó(hiH'G)ne(g'hj) *() pa(j)nis.(ih//jvIHjji//gh/ihhg) (;) (gh!jvvIGhh//gh/i_[oh:h]g) (,) (gh!jvvIGhhvGF//ghg/hgge.) (::)",
      source: "Graduale Romanum (GregoBase #912). In Eastertide a second Paschal Alleluia follows; only the first is shown.",
      blurb: {
        text: "Luke 24:35 in the Vulgate ends with a pronoun, \"cognoverunt eum in fractione panis,\" they knew him in the breaking of bread. The chant replaces that pronoun with the full names, singing \"Cognoverunt discipuli Dominum Jesum in fractione panis,\" so that what the original left implicit, the Lord Jesus himself, is spoken aloud. The verse comes one step before the moment, in the very next verse of Luke 24, when Jesus stands among the gathered disciples and says peace be to you.",
        source: "Luke 24:35 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Lauda anima mea Dominum",
      latin: "Lauda, ánima mea, Dóminum : laudábo Dóminum in vita mea : psallam Deo meo, quámdiu ero, allelúia.",
      translation: "Praise the Lord, O my soul: I will praise the Lord in my life: I will sing to my God as long as I shall be, alleluia.",
      mode: "Offertory · 3rd Sunday of Easter · Mode IV",
      reference: "Ps. 146:2",
      gabc: "(c4) LAu(ce/ge/ghGF'fvED)da(fd/efe.) *(,) á(fd)ni(fe)ma(f) me(hgge)a(fhG'Fghg) Dó(e)mi(egff)num :(eef.) (:) lau(e[ll:1]d~)dá(ghg)bo(h) Dó(ixhjh/i_[uh:l]j)mi(g)num(fgFE.) (;) in(f) vi(f_e/f!gwh)ta(hhg) me(ge/ghffe)a :(efE'Deef.) (:) psal(ce/gf)lam(ffff_c) De(d!ewf!gvFE)o(f.) me(ixfh!ivHG)o,(gh..) (;) quám(f)di(ixef!hig)u(g_[oh:h]f) e(f)ro,(d!ewffvED.) (;) al(ce/gf)le(ffff_c//fff_e//hg/hffe)lú(egF~'E~){ia}.(e.) (::)",
      source: "Graduale Romanum (GregoBase #668)",
      blurb: {
        text: "Psalm 146, verse 2 continues beyond where this offertory stops. The same verse goes on to say: \"Put not your trust in princes: In the children of men, in whom there is no salvation.\" The chant takes only the opening act of praise and leaves the warning behind, so the full verse pairs a call to sing with a reason to sing, that God, unlike earthly rulers, does not fail.",
        source: "Ps. 146:2 (Vulgate numbering Ps. 145:2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Surrexit Dominus",
      latin: "Surréxit Dóminus, et appáruit Petro, allelúia.",
      translation: "The Lord is risen, and has appeared to Peter, alleluia.",
      mode: "Communion · 3rd Sunday of Easter · Mode VI",
      reference: "Cf. Luke 24:34",
      gabc: "(c2) SUr(d)ré(fdf)xit(fg'h) *() Dó(hjh/i_[uh:l]j)mi(g)nus,(fgFD.1) (;) et(d) ap(d)pá(dge/g_[uh:l]h)ru(ff)it(f) Pe(f_[oh:h]g_[oh:h]f_[oh:h])tro,(f.) (;) al(hiH'G//ihivHG'F)le(g_[oh:h]f/d/e_[uh:l]f)(,)(deD'Cfv.deD'Cf_df)lú(f_[oh:h]g_[oh:h]f_[oh:h]){ia}.(f.) (::)",
      source: "Graduale Romanum (GregoBase #121)",
      blurb: {
        text: "Surrexit Dominus takes up the Easter witness that the risen Lord appeared to Simon, echoing Luke's account of the disciples' return to Jerusalem. In the Communion for the 3rd Sunday of Easter, that brief announcement lets Peter's encounter stand as a word of glad recognition.",
        source: "Cf. Luke 24:34 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "easter-3-b": {
    communion: {
      title: "Cantate Domino",
      latin: "Cantáte Dómino, allelúia : cantáte Dómino, benedícite nomen ejus : bene nuntiáte de die in diem salutáre ejus, allelúia, allelúia.",
      translation: "Sing to the Lord, alleluia: sing to the Lord, bless his name: show forth his salvation from day to day, alleluia, alleluia.",
      mode: "Communion · 3rd Sunday of Easter · Mode II",
      reference: "Ps. 96:2",
      gabc: "(c3) CAn(f)tá(h)te(hg) Dó(hi)mi(ivH'GhvGF'g)no,(g_[oh:h]f) *(,) al(f!gwh)le(egf)lú(f_[oh:h]g_[oh:h]f_[oh:h]){ia} :(f.) (:) can(f)tá(h)te(hg) Dó(hj)mi(ji)no,(hih.) (,) be(h)ne(hg)dí(i)ci(hg)te(f) no(f!gwhgh)men(g_[oh:h]f) e(f_[oh:h]g_[oh:h]f_[oh:h])jus :(f.) (:) be(j_h/i_[oh:h]g//hihi)ne(f.) nun(f!gwh)ti(hf)á(hi!jvI'HG'hwihi)te(ih..) (,) de(h) di(i)e(f) in(fe~) di(f!gw!hvG'FE'f)em(fe..) (,) sa(fgf)lu(e[ll:1]d)tá(fgf)re(ef) e(f_[oh:h]g_[oh:h]f_[oh:h])jus,(f.) (;) al(jk)le(j)lú(jij){ia},(h_f) (,) al(hi)le(ghijhivHG)lú(f!gwhgh){ia}.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #579)",
      blurb: {
        text: "Cantate Domino draws from verse 2 of Psalm 96, which in the Vulgate reads: \"Cantate Domino, et benedicite nomini ejus; annuntiate de die in diem salutare ejus.\" The antiphon breaks that verse into two parallel calls by placing alleluia between them, and substitutes \"bene nuntiáte\" for the psalm's \"annuntiate.\" The Douay-Rheims argument to the psalm notes it was ordered to be sung when the house was built after the captivity, though its principal reference, the argument adds, is to the building of the church of Christ after redemption from the captivity of Satan.",
        source: "Ps. 96:2 (Vulgate numbering Ps. 95:2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "easter-3-c": {
    communion: {
      title: "Simon Joannis",
      latin: "Simon Joánnis, díligis me plus his? Dómine, tu ómnia nosti : tu scis, Dómine, quia amo te.",
      translation: "Simon, son of John, do you love me more than these? Lord, you know all things: you know, Lord, that I love you.",
      mode: "Communion · 3rd Sunday of Easter · Mode VI",
      reference: "John 21:15, 17",
      gabc: "(c4) SI(ffg)mon(f) Jo(fh)án(hggfg)nis,(g_[oh:h]f) *(,) dí(fh)li(hgh)gis(gfg) me(d) plus(ev.decf) his?(f.) (:) Dó(ixfi~)mi(i_[oh:h]g/hi)ne,(g_[oh:h]f) (,) tu(ixiig) ó(ixi)mni(ih)a(h) no(fh)sti :(hg/hf.) (:) tu(ixjh/j_i//hiG'F) scis,(fg'h) (,) Dó(hg/hfg)mi(f.e!fwgfg)ne,(gf..) (;) qui(f.d!ewf)a(d_c) a(ixf_e//g_[oh:h]i_[oh:h]g_[oh:h]!hwi)mo(f_[oh:h]g_[oh:h]f_[oh:h]) te.(f.) (::)",
      source: "Graduale Romanum (GregoBase #846)",
      blurb: {
        text: "Simon Joannis draws from two non-consecutive verses of John 21, joining them into a single exchange. The opening words of the chant, \"Simon Joannis, diligis me plus his,\" come from verse 15, the first of three times Jesus asks Peter whether he loves him. The answering words, \"Domine, tu omnia nosti, tu scis quia amo te,\" come from verse 17, Peter's reply to the third asking, the moment when, as John's Gospel notes, Peter was grieved to be questioned a third time. The middle exchange of verse 16 is left out, so the chant compresses the threefold dialogue into one question and one answer.",
        source: "John 21:15, 17 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "easter-4": {
    alleluia: {
      title: "Redemptionem misit Dominus",
      latin: "Allelúia. ℣. Redemptiónem misit Dóminus in pópulo suo.",
      translation: "Alleluia. ℣. The Lord has sent redemption to his people.",
      mode: "Alleluia · 4th Sunday of Easter · Mode II",
      reference: "Ps. 111:9",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. Red(f)em(f)pti(f)ó(f_e/fh!ivHGhiH'Gh_i)nem(i.) (,) mi(ijij)sit(h!jij) Dó(gh'/i_[oh:h]fhv.gh'i)mi(fhG'F)nus(f.) (;) in(fe~) pó(f)pu(f)lo(hg) () * su(hi)o.(i_[oh:h]h/iggf.0) (,) (hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1341). In Eastertide a second Paschal Alleluia follows; only the first is shown.",
      blurb: {
        text: "Psalm 111:9 reads in full: \"He hath sent redemption to his people: he hath commanded his covenant for ever. Holy and terrible is his name.\" The verse sets the sending of redemption within a covenant that endures forever, and closes with an awe-struck declaration about God's name. The Alleluia verse draws on only the first clause, letting the single act of sending redemption stand on its own as the Easter season's proclamation.",
        source: "Ps. 111:9 (Vulgate numbering Ps. 110:9) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Deus Deus meus ad te de luce",
      latin: "Deus, Deus meus, ad te de luce vígilo : et in nómine tuo levábo manus meas, allelúia.",
      translation: "O God, my God, to you do I watch at break of day: and in your name I will lift up my hands, alleluia.",
      mode: "Offertory · 4th Sunday of Easter · Mode II",
      reference: "Ps. 63:2, 5",
      gabc: "(f3) DE(ef)us,(fhffe.) (,) * De(f!gwh)us(h_g) me(hhhvF'E//f!gwh_f)us,(f.) (;) ad(fe~) te(f) de(hg) lu(h_f/ij)ce(hiH'GhvG'FEfe__) (,) ví(fhGF')gi(ef'!gvF'E)lo :(e.) (:) et(hg) in(hi~) nó(i)mi(h)ne(hjIH'GFh') tu(e!hhh/i_[oh:h]h)o(h.) (;) le(fhg)vá(hhhf/ghg)bo(f_e) (,) ma(f/hhh)nus(fhGF') me(f)as,(fhGF.) (;) al(fg)le(e/hhhhiH//E'//f/hhh_f/hihi)lú(f_[oh:h]g_[oh:h]f_[oh:h]){ia}.(f.) (::)",
      source: "Graduale Romanum (GregoBase #924)",
      blurb: {
        text: "Deus Deus meus draws from two verses of Psalm 63 that are not adjacent. The opening phrase comes from the first half of verse 2, leaving behind the rest of that verse: \"For thee my soul hath thirsted; for thee my flesh, O how many ways!\" Verses 3 and 4 are passed over entirely. The chant then reaches forward to verse 5, taking only its second clause, \"and in thy name I will lift up my hands,\" and setting aside the first: \"Thus will I bless thee all my life long.\" A cry of early-morning seeking is joined directly to a gesture of lifted hands.",
        source: "Ps. 63:2, 5 (Vulgate numbering Ps. 62:2, 5) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Ego sum pastor bonus",
      latin: "Ego sum pastor bonus, allelúia : et cognósco oves meas, et cognóscunt me meae, allelúia, allelúia.",
      translation: "I am the good shepherd, alleluia: and I know my sheep, and mine know me, alleluia, alleluia.",
      mode: "Communion · 4th Sunday of Easter · Mode II",
      reference: "John 10:14",
      gabc: "(f3) E(ggh)go(f!gwh) sum(he~) *() pa(ggh)stor(hf~) bo(g!ihi)nus,(ggh.) (,) al(g)le(e)lú(ghG~'F~){ia} :(f.) (:) et(e) co(fg~)gnó(g)sco(f/giffe) o(gi)ves(h) me(ijI'G)as,(g.) (;) et(e) co(fg~)gnó(g)scunt(f) me(e) me(efg)ae,(ggf.0) (;) al(f)le(f)lú(ede){ia},(c.) (,) al(ef~)le(f)lú(f_[oh:h]g_[oh:h]f_[oh:h]){ia}.(f.) (::)",
      source: "Graduale Romanum (GregoBase #95)",
      blurb: {
        text: "Ego sum pastor bonus draws on John 10:14 but departs slightly from the Clementine Vulgate, which reads \"cognosco meas,\" meaning \"I know mine.\" The chant inserts \"oves\" to give \"cognósco oves meas,\" meaning \"I know my sheep,\" spelling out what the Latin pronoun implies. The verse that follows in the Gospel, John 10:15, continues with the words \"and I lay down my life for my sheep,\" a promise the antiphon leaves just outside its frame.",
        source: "John 10:14 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "easter-5": {
    alleluia: {
      title: "Dextera Dei fecit virtutem",
      latin: "Allelúia. ℣. Déxtera Dei fecit virtútem : déxtera Dómini exaltávit me.",
      translation: "Alleluia. ℣. The right hand of God has wrought strength: the right hand of the Lord has exalted me.",
      mode: "Alleluia · 5th Sunday of Easter · Mode IV",
      reference: "Ps. 118:16",
      gabc: "(c4) AL(dfddc~)le(f)lú(gh~){ia}.(h!iw!jvHGhvGFgge.) *(,) ij.(e!gwhgh//g!hw!ivHGh.//de!f'g//fh/ghffe.) (::) ℣. Déx(h)te(ghG'E)ra(g) De(fg!hvED'ewfef)i(e[ll:1]d..) (;) fe(de!f'g/hgh)cit(ffe) vir(dc~)tú(d!ewfef)tem :(e[ll:1]d..) (:) déx(c)te(d)ra(f_e) Dó(fg)mi(gvF'EfvED'e)ni(e[ll:1]d..) *(;) ex(dfdd)al(dc~)tá(f)vit(gh~) me.(h!iw!jvHGhvGFgge.) (,) (e!gwhgh//g!hw!ivHGh.//de!f'g//fh/ghffe.) (::)",
      source: "Graduale Romanum (GregoBase #159). In Eastertide a second Paschal Alleluia follows; only the first is shown.",
      blurb: {
        text: "Psalm 118:16 repeats the Lord's right hand three times, but Dextera Dei fecit virtutem stops after its second phrase. The Alleluia for the fifth Sunday of Easter keeps strength and exaltation together in a brief acclamation.",
        source: "Ps. 118:16 (Vulgate numbering Ps. 117:16) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Jubilate Deo universa terra",
      latin: "Jubiláte Deo univérsa terra : psalmum dícite nómini ejus : veníte, et audíte, et narrábo vobis, omnes qui timétis Deum, quanta fecit Dóminus ánimae meae, allelúia.",
      translation: "Shout joyfully to God, all the earth: sing a psalm to his name: come and hear, all you that fear God, and I will tell you what great things the Lord has done for my soul, alleluia.",
      mode: "Offertory · 5th Sunday of Easter · Mode I",
      reference: "Ps. 66:1-2, 16",
      gabc: "(c4) JU(c)bi(d)lá(ixdh'!iv)te(h) *() De(hjh)o(ghggf.0) (;) u(ghg)ni(hg)vér(hv.g!jjj)sa(fg) ter(ixfh!jvHGig/hi)ra :(h.) (:) ju(h)bi(h)lá(jhjGF'fvD'C)(,)(ddc/dd//cd!ff//g/hhg/hh)(,)(fg/hhh//gh!jjj//ij/kkj)(,)([oll:1;7.4mm]lk/lmK[oll:0]J'jvIH'k)te(kjjvIH) De(hjh)o(ghggf.0) (;) u(ghg)ni(hg)vér(hv.g!jjj)sa(fg) ter(fh!jvHGig/h!jjh)(,)(jjvH'Gh!iwj_i)ra :(jjjvIH'jggf.0) (:) psal(fh)mum(hg~) dí(h_g/jjj)ci(h_g)te(ghGF.) (,) nó(fg/h_f/ghg___//jkj)mi(jjji)ni(hg) e(gv.fhhghv.gh!jjjh~)jus :(hhgh.) (:) ve(jk)ní(klkl)te,(j_h) (,) et(h_g) au(gh)dí(hj/kjk)te,(k_[hl:1]h_[hl:1]) (,) et(jk[oll:1{1]/lkl[oll:}]) nar(j_h)rá(hj)bo(jjj) vo(hhg)bis,(g_[oh:h]fg.) (;) o(fg/h_f//ghg___//jkj//j'j)mnes(hjG'Fg.) (,) qui(f) ti(ghg)mé(h_fg)tis(fgd) De(fhg___)um,(g.) (:) quan(hj)ta(jji) fe(jvIH)cit(h_g) Dó(g_[oh:h]e)mi(fgffg)nus(gd..) (;) á(df/gfgf//f'ffd/g_[oh:h]ef.)(,)(hjg)ni(fdf)mae(f) me(fffgvFD)ae,(d.) (:) al(fg~)le(e_[oh:h][ll:1]d/fh//ghgefghfgvFE)lú(d!ewfef){ia}.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #937)",
      blurb: {
        text: "Jubilate Deo universa terra draws from Psalm 66, but not from three consecutive verses. Verses 1 and 2 open with a universal call to praise, and the chant then leaps to verse 16, where the psalmist turns personal: \"Come and hear, all ye that fear God, and I will tell you what great things he hath done for my soul.\" The intervening verses, including vows of sacrifice, are set aside entirely, so the offertory moves directly from the outward summons to the inward testimony.",
        source: "Ps. 66:1-2, 16 (Vulgate numbering Ps. 65:1-2, 16) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Tanto tempore vobiscum sum",
      latin: "Tanto témpore vobíscum sum, et non cognovístis me? Philíppe, qui videt me, videt et Patrem, allelúia : non credis quia ego in Patre, et Pater in me est? allelúia, allelúia.",
      translation: "Have I been so long a time with you, and you have not known me? Philip, he who sees me sees the Father also, alleluia: do you not believe that I am in the Father, and the Father in me? alleluia, alleluia.",
      mode: "Communion · 5th Sunday of Easter · Mode IV",
      reference: "John 14:9-10",
      gabc: "(c4) TAn(d)to(fd) tém(f)po(f)re(e_0[uh:l]//fgfeef/ded.) (,) * vo(d)bís(eef)cum(d) sum,(bxcdccb.0) (;) et(df~) non(f) co(f)gno(fd)ví(f)stis(fg~) me?(e.) (:) Phi(f)líp(f)pe,(e_0[uh:l]//fgfeef/ded.) (,) qui(f) vi(gh)det(h) me,(ixhg/hih.) (,) vi(h)det(g') et(f) Pa(fff)trem,(fd~) al(fg~)le(e)lú(egff){ia} :(fe..) (:) non(f_) cre(dgF'E)dis(ff) (,) qui(d)a(e) e(gh'i)go(h) in(hg~) Pa(hj)tre,(ijI'HivHGh.) (;) et(e) Pa(gh)ter(g) in(e[ll:1]d~) me(evDC'd) est?(eef.) (;) al(c)le(d)lú(f){ia},(f_d) (,) al(fg)le(ixgv.fghig/h_g)lú(egff){ia}.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #921)",
      blurb: {
        text: "Both verses quoted here are trimmed. Verse 9 in full ends with a third question, \"How sayest thou: Shew us the Father?\", which the chant drops. Verse 10 in full continues, \"The words that I speak to you, I speak not of myself. But the Father who abideth in me, he doth the works,\" and that too is left aside. What remains are the two questions directed at Philip alone: have you not known me, and do you not believe?",
        source: "John 14:9-10 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "easter-5-b": {
    communion: {
      title: "Ego sum vitis vera",
      latin: "Ego sum vitis vera et vos pálmites, allelúia : qui manet in me, et ego in eo, hic fert fructum multum, allelúia, allelúia.",
      translation: "I am the true vine and you the branches, alleluia: he who abides in me, and I in him, the same bears much fruit, alleluia, alleluia.",
      mode: "Communion · 5th Sunday of Easter · Mode VIII",
      reference: "John 15:5",
      gabc: "(c3)E(ggh)go(fgwh) sum(he~) *() vi(ggh)tis(hf~) ve(fihi)ra(ghf___) (,) et(g) vos(e/fg) pál(fg)mi(e/fg)tes,(f.) (;) qui(g) ma(i)net(h) in(iji) me,(g.) (,) et(h) e(i)go(h) in(gh) e(f)o,(ed/ef/fe.) (;) hic(g) fert(f.//gif/fe) fru(gi)ctum(h) mul(ijIG)tum,(g.) (;) al(g)le(gv.//e/gi)lú(ihi)ia,(g.) (,) al(h)le(f.//e/fg)lú(gf/fef)ia.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #3314)",
      blurb: {
        text: "Ego sum vitis vera draws on a single verse, John 15:5, but quietly reshapes it. The Vulgate reads \"Ego sum vitis, vos palmites,\" while this chant opens instead with \"Ego sum vitis vera,\" adding the word that means \"true.\" It also drops the verse's closing clause entirely: \"quia sine me nihil potestis facere,\" for without me you can do nothing.",
        source: "John 15:5 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "easter-5-c": {
    communion: {
      title: "Ego sum vitis vera",
      latin: "Ego sum vitis vera et vos pálmites, allelúia : qui manet in me, et ego in eo, hic fert fructum multum, allelúia, allelúia.",
      translation: "I am the true vine and you the branches, alleluia: he who abides in me, and I in him, the same bears much fruit, alleluia, alleluia.",
      mode: "Communion · 5th Sunday of Easter · Mode VIII",
      reference: "John 15:5",
      gabc: "(c3)E(ggh)go(fgwh) sum(he~) *() vi(ggh)tis(hf~) ve(fihi)ra(ghf___) (,) et(g) vos(e/fg) pál(fg)mi(e/fg)tes,(f.) (;) qui(g) ma(i)net(h) in(iji) me,(g.) (,) et(h) e(i)go(h) in(gh) e(f)o,(ed/ef/fe.) (;) hic(g) fert(f.//gif/fe) fru(gi)ctum(h) mul(ijIG)tum,(g.) (;) al(g)le(gv.//e/gi)lú(ihi)ia,(g.) (,) al(h)le(f.//e/fg)lú(gf/fef)ia.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #3314)",
      blurb: {
        text: "Ego sum vitis vera draws on a single verse, John 15:5, but quietly reshapes it. The Vulgate reads \"Ego sum vitis, vos palmites,\" while this chant opens instead with \"Ego sum vitis vera,\" adding the word that means \"true.\" It also drops the verse's closing clause entirely: \"quia sine me nihil potestis facere,\" for without me you can do nothing.",
        source: "John 15:5 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "easter-6": {
    alleluia: {
      title: "Surrexit Christus et illuxit",
      latin: "Allelúia. ℣. Surréxit Christus, et illúxit nobis, quos redémit sánguine suo.",
      translation: "Alleluia. ℣. Christ is risen, and has shone upon us, whom he redeemed with his blood.",
      mode: "Alleluia · 6th Sunday of Easter · Mode I",
      reference: "",
      gabc: "(c4) AL(cd~)le(de/fee[ll:1]d)lú(ge/fgFE'e){ia}.(d.) *(;) ij.(f!gwhggegvF'ED'//hggegvF'ED.) (;) (cfe/fgF'ED.//ce/!gff'fvEDee[ll:1]d.0) (::) ℣. Sur(cd~)ré(de!fvED'dc//ef!gvgf)xit(e[ll:1]d/ffe) Chri(d_[oh:h]e_[oh:h]d_[oh:h])stus,(d.) (;) et(ixdhhivHG'hvGE'fvED.) il(c)lú(ef'g)xit(gvF'EDfgF'Ef) no(def)bis,(e[ll:1]d..) (:) quos(h) red(gh)é(j_k/jkjhihgi//gj/ijh/iih)mit(h.) (;) sán(dffe/ffegvF'Ef)gui(def)ne(e[ll:1]d..) *(,) su(f!gwhg)o.(g_[oh:h]egvF'ED'//hggegvF'ED.) (;) (cfe/fgF'ED.//ce/!gff'fvEDee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #633). In Eastertide a second Paschal Alleluia follows; only the first is shown.",
      blurb: {
        text: "Surrexit Christus et illuxit is the first Alleluia for the sixth Sunday of Easter, proclaiming Christ risen and shining upon those redeemed by his blood. The verse brings his rising and the gift of redemption together before the Gospel is heard.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Benedicite gentes",
      latin: "Benedícite, gentes, Dóminum Deum nostrum, et obaudíte vocem laudis ejus : qui pósuit ánimam meam ad vitam, et non dedit commovéri pedes meos : benedíctus Dóminus, qui non amóvit deprecatiónem meam, et misericórdiam suam a me, allelúia.",
      translation: "O bless the Lord our God, you nations, and make the voice of his praise to be heard: who has set my soul to live, and has not let my feet be moved: blessed be the Lord, who has not turned away my prayer, nor his mercy from me, alleluia.",
      mode: "Offertory · 6th Sunday of Easter · Mode II",
      reference: "Ps. 66:8-9, 20",
      gabc: "(f3) BE(c)ne(c)dí(e!fg')ci(e)te(ce) gen(ce/fef)tes(fe..) *(,) Dó(eg/ih)mi(hhh)num(f) De(f!hhhf)um(fe~) no(ef/gfge)strum,(ce..) (;) et(f) ob(e)au(f)dí(hh)te(f_g) vo(e!hhh)cem(h'/ihh) lau(fe~)dis(hh) e(fgF~'E~)jus :(fe..) (:) qui(f) pó(hh)su(hji)it(ijhh/fgf.) (,) á(f!hji)ni(h)mam(hhh) me(fh)am(hhh) ad(h'/ihh) vi(f)tam,(f!gwhf/ghg.) (;) et(f) non(fe~) de(fh)dit(h'/ihh) com(f)mo(fe)vé(fh)ri(h'/ihh) (,) pe(f)des(e!hhh) me(f!gw!hvG'FE'f)os :(ef..) (:) be(e)ne(f)dí(hih)ctus(hhh) Dó(h'/ihh)mi(f)nus,(f_[oh:h]g_[oh:h]f._[oh:h]) (;) qui(ef) non(f/hih) a(hhh)mó(fge)vit(ce) (,) de(f)pre(f)ca(e)ti(f)ó(hh)nem(fg) me(e!hhh)am,(g_[oh:h]ef.) (;) et(f!hhh) mi(h)se(h)ri(f)cór(f!hhh)di(fe)am(efe___) su(ef!hv'1jvIH)am(h.) (,) a(h) me,(h_f/hhh/f_[oh:h]g_[oh:h]f._[oh:h]) (:) al(fg)le(e/hhhhiH//E'//f/hhh_f/hihi)lú(f_[oh:h]g_[oh:h]f_[oh:h]){ia}.(f.) (::)",
      source: "Graduale Romanum (GregoBase #860)",
      blurb: {
        text: "Benedicite gentes draws from Psalm 66, but not continuously: it takes verses 8 and 9, then leaps over ten verses to close with verse 20, joining the call to praise with a thanksgiving for answered prayer. The Gospel of the day, from John 16, has Christ promise the disciples that whatever they ask the Father in his name will be given to them. The offertory then arrives with the psalmist's own witness: blessed be the Lord, who has not turned away my prayer, nor his mercy from me.",
        source: "Ps. 66:8-9, 20 (Vulgate numbering Ps. 65:8-9, 20) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pasc5-0 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Non vos relinquam orphanos",
      latin: "Non vos relínquam órphanos : véniam ad vos íterum, allelúia : et gaudébit cor vestrum, allelúia, allelúia.",
      translation: "I will not leave you orphans: I will come to you again, alleluia: and your heart shall rejoice, alleluia, alleluia.",
      mode: "Communion · 6th Sunday of Easter · Mode V",
      reference: "John 14:18; 16:22",
      gabc: "(c3) NON(fh~) vos(h) re(gh)lín(f)quam(fe) *() ór(fh)pha(efED'e)nos :(e[ll:1]d..) (;) vé(f)ni(ef)am(d) ad(ef~) vos(f_d) í(gxfgf)te(ef)rum,(f.) (,) al(f)le(e)lú(gxfgf){ia} :(e.) (:) et(f) gau(h)dé(h)bit(hhh) cor(fg!hvGE'gxfw!gvFE) ve(de!fvED'e)strum,(e[ll:1]d..) (:) al(df)le(hh!iwj)lú(jiihi){ia},(ih..) (;) al(gxdf)le(ehvhf!gw!hvGE'fw!gvFE)lú(de!fvED'e){ia}.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #981)",
      blurb: {
        text: "Non vos relinquam orphanos places Christ's promise to come again beside the heart's promised rejoicing. The communion for the sixth Sunday of Easter holds absence and return within one short Alleluia.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "viri-galilaei": {
    alleluia: {
      title: "Ascendit Deus in jubilatione",
      latin: "Allelúia. ℣. Ascéndit Deus in jubilatióne, et Dóminus in voce tubae.",
      translation: "Alleluia. ℣. God is ascended with jubilee, and the Lord with the sound of trumpet.",
      mode: "Alleluia · The Ascension of the Lord · Mode IV",
      reference: "Ps. 47:6",
      gabc: "(c4) AL(fd~)le(ef'g)lú(hgh){ia}.(ixhiHG'gf.0) *(,) ij.(ixhiHG'ge./ghGF'Ef_gffe.) (::) ℣. A(h)scén(h)dit(g) De(ghG'E)us(fgfg.) (,) in(gh~) ju(h)bi(g)la(ghg'/hf)ti(e[ll:1]d)ó(egF'D)ne,(d.) (:) et(dc~) Dó(f)mi(ghg)nus(ixhiG'Eg./hiF'D//fffdgvFE.) (,) (df/h_f/g_[oh:h]efv.df!gvFEfe..) (:) in(fd~) vo(ef'g)ce(gdgvFE) ()~~* tu(fd/ef!g'h)bae.(ixhiHG'gf.0) (,) (ixhiHG'/!ge./ghGF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #17). In Eastertide a second Paschal Alleluia follows; only the first is shown.",
      blurb: {
        text: "Ascendit Deus in jubilatione draws a single line from Psalm 47, verse 6, a psalm whose argument is the Gentiles invited to praise God for the establishment of the kingdom of Christ. The verse immediately before it speaks of God choosing the beauty of Jacob as his inheritance, and the verse immediately after reads \"Sing praises to our God, sing ye: sing praises to our king, sing ye,\" the cry of universal praise that the single quoted verse both crowns and sets in motion.",
        source: "Ps. 47:6 (Vulgate numbering Ps. 46:6) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Viri Galilaei",
      latin: "Viri Galilaéi, quid admirámini aspiciéntes in caelum? Hic Jesus, qui assúmptus est a vobis in caelum, sic véniet, quemádmodum vidístis eum ascendéntem in caelum, allelúia.",
      translation: "You men of Galilee, why do you wonder, looking up to heaven? This Jesus, who is taken up from you into heaven, shall so come, as you have seen him going up into heaven, alleluia.",
      mode: "Offertory · The Ascension of the Lord · Mode I",
      reference: "Acts 1:11",
      gabc: "(c4)Vi(fffvDCdf/f/hgh)ri(fgf.) *(,) Ga(f)li(ghg)l'ae(hv_//fhg)i,(ixhig/ff/ded.) (;) quid(f) ad(f)mi(fg)rá(ge/fd)mi(cd)ni(d.) (,) a(de)spi(c)ci(df)én(f/fd//f/fd/d'/dgf/fde)tes(c.) (;) in(f) cæ(hgh/fh_//gh/FE/gd__/fv_//ef/DC/d)lum?(d.) (:) Hic(cd!fvfv) Je(g)sus,(fv_//egf'/efd.) (,) qui(c) as(d)súm(f)ptus(f) est(fe) a(cd) vo(d!ewfd)bis(d.) (,) in(c!df) cæ(f/fd/f/fd/d'/dgf/fd/ec)lum,(c.) (;) sic(da//cd/fvED/efd) vé(dgf/fd)ni(edec)et,(c.) (,) que(d)mád(cd~)mo(d)dum(d) vi(d)dí(d)stis(cd) e(d!ewfd)um(d.) (;) a(c)scen(d)dén(ixdh.//j/jh//gih/ig.//f!gh/j/jg,fhgh_//fh!jvGF/fdf.///eg/hjh/jh/hgh)tem(f.) (;) in(e!fg) cæ(gvED/fv_//efd)lum,(dfd/dc.) (:) al(cd)le(fgf___/hv_//gh/FD.////cd/fef/ge__,hg__/efd'//fvED/ed)lú(cd~)ia.(d.) (::)",
      source: "Graduale Romanum (GregoBase #3315)",
      blurb: {
        text: "Viri Galilaei draws its words from Acts 1:11, but it quietly alters the biblical wording. Where the Vulgate reads \"quid statis aspicientes in cælum,\" asking why the disciples stand looking into heaven, the chant substitutes \"quid admirámini aspiciéntes in caelum,\" shifting the sense from a posture to an interior movement of wonder or amazement. The chant also replaces the verse's closing word \"euntem,\" going, with \"ascendéntem,\" ascending, and adds the Alleluia, which is not present in the source text.",
        source: "Acts 1:11 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Data est mihi omnis potestas",
      latin: "Data est mihi omnis potéstas in caelo et in terra, allelúia : eúntes, docéte omnes gentes, baptizántes eos in nómine Patris, et Fílii, et Spíritus Sancti, allelúia, allelúia.",
      translation: "All power is given to me in heaven and on earth, alleluia: going therefore, teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Spirit, alleluia, alleluia.",
      mode: "Communion · The Ascension of the Lord · Mode I",
      reference: "Matt. 28:18-19",
      gabc: "(c4) DA(f)ta(fe) est(d) mi(fg)hi(f.) *(,) o(gh)mnis(f) pot(ef)é(ced)stas(d.) (;) in(dc~) cae(ixfh)lo(gh/i_[oh:h]h) et(g) in(ge~) ter(fg)ra,(f.) (,) al(fg)le(gffd)lú(d!ewfd~){ia} :(d.) (:) e(df)ún(fef)tes,(d) do(f)cé(gh)te(hf) o(ixhi)mnes(h) gen(ghG~'F~)tes,(gf..) (;) ba(g)pti(g)zán(g)tes(g) e(hvGF)os(f.) (,) in(df~) nó(fef)mi(dc)ne(c.) Pa(f!hgh)tris,(g_[oh:h]f) (,) et(df~) Fí(fef)li(dc)i,(c.) (,) et(e) Spí(g)ri(h)tus(ef) San(c_[oh:h]e_[oh:h]d_[oh:h])cti,(d.) (;) al(ixhi)le(h)lú(hgh){ia},(f_d) (,) al(fg)le(efghfgvFE)lú(d!ewfef){ia}.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1260)",
      blurb: {
        text: "Data est mihi omnis potestas draws from the closing verses of Matthew 28. The Communion antiphon quotes verses 18 and 19 directly, stopping before verse 20, which continues: \"Teaching them to observe all things whatsoever I have commanded you. And behold I am with you all days, even to the consummation of the world.\" That omitted verse is the promise that frames the very commission the antiphon sings.",
        source: "Matt. 28:18-19 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "viri-galilaei-b": {
    communion: {
      title: "Signa eos qui in me credunt",
      latin: "Signa eos qui in me credunt, haec sequéntur : daemónia ejícient : super aegros manus impónent, et bene habébunt.",
      translation: "These signs shall follow them that believe in me: they shall cast out devils: they shall lay their hands upon the sick, and they shall recover.",
      mode: "Communion · The Ascension of the Lord · Mode VII",
      reference: "Mark 16:17-18",
      gabc: "(c3) SI(i)gna(ig) e(i)os(i_[uh:l]j) *(,) qui(i) in(j) me(iih) cre(j/llij)dunt,(jiigi.) (;) haec(ij) se(iv.high)quén(f!gw!hv_G~F~)tur :(gf..) (:) dae(f)mó(fi)ni(i)a(i) e(ig)í(ij)ci(ij)ent :(ij) (;) su(ih)per(i) ae(j/llij)gros(j.) (,) ma(j)nus(i) im(ig~)pó(hihh)nent,(hg..) (;) et(hi/ef~) be(f)ne(efE'D) ha(e.f!gw!hvGF'gw!hvGF)bé(ef!gvFE'f)bunt.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #608)",
      blurb: {
        text: "Signa eos is drawn from Mark 16:17-18, the words Jesus spoke to his disciples just before the Ascension described in the very next verse, Mark 16:19. The chant condenses those two verses, keeping the casting out of devils and the healing of the sick, but setting aside three of the five signs the passage lists: speaking in new tongues, taking up serpents, and drinking deadly things without harm. The verse immediately following, which the chant does not quote, runs in the Vulgate: \"assumptus est in cælum, et sedet a dextris Dei,\" he was taken up into heaven and sits at the right hand of God.",
        source: "Mark 16:17-18 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "viri-galilaei-c": {
    communion: {
      title: "Psallite Domino",
      latin: "Psállite Dómino, qui ascéndit super caelos caelórum ad Oriéntem, allelúia.",
      translation: "Sing to the Lord, who mounts above the heaven of heavens to the East, alleluia.",
      mode: "Communion · The Ascension of the Lord · Mode I",
      reference: "Ps. 68:33-34",
      gabc: "(c4) PSál(d)li(c)te(dfe) Dó(fg)mi(gvF'EfvED'e)no,(e[ll:1]d..) (;) * qui(f) a(gh)scén(hV!gh~)dit(h.) (,) su(h!iwji/jkj)per(hf~) cae(ixgiH'G)los(h_g) cae(ef)ló(ixgiH'G)rum(hg..) (,) ad(f_[oh:h]g_[oh:h]e_[oh:h]e[ll:1]d) O(d!ewf!g'h)ri(fe)én(de~)tem,(c.) (;) al(fg~)le(e_[oh:h][ll:1]d/fh//ghgefghfgvFE)lú(d!ewfef){ia}.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #263)",
      blurb: {
        text: "Psallite Domino draws from two consecutive verses of Psalm 68, but selectively. Verse 33 in full calls all the kingdoms of the earth to sing, but the antiphon keeps only \"psallite Domino\" and moves straight into verse 34, where it also stops short: the full verse continues with a promise that God will give his voice a voice of power, yet the antiphon ends at \"ad orientem,\" the eastward ascent itself. The Gospel sung just before this Communion, from Mark 16, closes with the same event in plain narrative: \"assúmptus est in cœlum, et sedet a dextris Dei.\"",
        source: "Ps. 68:33-34 (Vulgate numbering Ps. 67:33-34) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pasc5-4 (Missale Romanum formulary)",
      },
    },
  },
  "easter-7": {
    alleluia: {
      title: "Regnavit Dominus super omnes gentes",
      latin: "Allelúia. ℣. Regnávit Dóminus super omnes gentes : Deus sedet super sedem sanctam suam.",
      translation: "Alleluia. ℣. The Lord has reigned over all nations: God sits upon his holy throne.",
      mode: "Alleluia · 7th Sunday of Easter (after the Ascension) · Mode I",
      reference: "Ps. 47:9",
      gabc: "(c4) AL(de)le(dc)lú(e!g'h~){ia}.(hvGFD.1) *(,) ij.(fvECeg//hvGFge//fvECee[ll:1]d.0) (::) ℣. Re(dc/e[ll:1]d/fg~)gná(e[ll:1]d)vit(fe) Dó(dc)mi(efd)nus(d.) (,) su(hhg)per(evDC) o(de~)mnes(e) gen(c!e'f~)tes :(d.) (:) De(h_g/h!iw!jvIH)us(ge) se(fg)det(e_[oh:h][ll:1]d_[oh:h]) (,) su(f)per(ghg~) se(hvEDfv.ced)dem(d.) *(,) san(de)ctam(dc~) su(e!g'h)am.(hvGFD.1) (,) (fvECeg//hvGFge//fvECee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #405). In Eastertide a second Paschal Alleluia follows; only the first is shown.",
      blurb: {
        text: "Psalm 47 verse 9 reads in the Vulgate, \"Regnabit Deus super gentes,\" a future tense: God shall reign over the nations. The Alleluia verse quietly reshapes it into the past, \"Regnávit Dóminus super omnes gentes,\" the reign already accomplished, and substitutes \"Dóminus\" for \"Deus\" while adding \"omnes\" so that no nation is left outside. Sung on the Sunday after the Ascension, the shift in tense turns a prophecy into a proclamation.",
        source: "Ps. 47:9 (Vulgate numbering Ps. 46:9) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Ascendit Deus in jubilatione",
      latin: "Ascéndit Deus in jubilatióne, Dóminus in voce tubae, allelúia.",
      translation: "God is ascended with jubilee, the Lord with the sound of trumpet, alleluia.",
      mode: "Offertory · 7th Sunday of Easter (after the Ascension) · Mode I",
      reference: "Ps. 47:6",
      gabc: "(c4) A(d_cd)scén(d!ewf)dit(gh) *(,) De(h!iwj/ki'jvHG'hwihi)us(ih..) (;) in(dh/ih) ju(hjhhg)bi(ghgh)la(gfg)ti(gh)ó(j_i/jjj_gjvIH'hg)ne,(ghggf.0) (:) Dó(dh/ih)mi(h!jjh/jggfg)nus(gf..) (,) in(hg~) vo(h_g/jhhfg)ce(f_df) tu(fgf)bae,(fgf.) (;) al(fff_d/f/[1]{/[-1]ix}f/hiH'GF'fe~)le(ghGF'ge/f_d)(,)(fge/fhGF'fd//gf'/gff)lú(dc~){ia}.(d/fff_d/fff/d_[oh:h]e_[oh:h]d._[oh:h]) (::)",
      source: "Graduale Romanum (GregoBase #211)",
      blurb: {
        text: "Ascendit Deus in jubilatione draws a single verse from Psalm 47, a psalm whose argument is the invitation of the Gentiles to praise God for the establishment of the kingdom of Christ. The offertory takes verse 6 alone, setting aside the verses before it, which speak of peoples subdued and nations laid under God's feet, and the verses after it, which call all the earth to sing praises to its king. The chant holds to the moment of ascent itself, surrounded in the psalm by conquest on one side and praise on the other.",
        source: "Ps. 47:6 (Vulgate numbering Ps. 46:6) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Pater cum essem cum eis",
      latin: "Pater, cum essem cum eis, ego servábam eos, quos dedísti mihi, allelúia : nunc autem ad te vénio : non rogo ut tollas eos de mundo, sed ut serves eos a malo, allelúia, allelúia.",
      translation: "Father, while I was with them, I kept them whom you gave me, alleluia: but now I come to you: I pray not that you take them out of the world, but that you keep them from evil, alleluia, alleluia.",
      mode: "Communion · 7th Sunday of Easter (after the Ascension) · Mode IV",
      reference: "John 17:12-13, 15",
      gabc: "(c4) PA(fgf)ter,(eef.) *(,) cum(d) es(g/h'i)sem(h) cum(hg~) e(hjI'G)is,(hg/hih.) (;) e(h)go(ghg) ser(ge~)vá(fg)bam(g) e(gh)os,(g.) (,) quos(fe) de(d)dí(e)sti(d) mi(ded)hi,(c.) (;) al(de~)le(egF'EgvFE)lú(egff){ia} :(fe..) (:) nunc(eef) au(dgf)tem(eef.) ad(e[ll:1]d~) te(gh) vé(jij)ni(hig)o :(g.) (:) non(h) ro(ghg)go(e) ut(f) tol(ixh_i)las(g) e(gh)os(g) de(f) mun(fefvE~D~)do,(e[ll:1]d..) (;) sed(d) ut(f) ser(ixh_i)ves(g) e(ghg___)os(f) a(f) ma(fe)lo,(d.) (;) al(f)le(f_d)lú(e[ll:1]d~){ia},(c.) (,) al(de~)le(egF'EgvFE)lú(egff){ia}.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1091)",
      blurb: {
        text: "Pater cum essem cum eis joins three nonconsecutive verses from John 17: Christ's keeping of those given to him, his return to the Father, and his prayer that they be kept from evil. It is sung after the Ascension.",
        source: "John 17:12-13, 15 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "spiritus-domini": {
    alleluia: {
      title: "Emitte Spiritum tuum",
      latin: "Allelúia. ℣. Emítte Spíritum tuum, et creabúntur : et renovábis fáciem terrae.",
      translation: "Alleluia. ℣. Send forth your Spirit, and they shall be created: and you shall renew the face of the earth.",
      mode: "Alleluia · Pentecost Sunday · Mode IV",
      reference: "Ps. 104:30",
      gabc: "(c4) AL(fd~)le(ef'g)lú(hgh){ia}.(ixhiHG'gf.0) *(,) ij.(ixhiHG'ge./ghGF'Ef_gffe.) (::) ℣. E(h)mít(h)te(ixg'//ivHG'hffe.) (,) Spí(fh)ri(ghg'/hf)tum(e[ll:1]d~) tu(egF'D)um,(d.) (:) et(dc~) cre(f)a(ghg)bún(ixhiG'Eg./hiF'D//fffdgvFE.)(,)(df/h_f/!g_[oh:h]e/!fv.df!gvef~)tur :(e.) (:) et(f) re(f)no(f)vá(ef)bis(f) fá(ef'g)ci(gdgvFE)em(e.) (,) * ter(fd/ef!g'h)rae.(ixhiHG'gf.0) (,) (ixhiHG'ge./ghGF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #99). In Eastertide a second Paschal Alleluia follows; only the first is shown.",
      blurb: {
        text: "Emitte Spiritum tuum draws a single verse from Psalm 104, a long meditation on God's care for creation. The verse sits just after a stark turn: the preceding verse describes God hiding his face, withdrawing breath, and creatures returning to dust. Verse 30 is the reversal of that desolation: \"Thou shalt send forth thy spirit, and they shall be created: and thou shalt renew the face of the earth.\" Sung at Pentecost, the verse carries the weight of everything that precedes it in the psalm.",
        source: "Ps. 104:30 (Vulgate numbering Ps. 103:30) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    sequence: {
      title: "Veni Sancte Spiritus",
      latin: "Veni Sancte Spíritus, et emítte caélitus lucis tuae rádium. Veni pater páuperum, veni dator múnerum, veni lumen córdium. Consolátor óptime, dulcis hospes ánimae, dulce refrigérium. In labóre réquies, in aestu témperies, in fletu solátium. O lux beatíssima, reple cordis íntima tuórum fidélium. Sine tuo númine, nihil est in hómine, nihil est innóxium. Lava quod est sórdidum, riga quod est áridum, sana quod est sáucium. Flecte quod est rígidum, fove quod est frígidum, rege quod est dévium. Da tuis fidélibus, in te confidéntibus, sacrum septenárium. Da virtútis méritum, da salútis éxitum, da perénne gáudium. Amen. Allelúia.",
      translation: "Come, Holy Spirit, and send forth from heaven the ray of your light. Come, father of the poor, come, giver of gifts, come, light of hearts. Best of consolers, sweet guest of the soul, sweet refreshment. In labor, rest; in heat, temperance; in tears, solace. O most blessed light, fill the inmost heart of your faithful. Without your grace, there is nothing in man, nothing that is harmless. Cleanse what is unclean, water what is dry, heal what is wounded. Bend what is rigid, warm what is cold, guide what has strayed. Give to your faithful, who trust in you, the sevenfold gift. Grant the reward of virtue, grant a saving end, grant everlasting joy. Amen. Alleluia.",
      stanzas: [
        { latin: "Veni Sancte Spíritus, / et emítte caélitus / lucis tuae rádium.", translation: "Come, Holy Spirit, and send forth from heaven the ray of your light." },
        { latin: "Veni pater páuperum, / veni dator múnerum, / veni lumen córdium.", translation: "Come, father of the poor, come, giver of gifts, come, light of hearts." },
        { latin: "Consolátor óptime, / dulcis hospes ánimae, / dulce refrigérium.", translation: "Best of consolers, sweet guest of the soul, sweet refreshment." },
        { latin: "In labóre réquies, / in aestu témperies, / in fletu solátium.", translation: "In labor, rest; in heat, temperance; in tears, solace." },
        { latin: "O lux beatíssima, / reple cordis íntima / tuórum fidélium.", translation: "O most blessed light, fill the inmost heart of your faithful." },
        { latin: "Sine tuo númine, / nihil est in hómine, / nihil est innóxium.", translation: "Without your grace, there is nothing in man, nothing that is harmless." },
        { latin: "Lava quod est sórdidum, / riga quod est áridum, / sana quod est sáucium.", translation: "Cleanse what is unclean, water what is dry, heal what is wounded." },
        { latin: "Flecte quod est rígidum, / fove quod est frígidum, / rege quod est dévium.", translation: "Bend what is rigid, warm what is cold, guide what has strayed." },
        { latin: "Da tuis fidélibus, / in te confidéntibus, / sacrum septenárium.", translation: "Give to your faithful, who trust in you, the sevenfold gift." },
        { latin: "Da virtútis méritum, / da salútis éxitum, / da perénne gáudium. Amen. Allelúia.", translation: "Grant the reward of virtue, grant a saving end, grant everlasting joy. Amen. Alleluia." },
      ],
      mode: "Sequence · Pentecost Sunday · Mode I",
      gabc: "(c4) VE(c)ni(d) San(e)cte(f) Spí(e[ll:1]d)ri(c)tus,(d.) (;) Et(f) e(g)mít(h)te(ixi) caé(hvGF')li(g)tus(h.) (;) Lu(c)cis(d) tu(f)ae(g) rá(fvED')di(c)um.(d.) (::) Ve(c)ni(d) pa(e)ter(f) páu(e[ll:1]d)pe(c)rum,(d.) (;) Ve(f)ni(g) da(h)tor(ixi) mú(hvGF')ne(g)rum,(h.) (;) Ve(c)ni(d) lu(f)men(g) cór(fvED')di(c)um.(d.) (::) Con(h)so(j)lá(k)tor(k) ó(ji)pti(j)me,(k.) (;) Dul(j)cis(h) ho(ji)spes(g) á(fe)ni(d)mae,(c.) (;) Dul(g)ce(f) re(gh)fri(g)gé(fvED')ri(c)um.(d.) (::) In(h) la(j)bó(k)re(k) ré(ji)qui(j)es,(k.) (;) In(j) ae(h)stu(ji) tem(g)pé(fe)ri(d)es,(c.) (;) In(g) fle(f)tu(gh) so(g)lá(fvED')ti(c)um.(d.) (::) O(k) lux(k) be(ji)a(j)tís(kj)si(i)ma,(h.) (;) Re(f)ple(d) cor(c)dis(d) ín(f)ti(g)ma(f.) (;) Tu(gh)ó(ixi)rum(h) fi(g)dé(fvED')li(c)um.(d.) (::) Si(k)ne(k) tu(ji)o(j) nú(kj)mi(i)ne,(h.) (;) Ni(f)hil(d) est(c) in(d) hó(f)mi(g)ne,(f.) (;) Ni(gh)hil(ixi) est(h) in(g)nó(fvED')xi(c)um.(d.) (::) La(h)va(j) quod(ih) est(i) sór(ji)di(h)dum,(g.) (;) Ri(h)ga(h) quod(fe) est(f) á(gf)ri(e)dum,(d.) (;) Sa(e)na(g) quod(h) est(g) sáu(j)ci(i)um.(h.) (::) Fle(h)cte(j) quod(ih) est(i) rí(ji)gi(h)dum,(g.) (;) Fo(h)ve(h) quod(fe) est(f) frí(gf)gi(e)dum,(d.) (;) Re(e)ge(g) quod(h) est(g) dé(j)vi(i)um.(h.) (::) Da(k) tu(k)is(g) fi(h)dé(j)li(i)bus,(h.) (;) In(h) te(ixi) con(hg)fi(h)dén(f)ti(g)bus,(f.) (;) Sa(e)crum(g) se(h)pte(d)ná(f)ri(e)um.(d.) (::) Da(k) vir(k)tú(g)tis(h) mé(j)ri(i)tum,(h.) (;) Da(h) sa(ixi)lú(hg)tis(h) éx(f)i(g)tum,(f.) (;) Da(e) per(g)én(h)ne(d) gáu(f)di(e)um.(d.) (::) A(ded)men.(cd..) (,) Al(c)le(f)lú(e[ll:1]d~){ia}.(d.) (::)",
      source: "Graduale Romanum (GregoBase #68)",
      blurb: {
        text: "Veni Sancte Spiritus unfolds as a long sequence of invocations and petitions, moving from light and consolation through cleansing and guidance to the sevenfold gift. Pentecost's sequence ends by asking for virtue, salvation, and lasting joy.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Confirma hoc Deus",
      latin: "Confírma hoc, Deus, quod operátus es in nobis : a templo tuo, quod est in Jerúsalem, tibi ófferent reges múnera, allelúia.",
      translation: "Confirm, O God, what you have wrought in us: from your temple, which is in Jerusalem, kings shall offer presents to you, alleluia.",
      mode: "Offertory · Pentecost Sunday · Mode IV",
      reference: "Ps. 68:29-30",
      gabc: "(c4) COn(d!ewf)fír(f)ma(e'fg) *() hoc(ixghf___//ih/igh) De(e)us,(egf/gffe.) (;) quod(f) o(fgff)pe(df)rá(fff/ghg)tus(gef) es(e_[oh:h][ll:1]d) (,) in(gh) no(g/jjj)bis :(hjhhg.) (:) a(g) tem(gh)plo(h_g) tu(ixgih'ivGF')o,(gffe.) (;) quod(f_e/f_g) est(ixhig'hvF'E) (,) in(gh) Je(gjh)rú(ghf/ghg)sa(fd)lem,(ev.fgfgd.) (:) ti(df/gef)bi(f.) óf(ixf_e/hih'/ih)fe(hhgh)rent(g.) re(df/gef)ges(f.) (,) mú(f_[oh:h]g_[oh:h]e_[oh:h])ne(f/ghf)ra,(ff/ghg.___) (;) al(hg~)le(ixh_f/ih/igh)lú(e){ia}.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #361)",
      blurb: {
        text: "Confirma hoc Deus is the Offertory for Pentecost Sunday. It draws from two consecutive verses of Psalm 68, but begins partway through verse 29: the psalm's full line runs \"Manda, Deus, virtuti tuæ; confirma hoc, Deus, quod operatus es in nobis,\" and the chant drops the opening petition, starting instead at \"confirma.\" The mention of kings offering gifts from Jerusalem carries particular weight at this Mass: the Epistle just proclaimed, Acts 2:1-11, describes the Holy Spirit descending on the disciples gathered in that same city.",
        source: "Ps. 68:29-30 (Vulgate numbering Ps. 67:29-30) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pasc7-0 (Missale Romanum formulary); Divinum Officium, Pasc7-0.txt [Officium heading]",
      },
    },
    communion: {
      title: "Factus est repente",
      latin: "Factus est repénte de caelo sonus adveniéntis spíritus veheméntis, ubi erant sedéntes, allelúia : et repléti sunt omnes Spíritu Sancto, loquéntes magnália Dei, allelúia, allelúia.",
      translation: "Suddenly there came a sound from heaven, as of a mighty wind coming, where they were sitting, alleluia: and they were all filled with the Holy Spirit, speaking the wonderful works of God, alleluia, alleluia.",
      mode: "Communion · Pentecost Sunday · Mode VII",
      reference: "Acts 2:2, 4",
      gabc: "(c3) Fa(e)ctus(ei) est(i) * re(i)pén(i)te(e) de(i) coe(i)lo(h) so(kjki)nus(i) (,) ad(i)ve(i)ni(ij)én(ji~)tis(ji) spí(hj)ri(i)tus(h) ve(h)he(f!gwh)mén(hi~)tis,(h) (;) u(hg)bi(h) e(iji)rant(hih) se(hg)dén(fhG~E~)tes,(fe) (,) al(eg~)le(gv//fhg)lú(efe){ia} :(e) (:) et(e) re(f)plé(hij)ti(i) sunt(i) o(ij~)mnes(i) Spí(j)ri(i)tu(h) San(ij~)cto,(j) (;) lo(i)quén(hg/hih~)tes(f) ma(eg~)gná(ghg//efg)li(fd)a(f) De(efe)i,(e) (;) al(eg~)le(g)lú(hih){ia},(f) (,) al(eg~)le(gv//fhg)lú(efe){ia}.(e) (::)",
      source: "Graduale Romanum (GregoBase #2028) — Vatican (no Solesmes engraving in the dump)",
      blurb: {
        text: "Factus est repente joins Acts 2:2 and 2:4, skipping verse 3 entirely. Verse 3, which lies between the two quoted lines, describes the tongues of fire that appeared and rested on each of the disciples. The antiphon also reworks the close of verse 4: where Acts says they \"began to speak with divers tongues, according as the Holy Ghost gave them to speak,\" the antiphon ends instead with \"loquéntes magnália Dei,\" speaking the wonderful works of God.",
        source: "Acts 2:2, 4 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "dum-sanctificatus": {
    alleluia: {
      title: "Emitte Spiritum tuum",
      latin: "Allelúia. ℣. Emítte Spíritum tuum, et creabúntur : et renovábis fáciem terrae.",
      translation: "Alleluia. ℣. Send forth your Spirit, and they shall be created: and you shall renew the face of the earth.",
      mode: "Alleluia · Pentecost Sunday (Vigil Mass) · Mode IV",
      reference: "Ps. 104:30",
      gabc: "(c4) AL(fd~)le(ef'g)lú(hgh){ia}.(ixhiHG'gf.0) *(,) ij.(ixhiHG'ge./ghGF'Ef_gffe.) (::) ℣. E(h)mít(h)te(ixg'//ivHG'hffe.) (,) Spí(fh)ri(ghg'/hf)tum(e[ll:1]d~) tu(egF'D)um,(d.) (:) et(dc~) cre(f)a(ghg)bún(ixhiG'Eg./hiF'D//fffdgvFE.)(,)(df/h_f/!g_[oh:h]e/!fv.df!gvef~)tur :(e.) (:) et(f) re(f)no(f)vá(ef)bis(f) fá(ef'g)ci(gdgvFE)em(e.) (,) * ter(fd/ef!g'h)rae.(ixhiHG'gf.0) (,) (ixhiHG'ge./ghGF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #99). In Eastertide a second Paschal Alleluia follows; only the first is shown.",
      blurb: {
        text: "Emitte Spiritum tuum draws its single verse from Psalm 104, a hymn to God's providential care of all creation. The verses just before it in that psalm describe creatures failing and crumbling to dust when God withdraws his breath; verse 30 then turns to the same Spirit's renewing power. Sung at the Pentecost Vigil, the verse carries that contrast with it: the Spirit who restores creation is the same Spirit about to be poured out on the Church.",
        source: "Ps. 104:30 (Vulgate numbering Ps. 103:30) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Emitte Spiritum tuum",
      latin: "Emítte Spíritum tuum, et creabúntur, et renovábis fáciem terrae : sit glória Dómini in saécula, allelúia.",
      translation: "Send forth your Spirit, and they shall be created, and you shall renew the face of the earth: may the glory of the Lord endure forever, alleluia.",
      mode: "Offertory · Pentecost Sunday (Vigil Mass) · Mode VIII",
      reference: "Ps. 104:30-31",
      gabc: "(c4) E(d_cd)mít(d!ewf)te(fg) (,) * Spí(fh/jh)ri(g!hw!ivHG')tum(h) tu(fg!hvhg)um,(h/jjj) (;) et(g_[oh:h]f) cre(fh/ji)a(jkj)bún(jjjhiv_[oh:h]H~G~)tur,(hg..) (:) et(f) re(fh!jkj)no(j)vá(jkjhkj)bis(j'//kj'/ki'jvH'Gh.) (;) fá(gh/ji)ci(jkjj)em(hj) ter(jjj//lvKJkvJI)rae :(i.) (:) sit(g/jjj//jkj) gló(kkj)ri(ij'k)a(kljjh/j_i) Dó(jkJ'H)mi(h_g/j_i)ni(j.) (;) in(jv_I~H~) saé(jvv//jj//jjj)cu(gh!ivGF)la,(f.) (;) al(h!iwj)le(jv.jjj_ghvGFg.)(,)(jjvIH'iw!jvIH)lú(hg~){ia}.(gjh/ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #1176)",
      blurb: {
        text: "Emitte Spiritum tuum draws its two verses from Psalm 104, though it trims the closing clause of verse 31. The psalm's own line reads \"sit gloria Domini in saeculum; laetabitur Dominus in operibus suis,\" and the offertory keeps the first half while setting aside \"laetabitur Dominus in operibus suis,\" the Lord shall rejoice in his works. The verses immediately before in the psalm give the petition its edge: verse 29 pictures creatures whose breath God takes away, failing and returning to dust. At this Mass the offertory is sung between the Epistle, which is the Acts account of the Spirit descending at Pentecost, and the Gospel from John 14, in which Jesus promises the Father will send the Holy Spirit.",
        source: "Ps. 104:30-31 (Vulgate numbering Ps. 103:30-31) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pasc7-0 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Ultimo festivitatis die",
      latin: "Ultimo festivitátis die dicébat Jesus : Qui in me credit, flúmina de ventre ejus fluent aquae vivae. Hoc autem dixit de Spíritu, quem acceptúri erant credéntes in eum, allelúia, allelúia.",
      translation: "On the last day of the feast Jesus said: He who believes in me, out of his belly shall flow rivers of living water. Now this he said of the Spirit, which they should receive who believed in him, alleluia, alleluia.",
      mode: "Communion · Pentecost Sunday (Vigil Mass) · Mode V",
      reference: "John 7:37-39",
      gabc: "(c3) UL(f)ti(efE'C)mo(c.) *() fe(cb)sti(e)vi(fh)tá(h)tis(hf~) di(hi!jvIH'i)e(ih..) (;) di(h)cé(h)bat(h_g) Je(f)sus :(g./hif.1) (;) Qui(fe) in(h) me(jij) cre(hi!jvIH'i)dit,(ih..) (;) flú(j)mi(i)na(h) de(g') ven(h)tre(f') e(h)jus(e.) (,) flu(fgf)ent(ef~) a(fvfef//hhh_f)quae(ef) vi(f_[oh:h]g_[oh:h]f_[oh:h])vae.(f.) (:) Hoc(h_f) au(hi)tem(i) di(hi)xit(h.) de(i) Spí(k)ri(jk)tu,(i.) (;) quem(h) ac(hg)ce(f)ptú(fi)ri(i) e(hihh)rant(ef~) (,) cre(f)dén(ef'h~)tes(h) in(gxhvFE'fw!gvFE) e(de!fvED'e)um,(e[ll:1]d..) (:) al(df)le(hh!iwj)lú(jiihi){ia},(ih..) (;) al(df)le(gxehvhf!gw!hvGE'fw!gvFE)lú(de!fvED'e){ia}.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #255)",
      blurb: {
        text: "Ultimo festivitatis die hears Christ promise living water to the thirsty and identifies that water with the Spirit believers will receive. At Pentecost's Vigil Mass, the Communion holds thirst, faith, and the Spirit's coming within the last day of the feast.",
        source: "John 7:37-39 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },

  /* ===================================================================
   * Temporal cycle — Lent & Holy Week through Holy Thursday (the
   * Lenten temporal keys already carrying an introit in
   * data/introits.js). Latin = GregoBase Solesmes (Graduale Romanum),
   * gabc pulled by id; assignments per the modern Graduale Romanum,
   * confirmed on gregorien.info's Vatican-II calendar. Lent has a
   * Gradual + Tract (no Alleluia); Holy Thursday has no Offertory. The
   * Scrutiny Masses split by year — base = Year A, with feastKey-b/-c
   * carrying only the differing Offertory/Communion. See
   * sources/gregobase/build-lent.py.
   * =================================================================== */
  "misereris": {
    gradual: {
      title: "Miserere mei Deus",
      latin: "Miserére mei Deus, miserére mei : quóniam in te confídit ánima mea. ℣. Misit de caelo, et liberávit me : dedit in oppróbrium conculcántes me.",
      translation: "Have mercy on me, O God, have mercy on me: for my soul trusts in you. ℣. He has sent from heaven and delivered me: he has made them a reproach that trampled upon me.",
      mode: "Gradual · Ash Wednesday · Mode I",
      reference: "Ps. 57:2, 4",
      gabc: "(c4) MI(d)se(dv.ced)ré(d)re(d.) * me(fffddc)i(d.) (,) De(f)us,(fv.d!f'g/fffd/ff/ge'fvDC'fd'/e[ll:1]ddc.) (:) mi(cf)se(gfg)ré(ixg_[oh:h]f/g/igh)re(h) me(ixjhhg/hiGF')(,)(gh!jjvHF'//hvGF'fvED')i :(d/ffd/fgf/!f'f/ded.) (:) quó(d_c/f!gwhgh)ni(hjH'G)am(g.) (,) in(gh) te(fg) con(ge/fhGF')fí(gffe)dit(d//ffd/fge'/fgd'/e[ll:1]ddc.) (:) á(d_c/f!gwhgh)ni(hvGF'fvED')ma(d!f/[1]{/[-1]ix}f/hiGF'hvGF') me(gffvD'Cffc)(,)(fgfg)a.(ixhg/hiGF'ghgh'//jvHG'hvF'Dfff/d_[oh:h]e_[oh:h]d._[oh:h]) (::) ℣. Mi(dh)sit(h) de(hg) cae(ixhv.fh!ivHGhv.)(,)(fghjij//h!jjjvGFh./jjh//jjg/jj)lo,(h_[oh:h]i_[oh:h]h._[oh:h]) (;) et(hj) li(hgh)be(gfg)rá(hhg/hhg/jj)vit(h_[oh:h]i_[oh:h]h_[oh:h]) me :(h.) (:) de(j)dit(h) in(f) op(ghg)pró(h_f/gh!jv.ijh.1)(,)(ixjjvH'G//hiG'F//ghF'Dfv.e!gwhgh)bri(h)um(ixhf/higff/ded.) (;) con(d!fffd~)cul(ef)cán(ixghgh/!hg/!hv./!fh!ivGF'E//f!gwh!ivH~G~)tes(hg__) (,) * me.(ixhg/hiGF'ghgh'//jvHG'hvF'Dfff/d_[oh:h]e_[oh:h]d._[oh:h]) (::)",
      source: "Graduale Romanum (GregoBase #754)",
      blurb: {
        text: "Miserere mei Deus draws from Psalm 57, though not continuously: verse 3, \"I will cry to God the most high; to God who hath done good to me,\" is skipped entirely. Both verses that are used are also cut short, with verse 2 dropping its second half, \"And in the shadow of thy wings will I hope, until iniquity pass away,\" and verse 4 ending before its closing words, \"God hath sent his mercy and his truth.\" What remains is stripped to its essentials: a plea for mercy grounded in trust, and a single act of divine rescue.",
        source: "Ps. 57:2, 4 (Vulgate numbering Ps. 56:2, 4) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    tract: {
      title: "Domine non secundum",
      latin: "Dómine, non secúndum peccáta nostra, quae fécimus nos : neque secúndum iniquitátes nostras retríbuas nobis. ℣. Dómine, ne memíneris iniquitátum nostrárum antiquárum : cito antícipent nos misericórdiae tuae, quia páuperes facti sumus nimis. ℣. Ádjuva nos, Deus salutáris noster : et propter glóriam nóminis tui, Dómine, líbera nos : et propítius esto peccátis nostris, propter nomen tuum.",
      translation: "O Lord, repay us not according to the sins we have committed: nor according to our iniquities. ℣. O Lord, remember not our former iniquities: let your mercies speedily go before us, for we are become exceeding poor. ℣. Help us, O God our Saviour: and for the glory of your name, O Lord, deliver us: and forgive us our sins for your name's sake.",
      mode: "Tract · Ash Wednesday · Mode II",
      reference: "Ps. 103:10",
      gabc: "(f3) DO(f)mi(efE'C)ne,(efeffe//f!gwhghhg/h_f//ghghf.) (;) * non(f) se(f)cún(f)dum(efE'C) pec(e.f!gwh)cá(h)ta(gf) no(g)stra,(f/gh/iffe.) (;) quae(e) fé(gh)ci(f)mus(f_e/f!gwh'!iv) nos :(hg/hiih.0) (:) ne(e)que(gh) se(f)cún(fg~)dum(f) in(f)i(f)qui(f)tá(fg)tes(f) no(f_e/f!gwh'!iv)stras(hg/hiih.0) (;) re(ehg)trí(hihhe)bu(fgf)as(hg~) no(hvGF)bis.(fefEC//fefggf.0) (::) ℣. Dó(fhg)mi(hi)ne,(ijIH'ihh'hhvGEf_e/f!gw!hvGFgf..) (;) ne(fe) me(h)mí(hi'j)ne(jvIH'GhvGF'g)ris(gf..) (;) in(f)i(f)qui(hg)tá(h)tum(f) no(f)strá(fg)rum(f.) (,) an(fg~)ti(f)quá(f!hh//hhh)rum :(fe/ggf/gh/iffe.) (:) ci(e)to(e) an(gh)tí(f)ci(f)pent(fg~) nos(f.) (,) mi(f)se(f)ri(f)cór(fg~)di(f)ae(f) tu(f_e/f!gwh'!iv)ae,(hg/hiih.0) (;) qui(h)a(h) páu(hihhg)pe(fe)res(fhg) fa(h)cti(h) su(h)mus(gh/ihi) ni(f)mis.(f/ggf.0) (::) ℣. Ad(kxh!iwj'!kv)ju(j)va(j) nos,(j) De(ji)us(ij..) (,) sa(h)lu(hf)tá(h)ris(hi'j) no(jvIH'GhvGF'g)ster :(gf..) (;) et(f) pro(f)pter(hg) gló(h)ri(f)am(f) nó(fg)mi(f)nis(f) tu(f)i,(fe) Dó(fg)mi(f)ne,(f.) (,) lí(f)be(f!hh//hhh)ra(fg) nos :(fe/ggf/gh/iffe.) (:) et(e) pro(e)pí(gh)ti(f)us(f) e(fg)sto(f.) (,) pec(f)cá(fg)tis(f) no(f_e/f!gwh'!iv)stris,(kxhgi.jkiih.0) (;) pro(hihhg)pter(fe~) no(fgf)men(g.) *() tu(i_[oh:h]hivHFg.)(,)(h!jijH'GF)um.(fe/f!hh/ijI'Gh.) (,) (gh!jvIH'hvGFggf.0) (::)",
      source: "Graduale Romanum (GregoBase #425)",
      blurb: {
        text: "Domine non secundum begins with Psalm 103's refusal to repay sins according to their measure. Its later verses ask for mercy, help, deliverance, and forgiveness, making Ash Wednesday's Tract a sustained plea before God.",
        source: "Ps. 103:10 (Vulgate numbering Ps. 102:10) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Quadp3-3 (Missale Romanum formulary)",
      },
    },
    offertory: {
      title: "Exaltabo te Domine",
      latin: "Exaltábo te, Dómine, quóniam suscepísti me, nec delectásti inimícos meos super me : Dómine, clamávi ad te, et sanásti me.",
      translation: "I will extol you, O Lord, for you have upheld me: and have not let my enemies rejoice over me: O Lord, I cried to you, and you have healed me.",
      mode: "Offertory · Ash Wednesday · Mode II",
      reference: "Ps. 30:2-3",
      gabc: "(c3) EX(c)al(e)tá(egf)bo(f) te(f.) *(,) Dó(f)mi(f!hhh)ne,(fefe..) (;) quó(hh)ni(fef)am(f/hhh//giH'GhvGFgf..) (,) sus(fhF'Ef')ce(d)pí(df!hvF'D)sti(d_[oh:h]e_[oh:h]d_[oh:h]) me,(d.) (:) nec(f/hhi) de(f!hhh)le(f!hhh)ctá(e/fgf)sti(fe/f!hhhvFE'ece.) (;) in(c)i(c)mí(ef)cos(fe~) me(f/hh/i_[oh:h]h)os(h.) (,) su(hi/jij)per(h_f/ih'/ihhe/f!gw!hvGFgv_[oh:h]F~E~) me :(fe..) (:) Dó(fh/ih)mi(ivHF)ne(fefvECe.) (,) cla(ec~)má(ef)vi(fe) ad(f/hh/i_[oh:h]h) te,(h.) (;) et(h) sa(f!gwhg)ná(hhhvF'Ef/hhhvF'E//fgf/gf/hhh)sti(f_[oh:h]g_[oh:h]f_[oh:h]) me.(f.) (::)",
      source: "Graduale Romanum (GregoBase #648)",
      blurb: {
        text: "Exaltabo te Domine draws on the opening two verses of Psalm 30, trimming verse 3 in one small way: where the Vulgate reads \"Domine Deus meus, clamavi ad te, et sanasti me,\" the chant drops \"Deus meus,\" so the address moves directly from \"Domine\" to the cry for healing. The psalm carries a dedication heading in the Vulgate, \"Psalmus cantici, in dedicatione domus David,\" linking this song of deliverance to the founding of David's house.",
        source: "Ps. 30:2-3 (Vulgate numbering Ps. 29:2-3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Qui meditabitur",
      latin: "Qui meditábitur in lege Dómini die ac nocte, dabit fructum suum in témpore suo.",
      translation: "Whoever meditates on the law of the Lord day and night shall bring forth his fruit in due season.",
      mode: "Communion · Ash Wednesday · Mode III",
      reference: "Ps. 1:2, 3",
      gabc: "(c4) QUI(e[ll:1]d) me(gh)di(g)tá(hj)bi(j)tur(j.) *(,) in(j) le(j)ge(ih) Dó(i/jkj)mi(j)ni(ig) (,) di(h)e(gf) ac(ixfghig/h_g) no(egff)cte,(fe..) (:) da(h)bit(ghg) fru(h!iwj)ctum(g_[oh:h]f) su(ef!gvFEfvED)um(fd/efef.) (,) in(de) tém(gh)po(g)re(g.d!ewf) su(egff)o.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #582)",
      blurb: {
        text: "Qui meditabitur, the Communion chant for Ash Wednesday, draws its text from two consecutive verses of Psalm 1 but quotes selectively from each. Verse 2 opens \"sed in lege Domini voluntas ejus, et in lege ejus meditabitur die ac nocte,\" yet the chant begins mid-verse, taking only the clause about meditation. From verse 3 it keeps only \"dabit fructum suum in tempore suo,\" setting aside the image of a tree planted near running waters and the closing assurance that \"omnia quæcumque faciet prosperabuntur.\" The result joins meditation on the law directly to fruitfulness, without the tree metaphor between them.",
        source: "Ps. 1:2, 3 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "lent-2": {
    gradual: {
      title: "Sciant gentes",
      latin: "Sciant gentes quóniam nomen tibi Deus : tu solus Altíssimus super omnem terram. ℣. Deus meus, pone illos ut rotam, et sicut stípulam ante fáciem venti.",
      translation: "Let the nations know that God is your name: you alone are the Most High over all the earth. ℣. O my God, make them like a wheel, and as stubble before the face of the wind.",
      mode: "Gradual · 2nd Sunday of Lent · Mode I",
      reference: "Ps. 83:19, 14",
      gabc: "(c4) SCi(dfd)ant(d/ffd/fffhvGF) gen(gff'f)tes(d/ffdev'1//fgddc.) (;) * quó(d)ni(fdf)am(gfg) no(ixg_[oh:h]f/g/igh)men(h) ti(ixh.g!hwi)bi(h.) (;) De(ixg_[oh:h]f/g/igh)us :(hgi//hihiggf.0) (:) tu(f) so(hf/gh!jjh)lus(hghvGFg.) (,) Al(h!jij)tís(h_f)si(gf~)mus(f_g//d!f'g//fh!jvGF'fd/ff/ge'/fgd'/e[ll:1]ddc.) (:) su(c)per(d) o(fg/hg)mnem(h!jj/hjg) ter(fv.dge//f!gwh)ram.(ghffgFE.) (,) (h_jHG'hvF'D//ff/gffd.) (::) ℣. De(hg)us(g) me(gh/jh/jggf)us,(f.) (;) po(hj)ne(j_i) il(jjj)los(hg__) (,) ut(gf~) ro(ixgv.fhg/hiGF.hf/gh!jj/k!mmmvKJ'jvH'G)(,)(jkjjh)tam,(hjh/jjjh..) (:) et(f) sic(f)ut(ghg~) stí(h_f/ghGF.)(,)(hV!ghfg./d!ewf//e!gwhg/h!jj)pu(hfg)lam(ghgff/ded.) (:) an(d!fffd~)te(ef) fá(ghghhghv.ixfh!ivGF'E//f!gwh!ivHG)ci(hg)em(g.) *(,) ven(ixhiGF'h!jjvH'G)ti.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1265)",
      blurb: {
        text: "Sciant gentes draws two verses from Psalm 83, but not in the order they appear there. The respond comes from the psalm's final verse (19), and the verse from verse 14, which falls in the middle of the psalm. The compiler also adjusted the opening of verse 19: where the Clementine Vulgate reads \"Et cognoscant quia nomen tibi Dominus,\" the chant substitutes \"Sciant gentes quoniam nomen tibi Deus,\" shifting from \"And let them know that the Lord is thy name\" to an explicit address to the nations.",
        source: "Ps. 83:19, 14 (Vulgate numbering Ps. 82:19, 14) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    tract: {
      title: "Commovisti Domine terram",
      latin: "Commovísti, Dómine, terram, et conturbásti eam. ℣. Sana contritiónes ejus, quia mota est. ℣. Ut fúgiant a fácie arcus, ut liberéntur elécti tui.",
      translation: "You have moved the earth, O Lord, and have troubled it. ℣. Heal its breaches, for it has been shaken. ℣. That they may flee from before the bow, that your elect may be delivered.",
      mode: "Tract · 2nd Sunday of Lent · Mode VIII",
      reference: "Ps. 60:4, 6",
      gabc: "(c4) COm(e)mo(e)ví(gh/j.h!iwj)sti(k_[hl:1]j//j'jjvH'GF.) (,) (gh!jjjvIGh_g/h!iw!jvIHivHGhg..) (;) * Dó(gjjk)mi(h)ne(hg/hf//h!jhj) ter(jvIH'iw!jvI'HG'h)ram,(hg..) (:) et(g) con(h_g/h!iwj)tur(g_[oh:h]f~)bá(g)sti(h) e(j./kjjg//j./kj/!j'jj/kjjh)(,)(ji/jjvI'G//hjhjvHF.1)(,)(gh!jvvI'G//hjHF'g)am.(g/hhg.) (::) ℣. Sa(g!jj/kljj'jg)(,)(jj/kljj'jh//ijH'GF.g.h!iwjjk)na(j.) (;) con(ij'k~)tri(k_[hl:1]i)ti(kj)ó(j_kJ'//G)nes(g_[uh:l]h) (,) e(fh/ji/jkhhg/hg!jjhjvG~F~)jus,(gf..) (:) qui(ixfh/ih/ig)a(j.) mo(jjjvHG'h)ta(g) est.(dg'//jvHG.dg'//hjhhg.) (,) (jjjg/hhfgv.dg/hg/hg/hhg.) (::) ℣. Ut(fg) fú(g!jj)gi(j)ant(jj/kljj'jg) (,) (jj/kljj'jh//ijH'GF.g.h!iwjjv) (;) a(jj) fá(jk'l)ci(j_h)e(h_g) ar(h!jj//jjj'jk~)cus,(gv.fh/ji/jkhhg/hg/jjh/jggf.0) (:) ut(fg!hj~) li(igh)be(gfgh!jij)rén(j.h!iwj)tur(jjjvIHivHGhg..) (;) e(g)lé(hg/jjghvG'F)cti(f!h'j) *() tu(j)i.(jijHGg'g/hggfg.) (,) (jjjkvJ'IH'hg/hjI'HG'ghf.1) (,) (h!iw!jvIH'ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #1178)",
      blurb: {
        text: "Commovisti Domine terram draws its three verses from Psalm 60, taking verse 4 and then jumping to verse 6, omitting the intervening verse 5: \"Thou hast shewn thy people hard things; thou hast made us drink the wine of sorrow.\" The third verse also quietly shifts a word: where the psalm reads \"dilecti tui\" (thy beloved), the Tract sings \"elécti tui,\" so that those who are delivered become specifically God's elect rather than his beloved.",
        source: "Ps. 60:4, 6 (Vulgate numbering Ps. 59:4, 6) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Meditabor in mandatis tuis",
      latin: "Meditábor in mandátis tuis, quae diléxi valde : et levábo manus meas ad mandáta tua, quae diléxi.",
      translation: "I will meditate on your commandments, which I have loved exceedingly: and I will lift up my hands to your commandments, which I have loved.",
      mode: "Offertory · 2nd Sunday of Lent · Mode II",
      reference: "Ps. 119:47, 48",
      gabc: "(c3) ME(c)di(ef)tá(f/hhe/gf)bor(f.) *(,) in(e) man(f)dá(hih)tis(hh/ih) tu(hh/ihhvGF)is,(gf..) (;) quae(hg) di(h)lé(hji)xi(hji) val(h_g_f~)de :(f.) (:) et(e) le(f)vá(hhi)bo(h.hhh) (,) ma(fhh'1hh)nus(ef) me(fh)as(hhh/ih/!ih//h'hhvF'Ef.) (,) ad(e) man(f)dá(hih)ta(high) tu(fgffe)a,(e.) (;) quae(hg) di(h)lé(hjIH'/!hf//ih/!ih//h'hhvFE'D)(,)(efE'Defef)xi.(f!gwhhvGF'gwhhvGF.) (::)",
      source: "Graduale Romanum (GregoBase #810)",
      blurb: {
        text: "Meditabor in mandatis tuis joins meditation on God's commandments to lifted hands and love. The Psalm's neighboring verses speak of seeking those commandments and finding comfort in God's word, so the 2nd Sunday of Lent Offertory makes obedience a prayer of affection and hope.",
        source: "Ps. 119:47, 48 (Vulgate numbering Ps. 118:47, 48) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Visionem quam vidistis",
      latin: "Visiónem quam vidístis, némini dixéritis, donec a mórtuis resúrgat Fílius hóminis.",
      translation: "Tell the vision you have seen to no one, until the Son of man be risen from the dead.",
      mode: "Communion · 2nd Sunday of Lent · Mode I",
      reference: "Matt. 17:9",
      gabc: "(c4) VI(d)si(e_[uh:l]f)ó(g')nem(e) *() quam(gh) vi(fe)dí(d)stis,(d_fddc.) (,) né(f')mi(h)ni(g') di(h)xé(gf)ri(g)tis,(f.) (;) do(fd)nec(f') a(g) mór(h')tu(g)is(f') re(e)súr(fg)gat(g.) (,) Fí(e_[uh:l]f)li(g)us(fe) hó(d)mi(cd)nis.(d.) (::)",
      source: "Graduale Romanum (GregoBase #885)",
      blurb: {
        text: "Visionem quam vidistis preserves Christ's command that the disciples keep the vision silent until the Son of Man rises. The communion for the second Sunday of Lent holds revelation and silence together within the promise of resurrection.",
        source: "Matt. 17:9 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "lent-3": {
    gradual: {
      title: "Exsurge Domine",
      latin: "Exsúrge, Dómine, non praeváleat homo : judicéntur gentes in conspéctu tuo. ℣. In converténdo inimícum meum retrórsum, infirmabúntur, et períbunt a fácie tua.",
      translation: "Arise, O Lord, let not man prevail: let the nations be judged in your sight. ℣. When my enemy shall be turned back, they shall be weakened, and perish before your face.",
      mode: "Gradual · 3rd Sunday of Lent · Mode III",
      reference: "Ps. 9:20, 4",
      gabc: "(c4) EX(fv.ffff_c)súr(d!ewf_e)ge(fffd/fff) (,) * Dó(e.f!gwh_g)mi(hg)ne,(ixg_[uh:l]h//e.f!gw!higff/ded.) (;) non(g) prae(hih)vá(iji/j_k)le(jkJ'H)at(h_givHG.) (,) ho(g_[oh:h]d//f_ef./de!fg!hv'1jvIH'//jv_G_[oh:h+2.87mm]F'_3[oh:h+2.87mm]fd)(,)(f_[oh:h]g_[oh:h]e_[oh:h]//fgF'EfvED'/!ewfef)mo :(e[ll:1]d..) (:) ju(g)di(hih)cén(iji___!jw!kvJ'IH)tur(hjjh) gen(hjjg~)tes(ixg_[uh:l]h//e.f!gw!higff/ded.) (;) in(g) con(hih)spé(iji___!jw!kvJ'IH)ctu(hv.g!jj//jj//jjjggf) (,) tu(f.0h!iwj)o.(i_[oh:h]g//ivHGhhf/hh) (,) (g!jj//jj//jjjvH'GF'/[-0.5]{ix}E0f_h//ivGFghg/hgge.) (::) ℣. In(eef) con(dg)ver(g)tén(h_g/h!iwjij)do(j_i) in(j)i(j)mí(ij)cum(j) me(j_i)um(i.) (,) re(hk)trór(kvJ'IH'/!iwj!kvJ'IH'jh'/[oll:0{1]jk/lkl[oll:}]/J'IH)sum,(hjhhg.) (:) in(gd~)fir(g)ma(hj)bún(j)tur,(j.) (,) et(j) per(i_[oh:h]g)í(hji)bunt(ij'k/ikJ'IHjvIH) (,) (jj/ki'jvHG'jh'/ihhg.) (:) a(jjg) fá(h_j)ci(j)e(jj//jjjh/ijHG.) (,) (jj//jjjh/ijHG.) (,) (jj/kh/jjk/[oll:1{1]jk/lj[oll:}]/jj'1h/ijH'Gjg/i_[uh:l]jgh!jjjvH'GF'fd.) *(;) tu(fd/ffd/ef/gh/jjjggf)(,)(f.0h!iwj)a.(i_[oh:h]g//ivHGhhf/hh) (,) (g!jj//jj//jjjvH'GF'/[-0.5]{ix}E0f_h//ivGFghg/hgge.) (::)",
      source: "Graduale Romanum (GregoBase #1298)",
      blurb: {
        text: "Exsurge Domine draws on two verses of Psalm 9 that are not adjacent: the respond takes verse 20, and the verse jumps back to verse 4, leaving sixteen verses of the psalm unquoted between them. The opening words, \"Exsurge Domine,\" were chosen in 1520 by Pope Leo X as the incipit of his papal bull written in response to Martin Luther's Ninety-five Theses, calling on the Lord to arise against what the bull described as forces destroying the vineyard. Luther responded by publicly burning a copy of the bull on 10 December 1520 at the Elster Gate in Wittenberg.",
        source: "Ps. 9:20, 4 (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Exsurge Domine\" (rev. 1372857273)",
      },
    },
    tract: {
      title: "Ad te levavi oculos meos",
      latin: "Ad te levávi óculos meos, qui hábitas in caelis. ℣. Ecce sicut óculi servórum in mánibus dominórum suórum : ℣. Et sicut óculi ancíllae in mánibus dóminae suae : ℣. Ita óculi nostri ad Dóminum Deum nostrum, donec misereátur nostri. ℣. Miserére nobis, Dómine, miserére nobis.",
      translation: "To you have I lifted up my eyes, who dwell in the heavens. ℣. Behold, as the eyes of servants are on the hands of their masters: ℣. And as the eyes of the handmaid are on the hands of her mistress: ℣. So are our eyes unto the Lord our God, until he have mercy on us. ℣. Have mercy on us, O Lord, have mercy on us.",
      mode: "Tract · 3rd Sunday of Lent · Mode VIII",
      reference: "Ps. 123:1-3",
      gabc: "(c4) AD(d) te(fg) le(ge/fgD'Cd)vá(fg)vi(ixf!iiivHGhhg.) *(;) ó(gjjk)cu(h)los(hg/hf//h!jhj) me(jvIH'iw!jvI'HG'h)os,(hg..) (:) qui(g) há(h_g/h!iwj)bi(gf)tas(g) in(h) cae(j./kjjg//j./kjj'jj/kjjh)(,)(ji/jjvI'G//hjhjvHF.1)(,)(gh!jvvI'G//hjHF'g)lis.(g/hhg.) (::) ℣. Ec(g!hwi'!jv)ce(j) sic(jjjvIH)ut(h) ó(hjI'H)cu(gf)li(ghg) ser(hi)vó(g.h!iwjhi)rum(hg..) (;) in(h) má(hhgh)ni(f)bus(fg!hvhg.) (,) do(gh)mi(g)nó(hg/jjghvG'F)rum(f!h'j) su(j)ó(j)rum :(jijHG.ixjjvH'GhiGF.) (,) (iyh./jh/ig/hhg.) (::) ℣. Et(gh'j) sic(jjjvIH)ut(h) ó(hjI'H)cu(gf)li(ghg) an(hi)cíl(g.h!iwjhi)lae(hg..) (;) in(h) má(hhgh)ni(f)bus(fg!hvhg.) (,) dó(hg/jjghvG'F)mi(f!h'j)nae(j) su(j)ae :(jijHG.ixjjvH'GhiGF.) (,) (iyh./jh/ig/hhg.) (::) ℣. I(d!ff//fffd//f_!h_f_g_)ta(fg!hvhg.) (,) ó(gjjk)cu(h)li(hg/hf//h!jhj) no(jvIH'iw!jvI'HG'h)stri(hg..) (;) ad(g) Dó(gj)mi(j)num(j) De(ij/kjji)um(i.) (`) no(hjIG'h)strum,(gv.fh/ji/jkh/!hg/hg/jjh/jggf.0) (:) do(f!h'j)nec(igh) mi(gf/gh)se(gh)re(g)á(g)tur(gh/jij) no(j.h!iwj)stri.(jjjvIHivHGhg..) (::) ℣. Mi(g)se(g)ré(g!hwi'!jv)re(j) no(jjjvIH)bis(h) Dó(hjI'H)mi(gf)ne,(g_0[uh:l]/hfg.) (,) (ixi_[oh:h]hivGF.g/hg/hg/hg/jjh/jggf.0) (:) mi(h_g/h!iwj)se(ghG'F)ré(f!h'j)re(j) *() no(j)bis.(jijHGg'g/hggfg.) (,) (jjjkvJ'IH'hg/hjI'HG'ghf.1) (,) (h!iw!jvIH'ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #1329)",
      blurb: {
        text: "Ad te levavi oculos meos turns the eyes of servants and handmaid toward the Lord until he shows mercy. Psalm 123 calls this prayer one of affliction with confidence in God, and the 3rd Sunday of Lent Tract lets that patient dependence unfold in several verses.",
        source: "Ps. 123:1-3 (Vulgate numbering Ps. 122:1-3) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Justitiae Domini rectae",
      latin: "Justítiae Dómini rectae, laetificántes corda, et dulcióra super mel et favum : nam et servus tuus custódiet ea.",
      translation: "The justices of the Lord are right, rejoicing hearts, and sweeter than honey and the honeycomb: for your servant keeps them.",
      mode: "Offertory · 3rd Sunday of Lent · Mode IV",
      reference: "Ps. 19:9, 10, 11, 12",
      gabc: "(c4) JU(d)stí(f)ti(fff)ae(f!gwhg/h_g) Dó(f)mi(fg!hvGF'g)ni(gf..) (,) * re(fff!gwhgh)ctae,(gf..) (;) lae(fff)ti(d!ew!fvEC)fi(d)cán(f)tes(fff) cor(f!gwhghv_G~F~)da,(gf..) (:) et(fd~) dul(fg)ci(fg'h)ó(hggf/ghGF'g)ra(gf..) (;) su(f)per(d) mel(df'!gv) et(g_[oh:h]f) fa(f.d!ewf/ge//fddcd)vum :(dc..) (:) nam(c!fff) et(fe~) ser(gh)vus(f_e) tu(fhg___)us(g.) (;) cu(f)stó(h_f/hgh)di(gf)et(fv.fffcfv) e(fv.fffhvGFgvFE)a.(e.) (::)",
      source: "Graduale Romanum (GregoBase #591)",
      blurb: {
        text: "Justitiae Domini rectae draws from four verses of Psalm 19 but does not quote them in full. It opens with the first half of verse 9, skips verse 10 altogether, then moves to the closing phrase of verse 11, \"dulciora super mel et favum,\" and ends with the opening clause of verse 12. The full verse 9 continues \"præceptum Domini lucidum, illuminans oculos,\" and verse 10 reads \"Timor Domini sanctus, permanens in sæculum sæculi; judicia Domini vera, justificata in semetipsa,\" both of which the chant passes over in order to arrive at the image of honey.",
        source: "Ps. 19:9, 10, 11, 12 (Vulgate numbering Ps. 18:9, 10, 11, 12) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Qui biberit aquam",
      latin: "Qui bíberit aquam, quam ego dabo ei, dicit Dóminus, fiet in eo fons aquae saliéntis in vitam aetérnam.",
      translation: "Whoever drinks the water that I shall give him, says the Lord, it shall become in him a fountain of water springing up into life everlasting.",
      mode: "Communion · 3rd Sunday of Lent · Mode III",
      reference: "John 4:14",
      gabc: "(c4) QUI(e) bí(g)be(f)rit(e) a(gh)quam,(fgff) *(,) quam(d) e(gh'i)go(h) da(h_g/h!iwji/jkj)bo(h) e(g.f!gwhgh)i,(hg..) (;) di(h)cit(ixgiHG'hffe) Dó(e)mi(egff)nus,(eef.) (:) fi(dg!hi)et(h) in(h) e(h)o(hg) (,) fons(h!iwj) a(ghg)quae(efef.) sa(d)li(e)én(ixgh!jvH'GF'gwh!ivH~G~)tis(hg..) (;) in(g) vi(g_[oh:h]e/f!gwh)tam(h.) ae(ixhiG'Fghg)tér(egff)nam.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #894)",
      blurb: {
        text: "John 4:14 gives Qui biberit aquam its movement from the water Christ gives to a spring within the believer. The communion for the third Sunday of Lent ends not with thirst, but with life that rises toward eternity.",
        source: "John 4:14 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "laetare": {
    gradual: {
      title: "Laetatus sum in his",
      latin: "Laetátus sum in his quae dicta sunt mihi : in domum Dómini íbimus. ℣. Fiat pax in virtúte tua : et abundántia in túrribus tuis.",
      translation: "I rejoiced at the things that were said to me: we shall go into the house of the Lord. ℣. Let peace be in your strength: and abundance in your towers.",
      mode: "Gradual · 4th Sunday of Lent (Laetare) · Mode VII",
      reference: "Ps. 122:1, 7",
      gabc: "(c2) LAe(ff)tá(g)tus(fgF'Dgfg) sum(g./hiHG'gf/ghg.___) *(;) in(fg) his(gj) quae(j) di(jii)cta(g) sunt(gj~) mi(j_)hi :(g) (,) (ihij_i//hjii/ghg.) (:) in(gh) do(gh)mum(g_[oh:h]e) Dó(f)mi(dec)ni(c.) (,) í(eggf/g_[oh:h]e//fvED'ef'!gffd!ewf)bi(cdc___)mus.(c.) (::) ℣. Fi(gfg)at(gj~) pax(j_kJ'//G//ihij_i//hjii/ghg.) (;) in(f) vir(g)tú(g!ii//iikvJI'ig)te(gffd) tu(fdffd/ec)a :(c.) (:) et(g) a(c)bun(df~)dán(fv.d!gf'gjv.iiiih~)ti(ij)a(j_g//ihij_i//hjii/ghg.) (;) * in(cd) túr(fgf)ri(dgf/gh)bus(gh) tu(gf)is.(f.) (,) (hg/i_[oh:h]hgiHG'ge./fge'fvD'Cd_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #1011)",
      blurb: {
        text: "Psalm 122 opens in the Clementine Vulgate with the heading \"Canticum graduum,\" a gradual canticle, and its first verse supplies the body of this Gradual. The verse then leaps forward to verse 7, skipping the intervening lines about Jerusalem's courts and compact streets, to land on the prayer for peace within the city's towers. The two verses frame the psalm's movement together: the joy of setting out for the Lord's house, answered by a blessing on the city itself.",
        source: "Ps. 122:1, 7 (Vulgate numbering Ps. 121:1, 7) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    tract: {
      title: "Qui confidunt in Domino",
      latin: "Qui confídunt in Dómino, sicut mons Sion : non commovébitur in aetérnum, qui hábitat in Jerúsalem. ℣. Montes in circúitu ejus : et Dóminus in circúitu pópuli sui, ex hoc nunc et usque in saéculum.",
      translation: "They that trust in the Lord shall be as mount Sion: he shall not be moved for ever that dwells in Jerusalem. ℣. Mountains are round about it: so the Lord is round about his people, from henceforth now and for ever.",
      mode: "Tract · 4th Sunday of Lent (Laetare) · Mode VIII",
      reference: "Ps. 125:1-2",
      gabc: "(c4) QUI(g) con(g)fí(g/hih)dunt(g/hhg.) (,) * in(fg) Dó(gjjk)mi(h)no,(gf/ghhg.) (;) sic(iijh)ut(jk) mons(kij) Si(hjI'G)on :(g.) (,) (fh/ji/jkhhg/hg/jjh/jggf.0) (:) non(g) com(gef)mo(dg)vé(gv.fgh!jjh)(,)(jjvH'Ghji/j.h!iwj)bi(hiHG'h)tur(hg..) (,) in(gj) ae(j)tér(ik/ljjh)num,(jhhg/hg/jjh/jggf.0) (:) qui(f) há(hj)bi(igh)tat(gf/gh) (,) in(gh~) Je(g)rú(gh/jij)sa(j.h!iwj)lem.(jjjvIHivHGhg..) (::) ℣. Mon(dg'//jvHG.dg'//hjhhg.)(,)(jjjg/hhfgv.dg/hgh)tes(ghg/hhg.) (;) in(g) cir(g)cú(gj)i(j)tu(j) e(ik/ljjh)jus :(jhhg/hg/jjh/jggf.0) (:) et(h!iwj) Dó(j)mi(jjj)nus(jh//jjlvKJ'jvI'HGhg..) (;) in(gh) cir(fg)cú(gh/jij)i(j)tu(g.) (`) pó(gh)pu(h)li(h) su(h)i,(hf/ghg/hg/hg/hg/jjh/jggf.0) (:) ex(g/h!jij) hoc(j.h!iwj) nunc(jjjvIHivHGhg..) (;) et(g) us(h_g/h!iwj)que(g_[uh:l]h) *() in(f) saé(f!h'j)cu(j)lum.(jijHGg'g/hggfg.) (,) (jjjkvJ'IH'hg/hjI'HG'ghf.1) (,) (h!iw!jvIH'ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #1377)",
      blurb: {
        text: "Psalm 125 is one of fifteen psalms headed \"A gradual canticle\" in the Douay-Rheims, a title meaning a song of ascents. The tract draws on only the first two of the psalm's five verses, setting aside the petition of the fourth: \"Do good, O Lord, to those that are good, and to the upright of heart.\" Around 530, St. Benedict of Nursia assigned this psalm to the office of Sext from Tuesday until Saturday, according to the Rule of St. Benedict.",
        source: "Ps. 125:1-2 (Vulgate numbering Ps. 124:1-2) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 125\" (rev. 1314308359)",
      },
    },
    offertory: {
      title: "Laudate Dominum quia benignus",
      latin: "Laudáte Dóminum, quia benígnus est : psállite nómini ejus, quóniam suávis est : ómnia quaecúmque vóluit, fecit in caelo et in terra.",
      translation: "Praise the Lord, for he is good: sing to his name, for it is sweet: whatever he willed, he has done in heaven and on earth.",
      mode: "Offertory · 4th Sunday of Lent (Laetare) · Mode II",
      reference: "Ps. 135:3, 6",
      gabc: "(f3) LAu(fc~)dá(ef)te(f!gwhhvGF'geec) () * Dó(ef)mi(fhf)num,(efe.) (;) qui(fe)a(f) be(f!hhh)ní(hihh)gnus(f) est :(f!gw!hvGEgf..) (:) psál(fh/ih)li(hhh)te(f) nó(f!hhh)mi(f)ni(eh) e(ghG~'F~)jus,(gf..) (;) quó(f!gw!hvGF)ni(fe)am(f) su(hh)á(hihh)vis(fe) est :(e!fwgffe.) (:) ó(e.f!gwh'!iv)mni(ih)a(hihh'h) (,) quae(f)cúm(hhi)que(h) vó(hih)lu(hhhf)it,(fiHG.) (,) fe(hghf)cit(f.e!fwgf.) (;) in(fe~) cae(ffe)lo(fiHG.) (,) et(hghf) in(f.e!fw!gvFE'f) ter(f!gwhgh)ra.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #899)",
      blurb: {
        text: "Laudate Dominum quia benignus draws from two verses of Psalm 135 with two verses quietly dropped between them. Verse 3 flows straight into verse 6, leaving out verses 4 and 5, which speak of God choosing Jacob and Israel as his own possession. The chant also trims the end of verse 6: the psalm's full line reads \"in cælo, in terra, in mari et in omnibus abyssis,\" but the offertory stops at earth, setting aside the sea and all the depths.",
        source: "Ps. 135:3, 6 (Vulgate numbering Ps. 134:3, 6) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Lutum fecit ex sputo",
      latin: "Lutum fecit ex sputo Dóminus, et linívit óculos meos : et ábii, et lavi, et vidi, et crédidi Deo.",
      translation: "The Lord made clay of the spittle, and anointed my eyes: and I went, and washed, and saw, and believed in God.",
      mode: "Communion · 4th Sunday of Lent (Laetare) · Mode VI",
      reference: "John 9:6, 11",
      gabc: "(c4) LU(f)tum(ef) fe(d)cit(dc) *() ex(f) spu(fg)to(g) Dó(h)mi(gf)nus,(f.) (;) et(f) li(g)ní(h)vit(gf) ó(gh)cu(g)los(f) me(fvED)os :(d.) (:) et(f) áb(fg)i(f)i,(f.) (,) et(gh) la(hvGF)vi,(f.) (,) et(g) vi(f_e)di,(d.) (;) et(f) cré(gh)di(g)di(g) De(f.)o.(f.) (::)",
      source: "Graduale Romanum (GregoBase #989)",
      blurb: {
        text: "Lutum fecit ex sputo joins the Lord's act in John 9:6 to the healed man's later account in verse 11. Its short sequence of going, washing, seeing, and believing gives the Laetare Communion the shape of a witness's answer.",
        source: "John 9:6, 11 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "lent-5": {
    gradual: {
      title: "Eripe me Domine de inimicis",
      latin: "Eripe me, Dómine, de inimícis meis : doce me fácere voluntátem tuam. ℣. Liberátor meus, Dómine, de géntibus iracúndis : ab insurgéntibus in me exaltábis me : a viro iníquo erípies me.",
      translation: "Deliver me, O Lord, from my enemies: teach me to do your will. ℣. My deliverer, O Lord, from the angry nations: you will lift me up above them that rise up against me: from the unjust man you will rescue me.",
      mode: "Gradual · 5th Sunday of Lent (Passion Sunday) · Mode III",
      reference: "Ps. 143:9, 10",
      gabc: "(c4) E(fv.ffff_c)ri(d!ewf_e)pe(ege/ghGF'fd) me,(fff) (,) * Dó(e.f!gwh_g)mi(hg)ne,(ixg_[uh:l]h//e.f!gw!higff/ded.) (;) de(dc) in(g)i(hi)mí(iij)cis(h) me(h!jj//jjjvHGigh)is :(h.) (,) (i_j_i_2/j_[hl:1]k_[hl:1]i'_[hl:1]//kvJ'IHjvIH) (,) (jj/ki'jvHG'jh'/ihhg.) (:) do(hj)ce(j_i) me(jijh) (,) fá(jhig)ce(fg)re(ghg___/hiHG'hffe.) (;) vo(eef)lun(dg)tá(hv.gh/jij)tem(hv.g!jj//jj//jjjggf) (,) tu(f.0h!iwj)am.(i_[oh:h]g//ivHGhhf/hh) (,) (g!jj//jj//jjjvH'GF'/[-0.5]{ix}E0/f_h//ivGFghg/hgge.) (::) ℣. Li(g)be(g)rá(g)tor(hj~) me(j)us,(i./jkh/jijHG.) (,) (ji/j_k//li/jkJ'IH.) (,) ([oll:1{1]k/li/jk[oll:}]/J'IH.jijHGjg/i_[uh:l]j//gh!jjjvH'GF'fd.) (;) Dó(fd/ffd/ef/gh/j_[hl:1]k_[hl:1]j_[hl:1]//j'jjvHGjjj)mi(ji)ne,(i.) (;) de(i) gén(jk)ti(kljjij)bus(ji..) (,) i(ij)ra(j)cún(jjjj_ijv.ikJI'jh)dis :(hv.gh!jjjvHGhh//giHG'hffe.) (:) ab(ef'g) in(g)sur(gh~)gén(h_g)ti(hjh/ij)bus(i.) in(jk) me(jv.iji//hihghFE.) (;) ex(ef'g)al(g)tá(h_g)bis(gjh/ij) me :(i.) (:) a(jvvIG) vi(hi)ro(ik//jlkki) in(i)í(i)quo(ikjj'jhivHG'hffe.) *(;) e(ef'g)rí(h_g)pi(g!jhj)es(j) me.(jvIHjvIGhh//fg/hh//giHG'hffe.) (::)",
      source: "Graduale Romanum (GregoBase #760)",
      blurb: {
        text: "Psalm 143 verses 9 and 10 each run longer than this chant uses. Verse 9 continues \"to thee have I fled,\" and verse 10 continues \"for thou art my God. Thy good spirit shall lead me into the right land.\" The compiler took only the opening petition of each verse, pairing the cry for rescue from enemies with the plea to be taught God's will, and set aside the declarations of trust and the promise of the spirit that follow.",
        source: "Ps. 143:9, 10 (Vulgate numbering Ps. 142:9, 10) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    tract: {
      title: "Saepe expugnaverunt me",
      latin: "Saepe expugnavérunt me a juventúte mea. ℣. Dicat nunc Israel : saepe expugnavérunt me a juventúte mea. ℣. Étenim non potuérunt mihi : supra dorsum meum fabricavérunt peccatóres. ℣. Prolongavérunt iniquitátem sibi : Dóminus justus concídet cervíces peccatórum.",
      translation: "Often have they fought against me from my youth. ℣. Let Israel now say: often have they fought against me from my youth. ℣. But they could not prevail over me: the sinners have wrought upon my back. ℣. They have lengthened their iniquities: the just Lord will cut the necks of sinners.",
      mode: "Tract · 5th Sunday of Lent (Passion Sunday) · Mode VIII",
      reference: "Ps. 129:1-4",
      gabc: "(c4) SAe(g)pe(gv.fff_d/e_[oh:h]ccd!fvv//g./hjhhg.) *(,) ex(gh)pu(f)gna(ixg!hwi)vé(i)runt(iiivH~G~) me(g.) (;) a(g) ju(h_g/h!iwj)ven(ghf)tú(f!h'j)te(j) me(jijHG.ixjjvH'GhiGF.)(,)(iyh./jh/ig)a.(g/hhg.) (::) ℣. Di(d!ff//fffd//f_!h_f_g_)cat(f) nunc(fg!hvhg.) (;) Is(gh)ra(fg)el :(gh/ji/jkhhg/hg/jjh/jggf.0) (:) sae(fh)pe(hghvGF) ex(gh)pu(gh~)gna(gh/jij)vé(j)runt(h!iwj) me(jjjvIHivHGhg..) (;) a(g) ju(h_g/h!iwj)ven(ghf)tú(f!h'j)te(j) me(jkjjg)(,)(jv.kli/jki'/jhhg.ixhiGF.)(,)(iyh./jh/ig)a.(g/hhg.) (::) ℣. Et(g)e(h!jhj'jjkvJ'IGh_g/h!iw!jvIHijh)nim(hg..) (;) non(g) po(ghg)tu(fg)é(jj)runt(hji) mi(j)hi :(jjjkhhg/hg/jjh/jggf.0) (:) su(g)pra(g) dor(hi~)sum(gh/jij) me(j.h!iwj)um(jjjvIHivHGhg..) (;) fa(g)bri(g)ca(g)vé(h_g/h!iwj)runt(ghf) pec(f!h'j)ca(j)tó(jijHG.ixjjvH'GhiGF.)(,)(iyh./jh/ig)res.(g/hhg.) (::) ℣. Pro(gd)lon(g)ga(hih)vé(jjjkvJ'IGh_g/h!iw!jvIHijh)runt(hg..) (;) in(g)i(ghg)qui(fg)tá(jj)tem(hji) si(j)bi :(jjjkhhg/hg/jjh/jggf.0) (:) Dó(f)mi(f)nus(h') ju(j)stus(igh) (,) con(gfgh!jij)cí(j.h!iwj)det(jjjvIHivHGhg..) (;) cer(g)ví(h_g/h!iwj)ces(ghf) ()* pec(f!h'j)ca(j)tó(jijHGg'g/hggfg.)(,)(jjjkvJ'IH'hg)rum.(ghGF.) (,) (h!iwjijjh/ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #742)",
      blurb: {
        text: "Saepe expugnaverunt me is a tract for the fifth Sunday of Lent, drawing all four opening verses of Psalm 129, one of the fifteen psalms that begin with the words the evidence identifies as \"A song of ascents.\" The selection stops precisely before verse 5, where the psalm turns toward a curse on Zion's enemies: the Douay-Rheims reads, \"Let them all be confounded and turned back that hate Sion.\" The tract ends instead on a declaration of divine justice, leaving the speaker's perseverance and God's action as the final word.",
        source: "Ps. 129:1-4 (Vulgate numbering Ps. 128:1-4) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 129\" (rev. 1305333403)",
      },
    },
    offertory: {
      title: "Confitebor tibi Domine",
      latin: "Confitébor tibi, Dómine, in toto corde meo : retríbue servo tuo : vivam, et custódiam sermónes tuos : vivífica me secúndum verbum tuum, Dómine.",
      translation: "I will praise you, O Lord, with my whole heart: render good to your servant: I shall live and keep your words: quicken me according to your word, O Lord.",
      mode: "Offertory · 5th Sunday of Lent (Passion Sunday) · Mode I",
      reference: "Ps. 86:12, 5",
      gabc: "(c4) COn(c)fi(d)té(ixdh'!iv)bor(h) *(,) ti(ixh!jjh/i_[uh:l]j)bi,(g_[oh:h]fg) Dó(iyhjI'H)mi(h_[oh:h]i_[oh:h]h_[oh:h])ne,(h.) (;) in(f) to(hjh___!iwj)to(ghF'Df') cor(d!fff)de(fgffe) me(de!fvED'e)o :(e[ll:1]d..) (:) re(d)trí(d!f'g)bu(hgh)e(ixhig'hvF'Df.) ser(df)vo(ghg) tu(h)o :(gf) (;) vi(hjI'H)vam,(h_[oh:h]i_[oh:h]h._[oh:h]) (,) et(fh) cu(h)stó(hjI'H)di(hgh)am(hgg) (,) ser(fg)mó(fg'h)nes(ixhjHG'hw!ivHG) tu(fg!hvGF'g)os :(gf..) (:) vi(f)ví(fh/jhj)fi(g)ca(fgf) me(dff'1ff) (;) se(d)cún(d!ew!fvEDevD~C~)dum(dc__) (,) ver(f./[-0.5]hjhghgfgF'Dfff)bum(f) tu(f)um,(fgffe) Dó(d)mi(de!fvED'e)ne.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #318)",
      blurb: {
        text: "Confitebor tibi Domine moves from praising God with the whole heart to asking for life and fidelity to his word. Psalm 86 places that praise beside God's sweetness, mercy, and hearing of those who call, so the 5th Sunday of Lent Offertory becomes a prayer of trust in God's mercy.",
        source: "Ps. 86:12, 5 (Vulgate numbering Ps. 85:12, 5) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Videns Dominus flentes",
      latin: "Videns Dóminus flentes soróres Lázari ad monuméntum, lacrimátus est coram Judaéis, et clamábat : Lázare, veni foras : et pródiit ligátis mánibus et pédibus, qui fúerat quatriduánus mórtuus.",
      translation: "When the Lord saw the sisters of Lazarus weeping at the tomb, he wept before the Jews, and cried out: Lazarus, come forth: and he came forth, bound hand and foot, who had been dead four days.",
      mode: "Communion · 5th Sunday of Lent (Passion Sunday) · Mode I",
      reference: "Cf. John 11:33-44",
      gabc: "(c4) VI(f)dens(f) Dó(f)mi(f)nus(f.) *(,) flen(f)tes(e) so(d)ró(e)res(f) Lá(g)za(g)ri(g) ad(g) mo(g)nu(e)mén(fv_E~D~)tum,(d.) (;) la(f)cri(f)má(h)tus(h) est(h) co(h)ram(g) Ju(g)daé(g)is,(d.) (,) et(g) cla(f)má(e.)bat :(e.) (;) Lá(h)za(gf/gh)re,(g) ve(h)ni(j) fo(h.)ras :(h.) (:) et(f) pród(ixg!hwi)i(ih)it(g.) (,) li(g)gá(g)tis(f) má(gh)ni(f)bus(d) et(f) pé(fg)di(f)bus,(c.) (;) qui(f) fú(g)e(fe)rat(f) qua(f)tri(e)du(f)á(gf)nus(f.) mór(ded)tu(c!ew!fvED'e)us.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #704)",
      blurb: {
        text: "Videns Dominus flentes draws on John 11 but compresses twelve verses into a single unbroken sentence. The scripture moves from Jesus seeing Mary weep, through the exchange about the stone, through his prayer to the Father, and only then to his cry of Lazare, veni foras and the emergence from the tomb. The antiphon cuts all of that away and runs directly from the weeping to the call to the coming-forth, drawing grief and resurrection into one breath. It also names sisters where John at that point names only Mary as weeping, folding Martha, who appears later at the tomb, back into the opening scene.",
        source: "Cf. John 11:33-44 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "palm": {
    gradual: {
      title: "Christus factus est",
      latin: "Christus factus est pro nobis obédiens usque ad mortem, mortem autem crucis. ℣. Propter quod et Deus exaltávit illum, et dedit illi nomen, quod est super omne nomen.",
      translation: "Christ became obedient for us unto death, even to the death of the cross. ℣. For which cause God also has exalted him, and has given him a name which is above all names.",
      mode: "Gradual · Palm Sunday of the Passion of the Lord · Mode V",
      reference: "Phil. 2:8-9",
      gabc: "(c4) CHri(ffg)stus(f.) *(,) fa(fg)ctus(f) est(f') pro(f) no(ghF'ED.g_[oh:h]e/fg)bis(f.) (;) ob(f)é(hf/gh!jj/kjk)di(jij)ens(h_g) (,) us(h!jjh)que(f.) ad(ixfiH'Gh) mor(f_[oh:h]g_[oh:h]f_[oh:h])tem,(f.) (:) mor(ixf!hhi)tem(g) au(ixgjj)tem(j.h!iw!jvIG'hw!ivHG) cru(fv.ff)cis.(f_c) (,) (fg!hvGF.e!g'h//fhg/hggf.0) (z0::c3) ℣. Pro(d)pter(d) quod(d) et(fe~) De(eh)us(h.) (,) ex(h)al(h)tá(h)vit(h) il(h)lum,(ihhe./h_[oh:h]i_[oh:h]h_[oh:h]/ihhe.) (,) (hi!kv//lvKI'jvHF.1) (,) (h_g/ijh'___jvIH'jvIH'//hvGF.) (:) et(f) de(f!h'i)dit(i) il(i)li(ih/jkihhf.) (,) no(hf/hhh)men,(h.f!gwh!iv.hi/jhh/iih.0) (;) quod(d) est(d) su(d)per(d) o(dfE'D)mne(ef) * no(fhG'Fhhh)men.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #873)",
      blurb: {
        text: "Christus factus est recalls Christ's obedience even to death on the cross, followed by God's exaltation of him. On Palm Sunday, the Gradual places the coming Passion within that steadfast guidance.",
        source: "Phil. 2:8-9 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    tract: {
      title: "Deus Deus meus respice",
      latin: "Deus, Deus meus, réspice in me : quare me dereliquísti? ℣. Longe a salúte mea verba delictórum meórum. ℣. Deus meus, clamábo per diem, nec exáudies : in nocte, et non ad insipiéntiam mihi. ℣. Tu autem in sancto hábitas, laus Israel. ℣. In te speravérunt patres nostri : speravérunt, et liberásti eos. ℣. Ad te clamavérunt, et salvi facti sunt : in te speravérunt, et non sunt confúsi. ℣. Ego autem sum vermis, et non homo : oppróbrium hóminum, et abjéctio plebis. ℣. Omnes qui vidébant me, aspernabántur me : locúti sunt lábiis, et movérunt caput. ℣. Sperávit in Dómino, erípiat eum : salvum fáciat eum, quóniam vult eum. ℣. Ipsi vero consideravérunt, et conspexérunt me : divisérunt sibi vestiménta mea, et super vestem meam misérunt sortem. ℣. Líbera me de ore leónis : et a córnibus unicornuórum humilitátem meam. ℣. Qui timétis Dóminum, laudáte eum : univérsum semen Jacob, magnificáte eum. ℣. Annuntiábitur Dómino generátio ventúra : et annuntiábunt caeli justítiam ejus. ℣. Pópulo qui nascétur, quem fecit Dóminus.",
      translation: "O God, my God, look upon me: why have you forsaken me? ℣. Far from my salvation are the words of my sins. ℣. O my God, I shall cry by day, and you will not hear: and by night, and it shall not be reputed as folly in me. ℣. But you dwell in the holy place, the praise of Israel. ℣. In you our fathers have hoped: they have hoped, and you have delivered them. ℣. They cried to you, and they were saved: they trusted in you, and were not confounded. ℣. But I am a worm, and no man: the reproach of men, and the outcast of the people. ℣. All they that saw me have scorned me: they have spoken with the lips, and wagged the head. ℣. He hoped in the Lord, let him deliver him: let him save him, seeing he delights in him. ℣. But they have looked and stared upon me: they parted my garments among them, and upon my vesture they cast lots. ℣. Deliver me from the lion's mouth: and my lowness from the horns of the unicorns. ℣. You that fear the Lord, praise him: all you the seed of Jacob, glorify him. ℣. There shall be declared to the Lord a generation to come: and the heavens shall show forth his justice. ℣. To a people that shall be born, which the Lord has made.",
      mode: "Tract · Palm Sunday of the Passion of the Lord · Mode II",
      reference: "Ps. 22:2-9, 18, 19, 22, 24, 32",
      gabc: "(f3) DE(f)us,(efE'C//efe/fgf./efe/fgf.) (,) (ef/hghhvGFg.f!gwh_ghvGFgf..) (:) * De(e)us(fe~) me(eh)us,(h.) (,) ré(h)spi(h)ce(hggf) in(fe~) me :(ef/gf/ggf/gh/iffe.) (:) qua(hi)re(hi) me(hg/hiih.0) de(ef)re(eh)li(gh/ih)quí(hvGF')sti?(f/ggf.0) (::) ℣. Lon(fh'/ihhf/g'/hggf/h'/ihhg/i'/jiig/h'/ighf)ge(f.) (,) a(f) sa(hg)lú(h)te(f) me(f!hh//hhh)a(fe/ggf/gh/iffe.) (:) ver(f_e/f!gwh'!iv)ba(hg/hiih.0) (,) de(e)li(ehg)ctó(h/ihhe)rum(fgf) (`) me(hg)ó(h_f/ggf)(,)(hiH'GhiF'E//hhhvGF')rum.(f/ggf.0) (::) ℣. De(fhg)us(hi) me(i_j_i_2/j_i/j_f)us(f.) (;) cla(h)má(hi!jvIH'GhvGF'g)bo(gf..) per(hg~) di(h_fg)em,(f.) (;) nec(g) ex(i)áu(hhg)di(fe)es :(ef/gf/ggf/gh/iffe.) (:) in(e) no(gh)cte,(f.) (,) et(f_e/f!gwh'!iv) non(hg/hiih.0) (`) ad(e) in(fh)si(h)pi(h)én(gh!ijh)ti(f)am(f!gwh_g) mi(hvGF')hi.(f/ggf.0) (::) ℣. Tu(ef) au(h/ihhf/hh/ijhhg/ihhggf!gwhgh)tem(gf..) (,) in(h) san(hhg~)cto(i) há(hhg)bi(fe)tas,(ef/gf/ggf/gh/iffe.) (:) laus(hhhv_GE) Is(f!gwhg)ra(h)el.(h./ijhhg/ihhggf!gwh_ghvGFgf..) (::) ℣. In(ef'h~) te(h) spe(gh)ra(f)vé(f!hh//hhh)runt(f!gwh.) (,) pa(h)tres(f) no(f!hh//hhh)stri :(fe/ggf/gh/iffe.) (:) spe(gh)ra(f)vé(f_e/f!gwh'!iv)runt,(hg/hiih.0) (:) et(hi) li(hhg)be(fef)rá(eh)sti(gh/ihi) e(f)os.(f/ggf.0) (::) ℣. Ad(h) te(i) cla(hih)ma(f)vé(f!h_gh//gh!jvIGhvGF'g)runt,(gf..) (;) et(h) sal(hhg~)vi(i) fa(hhg)cti(fe) sunt :(ef/gf/ggf/gh/iffe.) (:) in(e) te(gh) spe(fg)ra(f)vé(f_e/f!gwh'!iv)runt,(hg/hiih.0) (;) et(hi) non(h/ihhe~) sunt(fgf) con(hg~)fú(hvGF)si.(fefEC//fefggf.0) (::) ℣. E(e)go(f) au(h/ihhf/hh/ijhhg/ihhggf!gwhgh)tem(gf..) (,) sum(fi) ver(i)mis,(i_[uh:l]j) et(f') non(i) ho(jiif/hhfjvIH'hvGF)mo :(fe/ggf/gh/iffe.) (:) op(e)pró(gh)bri(f)um(f) hó(f_e/f!gwh'!iv)mi(hi)num,(hg/hiih.0) (;) et(i) ab(e)jé(f)cti(f)o(hg) ple(hvGF)bis.(fefEC//fefggf.0) (::) ℣. O(h)mnes(hh//hhh) qui(f) vi(hfh)dé(iv.hi/ji)bant(ig~) me,(giH'GhvGFgf..) (;) a(f)sper(f')na(i)bán(jiif/hhfjvIH'hvGF)tur(fg~) me :(fe/ggf/gh/iffe.) (:) lo(e)cú(gh)ti(f) sunt(f) lá(f_e/f!gwh'!iv)bi(hi)is(hg/hiih.0) (;) et(i) mo(e)vé(f)runt(hg~) ca(hvGF)put.(fefEC//fefggf.0) (::) ℣. Spe(h)rá(i)vit(hiH'F) in(fi~) Dó(i_[oh:h]g)mi(hiH'F)no,(f.) (;) e(hg)rí(hi)pi(hvGE')at(f) e(g_[oh:h]fg)um :(fe/ggf/gh/!iffe.) (:) sal(e)vum(e) fá(gh)ci(f)at(f) e(f_e/f!gwh'!iv)um,(hg/hiih.0) (;) quó(i)ni(hvGE')am(f) vult(hg~) e(hvGF)um.(fefEC//fefggf.0) (::) ℣. I(h)psi(f) ve(h)ro(hh//hhh) (,) con(f)si(f)de(f)ra(f)vé(h)runt,(hh//hhh) (,) et(f) con(f)spe(i)xé(hhg)runt(fe~) me :(ef/gf/ggf/gh/iffe.) (:) di(e)vi(e)sé(gh)runt(f) si(f_e/f!gwh'!iv)bi(hg/hiih.0) (;) ve(i)sti(e)mén(f)ta(h) me(hvGF')a,(f/ggf.0) (:) et(g) su(e)per(fh~) ve(h)stem(h) me(gh!ijH'F)am(f.) (;) mi(f!gw!hvG'FE')sé(f)runt(f!gwh/ig/h_g) sor(f)tem.(fefEC//fefggf.0) (::) ℣. Lí(h_0i_0j)be(ij)ra(ih) me(kxiji___//jkI'H//kxj_i/jkI'H) (,) (jjijvIH//jjijvIH//j_i/jiif.) (;) de(h) o(hi'j)re(jvIGhvGF) le(fi)ó(jiif/hhfjvIH'hvGF)nis :(fe/ggf/gh/iffe.) (:) et(e) a(f) cór(hh)ni(hi!jvIH'GhvGF'g)bus(gf..) (,) u(fg)ni(f)cor(fg~)nu(f)ó(f_e/f!gwh'!iv)rum(hg/hiih.0) (;) hu(hi)mi(hhg)li(fef)tá(eh)tem(gh/ihi) me(f)am.(f/ggf.0) (::) ℣. Qui(e) ti(f)mé(hi)tis(f) Dó(hi)mi(ivH'GhvGF'g)num,(gf..) (;) lau(hg~)dá(h)te(f) e(f!hh//hhh)um :(fe/ggf/gh/iffe.) (:) u(e)ni(e)vér(gh)sum(f) se(fg)men(f) Ja(f_e/f!gwh'!iv)cob,(hg/hiih.0) (;) ma(hi)gni(hhg)fi(fef)cá(eh)te(gh/ihi) e(f)um.(f/ggf.0) (::) ℣. An(g)nun(e)ti(f)á(h)bi(hhi)tur(f) Dó(hi)mi(ivH'GhvGF'g)no(gf..) (;) ge(f)ne(hg)rá(h)ti(hhhf)o(f) ven(f)tú(f!hh//hhh)ra :(fe/ggf/gh/iffe.) (:) et(e) an(e)nun(gh)ti(f)á(fg)bunt(f) cae(f_e/f!gwh'!iv)li(kxhgi.jkiih.0) (;) ju(hi)stí(h/ihhe)ti(fgf)am(hg) (`) e(h_f/ggf)(,)(hiH'GhiF'E//hhhvGF')jus.(f/ggf.0) (::) ℣. Pó(ef)pu(fe)lo(f/hhhvF'E//f_ef.) (,) qui(e) na(fh)scé(hhhi)tur,(h.) (;) quem(hi) fe(h/ihhe)cit(f!gwhg) (,) * Dó(hv.gh/ihi)mi(f)nus.(fe/f!hh/ijI'Gh.) (,) (gh!jvIH'hvGFggf.0) (::)",
      source: "Graduale Romanum (GregoBase #372)",
      blurb: {
        text: "Psalm 22 runs to thirty-two verses, and this tract moves through it selectively, drawing on thirteen of them across wide gaps. Most strikingly, it leaps from verse 9 to verse 18, passing over a cluster of verses that includes the psalm's most physically stark line: \"They have dug my hands and feet.\" The tract then closes not with lamentation but with the psalm's final verse, which looks ahead to a people not yet born hearing the Lord's justice proclaimed.",
        source: "Ps. 22:2-9, 18, 19, 22, 24, 32 (Vulgate numbering Ps. 21:2-9, 18, 19, 22, 24, 32) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Improperium exspectavit cor meum",
      latin: "Impropérium exspectávit cor meum, et misériam : et sustínui qui simul contristarétur, et non fuit : consolántem me quaesívi, et non invéni : et dedérunt in escam meam fel, et in siti mea potavérunt me acéto.",
      translation: "My heart has expected reproach and misery: and I looked for one that would grieve together with me, but there was none: I sought for one that would comfort me, and I found none: and they gave me gall for my food, and in my thirst they gave me vinegar to drink.",
      mode: "Offertory · Palm Sunday of the Passion of the Lord · Mode VIII",
      reference: "Ps. 69:21",
      gabc: "(c4) IM(fgffe)pro(cd)pé(ff)ri(f!gwhgh)um(hg__) *(,) ex(gh)spe(g)ctá(h!iwj)vit(g) cor(g!jj//jjjhhg~) me(ixgih'ivGF')um,(gffe.) (;) et(g) mi(h!iwj_i)sé(jkjjh)ri(h!iw!jvI'HG'h)am :(hg..) (:) et(f) sus(g)tí(gjji)nu(ikjj)i(j_i) (,) qui(i) si(ikjj)mul(j_i) con(ij)tri(ij)sta(j)ré(jvIH)tur,(iki'/jkhhg.) (;) et(g!i'k~) non(k_[hl:1]ik) fu(ikjj'ji)it :(i.) (:) con(g!jjj)so(j)lán(ikjj)tem(jh~) me(iji) (,) quae(jkj)sí(jjjh)vi,(hg/hih.) (;) et(f!h'j~) non(j_h/jjjlvKJjv'1IH) in(hg~)vé(giH'GhvGF)ni :(f.) (:) et(f!gwh) de(hg)dé(hv.jj//jjj)runt(h!iw!jvI'HGhih.) (,) in(gf) e(ghg)scam(h) me(hjI'H)am(gf~) fel,(ghg/h_g/hjIH.) (:) et(fg) in(hg~) si(j)ti(j!kwl_k) me(kjji)a(hg..) (,) po(j)ta(jkj)vé(jjjh)runt(g.fgwh!ivH~G~) me(hg..) (,) a(h)cé(jkjjh/jjh/jjvH'G)to.(g!hwihhg.) (::)",
      source: "Graduale Romanum (GregoBase #486)",
      blurb: {
        text: "Improperium exspectavit cor meum draws from Psalm 69:21-22, though not in full: the opening clause of verse 21, \"in conspectu tuo sunt omnes qui tribulant me,\" is set aside, and the chant begins instead with the cry of the heart, then continues through verse 22 and its images of gall and vinegar. The Gospel of the day, from John 19:31-37, narrates the moment at the cross that verse 22 anticipates, the soldiers arriving, the piercing of Christ's side, and the testimony of the one who witnessed it.",
        source: "Ps. 69:21 (Vulgate numbering Ps. 68:21) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent02-5 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Pater si non potest hic calix",
      latin: "Pater, si non potest hic calix transíre, nisi bibam illum : fiat volúntas tua.",
      translation: "Father, if this chalice may not pass away, but I must drink it: your will be done.",
      mode: "Communion · Palm Sunday of the Passion of the Lord · Mode VIII",
      reference: "Matt. 26:42",
      gabc: "(c3) PA(hh)ter,(ggf.0) *(,) si(eg) non(gf~) pot(h)est(f) hic(e) ca(dfe)lix(e.) trans(e)í(fg)re,(ge) (,) ni(g)si(i) bi(i)bam(h) il(gih)lum :(g.) (;) fi(hih)at(hgh) vo(f)lún(ghf~)tas(g) tu(e.)a.(e.) (::)",
      source: "Graduale Romanum (GregoBase #650)",
      blurb: {
        text: "Matthew 26:42 gives this Communion the second prayer before Christ's arrest. On Palm Sunday, the chant holds acceptance of the cup within the Father's will.",
        source: "Matt. 26:42 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "nos-autem": {
    gradual: {
      title: "Oculi omnium",
      latin: "Óculi ómnium in te sperant, Dómine : et tu das illis escam in témpore opportúno. ℣. Aperis tu manum tuam : et imples omne ánimal benedictióne.",
      translation: "The eyes of all hope in you, O Lord: and you give them food in due season. ℣. You open your hand: and fill every living creature with your blessing.",
      mode: "Gradual · Holy Thursday (Mass of the Lord's Supper) · Mode VII",
      reference: "Ps. 145:15-16",
      gabc: "(c2) O(c.d!ewff)cu(gffvED)li(d_c) *(,) ó(cd/ede)mni(cd!evDC'd)um(dc..) (;) in(cf) te(fg) spe(g'hvGF')rant,(gffe~) (,) Dó(fg)mi(g)ne :(gigivvHGhg/j_i//hjii/ghg.) (:) et(f) tu(h/iji) das(i_[oh:h]h) il(iiiv_[oh:h]H~G~)lis(ghgg/efe.) (;) e(ef!gh!ivGF'Ef_g)scam(ghff'fvE'DCdc..) (;) in(cd) tém(fe/f_g)po(gefvEDef)re(e./fgf'/gd//evDCdc..) (;) op(cd)por(fe~)tú(fgf)no.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::) ℣. A(g)pe(hgge/f'/gffe/g'/hgge//f'/gff)(,)(d!fffvDC'd!ff//eg!hvFEghG'Fgh)ris(gh) tu(g.) (;) ma(gigivvHGhg/j_i)num(i_[oh:h]h) (,) tu(hjI'HG)am :(gv.d_f!g!hw!ivHF'iv//hig/hhg.) (:) et(ghG'E) im(f!gwh)ples(g'/hg'/hff'f/gddc//dc/ded.) (,) o(cd)mne(c) á(c)ni(c.d!ew!fvED'e)mal(dc..) *(;) be(cd)ne(fe)di(fgf)cti(ge)ó(fg)ne.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::)",
      source: "Graduale Romanum (GregoBase #1230)",
      blurb: {
        text: "Oculi omnium places every living creature's hope in the Lord's open hand, which gives food in due season. On Holy Thursday, the Gradual lets dependence on God's provision become a prayer before the feast.",
        source: "Ps. 145:15-16 (Vulgate numbering Ps. 144:15-16) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    tract: {
      title: "Ab ortu solis",
      latin: "Ab ortu solis usque ad occásum, magnum est nomen meum in géntibus. ℣. Et in omni loco sacrificátur, et offértur nómini meo oblátio munda : quia magnum est nomen meum in géntibus. ℣. Veníte, comédite panem meum : et bíbite vinum, quod míscui vobis.",
      translation: "From the rising of the sun even to the going down, great is my name among the nations. ℣. And in every place there is sacrifice, and there is offered to my name a clean oblation: for great is my name among the nations. ℣. Come, eat my bread: and drink the wine which I have mingled for you.",
      mode: "Tract · Holy Thursday (Mass of the Lord's Supper) · Mode VIII",
      reference: "Mal. 1:11; Prov. 9:5",
      gabc: "(c4) AB(d) or(fg~)tu(ge/fgD'Cd) so(fg)lis(ixf!iiivHGhg..) *(;) us(gjjk)que(h) ad(h) oc(hggf)cá(f!h'j)sum,(jjjvHG'/!giH'Ghg/hg/hg/jjh/jggf.0) (:) ma(gh)gnum(fg) est(ghhg/hhg//hjjhj.) (,) no(gh)men(g) me(f!h'j)um(j) in(j) gén(j./kjjg//j./kjj'jj/kjjh)(,)(ji/jjvI'G//hjhjvHF.1)(,)(gh!jvvI'G//hjhhg~)ti(fg)bus.(g/hhg.) (::) ℣. Et(g) in(g) o(g!hwi'!jv)mni(j) lo(ij)co(j.) (,) sa(j)cri(j)fi(j)cá(j_kJ'//Gh_g/h!iw!jvIHijh)tur,(hg..) (:) et(g) of(ghg)fér(fg)tur(gj) nó(jj)mi(h)ni(hji') me(j)o(jjjkhhg/hg/jjh/jggf.0) (;) ob(gh)lá(fg)ti(g)o(gh/jij) mun(j.h!iwj)da :(jjjvIHivHGhg..) (:) qui(fh)a(hghvGF) ma(gh)gnum(fg) est(ghhg/hhg//hjjhj.) (,) no(gh)men(g) me(f!h'j)um(j) in(j) gén(jijHG.//ixjjvH'GhiGF.)(,)(iyh./jh/ig)ti(fg)bus.(g/hhg.) (::) ℣. Ve(d)ní(ff//fffd//f_!h_f_g_)te,(fg!hvhg.) (;) com(hg)é(h)di(g)te(g) pa(hi)nem(gh/jij) me(j.h!iwj)um :(jjjvIHivHGhg..) (:) et(fg) bí(gj)bi(j)te(kij) vi(hjIG'h)num,(gv.fh/ji/jkhhg/hg/jjh/jggf.0) (;) quod(g) mí(h_g/h!iwj)scu(ghG'F)i(f!h'j) *() vo(j)bis.(jijHGg'g/hggfg.) (,) (jjjkvJ'IH'hg/hjI'HG'ghf.1) (,) (h!iw!jvIH'ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #644)",
      blurb: {
        text: "Ab ortu solis joins a vision of a pure offering among all nations to an invitation to eat bread and drink wine. Sung on Holy Thursday, the Tract gathers universal praise, sacrifice, and a summons to the feast around the Lord's table.",
        source: "Mal. 1:11; Prov. 9:5 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Hoc corpus quod pro vobis",
      latin: "Hoc corpus, quod pro vobis tradétur : hic calix novi testaménti est in meo sánguine, dicit Dóminus : hoc fácite, quotiescúmque súmitis, in meam commemoratiónem.",
      translation: "This is my body, which shall be delivered for you: this is the chalice of the new testament in my blood, says the Lord: do this, as often as you receive it, in remembrance of me.",
      mode: "Communion · Holy Thursday (Mass of the Lord's Supper) · Mode VIII",
      reference: "1 Cor. 11:24, 25",
      gabc: "(c4) HOC(gh) cor(hfhg)pus,(g.) *(,) quod(g) pro(ghe) vo(fg)bis(gh) tra(hiH'G)dé(ghg___)tur :(g.) (;) hic(g) ca(fhg)lix(g) no(gh'i)vi(i) te(i)sta(h)mén(i)ti(g) est(giH'Gh.) (,) in(gh) me(gh/ih)o(h) sán(gh)gui(gf)ne,(f.) (;) di(hji)cit(hi) Dó(g)mi(ghg___)nus :(g.) (:) hoc(j_h) fá(jij)ci(i)te,(g.) (,) quo(h)ti(ji)es(h)cúm(j)que(jk!lvlk) sú(i)mi(ikjj)tis,(ji..) (;) in(i) me(hv.gh!ivih)am(h) com(h)me(h)mo(hf)ra(gh)ti(hg)ó(ghg___)nem.(g.) (::)",
      source: "Graduale Romanum (GregoBase #726)",
      blurb: {
        text: "Hoc corpus quod pro vobis weaves 1 Corinthians 11:24 and 25 into a single continuous sentence rather than quoting either verse in full. Verse 24 ends with its own \"hoc facite in meam commemorationem,\" but the chant drops that closing phrase and moves straight into the chalice words of verse 25, saving a single \"hoc facite\" for the end. It also replaces verse 25's \"bibetis\" (you shall drink) with \"sumitis\" (you receive), broadening the closing command to cover receiving the sacrament in general, and inserts \"dicit Dominus\" between the two halves, a phrase that appears in neither verse.",
        source: "1 Cor. 11:24, 25 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "lent-3-b": {
    communion: {
      title: "Passer invenit sibi domum",
      latin: "Passer invénit sibi domum, et turtur nidum, ubi repónat pullos suos : altária tua, Dómine virtútum, Rex meus, et Deus meus : beáti qui hábitant in domo tua, in saéculum saéculi laudábunt te.",
      translation: "The sparrow has found herself a house, and the turtledove a nest where she may lay her young: your altars, O Lord of hosts, my King and my God: blessed are they that dwell in your house, they shall praise you for ever and ever.",
      mode: "Communion · 3rd Sunday of Lent · Mode I",
      reference: "Ps. 84:4-5",
      gabc: "(c2) PAs(fi)ser(i) *() in(i)vé(i)nit(ig~) si(hj)bi(j) do(hi)mum,(hi) (,) et(gh~) tur(fg~)tur(gh~) ni(fg)dum,(g.) (;) u(g)bi(g) re(g)pó(iv.iii)nat(g_[oh:h]f) pul(f)los(exegf) su(f_[oh:h]g_[oh:h]d_[oh:h])os :(d.) (:) al(f)tá(gih)ri(h)a(h) tu(j)a(jh) Dó(jk)mi(j)ne(iih) vir(fi~)tú(iv.iii)tum,(hg..) (;) Rex(h_fh) me(ghF'D)us,(d.) (,) et(d!f'g) De(ghf)us(fef) me(deD'C)us :(c.) (:) be(fgd)á(f)ti(fg) qui(gd) há(fh)bi(gh)tant(fg/h_g) (,) in(ig~) do(ij)mo(kjk) tu(igjvIH)a,(h.) (;) in(f) saé(hih)cu(g)lum(ge~) saé(ghgh)cu(g)li(fge.) (,) lau(ef/gf/gh~)dá(d)bunt(d!ewf_d) te.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1090)",
      blurb: {
        text: "Psalm 84 reaches this verse after two verses of longing: the soul fainting for the courts of the Lord, the heart and flesh rejoicing in the living God. The word that opens verse 4 in the Vulgate, \"Etenim,\" meaning \"for\" or \"for indeed,\" makes the birds finding their home a direct answer to that longing. The chant drops \"Etenim\" and begins with \"Passer,\" so the sparrow and the turtledove at God's altars stand on their own, without the ache that precedes them in the psalm.",
        source: "Ps. 84:4-5 (Vulgate numbering Ps. 83:4-5) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "lent-3-c": {
    communion: {
      title: "Passer invenit sibi domum",
      latin: "Passer invénit sibi domum, et turtur nidum, ubi repónat pullos suos : altária tua, Dómine virtútum, Rex meus, et Deus meus : beáti qui hábitant in domo tua, in saéculum saéculi laudábunt te.",
      translation: "The sparrow has found herself a house, and the turtledove a nest where she may lay her young: your altars, O Lord of hosts, my King and my God: blessed are they that dwell in your house, they shall praise you for ever and ever.",
      mode: "Communion · 3rd Sunday of Lent · Mode I",
      reference: "Ps. 84:4-5",
      gabc: "(c2) PAs(fi)ser(i) *() in(i)vé(i)nit(ig~) si(hj)bi(j) do(hi)mum,(hi) (,) et(gh~) tur(fg~)tur(gh~) ni(fg)dum,(g.) (;) u(g)bi(g) re(g)pó(iv.iii)nat(g_[oh:h]f) pul(f)los(exegf) su(f_[oh:h]g_[oh:h]d_[oh:h])os :(d.) (:) al(f)tá(gih)ri(h)a(h) tu(j)a(jh) Dó(jk)mi(j)ne(iih) vir(fi~)tú(iv.iii)tum,(hg..) (;) Rex(h_fh) me(ghF'D)us,(d.) (,) et(d!f'g) De(ghf)us(fef) me(deD'C)us :(c.) (:) be(fgd)á(f)ti(fg) qui(gd) há(fh)bi(gh)tant(fg/h_g) (,) in(ig~) do(ij)mo(kjk) tu(igjvIH)a,(h.) (;) in(f) saé(hih)cu(g)lum(ge~) saé(ghgh)cu(g)li(fge.) (,) lau(ef/gf/gh~)dá(d)bunt(d!ewf_d) te.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1090)",
      blurb: {
        text: "Passer invenit sibi domum draws its words from verses 4 and 5 of Psalm 84, passing over the psalm's opening cry of longing, \"my soul longeth and fainteth for the courts of the Lord,\" to arrive directly at the birds already nestled at God's altars. The Gospel of the day, from Luke 11, carries the warning that house upon house will fall; the Communion answers with those who dwell in God's house, praising him for ever and ever.",
        source: "Ps. 84:4-5 (Vulgate numbering Ps. 83:4-5) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Quad3-0 (Missale Romanum formulary)",
      },
    },
  },
  "laetare-b": {
    offertory: {
      title: "Illumina oculos meos",
      latin: "Illúmina óculos meos, ne quando obdórmiam in morte : ne quando dicat inimícus meus : Praeválui advérsus eum.",
      translation: "Enlighten my eyes, that I never sleep in death: lest at any time my enemy say: I have prevailed against him.",
      mode: "Offertory · 4th Sunday of Lent (Laetare) · Mode IV",
      reference: "Ps. 13:4-5",
      gabc: "(c4) IL(ff)lú(fhg'/hf)mi(dgF'E)na(e.) *(,) ó(g_[oh:h]e)cu(ghg)los(h) me(ixhv.gih'ivG'Ff'g!hiH'Gih)os,(h.) (;) ne(jj)quán(gh)do(ff) ob(e)dór(ge/ghg)mi(gffvED)am(e_[oh:h][ll:1]d_[oh:h]) (,) in(fh~) mor(h_g/jjjvG'E//g_[oh:h]f/ghG'FgvFE)te :(e.) (:) ne(ef!ghg)quán(gh)do(ghG'F) di(gh)cat(h/jjjvIH.) (,) in(h)i(ghg)mí(h/jjjvIH)cus(g_[uh:l]h) me(egF'E)us :(fff) (;) Prae(dec)vá(fv.fff)lu(dc)i(cccc_[oh:h]a_[oh:h]) (;) ad(c@f!de~)vér(eef)sus(d!ewf) e(fff/ghG'//D//fffhvGFgvFE)um.(e.) (::)",
      source: "Graduale Romanum (GregoBase #708)",
      blurb: {
        text: "Psalm 13 verse 4 opens with a double petition, \"Respice, et exaudi me, Domine Deus meus,\" before arriving at the cry for enlightened eyes; the Offertory drops that opening line and begins in the middle of the verse. It also stops short of the full close of verse 5, cutting the second half, \"Qui tribulant me exsultabunt si motus fuero\" (they that trouble me will rejoice when moved), so that the chant ends on the enemy's boast rather than on the psalmist's fear of falling. The psalm's final verse, which turns toward trust and praise, is left aside entirely.",
        source: "Ps. 13:4-5 (Vulgate numbering Ps. 12:4-5) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Jerusalem quae aedificatur",
      latin: "Jerúsalem, quae aedificátur ut cívitas, cujus participátio ejus in idípsum : illuc enim ascendérunt tribus, tribus Dómini, ad confiténdum nómini tuo, Dómine.",
      translation: "Jerusalem, which is built as a city, which is compact together: for thither did the tribes go up, the tribes of the Lord, to give praise to your name, O Lord.",
      mode: "Communion · 4th Sunday of Lent (Laetare) · Mode IV",
      reference: "Ps. 122:3-4",
      gabc: "(c4) JE(eef)rú(de)sa(cd)lem,(dg/hffe.) (,) * quae(f) ae(fd)di(fe)fi(f)cá(g)tur(f) ut(fd~) cí(ef)vi(f)tas,(eef.) (;) cu(fd~)jus(dfe) par(fg~)ti(g)ci(g)pá(gh)ti(h)o(h') e(j)jus(g') in(h) id(f')í(g)psum :(e.) (:) il(h)luc(j) e(jjj)nim(g') a(h)scen(j)dé(ikjj)runt(ji..) (,) tri(jjj)bus,(g') tri(h)bus(f') Dó(h)mi(gh_G'_FE'f)ni,(fe..) (;) ad(fff) con(f)fi(fd)tén(dg~)dum(g.) (,) nó(gh)mi(f)ni(d) tu(ff)o,(dec//f!gwhgh_g) Dó(e)mi(egff)ne.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1353)",
      blurb: {
        text: "Jerusalem quae aedificatur draws on two consecutive verses of Psalm 122. In setting verse 4, the chant quietly drops the phrase that stands at its centre in the psalm: \"testimonium Israël,\" the testimony of Israel. The psalm's verse reads \"Illuc enim ascenderunt tribus, tribus Domini: testimonium Israël, ad confitendum nomini Domini\"; the chant moves straight from \"tribus Domini\" to \"ad confiténdum nómini tuo,\" tightening the line into a single unbroken act of praise.",
        source: "Ps. 122:3-4 (Vulgate numbering Ps. 121:3-4) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "laetare-c": {
    offertory: {
      title: "Illumina oculos meos",
      latin: "Illúmina óculos meos, ne quando obdórmiam in morte : ne quando dicat inimícus meus : Praeválui advérsus eum.",
      translation: "Enlighten my eyes, that I never sleep in death: lest at any time my enemy say: I have prevailed against him.",
      mode: "Offertory · 4th Sunday of Lent (Laetare) · Mode IV",
      reference: "Ps. 13:4-5",
      gabc: "(c4) IL(ff)lú(fhg'/hf)mi(dgF'E)na(e.) *(,) ó(g_[oh:h]e)cu(ghg)los(h) me(ixhv.gih'ivG'Ff'g!hiH'Gih)os,(h.) (;) ne(jj)quán(gh)do(ff) ob(e)dór(ge/ghg)mi(gffvED)am(e_[oh:h][ll:1]d_[oh:h]) (,) in(fh~) mor(h_g/jjjvG'E//g_[oh:h]f/ghG'FgvFE)te :(e.) (:) ne(ef!ghg)quán(gh)do(ghG'F) di(gh)cat(h/jjjvIH.) (,) in(h)i(ghg)mí(h/jjjvIH)cus(g_[uh:l]h) me(egF'E)us :(fff) (;) Prae(dec)vá(fv.fff)lu(dc)i(cccc_[oh:h]a_[oh:h]) (;) ad(c@f!de~)vér(eef)sus(d!ewf) e(fff/ghG'//D//fffhvGFgvFE)um.(e.) (::)",
      source: "Graduale Romanum (GregoBase #708)",
      blurb: {
        text: "Psalm 13 verse 4 opens with a double petition, \"Respice, et exaudi me, Domine Deus meus,\" before arriving at the cry for enlightened eyes; the Offertory drops that opening line and begins in the middle of the verse. It also stops short of the full close of verse 5, cutting the second half, \"Qui tribulant me exsultabunt si motus fuero\" (they that trouble me will rejoice when moved), so that the chant ends on the enemy's boast rather than on the psalmist's fear of falling. The psalm's final verse, which turns toward trust and praise, is left aside entirely.",
        source: "Ps. 13:4-5 (Vulgate numbering Ps. 12:4-5) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Oportet te fili gaudere",
      latin: "Opórtet te, fili, gaudére, quia frater tuus mórtuus fúerat, et revíxit; períerat, et invéntus est.",
      translation: "You ought to rejoice, my son, for your brother was dead, and is come to life again; he was lost, and is found.",
      mode: "Communion · 4th Sunday of Lent (Laetare) · Mode VIII",
      reference: "Luke 15:32",
      gabc: "(c4) O(g)pór(j)tet(h) te(g.) *() fi(h)li(f) gau(h)dé(g.)re,(g.) (;) qui(g)a(g) fra(hj)ter(j) tu(j)us(j.) mór(j)tu(i)us(h) fú(j)e(i)rat,(g.) (,) et(h) re(f)ví(g.)xit;(g.) (;) per(h)í(j)e(i)rat,(g.) (,) et(h) in(gf~)vén(gh)tus(h) est.(g.) (::)",
      source: "Graduale Romanum (GregoBase #1066)",
      blurb: {
        text: "The father's closing words in the parable of the prodigal son come from Luke 15:32, but the chant reshapes them. The Vulgate's verse runs \"epulari autem, et gaudere oportebat,\" it was fitting to feast and rejoice, speaking impersonally in the past tense. The antiphon turns this into a direct address: \"Oportet te, fili, gaudere,\" you ought to rejoice, my son, drawing the word \"fili\" from the father's speech in the preceding verse and shifting the verb to the present tense, so the command lands on the singer now, at the moment of Communion.",
        source: "Luke 15:32 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "lent-5-b": {
    communion: {
      title: "Qui mihi ministrat",
      latin: "Qui mihi minístrat, me sequátur : et ubi ego sum, illic et miníster meus erit.",
      translation: "If anyone serve me, let him follow me: and where I am, there also shall my servant be.",
      mode: "Communion · 5th Sunday of Lent (Passion Sunday) · Mode V",
      reference: "John 12:26",
      gabc: "(c3) QUI(d) mi(gxf!gwh)hi(h) mi(gxhf)ní(ghg)strat,(f.) *(,) me(hi) se(h)quá(hfh)tur :(fhffd.) (:) et(d) u(d)bi(fh) e(h_f/hi/kjk)go(i_[oh:h]h) sum,(hg/hf..) (;) il(f)lic(h_[oh:h]i_[oh:h]h_[oh:h]ghFE'edev'1fhffe.) (;) et(hv.ghf'hvE'D) mi(d)ní(b_[oh:h]c_[oh:h]a_[oh:h])ster(ba~) me(dfe___)us(e!fwg'!hvF'Ef) e(d_[oh:h]e_[oh:h]d_[oh:h])rit.(d.) (::)",
      source: "Graduale Romanum (GregoBase #685)",
      blurb: {
        text: "Qui mihi ministrat draws from a single verse of John 12, spoken by Christ shortly before his passion, in a passage about the grain of wheat that must die to bear fruit. The verse at John 12:26 continues beyond the chant's closing words: \"Si quis mihi ministraverit, honorificabit eum Pater meus,\" if anyone serves me, my Father will honor him. The antiphon stops before that promise, letting the call to follow stand on its own, unaccompanied by its reward.",
        source: "John 12:26 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "lent-5-c": {
    communion: {
      title: "Nemo te condemnavit",
      latin: "Nemo te condemnávit, múlier? Nemo, Dómine. Nec ego te condemnábo : jam ámplius noli peccáre.",
      translation: "Has no one condemned you, woman? No one, Lord. Neither will I condemn you: now sin no more.",
      mode: "Communion · 5th Sunday of Lent (Passion Sunday) · Mode VIII",
      reference: "John 8:10-11",
      gabc: "(c3) NE(e)mo(ehg) * te(h) con(i)de(h)mná(hg)vit,(fg~) mú(e)li(de)er?(e.) (;) Ne(h)mo,(h) Dó(h)mi(fh!ivHG'h)ne.(hg..) (:) Nec(h) e(ij)go(i) te(g) con(h)de(f)mná(e)bo :(fhg.) (;) jam(gh) ám(i)pli(hg)us(e) no(ef)li(g) pec(fg)cá(e.)re.(e.) (::)",
      source: "Graduale Romanum (GregoBase #1010)",
      blurb: {
        text: "Nemo te condemnavit brings together the two questions and answers of John 8:10-11 before Christ's command to sin no more. The Passion Sunday Communion holds mercy and a changed life within the same brief exchange.",
        source: "John 8:10-11 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },

  /* ===================================================================
   * Temporal cycle — Advent & Christmas seasons (the temporal keys
   * already carrying an introit in data/introits.js). Latin = GregoBase
   * Solesmes (Graduale Romanum), gabc pulled by id; assignments per the
   * modern Graduale Romanum, confirmed on gregorien.info's Vatican-II
   * calendar. Advent has Gradual + Alleluia (no Tract); the Octave Day
   * (Mary, Mother of God) carries the Nativity propers with its own
   * Alleluia. See sources/gregobase/build-advent-christmas.py.
   * =================================================================== */
  "ad-te-levavi": {
    gradual: {
      title: "Universi qui te exspectant",
      latin: "Univérsi qui te exspéctant, non confundéntur, Dómine. ℣. Vias tuas, Dómine, notas fac mihi : et sémitas tuas édoce me.",
      translation: "None who wait for you shall be confounded, O Lord. ℣. Show me your ways, O Lord: and teach me your paths.",
      mode: "Gradual · 1st Sunday of Advent · Mode I",
      reference: "Ps. 25:3, 4",
      gabc: "(f3) U(e)ni(f)vér(fh!ivHF'gvEC.efef)si(f.) *(,) qui(fe) te(h) ex(ij)spé(j)ctant,(j_i/j_i/j_g/h_[oh:h]i_[oh:h]h._[oh:h]) (;) non(i_[oh:h]) con(hg~)fun(ef)dén(hi)tur,(gh/ihivHG') Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])ne.(f.) (,) (kxef!hh//i./jkI'Gh_ihhf.) (z0::c4) ℣. Vi(dh)as(h) tu(hg)as,(gh) Dó(g_[oh:h]f)mi(g_[uh:l]h)ne,(h.) (,) (fgh!jvjh//fgh!jvjh//jvvH'Gjk//jkJH.1) (,) (ixfgh!jvjh/jjh/!iggf.0) (:) no(hk)tas(k_[hl:1]j) fac([oll:1{0]j_lKJ'[oll:}]/kjjh.) (,) mi(hf/gh/jjh//jjvH'Gh!iwj_i)hi :(jjjvIH'jggf.0) (:) et(fg~) sé(g./hjHG'gf)mi(g)tas(g) tu(hv.fgf//ef'!gvffd/ec)as(c.) *(,) é(ff)do(g_[oh:h]f)ce(f!hgh) me.(hvvGF'EC//d!ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1169)",
      blurb: {
        text: "Psalm 25 verse 3 opens with a petition that enemies not mock the psalmist, but the Gradual sets that aside and draws only the confident second clause: none of them that wait on thee shall be confounded. Verse 4 similarly begins with a curse on the unjust, and the Gradual again leaves that behind, taking only the prayer to be shown the Lord's ways and taught his paths. Both times, the compiler chose supplication and trust and let the adversarial language go.",
        source: "Ps. 25:3, 4 (Vulgate numbering Ps. 24:3, 4) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Ostende nobis Domine",
      latin: "Allelúia. ℣. Osténde nobis, Dómine, misericórdiam tuam : et salutáre tuum da nobis.",
      translation: "Alleluia. ℣. Show us, O Lord, your mercy: and grant us your salvation.",
      mode: "Alleluia · 1st Sunday of Advent · Mode VIII",
      reference: "Ps. 85:8",
      gabc: "(c3) AL(def)le(f_e/f!gwhg)lú(fhh'1h){ia}.(hiHF'fe.) *(;) ij.(gh//efED.f!gwhhgehf/gffe.) (::) ℣. Os(h)tén(hv.gih)de(h) no(hg)bis(g) Dó(gh!ivvHFhfg)mi(hg)ne(g.) (;) mi(g)se(g)ri(gf)cór(hji)di(h)am(gh) tu(f_ehvvGE.gxfgFD.1egF'Efe)am :(e.) (:) et(e) sa(e)lu(e)tá(feh)re(h.) tu(hfh'GE//fhF'D//gxgvFEf.0/[-1.5]hhh/ijHF.1)(,)(g_[oh:h]i_[oh:h]g_[oh:h]ivHG'he.gxf_e/g_[oh:h]e//gvFEfd)um(d.) (;) * da(fd/ef) no(hg/hfh)bis.(ghFE.) (,) (df!hvF'E//d.0f!gwhghvGFg.//egf'gvE'Defe.) (,) (gxhhvF'EfgED.gyhhvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1115)",
      blurb: {
        text: "Psalm 85 verse 8 is a single petition lifted from a longer movement of longing and promise. The verses immediately before it address God turning back in mercy to give life, and the verse immediately after reads, in the Douay-Rheims, \"I will hear what the Lord God will speak in me: for he will speak peace unto his people.\" Sung as an Alleluia verse, the isolated cry \"Ostende nobis, Domine, misericordiam tuam\" stands on the threshold of that promised peace without yet crossing it.",
        source: "Ps. 85:8 (Vulgate numbering Ps. 84:8) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Ad te Domine levavi",
      latin: "Ad te, Dómine, levávi ánimam meam : Deus meus, in te confído, non erubéscam : neque irrídeant me inimíci mei : étenim univérsi qui te exspéctant, non confundéntur.",
      translation: "To you, O Lord, have I lifted up my soul: my God, in you I trust, let me not be put to shame; neither let my enemies laugh at me: for none who wait for you shall be confounded.",
      mode: "Offertory · 1st Sunday of Advent · Mode II",
      reference: "Ps. 25:1-3",
      gabc: "(f3) AD(c) te(ef//efefhhh_g) Dó(f)mi(fg!hvGF'g)ne(gf..) (;) * le(f_e/f!gwh)vá(h)vi(gf) á(hhhvF'Ef/hhh)ni(f)mam(fgef) me(f_[oh:h]g_[oh:h]f_[oh:h])am :(f.) (:) De(h)us(h) me(hihh)us,(g_[oh:h]f) (,) in(fe~) te(f) con(fe~)fí(fhG'E)do,(fe..) (;) non(hhi) e(h)ru(high)bé(h_[oh:h]i_[oh:h]h_[oh:h])scam :(h.) (:) ne(hh)que(h_g) ir(hhh)rí(f)de(e!gw!hvGF)ant(fgf) me(f.) (,) in(e)i(g)mí(i_[oh:h]h)ci(h) me(h_fgvFE'f)i :(fe..) (:) ét(fe)e(fgf)nim(fc) (,) u(efe)ni(f)vér(fih~)si(hi) qui(hg) te(f) ex(e)spé(efe)ctant,(c_[oh:h]bc.) (;) non(ef) con(ef)fun(f!gwh/ig/h_g)dén(fg!hvGF'g)tur.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #962)",
      blurb: {
        text: "Psalm 25, verses one through three, opens with the words \"Ad te Domine levavi,\" and the chant takes those verses in full, beginning exactly where the psalm itself begins. One small but telling difference appears in the final phrase: where the Clementine Vulgate reads \"universi qui sustinent te, non confundentur,\" the chant sings \"universi qui te exspéctant, non confundéntur.\" Both carry the same assurance that those who wait on God will not be put to shame, but the chant's word reaches toward expectant, forward-looking waiting, fitting for an Advent offertory.",
        source: "Ps. 25:1-3 (Vulgate numbering Ps. 24:1-3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Dominus dabit benignitatem",
      latin: "Dóminus dabit benignitátem : et terra nostra dabit fructum suum.",
      translation: "The Lord will give goodness: and our land shall yield her fruit.",
      mode: "Communion · 1st Sunday of Advent · Mode I",
      reference: "Ps. 85:13",
      gabc: "(c4) DO(ff)mi(fhg)nus(ghF'EfvE'DCdc..) *(,) da(ff)bit(ffg) be(fd)ni(f)gni(gh)tá(hj!kvJH)tem :(h.) (:) et(h) ter(ghg)ra(ef) no(ghhg)stra(g.) (;) da(hv.fhghvF'ED)bit(dfddc.) (,) fru(fg)ctum(e_[oh:h][ll:1]d/fgF'Ef) su(d_[oh:h]e_[oh:h]d_[oh:h])um.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1036)",
      blurb: {
        text: "Psalm 85 verse 13 sits within a sequence in which mercy and truth meet, justice and peace kiss, and truth springs from the earth. This communion antiphon draws out that single verse: the Lord will give goodness, and the earth shall yield her fruit. The Gospel of the day, from Luke 21, closes with a parable built on the same image, that when the fig tree and all the trees put out fruit, summer is near and the kingdom of God is close. The antiphon's earth yielding fruit arrives, then, as a direct echo of what has just been proclaimed.",
        source: "Ps. 85:13 (Vulgate numbering Ps. 84:13) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Adv1-0 (Missale Romanum formulary)",
      },
    },
  },
  "populus-sion": {
    gradual: {
      title: "Ex Sion species",
      latin: "Ex Sion spécies decóris ejus : Deus maniféste véniet. ℣. Congregáte illi sanctos ejus, qui ordinavérunt testaméntum ejus super sacrifícia.",
      translation: "Out of Sion, the loveliness of his beauty: God shall come openly. ℣. Gather to him his saints, who have set his covenant before sacrifices.",
      mode: "Gradual · 2nd Sunday of Advent · Mode V",
      reference: "Ps. 50:2-3, 5",
      gabc: "(c3) EX(d) Si(fh)on(h_fhvGE//f'/hffd.) (;) * spé(f_d/ef!gwhhi)ci(h)es(h//ij'IH.ghGF.) (;) de(f!hgh)có(f_e)ris(f!gwh) e(e_[oh:h][ll:1]d~)jus :(df//e!hhhffef.) (:) De(fh/ih)us(hg!ijIH.ghGF.) (;) ma(f)ni(hg)fé(h_fhvGE'f)ste(d_e) (,) vé(def!hv.ijHF./!ghFE.)(,)(fhef)ni(d)et.(efe/fhff/d_[oh:h]e_[oh:h]d._[oh:h]) (::) ℣. Con(d)gre(f)gá(hf/hhf//hhf//hhjvIH.!f!hhjvIH'/!ihh'hf)(,)(gxgvFEfvEDfv.!hhvF'Ef)te(f.) (;) il(fh)li(h_g) san(fg'h)ctos(gxe_f_d_2//f_e/fgF'E) e(d_[oh:h]e_[oh:h]d~)jus,(d.) (:) qui(d) or(ef~)di(f)na(hfge)vé(f!hhh)runt(h./ihghFE.) (,) (h_[oh:h]i_[oh:h]h_[oh:h]/ihghFE.) (;) (f/hghivHF.1//h_g/hif.1/h_gef!gvgf.0) (:) te(f!h'i)sta(h_g)mén(fg'h)tum(e_[oh:h][ll:1]d) (`) e(fdfED//f_d/ef!gwh'/ih~)jus(hg/ijIH.ghGF.) *(;) su(f!h'i)per(hg~) sa(fg'h)cri(ef)fí(gxhfge)ci(gxd)a.(de/gf/g_[uh:l]h) (,) (gxfgE'De_[uh:l]fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #1268)",
      blurb: {
        text: "Ex Sion species hears God coming openly from Sion and calls the saints to gather before him. Psalm 50 frames that gathering as a covenant set before sacrifices, while the 2nd Sunday of Advent Gradual awaits the Lord's coming with the Advent prayer for prepared hearts.",
        source: "Ps. 50:2-3, 5 (Vulgate numbering Ps. 49:2-3, 5) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Adv2-0 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Laetatus sum",
      latin: "Allelúia. ℣. Laetátus sum in his quae dicta sunt mihi : in domum Dómini íbimus.",
      translation: "Alleluia. ℣. I rejoiced at the things that were said to me: we shall go into the house of the Lord.",
      mode: "Alleluia · 2nd Sunday of Advent · Mode I",
      reference: "Ps. 122:1",
      gabc: "(c4) AL(dc~)le(f)lú(ixgfi){ia}.(h.) *(,) ij{.}(ixiji'hig.fg/hjhhg.) (,) (fhgev.dec./ef!gvvFD'ewfd.1) (::) ℣. Lae(d)tá(fddc/fg)tus(ixfhg/hi) sum(h.) (,) in(h) his(h) quae(h) di(hjH'GF.eg/hgh)cta(fg) sunt(ef~) mi(de!fvED'e)hi :(e[ll:1]d..) (:) in(cd~) do(df/efd.1cd/fdhvhggf/hjh___)mum(h.) (;) Dó(f_[oh:h]g_[oh:h]d_[oh:h]fv.efd.!fg!hvhg)mi(egff)ni(fe..) (;) * í(d!fff/ghf)bi(ixgi)mus.(h./iji'hig.fg/hjhhg.) (,) (fhgev.dec./ef!gvvFD'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #292)",
      blurb: {
        text: "Laetatus sum draws on only the opening line of Psalm 122, a nine-verse psalm. In the Vulgate, the psalm is headed \"Canticum graduum,\" marking it as one of fifteen psalms described as songs of ascents. The seven verses that follow the quoted line develop the image of pilgrims already standing in Jerusalem's courts, reflecting on the city's unity and praying for its peace, but the chant holds at the threshold, at the moment of first hearing the invitation to go.",
        source: "Ps. 122:1 (Vulgate numbering Ps. 121:1) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 122\" (rev. 1351248205)",
      },
    },
    offertory: {
      title: "Deus tu convertens",
      latin: "Deus, tu convértens vivificábis nos, et plebs tua laetábitur in te : osténde nobis, Dómine, misericórdiam tuam, et salutáre tuum da nobis.",
      translation: "O God, you will turn and bring us to life: and your people shall rejoice in you: show us, O Lord, your mercy, and grant us your salvation.",
      mode: "Offertory · 2nd Sunday of Advent · Mode III",
      reference: "Ps. 85:7-8",
      gabc: "(c4) DE(gh'j)us(j.) * tu(jkjji) con(jjj)vér(jjjh~)tens(iji.) (;) vi(gih)vi(j)fi(jjjvHG')cá(g/jj//jjj)bis(hkjjvI~G~) nos,(hg/h!jjjvHGhh//giHG'hffe.) (:) et(f) plebs(ef'g) tu(hgj)a(jv.jjjvIH'jggf.0) (;) lae(g)tá(gjji)bi(jjjvIH')tur(h) in(hiH~'G~) te :(hg..) (:) os(g)tén(gi)de(iki/jkhhg) no(ig/h!jj/kjji)bis,(jjjvIH) (,) Dó(hj)mi(ghG'__FE'f)ne,(fe..) (;) mi(ef)se(ef)ri(e)cór(ef'h)di(hjg)am(g) tu(gfgvFE)am,(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) et(gj~) sa(jv.jjj)lu(h)tá(hih)re(g.) tu(ghG'F)um(gh!ivih.0) (,) da(jv.jjj//giHG'gf/g.h!iwj'/kjjvIH.) no(fhG'FgvFE)bis.(e.) (::)",
      source: "Graduale Romanum (GregoBase #631)",
      blurb: {
        text: "Deus tu convertens draws on two consecutive verses of Psalm 85, verses 7 and 8. The verses immediately before them press God on whether his anger will last from generation to generation; the chant begins where the psalm turns from reproach to confidence. There is also a small but audible difference between this chant and the Vulgate text: where the Vulgate reads \"conversus,\" having turned, the chant sings \"convertens,\" turning, casting God's return not as something already accomplished but as something in motion.",
        source: "Ps. 85:7-8 (Vulgate numbering Ps. 84:7-8) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Jerusalem surge",
      latin: "Jerúsalem, surge, et sta in excélso : et vide jucunditátem, quae véniet tibi a Deo tuo.",
      translation: "Jerusalem, arise, and stand on high: and behold the joy that comes to you from your God.",
      mode: "Communion · 2nd Sunday of Advent · Mode II",
      reference: "Bar. 5:5; Bar. 4:36",
      gabc: "(f3) JE(fge)rú(fh)sa(h_g)lem(hv.ghf) () * sur(hj)ge,(i.) (,) et(iig) sta(hi) in(ij) ex(i)cél(hi)so :(gf..) (:) et(h) vi(fv.ege/fg)de(f) ju(f)cun(hffe~)di(f)tá(hihi)tem,(hg..) (;) quae(g) vé(ij)ni(ig)et(high) ti(fv.e!gef)bi(fvEC.) (,) a(e) De(gih)o(hv.giH'Gh) tu(f_[oh:h]g_[oh:h]f_[oh:h])o.(f.) (::)",
      source: "Graduale Romanum (GregoBase #966)",
      blurb: {
        text: "Jerusalem surge is woven from two separate verses in Baruch. The opening command to arise and stand on high comes from Baruch 5:5, which in full reads, in the Latin of the Vulgate, \"Exsurge, Jerusalem, et sta in excelso: et circumspice ad orientem, et vide collectos filios tuos,\" calling Jerusalem to look eastward and behold her scattered children gathering from sunrise to sunset. The antiphon then sets aside that vision entirely and closes instead with the promise from Baruch 4:36, \"vide jucunditatem a Deo tibi venientem,\" turning from the return of the exiles to a single word: joy.",
        source: "Bar. 5:5; Bar. 4:36 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "gaudete": {
    gradual: {
      title: "Qui sedes Domine super Cherubim",
      latin: "Qui sedes, Dómine, super Chérubim, éxcita poténtiam tuam, et veni. ℣. Qui regis Israel, inténde : qui dedúcis velut ovem Joseph.",
      translation: "You who sit, O Lord, upon the Cherubim, stir up your power, and come. ℣. Give ear, O you that rule Israel: you that lead Joseph like a sheep.",
      mode: "Gradual · 3rd Sunday of Advent (Gaudete) · Mode VII",
      reference: "Ps. 80:2, 3, 2",
      gabc: "(c3) QUI(f) se(hi)des,(iih/i_[oh:h]f//hvGFhi!kvJI') Dó(i)mi(iji___)ne,(i.) *(;) su(j!llj)per(j_f) Ché(fhg)ru(h)bim,(ijIH'hf//hg/hiH'GE.) (:) éx(ef)ci(f)ta(fef) pot(d)én(de)ti(d)am(be~) tu(e)am,(ev.de'/f_b.) (;) et(e[ll:1]d/ef!hhhvF'ED'/!db./d!fde) ve(e)ni.(gxe./fgED'db.//dc/de'!hvFE.) (::) ℣. Qui(ei) re(iv.hi!jvHF'ivH'GE'f/hhfgvFEfvEDe.)(,)(hh//hhhe/fhF'D//fhF'De.)(,)(hhi/kkkvIHG.ijIH'Gh_i)gis(i.) Is(i)ra(j!kwl)el,(lv_KI') in(h)tén(jk)de :(ji..) (:) qui(ij) de(h_f)dú(hvGE'f/hhfgvFEfvEDef)cis(e.) (;) vel(ef)ut(e) o(d!f'h)vem(h_g) *() Jo(fihi)seph.(ie..) (,) (igijki./jkJ'Ijh/iig./hig'hvFEfde.) (,) (hhvF'EfvDB.1ehf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1007)",
      blurb: {
        text: "Qui sedes Domine super Cherubim is built from two consecutive verses of Psalm 80. The body of the Gradual joins \"Qui sedes super cherubim\" (verse 2) directly to \"excita potentiam tuam, et veni\" (verse 3), cutting the words that fall between them in the psalm: \"manifestare coram Ephraim, Benjamin, et Manasse,\" which the Douay-Rheims renders as \"shine forth before Ephraim, Benjamin, and Manasses.\" The verse then steps back to the opening of verse 2, \"Qui regis Israel, intende; qui deducis velut ovem Joseph,\" which in the psalm comes before everything the body has already sung.",
        source: "Ps. 80:2, 3, 2 (Vulgate numbering Ps. 79:2, 3, 2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Excita Domine potentiam tuam",
      latin: "Allelúia. ℣. Excita, Dómine, poténtiam tuam, et veni, ut salvos fácias nos.",
      translation: "Alleluia. ℣. Stir up your power, O Lord, and come, that you may save us.",
      mode: "Alleluia · 3rd Sunday of Advent (Gaudete) · Mode IV",
      reference: "Ps. 80:3",
      gabc: "(c4) AL(fd~)le(ef'g)lú(hgh){ia}.(ixhiHG'gf.0) *(,) ij.(ixhiHG'ge./ghGF'Ef_gffe.) (::) ℣. Ex(h)ci(h)ta,(ixg'//ivHG'hffe.) Dó(fd/ef!ghhg)mi(fg)ne,(g.) (;) pot(g)én(gh)ti(ghg'/hf)am(e[ll:1]d~) tu(egF'D)am,(d.) (:) et(f!gwhg) ve(ixhiG'Eg./hiF'D//fffdgvFE.)(,)(df/h_f/g_[oh:h]efv.df!gvFE'f)ni,(fe..) (:) ut(d) sal(fd~)vos(f) *() fá(ef'g)ci(gdgvFE)as(fd/ef!g'h) nos.(ixhiHG'/!gf.0) (,) (ixhiHG'ge./ghGF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #855)",
      blurb: {
        text: "Psalm 80's verse 3, the source of this chant's words, opens with a geographical invocation naming the tribes assembled around the ark, \"coram Ephraim, Benjamin, et Manasse\"; the chant drops that half entirely and begins with the petition itself. It also inserts \"Domine\" (O Lord), a word not present in the psalm verse, sharpening the address to God as the season of Advent begins.",
        source: "Ps. 80:3 (Vulgate numbering Ps. 79:3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Benedixisti Domine terram tuam",
      latin: "Benedixísti, Dómine, terram tuam : avertísti captivitátem Jacob : remisísti iniquitátem plebis tuae.",
      translation: "You have blessed, O Lord, your land: you have turned away the captivity of Jacob: you have forgiven the iniquity of your people.",
      mode: "Offertory · 3rd Sunday of Advent (Gaudete) · Mode IV",
      reference: "Ps. 85:2",
      gabc: "(c4) BE(e)ne(e)di(e)xí(ege/ghgffd!fw!gvFE)sti,(e.) (,) * Dó(ef'g)mi(ixfhg/hi)ne,(h.) (,) ter(jhjvGF'fd./fg!hvGF')ram(gffd~) tu(dgF'E)am :(e.) (:) a(d)ver(g)tí(ixhg/hi)sti(h.) (,) ca(h)pti(h)vi(h)tá(h)tem(jhhf~) Ja(ghg)cob :(dghvFDgv.gg/hjhhg.) (:) re(dg)mi(g)sí(hiHG'hwi'!jv)sti(j.) (,) in(j)i(j)qui(ih)tá(jkj)tem(ig~) ple(hv.ghG'Fg_[uh:l]hghG'Fg_[uh:l]h)bis(g.) tu(egff)ae.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #113)",
      blurb: {
        text: "Benedixisti Domine draws its text from Psalm 85, joining the whole of verse 2 with only the first half of verse 3. The second half of that verse, \"operuisti omnia peccata eorum\" (thou hast covered all their sins), is left out. The same opening words appear earlier in this same Mass, in the Introit whose title gives Gaudete Sunday its name, which closes with the line \"Benedixisti Domine terram tuam: avertisti captivitatem Jacob.\" The psalm's language of return and blessing thus frames the liturgy from its opening antiphon through the Offertory.",
        source: "Ps. 85:2 (Vulgate numbering Ps. 84:2) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Adv3-0 (Missale Romanum formulary); Wikipedia, \"Gaudete Sunday\" (rev. 1343206205)",
      },
    },
    communion: {
      title: "Dicite: Pusillanimes confortamini",
      latin: "Dícite : Pusillánimes, confortámini, et nolíte timére : ecce Deus noster véniet, et salvábit nos.",
      translation: "Say: You faint-hearted, take courage, and fear not: behold, our God will come, and will save us.",
      mode: "Communion · 3rd Sunday of Advent (Gaudete) · Mode VII",
      reference: "Is. 35:4",
      gabc: "(c3) DI(ef)ci(fdfe)te :(e.) *(;) Pu(e)sil(ef'h)lá(gh'i)ni(i)mes(i.) (,) con(i)for(i)tá(kik)mi(kkk)ni,(klkk/iji.) (;) et(h) no(h)lí(hj)te(iji) ti(h)mé(hj)re :(ijii/ghg.) (:) ec(g!hwi'!jv)ce(i) De(i)us(i) no(i)ster(gi) vé(hi)ni(ghG'__FE'f)et,(fe..) (;) et(d!f'h) sal(h)vá(hg/hf)bit(hfgv_[oh:h]F~E~) nos.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #218)",
      blurb: {
        text: "Isaiah 35:4 speaks directly to the fainthearted, telling them to take courage and not fear. The Gaudete Sunday Communion places that command beside the promise that God will come and save.",
        source: "Is. 35:4 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Adv3-0.txt [Officium heading]; Divinum Officium, Adv3-0 (Missale Romanum formulary)",
      },
    },
  },
  "rorate": {
    gradual: {
      title: "Prope est Dominus",
      latin: "Prope est Dóminus ómnibus invocántibus eum : ómnibus qui ínvocant eum in veritáte. ℣. Laudem Dómini loquétur os meum : et benedícat omnis caro nomen sanctum ejus.",
      translation: "The Lord is near to all that call upon him: to all that call upon him in truth. ℣. My mouth shall speak the praise of the Lord: and let all flesh bless his holy name.",
      mode: "Gradual · 4th Sunday of Advent / Rorate Mass · Mode V",
      reference: "Ps. 145:18, 21",
      gabc: "(c4) PRo(f)pe(f) est(f) Dó(f_)mi(d)nus(d//ffg/fffd) (,) (ff/ge'fvDC'//fd'/e[ll:1]ddc.) (;) * ó(f)mni(gh)bus(h) in(h)vo(g)cán(fhg)ti(g)bus(g) (`) e(hg/h!jjjh)(,)(jjjvIH'jggfg)um :(gf..) (:) ó(hj)mni(gf)bus(f) qui(f) ín(f)vo(e)cant(dgf~) e(fge'/fddcd)um(dc..) (;) in(e_[oh:h]) ve(c)ri(d!ewf)tá(fgF//C'd!fff)te.(f.) (,) (ixhhg/hh//gh!ivGF/!hh//iyfh!jkijh.) (,) (fg/h!jj/klijh.ixgiHF.1) (z0::c3) ℣. Lau(hh)dem(h) Dó(h)mi(h)ni(ihh'hh_f) (,) (hhf/hhe//gxfgED./[-3]gy/[0.5]hhjvIH//hvGF.) (:) lo(f!h'i)qué(i)tur(ih/jkIH'hf.) (,) os(hf/hhh) me(h)um :(h.f!gwh!iv.hi/!jh/!h/iih.0) (:) et(d) be(d)ne(fe)dí(eh)cat(h.) (,) o(ihhg~)mnis(i'/jk) ca(i_[oh:h]h)ro(hg/i_[oh:h]h//jvIH'Ghf..) (;) no(f_e)men(gxegf'gvE'D) san(fe~)ctum(h.) *(,) e(hiH'F)jus.(f./de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #284)",
      blurb: {
        text: "Prope est Dominus draws two verses from Psalm 145, but not two consecutive ones. The respond takes verse 18, then the verse (℣) leaps to verse 21, passing over verses 19 and 20, which speak of God hearing the prayers of those who fear him and destroying the wicked. The psalm's verse 21 also closes with the phrase \"in sæculum, et in sæculum sæculi\" (forever and ever), which the chant quietly omits.",
        source: "Ps. 145:18, 21 (Vulgate numbering Ps. 144:18, 21) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Veni Domine et noli tardare",
      latin: "Allelúia. ℣. Veni, Dómine, et noli tardáre : reláxa facínora plebis tuae.",
      translation: "Alleluia. ℣. Come, O Lord, and do not delay: forgive the sins of your people.",
      mode: "Alleluia · 4th Sunday of Advent / Rorate Mass · Mode III",
      reference: "",
      gabc: "(c4) AL(eef)le(dg)lú(g_[oh:h]i_[oh:h]g_[oh:h]/h!iwjjk){ia}.(i.) *(,) {ij.}(g.h!iwj_h//jh/ig.) (,) (g.h!iwj_h//jh/igge.) (,) (ef'ghghF'Ef_gffe.) (::) ℣. Ve(c.d!ewff)ni,(fg) Dó(g_[oh:h]f)mi(ixf!gwh'!iv)ne,(hiHG'gf.0) (;) et(f.0h!iwjj) no(j)li(ixjjvIG') tar(g!jj)dá(ixkjjh/ih)re :(h.) (:) re(fg)lá(h/jhhfg)xa(gv.ff/ded.) (;) fa(d)cí(ixff/h/ig/hh//gg/hfg.)(,)(ixgjjh/ig/hh//gg/hfg.)(;)(ixjjjh/ig/hh//gg/hfg.)(,)(ef/ghgfv.efd.1)(,)(de!fvghg)no(f_efvED)ra(e[ll:1]d..) (;) * ple(ff)bis(fg) tu(g_[oh:h]f/hgh)ae.(hhf.) (,) (h_ghvFDgff'fvEC//ggf/ghddc/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #224)",
      blurb: {
        text: "Veni Domine et noli tardare asks the Lord to come without delay and to forgive the sins of his people. At the Rorate Mass, the short verse becomes a direct cry for the Lord's coming.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Ave Maria",
      latin: "Ave María, grátia plena : Dóminus tecum : benedícta tu in muliéribus, allelúia.",
      translation: "Hail Mary, full of grace: the Lord is with you: blessed are you among women, alleluia.",
      mode: "Offertory · 4th Sunday of Advent / Rorate Mass · Mode VIII",
      reference: "Luke 1:28",
      gabc: "(c3) A(gxdef!hvvFE'//gvFE)ve(e_[uh:l]f) *(,) Ma(fdf)rí(h_g//ijIH'hg/hf)a,(fe..) (;) grá(hhf!gwhefvED'CB.)(,)(ef/h.f!gwh)ti(h)a(g.) ple(hiHF.g/hiH//E.)(,)(fhFEf./ih/ijh)na :(hiih.0) (:) Dó(fvEDevDC'db.0/cd!effe)mi(de)nus(e.) (`) te(fe/hhe//ffdev.)(,)(de/f_de./df!hvGFE'f)cum :(fe..) (:) be(hi)ne(ih)dí(h'/jij)cta(h.f!gwh/ih) tu(he..) (,) in(ef) mu(fh)li(fe)é(e_[oh:h][ll:1]d/efD'CB.)(,)(cd/e_[oh:h][ll:1]d/f_e)ri(de)bus,(effe.) (;) al(fe~)le(fdf)lú(h_g/ijIH'hg/hf){ia}.(fe/fgffe.) (::)",
      source: "Graduale Romanum (GregoBase #210)",
      blurb: {
        text: "The Ave Maria Offertory draws its text entirely from a single verse, Luke 1:28, the angel Gabriel's greeting to Mary at the Annunciation. The chant reproduces the verse almost exactly as it stands in the Vulgate, \"Ave gratia plena : Dominus tecum : benedicta tu in mulieribus\", and then adds \"alleluia\", a word that appears nowhere in the surrounding biblical passage. The very next verse of Luke, not sung, records that Mary \"was troubled\" at these words and wondered what the salutation could mean.",
        source: "Luke 1:28 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Ecce Virgo concipiet",
      latin: "Ecce Virgo concípiet, et páriet fílium : et vocábitur nomen ejus Emmánuel.",
      translation: "Behold a Virgin shall conceive and bear a son: and his name shall be called Emmanuel.",
      mode: "Communion · 4th Sunday of Advent / Rorate Mass · Mode I",
      reference: "Is. 7:14",
      gabc: "(c4) EC(d)ce(dfe) vir(fg)go(d.) (,) * con(ce)cí(gh)pi(g_[oh:h]f)et,(fv.efd.1) (;) et(de) pá(gh!jj/kh)ri(gh)et(h) fí(h)li(h!iwjh)um :(h.) (:) et(h_g) vo(jj)cá(h_g)bi(ixihi)tur(gh/i_[oh:h]h) (,) no(fe)men(f) e(ixg!hw!ivH~G~)jus(hg..) (,) Em(f_[oh:h]g_[oh:h]e_[oh:h]e[ll:1]d)má(d!ewf!g'h)nu(fvED)el.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1144)",
      blurb: {
        text: "Ecce Virgo concipiet draws its text from Isaiah 7:14, beginning mid-verse. The full verse opens with a signal that what follows is a sign given to the house of David, but the chant drops that opening clause and begins with the sign itself: Ecce, Virgo concipiet. The words thus present the sign itself without the verse's opening reference to the house of David.",
        source: "Is. 7:14 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C10a (Missale Romanum formulary)",
      },
    },
  },
  "christmas-vigil": {
    gradual: {
      title: "Hodie scietis",
      latin: "Hódie sciétis, quia véniet Dóminus, et salvábit nos : et mane vidébitis glóriam ejus. ℣. Qui regis Israel, inténde : qui dedúcis velut ovem Joseph : qui sedes super Chérubim, appáre coram Ephraim, Bénjamin, et Manásse.",
      translation: "Today you shall know that the Lord will come, and save us: and in the morning you shall see his glory. ℣. Give ear, O you that rule Israel: you that lead Joseph like a sheep: you that sit upon the Cherubim, shine forth before Ephraim, Benjamin, and Manasses.",
      mode: "Gradual · The Nativity of the Lord (Vigil Mass) · Mode II",
      reference: "Ex. 16:6, 7",
      gabc: "(c3) HO(egf)di(f)e(f.) *(,) sci(f)é(hfghvF'Ege/fg)tis,(f.) (;) qui(f)a(f) vé(hf/hi'j)ni(hvGF)et(gxfegvFE.) (,) Dó(e[ll:1]d/fef)mi(fef)nus,(fd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) et(f) sal(e)vá(hh)bit(hji) nos :(ihhf.) (;) et(f) ma(h.f!gwh/i_[oh:h]f/ij)ne(h_fhv.ghF'Ef.) (;) vi(h)dé(hfh)bi(hhh)tis(h.f!gwh!iv.hi/jhh/iih.0) (:) gló(de'f!hvGF'g)ri(e)am(f) e(hf/h_i)jus.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Qui(f) re(h)gis(hi) Is(i)ra(i)el,(i.) (,) in(ij~)tén(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)de :(ji..) (:) qui(i!jw!kvJI'jw!kvJI) de(i)dú(i)cis(i.) (,) vel(i)ut(i) o(i)vem(ij~) Jo(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIH/!jvIHif)seph :(f.) (:) qui(hh) se(hji)des(ihhf.) (,) su(f)per(f) Ché(f)ru(fi)bim,(i_[oh:h]f/ijH'Fhv.ghF'E) (,) ap(fef)pá(hf/hhh)re(h.f!gwh!iv.hi/jhh/iih.0) (:) co(f)ram(f) E(fi)phra(i)im,(ijH'Ghh) (,) (gh!ijHF.hvF'Efh/!hf//hvvGF'/!hee[ll:1]d.0) (:) Bén(d)ja(ef)min,(f.0/[-0.5]hvGF'g) () * et(ef) Ma(hf)ná(hi)sse.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #202)",
      blurb: {
        text: "Hodie scietis announces that the Lord will come and save his people, with his glory revealed in the morning. The Christmas Vigil Gradual turns that promise into watchful hope at the threshold of the feast.",
        source: "Ex. 16:6, 7 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    alleluia: {
      title: "Crastina die",
      latin: "Allelúia. ℣. Crástina die delébitur iníquitas terrae : et regnábit super nos Salvátor mundi.",
      translation: "Alleluia. ℣. Tomorrow the iniquity of the earth shall be abolished: and the Saviour of the world shall reign over us.",
      mode: "Alleluia · The Nativity of the Lord (Vigil Mass) · Mode VIII",
      reference: "",
      gabc: "(c3) AL(e)le(ef)lú(fg){ia}.(e.) *(,) ij.(fe/fhGE.ee/fe/fe/fhGE.) (;) (giHG'FEfe//fhG'FEffe.) (::) ℣. Crá(eee)sti(eh)na(h) di(hg)e(fe/fgffe.) (;) de(e)lé(ei)bi(ivHG'h)tur(hg..) (,) in(e)í(g)qui(f)tas(hg) ter(fe)rae :(e./fhg/hihhg.) (:) et(e) re(eh)gná(h)bit(hg) su(f)per(fe~) nos(e./fgffe.) (;) * Sal(eee)vá(e)tor(fg) mun(g)di.(g_[oh:h]e) (,) (fe/fhGE.ee/fe/fe/fhGE.) (;) (giHG'FEfe//fhG'FEffe.) (::)",
      source: "Graduale Romanum (GregoBase #167)",
      blurb: {
        text: "\"Crastina,\" tomorrow, gives this Alleluia verse its particular weight when sung at the Vigil Mass. The Vigil is celebrated on the eve of the Nativity, so the proclamation that tomorrow the iniquity of the earth will be abolished and the Saviour will reign is not a figure of speech but a liturgical statement. The day the verse points toward is Christmas Day, now hours away.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Tollite portas",
      latin: "Tóllite portas, príncipes, vestras : et elevámini, portae aeternáles, et introíbit Rex glóriae.",
      translation: "Lift up your gates, O you princes: and be lifted up, O eternal gates, and the King of glory shall enter in.",
      mode: "Offertory · The Nativity of the Lord (Vigil Mass) · Mode II",
      reference: "Ps. 24:7",
      gabc: "(c3) TOl(ce/fgf)li(f)te(f.) * por(f!gwh/ig/hffe~)tas,(f.) (,) prín(f/hhh)ci(h)pes,(hji) ve(i_[oh:h]h//hhhvF'Ef!gwh_f)stras :(f.) (:) et(fge) e(h)le(hif)vá(hhhjvIHhv'1GF)mi(gf)ni,(f.) (;) por(f!gwh/ihhvG~F~)tae(f.) ae(hfh)ter(efe~)ná(hi!kvJI)les,(ih..) (:) et(h_f) in(hi)tro(i_[oh:h]h)í(hfivHG'F)bit(fhffe.) (;) Rex(ef!hhi) gló(jkI'H)ri(h_g)ae.(hhh_f) (,) (h/ihh'h//hhhf/ihghf//ihh'hh_efv.) (::)",
      source: "Graduale Romanum (GregoBase #171)",
      blurb: {
        text: "Psalm 24 repeats its command to the gates in verses 7 and 9, framing the question of the King of glory. The Christmas Vigil Offertory uses the first of those refrains as Christ's coming draws near.",
        source: "Ps. 24:7 (Vulgate numbering Ps. 23:7) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Revelabitur gloria Domini",
      latin: "Revelábitur glória Dómini : et vidébit omnis caro salutáre Dei nostri.",
      translation: "The glory of the Lord shall be revealed: and all flesh shall see the salvation of our God.",
      mode: "Communion · The Nativity of the Lord (Vigil Mass) · Mode I",
      reference: "Is. 40:5",
      gabc: "(c4) RE(dfe)ve(f)lá(fhg)bi(g_[oh:h]f)tur(fv.efd.1) ~~~~~~~*~~~(;) gló(d!f'g)ri(gf)a(f) Dó(ghgh)mi(g)ni :(fgFD.1) (:) et(d) vi(fe)dé(f_eg)bit(f) o(fff)mnis(d) ca(fv.egf)ro(f.) (;) sa(f)lu(ghg)tá(hv.fh!jvvH'GE'f)re(f.) (,) De(f_dfvECfhg___)i(ghF'Ef) no(d_[oh:h]e_[oh:h]d_[oh:h])stri.(d.) (::)",
      source: "Graduale Romanum (GregoBase #367)",
      blurb: {
        text: "Revelabitur gloria Domini draws from Isaiah 40:5, the verse that follows the call to prepare a way in the desert. The Vulgate closes that verse with \"quod os Domini locutum est,\" that the mouth of the Lord has spoken, but the chant replaces that ending with \"salutáre Dei nostri,\" turning the promise of revealed glory into an explicit reference to the salvation of God. Sung as the Communion on the eve of Christmas, it is paired with an Epistle from Romans 1:1-6, in which Paul announces the Gospel of God concerning his Son, born of the seed of David.",
        source: "Is. 40:5 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Sancti-12-24 (Missale Romanum formulary)",
      },
    },
  },
  "dominus-dixit": {
    gradual: {
      title: "Tecum principium",
      latin: "Tecum princípium in die virtútis tuae : in splendóribus sanctórum, ex útero ante lucíferum génui te. ℣. Dixit Dóminus Dómino meo : Sede a dextris meis : donec ponam inimícos tuos scabéllum pedum tuórum.",
      translation: "With you is the principality in the day of your strength: in the brightness of the saints, from the womb before the day star I begot you. ℣. The Lord said to my Lord: Sit at my right hand: until I make your enemies your footstool.",
      mode: "Gradual · The Nativity of the Lord (Mass during the Night) · Mode II",
      reference: "Ps. 110:3, 1",
      gabc: "(c3) TE(f)cum(c) prin(f)cí(f)pi(fgF'Efef)um(f.) *(,) in(hh/ijIH') di(ig'hvF'Ef/hh/if)e(f.) (;) vir(f!gwh)tú(hv.gihghf)tis(gxfegvFE.) (`) tu(e[ll:1]d/fef)ae :(fd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) in(f) splen(e)dó(hh)ri(hji)bus(ihhf.) (,) san(f)ctó(h.f!gwh/i_[oh:h]f/ij)rum,(h_fhv.ghF'Ef.) (;) ex(f) ú(hfh)te(hhh)ro(h.f!gwh!iv.hi/jhh/iih.0) (:) an(hhi~)te(h) lu(h)cí(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF')fe(f)rum(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) gé(de'fhvGF'g)nu(ef)i(hf/h_i) te.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Di(f)xit(h) Dó(hi)mi(i)nus(i) (`) Dó(i)mi(i)no(ij) me(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)o :(ji..) (:) Se(i!jw!kvJI'jw!kvJI)de(i.) (,) a(i) dex(i)tris(ij) me(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)is :(f.) (:) do(hh)nec(h) po(hji)nam(ihhf.) (,) in(f)i(fi)mí(i_[oh:h]f/ij)cos(h_fhv.ghF'Ef.) (,) tu(hf/hhh)os(h.f!gwh!iv.hi/jhh/iih.0) (:) sca(hh)bél(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF)lum(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) pe(de'fhvGF'g)dum(e) *() tu(f)ó(hf/h_i)rum.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #518)",
      blurb: {
        text: "Tecum principium draws from Psalm 110, but reverses the psalm's own order. The gradual opens with verse 3, the declaration of eternal begetting, before verse 1 arrives as the versicle. Psalm 110 itself begins with the Lord's invitation to sit at his right hand, yet the compilers placed the words of the Father speaking of the Son's origin first, so that on Christmas night the listener hears that origin before hearing the Son enthroned.",
        source: "Ps. 110:3, 1 (Vulgate numbering Ps. 109:3, 1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Dominus dixit ad me",
      latin: "Allelúia. ℣. Dóminus dixit ad me : Fílius meus es tu, ego hódie génui te.",
      translation: "Alleluia. ℣. The Lord said to me: You are my Son, this day have I begotten you.",
      mode: "Alleluia · The Nativity of the Lord (Mass during the Night) · Mode VIII",
      reference: "Ps. 2:7",
      gabc: "(c3) AL(def)le(f_e/f!gwhg)lú(fhh'1h){ia}.(hiHF'fe.) *(;) ij.(gh//efED.f!gwhhgehf/gffe.) (::) ℣. Dó(hv.gih)mi(h)nus(h) di(hg)xit(g) ad(gh!ivvHFhf/gh) me :(g.) (;) Fí(g)li(gf)us(hji) me(h)us(gh) es(f_ehvvGE.gxfgFD.1gxegF'Efe) tu,(e.) (:) e(efeh)go(h) (,) hó(hfh'GE//fhF'D//gxgvFEf.0/[-0.5]hhh/ijHF.1)(,)(g_[oh:h]i_[oh:h]g_[oh:h]ivHG'he.gxf_e/!g_[oh:h]e/!/!gvFEfd)di(e[ll:1]d)e(d.) *(;) gé(fde)nu(ef)i(hg/hfh) te.(ghFE.) (,) (df!hvF'E//d.0f!gwhghvGFg.//egf'/!gvE'Defe.) (;) (gxhhvF'E/!fgED.gyhhvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #890)",
      blurb: {
        text: "Psalm 2 verse 7 sits within a longer address, one that moves quickly into promises of dominion over the Gentiles and the ends of the earth. This alleluia verse draws only the declaration itself, \"Dominus dixit ad me: Filius meus es tu; ego hodie genui te,\" the Father's word of begetting, and lets the verses of conquest that follow in the psalm remain aside.",
        source: "Ps. 2:7 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Laetentur caeli",
      latin: "Laeténtur caeli, et exsúltet terra ante fáciem Dómini : quóniam venit.",
      translation: "Let the heavens rejoice, and let the earth be glad before the face of the Lord: because he comes.",
      mode: "Offertory · The Nativity of the Lord (Mass during the Night) · Mode IV",
      reference: "Ps. 96:11, 13",
      gabc: "(c4) LAe(cd'f)tén(f)tur(ef'g) *() cae(dgF'E//ghG'FgvFE)li,(f.) (;) et(f) ex(f)súl(fgf/gff'fd~)tet(dgF'E) (,) ter(hgh_fhggd~)ra(dgF'EfgFD.1) (:) an(df/gef)te(f.) fá(f/[1]{/[-3]ix}f/hih/ih)ci(hg)em(gh/igh.) Dó(e.f!gwhhg)mi(gf)ni :(fg!hvhg.) (;) quó(g_[oh:h]d)ni(dgF'E)am(e.) ve(eg!hvGFghg)nit.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #811)",
      blurb: {
        text: "Laetentur caeli draws from two non-consecutive verses of Psalm 96, skipping verse 12 entirely. Verse 11 reads in full, \"Let the heavens rejoice, and let the earth be glad, let the sea be moved, and the fulness thereof,\" and verse 12 continues, \"The fields and all things that are in them shall be joyful. Then shall all the trees of the woods rejoice.\" The chant sets aside both of these images and joins verse 11's opening directly to verse 13's arrival of the Lord, also dropping verse 13's closing line about judgment in justice and truth.",
        source: "Ps. 96:11, 13 (Vulgate numbering Ps. 95:11, 13) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "In splendoribus sanctorum",
      latin: "In splendóribus sanctórum, ex útero ante lucíferum génui te.",
      translation: "In the brightness of the saints, from the womb before the day star I begot you.",
      mode: "Communion · The Nativity of the Lord (Mass during the Night) · Mode VI",
      reference: "Ps. 110:3",
      gabc: "(c4) IN(f) splen(d)dó(ff)ri(d)bus(ff) * san(g_[oh:h]f)ctó(f_[oh:h]g_[oh:h]f_[oh:h])rum,(f.) (;) ex(f) ú(fg'h)te(h_g)ro(gv.fgFD.1) (;) an(ffg~)te(f) lu(hg)cí(hv.f!h'j)fe(g)rum(fgFD.1) (,) gé(df/gh)nu(ff)i(f_[oh:h]g_[oh:h]f_[oh:h]) te.(f.) (::)",
      source: "Graduale Romanum (GregoBase #117)",
      blurb: {
        text: "In splendoribus sanctorum takes only the second half of Psalm 110:3, setting aside the opening clause about the Lord's rule in the day of his strength, and beginning instead with the image of brightness and birth before the morning star. It is sung at Communion during the Mass of Christmas Night, whose Gospel is Luke 2:1-14, the account of the birth in Bethlehem. The melody is a rare instance of pure pentatonic writing in chant, which leaves its modal assignment uncertain.",
        source: "Ps. 110:3 (Vulgate numbering Ps. 109:3) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Sancti-12-25m1 (Missale Romanum formulary); Wikipedia, \"In Splendoribus Sanctorum\" (rev. 1331260082)",
      },
    },
  },
  "lux-fulgebit": {
    gradual: {
      title: "Benedictus qui venit",
      latin: "Benedíctus qui venit in nómine Dómini : Deus Dóminus, et illúxit nobis. ℣. A Dómino factum est : et est mirábile in óculis nostris.",
      translation: "Blessed is he that comes in the name of the Lord: the Lord is God, and he has shone upon us. ℣. This is the Lord's doing: and it is wonderful in our eyes.",
      mode: "Gradual · The Nativity of the Lord (Mass at Dawn) · Mode V",
      reference: "Ps. 118:26, 27, 23",
      gabc: "(c3) BE(d)ne(fh)dí(h)ctus(f.) *(,) qui(h_g) ve(hiH'GF)nit(fhE'Deffe.) (;) in(d) nó(gxefe/fg)mi(f)ne(hffe.) (,) Dó(f!gwh_g)mi(hiH'GF)ni :(fighvGF.) (:) De(hvGF')us(h) Dó(hg/hi'j)mi(hvGF)nus,(fhE'Deffe.) (;) et(f) il(h)lú(h)xit(gh~) no(f)bis.(gxfe/fgED'ewfef.) (,) (hiHF'ghf./ghFE'gvFE.) (,) (d!ew!f!e/fhff/ded.) (::) ℣. A(df) Dó(h)mi(h)no(ihh'hfhv.ijh.1) (,) (hv.ijIH.ijHF.ghFD.1) (;) (fdfED//fd/ef!hh/ig/hf/hi!kkkh..) (;) fa(hhihhf)ctum(hfhhe/fd) est :(d.) (:) et(hh) est(hi/j_h) mi(h)rá(hiH'GhvGF.ihhf'/ghf'/ghf.1)(,)(de/f!hh/ijhhg)bi(hg)le(h.) *(;) in(hh) ó(h)cu(h)lis(h) no(ihhf)stris.(hhhf/hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #217)",
      blurb: {
        text: "Psalm 118 supplies the body and verse of this Gradual, though not in sequence. The body draws from verses 26 and 27, trims both passages, and then reaches back to verse 23. Verse 24 remains between them unused: \"This is the day which the Lord hath made: let us be glad and rejoice therein.\"",
        source: "Ps. 118:26, 27, 23 (Vulgate numbering Ps. 117:26, 27, 23) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Dominus regnavit decorem",
      latin: "Allelúia. ℣. Dóminus regnávit, decórem índuit : índuit Dóminus fortitúdinem, et praecínxit se virtúte.",
      translation: "Alleluia. ℣. The Lord has reigned, he is clothed with beauty: the Lord is clothed with strength, and has girded himself with power.",
      mode: "Alleluia · The Nativity of the Lord (Mass at Dawn) · Mode II",
      reference: "Ps. 97:1",
      gabc: "(f3) AL(ef)le(f)lú(hhivHGh_i){ia}.(ijIH'h//fihhe/f!gwhf.1) (,) * {ij.}(hhf/hghvFE//ivHGh.f!gwhf.1) (::) ℣. Dó(fi!jvIHfihi)mi(ighf)nus(f.) (,) re(feg)gná(gv.fig/h.f!gwhgh)vit,(hg..) (;) de(gh)có(ijij)rem(h_f/hjI'Gh.) (,) ín(eg/ihi/ghf.1/hiH'Gh)du(f_[oh:h]g_[oh:h]f_[oh:h])it :(f.) (:) ín(f)du(f!h'i)it(ijI'Hh'h) Dó(gh!ivHF.gh'i)mi(i)nus(i) (,) for(kxji/jki)ti(h)tú(hjihhf)di(f)nem,(fh//fhhegvFE.) (;) et(e) prae(f)cín(hhi)xit(f) se(fhg) *(,) vir(hi~)tú(ivihi)te.(i./jijIG.hiH'//Ef!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #714)",
      blurb: {
        text: "Dominus regnavit decorem induit draws on the opening verse of Psalm 97, which the Douay-Rheims heads as a prophecy of the glorious coming and reign of Christ and of his coming to judge the world. Only that first verse is taken; the psalm's subsequent verses, with their images of fire going before the Lord and burning his enemies, are left aside. The single verse is set as the Alleluia for the Mass at Dawn on the Nativity, placing a royal and judicial proclamation at the heart of the celebration of Christ's birth.",
        source: "Ps. 97:1 (Vulgate numbering Ps. 96:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Deus enim firmavit",
      latin: "Deus enim firmávit orbem terrae, qui non commovébitur : paráta sedes tua, Deus, ex tunc, a saéculo tu es.",
      translation: "For God has established the world, which shall not be moved: your throne, O God, is prepared from of old: you are from everlasting.",
      mode: "Offertory · The Nativity of the Lord (Mass at Dawn) · Mode VIII",
      reference: "Ps. 93:1-2",
      gabc: "(c4) DE(h)us(fhg) e(g)nim(g.) *() fir(hg~)má(hjh___!iwj)vit(g.) (,) or(fgh!jjj_h/jjjh~)bem(hv.f!hfg) ter(g)rae,(g/jjhgiHG'gf.0) (;) qui(fg) non(gh!jjjvHGjjjvHG'g/fg~) com(g)mo(ghfg)vé(g)bi(ghg___)tur :(g.) (:) pa(j)rá(ikjj'j)ta(h_g) (,) se(j_i//jjj_g/j)des(j.jjj) tu(h_g)a,(g_[oh:h]f) De(giH'G)us,(g.) (,) ex(f) tunc,(g_h_g_2/h_[oh:h]i_[oh:h]h._[oh:h]) (:) a(g) saé(g!jjj)cu(h.g!hwi_[oh:h]h)lo(hggf.0) (,) tu(fg'h//fg!hih/ig/hhg) es.(g.) (::)",
      source: "Graduale Romanum (GregoBase #979)",
      blurb: {
        text: "Deus enim firmavit draws from Psalm 93, verses 1 and 2, taking only the second half of verse 1 and setting aside its opening lines about the Lord reigning and being clothed with strength and beauty. Where the psalm's Latin reads \"Etenim firmavit,\" meaning for indeed he has established, the Offertory opens instead with \"Deus enim firmavit,\" inserting God's name directly and turning a subordinate clause into a declaration. The verses the chant leaves aside speak of floods lifting their voice and the surges of the sea.",
        source: "Ps. 93:1-2 (Vulgate numbering Ps. 92:1-2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Exsulta filia Sion",
      latin: "Exsúlta, fília Sion, lauda, fília Jerúsalem : ecce Rex tuus venit sanctus, et Salvátor mundi.",
      translation: "Rejoice greatly, O daughter of Sion, shout for joy, O daughter of Jerusalem: behold, your King comes, the Holy One and the Saviour of the world.",
      mode: "Communion · The Nativity of the Lord (Mass at Dawn) · Mode IV",
      reference: "Zach. 9:9",
      gabc: "(c4) EX(d!ewf)súl(cd~)ta(d) *(,) fí(d!f'g)li(gh)a(h) Si(ghe)on,(e.) (;) lau(e_[uh:l]g!hi)da(h) (,) fí(hjj)li(hg)a(g) Je(fg'h)rú(ghf)sa(egff)lem :(fe..) (:) ec(e)ce(g) Rex(h) tu(i_[oh:h]h)us(ij) ve(hiHG'h)nit(hg..) (,) san(h_g~)ctus,(g_[oh:h]f) et(gh) Sal(f)vá(e.f!gwh)tor(hg~) mun(egff)di.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1125)",
      blurb: {
        text: "Exsulta filia Sion takes the opening call of Zacharias 9:9 but stops before the prophecy's description of the King riding on an ass. At Christmas Dawn, the Communion keeps its attention on the holy King who comes.",
        source: "Zach. 9:9 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Sancti-12-25m2 (Missale Romanum formulary)",
      },
    },
  },
  "mary-mother-of-god": {
    gradual: {
      title: "Viderunt omnes",
      latin: "Vidérunt omnes fines terrae salutáre Dei nostri : jubiláte Deo, omnis terra. ℣. Notum fecit Dóminus salutáre suum : ante conspéctum géntium revelávit justítiam suam.",
      translation: "All the ends of the earth have seen the salvation of our God: sing joyfully to God, all the earth. ℣. The Lord has made known his salvation: in the sight of the nations he has revealed his justice.",
      mode: "Gradual · Mary, the Holy Mother of God · Mode V",
      reference: "Ps. 98:3, 2",
      gabc: "(c3) VI(d)dé(d)runt(fh~) o(hiH'F//hhhjvIH)mnes(h.) *(,) fi(hi)nes(h_f) ter(hfhhf)rae(f/hhf/hg/hf..) (;) sa(f)lu(hg)tá(h_gi)re(ivHGh_f) (,) De(f_e/f!gwh/i_[oh:h]h)i(hg/ijk) no(i_[oh:h]h)stri :(hg/hf..) (:) ju(f)bi(hg)lá(h)te(hhh) De(fhee[ll:1]d)o(de!fhFD.1) (;) o(d!f'h/ijh)mnis(gxh.f!gw!hvGE'fw!gvFE) ter(ded)ra.(d!f'h//d!f'hhv'1GE//dfe/fee[ll:1]d.0) (::) ℣. No(d)tum(fe~) fe(eh)cit(hi~) Dó(ihhf/hiHG.hiFD.1)(,)(f/hhi/hhf/hiHG.hiFD.1)(,)(gxfg//e!g'h/ghghvFD.1)(,)(fdfED//fd/ef!hh/i!jwk)mi(ih)nus(hiHF.1) (;) sa(f)lu(hg)tá(hhf/hhf)re(f) su(fhf/hhf)um :(f.) (:) an(f)te(f) con(fi~)spé(i)ctum(hiH'F) gén(h.i!jwk)ti(ih)um(hiHF.1) (;) re(f!h'i/hhf)ve(f)lá(hfhhe/fd)vit(d.) *(,) ju(f)stí(f/hhfg)ti(ef)am(gxhf/ge) su(d)am.(cd/efe.) (,) (de!fhFE.gxde'f!hhe'gvFD.1) (::)",
      source: "Graduale Romanum (GregoBase #1163)",
      blurb: {
        text: "Viderunt omnes celebrates the salvation God makes known to all the ends of the earth. The psalm joins that salvation to God's mercy and truth toward Israel, before calling the whole earth to sing joyfully.",
        source: "Ps. 98:3, 2 (Vulgate numbering Ps. 97:3, 2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Multifarie olim Deus",
      latin: "Allelúia. ℣. Multifárie olim Deus loquens in prophétis, novíssime diébus istis locútus est nobis in Fílio suo.",
      translation: "Alleluia. ℣. God, who at sundry times spoke in times past to the fathers by the prophets, last of all in these days has spoken to us by his Son.",
      mode: "Alleluia · Mary, the Holy Mother of God · Mode VII",
      reference: "Heb. 1:1-2",
      gabc: "(c3) AL(ef)le(ev.df/he/fe)lú(df!hvGFij){ia}.(i.) (,) * i{j.}(ivHG'Efde.) (;) (ei/ji/jijvIHije.___fvED/!e_[uh:l]f//hvGFgvFE'ec.) (,) (ef!hv.jvIH'G//ehf/gffe.) (::) ℣. Mul(ef)ti(ev.df/he/fe)fá(df!hvGFi)ri(ji)e(i.) (,) o(ivHG'Efde)lim(e.) (;) De(ij/klK'JI'j)us(i.) (,) lo(ij)quens(i) in(ij) pro(hi)phé(ik[oll:1]!lvKIkvJI//lmK'[oll:0]JI)tis,(ijhi.) (:) no(ih)vís(j)si(kj)me(i.) (,) di(i)é(ih/k[oll:1]klvKI'j)bus(i) i(hi!kvJIkki)stis(i.) (:) lo(ef)cú(fi!jv)tus(i) est(i) no(ji/jjj_i/jjj_h)(,)(ij!klJI.hkJI'j)bis(ji..) (;) in(e[ll:1]d~) Fí(efe)li(de)o(ev.df/he/fe) () * su(df!hvGFij)o.(i.) (,) (ivHG'Efde.) (;) (ei/ji/jijvIHije.___fvED/!e_[uh:l]f//hvGFgvFE'ec.) (,) (ef!hv.jvIH'G//ehf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #863)",
      blurb: {
        text: "Multifarie olim Deus contrasts God's former speech through the prophets with his final speech through his Son. The passage goes on to name the Son heir of all things and the one through whom God made the world, which the Alleluia sings on the feast of Mary, the Mother of God.",
        source: "Heb. 1:1-2 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Tui sunt caeli",
      latin: "Tui sunt caeli, et tua est terra : orbem terrárum, et plenitúdinem ejus tu fundásti : justítia et judícium praeparátio sedis tuae.",
      translation: "Yours are the heavens, and yours is the earth: the world and its fullness you have founded: justice and judgment are the preparation of your throne.",
      mode: "Offertory · Mary, the Holy Mother of God · Mode IV",
      reference: "Ps. 89:12, 15",
      gabc: "(c4) TU(f)I(ded) sunt(f) *() cae(e/fgF'EfvED)li,(fd/efe.) (;) et(fd~) tu(dfe)a(f) est(g_[oh:h]efvEDgvFE) ter(hvGFgvFE)ra :(e.) (:) or(d!g'h)bem(g) ter(fgffe)rá(egffe)rum,(fff) (;) et(dec) ple(dfe)ni(e)tú(e!gfg)di(d)nem(d.) (,) e(ff/gd/fffd/fffv_E~D~)jus(e[ll:1]d..) (,) tu(f!h'j) fun(gh)dá(egff)sti :(fe..) (:) ju(hg)stí(h_ghvGE//f!gwhgh//f!gwhgh)ti(f)a(eef.) (,) et(f.d!ewf) ju(f)dí(fffhvGF'D//gvFE'D)ci(d!ewf_d)um(d.) (;) prae(d)pa(ef)rá(gh)ti(g)o(ghGF.efED.) (,) se(fv.fffdgvFE)dis(g_[oh:h]f/hggf/ghg) tu(egff)ae.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1274)",
      blurb: {
        text: "Tui sunt caeli draws from Psalm 89, but not from consecutive verses. It joins verse 12 to verse 15, skipping the intervening lines about the north, the sea, Thabor, Hermon, and the strength of God's arm. Verse 15 is also cut short: the psalm continues with \"misericordia et veritas praecedent faciem tuam\", mercy and truth shall go before thy face, but the offertory stops at the throne.",
        source: "Ps. 89:12, 15 (Vulgate numbering Ps. 88:12, 15) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Viderunt omnes",
      latin: "Vidérunt omnes fines terrae salutáre Dei nostri.",
      translation: "All the ends of the earth have seen the salvation of our God.",
      mode: "Communion · Mary, the Holy Mother of God · Mode I",
      reference: "Ps. 98:3",
      gabc: "(c4) VI(fg)dé(gff)runt(de~) o(cd~)mnes(d.) *(,) fi(d!f'g)nes(gh) ter(hjjg)rae(g_[oh:h]fhvGE.) (;) sa(f)lu(ghg)tá(hv.fh!jvvH'GE'f)re(f.) (,) De(f_dfvECfhg___)i(ghF'Ef) no(d_[oh:h]e_[oh:h]d_[oh:h])stri.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1139)",
      blurb: {
        text: "Psalm 98:3 holds two thoughts: that God has remembered his mercy and his truth toward the house of Israel, and that all the ends of the earth have seen his salvation. This Communion antiphon draws on only the second half of that verse, beginning with Viderunt omnes. The same words appear elsewhere in the Christmas season as a gradual, sung at Mass on Christmas Day and historically on its octave.",
        source: "Ps. 98:3 (Vulgate numbering Ps. 97:3) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Viderunt omnes\" (rev. 1266099101); Wikipedia, \"Chant Noël: Chants for the Holiday Season\" (rev. 1269226005)",
      },
    },
  },
  "holy-family": {
    gradual: {
      title: "Unam petii a Domino",
      latin: "Unam pétii a Dómino, hanc requíram, ut inhábitem in domo Dómini. ℣. Ut vídeam voluptátem Dómini : et prótegar a templo sancto ejus.",
      translation: "One thing I have asked of the Lord, this will I seek after: that I may dwell in the house of the Lord. ℣. That I may see the delight of the Lord: and may be protected from his holy temple.",
      mode: "Gradual · The Holy Family · Mode V",
      reference: "Ps. 27:4",
      gabc: "(c4) U(ffg)nam(f) pé(ghgh)ti(g)i(fgFD.1) (,) * a(d) Dó(dgf/gh)mi(g)no,(ixg./hiGF'fd/f_[oh:h]g_[oh:h]f._[oh:h]) (;) hanc(hj~) re(j_h)quí(jhjjh)ram,(h.) (;) ut(h) in(hj)há(j)bi(ixij!kvJ'IHi)tem(ih..) (,) in(ixi) do(hhg)mo(gh) Dó(hg/hf/g_[oh:h]f)mi(ef)ni.(ixf./hiHF.) (,) (hg/hjhh/fgf.) (z0::c3) ℣. Ut(d) ví(d)de(f)am(gxfh/ih/i_[oh:h]h//ivFD'//fh.ivFD'f!hfg.) (,) (fh/ih/i_[oh:h]h//ivFD'e_[oh:h][ll:1]d.0d'dd!f_h/ijh.1) (;) vo(hi)lu(h)ptá(h)tem(hg/ij) Dó(i_[oh:h]h)mi(h)ni :(hg/i_[oh:h]h//jvIH'Ghf..) (:) et(hh) pró(ih/ij_hih/ij_ij//hi/jij)te(j)gar(jh/jkihh/fgf.) (;) a(d) tem(d)plo(d) san(dfE'D)cto(ef) *() e(fhG'Fhhh)jus.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #229)",
      blurb: {
        text: "Unam petii a Domino draws on the fourth verse of Psalm 27, though not quite as the psalm has it: the gradual omits 'all the days of my life' and replaces 'visit his temple' with a prayer to be sheltered by the Lord's holy temple, both changes deepening the verse's note of refuge. The day's Gospel, from Luke 2, tells of the finding of the twelve-year-old Jesus in the Temple after three days of searching, so the image of the Temple as a place of dwelling and protection runs through the whole liturgy.",
        source: "Ps. 27:4 (Vulgate numbering Ps. 26:4) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Epi1-0 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Gaudete justi in Domino",
      latin: "Allelúia. ℣. Gaudéte, justi, in Dómino : rectos decet collaudátio.",
      translation: "Alleluia. ℣. Rejoice in the Lord, you just: praise becomes the upright.",
      mode: "Alleluia · The Holy Family · Mode IV",
      reference: "Ps. 33:1",
      gabc: "(c4) AL(d!ff)le(ef)lú(ghG'Fggh){ia}.(hjHG'gf.0) (;) * ij.(ghg'hvGF'fd./ghG'F//g_[oh:h]f/gffe.) (::) ℣. Gau(fffg~)dé(ixdg/hg/hi)te(h) ju(hhgh)sti(e.) (,) in(f!gwhg~) Dó(hhg)mi(hgh)no :(fgf'gvd_[oh:h]e_[oh:h]d._[oh:h]) (:) re(d!ffd/ffdd!ef!gh)ctos(ghg.) (,) de(h_f/gffv//ce'!gv//hgg'g//ggge//fefvED//fgfg)cet(fe..) (;) * col(e!fwg'!hv)lau(gh~)dá(hvGF)ti(ghg)o.(hjHG'gf.0) (;) (ghg'hvGF'fd./ghG'F//g_[oh:h]f/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #216)",
      blurb: {
        text: "Gaudete justi in Domino draws its verse from the opening of Psalm 33, though the chant quietly substitutes \"Gaudete\" for the Clementine Vulgate's \"Exsultate,\" arriving at the same meaning, rejoicing in the Lord, by a slightly different word. The psalm's second and third verses go on to name the instruments and the new song with which that praise is to be offered.",
        source: "Ps. 33:1 (Vulgate numbering Ps. 32:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "In te speravi Domine",
      latin: "In te sperávi, Dómine : dixi : Tu es Deus meus, in mánibus tuis témpora mea.",
      translation: "In you, O Lord, have I hoped: I said: You are my God, my times are in your hands.",
      mode: "Offertory · The Holy Family · Mode II",
      reference: "Ps. 31:15-16",
      gabc: "(f3) IN(c) te(ef'g) spe(f)rá(h.f!gwh/i_[oh:h]h)vi,(hhhvGEf!gw!hvGF') (,) * Dó(f)mi(f!gwhgh)ne :(gf..) (:) di(fh)xi :(hhh/i_[uh:l]j) (,) Tu(hiH'F) es(f.) De(f!gw!hvGF)us(ef) me(f!gwh/ihhgh)us,(hg..) (:) in(hh) má(hi/jij)ni(h)bus(hhvGF) tu(hh/i_[oh:h]h)is(h.) (;) tém(h_f/hhvF'E//f!hhh)po(f_e)ra(egf) me(f_[oh:h]g_[oh:h]f_[oh:h])a.(f.) (::)",
      source: "Graduale Romanum (GregoBase #967)",
      blurb: {
        text: "Psalm 31 places verses 15 and 16 in a moment of real distress: the psalmist is surrounded by enemies who have conspired to take his life. This offertory lifts out only the act of trust that follows, leaving that surrounding anguish behind. It also stops partway through verse 16, before the Vulgate's petition to be delivered from enemies and persecutors, closing instead on the quiet declaration that God holds all times in his hands.",
        source: "Ps. 31:15-16 (Vulgate numbering Ps. 30:15-16) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Tolle puerum et matrem ejus",
      latin: "Tolle púerum et matrem ejus, et vade in terram Israel : defúncti sunt enim, qui quaerébant ánimam púeri.",
      translation: "Take the child and his mother, and go into the land of Israel: for they are dead that sought the life of the child.",
      mode: "Communion · The Holy Family · Mode VII",
      reference: "Matt. 2:20",
      gabc: "(c3) TOl(ef)le(e) *() pú(fh)e(h_g)rum(hi) (,) et(i) ma(ivvHG')trem(f) e(gh)jus,(g.) (;) et(i) va(hhg)de(e) in(f!gwh) ter(h)ram(fh!ivG'Fg') Is(e)ra(efe___)el :(e.) (:) de(e)fún(fh)cti(g) sunt(h) e(ijij)nim,(hi/ji..) (;) qui(h) quae(h)ré(hj!kvJI)bant(ji__) (,) á(i)ni(h)mam(g_[oh:h]fhvG'Fg') pú(e)e(efe___)ri.(e.) (::)",
      source: "Graduale Romanum (GregoBase #1282)",
      blurb: {
        text: "Tolle puerum et matrem ejus takes its words from Matthew 2:20, the angel's command to Joseph to return to Israel with the child and his mother. The chant does not quote the verse exactly: the Vulgate opens with \"Surge, et accipe puerum, et matrem ejus,\" yet the chant drops \"Surge\" and substitutes \"Tolle\" for \"accipe,\" entering the command partway through. The surrounding verse, Matthew 2:19, places the moment after Herod's death, but the chant omits that framing, letting the imperative stand on its own.",
        source: "Matt. 2:20 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "dum-medium-silentium": {
    gradual: {
      title: "Speciosus forma",
      latin: "Speciósus forma prae fíliis hóminum : diffúsa est grátia in lábiis tuis. ℣. Eructávit cor meum verbum bonum : dico ego ópera mea Regi : lingua mea cálamus scribae velóciter scribéntis.",
      translation: "Beautiful in form beyond the sons of men: grace is poured abroad on your lips. ℣. My heart has uttered a good word: I speak my works to the King: my tongue is the pen of a scribe that writes swiftly.",
      mode: "Gradual · 2nd Sunday after the Nativity · Mode III",
      reference: "Ps. 45:3, 2",
      gabc: "(c3) SPe(e)ci(fhg)ó(h)sus(h.) *(,) for(hh//hhh.f!gwh/i_[oh:h]h//j_ijvIG)ma(ig/hi/jh) (,) (hhh'ih/ihhg.) (;) prae(fhg) fí(hihhf)li(hig)is(hiffe.) (,) hó(fhg/h_fi)mi(hg)num :(gv.eg/ihh/fgf.) (:) dif(f)fú(hf/ghg)sa(ge/f!hhhvFE'ec) est(d_e) (,) grá(eg)ti(g)a(fgF'Ef!hh/f!hhhvGF'hee[ll:1]d.0) (;) in(f) lá(hf/gh!ivFE')bi(feec)is(efe/f!hh) tu(gxfe/fgE'DefD'C)(,)(ef!hvvF'Eff//ef/ge)is.(c./eec//e[ll:1]d/ec..) (::) ℣. E(e)ru(e)ctá(e.f!gwhgh)vit(h_g) cor(g.h!iwjij) me(jihhf/ig/h_[oh:h]i_[oh:h]h_[oh:h])(,)(hhhvFEhg/h_i)um(ih/ihhg.) (;) ver(gh/iji/jhhg)bum(g) bo(h.f!gwh_g)num :(gv.eg/ihh/fgf.) (:) di(f)co(fi) e(ivvH'Fijhhgh)go(hg..) (;) ó(hv.fhg)pe(g)ra(g) me(gh/iji/jhhg)a(g.) (,) Re(h.f!gwh_g)gi :(gv.eg/ihh/fgf.) (:) lin(f)gua(f) me(f)a(f) cá(fgfg)la(ge/f!hhhvFE'ec)mus(d_e) (,) scri(eg)bae(fgF'Ef!hh/f!hhhvGF'hee[ll:1]d.0) (;) ve(f)ló(hf/gh!ivFE')ci(feec)ter(efef) (,) * scri(hh)bén(gxfe/fgE'DefD'C)(,)(ef!hvvF'Eff//ef/ge)tis.(c./eec//e[ll:1]d/ec..) (::)",
      source: "Graduale Romanum (GregoBase #1308)",
      blurb: {
        text: "Speciosus forma draws on two consecutive verses of Psalm 45, but reverses their order. Verse 3 of the psalm, beginning \"Thou art beautiful above the sons of men,\" becomes the body of the gradual, while verse 2, \"My heart hath uttered a good word,\" is set as the verse. The psalm's verse 3 also ends with a phrase not carried into the chant, \"propterea benedixit te Deus in æternum,\" therefore hath God blessed thee for ever.",
        source: "Ps. 45:3, 2 (Vulgate numbering Ps. 44:3, 2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Dominus regnavit decorem",
      latin: "Allelúia. ℣. Dóminus regnávit, decórem índuit : índuit Dóminus fortitúdinem, et praecínxit se virtúte.",
      translation: "Alleluia. ℣. The Lord has reigned, he is clothed with beauty: the Lord is clothed with strength, and has girded himself with power.",
      mode: "Alleluia · 2nd Sunday after the Nativity · Mode II",
      reference: "Ps. 97:1",
      gabc: "(f3) AL(ef)le(f)lú(hhivHGh_i){ia}.(ijIH'h//fihhe/f!gwhf.1) (,) * {ij.}(hhf/hghvFE//ivHGh.f!gwhf.1) (::) ℣. Dó(fi!jvIHfihi)mi(ighf)nus(f.) (,) re(feg)gná(gv.fig/h.f!gwhgh)vit,(hg..) (;) de(gh)có(ijij)rem(h_f/hjI'Gh.) (,) ín(eg/ihi/ghf.1/hiH'Gh)du(f_[oh:h]g_[oh:h]f_[oh:h])it :(f.) (:) ín(f)du(f!h'i)it(ijI'Hh'h) Dó(gh!ivHF.gh'i)mi(i)nus(i) (,) for(kxji/jki)ti(h)tú(hjihhf)di(f)nem,(fh//fhhegvFE.) (;) et(e) prae(f)cín(hhi)xit(f) se(fhg) *(,) vir(hi~)tú(ivihi)te.(i./jijIG.hiH'//Ef!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #714)",
      blurb: {
        text: "Dominus regnavit decorem induit draws on the opening verse of Psalm 97, which the Douay-Rheims heads as a prophecy of the glorious coming and reign of Christ and of his coming to judge the world. Only that first verse is taken; the psalm's subsequent verses, with their images of fire going before the Lord and burning his enemies, are left aside. The chant therefore holds together royal proclamation and judgment in a single verse.",
        source: "Ps. 97:1 (Vulgate numbering Ps. 96:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Benedic anima mea Domino",
      latin: "Bénedic, ánima mea, Dómino, et noli oblivísci omnes retributiónes ejus : et renovábitur, sicut áquilae, juvéntus tua.",
      translation: "Bless the Lord, O my soul, and forget not all his benefits: and your youth shall be renewed like the eagle's.",
      mode: "Offertory · 2nd Sunday after the Nativity · Mode V",
      reference: "Ps. 103:2, 5",
      gabc: "(c3) BE(d)ne(f)dic(hh) *(,) á(hihi)ni(f)ma(fe) me(fh)a(hhi) Dó(ijI'H)mi(ih)no,(h_[oh:h]i_[oh:h]h._[oh:h]) (;) et(f) no(f!h'i)li(ih) ob(hihhg)li(fe)ví(f)sci(hh) (,) o(hf~)mnes(gxg_[oh:h]f) re(d)tri(ef)bu(fe)ti(gyf!gwh)ó(h_g)nes(hihhg) e(f!gwhgh)jus :(gf..) (:) et(g) re(e)no(f)vá(h)bi(hhh)tur,(h.) (,) sic(ivHF)ut(h.f!gwh_g) á(hf/hh//hhh)qui(fgFE'f)lae,(fe..) (;) ju(hh)vén(h_f/hhf/hhf./def!hh/ijH'FhvGEf.)(,)(f!hh//hhh.f!gwh)tus(hhh_f) tu(d_[oh:h]e_[oh:h]d_[oh:h])a.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1359)",
      blurb: {
        text: "Psalm 103 verse 2 and verse 5 are both quoted here, but verses 3 and 4 are left out. Those omitted verses speak of forgiveness of iniquities, healing of diseases, and redemption from destruction. What remains is the opening summons of verse 2, \"Bless the Lord, O my soul, and never forget all he hath done for thee,\" joined directly by an added \"et\" to the closing promise of verse 5: that youth shall be renewed like the eagle's. The compiler drew a single arc from grateful remembrance to renewal, leaving the catalogue of mercies in between to the full psalm.",
        source: "Ps. 103:2, 5 (Vulgate numbering Ps. 102:2, 5) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Domine Dominus noster",
      latin: "Dómine, Dóminus noster, quam admirábile est nomen tuum in univérsa terra!",
      translation: "O Lord, our Lord, how admirable is your name in all the earth!",
      mode: "Communion · 2nd Sunday after the Nativity · Mode II",
      reference: "Ps. 8:2",
      gabc: "(f3) DO(f)mi(e!gw!hvGF'g)ne(gf..) *(,) Dó(hih)mi(hg)nus(fe) no(f!gwhgh)ster,(gf..) (:) quam(kxhi!jkj) ad(j)mi(ji)rá(j)bi(i)le(i_0[uh:l]) est(j) (,) no(hvGEfg)men(f.) tu(fihhvG'E//f!gw!hvGF'g)um(gf..) (;) in(c) u(ef)ni(fe)vér(f!hhhvFE'D//e!gef)sa(f) ter(fg!hvGF'g)ra!(gf..) (::)",
      source: "Graduale Romanum (GregoBase #998)",
      blurb: {
        text: "Psalm 8 begins by calling the Lord's name admirable in all the earth. The Communion for the second Sunday after Christmas keeps that brief praise of the Lord's majesty.",
        source: "Ps. 8:2 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Nat2-0 (Missale Romanum formulary)",
      },
    },
  },
  "ecce-advenit": {
    gradual: {
      title: "Omnes de Saba venient",
      latin: "Omnes de Saba vénient, aurum et thus deferéntes, et laudem Dómino annuntiántes. ℣. Surge, et illumináre, Jerúsalem : quia glória Dómini super te orta est.",
      translation: "All they from Saba shall come, bringing gold and frankincense, and proclaiming the praise of the Lord. ℣. Arise, and be enlightened, O Jerusalem: for the glory of the Lord is risen upon you.",
      mode: "Gradual · The Epiphany of the Lord · Mode V",
      reference: "Is. 60:6, 1",
      gabc: "(c3) O(d!ewfef//hig'hvFE'ede)mnes(e.) *(;) de(d) Sa(efe)ba(fv.hhh/ijhhvF'Egihhf) vé(f)ni(f_[oh:h]g_[oh:h]f_[oh:h])ent,(f.) (:) au(ijI~H~)rum(ih) et(fh~) thus(h_) de(f)fe(df)rén(eh~)tes,(hig'/hf.) (;) et(f) lau(h)dem(g) Dó(h)mi(f)no(d.) (,) an(df)nun(e!hgh)ti(f)án(de~)tes.(d!ewfef//highf.dfe/fee[ll:1]d.0) (::) ℣. Sur(hi~)ge,(ihhf/hiHG.hiFD.1) (,) (f!hhi/hhf/hiHG.hiFD.1) (;) et(d) il(d)lu(d)mi(d)ná(fdfED//fd/ef!hh/ig/hf/hi!kkk_[hl:1]h)re(h.) (;) Je(fh)rú(hih)sa(ffe)lem :(gxef__d_2//f_e/fgF'ED'dfvEDe[ll:1]d..) (:) qui(d)a(d) gló(fdfED')ri(d)a(d.) Dó(fd/ef!hh/i!jwk)mi(ih)ni(hiHF.1) (;) su(gxgg//gg)per(d) te(efe/ffe.) () * or(fhGF')ta(i) est.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #205)",
      blurb: {
        text: "Omnes de Saba venient sees the nations arriving with gold and incense while proclaiming the Lord's praise. At Epiphany, the Gradual makes the prophet's procession a prayer of worship before Christ.",
        source: "Is. 60:6, 1 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    alleluia: {
      title: "Vidimus stellam",
      latin: "Allelúia. ℣. Vídimus stellam ejus in Oriénte, et vénimus cum munéribus adoráre Dóminum.",
      translation: "Alleluia. ℣. We have seen his star in the East, and have come with gifts to adore the Lord.",
      mode: "Alleluia · The Epiphany of the Lord · Mode II",
      reference: "Matt. 2:2",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. Ví(f_e/f!gwh'!iv)di(jiihi)mus(iv.hh/fgf.) (,) stel(fg~)lam(f) e(f!hh/ijHF'ivH'GEf./hfhhf/ge)jus(e.) (:) in(f) O(e)ri(f)én(ffe/ffe/fc..)(,)(ef!hvvF'Ehhh)te,(ivH'Ghf..) (:) et(f) vé(f!h'i)ni(jiihi)mus(iv.hh/fgf.) (,) cum(fg~) mu(f)né(f!hh/ijHF'ivH'GEf./hfhhf/ge)ri(f)bus(e.) (;) ad(hh)o(h)rá(h)re(hi) * Dó(i_[oh:h]h/jij)mi(j)num.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #524)",
      blurb: {
        text: "Vidimus stellam draws on Matthew 2:2, the verse in which the wise men ask where the king of the Jews is born and give their reason for coming. The chant takes only the second half of that verse, setting aside the question about the king of the Jews, and quietly adds two words not found in Matthew: \"cum muneribus,\" with gifts. The scripture's original simply says they came to adore him; the chant makes the gifts explicit.",
        source: "Matt. 2:2 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Reges Tharsis",
      latin: "Reges Tharsis et ínsulae múnera ófferent : reges Arabum et Saba dona addúcent : et adorábunt eum omnes reges terrae, omnes gentes sérvient ei.",
      translation: "The kings of Tharsis and the islands shall offer gifts: the kings of the Arabians and of Saba shall bring presents: and all the kings of the earth shall adore him, all nations shall serve him.",
      mode: "Offertory · The Epiphany of the Lord · Mode V",
      reference: "Ps. 72:10-11",
      gabc: "(c3) RE(h)ges(fh) Thar(h)sis(hhh//hv.hhh) *(,) et(fh) ín(hhhjvIH)su(hvGF)lae(fhG'Fh.) (;) mú(defivHG')ne(hggfg)ra(g_[oh:h]f) óf(gxdf!gvFE')fe(feede)rent :(e[ll:1]d..) (:) re(f)ges(e) A(ef!gvgf)ra(ef!hhvFE')bum(fee[ll:1]d.0) (,) et(de) Sa(f)ba(hig'hvFE.//hig'hvFE'e[ll:1]d.0) (;) do(fhh'1hhi)na(i) ad(hhh)dú(hi!jvIH'GhvGF'g)cent :(gf..) (:) et(hf) ad(h)o(hi)rá(iv.hihhe)bunt(fhg) e(h_g)um(hig'hvFD.1) (;) o(df)mnes(f_e) re(f!hhh)ges(f_e) ter(egF'Efe)rae,(e.) (:) o(f!hihh'h)mnes(ef/g_[oh:h]f) gen(f!hihh'h)tes(ef/g_[oh:h]f) (;) sér(fh/i_[oh:h]h)vi(gxf!hhf/ge)ent(de/fhf) e(gxegF'Efd)i.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1147)",
      blurb: {
        text: "Psalm 72 is a wide-ranging vision of a king's reign: the verses immediately surrounding this offertory speak of enemies falling, the poor being rescued, and dominion stretching to the ends of the earth. The liturgy draws out only verses 10 and 11, the lines about tribute-bearing kings, shaping the psalm into a single focused image for Epiphany. The text has attracted composers across many centuries; according to Wikipedia's article on the chant's title, the oldest surviving musical setting is the Gregorian chant itself, while the most frequently performed setting today is that by John Sheppard (c.1515 to c.1559).",
        source: "Ps. 72:10-11 (Vulgate numbering Ps. 71:10-11) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Reges Tharsis\" (rev. 1269238249)",
      },
    },
    communion: {
      title: "Vidimus stellam",
      latin: "Vídimus stellam ejus in Oriénte, et vénimus cum munéribus adoráre Dóminum.",
      translation: "We have seen his star in the East, and have come with gifts to adore the Lord.",
      mode: "Communion · The Epiphany of the Lord · Mode IV",
      reference: "Matt. 2:2",
      gabc: "(c4) VI(ef'g)di(hgh)mus(gfg//efd.1) *(,) stel(gi~)lam(i) e(j)jus(g) in(g) O(fg'h)ri(i)én(gh~)te,(e.) (:) et(ef'h) vé(h!iwj)ni(g)mus(g) cum(g) mu(g)né(fg)ri(efED'e)bus(e[ll:1]d..) (;) ad(f)o(gh)rá(g)re(ghG'Fghg') Dó(e)mi(egff)num.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #918)",
      blurb: {
        text: "Vidimus stellam takes the Magi's first words from Matthew 2 and leaves Herod's troubled reply outside the chant. At Epiphany, their star and gifts become an act of adoration before the Lord.",
        source: "Matt. 2:2 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "baptism-lord": {
    gradual: {
      title: "Benedictus Dominus Deus Israel",
      latin: "Benedíctus Dóminus Deus Israel, qui facit mirabília magna solus a saéculo. ℣. Suscípiant montes pacem pópulo tuo, et colles justítiam.",
      translation: "Blessed be the Lord, the God of Israel, who alone does wondrous things from of old. ℣. Let the mountains receive peace for your people, and the hills justice.",
      mode: "Gradual · The Baptism of the Lord · Mode VII",
      reference: "Ps. 41:14; 135:4; 71:3",
      gabc: "(c3) BE(e)NE(e)DÍC(e/fgf)TUS(e/ffe) *(,) Dó(ehhi)mi(f)nus(ed/ef/fe) (;) De(gghf)us(hi) Is(igh)ra(fhGE)el,(ev//df/hg/hiffe/fe!hhf/heed) (:) qui(ef) fa(de)cit(effefvfe/fhhfh) (,) mi(ef)ra(e)bí(d!fh)li(hi)a(igh) ma(fg~)gna(e) (,) so(de/fe/fhg)lus(highvFE,ffe/ff//ef!hhhf/hvvGF/heed) (:) a(df) saé(f!hi/kki)cu(ihhvGE)lo.(f/hhh/ijhhe,hhjvIHGE//f!gwhg/ihhhvFE/fgffe) ℣.(::) Su(eh)scí(hi)pi(ijIH)ant(ihhg~) mon(hi/hihi)tes(iki!jwkjkvJIji) (;) pa(i/jg/hi//ji/jg/hi,kkh/jijvHF/gwh!iv//giHGE,fhgh//fh//ghFDe;ijIDfe//f!gwh!iv//h!kki,kj/lklvKIkjkvIHiwj)cem(ijhivHGhg) (:) pó(iji/kki/jil)pu(kj)lo(jlkk/iji) (,) tu(ij//hk/jki/jji)o,(i) (:) et(g!hi~) col(i/jg/hi//ji/jg/hi,kvvIH)les(ighvFE,fegvFEDdb) *(;) jus(e)tí(ef!gwh!ivHE//fhe/fe)ti(de)am.(e) (;) (ei/ki!jwki/kki/hhf//egFE) (::)",
      source: "Graduale Romanum (GregoBase #1547)",
      blurb: {
        text: "Benedictus Dominus Deus Israel opens both this Gradual and the canticle of Zechariah in Luke 1:68, the song Zechariah sang at the circumcision of his son John the Baptist, and the canticle takes its Latin name from those opening words. The canticle falls into two parts: the first is a song of thanksgiving, and the second is Zechariah's direct address to his son John, foretelling the son's mission as the prophet who would go before the Lord to prepare his way.",
        source: "Wikipedia, \"Benedictus (canticle)\" (rev. 1366992158)",
      },
    },
    alleluia: {
      title: "Inveni David servum meum",
      latin: "Allelúia. ℣. Invéni David servum meum : óleo sancto meo unxi eum.",
      translation: "Alleluia. ℣. I have found David my servant: with my holy oil I have anointed him.",
      mode: "Alleluia · The Baptism of the Lord · Mode II",
      reference: "Ps. 89:21",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. In(f_e/f!gwh'!iv)vé(jiihi)ni(iv.hh/fgf.) (,) Da(f!hh/ijHF'ivH'GEf./hfhhf/ge)vid(e.) (;) ser(ffe/ffe/fc..)(,)(ef!hvvF'Ehhh)vum(ivH'Gh) me(f_[oh:h]g_[oh:h]f_[oh:h])um :(f.) (:) ó(f!h'i)le(jiihi)o(iv.hh/fgf.) (,) san(fg~)cto(f) me(f!hh/ijHF'ivH'GEf./hfhhf/ge)o(e.) (;) un(hh)xi(hi) *() e(i_[oh:h]h/jij)um.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1350)",
      blurb: {
        text: "Psalm 89 verse 21 arrives here embedded in a longer divine speech about David: the verse immediately before it reads, in the Douay-Rheims, \"I have laid help upon one that is mighty, and have exalted one chosen out of my people,\" and the verses after promise that God's hand will strengthen him and the enemy will have no power over him. The Alleluia verse takes only the single line of anointing from that passage and brings it to the feast of the Baptism of the Lord, where the original words about David's anointing with holy oil are sung over the memory of Christ's baptism.",
        source: "Ps. 89:21 (Vulgate numbering Ps. 88:21) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Benedictus qui venit",
      latin: "Benedíctus qui venit in nómine Dómini : benedíximus vobis de domo Dómini : Deus Dóminus, et illúxit nobis, allelúia, allelúia.",
      translation: "Blessed is he that comes in the name of the Lord: we have blessed you out of the house of the Lord: the Lord is God, and he has shone upon us, alleluia, alleluia.",
      mode: "Offertory · The Baptism of the Lord · Mode VIII",
      reference: "Ps. 118:26-27",
      gabc: "(c4) BE(fgffe)ne(cd)dí(ff!gwhgh)ctus(hg__) *(,) qui(g) ve(hjj'1j/k_[hl:1]j)nit(j.) (;) in(j) nó([oll:1{1]jk/lk[oll:}])mi(kjj)ne(ghg___//ikj) (,) Dó(jki'/jh)mi(gf)ni :(h!iwj_hivHGhg..) (:) be(f)ne(g)dí(gj)xi(j)mus(jjjvH'Gh) vo(fg)bis(hjH'Gh.) (;) de(fg) do(gh)mo(hj) Dó(jjjkv./0[oll:0{0]jlk)mi(klj[oll:}]/jh!iwj_i)ni :(i.) (:) De(g/jjjkv./0[oll:0{0]jlk)us(klj[oll:}]/jh!iwj_i) (,) Dó(g/jjj/k_[hl:1]j)mi(jkj'/ki'/jhgih)nus,(hggfg.) (;) et(fg) il(gh)lú(h/k'l)xit(j_i) no(jjj_h)bis,(hv.g!jhj.) (;) al(f)le(g)lú(h/jjj){ia},(jkJ'Ijv.jjj_g) (,) al(hj)le(jjj//kj'/kjj)lú(hg~){ia}.(gjh/ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #941)",
      blurb: {
        text: "Benedictus qui venit draws from two consecutive verses of Psalm 118. Verse 26 is taken in full, but from verse 27 the chant keeps only the opening clause, \"The Lord is God, and he has shone upon us,\" setting aside what follows: \"Appoint a solemn day, with shady boughs, even to the horn of the altar.\" The closing pair of alleluias appears nowhere in either psalm verse.",
        source: "Ps. 118:26-27 (Vulgate numbering Ps. 117:26-27) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Omnes qui in Christo baptizati estis",
      latin: "Omnes qui in Christo baptizáti estis, Christum induístis, allelúia.",
      translation: "As many of you as have been baptized in Christ have put on Christ, alleluia.",
      mode: "Communion · The Baptism of the Lord · Mode II",
      reference: "Gal. 3:27",
      gabc: "(f3) O(f_c/ef~)mnes(f.) *(,) qui(e) in(f) Chri(f/ghf)sto(f_ef.) (,) ba(f)pti(hh)zá(h)ti(fe) e(e!gwh!ivHG'/!hwihi)stis,(ie..) (;) Chri(f_e/f!gwhh)stum(hiH'F) in(hhf~)du(hh)í(fgF'E)stis,(e.) (;) al(hhf~)le(hh)lú(hih){ia}.(f.) (::)",
      source: "Graduale Romanum (GregoBase #1293)",
      blurb: {
        text: "Galatians says that those baptized in Christ have put on Christ. The Communion for the Baptism of the Lord takes that confession of baptism and gives it its alleluia.",
        source: "Gal. 3:27 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },

  /* ===================================================================
   * Sanctoral: solemnities & feasts of the Lord, the BVM, and the
   * Saints (the fixed-date keys already carrying an introit in
   * data/introits.js). Latin = GregoBase Solesmes (Graduale Romanum),
   * gabc pulled by id; assignments per the Graduale Romanum sanctoral
   * formularies. Vigils carry no Alleluia; the Mass for the Dead uses
   * a Tract. See sources/gregobase/build-sanctoral.py.
   * =================================================================== */
  "joseph": {
    gradual: {
      title: "Domine praevenisti",
      latin: "Dómine, praevenísti eum in benedictiónibus dulcédinis : posuísti in cápite ejus corónam de lápide pretióso. ℣. Vitam pétiit, et tribuísti ei longitúdinem diérum in saéculum saéculi.",
      translation: "O Lord, you went before him with blessings of sweetness: you have set on his head a crown of precious stones. ℣. He asked life of you, and you have given him length of days for ever and ever.",
      mode: "Gradual · Saint Joseph, Spouse of the Blessed Virgin Mary · Mode IV",
      reference: "Ps. 21:4-5",
      gabc: "(c4) DO(fe)mi(fg)ne,(gv.ff/ded.) (,) * prae(fe)ve(fg)ní(g)sti(df) e(egF'E)um(e.) (;) in(e[ll:1]d~) be(g)ne(hj)di(j)cti(i!jw!kvJI')ó(h)ni(fhf/gh)bus(g.) dul(d)cé(feg)di(gefd)nis :(d.) (:) po(f)su(gh)í(ixh.0/[-0.5]ivHG'h)sti(ef'g) (,) in(g) cá(gfh)pi(h)te(gf) e(g_[oh:h]d~)jus(d.) co(feg)ró(gefd)nam(d.) (;) de(dc) lá(f)pi(gh)de(ixh.0/[-0.5]ivHG'ef'g) pre(g)ti(df)ó(efED.)(,)(ixf.0/[-0.5]hiHG'/!ge./ghGF'Ef_gF'E)so.(e.) (::) ℣. Vi(h)tam(ixjhhgh/ef'!geg!ivHGhvFDe.) (,) (ghF'Eghfff'1dfED'fg'h) pé(gf/gh)ti(g)it,(g.) (:) et(f) tri(ghgh)bu(h)í(hgh'1f)sti(e[ll:1]d) e(f_g//ef!hvGE'fd)i(d.) (;) lon(c)gi(d)tú(dffd/ffdd'd/gffd)di(fdec)nem(c.) (,) di(f)é(ghgh)rum(hgh'1f) (;) in(e[ll:1]d~) saé(f_g//ef!hvGE'fd)cu(cd)lum(d.) (,) * saé(c.d!ewf/g_[oh:h]f)cu(f!hgh)li.(hhf.) (,) (h_ghvFDgff'fvEC//dd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #600)",
      blurb: {
        text: "Psalm 21 verses 4 and 5 address a king in the third person, and verse 4 begins \"Quoniam prævenisti eum,\" meaning \"For thou hast prevented him.\" The Gradual reshapes the opening into a direct prayer by dropping \"Quoniam\" and substituting \"Domine,\" so what was a subordinate clause becomes a personal address to God. Giovanni Pierluigi da Palestrina set the same text in a five-voice motet titled \"Corona aurea. Domine praevenisti eum,\" pairing it with the phrase \"corona aurea,\" the golden crown, drawn from the same psalm verses.",
        source: "Ps. 21:4-5 (Vulgate numbering Ps. 20:4-5) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"List of compositions by Giovanni Pierluigi da Palestrina\" (rev. 1309884587)",
      },
    },
    alleluia: {
      title: "Amavit eum Dominus",
      latin: "Allelúia. ℣. Amávit eum Dóminus, et ornávit eum : stolam glóriae índuit eum.",
      translation: "Alleluia. ℣. The Lord loved him and adorned him: he clothed him with a robe of glory.",
      mode: "Alleluia · Saint Joseph, Spouse of the Blessed Virgin Mary · Mode IV",
      reference: "Ps. 46:9",
      gabc: "(c4) AL(c)le(d!fde./fge/fddc)lú(de~){ia}.(e.) *(;) ij.(cd/fde./fge/fd/!dc/ege.) (,) (cd/fde./fge/fd/!dc/ege.) (,) (ghGF'Dee) (,) (fgF'Ededdc//fff/ghGFgvFE.) (::) ℣. A(c)má(dfd/ef)vit(f.) e(ffe)um(e[ll:1]d~) Dó(deD'C)mi(de)nus,(e.) (;) et(c) or(eg~)ná(ggf/gefvED)vit(ce) e(effe)um :(e.) (:) sto(c)lam(e) gló(ixgh!ivHG//fhGE.)(,)(ixce/ghivHG//fhGE.)(,)(gvFED'evD'C)ri(de)ae(e.) (;) ín(c)du(dfd/ef)it(e.) *() e(cd/fde./fge/fd/!dc/ege.)(,)(cd/fde./fge/fd/!dc/ege.)(,)(ghGF'Dee)(,)(fgF'Ededdc//fff/ghGFgvFE)um.(e.) (::)",
      source: "Graduale Romanum (GregoBase #14)",
      blurb: {
        text: "Amavit eum Dominus draws on Ecclesiasticus 45:9, a verse dense with priestly detail: a glorious girdle, a robe, and a crown, all describing Aaron robed for temple service. The chant lifts only the single phrase about the robe of glory, letting that one image stand alone. The surrounding verses go further, listing breeches, an ephod, and gold bells that rang out as Aaron walked through the temple.",
        source: "Ecclus. 45:9 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Veritas mea",
      latin: "Véritas mea, et misericórdia mea cum ipso : et in nómine meo exaltábitur cornu ejus.",
      translation: "My truth and my mercy shall be with him: and in my name shall his horn be exalted.",
      mode: "Offertory · Saint Joseph, Spouse of the Blessed Virgin Mary · Mode II",
      reference: "Ps. 89:25",
      gabc: "(f4) VE(hh)ri(hiH'G)tas(ggh~) me(h!jjh/jjhgih)a,(h.) *(;) et(h!jjj) mi(h)se(g)ri(h)cór(h!iwj/kj)di(j)a(jkjji) me(h!iwj)a(jkjji) (,) cum(hg) i(h!iw!jvIH'i)pso :(hg..) (:) et(h) in(jhj') nó(j)mi(kvJH)ne(j_i) me(jijg)o(e!geg.) (;) ex(d)al(e)tá(gh)bi(hg)tur(h') cor(j)nu(jkjji) e(h!iwjij)jus.(ih..) (::)",
      source: "Graduale Romanum (GregoBase #630)",
      blurb: {
        text: "Veritas mea draws a single verse from Psalm 89, a passage in which God speaks of protecting his anointed one against enemies. The verses immediately before it promise the cutting down of enemies and the putting to flight of those who hate him, while the verse immediately after promises his hand set in the sea and his right hand in the rivers. The offertory lifts only this one verse of divine faithfulness from that martial and royal context.",
        source: "Ps. 89:25 (Vulgate numbering Ps. 88:25) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Beatus servus",
      latin: "Beátus servus, quem, cum vénerit Dóminus, invénerit vigilántem : amen dico vobis, super ómnia bona sua constítuet eum.",
      translation: "Blessed is that servant whom, when the Lord comes, he shall find watching: amen I say to you, he shall set him over all his goods.",
      mode: "Communion · Saint Joseph, Spouse of the Blessed Virgin Mary · Mode III",
      reference: "Matt. 24:46-47",
      gabc: "(c2) BE(exdde)á(cf)tus(f) ser(g_[oh:h]f/g!hwihi)vus,(ih..) *(,) quem,(hj) cum(h) vé(jkj)ne(i)rit(hvGF) Dó(h_i)mi(h)nus,(h.) (,) in(fh~)vé(h)ne(ghg)rit(ef) vi(g)gi(fe)lán(df)tem :(c.) (:) a(cd)men(f) di(fe)co(d) vo(fvEC)bis,(c.) (,) su(f)per(g) ó(i)mni(h)a(g) bo(g)na(f) su(g)a(f_g) (,) con(gf~)stí(g!hwi)tu(f)et(exfgF'Efgf) e(exdfee)um.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1154)",
      blurb: {
        text: "Beatus servus draws its two verses from the day's Gospel, Matthew 24:42-47, so the Communion antiphon returns to the same passage the Gospel reading had already opened. One word has been changed quietly: where the Gospel's verse 46 reads \"invenerit sic facientem,\" shall find him so doing, the antiphon substitutes \"invénerit vigilántem,\" shall find him watching, a word that echoes Jesus's command earlier in the same passage, \"Vigilate ergo.\"",
        source: "Matt. 24:46-47 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C4d (Missale Romanum formulary)",
      },
    },
  },
  "annunciation": {
    gradual: {
      title: "Diffusa est gratia",
      latin: "Diffúsa est grátia in lábiis tuis : proptérea benedíxit te Deus in aetérnum. ℣. Propter veritátem, et mansuetúdinem, et justítiam : et dedúcet te mirabíliter déxtera tua.",
      translation: "Grace is poured abroad on your lips: therefore has God blessed you for ever. ℣. Because of truth and meekness and justice: and your right hand shall conduct you wonderfully.",
      mode: "Gradual · The Annunciation of the Lord · Mode V",
      reference: "Ps. 45:3, 5",
      gabc: "(c4) DIf(d)fú(ff)sa(fg) est(ghghff'f) (,) * grá(gv.fhg)ti(ghg___)a(g.) (;) in(g) lá(gh/ji)bi(jj)is(jvHG) (`) tu(ig/h!jjjh)(,)(kljjvIH)is :(hjh___!iwjjvIHih..) (:) pro(h!jj)ptér(k_[hl:1]jk)e(j_hj)a(jjj_hivHGhg..) (;) be(f)ne(gh)dí(h!iwj)xit(g_[oh:h]f) te(f_[oh:h]d_[oh:h]!gv_[oh:h]) De(gffvED)us(dfddc.) (:) in(ffgffc/ff/ghF'Ef) (`) ae(ixf!gwhg/hih)tér(gf/ghggf)num.(ixhf/hiGF'f//f'hg/hggf.0) (z0::c3) ℣. Pro(d)pter(d) ve(d)ri(fh)tá(hv.hihhfh.)(,)(df!hvv//hihhfh./gh/ihi)tem,(hh) (;) et(d) man(d)su(d)e(fe)tú(eh)di(h)nem,(ih) (,) (hhh'/ihhg./[-0.5]i/jiih.0/[-0.5]j/kjjh.0/[-0.5]i/jiig./h/ihh//fh//ghFE'e[ll:1]d.0) (;) et(d) ju(d)stí(fdfED//f_d/ef!gwhhi)ti(h)am :(hhi!kvvhih.) (:) et(f) de(fi)dú(i)cet(ih/jkihhf/hh/ijH'Gh) te(h.) (,) mi(h)ra(h)bí(i_[oh:h]h//ghG'Fi_[oh:h]h//h'hhvFEfe//f!hhivHGh')li(h)ter(h.) *(;) déx(hh)te(h)ra(h) tu(ihhf/hh/ijH'G)a.(hhhf//hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #947)",
      blurb: {
        text: "Diffusa est gratia draws from two verses of Psalm 45, but trims both. Verse 3 opens in the psalm with praise of beauty, \"Speciosus forma præ filiis hominum\" (\"Thou art beautiful above the sons of men\"), yet the gradual begins mid-verse, with the grace poured on the lips. Verse 4 is passed over entirely, and verse 5 is taken up only from its midpoint, leaving behind the opening words \"Specie tua et pulchritudine tua intende, prospere procede, et regna\" (\"With thy comeliness and thy beauty set out, proceed prosperously, and reign\"), to arrive at truth, meekness, and justice.",
        source: "Ps. 45:3, 5 (Vulgate numbering Ps. 44:3, 5) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Ave Maria",
      latin: "Allelúia. ℣. Ave María, grátia plena : Dóminus tecum : benedícta tu in muliéribus.",
      translation: "Alleluia. ℣. Hail Mary, full of grace: the Lord is with you: blessed are you among women.",
      mode: "Alleluia · The Annunciation of the Lord · Mode II",
      reference: "Luke 1:28",
      gabc: "(f3) AL(ef~)le(f/hfghvGE.f'1//hf/gf)lú(ef~){ia}.(f'hvGF.) *(;) ij.(f'ivHG'F//g'hvGF'fe.) (,) (f'ivHG'F//e!hhhvGFggf.0) (::) ℣. A(ef)ve(fg/h_f/g_[oh:h]e) Ma(fg!hvGF)rí(ef)a,(f.) (,) grá(fg)ti(e)a(f) ple(fiivHF'E)na :(f.) (;) Dó(i_[oh:h]h)mi(i_[oh:h]hivHF'E)nus(f.) te(h_g/h_ghvGF'E)cum :(f'hvGF.) (:) be(f)ne(gh'i//hihf!gwhgh/fgffe//fg!hvGF'Ef.)(;)(fg!h'i//hihf!gwhgh/fgffe//fg!hvGF'Ef.)(,)(fg!h'i)dí(f_e)cta(e_[oh:h]c) tu(efhvGF.) (;) * in(ef~) mu(f)li(ef)é(f/hfghvGE.f'1//hf/gf)ri(ef)bus.(f'hvGF.) (;) (f'ivHG'F//g'hvGF'fe.) (,) (f'ivHG'F//e!hhhvGFggf.0) (::)",
      source: "Graduale Romanum (GregoBase #1209)",
      blurb: {
        text: "Gabriel's greeting to Mary, drawn from Luke 1:28, forms the whole of this Alleluia verse. The chant stops exactly there. The verses that follow in Luke show Mary troubled by the salutation and Gabriel reassuring her, \"Fear not, Mary, for thou hast found grace with God,\" but the Alleluia holds only the greeting itself, suspending the moment of address before any reply.",
        source: "Luke 1:28 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Ave Maria",
      latin: "Ave María, grátia plena : Dóminus tecum : benedícta tu in muliéribus, allelúia.",
      translation: "Hail Mary, full of grace: the Lord is with you: blessed are you among women, alleluia.",
      mode: "Offertory · The Annunciation of the Lord · Mode VIII",
      reference: "Luke 1:28",
      gabc: "(c3) A(gxdef!hvvFE'//gvFE)ve(e_[uh:l]f) *(,) Ma(fdf)rí(h_g//ijIH'hg/hf)a,(fe..) (;) grá(hhf!gwhefvED'C[ull:0]B.)(,)(ef/h.f!gwh)ti(h)a(g.) ple(hiHF.g/hiH//E.)(,)(fhFEf./ih/ijh)na :(hiih.0) (:) Dó(fvEDevDC'db.0/cd!effe)mi(de)nus(e.) (`) te(fe/hhe//ffdev.)(,)(de/f_de./df!hvGFE'f)cum :(fe..) (:) be(hi)ne(ih)dí(h'/jij)cta(h.f!gwh/ih) tu(he..) (,) in(ef) mu(fh)li(fe)é(e_[oh:h][ll:1]d/efD'C[ull:0]B.)(,)(cd/e_[oh:h][ll:1]d/f_e)ri(de)bus,(effe.) (;) al(fe~)le(fdf)lú(h_g/ijIH'hg/hf){ia}.(fe/fgffe.) (::)",
      source: "Graduale Romanum (GregoBase #210)",
      blurb: {
        text: "Ave Maria draws its entire text from Luke 1:28, the angel Gabriel's greeting to Mary at the Annunciation, quoted in full. The following verses, in which Mary is troubled and the angel reassures her, are left aside; only the salutation itself is sung. The alleluia at the close is not in the Gospel verse but is added by the liturgy.",
        source: "Luke 1:28 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Ecce Virgo concipiet",
      latin: "Ecce Virgo concípiet, et páriet fílium : et vocábitur nomen ejus Emmánuel.",
      translation: "Behold a Virgin shall conceive and bear a son: and his name shall be called Emmanuel.",
      mode: "Communion · The Annunciation of the Lord · Mode I",
      reference: "Is. 7:14",
      gabc: "(c4) EC(d)ce(dfe) vir(fg)go(d.) (,) * con(ce)cí(gh)pi(g_[oh:h]f)et,(fv.efd.1) (;) et(de) pá(gh!jj/kh)ri(gh)et(h) fí(h)li(h!iwjh)um :(h.) (:) et(h_g) vo(jj)cá(h_g)bi(ixihi)tur(gh/i_[oh:h]h) (,) no(fe)men(f) e(ixg!hw!ivH~G~)jus(hg..) (,) Em(f_[oh:h]g_[oh:h]e_[oh:h]e[ll:1]d)má(d!ewf!g'h)nu(fvED)el.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1144)",
      blurb: {
        text: "Ecce Virgo concipiet draws its text from Isaiah 7:14, beginning mid-verse. The full verse opens with a signal that what follows is a sign given to the house of David, but the chant drops that opening clause and begins with the sign itself: Ecce, Virgo concipiet. By the time this Communion is sung, the congregation has already heard the complete passage, Isaiah 7:10-15, in the Epistle, including the prophet's address to Achaz and the house of David, and then the Annunciation in the Gospel of Luke 1:26-38, in which the angel tells Mary she will conceive and bear a son.",
        source: "Is. 7:14 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C10a (Missale Romanum formulary)",
      },
    },
  },
  "john-baptist-vigil": {
    gradual: {
      title: "Fuit homo missus a Deo",
      latin: "Fuit homo missus a Deo, cui nomen Joánnes erat : hic venit. ℣. Ut testimónium perhibéret de lúmine, et paráre Dómino plebem perféctam.",
      translation: "There was a man sent from God, whose name was John: this man came. ℣. That he might bear witness to the light, and to prepare for the Lord a perfect people.",
      mode: "Gradual · The Nativity of St. John the Baptist (Vigil) · Mode V",
      reference: "John 1:6-7",
      gabc: "(c4) FU(ff)it(f) ho(fgff'f)mo(f_d//fge'/fgd'/e[ll:1]ddc.) (;) * mis(hf/gh!jj/kjk)sus(jij) a(h_g/h!jjvH'Gh) De(f_[oh:h]g_[oh:h]f_[oh:h])o,(f.) (:) cu(ixfi)i(ihig) no(hj)men(ixi_[uh:l]jI//Fg.) (,) Jo(f)án(fh)nes(gh) e(f_d//ffd)rat :(dc..) (:) hic(ff/gh/jjvH'F) ve(fhg___//jv.jjjhhff//hvGFgf)nit.(f.) (z0::c3) ℣. Ut(d) te(d)sti(fe)mó(eh)ni(h)um(h_[oh:h]i_[oh:h]h_2[oh:h]//i_[oh:h]hjvHF.1) (,) (h_g/ijh'___jvIH'jvIH'//hvGF.) (;) per(f)hi(h)bé(i)ret(hiHF.1) (,) de(f) lú(f!h'i/hhf)mi(hfhhefd)ne,(d.) (:) et(hh) pa(h)rá(h)re(hg/ij) Dó(i_[oh:h]h)mi(h)no(hg/i_[oh:h]h//jvIH'Ghf..) (;) * ple(hh)bem(h) per(h)fé(ihhf)ctam.(hhhf/hhhf/hhf.) (,) (de/!f!hh/!ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #424)",
      blurb: {
        text: "Fuit homo missus a Deo identifies John as one sent from God to bear witness to the light. At the Vigil of his Nativity, the Gradual holds that witness together with the call to prepare a people for the Lord.",
        source: "John 1:6-7 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Sancti-06-23 (Missale Romanum formulary)",
      },
    },
    offertory: {
      title: "Gloria et honore",
      latin: "Glória et honóre coronásti eum : et constituísti eum super ópera mánuum tuárum, Dómine.",
      translation: "With glory and honor you have crowned him: and you have set him over the works of your hands, O Lord.",
      mode: "Offertory · The Nativity of St. John the Baptist (Vigil) · Mode I",
      reference: "Ps. 8:6-7",
      gabc: "(c4) GLó(f)ri(ixf.g!hwihi)a(h.) *(,) et(h) ho(h)nó(iyh!jjjvIHjjjvIH//gih)re(hggfg.) (;) co(fg'h)ro(ghG'F)ná(ghg___hvGF)sti(jvvI'G) e(jjvIH'G)um :(ghggf.0) (:) et(h) con(jjk)sti(hhg)tu(f)í(fg!hvhg)sti(jjjvIH) e(ghf___fd)um(d.) (;) su(f)per(ff) ó(ff/gfg)pe(deDC'd)ra(d_c/f!gwhg.) (;) má(h/jjjvIH//giH'G)nu(gf)um(f.) tu(f)á(fgF'E)rum,(fg!hvhg.) (;) Dó(giHG'g//fhGF'fdfv.//fff/gf/gff)mi(d)ne.(fff_[oh:h]g_[oh:h]d.1_[oh:h]) (::)",
      source: "Graduale Romanum (GregoBase #407)",
      blurb: {
        text: "Psalm 8 uses these words to describe humanity as a whole, set by God over the rest of creation. This Offertory lifts them out of that context and applies them to John the Baptist, beginning midway through verse 6 and omitting its opening clause, \"Minuisti eum paulominus ab angelis,\" that is, \"Thou hast made him a little less than the angels.\" The chant also closes with \"Domine,\" a word that does not appear in the psalm verses at all, and it sets aside the following verse entirely: \"Omnia subjecisti sub pedibus ejus, oves et boves universas, insuper et pecora campi.\"",
        source: "Ps. 8:6-7 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Magna est gloria ejus",
      latin: "Magna est glória ejus in salutári tuo : glóriam et magnum decórem impónes super eum, Dómine.",
      translation: "Great is his glory in your salvation: glory and great honor shall you lay upon him, O Lord.",
      mode: "Communion · The Nativity of St. John the Baptist (Vigil) · Mode IV",
      reference: "Ps. 21:6",
      gabc: "(c4) MA(g)gna(gh) est(h) *(,) gló(jj)ri(hg)a(g) e(gh~)jus(g.) (,) in(gh~) sa(h)lu(hf)tá(g)ri(gff) tu(f.d!ew!fvE'DC'd)o :(dc..) (:) gló(cd/fef)ri(f)am(fff) (,) et(fd~) ma(fg~)gnum(g) de(gh)có(fv.efd)rem(e[ll:1]d..) (:) im(fh~)pó(h)nes(fgf) su(g_[oh:h]f)per(f) e(fdfvEC)um,(d!ewf!g'h) Dó(e)mi(egff)ne.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #365)",
      blurb: {
        text: "Magna est gloria ejus draws on a single verse of Psalm 21, verse 6, a psalm that moves through suffering, trust, and royal exaltation. The Vulgate verse ends with \"impones super eum\" and names no addressee, but the chant adds \"Domine\" at the close, turning the statement into a direct address to God that the psalm verse itself does not contain.",
        source: "Ps. 21:6 (Vulgate numbering Ps. 20:6) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "john-baptist": {
    gradual: {
      title: "Priusquam te formarem",
      latin: "Priúsquam te formárem in útero, novi te : et ántequam exíres de ventre, sanctificávi te. ℣. Misit Dóminus manum suam, et tétigit os meum, et dixit mihi.",
      translation: "Before I formed you in the womb I knew you: and before you came forth from the womb I sanctified you. ℣. The Lord put forth his hand, and touched my mouth, and said to me.",
      mode: "Gradual · The Nativity of St. John the Baptist · Mode V",
      reference: "Jer. 1:5, 9",
      gabc: "(c4) PRi(ffg)ús(f)quam(fgd~) *() te(f) for(gh~)má(h_g)rem(gv.fgFD.1) (,) in(d) ú(dgf/gh)te(g)ro,(g.) (,) no(ixhiG'F)vi(f.e!fwgfg) te :(gf..) (:) et(h) án(jjk~)te(j)quam(j) ex(j)í(jkh)res(hgh.) de(h) ven(ixhv.fg!hi~)tre,(hgh.) (;) san(jjh~)cti(jj)fi(h)cá(h)vi(hggfg) te.(f!gwhghjvvHF'gwhg/hjhh/fgf.) (z0::c3) ℣. Mi(hh)sit(h) Dó(ig'hvF'E//f!gwhhi)mi(h)nus(h.) (,) ma(ijI'H)num(h) su(hiH'F)am,(f!h'i//hi/jhh/iih.0) (:) et(h_f) té(hih)ti(gh)git(f.) (,) os(gxdf//ef!hvFE'fw!gvFE) me(de!fvED'e)um,(e[ll:1]d..) (:) et(d) di(ef)xit(fhGF') *() mi(i)hi.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/!fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #647)",
      blurb: {
        text: "Priusquam te formarem draws from two non-adjacent verses of Jeremiah 1. It passes over Jeremiah's protest that speech is impossible and the divine reply sending the prophet where required, then joins the call in verse 5 to the touching of the mouth in verse 9. The quotation from verse 9 is cut short at \"and said to me,\" before the following statement about words being placed in the mouth. The Gradual therefore isolates the call and the act of commissioning.",
        source: "Jer. 1:5, 9 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Tu puer propheta",
      latin: "Allelúia. ℣. Tu, puer, prophéta Altíssimi vocáberis : praeíbis ante Dóminum paráre vias ejus.",
      translation: "Alleluia. ℣. You, child, shall be called the prophet of the Most High: you shall go before the Lord to prepare his ways.",
      mode: "Alleluia · The Nativity of St. John the Baptist · Mode II",
      reference: "Luke 1:76",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. Tu,(f_e/f!gwh'!iv) pu(jiihi)er,(iv.hh/fgf.) (,) pro(f)phé(f!hh/ijHF'ivH'GEf./hfhhf/ge)ta(e.) (;) Al(f)tís(ffe/ffe/fc..)(,)(ef!hvvF'Ehhhi)si(h)mi(h) (,) vo(ivH'Gh')cá(f)be(f_[oh:h]g_[oh:h]f_[oh:h])ris :(f.) (:) prae(f)í(f!h'i/jiihi)bis(iv.hh/fgf.) (,) an(fg~)te(f) Dó(f!hh/ijHF'ivH'GEf./hfhhf/ge)mi(f)num(e.) (;) pa(hh)rá(h)re(h) vi(h)as(hi) *() e(i_[oh:h]h/jij)jus.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #847)",
      blurb: {
        text: "Luke 1:76 is a single line from the canticle Zachary sings at his son's birth, the very occasion the feast commemorates. In quoting it, the chant makes a small but audible change to the Vulgate: where the Vulgate reads \"praeibis enim ante faciem Domini\" (you shall go before the face of the Lord), the chant drops \"enim\" and \"faciem\" and sings simply \"praeibis ante Dominum.\" The next verse of the canticle continues: \"To give knowledge of salvation to his people, unto the remission of their sins.\"",
        source: "Luke 1:76 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Justus ut palma florebit",
      latin: "Justus ut palma florébit : sicut cedrus, quae in Líbano est, multiplicábitur.",
      translation: "The just shall flourish like the palm tree: he shall grow up like the cedar of Lebanon.",
      mode: "Offertory · The Nativity of St. John the Baptist · Mode IV",
      reference: "Ps. 92:13",
      gabc: "(c4) JU(e.f!gwhgfffdgvFE)stus(fff) *(,) ut(dge) pal(gh)ma(g!jjjvH'GF.//ixfff!gwhg/hih.) (,) flo(ghf)ré(dgF'E)bit :(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) sic(dg)ut(gh) ce(h!iwj!kvJH//gih)drus,(hjHG'hffe.) (,) quae(ghf) in(fe~) Lí(ghF'E//fh)ba(h_g!jjjvH'G)no(g_[oh:h]f//hvGFgvFE) est,(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (;) mul(ff)ti(dgf)pli(f)cá(ixff/hihhghvGFg_[oh:h]e//hggf/ghg')bi(e)tur.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #777)",
      blurb: {
        text: "Justus ut palma florebit draws on a single verse from Psalm 92, leaving the verse that immediately follows it unsung. That next verse reads, \"Plantati in domo Domini, in atriis domus Dei nostri florebunt\": those planted in the house of the Lord shall flourish in his courts. The chant stops just before the psalm names the place that makes the flourishing possible.",
        source: "Ps. 92:13 (Vulgate numbering Ps. 91:13) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Tu puer propheta",
      latin: "Tu, puer, prophéta Altíssimi vocáberis : praeíbis enim ante fáciem Dómini paráre vias ejus.",
      translation: "You, child, shall be called the prophet of the Most High: for you shall go before the face of the Lord to prepare his ways.",
      mode: "Communion · The Nativity of St. John the Baptist · Mode II",
      reference: "Luke 1:76",
      gabc: "(f3) TU,(f!h'i) pu(jijh)er,(hhh) (,) * pro(hf)phé(hj)ta(j) Al(j)tís(j)si(jij)mi(hi/jh.) (,) vo(h!jij//hi/!jhhg)cá(f)be(fg!hvGF'g)ris :(gf..) (:) prae(i)í(kxj.i!jwk)bis(j) e(i'/jii)nim(f.) (,) an(f!hhh)te(f) fá(fihi)ci(i)em(ijij) Dó(hihi)mi(f)ni(fef.) (;) pa(f)rá(ffeffef)re(fc..) (,) vi(ef!hvvF'Ehhh)as(ivH'Gh) e(f_[oh:h]g_[oh:h]f_[oh:h])jus.(f.) (::)",
      source: "Graduale Romanum (GregoBase #133)",
      blurb: {
        text: "The day's Gospel reading ends at Luke 1:68, the moment Zachary's tongue is loosed and he begins to praise God. The Communion antiphon draws from verse 76, part of the canticle Zachary sang immediately after, addressing the newborn child directly. It quotes that single verse and stops there, omitting the lines that follow about the remission of sins and the mercy of God.",
        source: "Luke 1:76 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Sancti-06-24 (Missale Romanum formulary)",
      },
    },
  },
  "peter-paul-vigil": {
    gradual: {
      title: "In omnem terram",
      latin: "In omnem terram exívit sonus eórum : et in fines orbis terrae verba eórum. ℣. Caeli enárrant glóriam Dei : et ópera mánuum ejus annúntiat firmaméntum.",
      translation: "Their sound has gone forth into all the earth: and their words unto the ends of the world. ℣. The heavens declare the glory of God: and the firmament proclaims the work of his hands.",
      mode: "Gradual · Sts. Peter and Paul, Apostles (Vigil) · Mode II",
      reference: "Ps. 19:5, 2",
      gabc: "(c3) IN(c) o(ef~)mnem(f) *() ter(hfghvF'Ege/fg)ram(f.) (;) ex(hh/ijIH')í(ig'hvF'Ef!hh/if)vit(f.) (,) so(fh//gihghf)nus(gxfegvFE.) (,) e(e)ó(e[ll:1]d/fef)rum :(fd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) et(hh) in(h) fi(hji)nes(ihhf.) or(f)bis(fi) ter(i_[oh:h]f/ij~)rae(h_fhv.ghF'Ef.) (;) ver(de'fhvGF'g)ba(e) e(f)ó(hf/h_i)rum.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Cae(f)li(h) e(ij)nár(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)rant(ji..) (:) gló(i!jw!kvJI'jw!kvJI')ri(i)am(ij~) De(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)i :(f.) (:) et(hh) ó(h)pe(h)ra(h) má(h)nu(h)um(hi) e(ivH'GE//fhGEfh..)(,)(gi!jvHF)jus(fhF'Efh/!hf//hvvGF'hee[ll:1]d.0) (:) an(d)nún(de'f)ti(f)at(f.0/[-0.5]hvGF'g) ()*() fir(e)ma(f)mén(hf/hi~)tum.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #351)",
      blurb: {
        text: "In omnem terram draws from two verses of Psalm 19, but sings them in reverse order. The body of the gradual quotes verse 5, \"Their sound hath gone forth into all the earth,\" and the verse then steps back to verse 2, \"The heavens shew forth the glory of God.\" The psalm's own movement runs the other way: the heavens speak first, and their sound reaches the ends of the earth second.",
        source: "Ps. 19:5, 2 (Vulgate numbering Ps. 18:5, 2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Constitues eos principes",
      latin: "Constítues eos príncipes super omnem terram : mémores erunt nóminis tui, in omni progénie et generatióne.",
      translation: "You shall make them princes over all the earth: they shall remember your name throughout all generations.",
      mode: "Offertory · Sts. Peter and Paul, Apostles (Vigil) · Mode III",
      reference: "Ps. 45:17-18",
      gabc: "(c4) COn(dg)stí(g./hji)tu(jkj)es(jvIH.) *() e(hj!kvJH)os(hjhhg.) (,) prín(ikj)ci(jvIH)pes(h_g//ih/igh.) (;) su(ef)per(g) o(h_g/jki'jvH'G)mnem(g_[oh:h]fh) ter(ghfg)ram :(f.) (:) mé(ffff_d/gih)mo(g)res(g./hjh) e(f_d/fhg)runt(ef'g) (,) nó(gh/jij)mi(gjj'1jj)nis(gj) tu(ixjjjvH'GF'gwh!ivHG'h)i,(hg..) (:) in(hji___) o(jkjijh)mni(h.) pro(dg)gé(gj)ni(jjjvH'G)e(g.) (;) et(f) ge(ef'g)ne(fh/jgh)ra(ef)ti(g)ó(g./h!iw!jvIH)ne.(hjH'GF.) (,) (fff//hvG'FEf_e//g_[oh:h]f/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1319)",
      blurb: {
        text: "Constitues eos principes draws from Psalm 45, verses 17 and 18, but takes only the second half of verse 17 and runs into verse 18, leaving aside the closing doxology, \"propterea populi confitebuntur tibi in æternum, et in sæculum sæculi.\" That trimmed text turns a royal wedding psalm into a direct acclamation of Peter and Paul as princes over all the earth. The Gospel of the Vigil Mass then supplies the moment behind that title, the passage in Matthew 16 where Christ tells Peter, \"et tibi dabo claves regni cœlórum.\"",
        source: "Ps. 45:17-18 (Vulgate numbering Ps. 44:17-18) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C4b (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Simon Joannis, diligis me",
      latin: "Simon Joánnis, díligis me plus his? Dómine, tu ómnia nosti : tu scis, Dómine, quia amo te.",
      translation: "Simon, son of John, do you love me more than these? Lord, you know all things: you know, Lord, that I love you.",
      mode: "Communion · Sts. Peter and Paul, Apostles (Vigil) · Mode VI",
      reference: "John 21:15, 17",
      gabc: "(c4) SI(ffg)mon(f) Jo(fh)án(hggfg)nis,(g_[oh:h]f) *(,) dí(fh)li(hgh)gis(gfg) me(d) plus(ev.decf) his?(f.) (:) Dó(ixfi~)mi(i_[oh:h]g/hi)ne,(g_[oh:h]f) (,) tu(ixiig) ó(ixi)mni(ih)a(h) no(fh)sti :(hg/hf.) (:) tu(ixjh/j_i//hiG'F) scis,(fg'h) (,) Dó(hg/hfg)mi(f.e!fwgfg)ne,(gf..) (;) qui(f.d!ewf)a(d_c) a(ixf_e//g_[oh:h]i_[oh:h]g_[oh:h]!hwi)mo(f_[oh:h]g_[oh:h]f_[oh:h]) te.(f.) (::)",
      source: "Graduale Romanum (GregoBase #846)",
      blurb: {
        text: "Simon Joannis draws from two verses of John 21, the first and third of three exchanges between Jesus and Peter after the resurrection breakfast, passing over verse 16 entirely. From each of the two verses it quotes, the chant also drops Jesus's closing command, \"Pasce agnos meos\" and \"Pasce oves meas,\" Feed my lambs and Feed my sheep, so what remains is the question and Peter's answer alone, without the mandate that follows in the gospel.",
        source: "John 21:15, 17 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "peter-paul": {
    gradual: {
      title: "Constitues eos principes",
      latin: "Constítues eos príncipes super omnem terram : mémores erunt nóminis tui, Dómine. ℣. Pro pátribus tuis nati sunt tibi fílii : proptérea pópuli confitebúntur tibi.",
      translation: "You shall make them princes over all the earth: they shall remember your name, O Lord. ℣. Instead of your fathers, sons are born to you: therefore shall the peoples praise you.",
      mode: "Gradual · Sts. Peter and Paul, Apostles · Mode V",
      reference: "Ps. 45:17-18",
      gabc: "(c4) COn(d)stí(ff)tu(f!hgh)es(h) e(gg)os(gf..) *(,) prín(h)ci(ixi)pes(h_g//hiHF.ghFD.ev.dec.!/[-0.5]fg/!hggf.0) (;) su(jjk)per(j_h) o(jk~)mnem(j) ter(ixjhi)ram :(hgiHGkv.jkJ//F.0gh/jiih.0) (:) mé(ixj_h/i!jwk)mo(ixjk_[hl:1]J'_[hl:1]IH'i)res(h.) e(ixgh!i'j)runt(i_[oh:h]h) (,) nó(ixjhi)mi(gf)nis(f) tu(h_g)i,(jj) (`) Dó(ixjhi)mi(gf)ne.(fhg___) (,) (jkijh.fhg/hggf.0) (z0::c3) ℣. Pro(df) pá(hvvGFhvGEff//gxde!fgF'EfvEDe.)(,)(fh/ih/ih/ijh)tri(gh)bus(h.) (,) tu(ih/kkh/ih/kkvIH)is(hv.ghGF.) (;) na(h.i!jwk)ti(ih) sunt(h.) ti(f!hhe)bi(f.) (,) fí(gxfgFE.fgFD.fvEDe[ll:1]d)li(bd)i :(d.) (:) pro(de)ptér(ef)e(hf/ge)a(ef!hih.) (,) pó(h)pu(gh)li(gxfhE'D//hf/gf..) (,) con(d)fi(ef)te(f)bún(f)tur(hV_!fg~) *() ti(e.f!gwh)bi.(he) (,) (gxhfgED'//ef/hff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #307)",
      blurb: {
        text: "Constitues eos principes draws on just two consecutive verses of Psalm 45, rearranging their phrases between the respond and the verse. The respond leads with the second clause of verse 17, \"thou shalt make them princes over all the earth,\" then takes the opening of verse 18; the verse circles back to the first clause of verse 17, \"instead of thy fathers, sons are born to thee,\" before closing with the final clause of verse 18. This ordering places the declaration of princehood at the very head of the chant, directly before the day's Gospel, in which Christ tells Peter, \"Et tibi dabo claves regni cœlórum.\"",
        source: "Ps. 45:17-18 (Vulgate numbering Ps. 44:17-18) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C4b (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Tu es Petrus",
      latin: "Allelúia. ℣. Tu es Petrus, et super hanc petram aedificábo Ecclésiam meam.",
      translation: "Alleluia. ℣. You are Peter, and upon this rock I will build my Church.",
      mode: "Alleluia · Sts. Peter and Paul, Apostles · Mode II",
      reference: "Matt. 16:18",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. Tu(hi) es(i) Pe(jiihi)trus,(iv.hh/fgf.) (;) et(f) su(fg)per(f) hanc(f) pe(f!hh/ijHF'ivH'GEf./hfhhf/ge)tram(e.) (:) ae(f)di(e)fi(f)cá(ffe/ffe/fc..)(,)(ef!hvvF'Ehhh)bo(ivH'Ghf..) (;) Ec(f)clé(hh)si(h)am(hi~) *() me(i_[oh:h]h/jij)am.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #228)",
      blurb: {
        text: "Tu es Petrus quotes only the opening clause of Matthew 16:18, stopping before the rest of the sentence, which continues in the Vulgate: \"et portæ inferi non prævalebunt adversus eam\" (and the gates of hell shall not prevail against it). The following verse, 19, with its promise of the keys of the kingdom of heaven, also goes unsung. The chant sets the single act of naming: the rock, and the church to be built upon it.",
        source: "Matt. 16:18 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Constitues eos principes",
      latin: "Constítues eos príncipes super omnem terram : mémores erunt nóminis tui, in omni progénie et generatióne.",
      translation: "You shall make them princes over all the earth: they shall remember your name throughout all generations.",
      mode: "Offertory · Sts. Peter and Paul, Apostles · Mode III",
      reference: "Ps. 45:17-18",
      gabc: "(c4) COn(dg)stí(g./hji)tu(jkj)es(jvIH.) *() e(hj!kvJH)os(hjhhg.) (,) prín(ikj)ci(jvIH)pes(h_g//ih/igh.) (;) su(ef)per(g) o(h_g/jki'jvH'G)mnem(g_[oh:h]fh) ter(ghfg)ram :(f.) (:) mé(ffff_d/gih)mo(g)res(g./hjh) e(f_d/fhg)runt(ef'g) (,) nó(gh/jij)mi(gjj'1jj)nis(gj) tu(ixjjjvH'GF'gwh!ivHG'h)i,(hg..) (:) in(hji___) o(jkjijh)mni(h.) pro(dg)gé(gj)ni(jjjvH'G)e(g.) (;) et(f) ge(ef'g)ne(fh/jgh)ra(ef)ti(g)ó(g./h!iw!jvIH)ne.(hjH'GF.) (,) (fff//hvG'FEf_e//g_[oh:h]f/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1319)",
      blurb: {
        text: "Constitues eos principes draws from Psalm 45, verses 17 and 18, but takes only the second half of verse 17 and runs into verse 18, leaving aside the closing doxology, \"propterea populi confitebuntur tibi in æternum, et in sæculum sæculi.\" That trimmed text turns a royal wedding psalm into a direct acclamation of Peter and Paul as princes over all the earth.",
        source: "Ps. 45:17-18 (Vulgate numbering Ps. 44:17-18) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C4b (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Tu es Petrus",
      latin: "Tu es Petrus, et super hanc petram aedificábo Ecclésiam meam.",
      translation: "You are Peter, and upon this rock I will build my Church.",
      mode: "Communion · Sts. Peter and Paul, Apostles · Mode VI",
      reference: "Matt. 16:18",
      gabc: "(c4) TU(f) es(df) Pe(fgff)trus,(cdc.) *(;) et(d) su(ffg)per(f) hanc(f) pe(f_[oh:h]g_[oh:h]f_[oh:h])tram(f.) (;) ae(f)di(fg'h)fi(h_g)cá(g)bo(fgFD.1) (,) Ec(d)clé(ffg)si(f)am(fg/hg/h_g) me(fg!hvGF'g)am.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #666)",
      blurb: {
        text: "Tu es Petrus draws from the first half of Matthew 16:18, stopping at \"Ecclésiam meam\" before the verse continues with the words about the gates of hell not prevailing against it. The Mass Gospel of the day runs from Matthew 16:13 all the way through verse 19, so both the omitted clause and the promise of the keys of the kingdom of heaven have already been heard by the time this antiphon is sung at Communion.",
        source: "Matt. 16:18 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C4b (Missale Romanum formulary)",
      },
    },
  },
  "transfiguration": {
    gradual: {
      title: "Speciosus forma",
      latin: "Speciósus forma prae fíliis hóminum : diffúsa est grátia in lábiis tuis. ℣. Eructávit cor meum verbum bonum : dico ego ópera mea Regi : lingua mea cálamus scribae velóciter scribéntis.",
      translation: "Beautiful in form beyond the sons of men: grace is poured abroad on your lips. ℣. My heart has uttered a good word: I speak my works to the King: my tongue is the pen of a scribe that writes swiftly.",
      mode: "Gradual · The Transfiguration of the Lord · Mode III",
      reference: "Ps. 45:3, 2",
      gabc: "(c3) SPe(e)ci(fhg)ó(h)sus(h.) *(,) for(hh//hhh.f!gwh/i_[oh:h]h//j_ijvIG)ma(ig/hi/jh) (,) (hhh'ih/ihhg.) (;) prae(fhg) fí(hihhf)li(hig)is(hiffe.) (,) hó(fhg/h_fi)mi(hg)num :(gv.eg/ihh/fgf.) (:) dif(f)fú(hf/ghg)sa(ge/f!hhhvFE'ec) est(d_e) (,) grá(eg)ti(g)a(fgF'Ef!hh/f!hhhvGF'hee[ll:1]d.0) (;) in(f) lá(hf/gh!ivFE')bi(feec)is(efe/f!hh) tu(gxfe/fgE'DefD'C)(,)(ef!hvvF'Eff//ef/ge)is.(c./eec//e[ll:1]d/ec..) (::) ℣. E(e)ru(e)ctá(e.f!gwhgh)vit(h_g) cor(g.h!iwjij) me(jihhf/ig/h_[oh:h]i_[oh:h]h_[oh:h])(,)(hhhvFEhg/h_i)um(ih/ihhg.) (;) ver(gh/iji/jhhg)bum(g) bo(h.f!gwh_g)num :(gv.eg/ihh/fgf.) (:) di(f)co(fi) e(ivvH'Fijhhgh)go(hg..) (;) ó(hv.fhg)pe(g)ra(g) me(gh/iji/jhhg)a(g.) (,) Re(h.f!gwh_g)gi :(gv.eg/ihh/fgf.) (:) lin(f)gua(f) me(f)a(f) cá(fgfg)la(ge/f!hhhvFE'ec)mus(d_e) (,) scri(eg)bae(fgF'Ef!hh/f!hhhvGF'hee[ll:1]d.0) (;) ve(f)ló(hf/gh!ivFE')ci(feec)ter(efef) (,) * scri(hh)bén(gxfe/fgE'DefD'C)(,)(ef!hvvF'Eff//ef/ge)tis.(c./eec//e[ll:1]d/ec..) (::)",
      source: "Graduale Romanum (GregoBase #1308)",
      blurb: {
        text: "Speciosus forma draws from two verses of Psalm 45, but reverses their order. The psalm runs verse 2 first, the heart uttering a good word, and verse 3 second, beautiful above the sons of men; the Gradual opens with verse 3 and gives verse 2 as the versicle. Verse 3 is also trimmed: the psalm's line continues with the clause \"propterea benedixit te Deus in aeternum,\" but the chant leaves that closing phrase out, so the text rests on the lips and the grace poured upon them rather than on the blessing that follows.",
        source: "Ps. 45:3, 2 (Vulgate numbering Ps. 44:3, 2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Candor est lucis aeternae",
      latin: "Allelúia. ℣. Candor est lucis aetérnae, spéculum sine mácula, et imágo bonitátis illíus.",
      translation: "Alleluia. ℣. He is the brightness of eternal light, the unspotted mirror, and the image of his goodness.",
      mode: "Alleluia · The Transfiguration of the Lord · Mode VII",
      reference: "Ecclus. 7:26",
      gabc: "(c3) AL(d)le(efde/ffe)lú(df/hvGFhh)ia.(e.;hv/ijj/h/ii/efE'Dffe.,h'/ig'/hvF'ED'CB.e.f!gwhhvG'FEffe.) ℣.(::) Can(eh~)dor(h_g/fge) est(f_e) (,) lu(d!ewfefhvGF'ge)cis(e.) æ(ei)tér(i./jkjjvIHjh/ij)næ,(i.) (:) spé(ij)cu(i)lum(i) si(i)ne(i) má(j!kwljkvJIjvIHii,ij/kljkvJIjvIHii,eijvIH'hvGF'Efe)cu(de)la,(e/ffe.) (:) et(ehg) i(hi)má(i./jkjjvIH'Ghih)go(i.) (,) bo(h)ni(f)tá(f'/hvG'FE'Dfgffe)tis(e./de!fvfe.) (,) il(d)lí(df/hvGFhh)us.(e.;hv/ijj/h/ii/efE'Dffe.,h'/ig'/hvF'ED'CB.e.f!gwhhvG'FEffe.) (::)",
      source: "Graduale Romanum (GregoBase #10479)",
      blurb: {
        text: "The Transfiguration Alleluia names Christ as the brightness of eternal light, the unspotted mirror, and the image of God's goodness. Its brief verse gives the feast a concentrated praise of the Son.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Gloria et honore",
      latin: "Glória et honóre coronásti eum : et constituísti eum super ópera mánuum tuárum, Dómine.",
      translation: "With glory and honor you have crowned him: and you have set him over the works of your hands, O Lord.",
      mode: "Offertory · The Transfiguration of the Lord · Mode I",
      reference: "Ps. 8:6-7",
      gabc: "(c4) GLó(f)ri(ixf.g!hwihi)a(h.) *(,) et(h) ho(h)nó(iyh!jjjvIHjjjvIH//gih)re(hggfg.) (;) co(fg'h)ro(ghG'F)ná(ghg___hvGF)sti(jvvI'G) e(jjvIH'G)um :(ghggf.0) (:) et(h) con(jjk)sti(hhg)tu(f)í(fg!hvhg)sti(jjjvIH) e(ghf___fd)um(d.) (;) su(f)per(ff) ó(ff/gfg)pe(deDC'd)ra(d_c/f!gwhg.) (;) má(h/jjjvIH//giH'G)nu(gf)um(f.) tu(f)á(fgF'E)rum,(fg!hvhg.) (;) Dó(giHG'g//fhGF'fdfv.//fff/gf/gff)mi(d)ne.(fff_[oh:h]g_[oh:h]d.1_[oh:h]) (::)",
      source: "Graduale Romanum (GregoBase #407)",
      blurb: {
        text: "Gloria et honore draws on Psalm 8, verses 6 and 7, but begins mid-verse: it silently drops the opening of verse 6, \"Thou hast made him a little less than the angels,\" and opens instead with the crown of glory and honor. The following verse, which the psalm continues with \"Thou hast subjected all things under his feet,\" is likewise left aside. This same offertory text was set as a polyphonic work by the Czech Baroque composer Jan Josef Ignác Brentner, published in his collection Offertoria solenniora as opus 2 in Prague in 1717.",
        source: "Ps. 8:6-7 (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Jan Josef Ignác Brentner\" (rev. 1371457637)",
      },
    },
    communion: {
      title: "Visionem quam vidistis",
      latin: "Visiónem quam vidístis, némini dixéritis, donec a mórtuis resúrgat Fílius hóminis.",
      translation: "Tell the vision you have seen to no one, until the Son of Man be risen from the dead.",
      mode: "Communion · The Transfiguration of the Lord · Mode I",
      reference: "Matt. 17:9",
      gabc: "(c4) VI(d)si(e_[uh:l]f)ó(g')nem(e) *() quam(gh) vi(fe)dí(d)stis,(d_fddc.) (,) né(f')mi(h)ni(g') di(h)xé(gf)ri(g)tis,(f.) (;) do(fd)nec(f') a(g) mór(h')tu(g)is(f') re(e)súr(fg)gat(g.) (,) Fí(e_[uh:l]f)li(g)us(fe) hó(d)mi(cd)nis.(d.) (::)",
      source: "Graduale Romanum (GregoBase #885)",
      blurb: {
        text: "Visionem quam vidistis tells the disciples to speak of the vision only after the Son of man has risen. At the Transfiguration, the Communion holds radiant revelation together with the silence of the Passion still to come.",
        source: "Matt. 17:9 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "lawrence": {
    gradual: {
      title: "Probasti Domine",
      latin: "Probásti, Dómine, cor meum, et visitásti nocte : igne me examinásti, et non est invénta in me iníquitas. ℣. Igne me examinásti, et non est invénta in me iníquitas.",
      translation: "You have proved my heart, O Lord, and visited it by night: you have tried me by fire, and iniquity has not been found in me. ℣. You have tried me by fire, and iniquity has not been found in me.",
      mode: "Gradual · St. Lawrence, Deacon and Martyr · Mode V",
      reference: "Ps. 17:3",
      gabc: "(c4) PRo(d)bá(ff)sti,(fh) *(,) Dó(ixhiHG')mi(hggfg)ne,(fv.eg'!hv//fg!hvF'EDef!gvgf.0) (;) cor(ixfg/ih) me(ixii//iiivGF'ixgi'!jvIH'i)um,(iv.hi'j/hig./hihig.) (:) et(f) vi(f)si(f)tá(ixhf/giif)sti(f.) (,) no(ixffgffc/d_f//eg/hig)cte.(ixg'/hi'GF//{/[-3]iy}hgh/fh/ji/j_h) (,) (ixiv.hig./ihivG'Fg.) (,) (fgf//f'ff'hg/hggf.0) (z0::c3) ℣. I(hi)gne(hi) me(hgh.) (,) ex(h)a(h)mi(h)ná(gxhihh'hf//gvFEfvEDf.0/[-0.5]hhvF'Ef)sti,(f.) (:) et(h) non(i_[oh:h]h/i!jwkk) est(k_l_h.1_) (,) in(ih~)vén(hj!kv'1IG'hvF'E//f!gwhhi~)ta(h.) in(hh) me(hih.) *(,) in(f)í(fh!ij)qui(hg)tas.(hhhf/hhhf/hhf.) (,) (de/!f!hh/!ijghf.gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #1027)",
      blurb: {
        text: "Psalm 17:3 speaks of being tried by fire as a metaphor for divine testing of the heart, but on the feast of Lawrence, who was martyred by fire, the phrase carries a more literal weight. The gradual's versicle repeats only the fire clause: \"Igne me examinásti, et non est invénta in me iníquitas.\" The collect for the same Mass draws the same connection openly, asking God to help the faithful extinguish their vices as Lawrence was granted to overcome \"tormentórum suórum incéndia,\" the flames of his torments.",
        source: "Ps. 17:3 (Vulgate numbering Ps. 16:3) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Sancti-08-10 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Levita Laurentius",
      latin: "Allelúia. ℣. Levíta Lauréntius bonum opus operátus est : qui per signum crucis caecos illuminávit.",
      translation: "Alleluia. ℣. The deacon Lawrence performed a good work: who by the sign of the cross gave light to the blind.",
      mode: "Alleluia · St. Lawrence, Deacon and Martyr · Mode VII",
      reference: "",
      gabc: "(c3) AL(d)le(efdeffe)lú(df!hvGFhh){ia}.(e.) *(;) ij.(hvijj/h/ii//efE'Dffe.) (,) (h'/ig'hvF'ED'C[ull:0]B.e.f!gwhhvG'FEffe.) (::) ℣. Le(eh)ví(h_gfge)ta(f_e) Lau(d)rén(efefhvGF'ge)ti(fe)us(e.) (;) bo(ei)num(i) o(iv.jkj/!jvIHjh/ij)pus(i.) (,) o(ij)pe(i)rá(j!kwljkvJIjvIHii)(,)(ij/kljkvJIjvIHii)(,)(eijvIH'hvGF'Efe)tus(de) est :(e/ffe.) (:) qui(e) per(e) si(ehg)gnum(hi) cru(i./jkjjvIH'Ghih)cis(i.) (;) cae(hv.fhG'FE'D//fgff)cos(e.) *(,) il(d)lu(efdeffe)mi(d)ná(df!hvGFhh)vit.(e.) (;) (hvijj/h/ii//efE'Dffe.) (,) (h'/ig'hvF'ED'C[ull:0]B.e.f!gwhhvG'FEffe.) (::)",
      source: "Graduale Romanum (GregoBase #1122)",
      blurb: {
        text: "In the 1961 Graduale Romanum, Levita Laurentius is the Alleluia for St. Lawrence. The verse calls the deacon's work good and tells of blind eyes receiving light through the sign of the cross.",
        source: "Chant of the Day (this project's own chant entry); GregoBase, \"Levita Laurentius\" (#1122)",
      },
    },
    offertory: {
      title: "Confessio et pulchritudo",
      latin: "Conféssio et pulchritúdo in conspéctu ejus : sánctitas et magnificéntia in sanctificatióne ejus.",
      translation: "Praise and beauty are in his sight: holiness and majesty in his sanctuary.",
      mode: "Offertory · St. Lawrence, Deacon and Martyr · Mode IV",
      reference: "Ps. 96:6",
      gabc: "(c4) COn(f)fés(f)si(ixg!hwih)o(hhg.) *(,) et(g_[oh:h]f) pul(h/jjh)chri(gh/igh)tú(e)do(egf/gffe.) (;) in(df/gV!ef~) con(f)spé(ff/gf/gff)ctu(dgF'E) (,) e(fff//ghG'//Dfff//ghgh)jus :(h.) (:) sán(h)cti(g)tas(ixgiHG'hffe.) (,) et(fg) ma(fge~)gni(fg)fi(hvGF)cén(ixgiHG'h)ti(ef/gfg)a(fgFD.1) (;) in(ef) san(e[ll:1]d~)cti(ef)fi(e[ll:1]d)ca(ef)ti(e[ll:1]d)ó(ixfh!ivHGhvGE)ne(g_h_g_2//h_ghvGF'fd) (,) e(fffd/fff//ghgh)jus.(hvG'FEf_e//g_[oh:h]f/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #105)",
      blurb: {
        text: "Confessio et pulchritudo sets a single verse from Psalm 96: \"Praise and beauty are in his sight: holiness and majesty in his sanctuary.\" The verses that follow it in the psalm call the nations to bring glory and honour to the Lord, to bring sacrifices and come into his courts. That immediate context, a summons to offer and to enter, makes the verse a fitting choice for an Offertory.",
        source: "Ps. 96:6 (Vulgate numbering Ps. 95:6) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Qui mihi ministrat",
      latin: "Qui mihi minístrat, me sequátur : et ubi ego sum, illic et miníster meus erit.",
      translation: "He who ministers to me, let him follow me: and where I am, there also shall my minister be.",
      mode: "Communion · St. Lawrence, Deacon and Martyr · Mode V",
      reference: "John 12:26",
      gabc: "(c3) QUI(d) mi(gxf!gwh)hi(h) mi(gxhf)ní(ghg)strat,(f.) *(,) me(hi) se(h)quá(hfh)tur :(fhffd.) (:) et(d) u(d)bi(fh) e(h_f/hi/kjk)go(i_[oh:h]h) sum,(hg/hf..) (;) il(f)lic(h_[oh:h]i_[oh:h]h_[oh:h]ghFE'edev'1fhffe.) (;) et(hv.ghf'hvE'D) mi(d)ní(b_[oh:h]c_[oh:h]a_[oh:h])ster(ba~) me(dfe___)us(e!fwg'!hvF'Ef) e(d_[oh:h]e_[oh:h]d_[oh:h])rit.(d.) (::)",
      source: "Graduale Romanum (GregoBase #685)",
      blurb: {
        text: "Qui mihi ministrat draws on a single verse of John 12, but sets aside its second sentence. The full verse runs, in the Clementine Vulgate: \"Si quis mihi ministrat, me sequatur, et ubi sum ego, illic et minister meus erit. Si quis mihi ministraverit, honorificabit eum Pater meus.\" That final clause, the Father's promise to honour the one who serves, is left unsung. The two verses immediately before the quoted one speak of the grain of wheat that must die to bear fruit, and of hating one's life in this world to keep it unto life eternal, giving the verse its weight on the feast of a martyr.",
        source: "John 12:26 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "fabian-sebastian": {
    gradual: {
      title: "Gloriosus Deus",
      latin: "Gloriósus Deus in sanctis suis : mirábilis in majestáte, fáciens prodígia. ℣. Déxtera tua, Dómine, glorificáta est in virtúte : déxtera manus tua confrégit inimícos.",
      translation: "God is glorious in his saints: wondrous in majesty, working wonders. ℣. Your right hand, O Lord, is magnified in strength: your right hand has slain the enemy.",
      mode: "Gradual · Sts. Fabian and Sebastian, Martyrs · Mode I",
      reference: "Ex. 15:11",
      gabc: "(f3) GLo(c)ri(c)ó(ef)sus(fhf/gffe.) *(,) De(ghG'Fhv.giH'GF)us(f.) (;) in(f!gwh) san(hv.g!ijH'GF'g)ctis,(f.) (,) (ef!hhhvGFg.f!gwhhvGF'hf/gffe.) (:) mi(f!gw!hi)rá(hi)bi(ihhvGF'g)lis(f.) (,) (ef!hhhvGFg.f!gwhhvGF'hf/gffe.) (;) in(f!gwhhvGF'g) ma(ef)je(h.f!gwh)stá(hiHF'g)te,(f.) (,) (ef!hvGFh_g//e.f!gw!hvGF'hf/gffe.) (:) fá(h_[oh:h]i_[oh:h]h_[oh:h])ci(kxh.i!jwkj)ens(j) pro(jij)dí(hi'j)gi(hvGF)a.(f//gh/iffe.) (,) (ef!h/[1]{/[-1]kx}h/ij!kvJH'//ih/ihhf.) (f+::c4) ℣. Déx(dh)te(h)ra(h) tu(h)a(hg) Dó(ixhv.fh!ivHGhv.)(,)(fghjij//h!jjjvGFh./jjh/jjg/j_i)mi(h_[oh:h]i_[oh:h]h_[oh:h])ne,(h.) (;) glo(fg)ri(f)fi(gh)cá(h)ta(g./h!iw!jvIH') est(hgg) (,) in(f) vir(ghg~)tú(h_f/gh!jv.ijh.1)(,)(ixjjvH'GhiG'FghF'Dfv.e!gwhgh)te :(ixhf/higff/ded.) (:) déx(hj)te(h)ra(ghg) ma(f)nus(ghg) tu(h_f/gh!jv.ijh.1)(,)(ixjjvH'GhiGF.)(,)(hf/gh!jjvH'Gh)a,(ixhf/higff/ded.) (:) con(d)fré(dfED'fvED.)(,)(de!fg/hjIH'hgh.ixfh!ivGF'E//f!gw!hi)git(hg__) *(,) in(g)i(gh)mí(ixjhiGF'h!jjvH'G)cos.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #888)",
      blurb: {
        text: "Gloriosus Deus draws on Exodus 15:11, but reshapes the language for a martyrs' feast. The Clementine Vulgate there reads \"magnificus in sanctitate... faciens mirabilia,\" magnificent in holiness, doing wonders; the gradual opens instead with \"Gloriósus Deus in sanctis suis... fáciens prodígia,\" shifting the focus from God's own holiness to his glory made visible in his saints. The Gospel of the day, from Luke 21, is Christ's own address to disciples who will be handed over, persecuted, and hated for his name.",
        source: "Ex. 15:11 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C3 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Sancti tui Domine",
      latin: "Allelúia. ℣. Sancti tui, Dómine, benedícent te : glóriam regni tui dicent.",
      translation: "Alleluia. ℣. Your saints, O Lord, shall bless you: they shall speak of the glory of your kingdom.",
      mode: "Alleluia · Sts. Fabian and Sebastian, Martyrs · Mode II",
      reference: "Ecclus. 39:19",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. San(f_e/f!gwh')cti(i) tu(jiihi)i,(iv.hh/fgf.) (;) Dó(f!hh/ijHF'ivH'GEf./hfhhf/ge)mi(fe)ne,(e.) (;) be(ffe/ffe/fc..)(,)(ef!hvvF'Ehhhi)ne(h)dí(h)cent(ivH'Ghf~) te :(f.) (:) gló(f!h'i)ri(jiihi)am(iv.hh/fgf.) (,) re(f!hh/ijHF'ivH'GEf./hfhhf/ge)gni(e.) tu(hh)i(hi) (,) * di(i_[oh:h]h/jij)cent.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #106)",
      blurb: {
        text: "Saints Fabian and Sebastian's Alleluia calls the Lord's saints to bless him and speak of the glory of his kingdom. Ecclesiasticus likewise calls the faithful to praise with canticles and bless the Lord in his works.",
        source: "Ecclus. 39:19 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Laetamini in Domino",
      latin: "Laetámini in Dómino, et exsultáte, justi : et gloriámini, omnes recti corde.",
      translation: "Be glad in the Lord, and rejoice, you just: and glory, all you upright of heart.",
      mode: "Offertory · Sts. Fabian and Sebastian, Martyrs · Mode I",
      reference: "Ps. 32:11",
      gabc: "(c4) LAe(d)tá(d!ewf!gvFD)mi(d!ewf_c)ni(c.) *(,) in(fg) Dó(gj!kvJH')mi(h)no,(h/jjj/h_[oh:h]i_[oh:h]h._[oh:h]) (;) et(fh!jvHG) ex(g_[oh:h]f)sul(fg)tá(gjIH'hg)te(g_[oh:h]f/gff/ded.) (,) ju(dff'1f/[1]{/[-1]ix}f/hig'hvF'D)sti :(dfddc.) (:) et(dff'1ff/gfg) glo(d!fdf)ri(cd)á(df)mi(fhg)ni(g.) (;) o(f/hjg')mnes(f/hjG'FED'ewf.) (,) re(d!ewf/g_[oh:h]f)cti(fff/h_g/h_f) cor(fg//ffg/ffgvFE')de.(d//fff_d/fff/d_[oh:h]e_[oh:h]d._[oh:h]) (::)",
      source: "Graduale Romanum (GregoBase #786)",
      blurb: {
        text: "Laetamini in Domino draws its single verse from the close of Psalm 32, which the Douay-Rheims describes as a penitential psalm. The two verses immediately before it warn against stubbornness and speak of many scourges falling on the sinner; the psalm then ends on a turn to exultation, and it is that final line alone that the offertory takes. The Dutch Renaissance composer Ghiselin Danckerts (c. 1510, died 1567), a singer at the Papal Chapel from 1538 to 1565, left an eight-voice motet setting of the same text, Laetamini in domino, which survives in manuscript.",
        source: "Ps. 32:11 (Vulgate numbering Ps. 31:11) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Ghiselin Danckerts\" (rev. 1264312428)",
      },
    },
    communion: {
      title: "Multitudo languentium",
      latin: "Multitúdo languéntium, et qui vexabántur a spirítibus immúndis, veniébant ad eum : quia virtus de illo exíbat, et sanábat omnes.",
      translation: "A multitude of the sick, and those troubled by unclean spirits, came to him: for power went forth from him, and healed all.",
      mode: "Communion · Sts. Fabian and Sebastian, Martyrs · Mode II",
      reference: "Luke 6:18, 19",
      gabc: "(f3) MUl(f)ti(ef)tú(f!gw!hvGF)do(f!gwh) *(,) lan(hf~)guén(hi)ti(hi!jvIHi)um,(ih) (;) et(hi) qui(h) ve(hhg)xa(f)bán(hf!gwh)tur(hhh/ih) (;) a(f) spi(fe)rí(f!gwh)ti(hhh)bus(gf) im(fe~)mún(f!gw!hvGF/gvFE)dis,(fe) (;) ve(f)ni(h)é(hih)bant(hhhf~) ad(gf) e(e!gw!hvGFg)um:(gf) (:) qui(h)a(i) vir(kxi!jw!kvJI)tus(ji) de(hg) il(hi)lo(ih) ex(hg)í(eg!hvGF)bat,(gf) (;) et(f) sa(hg)ná(hhgh/ih/ihhfg)bat(f) om(f!gwhgh)nes.(gf) (::)",
      source: "Graduale Romanum, Editio Vaticana (GregoBase #3683)",
      blurb: {
        text: "Multitudo languentium draws on two consecutive verses of Luke 6 rather than quoting either one straight. Verse 18 supplies the sick and those troubled with unclean spirits, but there it simply says they \"were cured\"; verse 19 supplies the explanation, \"for virtue went out from him and healed all.\" The antiphon joins these two halves into a single movement toward Christ, dropping verse 19's detail that the crowd was seeking to touch him. The verse immediately following in Luke, where the antiphon stops, is where Christ opens the Sermon on the Plain: \"Blessed are ye poor.\"",
        source: "Luke 6:18, 19 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "assumption-vigil": {
    gradual: {
      title: "Benedicta et venerabilis",
      latin: "Benedícta et venerábilis es, Virgo María : quae sine tactu pudóris invénta es mater Salvatóris. ℣. Virgo Dei Génitrix, quem totus non capit orbis, in tua se clausit víscera factus homo.",
      translation: "Blessed and venerable are you, O Virgin Mary: who without stain were found the mother of the Saviour. ℣. Virgin Mother of God, he whom the whole world cannot contain enclosed himself in your womb, being made man.",
      mode: "Gradual · The Assumption of the Blessed Virgin Mary (Vigil) · Mode IV",
      reference: "",
      gabc: "(c4) BE(fe)ne(fg)dí(g)cta(gv.ff/ded.) (,) * et(f) ve(dfe)ne(fg)rá(gff)bi(df)lis(egF'E) es,(e.) (;) Vir(e[ll:1]d~)go(g) Ma(hj)rí(i!jw!kvJI'H//fhf/gh)a :(g.) (:) quae(df) si(feg)ne(gefd) ta(cd)ctu(d.) pu(f)dó(gh)ris(ixh.0/[-0.5]ivHG'h/ef'g) (;) in(gh~)vén(hfhhvGE'fd)ta(cd) es(d.) (,) ma(dc/[1]{/[-3]ix}fg'h)ter(h.0/[-0.5]ivHG'ef'g) Sal(g)va(df)tó(efED.)(,)(ixf.0/[-0.5]hiHG'ge./ghGF'Ef_gF'E)ris.(e.) (::) ℣. Vir(h)go(ixjhhgh/ef'!geg!ivHGhvFDe.) (,) (ghF'Eghfff'1dfED'fg'h) (,) De(gf/gh)i(g) Gé(f)ni(ghgh)trix,(hgh'1f) (;) quem(e[ll:1]d) to(f_g//ef!hvGE'fd)tus(d.) (,) non(e) ca(c)pit(d) or(d!ff//fffdfvED'ef'g)bis,(ghhg.) (:) in(f) tu(f)a(ghgh) se(h) clau(hgh'1f)sit(e[ll:1]d) (,) ví(f_g//ef!hvGE'fd)sce(cd)ra(d.) (;) * fa(cd!ff)ctus(fg) ho(g_[oh:h]f/hgh)mo.(hhf.) (,) (h_ghvFDgff'fvEC//dd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #392)",
      blurb: {
        text: "Benedicta et venerabilis sings of Christ enclosing himself in Mary's womb, and the Gospel appointed for this same Vigil Mass opens on precisely that mystery. A woman in the crowd cries out to Jesus in the Gospel of the day: \"Beátus venter, qui te portávit, et úbera, quæ suxísti,\" blessed is the womb that bore you, and the breasts you nursed at. The gradual has already answered her, in song, before the Gospel is proclaimed.",
        source: "Divinum Officium, Commune/C10 (Missale Romanum formulary)",
      },
    },
    offertory: {
      title: "Felix namque es",
      latin: "Felix namque es, sacra Virgo María, et omni laude digníssima : quia ex te ortus est sol justítiae, Christus Deus noster.",
      translation: "Happy indeed are you, O holy Virgin Mary, and most worthy of all praise: for out of you arose the sun of justice, Christ our God.",
      mode: "Offertory · The Assumption of the Blessed Virgin Mary (Vigil) · Mode I",
      reference: "Cf. Mal. 4:2",
      gabc: "(c4) FE(d!fffgvFD)lix(d.) *(,) nam(dcf.ghG'Fhh)que(gf) es,(g.) (;) sa(d)cra(d!gfg//dgfefd/e[ll:1]d) Vir(ccd~)go(d.) (,) Ma(dv.cd'f/ef!gvE'Dfv.efd/e[ll:1]d)rí(cd)a,(d.) (;) et(cd) o(dfE~D~)mni(dc) lau(ccd~)de(d.) (,) di(d!ewf!gv.dfED')gnís(d)si(c!ecd)ma :(e[ll:1]d..) (:) qui(cd)a(d) ex(cd) te(dfED.) or(dd/cg)tus(fe) est(dc..) (;) sol(cd/efe/f_d) ju(d!ewf!gv.dfED')stí(d)ti(c!ecd)ae,(e[ll:1]d..) (;) Chri(cd!fvED)stus(d.) De(d!ewf!gv.dfED)us(cd) no(dcdefe/f_d/e[ll:1]d)ster.(d.) (::)",
      source: "Graduale Romanum (GregoBase #280)",
      blurb: {
        text: "Felix namque es addresses Mary directly, ascribing her blessedness to the fact that Christ arose from her. It is sung as the offertory at the Vigil of the Assumption of the Blessed Virgin Mary, within a Mass whose Gospel reading presents the very scene the praise looks back to: the shepherds arriving at Bethlehem and finding Mary, Joseph, and the infant lying in the manger, as Luke 2:15-20 recounts.",
        source: "Divinum Officium, Commune/C10b (Missale Romanum formulary); Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Beata viscera",
      latin: "Beáta víscera Maríae Vírginis, quae portavérunt aetérni Patris Fílium.",
      translation: "Blessed is the womb of the Virgin Mary, which bore the Son of the eternal Father.",
      mode: "Communion · The Assumption of the Blessed Virgin Mary (Vigil) · Mode I",
      reference: "Cf. Luke 11:27",
      gabc: "(c4) BE(d)á(f)ta(fe) ví(fg)sce(efED'e)ra(e[ll:1]d..) (,) * Ma(f)rí(gh)ae(hvGF) Vír(ixghg/hi)gi(h)nis,(h.) (:) quae(f) por(gh~)ta(hg/hfgvFE)vé(d!ewfef)runt(e[ll:1]d..) (,) ae(h)tér(ixjhhg/hi)ni(h.) Pa(dc/fg'h)tris(f_e) Fí(cd)li(d_c/d!ewf)um.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #160)",
      blurb: {
        text: "Beata viscera alludes to Luke 11:27, where a woman in the crowd calls out to Jesus, in the Latin of the Vulgate: \"Beatus venter qui te portavit, et ubera quæ suxisti.\" The chant text draws on that cry but reshapes it, naming Mary by name, specifying her virginity, and identifying the child as the Son of the eternal Father. The same text was also set as a monophonic conductus by Pérotin (fl. c. 1200), the Notre Dame composer: Anonymous IV, a late-thirteenth-century English student who studied in Paris, lists \"Beata viscera etc.\" among Pérotin's works of that form.",
        source: "Cf. Luke 11:27 (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Pérotin\" (rev. 1367640205)",
      },
    },
  },
  "assumption": {
    gradual: {
      title: "Audi filia",
      latin: "Audi, fília, et vide, et inclína aurem tuam : quia concupívit rex spéciem tuam. ℣. Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna.",
      translation: "Hearken, O daughter, and see, and incline your ear: for the king has desired your beauty. ℣. In your comeliness and your beauty set out, proceed prosperously, and reign.",
      mode: "Gradual · The Assumption of the Blessed Virgin Mary (Option 1) · Mode VII",
      reference: "Ps. 45:11, 12",
      gabc: "(c3) AU(e)di,(e) fí(e)li(e)a,(ehg.) *(,) et(hi~) vi(iv.hiH'Ghihi)de,(iv.h/iih/ii) (,) (hi!kkkikvvJI'jh//ivHGhg..) (:) et(f) in(hh)clí(hi//kj)na(kkkvJI'jh//ivHGhg..) (;) au(fi)rem(i!jwk) tu(ih/ikJI'H)am :(ihhvF'Effe/ff) (,) (ef!hhhfhvvGF'he//fvEDe[ll:1]d..) (:) qui(e)a(fd) con(e)cu(f)pí(hih)vit(hf~) rex(hi/kkkvIH'G//hi!jvIHih/jihvvG'FEfe..) (;) spé(g_[oh:h]e/f.g!hwiiv)ci(ih)em(hi) tu(hv.f!hhvFDff,e!hhe'gvF'E)am.(hf/hhf'ivH'GE) (,) (f!gwh_g/ihh'hhvF'Ef_gffe.) (::) ℣. Spé(eh!ivji/kki//jvIHihi)ci(ihhf)e(f_efv.) tu(hg/hiF'Ehh)a,(hiHG.) (;) et(e) pul(e)chri(hh)tú(hi)di(hh/ig/hiF'E)ne(hh) (,) tu(hi)a(ijI'H[oll:0;0.94cm]/l_k//jlkk/iji.) (:) in(ij)tén(hi)de,(i!jwk) pró(i_[oh:h]h)spe(ih)re(h.) (,) pro(h)cé(ih/ikJI'H)de,(ihhvF'Effe/ff) (,) (ef!hhhfhvvGF'he//fvEDe[ll:1]d..) *(;) et(ef) re(e.f!gwh'!iv)gna.(ijIH'hghv.) (,) (ijIH'hgiv.kkkh/ijIG.hig'hvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #840)",
      blurb: {
        text: "Audi filia draws on two consecutive verses of Psalm 45, but trims both of them. Verse 11 in the psalm reads in full \"Hearken, O daughter, and see, and incline thy ear: and forget thy people and thy father's house\"; the chant stops before that final clause. Verse 12 reads \"And the king shall greatly desire thy beauty; for he is the Lord thy God, and him they shall adore\"; the chant keeps only the king's desire for beauty, leaving aside the identification of the king as Lord and God.",
        source: "Ps. 45:11, 12 (Vulgate numbering Ps. 44:11, 12) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Assumpta est Maria",
      latin: "Allelúia. ℣. Assúmpta est María in caelum : gaudet exércitus Angelórum.",
      translation: "Alleluia. ℣. Mary has been taken up into heaven: the host of Angels rejoices.",
      mode: "Alleluia · The Assumption of the Blessed Virgin Mary (Option 1) · Mode V",
      reference: "",
      gabc: "(c4) AL(cd)le(ef!ghhg)lú(gi/jhivH~G~){ia}.(g.) (;) {*} ij.(gh/ijh.1___jvIHG.f!hfg./egFE'DC.) (,) (cd!ef!ghhvGF'D/!e[ll:1]ddc.) (::) ℣. As(cd)súm(fe~)pta(fg) est(gvFEDfg!hvhg.) (,) Ma(g/hhg)rí(fvED)a(d.) in(dgF'E) cae(cdc___)lum :(c.) (:) gau(g/hgjv.ijh/!hvGEfg~)det(g.) (,) ex(cd)ér(ef!ghhg)ci(gi/jhivHG)tus(g.) *(;) An(d)ge(d)ló(gh/ijh.1___jvIHG.f!hfg)rum.(egFE'DC.) (,) (cd!ef!ghhvGF'De[ll:1]ddc.) (::)",
      source: "Graduale Romanum (GregoBase #960)",
      blurb: {
        text: "At the Assumption, the Alleluia announces Mary's taking up into heaven and hears the angelic host rejoice. The feast's proclamation is therefore answered by a heavenly chorus.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Assumpta est Maria",
      latin: "Assúmpta est María in caelum : gaudent ángeli, collaudántes benedícunt Dóminum, allelúia.",
      translation: "Mary has been taken up into heaven: the angels rejoice, and with praises bless the Lord, alleluia.",
      mode: "Offertory · The Assumption of the Blessed Virgin Mary (Option 1) · Mode VIII",
      reference: "",
      gabc: "(c4)AS(fg)súm(g./hjHG'gf)pta(ghg___) est(g.) *(,) Ma(hg/h!jjkvJH)rí(gfh)a(h.) (;) in(h) cæ(jhhf/ghGF'fde'1c,cd!ff/gh!jvHG'gfg)lum :(g.) (:) gau(gh!jji/j_g//hjijkljj)dent(ki/jhhg.) (,) án(g)ge(g)li,(gggvED'eg'hvGFg.) (:) col(g)lau(hj)dán(ig/h!jj/klK'Ijkjjh/ig)tes(g.) (;) be(g)ne(gh)dí(hvGFgvFEf./ghffdg)cunt(f_g) (,) Dó(hv.gjI'Ghh//fh!jvGF'fd/ef!ghg)mi(fg)num,(g.) (;) al(h!iwji~)le(jkJH'//gi.//hjIH'//g!jj/h_[oh:h]i_[oh:h]g_[oh:h])lú(ghg___){ia}.(g.) (::)",
      source: "Graduale Romanum (GregoBase #3317)",
      blurb: {
        text: "The Assumption offertory announces Mary's entry into heaven and describes angels rejoicing as they praise and bless the Lord. The chant turns the celebration outward from Mary toward the praise of God.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Optimam partem",
      latin: "Optimam partem elégit sibi María, quae non auferétur ab ea in aetérnum.",
      translation: "Mary has chosen for herself the best part, which shall not be taken away from her for ever.",
      mode: "Communion · The Assumption of the Blessed Virgin Mary (Option 1) · Mode VIII",
      reference: "Luke 10:42",
      gabc: "(c4)OP(gg)ti(g)mam(gh~) par(hvGF//g.h!iwjg)tem(g.) *(,) e(gh)lé(jkjk)git(ij~) si(h)bi(hvGF') Ma(h)rí(hj/I'G)a,(g.) (:) quæ(g) non(hih) au(g)fe(e)ré(f/fg)tur(gvFED.) ab(fg) e(g)a(ghg'h) (,) in(f) æ(ghg)tér(h!jj/hi~)num.(g.) (::)",
      source: "Graduale Romanum (GregoBase #3316)",
      blurb: {
        text: "Optimam partem names Mary's choice of the best portion, which will not be taken from her. The Communion receives Christ's word as a quiet defense of attentive listening.",
        source: "Luke 10:42 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "assumption-opt2": {
    gradual: {
      title: "Audi filia",
      latin: "Audi, fília, et vide, et inclína aurem tuam : quia concupívit rex spéciem tuam. ℣. Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna.",
      translation: "Hearken, O daughter, and see, and incline your ear: for the king has desired your beauty. ℣. In your comeliness and your beauty set out, proceed prosperously, and reign.",
      mode: "Gradual · The Assumption of the Blessed Virgin Mary (Option 2) · Mode VII",
      reference: "Ps. 45:11, 12",
      gabc: "(c3) AU(e)di,(e) fí(e)li(e)a,(ehg.) *(,) et(hi~) vi(iv.hiH'Ghihi)de,(iv.h/iih/ii) (,) (hi!kkkikvvJI'jh//ivHGhg..) (:) et(f) in(hh)clí(hi//kj)na(kkkvJI'jh//ivHGhg..) (;) au(fi)rem(i!jwk) tu(ih/ikJI'H)am :(ihhvF'Effe/ff) (,) (ef!hhhfhvvGF'he//fvEDe[ll:1]d..) (:) qui(e)a(fd) con(e)cu(f)pí(hih)vit(hf~) rex(hi/kkkvIH'G//hi!jvIHih/jihvvG'FEfe..) (;) spé(g_[oh:h]e/f.g!hwiiv)ci(ih)em(hi) tu(hv.f!hhvFDff,e!hhe'gvF'E)am.(hf/hhf'ivH'GE) (,) (f!gwh_g/ihh'hhvF'Ef_gffe.) (::) ℣. Spé(eh!ivji/kki//jvIHihi)ci(ihhf)e(f_efv.) tu(hg/hiF'Ehh)a,(hiHG.) (;) et(e) pul(e)chri(hh)tú(hi)di(hh/ig/hiF'E)ne(hh) (,) tu(hi)a(ijI'H[oll:0;0.94cm]/l_k//jlkk/iji.) (:) in(ij)tén(hi)de,(i!jwk) pró(i_[oh:h]h)spe(ih)re(h.) (,) pro(h)cé(ih/ikJI'H)de,(ihhvF'Effe/ff) (,) (ef!hhhfhvvGF'he//fvEDe[ll:1]d..) *(;) et(ef) re(e.f!gwh'!iv)gna.(ijIH'hghv.) (,) (ijIH'hgiv.kkkh/ijIG.hig'hvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #840)",
      blurb: {
        text: "Psalm 45, verses 11 and 12 supply this gradual, though not in full. Verse 11 continues past the antiphon's last word: \"and forget thy people and thy father's house.\" Verse 12, which the verse sets to music, ends in the psalm: \"for he is the Lord thy God, and him they shall adore.\" Both endings are left out of the chant text.",
        source: "Ps. 45:11, 12 (Vulgate numbering Ps. 44:11, 12) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Assumpta est Maria",
      latin: "Allelúia. ℣. Assúmpta est María in caelum : gaudet exércitus Angelórum.",
      translation: "Alleluia. ℣. Mary has been taken up into heaven: the host of Angels rejoices.",
      mode: "Alleluia · The Assumption of the Blessed Virgin Mary (Option 2) · Mode V",
      reference: "",
      gabc: "(c4) AL(cd)le(ef!ghhg)lú(gi/jhivH~G~){ia}.(g.) (;) {*} ij.(gh/ijh.1___jvIHG.f!hfg./egFE'DC.) (,) (cd!ef!ghhvGF'D/!e[ll:1]ddc.) (::) ℣. As(cd)súm(fe~)pta(fg) est(gvFEDfg!hvhg.) (,) Ma(g/hhg)rí(fvED)a(d.) in(dgF'E) cae(cdc___)lum :(c.) (:) gau(g/hgjv.ijh/!hvGEfg~)det(g.) (,) ex(cd)ér(ef!ghhg)ci(gi/jhivHG)tus(g.) *(;) An(d)ge(d)ló(gh/ijh.1___jvIHG.f!hfg)rum.(egFE'DC.) (,) (cd!ef!ghhvGF'De[ll:1]ddc.) (::)",
      source: "Graduale Romanum (GregoBase #960)",
      blurb: {
        text: "The second Assumption option retains the Alleluia that says Mary has been taken into heaven. Its response is not explanation but joy: the angelic host rejoices at her arrival.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Assumpta est Maria",
      latin: "Assúmpta est María in caelum : gaudent ángeli, collaudántes benedícunt Dóminum, allelúia.",
      translation: "Mary has been taken up into heaven: the angels rejoice, and with praises bless the Lord, alleluia.",
      mode: "Offertory · The Assumption of the Blessed Virgin Mary (Option 2) · Mode VIII",
      reference: "",
      gabc: "(c4)AS(fg)súm(g./hjHG'gf)pta(ghg___) est(g.) *(,) Ma(hg/h!jjkvJH)rí(gfh)a(h.) (;) in(h) cæ(jhhf/ghGF'fde'1c,cd!ff/gh!jvHG'gfg)lum :(g.) (:) gau(gh!jji/j_g//hjijkljj)dent(ki/jhhg.) (,) án(g)ge(g)li,(gggvED'eg'hvGFg.) (:) col(g)lau(hj)dán(ig/h!jj/klK'Ijkjjh/ig)tes(g.) (;) be(g)ne(gh)dí(hvGFgvFEf./ghffdg)cunt(f_g) (,) Dó(hv.gjI'Ghh//fh!jvGF'fd/ef!ghg)mi(fg)num,(g.) (;) al(h!iwji~)le(jkJH'//gi.//hjIH'//g!jj/h_[oh:h]i_[oh:h]g_[oh:h])lú(ghg___){ia}.(g.) (::)",
      source: "Graduale Romanum (GregoBase #3317)",
      blurb: {
        text: "For the second Assumption offertory, Mary is taken into heaven and the angels are glad. The angels respond with praise and blessing for the Lord, carrying the feast into worship.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Optimam partem",
      latin: "Optimam partem elégit sibi María, quae non auferétur ab ea in aetérnum.",
      translation: "Mary has chosen for herself the best part, which shall not be taken away from her for ever.",
      mode: "Communion · The Assumption of the Blessed Virgin Mary (Option 2) · Mode VIII",
      reference: "Luke 10:42",
      gabc: "(c4)OP(gg)ti(g)mam(gh~) par(hvGF//g.h!iwjg)tem(g.) *(,) e(gh)lé(jkjk)git(ij~) si(h)bi(hvGF') Ma(h)rí(hj/I'G)a,(g.) (:) quæ(g) non(hih) au(g)fe(e)ré(f/fg)tur(gvFED.) ab(fg) e(g)a(ghg'h) (,) in(f) æ(ghg)tér(h!jj/hi~)num.(g.) (::)",
      source: "Graduale Romanum (GregoBase #3316)",
      blurb: {
        text: "Luke 10:42 gives the Assumption's second Communion its image of Mary choosing the best part. The Gospel's quiet sentence becomes a meditation on attention to Christ that cannot be taken away.",
        source: "Luke 10:42 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "triumph-cross": {
    gradual: {
      title: "Christus factus est",
      latin: "Christus factus est pro nobis obédiens usque ad mortem, mortem autem crucis. ℣. Propter quod et Deus exaltávit illum, et dedit illi nomen, quod est super omne nomen.",
      translation: "Christ became obedient for us unto death, even to the death of the cross. ℣. For which cause God also has exalted him, and has given him a name which is above all names.",
      mode: "Gradual · The Exaltation of the Holy Cross · Mode V",
      reference: "Phil. 2:8-9",
      gabc: "(c4) CHri(ffg)stus(f.) *(,) fa(fg)ctus(f) est(f') pro(f) no(ghF'ED.g_[oh:h]e/fg)bis(f.) (;) ob(f)é(hf/gh!jj/kjk)di(jij)ens(h_g) (,) us(h!jjh)que(f.) ad(ixfiH'Gh) mor(f_[oh:h]g_[oh:h]f_[oh:h])tem,(f.) (:) mor(ixf!hhi)tem(g) au(ixgjj)tem(j.h!iw!jvIG'hw!ivHG) cru(fv.ff)cis.(f_c) (,) (fg!hvGF.e!g'h//fhg/hggf.0) (z0::c3) ℣. Pro(d)pter(d) quod(d) et(fe~) De(eh)us(h.) (,) ex(h)al(h)tá(h)vit(h) il(h)lum,(ihhe./h_[oh:h]i_[oh:h]h_[oh:h]/ihhe.) (,) (hi!kv//lvKI'jvHF.1) (,) (h_g/ijh'___jvIH'jvIH'//hvGF.) (:) et(f) de(f!h'i)dit(i) il(i)li(ih/jkihhf.) (,) no(hf/hhh)men,(h.f!gwh!iv.hi/jhh/iih.0) (;) quod(d) est(d) su(d)per(d) o(dfE'D)mne(ef) * no(fhG'Fhhh)men.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #873)",
      blurb: {
        text: "Christus factus est holds Philippians 2:8 and 9 together: obedience reaches the death of the cross, then God exalts Christ and gives him the name above every name. The Holy Cross Gradual keeps descent and exaltation inseparable.",
        source: "Phil. 2:8-9 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Quad6-4m2 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Dulce lignum",
      latin: "Allelúia. ℣. Dulce lignum, dulces clavos, dúlcia ferens póndera : quae sola fuísti digna sustinére regem caelórum et Dóminum.",
      translation: "Alleluia. ℣. Sweet wood, sweet nails, bearing a sweet weight: you alone were worthy to bear the King and Lord of heaven.",
      mode: "Alleluia · The Exaltation of the Holy Cross · Mode VIII",
      reference: "",
      gabc: "(c4) AL(e)le(gg)lú(ghgjvIH'h){ia}.(g.) (;) * (jv.hji//ghG'Fhg/jihhg.) (;) (jv.hji//ghG'Fhg/jihhg//h_ihhg.) (::) ℣. Dul(e)ce(gg) li(ghgjvIH'h)gnum,(g.) (;) dul(g)ces(hi) cla(i)vos,(ig/hihhg.) (;) dúl(g)ci(g)a(hih) fe(ge/fgee[ll:1]d.0)(,)(gh'i)rens(ih~) pón(ivHGh'/ijgg)de(fg)ra :(g.) (:) quae(gji) so(jk)la(k) fu(i)í(k)sti(j) di(ih/jh/ij)gna(i.) (,) sus(i)ti(ih)né(jkjhji//ghG'Fhg/jihhg)re(g.) (;) re(fg~)gem(g) cae(fh)ló(hv.gjIH'ig)rum(g.) (,) * et(e) Dó(gg)mi(ghgjvIH'h)num.(g.) (;) (jv.hji//ghG'Fhg/jihhg.) (;) (jv.hji//ghG'Fhg/jihhg//h_ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #859)",
      blurb: {
        text: "Dulce lignum calls the wood, nails, and burden of the cross sweet, for it bore the King and Lord of heaven. The Alleluia belongs to the feast of the Exaltation of the Holy Cross.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Protege Domine",
      latin: "Prótege, Dómine, plebem tuam, per signum sanctae Crucis, ab ómnibus insídiis inimicórum ómnium : ut tibi gratam exhibeámus servitútem, et acceptábile tibi fiat sacrifícium nostrum, allelúia.",
      translation: "Protect your people, O Lord, by the sign of the holy Cross, from the snares of all their enemies: that we may render you a service acceptable, and that our sacrifice may be pleasing to you, alleluia.",
      mode: "Offertory · The Exaltation of the Holy Cross · Mode II",
      reference: "",
      gabc: "(f3) PRó(fffvEC//ef/gf)te(ef)ge,(f.) *(,) Dó(ef/hgh)mi(gf)ne,(g'hvGE.gefghf.1) (,) ple(gf)bem(ef~) tu(f_[oh:h]g_[oh:h]f_[oh:h])am,(f.) (;) per(f) si(ghiihivHF'g)gnum(g/hhg.) (,) san(eg'!ivH'GF//hvGFgf)ctae(ef) Cru(fggf)cis,(f.) (;) ab(fe) ó(ffe/fhGE.gh/ih~)mni(fg)bus(g.) in(hhg)sí(fe)di(fg)is(g/hhg.) (,) in(e)i(gf)mi(hih)có(gf)rum(ghg) ó(fgf)mni(ef)um :(f.) (:) ut(fe~) ti(ffvEC//ef/gf)bi(ef) gra(f_[oh:h]g_[oh:h]f_[oh:h])tam(f.) (,) ex(f)hi(g)be(hi)á(i/jhiivHF.gh'ijhiivHF'g)mus(g/hhg.) (,) ser(eg'!ivH'GF//hvGFgf)vi(ef)tú(fggf)tem,(f.) (:) et(fe) ac(f)cep(fe)tá(fhGE.ghi)bi(hg)le(fg) ti(fe)bi(fg) fi(g/hhg)at(g.) (;) sa(iiivHF//ghg)cri(e)fí(gh'!ivH'GF)ci(gf)um(ef) no(f.e!fwg'!hv)strum(gf..) (:) al(fe~)le(e/feggvFE'f)lú(f.e!fwg'!hv){ia}.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #195)",
      blurb: {
        text: "The Exaltation formulary tells how Christ's lifting up will draw all things to him. Protege Domine turns the cross into a direct petition, asking protection from enemies and an acceptable offering of service and sacrifice.",
        source: "Chant of the Day (this project's own chant entry); Divinum Officium, Sancti-09-14 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Per signum crucis",
      latin: "Per signum Crucis de inimícis nostris líbera nos, Deus noster.",
      translation: "By the sign of the Cross deliver us from our enemies, O our God.",
      mode: "Communion · The Exaltation of the Holy Cross · Mode IV",
      reference: "",
      gabc: "(c3) PER(e) si(gih)gnum(g) Cru(ef)cis(efED.) (,) ~* de(fh) in(h)i(hf)mí(h)cis(hi!jvji) no(gihh)stris(hg..) (:) lí(f)be(ji)ra(j/ljji/jkjjij) nos,(ijHG.) (;) De(gh'i)us(h) no(gvFEf./e!hghhg//hji/jh/iivHG)ster.(g.) (::)",
      source: "Graduale Romanum (GregoBase #346)",
      blurb: {
        text: "The Gospel of the day, from John 12, has Jesus tell the crowd that if he is lifted up from the earth, he will draw all things to himself. Per signum Crucis arrives at the close of that same Mass as a direct petition, addressing God and asking deliverance from enemies through the very sign of that lifting up. The prayer does not explain or reflect on the cross. It simply invokes it.",
        source: "Divinum Officium, Sancti-09-14 (Missale Romanum formulary); Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "all-saints": {
    gradual: {
      title: "Timete Dominum",
      latin: "Timéte Dóminum, omnes sancti ejus : quóniam nihil deest timéntibus eum. ℣. Inquiréntes autem Dóminum non defícient omni bono.",
      translation: "Fear the Lord, all you his saints: for there is no want to them that fear him. ℣. But they that seek the Lord shall not be deprived of any good.",
      mode: "Gradual · All Saints · Mode I",
      reference: "Ps. 34:10, 11",
      gabc: "(c4) TI(d_c)mé(d)te(fef.) * Dó(g)mi(fe)num(d.0/[-0.5]fgF'D//fvED'fddc.) (;) o(ixf!gwh'!iv)mnes(h) san(hjhhg~)cti(gfgd) e(fg)jus :(gv.) (,) (fg!hjGF'fvED'fddc.) (:) quó(ixf!gwh'!iv)ni(h)am(h) ni(jj)hil(ixhih) de(gfg)est(d_[oh:h]e_[oh:h]d._[oh:h]) (;) ti(d)mén(d!g'h~)ti(g)bus(g) e(gf/ghd)um.(dd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::) ℣. In(d'/fdd[ll:1]c~)qui(d)rén(ded/[1]{/[-4]ix}hi~)tes(hhg/h_f//eg/hgh/fgFD.1cd/fd) (,) (cd!ff/g.h!iw!jvIH.) (;) au(ixhf/gh!jjh/jjvH'GhiG'F)(,)(ghfff'1dfED'//ef'g~)tem(gh) Dó(gh)mi(g)num(fgFE.) (;) non(fg) de(g_[oh:h]e)fí(fge)ci(fgF'EfvED'e)ent(e[ll:1]d..) (;) o(d!ffd/fff)mni(fg) * bo(g_[oh:h]f/hgh)no.(hhf.) (,) (h_ghvFDgff'fvEC//dd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #371)",
      blurb: {
        text: "Timete Dominum draws its respond and verse from consecutive verses of Psalm 34. The verse, though, quotes only the second half of Psalm 34:11. The psalm's full verse reads: \"The rich have wanted, and have suffered hunger: but they that seek the Lord shall not be deprived of any good.\" The chant sets aside the contrast with the rich and sings only the promise.",
        source: "Ps. 34:10, 11 (Vulgate numbering Ps. 33:10, 11) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Venite ad me omnes",
      latin: "Allelúia. ℣. Veníte ad me, omnes qui laborátis et oneráti estis : et ego refíciam vos.",
      translation: "Alleluia. ℣. Come to me, all you that labor and are burdened: and I will refresh you.",
      mode: "Alleluia · All Saints · Mode VIII",
      reference: "Matt. 11:28",
      gabc: "(c3) AL(ee[ll:1]d~)le(ff)lú(efe/hiHF'gffe~){ia}.(e.) *(;) ij.(de!f!gwhe./de!f!gwhe'fvED.) (;) (df!hi//hjijvHF.1) (,) (ehf___!gwh'!ivHF'EDee) (,) (fh//gh'iHF'EDee//fe/hhe.) (::) ℣. Ve(e)ní(efe/hiHF'gffe)te(e) ad(d/efd/ee) me,(d.) (;) o(df!hv//jhi)mnes(i.) (,) qui(h) la(j)bo(i)rá(jkJI'i//hji/jkii)(,)(hiHF'Ehv.gh'!ivHF'EDee)(,)(fh//gh'iHF'EDee)(,)(hji/jkJI'i//hji/jki)tis,(i.) (;) et(hjh/ii) o(e)ne(f!gwh)rá(h)ti(hhhvGF) e(fhe/fe)stis :(e.) (:) et(e) e(ef)go(e) *() re(e)fí(ef)ci(e[ll:1]d)am(df!hiHF'gffe~) vos.(e.) (;) (de!f!gwhe./de!f!gwhe'fvED.) (;) (df!hi//hjijvHF.1) (,) (ehf___!gwh'!ivHF'EDee) (,) (fh//gh'iHF'EDee//fe/hhe.) (::)",
      source: "Graduale Romanum (GregoBase #1237)",
      blurb: {
        text: "Venite ad me omnes draws a single verse from Matthew 11, Christ's invitation to those who labor and are burdened. The passage continues in the next two verses: \"Tollite jugum meum super vos, et discite a me, quia mitis sum, et humilis corde\" and \"Jugum enim meum suave est, et onus meum leve,\" take up my yoke, learn from me, for the yoke is sweet and the burden light. The alleluia verse stops at the invitation itself, before those conditions and promises are named.",
        source: "Matt. 11:28 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Justorum animae",
      latin: "Justórum ánimae in manu Dei sunt, et non tanget illos torméntum malítiae : visi sunt óculis insipiéntium mori : illi autem sunt in pace, allelúia.",
      translation: "The souls of the just are in the hand of God, and the torment of malice shall not touch them: in the sight of the unwise they seemed to die: but they are in peace, alleluia.",
      mode: "Offertory · All Saints · Mode I",
      reference: "Wis. 3:1-3",
      gabc: "(c4) JU(d)stó(fffvDC'dff/hgh)rum(fgf.) *(,) á(fg'h)ni(h)mae(ixhf/higff/ded.) (;) in(d) ma(d!gfg//dgfefd/e[ll:1]d)nu(dcd) (`) De(dv.cd'f/ef!hvGE'fd)i(cd) sunt,(d.) (:) et(ixd!f'h/j_hivGEf_g) non(fe~) tan(de)get(gh) il(hggvE'DC'd)los(d.) (;) tor(d)mén(cd'f/ef'!gvE'Dfv.efd/e[ll:1]d)tum(cd) ma(d)lí(d)ti(d_[oh:h]e_[oh:h]d_[oh:h])ae :(d.) (:) vi(cd)si(d) sunt(fde/dec) (,) ó(cd'f/efd/e[ll:1]d)cu(cd)lis(d.) in(d)si(d)pi(d)én(cd)ti(d)um(dc) mo(dfd___)ri :(d.) (:) il(c)li(d) au(ixdh./jjh//gih/ig.fg'h!jjg)(,)(f!h_gh//fh!jvGF'fdf.//eg/hjh/jhhgh)tem(f.) (,) sunt(ef'g) in(e[ll:1]d/fe) pa(d_[oh:h]e_[oh:h]d_[oh:h])ce,(d.) (:) al(cd)le(f_[oh:h]g_[oh:h]f_[oh:h]hv.ghFD.1//cd/fefg_[oh:h]e)(,)(h_gefd//fvEDe[ll:1]d)lú(cd~){ia}.(d.) (::)",
      source: "Graduale Romanum (GregoBase #835)",
      blurb: {
        text: "Justorum animae draws its words from the opening of Wisdom 3, though its text departs from the Vulgate in one notable place: where verse 1 reads tormentum mortis, the torment of death, the offertory substitutes tormentum malitiae, the torment of malice. The chant also condenses the three verses, silently dropping the second half of verse 2 and the first clause of verse 3, so the passage moves directly from in the sight of the unwise they seemed to die to they are in peace, without the Vulgate's intervening words about the manner of their departure.",
        source: "Wis. 3:1-3 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Beati mundo corde",
      latin: "Beáti mundo corde, quóniam ipsi Deum vidébunt : beáti pacífici, quóniam fílii Dei vocabúntur : beáti qui persecutiónem patiúntur propter justítiam, quóniam ipsórum est regnum caelórum.",
      translation: "Blessed are the clean of heart, for they shall see God: blessed are the peacemakers, for they shall be called children of God: blessed are they that suffer persecution for justice' sake, for theirs is the kingdom of heaven.",
      mode: "Communion · All Saints · Mode I",
      reference: "Matt. 5:8-10",
      gabc: "(c4) BE(h)á(h)ti(hg) mun(hj)do(ji) cor(hi)de,(h.) (;) * quó(h)ni(g)am(hvGE) i(fgh)psi(g.) (,) De(hvGF')um(g) vi(f_e)dé(de!fvED'e)bunt :(e[ll:1]d..) (:) be(df)á(fef)ti(d!ewf) pa(fd)cí(fh)fi(gf)ci,(fg!hvhg.) (;) quó(gh)ni(gf)am(f) fí(gh)li(h)i(h) De(j)i(h) vo(h)ca(h_g)bún(fg!hvG~F~)tur :(gf..) (:) be(f!hj)á(jkl)ti(k_[hl:1]j) (,) qui(j') per(j)se(h')cu(j)ti(g')ó(h)nem(g') pa(h)ti(g')ún(h)tur(j.h!iwji.) (,) pro(g)pter(hggf) ju(gh)stí(f)ti(fg!hvGF'g)am,(gf..) (:) quó(h)ni(g)am(hgh) i(f)psó(gfg)rum(fe) est(dfddc.) (,) re(f.egwhgh)gnum(gh) cae(f_e)ló(de!fvED'e)rum.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #345)",
      blurb: {
        text: "Beati mundo corde draws three beatitudes from Matthew 5, beginning at verse 8 and stopping at verse 10. The five beatitudes before verse 8 are passed over, and so are verses 11 and 12, in which Christ turns to address his disciples directly: \"Blessed are ye when they shall revile you, and persecute you\" and \"Be glad and rejoice for your reward is very great in heaven.\" What remains speaks entirely in the third person, of those who are pure, peaceful, and persecuted, without the personal address that closes the series.",
        source: "Matt. 5:8-10 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "requiem": {
    gradual: {
      title: "Requiem aeternam",
      latin: "Réquiem aetérnam dona eis, Dómine : et lux perpétua lúceat eis. ℣. In memória aetérna erit justus : ab auditióne mala non timébit.",
      translation: "Eternal rest grant unto them, O Lord: and let perpetual light shine upon them. ℣. The just shall be in everlasting remembrance: he shall not fear the evil hearing.",
      mode: "Gradual · Mass for the Dead (All Souls) · Mode II",
      reference: "Ps. 112:7",
      gabc: "(c3) RE(egf)qui(f)em(f.) *() ae(f)tér(hfghvF'Ege/fg)nam(f.) (;) do(hf/hi'j)na(hvGF') e(f)is(gxfegvFE.) (,) Dó(e[ll:1]d/fef)mi(fef)ne :(fd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) et(hh) lux(h) per(h)pé(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF')tu(f)a(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) lú(de'fhvGF'g)ce(e)at(f) e(hf/h_i)is.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. In(f) me(h)mó(hi)ri(i)a(i) ae(ij)tér(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)na(ji..) (:) e(i!jw!kvJI'jw!kvJI)rit(ij) ju(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)stus :(f.) (:) ab(hh) au(h)di(h)ti(h)ó(h)ne(hi) ma(ivH'GE//fhGEfh..)(,)(gi!jvHF)la(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) * non(de'fhvGF'g) ti(ef)mé(hf/h_i)bit.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1261)",
      blurb: {
        text: "Requiem aeternam dona eis, Domine, et lux perpetua luceat eis, the body of this gradual, is cited from 2 Esdras 2:34-35, not from the Psalms. The verse drawn from Psalm 112 quotes only the first two clauses of verse 7. The psalm's line continues, \"Paratum cor ejus sperare in Domino,\" his heart is ready to hope in the Lord, but the chant stops before reaching it.",
        source: "Ps. 112:7 (Vulgate numbering Ps. 111:7) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Eternal Rest\" (rev. 1311236353); Wikipedia, \"Requiem\" (rev. 1358525277)",
      },
    },
    tract: {
      title: "Absolve Domine",
      latin: "Absólve, Dómine, ánimas ómnium fidélium defunctórum ab omni vínculo delictórum. ℣. Et grátia tua illis succurrénte, mereántur evádere judícium ultiónis. ℣. Et lucis aetérnae beatitúdine pérfrui.",
      translation: "Absolve, O Lord, the souls of all the faithful departed from every bond of sin. ℣. And by the help of your grace may they be enabled to escape the judgment of vengeance. ℣. And to enjoy the bliss of light eternal.",
      mode: "Tract · Mass for the Dead (All Souls) · Mode VIII",
      reference: "",
      gabc: "(c4) AB(g)sól(g/hih)ve,(g/hhg.) (,) ~~~* Dó(gjjk)mi(h)ne,(gf/ghhg.) (;) á(gj)ni(j)mas(j) ó(j)mni(j)um(j) fi(j)dé(hj)li(j)um(j.) (,) de(j)fun(j)ctó(ik/ljjh)rum(jhhg/hg/jjh/jggf.0) (:) ab(f) o(hj)mni(igh) vín(gf/gh)cu(g)lo(g.) (,) de(g)li(gh/jij)ctó(j.h!iwj)rum.(jjjvIHivHGhg..) (::) ℣. Et(g) grá(gj)ti(j)a(j) tu(j)a(j.) (,) il(j)lis(j) suc(j)cur(j)rén(ik/ljjh)te,(jhhg/hg/jjh/jggf.0) (:) me(f)re(f)án(hj)tur(igh) e(gf)vá(gh)de(g)re(g.) (,) ju(g)dí(gh)ci(g)um(g) ul(g)ti(gh/jij)ó(j.h!iwj)nis.(jjjvIHivHGhg..) (::) ℣. Et(g) lu(gj)cis(j) ae(j)tér(ik/ljjh)nae(jhhg/!hg/!jjh/!jggf.0) (:) be(g)a(g)ti(g)tú(h_g/h!iwj)di(ghG'F)ne(f.) *(,) pér(f.0h!iwj'!kv)fru(j)i.(jijHGg'g/hggfg.) (,) (jjjkvJ'IH'/!hg/hjI'HG'ghf.1) (,) (h!iw!jvIH'ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #338)",
      blurb: {
        text: "Absolve Domine, the Tract of the Mass for the Dead, stands on its own terms in the plainchant tradition. Tomás Luis de Victoria, in his 1605 Officium Defunctorum, set nearly every movement of the Requiem Mass, including the Introit, Kyrie, Gradual, Offertory, Sanctus, Agnus Dei, and Communion, yet left this Tract out. The plainchant therefore has no polyphonic counterpart in that celebrated Renaissance setting.",
        source: "Wikipedia, \"Officium Defunctorum (Victoria)\" (rev. 1371019801)",
      },
    },
    sequence: {
      title: "Dies irae",
      latin: "Dies irae, dies illa, Solvet saeclum in favílla: Teste David cum Sibýlla. Quantus tremor est futúrus, Quando judex est ventúrus, Cuncta stricte discussúrus! Tuba mirum spargens sonum Per sepúlcra regiónum, Coget omnes ante thronum. Mors stupébit et natúra, Cum resúrget creatúra, Judicánti responsúra. Liber scriptus proferétur, In quo totum continétur, Unde mundus judicétur. Judex ergo cum sedébit, Quidquid latet apparébit: Nil inúltum remanébit. Quid sum miser tunc dictúrus? Quem patrónum rogatúrus? Cum vix justus sit secúrus. Rex treméndae majestátis, Qui salvándos salvas gratis, Salva me, fons pietátis. Recordáre Jesu pie, Quod sum causa tuae viae: Ne me perdas illa die. Quaerens me, sedísti lassus: Redemísti crucem passus: Tantus labor non sit cassus. Juste judex ultiónis, Donum fac remissiónis, Ante diem ratiónis. Ingemísco, tamquam reus: Culpa rubet vultus meus: Supplicánti parce Deus. Qui Maríam absolvísti, Et latrónem exaudísti, Mihi quoque spem dedísti. Preces meae non sunt dignae: Sed tu bonus fac benígne, Ne perénni cremer igne. Inter oves locum praesta, Et ab haedis me sequéstra, Státuens in parte dextra. Confutátis maledíctis, Flammis ácribus addíctis: Voca me cum benedíctis. Oro supplex et acclínis, Cor contrítum quasi cinis: Gere curam mei finis. Lacrimósa dies illa, Qua resúrget ex favílla, Judicándus homo reus: Huic ergo parce Deus. Pie Jesu Dómine, dona eis réquiem. Amen.",
      translation: "Day of wrath, that day when the world will dissolve into ashes, as David foretold with the Sibyl. How great the trembling shall be when the Judge shall come to weigh all things strictly! The trumpet, sounding its wondrous call through the tombs of every land, will summon all before the throne. Death and nature will stand amazed when creation rises again to answer to its Judge. The written book will be brought forth, in which all is contained, from which the world is to be judged. When the Judge takes his seat, whatever is hidden will be made known, and nothing will go unanswered. What then shall I, a poor wretch, say? To what protector shall I appeal, when scarcely the just are secure? King of awesome majesty, who freely saves those who are saved, save me, O fount of mercy. Remember, kind Jesus, that I am the reason for your journey; do not cast me out on that day. Seeking me, you sank down weary; you redeemed me by enduring the cross; let not such labor be in vain. Just Judge of retribution, grant me the gift of pardon before the day of reckoning. I groan as one who is guilty; my face blushes for my fault; spare your suppliant, O God. You who absolved Mary, and heard the prayer of the thief, have given hope to me as well. My prayers are not worthy, but you, in your goodness, kindly grant that I not be given over to the everlasting fire. Grant me a place among the sheep, and set me apart from the goats, placing me at your right hand. When the wicked are silenced and given to their sorrowful lot, call me among the blessed. I pray, kneeling and bowed low, my heart contrite as ashes; take care of my end. Tearful will be that day when from the ashes shall rise again the guilty to be judged; therefore spare him, O God. Merciful Lord Jesus, grant them rest. Amen.",
      stanzas: [
        { latin: "Dies irae, dies illa, / Solvet saeclum in favílla: / Teste David cum Sibýlla.", translation: "Day of wrath, that day when the world will dissolve into ashes, as David foretold with the Sibyl." },
        { latin: "Quantus tremor est futúrus, / Quando judex est ventúrus, / Cuncta stricte discussúrus!", translation: "How great the trembling shall be when the Judge shall come to weigh all things strictly!" },
        { latin: "Tuba mirum spargens sonum / Per sepúlcra regiónum, / Coget omnes ante thronum.", translation: "The trumpet, sounding its wondrous call through the tombs of every land, will summon all before the throne." },
        { latin: "Mors stupébit et natúra, / Cum resúrget creatúra, / Judicánti responsúra.", translation: "Death and nature will stand amazed when creation rises again to answer to its Judge." },
        { latin: "Liber scriptus proferétur, / In quo totum continétur, / Unde mundus judicétur.", translation: "The written book will be brought forth, in which all is contained, from which the world is to be judged." },
        { latin: "Judex ergo cum sedébit, / Quidquid latet apparébit: / Nil inúltum remanébit.", translation: "When the Judge takes his seat, whatever is hidden will be made known, and nothing will go unanswered." },
        { latin: "Quid sum miser tunc dictúrus? / Quem patrónum rogatúrus? / Cum vix justus sit secúrus.", translation: "What then shall I, a poor wretch, say? To what protector shall I appeal, when scarcely the just are secure?" },
        { latin: "Rex treméndae majestátis, / Qui salvándos salvas gratis, / Salva me, fons pietátis.", translation: "King of awesome majesty, who freely saves those who are saved, save me, O fount of mercy." },
        { latin: "Recordáre Jesu pie, / Quod sum causa tuae viae: / Ne me perdas illa die.", translation: "Remember, kind Jesus, that I am the reason for your journey; do not cast me out on that day." },
        { latin: "Quaerens me, sedísti lassus: / Redemísti crucem passus: / Tantus labor non sit cassus.", translation: "Seeking me, you sank down weary; you redeemed me by enduring the cross; let not such labor be in vain." },
        { latin: "Juste judex ultiónis, / Donum fac remissiónis, / Ante diem ratiónis.", translation: "Just Judge of retribution, grant me the gift of pardon before the day of reckoning." },
        { latin: "Ingemísco, tamquam reus: / Culpa rubet vultus meus: / Supplicánti parce Deus.", translation: "I groan as one who is guilty; my face blushes for my fault; spare your suppliant, O God." },
        { latin: "Qui Maríam absolvísti, / Et latrónem exaudísti, / Mihi quoque spem dedísti.", translation: "You who absolved Mary, and heard the prayer of the thief, have given hope to me as well." },
        { latin: "Preces meae non sunt dignae: / Sed tu bonus fac benígne, / Ne perénni cremer igne.", translation: "My prayers are not worthy, but you, in your goodness, kindly grant that I not be given over to the everlasting fire." },
        { latin: "Inter oves locum praesta, / Et ab haedis me sequéstra, / Státuens in parte dextra.", translation: "Grant me a place among the sheep, and set me apart from the goats, placing me at your right hand." },
        { latin: "Confutátis maledíctis, / Flammis ácribus addíctis: / Voca me cum benedíctis.", translation: "When the wicked are silenced and given to their sorrowful lot, call me among the blessed." },
        { latin: "Oro supplex et acclínis, / Cor contrítum quasi cinis: / Gere curam mei finis.", translation: "I pray, kneeling and bowed low, my heart contrite as ashes; take care of my end." },
        { latin: "Lacrimósa dies illa, / Qua resúrget ex favílla, / Judicándus homo reus: / Huic ergo parce Deus.", translation: "Tearful will be that day when from the ashes shall rise again the guilty to be judged; therefore spare him, O God." },
        { latin: "Pie Jesu Dómine, / dona eis réquiem. Amen.", translation: "Merciful Lord Jesus, grant them rest. Amen." },
      ],
      mode: "Sequence · The Commemoration of All the Faithful Departed (All Souls) · Mode I",
      reference: "Cf. Soph. 1:15-16",
      gabc: "(c4) DI(f)es(e) i(f)rae,(d) di(e)es(c) il(d)la,(d.) (;) Sol(f)vet(fg) sae(fe)clum(dc) in(e) fa(f)víl(e)la :(d.) (;) Te(a)ste(cd) Da(d)vid(dc) cum(e) Si(f)býl(e)la.(d.) (::) Quan(f)tus(e) tre(f)mor(d) est(e) fu(c)tú(d)rus,(d.) (;) Quan(f)do(fg) ju(fe)dex(dc) est(e) ven(f)tú(e)rus,(d.) (;) Cun(a)cta(cd) stri(d)cte(dc) dis(e)cus(f)sú(e)rus!(d.) (::) Tu(h)ba(j) mi(j)rum(igh) spar(hvGF)gens(g) so(h)num(hd..) (;) Per(f) se(e)púl(f)cra(d) re(e)gi(c)ó(d)num,(d.) (;) Co(f)get(gh) o(hvGF)mnes(evDC) an(e)te(f) thro(e)num.(d.) (::) Mors(h) stu(j)pé(j)bit(igh) et(hvGF) na(g)tú(h)ra,(hd..) (;) Cum(f) re(e)súr(f)get(d) cre(e)a(c)tú(d)ra,(d.) (;) Ju(f)di(gh)cán(hvGF)ti(evDC) re(e)spon(f)sú(e)ra.(d.) (::) Li(h)ber(gf) scri(g)ptus(h_d) pro(dc)fe(a)ré(cd)tur,(d.) (;) In(fe) quo(d) to(c)tum(a) con(c)ti(d)né(f)tur,(ecd.) (;) Un(h)de(f) mun(g)dus(d) ju(c)di(d)cé(f)tur.(ecd.) (::) Ju(h)dex(gf) er(g)go(h_d) cum(dc) se(a)dé(cd)bit,(d.) (;) Quid(fe)quid(d) la(c)tet(a) ap(c)pa(d)ré(f)bit :(ecd.) (;) Nil(h) in(f)úl(g)tum(d) re(c)ma(d)né(f)bit.(ecd.) (::) Quid(f) sum(e) mi(f)ser(d) tunc(e) di(c)ctú(d)rus?(d.) (;) Quem(f) pa(fg)tró(fe)num(dc) ro(e)ga(f)tú(e)rus?(d.) (;) Cum(a) vix(cd) ju(d)stus(dc) sit(e) se(f)cú(e)rus.(d.) (::) Rex(f) tre(e)mén(f)dae(d) ma(e)je(c)stá(d)tis,(d.) (;) Qui(f) sal(fg)ván(fe)dos(dc) sal(e)vas(f) gra(e)tis,(d.) (;) Sal(a)va(cd) me,(d) fons(dc) pi(e)e(f)tá(e)tis.(d.) (::) Re(h)cor(j)dá(j)re(igh) Je(hvGF)su(g) pi(h)e,(hd..) (;) Quod(f) sum(e) cau(f)sa(d) tu(e)ae(c) vi(d)ae :(d.) (;) Ne(f) me(gh) per(hvGF)das(evDC) il(e)la(f) di(e)e.(d.) (::) Quae(h)rens(j) me,(j) se(igh)dí(hvGF)sti(g) las(h)sus :(hd..) (;) Red(f)e(e)mí(f)sti(d) cru(e)cem(c) pas(d)sus :(d.) (;) Tan(f)tus(gh) la(hvGF)bor(evDC) non(e) sit(f) cas(e)sus.(d.) (::) Ju(h)ste(gf) ju(g)dex(h_d) ul(dc)ti(a)ó(cd)nis,(d.) (;) Do(fe)num(d) fac(c) re(a)mis(c)si(d)ó(f)nis,(ecd.) (;) An(h)te(f) di(g)em(d) ra(c)ti(d)ó(f)nis.(ecd.) (::) In(h)ge(gf)mí(g)sco,(h_d) tam(dc)quam(a) re(cd)us :(d.) (;) Cul(fe)pa(d) ru(c)bet(a) vul(c)tus(d) me(f)us :(ecd.) (;) Sup(h)pli(f)cán(g)ti(d) par(c)ce(d) De(f)us.(ecd.) (::) Qui(f) Ma(e)rí(f)am(d) ab(e)sol(c)ví(d)sti,(d.) (;) Et(f) la(fg)tró(fe)nem(dc) ex(e)au(f)dí(e)sti,(d.) (;) Mi(a)hi(cd) quo(d)que(dc) spem(e) de(f)dí(e)sti.(d.) (::) Pre(f)ces(e) me(f)ae(d) non(e) sunt(c) di(d)gnae :(d.) (;) Sed(f) tu(fg) bo(fe)nus(dc) fac(e) be(f)ní(e)gne,(d.) (;) Ne(a) per(cd)én(d)ni(dc) cre(e)mer(f) i(e)gne.(d.) (::) In(h)ter(j) o(j)ves(igh) lo(hvGF)cum(g) prae(h)sta,(hd..) (;) Et(f) ab(e) hae(f)dis(d) me(e) se(c)qué(d)stra,(d.) (;) Stá(f)tu(gh)ens(hvGF) in(evDC) par(e)te(f) dex(e)tra.(d.) (::) Con(h)fu(j)tá(j)tis(igh) ma(hvGF)le(g)dí(h)ctis,(hd..) (;) Flam(f)mis(e) á(f)cri(d)bus(e) ad(c)dí(d)ctis :(d.) (;) Vo(f)ca(gh) me(hvGF) cum(evDC) be(e)ne(f)dí(e)ctis.(d.) (::) O(h)ro(gf) sup(g)plex(h_d) et(dc) ac(a)clí(cd)nis,(d.) (;) Cor(fe) con(d)trí(c)tum(a) qua(c)si(d) ci(f)nis :(ecd.) (;) Ge(h)re(f) cu(g)ram(d) me(c)i(d) fi(f)nis.(ecd.) (::) La(d)cri(h)mó(ixhi)sa(h) di(g)es(fe) il(g)la,(h.) (;) Qua(f) re(e)súr(g)get(h.) ex(dfED'C) fa(f)víl(e)la,(d.) (::) Ju(h)di(j)cán(k)dus(jvIH) ho(hvGF)mo(g) re(h)us :(hd..) (;) Hu(f)ic(e) er(g)go(h.) par(dfED'C)ce(f) De(e)us.(d.) (::) Pi(h)e(g) Je(f)su(e) Dó(g)mi(g)ne,(h.) (;) do(f)na(e) e(g)is(ede) ré(f)qui(e)em.(d.) (::) A(ce!fvED)men.(cd..) (::)",
      source: "Graduale Romanum (GregoBase #1198)",
      blurb: {
        text: "The Dies irae imagines the day when the Judge comes, the dead rise, and the hidden book is opened. Its prayer moves from fear and contrition to a plea for pardon, ending with the request that the dead be given rest.",
        source: "Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Domine Jesu Christe",
      latin: "Dómine Jesu Christe, Rex glóriae, líbera ánimas ómnium fidélium defunctórum de poenis inférni, et de profúndo lacu : líbera eas de ore leónis, ne absórbeat eas tártarus, ne cadant in obscúrum : sed sígnifer sanctus Míchael repraeséntet eas in lucem sanctam : quam olim Abrahae promisísti, et sémini ejus.",
      translation: "O Lord Jesus Christ, King of glory, deliver the souls of all the faithful departed from the pains of hell and from the deep pit: deliver them from the lion's mouth, that hell may not swallow them up, and that they may not fall into darkness: but may the holy standard-bearer Michael bring them into the holy light: which you once promised to Abraham and his seed.",
      mode: "Offertory · Mass for the Dead (All Souls) · Mode II",
      reference: "",
      gabc: "(f3) DO(f)mi(ef)ne(f) Je(f)su(fe) Chri(f)ste,(fhffe.) (,) * Rex(hv.ghi) gló(gfh./ghf/gf)ri(ef)ae,(fhffe.) (;) lí(g)be(ef)ra(f) á(fg)ni(f)mas(f.) (,) ó(fg~)mni(f)um(f) fi(g)dé(gfh)li(fge)um(e) de(efh)fun(gh)ctó(f_[oh:h]g_[oh:h]f_[oh:h])rum(f.) (;) de(f) poe(ef)nis(f) in(f)fér(f!gwh_f)ni,(f.) (,) et(g) de(e) pro(f)fún(h)do(g) la(f_[oh:h]g_[oh:h]f_[oh:h])cu :(f.) (:) lí(g)be(e)ra(f) e(h)as(hg) de(f) o(g)re(f) le(i)ó(ivvHF'E)nis,(f!gwhg.) (;) ne(e) ab(f)sór(h)be(g)at(f) e(g)as(f.) tár(ghf)ta(ef)rus,(f.) (;) ne(f) ca(f)dant(ec~) in(e) ob(fg)scú(g.f!gwh_f)rum :(f.) (:) sed(f.g!hwi) sí(hg~)gni(fg)fer(g.) san(gf~)ctus(f!gwhg) Mí(fgf)cha(ef)el(f.) (;) re(f)prae(f)sén(hg~)tet(hi) e(ivvHF'E)as(fg..) (,) in(eg~) lu(g.f!gwh)cem(gf~) san(eg/hf~)ctam :(f.) (:) *~Quam(f) o(f)lim(ec~) A(e)bra(fg)hae(gf) pro(h)mi(hg)sí(fg)sti,(ffe.) (;) et(hi) sé(gf//hiHF'fe.//fhg/hig)(,)(fhg)mi(fge)ni(e_[oh:h]c) e(e!fwg/hf~)jus.(f.) (::) V/.~Hó(e)sti(fh)as(hhg) et(fe~) pre(fh)ces(hhg.) (,) ti(e)bi(fh) Dó(h)mi(fgF'E)ne(e.) (,) lau(gf~)dis(gh) of(gf)fé(e)ri(ef)mus :(f.) (:) tu(f.g!hwi) sús(hg)ci(fg)pe(g.) (,) pro(f) a(f)ni(e)má(fh)bus(ghg) il(f.)lis,(f.) (;) qua(ih)rum(iji') hó(h)di(gh)e(f.) (,) me(f)mó(fe)ri(f)am(hg) fá(fg)ci(fe)mus :(e.) (:) fac(fg) e(e)as,(ec) Dó(e)mi(ef)ne,(f.) (,) de(h) mor(gff)te(e) trans(ghi~)í(iih)re(gf) ad(ghg) vi(f.)tam.(f.) (::) *~Quam(f) o(f)lim.(ec~) (::)",
      source: "Graduale Romanum (GregoBase #1199)",
      blurb: {
        text: "Domine Jesu Christe serves as the Offertory at the traditional Mass for the Dead. Berlioz set the same text as the seventh movement of his Grande Messe des morts, Op. 5, composed in 1837 and premiered at Les Invalides on 5 December 1837. In that setting, the movement opens as a quiet orchestral fugue in D minor, the choir contributing a repeated three-note motif, A, B♭, and A, weaving through the developing orchestral texture for close to ten minutes before concluding peacefully.",
        source: "Wikipedia, \"Requiem (Berlioz)\" (rev. 1371621694)",
      },
    },
    communion: {
      title: "Lux aeterna",
      latin: "Lux aetérna lúceat eis, Dómine : cum sanctis tuis in aetérnum, quia pius es.",
      translation: "May light eternal shine upon them, O Lord: with your saints for ever, for you are merciful.",
      mode: "Communion · Mass for the Dead (All Souls) · Mode VIII",
      reference: "",
      gabc: "(c4) LUX(h) ae(gf)tér(gh)na(g.) (,) * lú(h)ce(j)at(i) e(j)is,(h) Dó(g)mi(fg)ne :(g.) (:) * Cum(h) san(j)ctis(i) tu(j)is(h) in(i) ae(j)tér(h)num,(ghg.) (,) qui(e)a(f) pi(gh)us(h) es.(g.) (::) V/. Ré(g)qui(h)em(j) ae(j)tér(j)nam(j) do(j)na(j) e(j)is(k) Dó(k)mi(j)ne,(j.) (;) et(h) lux(j) per(j)pé(j)tu(j)a(j) lú(j)ce(i)at(j) e(h)is.(g.) (::) * Cum(h) san(j)ctis(i) tu(j)is(h) in(i) ae(j)tér(h)num,(ghg.) (,) qui(e)a(f) pi(gh)us(h) es.(g.) (::)",
      source: "Graduale Romanum (GregoBase #241)",
      blurb: {
        text: "Lux aeterna is the Communion antiphon for the Mass for the Dead. The text it sets is part of a longer Latin passage; the antiphon stops before the closing petition, which runs \"Requiem aeternam dona eis, Domine; et lux perpetua luceat eis,\" a prayer that God grant them eternal rest and that everlasting light shine upon them once more. The antiphon draws on the opening of that text, resting on the image of light and the mercy of God.",
        source: "Wikipedia, \"Lux Aeterna\" (rev. 1336040155); Wikipedia, \"Lux Aeterna (Ligeti)\" (rev. 1338432940)",
      },
    },
  },
  "dedication-lateran": {
    gradual: {
      title: "Locus iste",
      latin: "Locus iste a Deo factus est, inaestimábile sacraméntum, irreprehensíbilis est. ℣. Deus, cui adstat Angelórum chorus, exáudi preces servórum tuórum.",
      translation: "This place was made by God, a priceless mystery, beyond reproach. ℣. O God, before whom stands the choir of Angels, hear the prayers of your servants.",
      mode: "Gradual · The Dedication of the Lateran Basilica · Mode V",
      reference: "",
      gabc: "(c3) LO(dde)cus(d) i(gxd!ewf'!gv)ste(f.) *(,) a(fh) De(ffe)o(ef) fa(fefDC'ef/hf)ctus(d_[oh:h]e_[oh:h]d_[oh:h]) est,(d.) (;) in(f)ae(fe)sti(eh)má(h)bi(gxihhfg)le(g_[oh:h]f) sa(f)cra(e.[ll:1]d!ew!fvED'e)mén(gxef!gvF~E~)tum,(fe..) (:) ir(f)re(f)pre(f)hen(hh)sí(h)bi(f)lis(de) est.(dfe___//highf.dfe/fee[ll:1]d.0) (::) ℣. De(d)us,(d) cu(d)i(d) ad(df!hh/ijh)stat(h.) (,) An(h)ge(h)ló(h)rum(h) cho(h)rus,(ihhe./h_[oh:h]i_[oh:h]h_[oh:h]/ihhe.) (,) (hi!kv//lvKI'jvHF.1) (,) (h_g/ijh'___jvIH'jvIH'//hvGF.) (:) ex(h)áu(hi!jvIH'hf/hhhi~)di(h.) (,) pre(gxfgFE.fgFD.1fvEDe[ll:1]d)ces(d.) (;) ser(d)vó(dfE'D)rum(ef) *() tu(h)ó(hiH'Fhhh)rum.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #651)",
      blurb: {
        text: "Locus iste calls the consecrated place God's work and a priceless mystery, while the Dedication formulary looks toward the new Jerusalem in which God dwells with his people. Its Gospel turns to a house where salvation comes, echoing the Gradual's concern with a holy place.",
        source: "Chant of the Day (this project's own chant entry); Divinum Officium, Commune/C8 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Adorabo ad templum",
      latin: "Allelúia. ℣. Adorábo ad templum sanctum tuum : et confitébor nómini tuo.",
      translation: "Alleluia. ℣. I will worship toward your holy temple: and I will give glory to your name.",
      mode: "Alleluia · The Dedication of the Lateran Basilica · Mode VII",
      reference: "Ps. 138:2",
      gabc: "(c3) AL(e)le(fde)lú(hf/hhi){ia}.(ijhh'he.) *(,) ij.(hig'hvFD.1//fhg/ihh'hhvF'Ef_gffe.) (::) ℣. Ad(e)o(hh)rá(iv.hif.1/[-0.5]efd.1/f!gwhhvG'FEf_e)bo(e.) (;) ad(ef~) tem(ef~)plum(e) san(df!hh/jij)ctum(i_[oh:h]h) tu(fhff/d/ef_d)um :(d.) (:) et(d) con(e)fi(f)té(h_i!kkh/ii//hhhf/hhe/ffdev.)(,)(defh_i!kkh/ii//hhhf/hhe/ffdev.)(,)(de/ffdev.f!gwhhvG'FEf_e)bor(e.) (;) * nó(ef)mi(e)ni(e.f!gwh) tu(h_f/g!hwihi)o.(i_[oh:h]g/h!iwjij//ijIG.) (,) (hig'hvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #242)",
      blurb: {
        text: "Adorabo ad templum draws its words from the second verse of Psalm 138, but sings only part of that verse. What the chant omits, the fuller verse supplies: \"For thy mercy, and for thy truth: for thou hast magnified thy holy name above all.\" The chant carries the act of worship and the vow of praise, while the reason given for that praise, God's mercy, truth, and the greatness of his name, remains unsung.",
        source: "Ps. 138:2 (Vulgate numbering Ps. 137:2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Domine Deus in simplicitate",
      latin: "Dómine Deus, in simplicitáte cordis mei laetus óbtuli univérsa : et pópulum tuum, qui repértus est, vidi cum ingénti gáudio : Deus Israel, custódi hanc voluntátem, Dómine Deus.",
      translation: "O Lord God, in the simplicity of my heart I have joyfully offered all these things: and I have seen with great joy your people which are present: O God of Israel, keep this will, O Lord God.",
      mode: "Offertory · The Dedication of the Lateran Basilica · Mode VI",
      reference: "1 Par. 29:17-18",
      gabc: "(c4) DO(fg)mi(f)ne(f) De(fg!hvGF'g)us,(gf..) *(;) in(f) sim(fd~)pli(fgf)ci(h)tá(hjh___!iwj)te(g) cor(f)dis(d!ewf) me(fgffvED)i(dfddc.) (;) lae(ff)tus(ff) ób(fe/f_g)tu(dc)li(ff) u(gf/h_g)ni(f)vér(fg!hv_G~F~)sa :(gf..) (:) et(f) pó(ixf!gwh'!iv)pu(h)lum(h) tu(hjh)um,(hggfg.) (,) qui(d!f'g) re(g)pér(ghgg)tus(fgF'E) est,(f.) (;) vi(f)di(fd) cum(fgf) in(fd~)gén(fgf~)ti(g) gáu(g.h!iw!jvIH)di(h_[oh:h]i_[oh:h]h_[oh:h])o :(h.) (:) De(h)us(h_g) Is(ghg)ra(f)el,(fg!hvhg.) (;) cu(f)stó(fg/hgh)di(g) hanc(ghgff/ded.) vo(ffe)lun(fg/hg/h_g)tá(fg)tem,(f./hjGF'gvFD'Cfv.) (;) Dó(fg)mi(f)ne(f) De(fg!hvGF'g)us.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #200)",
      blurb: {
        text: "Domine Deus in simplicitate draws from David's prayer in 1 Paralipomenon 29:17-18, spoken as he presents the offerings gathered for the building of the temple. The chant begins mid-verse, stepping straight into the act of offering and omitting the opening words of verse 17, \"Scio, Deus meus, quod probes corda, et simplicitatem diligas, unde et ego\" (I know, my God, that thou provest hearts and lovest simplicity, wherefore I also). At the close, the full address of verse 18, \"Domine Deus Abraham, et Isaac, et Israël patrum nostrorum,\" is compressed to \"Deus Israel,\" and the petition that the people's devotion \"semper in venerationem tui mens ista permaneat\" (remain always for thy worship) is set aside, leaving the chant to end on the repeated invocation \"Domine Deus.\"",
        source: "1 Par. 29:17-18 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Domus mea",
      latin: "Domus mea, domus oratiónis vocábitur, dicit Dóminus : in ea omnis, qui petit, áccipit : et qui quaerit, ínvenit, et pulsánti aperiétur.",
      translation: "My house shall be called a house of prayer, says the Lord: in it everyone that asks receives: and he that seeks finds, and to him that knocks it shall be opened.",
      mode: "Communion · The Dedication of the Lateran Basilica · Mode V",
      reference: "Matt. 21:13",
      gabc: "(c4) DO(g)mus(fg) me(gh!ivHG'h)a,(hg..) (,) * do(jjk)mus(j) o(f)ra(g)ti(hj)ó(j)nis(g) vo(ixi)cá(ihi)bi(f)tur,(ixg_[uh:l]i) (,) di(ixi)cit(g_[oh:h]i_[oh:h]g_[oh:h]!hw!ivHG') Dó(f)mi(fg!hvGF'g)nus :(gf..) (:) in(f) e(gh)a(h) o(ixhg/higgf~)mnis,(f) qui(f) pe(hj)tit,(j) ác(jij)ci(h_[oh:h]i_[oh:h]h_[oh:h])pit :(h.) (;) et(hj~) qui(j) quae(j)rit,(ij) ín(h)ve(ixf!gwhg/hi)nit,(h.) (;) et(h) pul(j)sán(j_hjvIG'h)ti(f_g) a(fh)pe(g!jij)ri(h)é(f_[oh:h]g_[oh:h]f_[oh:h])tur.(f.) (::)",
      source: "Graduale Romanum (GregoBase #43)",
      blurb: {
        text: "Domus mea hears Christ call the temple a house of prayer, then invites everyone who asks, seeks, and knocks. At the dedication of the Lateran Basilica, the Communion gives that welcome a home in the Church's prayer.",
        source: "Matt. 21:13 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
  },
  "immaculate-conception": {
    gradual: {
      title: "Benedicta es tu",
      latin: "Benedícta es tu, Virgo María, a Dómino Deo excélso, prae ómnibus muliéribus super terram. ℣. Tu glória Jerúsalem, tu laetítia Israel, tu honorificéntia pópuli nostri.",
      translation: "Blessed are you, O Virgin Mary, by the Lord the most high God, above all women upon the earth. ℣. You are the glory of Jerusalem, you are the joy of Israel, you are the honor of our people.",
      mode: "Gradual · The Immaculate Conception of the Blessed Virgin Mary · Mode V",
      reference: "Judith 13:23",
      gabc: "(c4) BE(d)ne(ff)dí(f!hgh)cta(h) es(gg) tu,(gf..) *(,) Vir(f)go(h) Ma(ixi)rí(h_g)a,(g./hiHF.ghFD.ev.dec./[-0.5]fg/hggf.0) (;) a(j) Dó(jk)mi(j)no(jh) De(j)o(jk) ex(j)cél(ixjhi)so,(hgiHGkv.jkJ//F.0gh/jiih.0) (:) prae(j_h) ó(ixi!jwk)mni(jk_[hl:1]J'_[hl:1]IH'i)bus(h.) mu(ixi)li(h)é(gh!i'j)ri(ih)bus(h.) (;) su(j)per(ixhi) ter(g_[oh:h]f)ram.(fhg___//jkijh.fhg/hggf.0) (z0::c3) ℣. Tu(df) gló(hvvGFhvGEff//gxde!fgF'EfvEDe.)(,)(fh/ih/ih/ijh)ri(gh)a(h.) (,) Je(h)rú(ih/kkh/ih/kkvI'H)sa(h_ghvGF'g)lem,(gf..) (:) tu(hhi) lae(h)tí(h.i!jwk)ti(ih)a(h.) (,) Is(gxfgFE.fgFD.fvEDe[ll:1]d)ra(bd)el,(d.) (:) tu(de) ho(ef)no(hf/ge)ri(ef)fi(hih)cén(h)ti(gh)a(gxfhE'D//hf/gf..) (,) pó(d)pu(ef)li(f/h_fg) () * no(e.f!gwh)stri.(he) (,) (gxhfgED'//ef/!hf/!f/ded.) (::)",
      source: "Graduale Romanum (GregoBase #713)",
      blurb: {
        text: "Benedicta es tu begins with Judith 13:23, a blessing first spoken to Judith after Israel's deliverance. On the Immaculate Conception, its verse continues the praise by naming Mary the glory, joy, and honor of her people.",
        source: "Judith 13:23 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Sancti-12-08 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Tota pulchra es",
      latin: "Allelúia. ℣. Tota pulchra es, María : et mácula originális non est in te.",
      translation: "Alleluia. ℣. You are all fair, O Mary: and the stain of original sin is not in you.",
      mode: "Alleluia · The Immaculate Conception of the Blessed Virgin Mary · Mode I",
      reference: "Cant. 4:7",
      gabc: "(c4) AL(d!ff/gf)le(e[ll:1]d)lú(ixfgh!ivHG'gf/gh~){ia}.(h.) (,) * ij.(def!gvFE'/!e[ll:1]d.0) (;) (de!fg!hv'1//jg/!gf/!gh/!h//def!gvFE'/!e[ll:1]d.0) (,) (hvGF'ghh//def!gvFE'/!e[ll:1]d.0) (::) ℣. To(d!ew!fv_ED'Cde)ta(d.) pul(fgh)chra(ixhiGF'gwhg/hi) es,(h.) (:) Ma(ffvEDfg/hfgvFE)rí(d!ewfef)a :(e[ll:1]d..) (:) et(hg~) má(gj)cu(i)la(jkJH.1) (,) o(hg)ri(hjIG.egff'ffvD'C)gi(dfd)ná(egE'DfvDCde)lis(e./ghdfvED.) *(;) non(d!ff/gf) est(e[ll:1]d) in(ixfgh!ivHG'gf/gh~) te.(h.//def!gvFE'/!e[ll:1]d.0) (;) (de!fg!hv'1//jg/!gf/!gh/!h//def!gvFE'/!e[ll:1]d.0) (,) (hvGF'ghh//def!gvFE'/!e[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #1057)",
      blurb: {
        text: "Canticle of Canticles 4:7 underlies this chant, but two deliberate changes shape it for the feast. Where the Vulgate reads \"amica mea\" (my love), the chant substitutes \"María\" directly. It also inserts \"originális,\" so the Canticle's unspecific spot becomes the stain of original sin, pointing the verse precisely at the doctrine the feast celebrates.",
        source: "Cant. 4:7 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Ave Maria",
      latin: "Ave María, grátia plena : Dóminus tecum : benedícta tu in muliéribus, allelúia.",
      translation: "Hail Mary, full of grace: the Lord is with you: blessed are you among women, alleluia.",
      mode: "Offertory · The Immaculate Conception of the Blessed Virgin Mary · Mode VIII",
      reference: "Luke 1:28",
      gabc: "(c3) A(gxdef!hvvFE'//gvFE)ve(e_[uh:l]f) *(,) Ma(fdf)rí(h_g//ijIH'hg/hf)a,(fe..) (;) grá(hhf!gwhefvED'C[ull:0]B.)(,)(ef/h.f!gwh)ti(h)a(g.) ple(hiHF.g/hiH//E.)(,)(fhFEf./ih/ijh)na :(hiih.0) (:) Dó(fvEDevDC'db.0/cd!effe)mi(de)nus(e.) (`) te(fe/hhe//ffdev.)(,)(de/f_de./df!hvGFE'f)cum :(fe..) (:) be(hi)ne(ih)dí(h'/jij)cta(h.f!gwh/ih) tu(he..) (,) in(ef) mu(fh)li(fe)é(e_[oh:h][ll:1]d/efD'C[ull:0]B.)(,)(cd/e_[oh:h][ll:1]d/f_e)ri(de)bus,(effe.) (;) al(fe~)le(fdf)lú(h_g/ijIH'hg/hf){ia}.(fe/fgffe.) (::)",
      source: "Graduale Romanum (GregoBase #210)",
      blurb: {
        text: "Ave Maria draws its entire text from Luke 1:28, the angel Gabriel's greeting to Mary at the Annunciation, quoted in full. The following verses, in which Mary is troubled and the angel reassures her, are left aside; only the salutation itself is sung. The alleluia at the close is not in the Gospel verse but is added by the liturgy.",
        source: "Luke 1:28 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Gloriosa dicta sunt",
      latin: "Gloriósa dicta sunt de te, María : quia fecit tibi magna qui potens est.",
      translation: "Glorious things are said of you, O Mary: for he that is mighty has done great things for you.",
      mode: "Communion · The Immaculate Conception of the Blessed Virgin Mary · Mode VIII",
      reference: "Ps. 87:3; Luke 1:49",
      gabc: "(c4) GLo(gg)ri(gh)ó(hvGF//g.h!iwjg)sa(g.) *(,) di(g!jj)cta(j) sunt(kij) de(h) te,(hvGF') Ma(h)rí(hjI'G)a :(g.) (:) qui(g)a(hih) fe(g)cit(e) ti(ffg)bi(gvFED.) () () ma(f/gh/jg)gna(g.) (,) qui(f) pot(ghg/h!jjh)ens(hig) est.(g.) (::)",
      source: "Graduale Romanum (GregoBase #1004)",
      blurb: {
        text: "Psalm 87:3 calls Sion the city of God, where glorious things are said. The Immaculate Conception Communion joins that praise to Mary's words in Luke 1:49, where she says that the Mighty One has done great things for her.",
        source: "Ps. 87:3; Luke 1:49 (Vulgate numbering Ps. 86:3; Luke 1:49) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Sancti-12-08 (Missale Romanum formulary)",
      },
    },
  },

  /* ===================================================================
   * Ordinary Time Sundays 2-11 (the early green Sundays). Sourced the
   * same way as 12-33: gregorien.info assignments + GregoBase gabc.
   * See sources/gregobase/ot-propers-worklist.md.
   * =================================================================== */
  /* ---- 2nd Sunday in Ordinary Time ---- */
  "ot-2": {
    gradual: {
      title: "Misit Dominus verbum",
      latin: "Misit Dóminus verbum suum, et sanávit eos : et erípuit eos de intéritu eórum. ℣. Confiteántur Dómino misericórdiae ejus : et mirabília ejus fíliis hóminum.",
      translation: "The Lord sent his word, and healed them: and delivered them out of their destructions. ℣. Let them confess to the Lord his mercies, and his wonderful works to the children of men.",
      mode: "Gradual · Ordinary Time · Mode V",
      reference: "Ps. 107:20-21",
      gabc: "(c3) MI(dd)sit(ef~) Dó(f_devDC[ull:0]B.e_[oh:h]c/de)mi(d)nus(d.) *(;) ver(fd/ef!hh/ihi)bum(hgh) su(f_e/f!hhvFD.1fvEDe[ll:1]d)um,(d.) (:) et(fe~) sa(eh)ná(h)vit(gxhfgED.) (`) e(fdfED//fd/ef!hh/ig/hf/hi!kkk_[hl:1]h)os :(h.) (:) et(f) e(h)rí(hi)pu(h)it(hh) e(hh//hhjvIG'hvF'Ef!hhivHG)os(h.) (;) de(h) in(h)tér(h)i(h_g)tu(e) e(f)ó(hiH'F)rum.(de//fiH'GE.) (,) (gxfhF'E//fgED.) (::) ℣. Con(d)fi(d)te(f)án(hf/hhf/hhf/hhh)(,)(f!hhf/hhf/hhh//ih/!hf/hhf/hhh)tur(h.) (,) Dó(h)mi(h)no(ih//h'hh_f//hhf/hhe//gxfgED./[-0.5]hhjvIH.) (:) mi(d)se(d)ri(fe)cór(eh)di(h)ae(ih) (,) (hhh'/ihhg./[-0.5]i/jiih.0/[-0.5]j/kjjh.0/[-0.5]i/jiig./h/ihh//fh//ghFE'e[ll:1]d.0) (;) e(fdfED//f_d/ef!gwh'!iv)jus :(hg/ijIH.ghGF.) (:) et(f) mi(hfh)ra(h)bí(i)li(hi)a(hh) (,) e(hh//hhjvIG'hvF'Ef!hhivHG)jus(h.) (;) fí(hh)li(hih)is(h_f) *() hó(fh!ij)mi(hg)num.(hhhf/hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #932)",
      blurb: {
        text: "Psalm 107 verse 20 reads simply \"Misit verbum suum\" in the Vulgate, but the Gradual opens \"Misit Dóminus verbum suum,\" inserting \"Dóminus\" so that the subject is named from the first word rather than left to context. The two verses quoted, 20 and 21, sit just after the psalm's image of sufferers who drew nigh even to the gates of death and cried out, so the healing they describe is an answer to that cry. The verse immediately following the Gradual's quotation, verse 22, calls for the sacrifice of praise, which the singing of the Gradual itself enacts.",
        source: "Ps. 107:20-21 (Vulgate numbering Ps. 106:20-21) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Laudate Deum omnes Angeli",
      latin: "Allelúia. ℣. Laudáte Deum omnes Angeli ejus : laudáte eum omnes virtútes ejus.",
      translation: "Alleluia. ℣. Praise God, all you his Angels: praise him, all his hosts.",
      mode: "Alleluia · Ordinary Time · Mode IV",
      reference: "Ps. 148:2",
      gabc: "(c4) AL(fd~)le(ef'g)lú(hgh){ia}.(ixhiHG'gf.0) *(,) ij.(ixhiHG'ge./ghGF'Ef_gffe.) (::) ℣. Lau(h)dá(h)te(g) De(ghG'E)um(fgfg.) (;) o(g)mnes(gh) An(h_g~)ge(ghg'/hf)li(e[ll:1]d) e(egF'~D~)jus :(d.) (:) lau(dc~)dá(f)te(ghg) e(ixhiG'Eg./hiF'D//fffdgvFE.)(,)(df/h_f/g_[oh:h]efv.df!gvFE'f)um(fe..) (;) o(fd~)mnes(f) vir(f)tú(ef/g_[oh:h]efv.df!gvFE'f)tes(fe..) *(;) e(fd/ef!g'h)jus.(ixhiHG'gf.0) (,) (ixhiHG'ge./ghGF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #538)",
      blurb: {
        text: "Laudate Deum omnes Angeli draws from Psalm 148:2 alone, lifting it out of a psalm that calls all creation to praise in succession: sun, moon, stars, the heavens of heavens, fire, hail, mountains, beasts, and kings. The chant narrows that vast chorus to a single address, directing praise specifically to God's angels and his hosts before the Alleluia closes.",
        source: "Ps. 148:2 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Jubilate Deo universa terra",
      latin: "Jubiláte Deo univérsa terra : jubiláte Deo univérsa terra : psalmum dícite nómini ejus : veníte, et audíte, et narrábo vobis, omnes qui timétis Deum, quanta fecit Dóminus ánimae meae, allelúia.",
      translation: "Shout with joy to God, all the earth: shout with joy to God, all the earth: sing a psalm to his name: come and hear, and I will tell you, all you that fear God, what great things the Lord has done for my soul, alleluia.",
      mode: "Offertory · Ordinary Time · Mode I",
      reference: "Ps. 66:1-2, 16",
      gabc: "(c4)IU(c)bi(d)lá(ixdh'iv)te(h) *() De(hjh)o(ghggf.) (;) u(ghg)ni(hg)vér(hv.g!jjj)sa(fg) ter(ixfhjvHGig/hi)ra:(h.) (:) iu(h)bi(h)lá(jhjGF'fvD'C,ddc/dd/cdff!g!hhg/hh,fghhh//ghjjj//ij/kkj,lk/lmKJ'jvIH'k)te(kjjvIH) De(hjh)o(ghggf.) (;) u(ghg)ni(hg)vér(hv.g!jjj)sa(fg) ter(fhjvHGig/h/jjh,jjvH'Ghiw!j_i)ra:(jjjvIH'jggf.) (:) psal(fh)mum(hg~) dí(h_g/jjj)ci(h_g)te(ghGF.) (,) nó(fg//h_f/g_h_g_///jkj)mi(jjji)ni(hg) e(gv.fhhg/hv.gh/jjjh~)ius:(hhgh.) (:) ve(jk)ní(klkl)te,(j_h) (,) et(h_g) au(gh)dí(hj/kjk)te,(k_h_) (,) et(jk!lkl) nar(j_h)rá(hj)bo(jjj) vo(hhg)bis,(g_fg.) (;) om(fg/h_f/g_h_g_///jkjj'j)nes(hjG'Fg.) (,) qui(f) ti(ghg)mé(h_fg)tis(fgd) De(f_h_g_)um,(g.) (:) quan(hj)ta(jji) fe(jvIH)cit(h_g) Dó(g_e)mi(fgffg)nus(g.d.) (;) á(df/gfgff'ffd/g_ef.,hjg)ni(fdf)mæ(f) me(fff/gvFD)æ,(d.) (:) al(fg~)le(e_d/fh///ghg/e!fg//hf/gvFE)lú(dew!fef)ia.(e.d.) (::)",
      source: "Graduale Romanum (GregoBase #7575)",
      blurb: {
        text: "Jubilate Deo universa terra draws from Psalm 66, but skips from verse 2 to verse 16, passing over thirteen verses that include the psalmist's vows, sacrifices, and reflection on God's might. The antiphon also repeats the opening cry, \"Jubilate Deo universa terra,\" a second time before moving to verse 2, where it then drops the psalm's own closing phrase, \"date gloriam laudi ejus\" (give glory to his praise), moving instead straight to the personal invitation of verse 16: come and hear what great things the Lord has done for my soul.",
        source: "Ps. 66:1-2, 16 (Vulgate numbering Ps. 65:1-2, 16) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Laetabimur in salutari",
      latin: "Laetábimur in salutári tuo : et in nómine Dómini Dei nostri magnificábimur.",
      translation: "We will rejoice in your salvation: and in the name of the Lord our God we shall be magnified.",
      mode: "Communion · Ordinary Time · Mode II",
      reference: "Ps. 20:6",
      gabc: "(f3) LAe(f)tá(fefvEDefef)bi(g)mur(f!gwh.) *(,) in(hf~) sa(hih)lu(iji)tá(jlKJ')ri(i) tu(hg/hihi)o :(f!gwh.) (;) et(f) in(h) nó(ij)mi(i)ne(i) Dó(j)mi(ih)ni(hihh/fgf.) (,) De(hhg)i(hi/jij) no(h)stri(hv.fgFE.) (,) ma(e)gni(hg)fi(hi)cá(iv.giHG'F//e_[uh:l]f)bi(e.[ll:1]d!ewfe/fg)mur.(f.) (::)",
      source: "Graduale Romanum (GregoBase #1296)",
      blurb: {
        text: "Psalm 20:6 answers God's salvation with rejoicing and with the exaltation of God's name. The Communion gives that plural voice to the assembly, which praises the Lord for salvation.",
        source: "Ps. 20:6 (Vulgate numbering Ps. 19:6) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "ot-2-b": {
    communion: {
      title: "Dicit Andreas",
      latin: "Dicit Andréas Simóni fratri suo : Invénimus Messíam, qui dícitur Christus : et addúxit eum ad Jesum.",
      translation: "Andrew said to his brother Simon: We have found the Messiah, who is called Christ: and he brought him to Jesus.",
      mode: "Communion · Ordinary Time (Year B) · Mode VIII",
      reference: "John 1:41-42",
      gabc: "(c3) DI(hh)cit(h) An(hi~)dré(i)as(hgh.) *(,) Si(h)mó(hg)ni(ge) fra(g)tri(hih) su(h.f!gw!hvG'FE'f)o :(fe..) (:) In(h)vé(ik)ni(j)mus(ijg) Mes(h)sí(ihi)am,(ie..) (;) qui(f) dí(h_g)ci(hi'j)tur(ij~) Chri(hiH'G)stus :(g.) (:) et(g) ad(h)dú(ij)xit(i) e(h_f)um(f_e) ad(ef) Je(e)sum.(dv[ll:1]/C'B//ece.) (::)",
      source: "Graduale Romanum (GregoBase #1021)",
      blurb: {
        text: "Dicit Andreas tells Simon that they have found the Messiah and brings him to Jesus. The Communion makes Andrew's discovery a simple invitation to encounter Christ.",
        source: "John 1:41-42 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "ot-2-c": {
    communion: {
      title: "Dicit Dominus: Implete hydrias",
      latin: "Dicit Dóminus : Impléte hýdrias aqua, et ferte architriclíno. Cum gustásset architriclínus aquam vinum factam, dicit sponso : Servásti vinum bonum usque adhuc. Hoc signum fecit Jesus primum coram discípulis suis.",
      translation: "The Lord said: Fill the water-pots with water, and carry to the chief steward. When the chief steward had tasted the water made wine, he said to the bridegroom: You have kept the good wine until now. This first miracle Jesus did in the presence of his disciples.",
      mode: "Communion · Ordinary Time (Year C) · Mode VI",
      reference: "John 2:7, 8, 9, 10-11",
      gabc: "(c4) DI(fh)cit(h) Dó(ixhiHG')mi(hggfg)nus :(fg..) *(;) ~Im(df~)plé(f)te(df) hý(f)dri(fff)as(df) a(ff/g_[oh:h]f)qua(f.) (;) et(f) fer(gh~)te(h) ar(hg~)chi(h)tri(h!iwj)clí(ghGF'g)no.(gf..) (:) Cum(f) gu(ghg)stás(h!jij)set(ixhhi) ar(gh~)chi(f)tri(ghgh)clí(ghGF'g)nus(gf..) (;) a(h)quam(ghg) vi(hg)num(fg) fa(ghg___)ctam,(g.) (;) di(ixii//g!i'j)cit(ih~) spon(fgf~)so :(f.) (:) Ser(hg~)vá(jlk)sti(j) vi(jlk)num(j) bo(i.h!iwj)num(h_g) (,) us(gh!jlk)que(j) ad(hj)huc.(jg..) (:) Hoc(j) si(j)gnum(i) fe(h)cit(g) Je(g)sus(fh) pri(fg)mum(g.) (,) co(h)ram(i) di(j)scí(i_[oh:h]h)pu(gf)lis(gh) su(f.)is.(f.) (::)",
      source: "Graduale Romanum (GregoBase #230)",
      blurb: {
        text: "Dicit Dominus: Implete hydrias recounts the command to fill the water jars and the steward's surprise at wine kept until now. At Cana, the Communion receives Christ's first sign as a revelation of his glory before his disciples.",
        source: "John 2:7, 8, 9, 10-11 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  /* ---- 3rd Sunday in Ordinary Time ---- */
  "ot-3": {
    gradual: {
      title: "Timebunt gentes",
      latin: "Timébunt gentes nomen tuum, Dómine, et omnes reges terrae glóriam tuam. ℣. Quóniam aedificávit Dóminus Sion, et vidébitur in majestáte sua.",
      translation: "The Gentiles shall fear your name, O Lord, and all the kings of the earth your glory. ℣. For the Lord has built up Sion: and he shall be seen in his majesty.",
      mode: "Gradual · Ordinary Time · Mode V",
      reference: "Ps. 102:16-17",
      gabc: "(c4) TI(d)mé(ff)bunt(gh~) gen(h_fgvFED.g_[oh:h]e/fg)tes(f.) (;) * no(hf/gh!jj/kjk)men(jij) tu(h_g/h/jjvH'GF)um,(h_g~) Dó(f)mi(fg!hvGF'g)ne,(gf..) (:) et(f) o(ghgh)mnes(jhhg) re(h!iwj)ges(j_i) (`) ter(jkJ'IH)rae(hjH'GhjjhjvvIH'jggf.0) (;) gló(fg'h!fg'h)ri(gf)am(fv.ef!gvgf.0) (,) tu(f!hhh//gh!jjjhjvvIH'jg./f.0h!iw!jvIH'GF'f//hvGFgf)am.(f.) (z0::c3) ℣. Quó(d)ni(d)am(d) ae(d)di(d)fi(fe)cá(eh)vit(h.) (,) Dó(h)mi(h)nus(ihh'hh_f//hhf/hhegxfgE0/[-0.5]{/[0.5]gy}D0.0/[-0.5]hhjvIH'//hvGF.) (;) Si(hi)on,(i_[oh:h]h/i/kkhi_[oh:h]h/kkkvIH'//hvGF.) (:) et(f) vi(hf)dé(h)bi(hfh)tur(hhhvF'Ef!hhhf/hhhvGF'hee[ll:1]d.0) (;) in(d) ma(d)je(d)stá(dfE'D)te(ef) *() su(fhG'Fhhh)a.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #1173)",
      blurb: {
        text: "Timebunt gentes takes Psalm 102's vision of nations fearing the Lord's name and earthly kings his glory. Its verse names the Lord's building of Sion and his appearing in glory, holding both declarations together.",
        source: "Ps. 102:16-17 (Vulgate numbering Ps. 101:16-17) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Epi3-0.txt [Officium heading]; Divinum Officium, Epi3-0 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Dominus regnavit exsultet",
      latin: "Allelúia. ℣. Dóminus regnávit, exsúltet terra : laeténtur ínsulae multae.",
      translation: "Alleluia. ℣. The Lord has reigned, let the earth rejoice: let many islands be glad.",
      mode: "Alleluia · Ordinary Time · Mode VIII",
      reference: "Ps. 97:1",
      gabc: "(c3) AL(def)le(f_e/f!gwhg)lú(fhh'1h){ia}.(hiHF'fe.) *(;) ij.(gh//efED.f!gwhhgehf/gffe.) (::) ℣. Dó(hv.gih)mi(h)nus(h) re(hg)gná(gh!ivvHFhf/gh)vit,(g.) (;) ex(gf)súl(hji)tet(hv.ghfgF'E) ter(hvvGE.gxfgFD.egF'Efe)ra :(e.) (:) lae(e)tén(fehhhfh'GE//fhF'DgxgvFEf.0/[-0.5]hhh/ijHF.1)(,)(g_[oh:h]i_[oh:h]g_[oh:h]ivHG'he.gxf_e/g_[oh:h]e//gvFEfd)tur(d.) (;) ín(fd)su(ef)lae(f) *() mul(hg/hfh)tae.(ghFE.) (,) (df!hvF'E//d.0f!gwhghvGFg.//egf'gvE'Defe.) (,) (gxhhvF'EfgED.gyhhvF'E/!f_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1001)",
      blurb: {
        text: "Dominus regnavit exsultet draws from the opening line of Psalm 97. The psalm's heading in the Douay-Rheims ties it to David \"when his land was restored again to him,\" yet the psalm's own argument reads it as prophecy of Christ's coming reign and judgment. The Alleluia takes only that single opening line; the psalm moves immediately into sterner territory, with verse 2 reading \"Clouds and darkness are round about him: justice and judgment are the establishment of his throne,\" and verse 3 describing fire consuming enemies. The chant stops before any of that imagery begins.",
        source: "Ps. 97:1 (Vulgate numbering Ps. 96:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Dextera Domini",
      latin: "Déxtera Dómini fecit virtútem, déxtera Dómini exaltávit me : non móriar, sed vivam, et narrábo ópera Dómini.",
      translation: "The right hand of the Lord has wrought strength, the right hand of the Lord has exalted me: I shall not die, but live, and shall declare the works of the Lord.",
      mode: "Offertory · Ordinary Time · Mode II",
      reference: "Ps. 118:16, 17",
      gabc: "(c4) DEx(e!g'h)te(hiH'G)ra(g.ggg/hihi) Dó(gh)mi(efED'e)ni(e[ll:1]d..) *(;) fe(de/ghg___)cit(h.) vir(hi!kki/j_k)tú(hv.gih)tem,(h.) (:) déx(jj)te(j_i)ra(jjj_h) Dó(hjjh)mi(h)ni(h.) (,) ex(g)al(h)tá(hjj'1jjh/kjjh)vit(hiH'~G~) me :(hg..) (:) non(h!iwj') mó(j)ri(jvIH)ar,(h.) (,) sed(g!jjj) vi(hig)vam,(e!geg.) (;) et(d) nar(e)rá(g)bo(e) ó(ghg___)pe(h)ra(h./jkj'kvJ'IH) Dó(h)mi(h)ni.(h!iwjjvIHiih.0) (::)",
      source: "Graduale Romanum (GregoBase #47)",
      blurb: {
        text: "Psalm 118 repeats that the Lord's right hand has wrought strength and has exalted the speaker. The Offertory adds the declaration that the singer will live and tell the Lord's works.",
        source: "Ps. 118:16, 17 (Vulgate numbering Ps. 117:16, 17) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Epi3-0.txt [Officium heading]; Divinum Officium, Epi3-0 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Venite post me",
      latin: "Veníte post me : fáciam vos piscatóres hóminum : at illi, relíctis rétibus et navi, secúti sunt Dóminum.",
      translation: "Come after me: I will make you fishers of men: but they, leaving their nets and their ship, followed the Lord.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode VIII",
      reference: "Matt. 4:19-20",
      gabc: "(c4) VE(g)ní(g)te(d) post(gV!eg~) me :(g.) *(,) fá(g!jij)ci(hg)am(g) vos(ggd.) (,) pi(d)sca(e)tó(gg)res(gih/i_[oh:h]h) hó(g)mi(gh!ivHG'h)num :(hg..) (:) at(j) il(jV!hj~)li,(j) re(j)lí(j)ctis(jh~) ré(ij)ti(hiHG'h)bus(hg..) (,) et(ge~) na(g//h'i/hig)vi,(g.) (;) se(g)cú(g)ti(h) sunt(gee[ll:1]d/geg) Dó(g)mi(ghg___)num.(g.) (::)",
      source: "Graduale Romanum (GregoBase #552)",
      blurb: {
        text: "Venite post me draws its words from Matthew 4:19-20, but it quietly adjusts them. The Vulgate's verse 20 reads \"relictis retibus secuti sunt eum,\" meaning they left their nets and followed him; the antiphon adds \"et navi\" (and ship) and replaces \"eum\" with \"Dominum,\" so that the disciples leave nets and ship and follow the Lord.",
        source: "Matt. 4:19-20 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Sancti-11-30 (Missale Romanum formulary)",
      },
    },
  },
  "ot-3-c": {
    communion: {
      title: "Comedite pinguia",
      latin: "Comédite pínguia, et bíbite mulsum, et míttite partes eis qui non praeparavérunt sibi : sanctus enim dies Dómini est, nolíte contristári : gáudium étenim Dómini est fortitúdo nostra.",
      translation: "Eat the fat, and drink the sweet, and send portions to them that have not prepared for themselves: for it is the holy day of the Lord, be not sad: for the joy of the Lord is our strength.",
      mode: "Communion · Ordinary Time (Year C) · Mode VIII",
      reference: "Neh. 8:10",
      gabc: "(c4) COm(d)é(fhg)di(g)te(g) *() pín(hgh)gui(gf)a,(f.) (,) et(f) bí(g_[uh:l]h)bi(h)te(ixjhi) mul(ixig/hf)sum,(f.) (;) et(fd~) mít(f)ti(g)te(h) par(h)tes(g.) (,) e(h)is(g) qui(f) non(fe~) prae(f)pa(e)ra(g)vé(gh)runt(gh~) si(fgF'E)bi :(e.) (:) san(h)ctus(g) e(h)nim(g) di(h)es(g) Dó(h)mi(g)ni(fg) est,(gd..) (;) no(d)lí(f)te(e) con(g_[uh:l]h)tri(fe)stá(d.)ri :(d.) (:) gáu(g)di(fg)um(g) ét(h)e(g)nim(f) Dó(gh)mi(h)ni(gh) est(h.) (,) for(h)ti(g)tú(hiG'Egv.hig)do(g) no(ghg___)stra.(g.) (::)",
      source: "Graduale Romanum (GregoBase #496)",
      blurb: {
        text: "Comedite pinguia joins the holy day's table with a command to send portions to those who have none prepared. The Communion lets the joy of the Lord become shared strength, echoing the call to rejoice rather than grieve.",
        source: "Neh. 8:10 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  /* ---- 4th Sunday in Ordinary Time ---- */
  "ot-4": {
    gradual: {
      title: "Quis sicut Dominus",
      latin: "Quis sicut Dóminus Deus noster, qui in altis hábitat : humília réspicit in caelo et in terra? ℣. Súscitans a terra ínopem, et de stércore érigens páuperem.",
      translation: "Who is as the Lord our God, who dwells on high: and looks down on the low things in heaven and in earth? ℣. Raising up the needy from the earth, and lifting up the poor out of the dunghill.",
      mode: "Gradual · Ordinary Time · Mode V",
      reference: "Ps. 113:5-7",
      gabc: "(c4) QUis(d) sic(ff)ut(gh~) Dó(h_fgvFED.g_[oh:h]e/fg)mi(f)nus(f.) *(;) De(fg'h)us(hg/h_g) no(fg!hvGF'g)ster,(gf..) (;) qui(f) in(hj) al(j)tis(h) há(jk)bi(j.i!jwkjk)tat :(kj..) (:) hu(h)mí(h)li(ixgiH'Ghf)a(f.) ré(h_g)spi(h)cit(f.) (`) in(hj~) cae(j)lo(ij) (,) et(h) in(fg~) ter(f)ra?(gffgD0'/[-0.5]{ix}C0hv.giHF.1) (,) (fhg___jv.jjjhh//fhg/hggf.0) (z0::c3) ℣. Sús(h)ci(hi)tans(ihhf/hiHG.hiFD.1) (,) (f/hhi/hhf/hiHG.hiFD.1) (,) (gxfg//e!g'h/ghghvFD.1) (,) (fdfED//fd/ef!hh/ig/hf/hi!kkkh..) (;) a(hi/j.i!jwk) ter(ikH'Gh)ra(f.) ín(fh)o(hef)pem,(d.) (:) et(d) de(fe) stér(eh)co(h)re(h_[oh:h]i_[oh:h]h_2[oh:h]//i_[oh:h]hjvIH'Ghf..) (;) é(de'f)ri(f)gens(f) *() páu(fhGF')pe(i)rem.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhf.0/dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #472)",
      blurb: {
        text: "Quis sicut Dominus asks who is like the Lord, high above all yet attentive to what is low in heaven and on earth. Psalm 113 answers by raising the needy and the poor, then setting them among the princes of the people.",
        source: "Ps. 113:5-7 (Vulgate numbering Ps. 112:5-7) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Adorabo ad templum",
      latin: "Allelúia. ℣. Adorábo ad templum sanctum tuum : et confitébor nómini tuo.",
      translation: "Alleluia. ℣. I will worship toward your holy temple: and I will give glory to your name.",
      mode: "Alleluia · Ordinary Time · Mode VII",
      reference: "Ps. 138:2",
      gabc: "(c3) AL(e)le(fde)lú(hf/hhi){ia}.(ijhh'he.) *(,) ij.(hig'hvFD.1//fhg/ihh'hhvF'Ef_gffe.) (::) ℣. Ad(e)o(hh)rá(iv.hif.1/[-0.5]efd.1/f!gwhhvG'FEf_e)bo(e.) (;) ad(ef~) tem(ef~)plum(e) san(df!hh/jij)ctum(i_[oh:h]h) tu(fhff/d/ef_d)um :(d.) (:) et(d) con(e)fi(f)té(h_i!kkh/ii//hhhf/hhe/ffdev.)(,)(defh_i!kkh/ii//hhhf/hhe/ffdev.)(,)(de/ffdev.f!gwhhvG'FEf_e)bor(e.) (;) * nó(ef)mi(e)ni(e.f!gwh) tu(h_f/g!hwihi)o.(i_[oh:h]g/h!iwjij//ijIG.) (,) (hig'hvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #242)",
      blurb: {
        text: "Adorabo ad templum draws its words from the second verse of Psalm 138, but sings only part of that verse. What the chant omits, the fuller verse supplies: \"For thy mercy, and for thy truth: for thou hast magnified thy holy name above all.\" The chant carries the act of worship and the vow of praise, while the reason given for that praise, God's mercy, truth, and the greatness of his name, remains unsung.",
        source: "Ps. 138:2 (Vulgate numbering Ps. 137:2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Bonum est confiteri",
      latin: "Bonum est confitéri Dómino, et psállere nómini tuo, Altíssime.",
      translation: "It is good to give praise to the Lord, and to sing to your name, O Most High.",
      mode: "Offertory · Ordinary Time · Mode VIII",
      reference: "Ps. 92:2",
      gabc: "(c4) BO(ff)num(fhg) est(g_[oh:h]d) *(,) con(dg)fi(h)té(h!jjjvH'G)ri(g.f!gw!hvGF'g) Dó(g)mi(gh/jhi)no,(hg..) (:) et(fg) psál(gjj'1jj/kl)le(j_i)re(jjjhhg.) (,) nó(g!jjj)mi(jk_[hl:1]J'_[hl:1]IH'i)ni(h) tu(gh!jvIH'i)o,(ih..) (;) Al(f!h'j~)tís(j)si(j)me.(jijvHF'gwhghj/kjjh//jjh/jjvH'Gh_ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #1194)",
      blurb: {
        text: "Psalm 92 calls it good to give praise to the Lord and to sing to the Most High. Its next verse names mercy in the morning and truth through the night, opening the day with praise.",
        source: "Ps. 92:2 (Vulgate numbering Ps. 91:2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Illumina faciem tuam",
      latin: "Illúmina fáciem tuam super servum tuum, et salvum me fac in tua misericórdia : Dómine, non confúndar, quóniam invocávi te.",
      translation: "Make your face to shine upon your servant, and save me in your mercy: Lord, let me not be confounded, for I have called upon you.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode I",
      reference: "Ps. 31:17-18",
      gabc: "(c4) IL(df~)lú(fef)mi(dc)na(c.) (,) * fá(fg)ci(f)em(df~) tu(f)am(f.) (;) su(d)per(d) ser(d)vum(c) tu(dfE'D)um,(d.) (:) et(d) sal(fg)vum(gh) me(efd) fac(d.) (,) in(fh~) tu(h_g/jjh)a(h) mi(ixhih)se(g)ri(g_[oh:h]e)cór(gh~)di(fg!hvGF'g)a :(gf..) (:) Dó(ixhih)mi(g)ne,(ge) non(g) con(g)fún(fef)dar,(dfEC.) (;) quó(ffg)ni(f)am(f) in(fg)vo(efE'C)cá(de!fvED)vi(d_[oh:h]e_[oh:h]d_[oh:h]) te.(d.) (::)",
      source: "Graduale Romanum (GregoBase #640)",
      blurb: {
        text: "Psalm 31 supplies both verses of this Communion, though the second is cut short. Verse 18 continues beyond the chant's closing words, adding a curse on the wicked, \"let the wicked be ashamed, and be brought down to hell,\" but the antiphon stops before that turn, leaving only the personal petition. The Gospel sung earlier at this Mass is the parable of the workers in the vineyard, from Matthew 20.",
        source: "Ps. 31:17-18 (Vulgate numbering Ps. 30:17-18) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Quadp1-0 (Missale Romanum formulary)",
      },
    },
  },
  "ot-4-a": {
    communion: {
      title: "Beati mundo corde",
      latin: "Beáti mundo corde, quóniam ipsi Deum vidébunt : beáti pacífici, quóniam fílii Dei vocabúntur : beáti qui persecutiónem patiúntur propter justítiam, quóniam ipsórum est regnum caelórum.",
      translation: "Blessed are the clean of heart, for they shall see God: blessed are the peacemakers, for they shall be called children of God: blessed are they that suffer persecution for justice' sake, for theirs is the kingdom of heaven.",
      mode: "Communion · Ordinary Time (Year A) · Mode I",
      reference: "Matt. 5:8-10",
      gabc: "(c4) BE(h)á(h)ti(hg) mun(hj)do(ji) cor(hi)de,(h.) (;) * quó(h)ni(g)am(hvGE) i(fgh)psi(g.) (,) De(hvGF')um(g) vi(f_e)dé(de!fvED'e)bunt :(e[ll:1]d..) (:) be(df)á(fef)ti(d!ewf) pa(fd)cí(fh)fi(gf)ci,(fg!hvhg.) (;) quó(gh)ni(gf)am(f) fí(gh)li(h)i(h) De(j)i(h) vo(h)ca(h_g)bún(fg!hvG~F~)tur :(gf..) (:) be(f!hj)á(jkl)ti(k_[hl:1]j) (,) qui(j') per(j)se(h')cu(j)ti(g')ó(h)nem(g') pa(h)ti(g')ún(h)tur(j.h!iwji.) (,) pro(g)pter(hggf) ju(gh)stí(f)ti(fg!hvGF'g)am,(gf..) (:) quó(h)ni(g)am(hgh) i(f)psó(gfg)rum(fe) est(dfddc.) (,) re(f.egwhgh)gnum(gh) cae(f_e)ló(de!fvED'e)rum.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #345)",
      blurb: {
        text: "Beati mundo corde draws three beatitudes from Matthew 5, beginning at verse 8 and stopping at verse 10. The five beatitudes before verse 8 are passed over, and so are verses 11 and 12, in which Christ turns to address his disciples directly: \"Blessed are ye when they shall revile you, and persecute you\" and \"Be glad and rejoice for your reward is very great in heaven.\" What remains speaks entirely in the third person, of those who are pure, peaceful, and persecuted, without the personal address that closes the series.",
        source: "Matt. 5:8-10 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  /* ---- 5th Sunday in Ordinary Time ---- */
  "ot-5": {
    alleluia: {
      title: "Laudate Dominum omnes gentes",
      latin: "Allelúia. ℣. Laudáte Dóminum omnes gentes, et collaudáte eum omnes pópuli.",
      translation: "Alleluia. ℣. Praise the Lord, all you nations: and praise him together, all you peoples.",
      mode: "Alleluia · Ordinary Time · Mode II",
      reference: "Ps. 117:1",
      gabc: "(f3) AL(c)le(ef//efef)lú(efghffe~)ia.(ef..) *(,) (fg!hi//giHGF'//e/hhvGFggf.) ℣.(::) Lau(c)dá(ef)te(f) Dó(f)mi(f)num(fhfgvFE.) (;) om(h)nes(gh/ihhg) gen(fgw!hgh)tes,(gf..) (:) et(f) col(f)lau(fi~)dá(i)te(hg) e(hvGFg)um(gf..) (;) om-(fgffe~)nes(ghgg) pó(f)pu(fgf)li.(f.) (,) (fg!hi_//giHGF'//e/hhhvGFggf.) (::)",
      source: "Graduale Romanum (GregoBase #8297)",
      blurb: {
        text: "Laudate Dominum omnes gentes sings the first verse of Psalm 117, a summons to every nation and people to praise the Lord. The psalm has only two verses, and the Alleluia leaves the second one unsung, where the grounds for that praise are named as God's steadfast mercy and his truth that remains for ever.",
        source: "Ps. 117:1 (Vulgate numbering Ps. 116:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Perfice gressus meos",
      latin: "Pérfice gressus meos in sémitis tuis, ut non moveántur vestígia mea : inclína aurem tuam, et exáudi verba mea : mirífica misericórdias tuas, qui salvos facis sperántes in te, Dómine.",
      translation: "Perfect my goings in your paths, that my footsteps be not moved: incline your ear, and hear my words: show forth your wonderful mercies, you who save them that trust in you, O Lord.",
      mode: "Offertory · Ordinary Time · Mode IV",
      reference: "Ps. 17:5, 6-7",
      gabc: "(c4) PEr(c)fi(dfe)ce(f.) *() gres(ff//fff_d)sus(cd'f) me(f_e)os(egff) (,) in(dg~) sé(gv.f!h'j)mi(g_[oh:h]e)tis(gh) tu(fdgvFE)is,(e.) (;) ut(dg) non(gfg) mo(fe)ve(d!ff)án(fff)tur(d!ff) (,) ve(d)stí(fv.ffd)gi(f)a(fhG'Fghg) me(egff)a :(fe..) (:) in(f)clí(ixef/hig)na(ghffe) au(fffd~)rem(f) tu(gf)am,(f.) (;) et(fffd) ex(f)áu(gf~)di(fg) ver(g)ba(fgff) me(d!ffd)a :(d!ewf.) (:) mi(c)rí(cd/fef)fi(f)ca(f) mi(fgf)se(f)ri(ef)cór(gh)di(g)as(ef) tu(g.f!gwhgh)as,(hg..) (;) qui(f) sal(e.f!gwh)vos(ghF'E) fa(g)cis(fff_g) (,) spe(dc)rán(df~)tes(fffddc) in(df) te,(ef'g) Dó(e)mi(egff)ne.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #265)",
      blurb: {
        text: "Perfice gressus meos draws on three consecutive verses of Psalm 17. The middle verse, Psalm 17:6, opens in the Douay-Rheims with an acknowledgment, \"I have cried to thee, for thou, O God, hast heard me,\" before moving to the petition to incline and hear; the Offertory drops that opening acknowledgment and begins at the petition itself. The chant also adds \"Domine\" at the close, a word not present in verse 7 of the psalm.",
        source: "Ps. 17:5, 6-7 (Vulgate numbering Ps. 16:5, 6-7) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "ot-5-a": {
    gradual: {
      title: "Dispersit dedit pauperibus",
      latin: "Dispérsit, dedit paupéribus : justítia ejus manet in saéculum saéculi. ℣. Potens in terra erit semen ejus : generátio rectórum benedicétur.",
      translation: "He has distributed, he has given to the poor: his justice remains for ever and ever. ℣. His seed shall be mighty upon earth: the generation of the righteous shall be blessed.",
      mode: "Gradual · Ordinary Time (Year A) · Mode II",
      reference: "Ps. 112:9",
      gabc: "(c3) DIs(c)pér(ef~)sit,(f.) *(,) de(hfghvF'Ege/fg)dit(f.) (,) pau(f)pé(hf/hi'j)ri(hvGF)bus :(gxfegvFE.) (:) ju(e)stí(e[ll:1]d/fef)ti(f)a(f) e(fd/ef!hvvF'E//f!hhivHF)jus(f.) (;) ma(fe/hji)net(ihhf.) (,) in(f) saé(h.f!gwh/i_[oh:h]f/ij)cu(h)lum(fh./ghF'Ef.) (,) saé(de'fhvGFgef)cu(hf/h_i)li.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Pot(f)ens(h) in(ij~) ter(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)ra(ji..) (:) e(i!jw!kvJI'jw!kvJI)rit(i) se(i)men(ij) e(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)jus :(f.) (:) ge(hh)ne(h)rá(h)ti(h)o(h) re(hi)ctó(ivH'GE//fhGEfh..)(,)(gi!jvHF)rum(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) * be(de'fhvGF'g)ne(e)di(f)cé(hf/h_i)tur.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1212)",
      blurb: {
        text: "Psalm 112:9 praises the one who gives to the poor and whose justice endures forever. The Year A Gradual adds its blessing on the generation of the upright, holding generosity and righteousness together.",
        source: "Ps. 112:9 (Vulgate numbering Ps. 111:9) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Introibo ad altare Dei",
      latin: "Introíbo ad altáre Dei, ad Deum qui laetíficat juventútem meam.",
      translation: "I will go in to the altar of God, to God who gives joy to my youth.",
      mode: "Communion · Ordinary Time (Years A & C) · Mode VIII",
      reference: "Ps. 43:4",
      gabc: "(c4) IN(gj)tro(j)í(jhjvIG)bo(g.) *(,) ad(gh/ji) al(i)tá(ij'k)re(k_[hl:1]h) De(h_[hl:1]k_[hl:1]j_[hl:1])i,(ikjj/ghg.) (:) ad(g) De(g.h!iwj)um(j) qui(hi) lae(h_g)tí(h!iwj)fi(ghGF'g)cat(gf..) (;) ju(g)ven(hgh)tú(gh/i.h!iwj)tem(hih) me(gh!ivHG'h)am.(hg..) (::)",
      source: "Graduale Romanum (GregoBase #554)",
      blurb: {
        text: "Psalm 43 asks God to send light and truth that lead the speaker to the holy hill and altar. The Communion reaches that altar and names God as the joy of youth.",
        source: "Ps. 43:4 (Vulgate numbering Ps. 42:4) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Quadp2-0.txt [Officium heading]; Divinum Officium, Quadp2-0 (Missale Romanum formulary)",
      },
    },
  },
  "ot-5-b": {
    gradual: {
      title: "Tollite hostias",
      latin: "Tóllite hóstias, et introíte in átria ejus : adoráte Dóminum in aula sancta ejus. ℣. Revelábit Dóminus condénsa : et in templo ejus omnes dicent glóriam.",
      translation: "Bring up sacrifices, and come into his courts: adore the Lord in his holy court. ℣. The Lord shall lay bare the thickets: and in his temple all shall speak his glory.",
      mode: "Gradual · Ordinary Time (Years B & C) · Mode V",
      reference: "Ps. 96:8-9",
      gabc: "(c3) TOl(de)li(efe)te(d.) (,) * hó(d!ewfef)sti(d!ewfe)as,(e.[ll:1]d!ewfe/fhF'ED'Cdee[ll:1]d.0) (;) et(d) in(d.0f!gwh'!iv)tro(h)í(hi)te(h.) (,) in(f) á(fee[ll:1]d/fh)tri(highf)a(fv.egf.) e(dfe___hv.ijii)jus :(hihh/fgf.) (:) ad(f)o(h)rá(ij)te(i) Dó(hi)mi(ih)num(h.) (;) in(f) au(f_efvED'e)la(e_[oh:h][ll:1]d) (,) san(dfe___/hgh)cta(f) e(de)jus.(dfe___hv.hhhff//dfe/fee[ll:1]d.0) (::) ℣. Re(d)ve(fe)lá(eh)bit(h.) (,) Dó(ihh'hh_f/hh//ihh'hh_egxfgED./[-0.5]hh)mi(ih)nus(h.) (;) con(h)dén(ih/kkh/ih/kkkiih~)sa :(hihh/fgf.) (:) et(f) in(h) tem(ij)plo(i_[oh:h]h) e(ffeffefhffeede)jus(e[ll:1]d..) (;) o(d)mnes(d) di(dfE'D)cent(ef) *() gló(fhG'Fhhh)ri(h)am.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #282)",
      blurb: {
        text: "Tollite hostias draws from Psalm 96, verses 8 and 9, but takes only a portion of each. Verse 8 opens with an address to the Gentiles, \"Bring to the Lord glory unto his name,\" and the chant picks up from the second half of that verse. It then takes the first half of verse 9, stopping before \"Let all the earth be moved at his presence.\" The result is a call to bring offerings and enter God's courts, with the wider summons to the nations and the closing trembling of the earth set aside.",
        source: "Ps. 96:8-9 (Vulgate numbering Ps. 95:8-9) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Multitudo languentium",
      latin: "Multitúdo languéntium, et qui vexabántur a spirítibus immúndis, veniébant ad eum : quia virtus de illo exíbat, et sanábat omnes.",
      translation: "A multitude of the sick, and they that were troubled with unclean spirits, came to him: for power went out from him, and healed all.",
      mode: "Communion · Ordinary Time (Year B) · Mode II",
      reference: "Luke 6:18, 19",
      gabc: "(f3) MUl(f)ti(ef)tú(f!gw!hvGF)do(f!gwh.) *(,) lan(hf~)guén(hi)ti(hi!jvIH'i)um,(ih..) (;) et(hi) qui(h) ve(hhg)xa(f)bán(h.f!gwh)tur(hhh/i_[oh:h]h) (;) a(f) spi(fe)rí(f!gwh)ti(hhh)bus(g_[oh:h]f) im(fe~)mún(f!gw!hvGFgv_[oh:h]F~E~)dis,(fe..) (;) ve(f)ni(h)é(hih)bant(hhhf~) ad(g_[oh:h]f) e(e!gw!hvGF'g)um :(gf..) (:) qui(h)a(i) vir(kxi!jw!kv_[hl:1]J~I~)tus(j_i) de(hg) il(hi)lo(i_[oh:h]h) ex(hg)í(eg!hvGF)bat,(gf..) (;) et(f) sa(hg)ná(hhg!hi_[oh:h]h/ihhfg)bat(f.) o(f!gwhgh)mnes.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #1267)",
      blurb: {
        text: "Multitudo languentium draws on two consecutive verses of Luke 6 rather than quoting either one straight. Verse 18 supplies the sick and those troubled with unclean spirits, but there it simply says they \"were cured\"; verse 19 supplies the explanation, \"for virtue went out from him and healed all.\" The antiphon joins these two halves into a single movement toward Christ, dropping verse 19's detail that the crowd was seeking to touch him. The verse immediately following in Luke, where the antiphon stops, is where Christ opens the Sermon on the Plain: \"Blessed are ye poor.\"",
        source: "Luke 6:18, 19 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "ot-5-c": {
    gradual: {
      title: "Tollite hostias",
      latin: "Tóllite hóstias, et introíte in átria ejus : adoráte Dóminum in aula sancta ejus. ℣. Revelábit Dóminus condénsa : et in templo ejus omnes dicent glóriam.",
      translation: "Bring up sacrifices, and come into his courts: adore the Lord in his holy court. ℣. The Lord shall lay bare the thickets: and in his temple all shall speak his glory.",
      mode: "Gradual · Ordinary Time (Years B & C) · Mode V",
      reference: "Ps. 96:8-9",
      gabc: "(c3) TOl(de)li(efe)te(d.) (,) * hó(d!ewfef)sti(d!ewfe)as,(e.[ll:1]d!ewfe/fhF'ED'Cdee[ll:1]d.0) (;) et(d) in(d.0f!gwh'!iv)tro(h)í(hi)te(h.) (,) in(f) á(fee[ll:1]d/fh)tri(highf)a(fv.egf.) e(dfe___hv.ijii)jus :(hihh/fgf.) (:) ad(f)o(h)rá(ij)te(i) Dó(hi)mi(ih)num(h.) (;) in(f) au(f_efvED'e)la(e_[oh:h][ll:1]d) (,) san(dfe___/hgh)cta(f) e(de)jus.(dfe___hv.hhhff//dfe/fee[ll:1]d.0) (::) ℣. Re(d)ve(fe)lá(eh)bit(h.) (,) Dó(ihh'hh_f/hh//ihh'hh_egxfgED./[-0.5]hh)mi(ih)nus(h.) (;) con(h)dén(ih/kkh/ih/kkkiih~)sa :(hihh/fgf.) (:) et(f) in(h) tem(ij)plo(i_[oh:h]h) e(ffeffefhffeede)jus(e[ll:1]d..) (;) o(d)mnes(d) di(dfE'D)cent(ef) *() gló(fhG'Fhhh)ri(h)am.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #282)",
      blurb: {
        text: "Tollite hostias draws from Psalm 96, verses 8 and 9, but not in full. Verse 8 opens with an address to the nations, \"Bring to the Lord glory unto his name,\" and verse 9 closes with a call to universal trembling, \"Let all the earth be moved at his presence.\" Both of those frames are set aside, and the chant keeps only the central commands: bring sacrifices, enter his courts, adore the Lord in his holy place.",
        source: "Ps. 96:8-9 (Vulgate numbering Ps. 95:8-9) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Introibo ad altare Dei",
      latin: "Introíbo ad altáre Dei, ad Deum qui laetíficat juventútem meam.",
      translation: "I will go in to the altar of God, to God who gives joy to my youth.",
      mode: "Communion · Ordinary Time (Years A & C) · Mode VIII",
      reference: "Ps. 43:4",
      gabc: "(c4) IN(gj)tro(j)í(jhjvIG)bo(g.) *(,) ad(gh/ji) al(i)tá(ij'k)re(k_[hl:1]h) De(h_[hl:1]k_[hl:1]j_[hl:1])i,(ikjj/ghg.) (:) ad(g) De(g.h!iwj)um(j) qui(hi) lae(h_g)tí(h!iwj)fi(ghGF'g)cat(gf..) (;) ju(g)ven(hgh)tú(gh/i.h!iwj)tem(hih) me(gh!ivHG'h)am.(hg..) (::)",
      source: "Graduale Romanum (GregoBase #554)",
      blurb: {
        text: "Psalm 43 asks God to send light and truth that lead the speaker to the holy hill and altar. The Communion reaches that altar and names God as the joy of youth.",
        source: "Ps. 43:4 (Vulgate numbering Ps. 42:4) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Quadp2-0.txt [Officium heading]; Divinum Officium, Quadp2-0 (Missale Romanum formulary)",
      },
    },
  },
  /* ---- 6th Sunday in Ordinary Time ---- */
  "ot-6": {
    gradual: {
      title: "Tu es Deus qui facis",
      latin: "Tu es Deus qui facis mirabília solus : notam fecísti in géntibus virtútem tuam. ℣. Liberásti in bráchio tuo pópulum tuum, fílios Israel et Joseph.",
      translation: "You are the God who alone does wonders: you have made your power known among the nations. ℣. With your arm you have redeemed your people, the children of Israel and Joseph.",
      mode: "Gradual · Ordinary Time · Mode III",
      reference: "Ps. 77:15, 16",
      gabc: "(c4) Tu(c_d!ffgvFE) es(e.) *(,) De(ixe.f!gwh_g)us,(giH'GfffdgvFE.) (;) qui(ef'g) fa(hv.gjh/ij)cis(i.) (,) mi(ij)ra(i)bí(ij/kj)li(jjjh)a(h_g/jij) (,) so(hjI'G)lus :(ixg_[uh:l]h//e.f!gw!higff/ded.) (:) no(ghg'k)tam(kjjhj) fe(g')cí(giihi)sti(g.) (,) in(g) gén(giihjjhi)ti(g_[uh:l]h)bus(ixe.f!gw!higff/ded.) (:) vir(gj//hi~)tú(iji___!jw!kvJ'IH)tem(hv.g!jj//jj//jjjggf) (,) tu(f.0h!iwj)am.(i_[oh:h]g//ivHGhhf/hh) (,) (g!jj//jj//jjjvH'GF'/[-0.5]{ix}E0f_h//ivGFghg/hgge.) (::) ℣. Li(g)be(g)rá(gj)sti(j.) (,) in(j) brá(jkij)chi(ih)o(h!iwj) tu(j)o(ihjvIH) (,) (jj/ki'jvHG'jh'/ihhg.) (:) pó(ij//jjjvH'Gh!iwj_i)(,)(e!gh/jij/h!jj//jjjvH'Gh!iwj)pu(jjjvHG'h)lum(hv.giHG'hffe.) (;) tu(fd/ffd/ef/gh//j_[hl:1]k_[hl:1]j_[hl:1]//j'jjvHGjjjj_i)um,(i.) (:) fí(g)li(hj)os(j) Is(j)ra(j)el(i./jkh/jijHG.) (,) (ji/j_k//li/jkJ'IH.) (,) (k/li/jkJ'IH.jijHGjg/i_[uh:l]jgh!jjjvH'GF'fd.) *(;) et(g) Jo(hj)seph.(iij/hihghg.ef'gh_e//giHG'hffe.) (::)",
      source: "Graduale Romanum (GregoBase #850)",
      blurb: {
        text: "Tu es Deus qui facis mirabilia solus quotes Psalm 77:15-16 with small but noticeable differences from the Clementine Vulgate. Where the psalm reads \"notam fecisti in populis virtutem tuam\" and \"Redemisti in brachio tuo\" and \"filios Jacob,\" the gradual sings \"in gentibus,\" \"Liberasti,\" and \"filios Israel.\"",
        source: "Ps. 77:15, 16 (Vulgate numbering Ps. 76:15, 16) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Quadp3-0 (Missale Romanum formulary); Divinum Officium, Quadp3-0.txt [Officium heading]",
      },
    },
    alleluia: {
      title: "Cantate Domino canticum",
      latin: "Allelúia. ℣. Cantáte Dómino cánticum novum : quia mirabília fecit Dóminus.",
      translation: "Alleluia. ℣. Sing to the Lord a new song: for the Lord has done wonderful things.",
      mode: "Alleluia · Ordinary Time · Mode I",
      reference: "Ps. 98:1",
      gabc: "(c4) AL(d)le(ff)lú(gv.f!hgh){ia}.(hjH'GF.) *(;) ij.(e!gwhgh./fhg/hffvEC.) (,) (d!ewf!gv.egF'ED'ewfd.1) (::) ℣. Can(cd)tá(ixdh//gihivGF//ggf/gg//fgh!jjg)(,)(ixhhghvGF.hiHG'hw!ivHGhi)te(h.) (,) Dó(h_g/jjvH'G//ixhihi)mi(g)no(g_[oh:h]f_[oh:h]) (;) cán(f_e/f!gwhgh)ti(hg/hf/ghg)cum(gd~) no(f_e/g_[oh:h]fgvFD'ewfd)vum :(d.) (:) qui(d/ffd/ffddef!gh)a(ghg.) (,) mi(f)ra(ghg)bí(h/jjhhgh.)(,)(ixfh!ivGF'fd/ffhvGF'fvED)li(e[ll:1]d)a(d.) (;) fe(ff)cit(fg) () * Dó(g_[oh:h]f)mi(f!gwhgh)nus.(hjH'GF.) (;) (e!gwhgh./fhg/hffvEC.) (,) (d!ewf!gv.egF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1077)",
      blurb: {
        text: "Psalm 98 opens with more than this Alleluia verse quotes. The full first verse in the Douay-Rheims reads: \"Sing ye to the Lord a new canticle: because he hath done wonderful things. His right hand hath wrought for him salvation, and his arm is holy.\" The chant takes only the first half, stopping after the reason for the new song, and leaves the lines about the saving right hand and holy arm unsung.",
        source: "Ps. 98:1 (Vulgate numbering Ps. 97:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Benedictus es Domine, doce me",
      latin: "Benedíctus es, Dómine, doce me justificatiónes tuas : benedíctus es, Dómine, doce me justificatiónes tuas : in lábiis meis pronuntiávi ómnia judícia oris tui.",
      translation: "Blessed are you, O Lord, teach me your justifications: blessed are you, O Lord, teach me your justifications: with my lips I have pronounced all the judgments of your mouth.",
      mode: "Offertory · Ordinary Time · Mode III",
      reference: "Ps. 119:12-13",
      gabc: "(c4) BE(g_[oh:h])ne(g_[oh:h])dí(ikj)ctus(h!iwj) es(j_i) *() Dó(i)mi(ikjj)ne,(ji..) (;) do(j)ce(ji) me(ji) ju(h)sti(h/jji)fi(hg)ca(h)ti(g)ó(g!jjjhkvJI'j)nes(i_[oh:h]h) tu(gh!jvHF)as :(gf..) (:) be(g)ne(g)dí(ikj)ctus(h!iwj) es(j_i) Dó(i)mi(ikjj)ne,(ji..) (;) do(j)ce(ji) me(ji) ju(h)sti(h/jji)fi(hg)ca(h)ti(g)ó(g!jjjhkvJI'j)nes(i_[oh:h]h) (,) tu(gh!jj/klj/!j'jh!iwj_i)as :(jjjvIH'jhh/fgf.) (:) in(ef) lá(ef)bi(g)is(g_0[uh:l]h_[uh:l]i) me(hhgh)is(h!jj/khhg.) (;) pro(j)nun(j)ti(h!iwj)á(ijhhg)(,)(jjjhkvJI)vi(jjjvIH'jhh/fgf.) (:) ó(dg)mni(g)a(ji/jhjvIH') ju(g)dí(hjh___!iwj)ci(g)a(f_g) (,) o(g/jjg/jjj)ris(g!jjj) tu(ixhg/hiG'FghF'Ef_gF'E)i.(e.) (::)",
      source: "Graduale Romanum (GregoBase #1317)",
      blurb: {
        text: "Psalm 119:12-13 gives this Offertory its words, though the chant repeats verse 12 before moving to verse 13, so the prayer to be taught God's justifications is heard twice where the psalm has it once. On Quinquagesima Sunday, where this Offertory is placed, the Epistle is 1 Corinthians 13, Paul's teaching on charity, and the Gospel is Luke 18:31-43, the healing of the blind man near Jericho who cried out for mercy.",
        source: "Ps. 119:12-13 (Vulgate numbering Ps. 118:12-13) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Quadp3-0 (Missale Romanum formulary); Divinum Officium, Quadp3-0.txt [Officium heading]",
      },
    },
    communion: {
      title: "Manducaverunt et saturati",
      latin: "Manducavérunt, et saturáti sunt nimis, et desidérium eórum áttulit eis Dóminus : non sunt fraudáti a desidério suo.",
      translation: "So they did eat, and were filled exceedingly, and the Lord gave them their desire: they were not defrauded of that which they craved.",
      mode: "Communion · Ordinary Time · Mode I",
      reference: "Ps. 78:29-30",
      gabc: "(c4) MAn(de)du(c)ca(d)vé(fg)runt,(hf/ghhg.) *(,) et(fh) sa(g)tu(fe)rá(fh)ti(g) sunt(gf~) ni(g)mis,(d.) (:) et(d) de(fe)si(f)dé(gh)ri(g)um(g) e(g)ó(gfg)rum(dec.) (,) át(fg)tu(f)lit(f) e(f)is(ixfghi.g!hw!ivHG') Dó(f)mi(fg!hvGF'g)nus :(gf..) (:) non(h) sunt(g) frau(gf~)dá(gg)ti(d.) (,) a(d!ewffvED'd) de(c)si(d)dé(fg)ri(g)o(ghfgvFE) su(d!ewfef)o.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #677)",
      blurb: {
        text: "Manducaverunt et saturati draws from Psalm 78, verses 29 and 30, but stops at exactly the right moment. Verse 30 continues, in the Douay-Rheims, \"As yet their meat was in their mouth,\" and verse 31 follows immediately: \"And the wrath of God came upon them.\" The chant lifts only the moment of abundance and satisfied desire, leaving the psalm's dark turn unsung. It also replaces the psalm's pronoun with a name, so where the psalm reads \"he gave them their desire,\" the chant sings \"Dóminus,\" the Lord.",
        source: "Ps. 78:29-30 (Vulgate numbering Ps. 77:29-30) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  /* ---- 7th Sunday in Ordinary Time ---- */
  "ot-7": {
    gradual: {
      title: "Ego dixi: Domine miserere",
      latin: "Ego dixi : Dómine, miserére mei : sana ánimam meam, quóniam peccávi tibi. ℣. Beátus qui intélligit super egénum et páuperem : in die mala liberábit eum Dóminus.",
      translation: "I said: O Lord, be merciful to me: heal my soul, for I have sinned against you. ℣. Blessed is he that understands concerning the needy and the poor: the Lord will deliver him in the evil day.",
      mode: "Gradual · Ordinary Time · Mode V",
      reference: "Ps. 41:5, 2",
      gabc: "(c4) E(ffg)go(f) *() di(f)xi :(fV_{ix}e/g!hwi) Dó(g_[oh:h]f)mi(gf)ne,(fg) (,) (d!ff/ge'/fgd'/e[ll:1]ddc.) (;) mi(f)se(fdf)ré(fdf/efd'/ec)re(d.) me(fg)i :(ghg___//jjh/jggf.0) (:) sa(f)na(g) á(h)ni(gf)mam(gf//gh!jjvH'G) me(hg/hff'gf)am,(fg) (,) (d!ff/ge'/fgd'/e[ll:1]ddc.) (:) quó(f)ni(fd)am(f) pec(ghg)cá(h)vi(ixhgiHG.) (`) ti(gf/hgh)bi.(hf) (,) (gh!jvvH'G//h!iwj/kjj/hih.) (;) (fg/h!jj/klijh.ixgiHF.1) (z0::c3) ℣. Be(d)á(df!hh/ijh)tus(h.) (,) qui(h_g) in(i!jwk)tél(i_[oh:h]h)li(h)git(hvv//i_[oh:h]h//jvIH'Ghf..) (;) su(hh)per(h) e(h)gé(ih/ij_hih/ij_ij//hi/jij)num(jh/jkihhf.) (,) et(f) páu(hf/hhh)pe(h)rem :(h.f!gwh!iv.hi/jhh/iih.0) (:) in(hh) di(h)e(hi) ma(ivH'GE//fhGEfh..)(,)(gi!jvHF)la(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) li(d)be(ef)rá(f)bit(f) e(f.0/[-0.5]hvGF'g)um(ef) *() Dó(hf)mi(hi)nus.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #399)",
      blurb: {
        text: "Psalm 41 opens with verse 2, the beatitude about caring for the needy, before arriving at verse 5, the personal cry of contrition that gives this chant its name. The Gradual reverses that order, singing verse 5 first, \"Ego dixi: Domine, miserere mei,\" and then reaching back to verse 2, \"Beatus qui intelligit super egenum et pauperem.\" Three intervening verses, including the psalmist's lament that enemies watch for his death, are passed over entirely.",
        source: "Ps. 41:5, 2 (Vulgate numbering Ps. 40:5, 2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Verba mea auribus",
      latin: "Allelúia. ℣. Verba mea áuribus pércipe, Dómine : intéllige clamórem meum.",
      translation: "Alleluia. ℣. Give ear, O Lord, to my words: understand my cry.",
      mode: "Alleluia · Ordinary Time · Mode II",
      reference: "Ps. 5:2",
      gabc: "(f3) AL(ef~)le(f)lú(ef~){ia}.(f/ggf.0) *(;) ij.(fg!h'i/j.f!gw!hvGF.e!fwg/hggf.0) (::) ℣. Ver(ef~)ba(f) me(fhg___!hw!ivHF)a(f.) (,) áu(f!h'i~)ri(i)bus(iij) pér(i_[oh:h]f/ghGF.e!fwg'!hv)ci(gf)pe,(f.) (,) Dó(f_c/de!f_[oh:h]g_[oh:h]f_[oh:h])mi(ef)ne :(f.) (:) in(f)tél(g!hwi/ji~)li(i_[oh:h]f/ghGF.e!fwg'!hv)ge(gf..) (;) * cla(f)mó(e[ll:1]d)rem(ef~) me(fe)um.(f/ggf.0) (;) (fg!h'i/j.f!gw!hvGF.e!fwg/hggf.0) (::)",
      source: "Graduale Romanum (GregoBase #103)",
      blurb: {
        text: "Verba mea auribus is drawn from only the opening cry of Psalm 5, which continues in verse 3 with \"Hearken to the voice of my prayer, O my King and my God.\" The psalm as a whole is shaped as a morning prayer, and its fourth verse makes that explicit: \"O Lord, in the morning thou shalt hear my voice.\" The Alleluia draws on just the psalm's first petition, letting the fuller context of morning supplication stand quietly behind it.",
        source: "Ps. 5:2 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Intende voci orationis",
      latin: "Inténde voci oratiónis meae, Rex meus, et Deus meus : quóniam ad te orábo, Dómine.",
      translation: "Hearken to the voice of my prayer, O my King and my God: for to you will I pray, O Lord.",
      mode: "Offertory · Ordinary Time · Mode V",
      reference: "Ps. 5:3-4",
      gabc: "(c3) IN(f)tén(gxf_e/gffd~)de(e_[oh:h][ll:1]d) *() vo(dedd'd/e_[oh:h][ll:1]d)ci(d.) (,) o(d)ra(e)ti(f!gwh)ó(hihh)nis(f_e/hhf!gwh) me(d_[oh:h]e_[oh:h]d_[oh:h])ae,(d.) (:) Rex(de) me(e.f!gw!hvGF)us,(fg) (,) et(ef) De(fg!hvGF)us(ef) me(f!hhh/ih'/ihhe.)(,)(hhh/ih'/ig'hvF'Ef!gwh_f)us :(f.) (:) quó(df'!hvh'1h!iwj_ijvIH)ni(hi!jvIH'i)am(ih..) (,) ad(hi) te(hi!jvIH'hvGF) o(fh)rá(df'!hvihi)bo,(gh/if..) (;) Dó(d!ewfefhhh//ih'/ihhe.ehG'Fh)mi(d_[oh:h]e_[oh:h]d_[oh:h])ne.(d.) (::)",
      source: "Graduale Romanum (GregoBase #293)",
      blurb: {
        text: "Intende voci orationis draws from verses 3 and 4 of Psalm 5, though it trims verse 4 at its midpoint, leaving out the words that follow: \"in the morning thou shalt hear my voice.\" Verse 2, just before where the chant begins, had already voiced the same plea in slightly different terms: \"Give ear, O Lord, to my words, understand my cry.\" The compiler stepped past that opening petition to arrive at this one, with its direct address of God as King.",
        source: "Ps. 5:3-4 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Narrabo omnia mirabilia",
      latin: "Narrábo ómnia mirabília tua : laetábor, et exsultábo in te : psallam nómini tuo, Altíssime.",
      translation: "I will relate all your wonders: I will be glad and rejoice in you: I will sing to your name, O Most High.",
      mode: "Communion · Ordinary Time · Mode II",
      reference: "Ps. 9:2-3",
      gabc: "(f3) NAr(c)rá(egf)bo(f.) *(,) ó(fg)mni(e[ll:1]d)a(c) mi(e)ra(f)bí(hh)li(fe)a(e) tu(eg!ivHGih)a :(h.) (:) lae(f)tá(hih)bor,(hgh.) (,) et(f) ex(f)sul(hg~)tá(hih)bo(hgh.) in(fe~) te :(fv.efEC.) (:) psal(egf)lam(f) nó(hh)mi(fe)ni(e) tu(fge)o,(e.) (,) Al(eg!ivH'Gh')tís(f)si(f_[oh:h]g_[oh:h]f_[oh:h])me.(f.) (::)",
      source: "Graduale Romanum (GregoBase #639)",
      blurb: {
        text: "Narrabo omnia mirabilia begins mid-verse. The second verse of Psalm 9 opens in the Vulgate with a clause the chant omits: \"Confitebor tibi, Domine, in toto corde meo,\" meaning \"I will give thanks to you, Lord, with my whole heart.\" That opening is passed over, and the text starts with what follows, \"narrabo omnia mirabilia tua,\" then carries straight into verse 3 without interruption. The result moves entirely in the register of praise and rejoicing, leaving the act of thanksgiving implicit rather than stated.",
        source: "Ps. 9:2-3 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  /* ---- 8th Sunday in Ordinary Time ---- */
  "ot-8": {
    gradual: {
      title: "Ad Dominum dum tribularer",
      latin: "Ad Dóminum, dum tribulárer, clamávi, et exaudívit me. ℣. Dómine, líbera ánimam meam a lábiis iníquis, et a lingua dolósa.",
      translation: "In my trouble I cried to the Lord, and he heard me. ℣. O Lord, deliver my soul from wicked lips, and from a deceitful tongue.",
      mode: "Gradual · Ordinary Time · Mode V",
      reference: "Ps. 120:1-2",
      gabc: "(c4) AD(d) Dó(ff)mi(fgff'f)num,(f_d/fge'/fgd'/e[ll:1]ddc.) *(;) dum(f) tri(f)bu(h)lá(jh/jjj)rer,(j.) (,) cla(j)má(k_[hl:1]j//ijI'H//k_[hl:1]j//j'jjvHGhg/h!jjkvJI)vi,(j.) (:) et(h) ex(h!j'k)au(jh~)dí(h!jjg/h)vit(fg) me.(fgh!jv.0/klJH.1) (,) (ixjjvH'G//hiGF'gwhg/hjhh/fgf.) (z0::c3) ℣. Dó(h)mi(ih)ne,(hvvGF//ig/h_[oh:h]i_[oh:h]g_[oh:h]//hih//h'i_[oh:h]H'_[oh:h]GEf.ff) (,) (fffgxfff//fh/ihgg/efe.) (;) lí(gxgh'i)be(hi_[oh:h]H'_[oh:h]GF'g)ra(f.) (,) á(gxfg'h)ni(g)mam(fe~) me(f/hhh)am(hv.fhff/ded.) (;) a(d) lá(fdfED//f_d/ef!gwhhi)bi(h)is(h.) (,) in(h)í(i_[oh:h]h//ghG'F//i_[oh:h]h//h'hhvFEfe/f!hhivHG)quis,(h.) (:) et(hhi) a(h) lin(h_f/hhhe/fe/fd~)gua(e[ll:1]d..) *(,) do(h)ló(h)sa.(ihh'hvFE'e[ll:1]d.0) (;) (fdfED//fd/ef/hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #697)",
      blurb: {
        text: "Psalm 120 belongs to a group of fifteen psalms known as the gradual canticles, their name coming from the Latin gradus, meaning steps or ascents, a title the Douay-Rheims commentary traces to the fifteen steps of the Temple or to the ascending of pilgrims toward Jerusalem. The chant draws on only the psalm's opening two verses, stopping before verse 3, which presses on with a question about the deceitful tongue: \"What shall be given to thee, or what shall be added to thee, to a deceitful tongue?\" It is worth noticing that this Gradual, a chant form whose own name derives from gradus, is drawn from one of those very gradual psalms.",
        source: "Ps. 120:1-2 (Vulgate numbering Ps. 119:1-2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Domine Deus meus in te speravi",
      latin: "Allelúia. ℣. Dómine Deus meus, in te sperávi : salvum me fac ex ómnibus persequéntibus me, et líbera me.",
      translation: "Alleluia. ℣. O Lord my God, in you have I put my trust: save me from all them that persecute me, and deliver me.",
      mode: "Alleluia · Ordinary Time · Mode I",
      reference: "Ps. 7:2",
      gabc: "(c4) AL(dc~)le(c/e'gF'EC'd)lú(dc/fg!hvGF'g){ia}.(g.) *(;) ij.(hghvGF//g_[oh:h]fgvFDffdev.dec.) (;) (e/ggh'GF/gvFEffd//evDCd!ewfd.1) (::) ℣. Dó(h)mi(ghG'F)ne(ev.ce'!gvF'EC'dw!evDCd.) (,) De(d/ffe/ggh)us(fvED) me(c.d!ewfd)us,(d.) (;) in(de) te(gh) spe(gh)rá(h!iwj/ki'jvH'G//h!iwjh)vi :(h.) (:) sal(h_ghvGF'e[ll:1]d~)vum(fg'h) me(fvED) fac(c.d!ewfd.1) (;) ex(de) ó(ghg___//hgh)mni(h!iwj/ki'jvH'G//h!iwjh)bus(h.) (,) per(h_ghvGF'e[ll:1]d~)se(f)quén(g_[uh:l]h)ti(fvED)bus(c.d!ewfd) me,(d.) *(:) et(de) lí(gh)be(gh)ra(h!iwj/ki'jvH'G//h!iwjh) me.(h.) (,) (hghvGF//g_[oh:h]fgvFDffdev.dec.) (,) (e/ggh'GF/gvFEffd//evDCd!ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #801)",
      blurb: {
        text: "Psalm 7 moves through a protestation of innocence, a call for divine judgment over enemies, and a vow of thanksgiving across eighteen verses in all. This Alleluia takes only verse 2, the psalm's opening cry of trust and appeal, leaving everything that follows unsung. Around 530, St. Benedict of Nursia assigned the whole psalm to the Tuesday office of Prime, making it the first of three psalms for that hour, a practice still observed in a number of monasteries.",
        source: "Ps. 7:2 (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 7\" (rev. 1373246561)",
      },
    },
    offertory: {
      title: "Domine convertere",
      latin: "Dómine, convértere, et éripe ánimam meam : salvum me fac propter misericórdiam tuam.",
      translation: "Turn to me, O Lord, and deliver my soul: save me for your mercy's sake.",
      mode: "Offertory · Ordinary Time · Mode VI",
      reference: "Ps. 6:5",
      gabc: "(c4) DO(f)mi(f)ne(fgff) ()* con(fd~)vér(fg~)te(f)re,(f.) (,) et(fg) é(ghf)ri(f_[oh:h]g_[oh:h]f_[oh:h])pe(f.) á(fh)ni(g)mam(ffhg) me(f_[oh:h]g_[oh:h]f_[oh:h])am :(f.) (:) sal(fg~)vum(f) me(f) fac(f.) (,) pro(fd/ffd)pter(d_c) mi(d)se(ffg)ri(f)cór(fg~)di(f)am(fg/hg/h_g) tu(fg!hvGF'g)am.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #848)",
      blurb: {
        text: "Domine convertere draws a single verse from Psalm 6, the first of the seven penitential psalms. It sits immediately after the anguished question of verse 4, which the Douay-Rheims renders \"but thou, O Lord, how long?\" One verse after the chant's own words, the psalmist gives the reason the plea is so urgent: \"there is no one in death, that is mindful of thee.\"",
        source: "Ps. 6:5 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Primum quaerite regnum Dei",
      latin: "Primum quaérite regnum Dei, et ómnia adjiciéntur vobis, dicit Dóminus.",
      translation: "Seek first the kingdom of God, and all things shall be added unto you, says the Lord.",
      mode: "Communion · Ordinary Time · Mode VIII",
      reference: "Matt. 6:33",
      gabc: "(c4) PRi(ggh)mum(g) quaé(g)ri(fef)te(d.) (,) * re(fe~)gnum(fg~) De(giH'G)i,(g.) (:) et(j) ó(jij)mni(hg)a(g.) ad(h)ji(i)ci(j)én(h)tur(gi~) vo(hhgh)bis,(g.) (;) di(gee[ll:1]d/geg)cit(g) Dó(g)mi(ghg___)nus.(g.) (::)",
      source: "Graduale Romanum (GregoBase #868)",
      blurb: {
        text: "Primum quaerite regnum Dei draws on a single verse from the Sermon on the Mount, Matthew 6:33, but quietly trims it. The full verse reads \"et justitiam ejus\" after \"regnum Dei,\" adding \"and his justice\" to the object of seeking; the antiphon drops that phrase entirely. It also replaces the verse's closing \"haec omnia\" with simply \"omnia,\" and appends \"dicit Dominus,\" which does not appear in Matthew at all.",
        source: "Matt. 6:33 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  /* ---- 9th Sunday in Ordinary Time ---- */
  "ot-9": {
    alleluia: {
      title: "Deus judex justus",
      latin: "Allelúia. ℣. Deus judex justus, fortis et pátiens : numquid irascétur per síngulos dies?",
      translation: "Alleluia. ℣. God is a just judge, strong and patient: is he angry every day?",
      mode: "Alleluia · Ordinary Time · Mode VIII",
      reference: "Ps. 7:12",
      gabc: "(c4) AL(g)le(g)lú(gvvE'Dgh){ia}.(g.) *(;) ij.(de//dec./g_[uh:l]h//gihgiHG'g) (,) (fghj_hjv.ijHG.) (;) (fghj_hkv.jlKJ'jvI'HG'g) (,) (fghkvJI//gjh/ihhg.) (::) ℣. De(g)us(gh) ju(ggg)dex(d) ju(ev.dec./g!hwi_[oh:h]hivHG'h)stus,(g.) (;) for(gfde~)tis(ev.dec.) et(gh'i~) pá(i)ti(h!iwj!kvJH'GF'g)ens :(g.) (:) num(i)quid(g) i(h!iwj)ra(jvIH)scé(fh/jh/ig)tur(g.) (;) * per(f) sín(f!h'j)gu(ih)los(ji) di(hg)es?(g.) (,) (fghj_hjv.ijHG.) (;) (fghj_hkv.jlKJ'jvI'HG'g) (,) (fgh!kvJI//gjh/ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #1264)",
      blurb: {
        text: "Psalm 7:12 stands at a pivot in the psalm. The two verses just before it speak of God directing the just and saving the upright of heart; the two verses immediately after turn sharply toward judgment: \"Except you will be converted, he will brandish his sword; he hath bent his bow, and made it ready.\" The single verse this alleluia draws on holds the balance between those poles, posing the question of God's anger as the hinge between his mercy toward the just and his readiness against the unrepentant.",
        source: "Ps. 7:12 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Sperent in te omnes",
      latin: "Sperent in te omnes, qui novérunt nomen tuum, Dómine : quóniam non derelínquis quaeréntes te : psállite Dómino, qui hábitat in Sion : quóniam non est oblítus oratiónem páuperum.",
      translation: "Let all who know your name trust in you, O Lord: for you do not forsake them that seek you: sing to the Lord, who dwells in Sion: for he has not forgotten the prayer of the poor.",
      mode: "Offertory · Ordinary Time · Mode III",
      reference: "Ps. 9:11-13",
      gabc: "(c4) SPe(gh/jij)rent(i) in(ij~) te(i.) *(,) o(ikj)mnes,(i./jjj) qui(h) no(ghg)vé(h)runt(hi/jhhg.) (,) no(gh/jij)men(j) tu(j_h/k_[hl:1]j)um,(j) Dó(i)mi(ikJ'I)ne :(i.) (:) quó(g)ni(hih)am(hi) non(gh'j) de(jjjvIH)re(ghG'F)lín(gh)quis(ghggf.0) (,) quae(g)rén(gh/jij)tes(g./h!iw!jvIHivHG'h) te :(hg..) (:) psál(gh'/ji~)li(jjj)te(h) Dó(j.h!iwj)mi(ghGF'g)no,(gf..) (;) qui(g) há(gh/i.h!iw!jvI'HG')bi(g)tat(gh/i.h!iw!jvI'HG.) (,) in(g.h!iw!jvIH) Si(f_[oh:h]g_[oh:h]f_[oh:h])on :(fff) (:) quó(e[ll:1]d)ni(g)am(g) non(gh/ihi) est(g_[uh:l]h) ob(f)lí(efghgh)tus(fdf.) (,) o(c)ra(d)ti(f)ó(f_eg//hhj)nem(gh) páu(e)pe(egF'E)rum.(e.) (::)",
      source: "Graduale Romanum (GregoBase #1328)",
      blurb: {
        text: "Sperent in te omnes draws from three consecutive verses of Psalm 9, but reshapes them by omission and one substitution. From verse 12, it sets aside the call to proclaim God's deeds among the nations. From verse 13, it keeps only the closing phrase, leaving behind \"requirens sanguinem eorum recordatus est.\" In that same closing phrase, the psalm's \"clamorem pauperum\" becomes \"oratiónem páuperum,\" quietly turning the poor man's cry into his prayer.",
        source: "Ps. 9:11-13 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Ego clamavi",
      latin: "Ego clamávi, quóniam exaudísti me, Deus : inclína aurem tuam, et exáudi verba mea.",
      translation: "I have cried, for you, O God, have heard me: incline your ear unto me, and hear my words.",
      mode: "Communion · Ordinary Time · Mode VIII",
      reference: "Ps. 17:6",
      gabc: "(c4) E(fg)go(gh) cla(h)má(hfg)vi,(ge/fd.) (;) * quó(fg)ni(g)am(gh) ex(g)au(hi~)dí(iij)sti(hk) me(k) De(ij)us :(ih..) (:) in(j)clí([oll:1{0]jl)na(klk[oll:}]) au(ji~)rem(j) tu(klK'J)am,(jh__) (;) et(ji) ex(j)áu(k_[hl:1]i/jk~)di(h_g) (,) ver(fvE'D//geg)ba(g) me(ghg___)a.(g.) (::)",
      source: "Graduale Romanum (GregoBase #464)",
      blurb: {
        text: "Ego clamavi draws a single verse from Psalm 17, the prayer of a just man in distress. The chant text follows Vulgate Psalm 17:6 closely but omits one word: where the Vulgate reads \"inclina aurem tuam mihi,\" incline your ear to me, the chant has \"inclina aurem tuam,\" without the \"mihi.\" The surrounding verses of the psalm, which speak of keeping hard ways and asking God to perfect one's steps, do not enter the chant.",
        source: "Ps. 17:6 (Vulgate numbering Ps. 16:6) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "ot-9-a": {
    gradual: {
      title: "Esto mihi in Deum protectorem",
      latin: "Esto mihi in Deum protectórem, et in locum refúgii, ut salvum me fácias. ℣. Deus, in te sperávi : Dómine, non confúndar in aetérnum.",
      translation: "Be unto me a God, a protector, and a place of refuge, to save me. ℣. O God, in you have I hoped: O Lord, let me never be confounded.",
      mode: "Gradual · Ordinary Time (Year A) · Mode V",
      reference: "Ps. 31:3",
      gabc: "(c4) E(ffg)sto(f) mi(fg)hi(f.) *(,) in(fg) De(gf)um(f) pro(ghgh)te(hgffd/ff//fg'h)ctó(gv.fgf)rem,(fv.) (,) (d!ff/ge'/fgd'/e[ll:1]ddc.) (:) et(fg) in(f) lo(ghghvGF)cum(g.) (,) re(g.h!iwji/jkj)fú(hvGF)gi(hg)i,(gv.d!f'g/fh!jvGF'fd) (,) (ff/ge'/fgd'/e[ll:1]ddc.) (:) ut(d) sal(fd/fff)vum(c_[ll:1]d) me(ff) (,) fá(ixhhg/hh//gh!ivGFhh//f!h'j)ci(j)as.(iyjkijh.) (,) (fg/h!jj/klijh.0ixgiHF.1) (z0::c3) ℣. De(d)us,(d) in(f) te(fh/ih/ijh) spe(h)rá(h)vi :(hhi.) (,) Dó(i_[oh:h]h)mi(h_g)ne,(hhf//hhf//hihh/fgf.) (:) non(hh) con(h)fún(ih/ij_hih/ij_ij//hi/jij)dar(jh/jkihh/fgf.) *(;) in(de'f) ae(f)tér(fhG'Fhhh)num.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #886)",
      blurb: {
        text: "Esto mihi in Deum protectorem draws its words from Psalm 31:3, but with one quiet alteration: where the psalm reads \"et in domum refugii\" (a house of refuge), the chant replaces \"domum\" with \"locum,\" making it \"a place of refuge.\" In the older Roman Rite, the same words serve as the Introit for the Sunday before Ash Wednesday, which takes its popular name, Estomihi, directly from this opening phrase.",
        source: "Ps. 31:3 (Vulgate numbering Ps. 30:3) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Quinquagesima\" (rev. 1345212571)",
      },
    },
  },
  "ot-9-b": {
    gradual: {
      title: "Jacta cogitatum tuum",
      latin: "Jacta cogitátum tuum in Dómino, et ipse te enútriet. ℣. Dum clamárem ad Dóminum, exaudívit vocem meam ab his qui appropínquant mihi.",
      translation: "Cast your care upon the Lord, and he shall sustain you. ℣. When I cried to the Lord, he heard my voice, from them that draw near to me.",
      mode: "Gradual · Ordinary Time (Years B & C) · Mode VII",
      reference: "Ps. 55:23, 17, 19",
      gabc: "(c3) JA(ehf)cta(efED.) *(,) co(e)gi(fh)tá(h)tum(hf~) tu(hi!kkvI'G//ijhhg)um(h.) (,) in(h) Dó(hi/jk)mi(j)no,(i.) (;) et(h) i(i)pse(h) te(h_g/h_g/hjIG'hvF'Effe/ff) (,) (ef!hhhfhvvGF'he//fvEDe[ll:1]d..) (;) e(e.f!gwh!ivH//E.f'/gef)nú(cd)tri(e)et.(e./ih/ie..) (,) (igijkIG.hig'hvF'Ef_gffe.) (::) ℣. Dum(e) cla(hh)má(hi)rem(hh/ig'/hiffe.) (,) ad(eh) Dó(hi)mi(i)num,(ijI'H[oll:0;0.94cm]/l_k//jlkk/iji.) (:) ex(f)au(hh)dí(hi)vit(hh/ig'/hiffe.) (,) vo(hh)cem(h) me(hv.gh/ih/ij)am(i.) (;) ab(i) his(ikjikJI'ig//hih/iffe.) (;) qui(ef) ap(e)pro(ef)pín(e)quant(ef'h) *() mi(hv.gh/ihi)hi.(ie..) (,) (igijki./jkJ'Ijh/iig./hig'hvFEfde.) (,) (hhvF'EfvD[ull:0]B.1e!hf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #423)",
      blurb: {
        text: "Psalm 55 tells the troubled speaker to cast every care upon the Lord, who will sustain the just. Its other verses remember a cry to God and redemption in peace from those who draw near.",
        source: "Ps. 55:23, 17, 19 (Vulgate numbering Ps. 54:23, 17, 19) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent03-0r.txt [Officium heading]; Divinum Officium, Pent03-0r (Missale Romanum formulary)",
      },
    },
  },
  "ot-9-c": {
    gradual: {
      title: "Jacta cogitatum tuum",
      latin: "Jacta cogitátum tuum in Dómino, et ipse te enútriet. ℣. Dum clamárem ad Dóminum, exaudívit vocem meam ab his qui appropínquant mihi.",
      translation: "Cast your care upon the Lord, and he shall sustain you. ℣. When I cried to the Lord, he heard my voice, from them that draw near to me.",
      mode: "Gradual · Ordinary Time (Years B & C) · Mode VII",
      reference: "Ps. 55:23, 17, 19",
      gabc: "(c3) JA(ehf)cta(efED.) *(,) co(e)gi(fh)tá(h)tum(hf~) tu(hi!kkvI'G//ijhhg)um(h.) (,) in(h) Dó(hi/jk)mi(j)no,(i.) (;) et(h) i(i)pse(h) te(h_g/h_g/hjIG'hvF'Effe/ff) (,) (ef!hhhfhvvGF'he//fvEDe[ll:1]d..) (;) e(e.f!gwh!ivH//E.f'/gef)nú(cd)tri(e)et.(e./ih/ie..) (,) (igijkIG.hig'hvF'Ef_gffe.) (::) ℣. Dum(e) cla(hh)má(hi)rem(hh/ig'/hiffe.) (,) ad(eh) Dó(hi)mi(i)num,(ijI'H[oll:0;0.94cm]/l_k//jlkk/iji.) (:) ex(f)au(hh)dí(hi)vit(hh/ig'/hiffe.) (,) vo(hh)cem(h) me(hv.gh/ih/ij)am(i.) (;) ab(i) his(ikjikJI'ig//hih/iffe.) (;) qui(ef) ap(e)pro(ef)pín(e)quant(ef'h) *() mi(hv.gh/ihi)hi.(ie..) (,) (igijki./jkJ'Ijh/iig./hig'hvFEfde.) (,) (hhvF'EfvD[ull:0]B.1e!hf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #423)",
      blurb: {
        text: "Psalm 55 tells the troubled speaker to cast every care upon the Lord, who will sustain the just. Its other verses remember a cry to God and redemption in peace from those who draw near.",
        source: "Ps. 55:23, 17, 19 (Vulgate numbering Ps. 54:23, 17, 19) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent03-0r.txt [Officium heading]; Divinum Officium, Pent03-0r (Missale Romanum formulary)",
      },
    },
  },
  /* ---- 10th Sunday in Ordinary Time ---- */
  "ot-10": {
    alleluia: {
      title: "Deus qui sedes super thronum",
      latin: "Allelúia. ℣. Deus, qui sedes super thronum, et júdicas aequitátem : esto refúgium páuperum in tribulatióne.",
      translation: "Alleluia. ℣. O God, who sit upon the throne, and judge justice: be a refuge for the poor in tribulation.",
      mode: "Alleluia · Ordinary Time · Mode VII",
      reference: "Ps. 9:5, 10",
      gabc: "(c3) AL(e)le(e)lú(ef/hf/h_f//h!jhi){ia}.(i.) *(;) ij.(h!iwj!kvJI'Hi.//gi!jvIH.ghFE.) (,) (ghi!jvIH.ghF'Ef_gffe.) (::) ℣. De(ef/hf/h_f//h!jhi)us,(i.) (,) qui(ei) se(ij//hk/jki/jji)des(i.) (,) su(i)per(gh'i) thro(i/jg/h_i//ji/jg/h_i)(,)(kkh/jijvHF'gwh!iv.giH'GE)(,)(f!hgh./fh//ghF'Dev.)(;)(i_[uh:l]jI'//Ef_e//f!gwh!iv.h/kki)(,)([oh:{]k_j/l_[oh:}]klvKI.//kjkvIH'iwj)num,(ijhivHGhg..) (;) et(fi) jú(i!jwk)di(ih)cas(h) ae(h)qui(hi)tá(ihivHF.ihi)tem :(ijhivHGhg..) (:) e(gh!ij)sto(i) re(i)fú(hi)gi(i)um(i.) páu(ijH'Gh)pe(f!gw!hvG'FE'f)rum(fe..) *(;) in(e) tri(ef)bu(e)la(e)ti(e)ó(ef/hf/h_f//h!jhi)ne.(i.) (;) (h!iwj!kvJI'Hi.//gi!jvIH.ghFE.) (,) (ghi!jvIH.ghF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #727)",
      blurb: {
        text: "Deus qui sedes super thronum praises the God who judges with justice and becomes a refuge for the poor in tribulation. The Alleluia turns divine judgment into shelter for those who call upon him.",
        source: "Ps. 9:5, 10 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Illumina oculos meos",
      latin: "Illúmina óculos meos, ne umquam obdórmiam in morte : ne quando dicat inimícus meus : Praeválui advérsus eum.",
      translation: "Enlighten my eyes, that I never sleep in death: lest at any time my enemy say: I have prevailed against him.",
      mode: "Offertory · Ordinary Time · Mode IV",
      reference: "Ps. 13:4-5",
      gabc: "(c4) IL(ff)lú(fhg'/hf)mi(dgF'E)na(e.) *(,) ó(g_[oh:h]e)cu(ghg)los(h) me(ixhv.gih'ivG'Ff'g!hiH'Gih)os,(h.) (;) ne(jj)quán(gh)do(ff) ob(e)dór(ge/ghg)mi(gffvED)am(e_[oh:h][ll:1]d_[oh:h]) (,) in(fh~) mor(h_g/jjjvG'E//g_[oh:h]f/ghG'FgvFE)te :(e.) (:) ne(ef!ghg)quán(gh)do(ghG'F) di(gh)cat(h/jjjvIH.) (,) in(h)i(ghg)mí(h/jjjvIH)cus(g_[uh:l]h) me(egF'E)us :(fff) (;) Prae(dec)vá(fv.fff)lu(dc)i([ull:1{0]cccc_[oh:h]a_[oh:h][ull:}]) (;) ad(c@f!de~)vér(eef)sus(d!ewf) e(fff/ghG'//D//fffhvGFgvFE)um.(e.) (::)",
      source: "Graduale Romanum (GregoBase #708)",
      blurb: {
        text: "Illumina oculos meos draws from Psalm 13, verses 4 and 5, but trims both ends. The opening of verse 4, \"Consider, and hear me, O Lord, my God,\" is dropped, and the text begins directly with the petition for light. The closing of verse 5 is also set aside, for the full verse continues \"They that trouble me, will rejoice when I am moved,\" yet the chant stops after \"I have prevailed against him,\" leaving the enemy's boast as the last thing heard before the prayer is implied to answer it.",
        source: "Ps. 13:4-5 (Vulgate numbering Ps. 12:4-5) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "ot-10-a": {
    gradual: {
      title: "Propitius esto Domine",
      latin: "Propítius esto, Dómine, peccátis nostris : ne quando dicant gentes : Ubi est Deus eórum? ℣. Adjuva nos, Deus salutáris noster : et propter honórem nóminis tui, Dómine, líbera nos.",
      translation: "Forgive us our sins, O Lord: lest the Gentiles should at any time say: Where is their God? ℣. Help us, O God our Saviour: and for the honor of your name, O Lord, deliver us.",
      mode: "Gradual · Ordinary Time (Years A & C) · Mode V",
      reference: "Ps. 79:9, 10",
      gabc: "(c4) PRo(d)pí(ffg)ti(f)us(f) e(ghgh)sto(gv.fgFD.1) (,) * Dó(dgf/gh)mi(g)ne(ixg./hiGF'fd/f_[oh:h]g_[oh:h]f._[oh:h]) (;) pec(f)cá(ghghjkj)tis(ixhiH'G) no(ixhjg___!hwihi)stris :(ih..) (:) ne(f) quan(hg~)do(gj) di(hhg)cant(gh) gen(hg/hfg)tes :(fv.e!g'h/fg!hvF'EDef!gvgf.0) (:) U(ixf!hhi)bi(g) est(gjj) De(j)us(j) e(ixj.h!iw!jvIG'hw!ivHG)ó(fgf)rum?(f!h'j) (,) (fh'!jvjv'1IGfhg/hggf.0) (z0::c3) ℣. Ad(d)ju(d)va(f) nos,(gxg) De(h)us(h.) sa(h)lu(h)tá(h)ris(h) no(h)ster :(ihhe./h_[oh:h]i_[oh:h]h_[oh:h]/!ihhe.) (,) (hi!kv//lvKI'jvHF.1) (,) (h_g/ijh'___jvIH'jvIH'hvGF.) (:) et(hh) pro(h)pter(h) ho(h)nó(ih/ij_hih/ij_ij//hi/jij)rem(jh/jkihh/fgf.) (;) nó(d)mi(d)nis(d) tu(d)i(d) Dó(d)mi(d)ne,(d.) (,) * lí(dfE'D)be(ef)ra(fhG'Fhhh) nos.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #332)",
      blurb: {
        text: "Psalm 79 joins the prayer for forgiveness to a request for help from God the Saviour. Its next verse remembers the nations' question about God and asks that the blood of God's servants be known before them.",
        source: "Ps. 79:9, 10 (Vulgate numbering Ps. 78:9, 10) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent04-0.txt [Officium heading]; Divinum Officium, Pent04-0 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Dominus firmamentum meum",
      latin: "Dóminus firmaméntum meum, et refúgium meum, et liberátor meus : Deus meus adjútor meus.",
      translation: "The Lord is my firmament, and my refuge, and my deliverer: my God is my helper.",
      mode: "Communion · Ordinary Time (Years A & C) · Mode II",
      reference: "Ps. 18:3",
      gabc: "(f3) DO(h)mi(gh)nus(fhe.) *(,) fir(hg~)ma(hi)mén(iih)tum(f/hhe/gf) me(f_[oh:h]g_[oh:h]f_[oh:h])um,(f.) (;) et(e) re(f)fú(f!gwh)gi(e)um(ec~) me(ef!hvGF)um,(f!gwh.) (;) et(hf~) li(hih)be(iji)rá(jji)tor(hi) me(hiih)us :(h.) (:) De(j)us(ij) me(hvGF)us(fhffe.) (;) ad(gh'i~)jú(iih)tor(f/hhe/gf) me(f_[oh:h]g_[oh:h]f_[oh:h])us.(f.) (::)",
      source: "Graduale Romanum (GregoBase #512)",
      blurb: {
        text: "Psalm 18, verse 3 runs in full: \"The Lord is my firmament, my refuge, and my deliverer. My God is my helper, and in him will I put my trust. My protector, and the horn of my salvation, and my support\" are the words that close the verse. The Communion antiphon takes only the first two clauses, stopping at \"my God is my helper\" and setting aside the pledge of trust, the protector, the horn of salvation, and the support. What remains is the simplest statement of dependence, the bare naming of what God is, without the response that follows.",
        source: "Ps. 18:3 (Vulgate numbering Ps. 17:3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "ot-10-b": {
    gradual: {
      title: "Exaltabo te Domine",
      latin: "Exaltábo te, Dómine, quóniam suscepísti me : nec delectásti inimícos meos super me. ℣. Dómine Deus meus, clamávi ad te, et sanásti me : Dómine, abstraxísti ab ínferis ánimam meam, salvásti me a descendéntibus in lacum.",
      translation: "I will extol you, O Lord, for you have upheld me: and have not made my enemies to rejoice over me. ℣. O Lord my God, I have cried to you, and you have healed me: O Lord, you have brought forth my soul from hell, you have saved me from them that go down into the pit.",
      mode: "Gradual · Ordinary Time (Year B) · Mode III",
      reference: "Ps. 30:2-4",
      gabc: "(c4) EX(f)al(ffff_c~)tá(d!ewf_e)bo(f) te,(fffd/fff) (,) * Dó(e.f!gwh_g)mi(hg)ne,(ixg_[uh:l]h//e.f!gw!higff/ded.) (;) quó(f.d!ewfe)ni(e)am(ege/ghgff/ded.) (,) sus(g)ce(hih)pí(j)sti(jh/jj//jj/khhg.) me :(ig/h!jjjh/klJ'IHjvIH) (,) (jj/ki'jvHG'jh'/ihhg.) (:) nec(gj) de(jkjji)le(jjj_h)ctá(h!jj)sti(jjjvH'G) (;) in(h_g/h!iwj)i(h_g/h!iwj)mí(hvGF'gwh)cos(ghg) me(ghG'Fgh!jjjh)(,)(k_[hl:1]j//kvJHgjh/ij)os(i.) (;) su(jk)per(kijvH'GF.h!iwj'!kv) me.(i_[oh:h]g//ivHGhhf/hh) (,) (g!jj//jj//jjjvH'GF'/[-0.5]{ix}E0f_h//ivGFghg/hgge.) (::) ℣. Dó(e[ll:1]d)mi(g)ne(hi) De(iij)us(h) me(h!jj//jjjvHGigh)us,(h.) (,) (i_j_i_2/j_[hl:1]k_[hl:1]i'_[hl:1]//kvJ'IHjvIH) (,) (jj/ki'jvHG'jh'/ihhg.) (:) cla(dg)má(gh'j)vi(j) ad(j) te,(i_[oh:h]g) (,) et(h) sa(j)ná(iki/jk_[hl:1]j//ki/jk_[hl:1]jk//ij/kjkkj)sti(j_i) me :(jh) (,) (jjjvHG'h!jjjvHGhh//gjh/ihhg.) (:) Dó(ij//j'jjvH'Gh!iwj_i)(,)(e!gh/jij//h!jj//jjjvH'Gh!iwj)mi(jjjvHG'h)ne,(hv.giHG'hffe.) (:) ab(ef)stra(dge)xí(gh//g.h!iwj)sti(jjjvH'G) (,) ab(hggf) ín(jj)fe(kjjvIH)ris(h_g//ivHG'hffe.) (;) á(ef)ni(dg)mam(g) me(hg/h!jjjhhg)am,(g.) (:) sal(dg)vá(gh'j)sti(j) me(jj//jjjh/ijHG.) (,) (jj//jjjh/!ijHG.) (,) (jj/kh/jjk/jk/ljjj'1h/ijHG.) (,) (jgjvvIH//jhjvIHjh/ihhg.) (:) a(g) de(g)scen(g)dén(ghG'Fgh/jjjhk)ti(jkJHgjh/ij)bus(i.) *(,) in(jk) la(kijvH'GF.h!iwj'!kv)cum.(i_[oh:h]g//ivHGhhf/hh) (,) (g!jj//jj//jjjvH'GF'E/!f_h/!/!ixivGFghg/hgge.) (::)",
      source: "Graduale Romanum (GregoBase #277)",
      blurb: {
        text: "Psalm 30 gives thanks to the Lord for being upheld and moves from a cry for healing to rescue from the pit. This Ordinary Time Gradual holds the three verses together as a prayer of deliverance.",
        source: "Ps. 30:2-4 (Vulgate numbering Ps. 29:2-4) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Quicumque fecerit",
      latin: "Quicúmque fécerit voluntátem Patris mei, qui in caelis est : ipse meus frater, soror, et mater est, dicit Dóminus.",
      translation: "Whoever shall do the will of my Father, who is in heaven: he is my brother, and sister, and mother, says the Lord.",
      mode: "Communion · Ordinary Time (Year B) · Mode I",
      reference: "Matt. 12:50",
      gabc: "(c4) QUi(d)cúm(f)que(fe) fé(fg)ce(efED'e)rit(e[ll:1]d..) *(,) vo(f)lun(hg~)tá(ixhi)tem(hg~) Pa(ixgi)tris(hi) me(g)i,(ghgg/efe.) (,) qui(g) in(ge~) cae(gh)lis(gh) est :(g.) (:) i(h)pse(ghg') me(h)us(fgf') fra(g)ter,(gd~) so(f)ror,(f.) (,) et(f) ma(fe/f_g)ter(d!ew!fvE'DC'd) est,(dc..) (;) di(f_e/ggh)cit(f.e!fwgffe) Dó(d)mi(de!fvED'e)nus.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #957)",
      blurb: {
        text: "Quicumque fecerit draws on a single verse, the closing line of an exchange in Matthew 12 where Jesus is told his mother and brothers are standing outside. The two verses immediately before it show him stretching his hand toward his disciples and saying, in the Douay-Rheims rendering, \"Behold my mother and my brethren.\" Verse 50, which the chant quotes, is the explanation of that gesture, and the Vulgate opens it with \"enim,\" meaning \"for\" or \"because,\" a connective word the chant sets aside as it lifts the verse free of its narrative frame.",
        source: "Matt. 12:50 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  "ot-10-c": {
    gradual: {
      title: "Propitius esto Domine",
      latin: "Propítius esto, Dómine, peccátis nostris : ne quando dicant gentes : Ubi est Deus eórum? ℣. Adjuva nos, Deus salutáris noster : et propter honórem nóminis tui, Dómine, líbera nos.",
      translation: "Forgive us our sins, O Lord: lest the Gentiles should at any time say: Where is their God? ℣. Help us, O God our Saviour: and for the honor of your name, O Lord, deliver us.",
      mode: "Gradual · Ordinary Time (Years A & C) · Mode V",
      reference: "Ps. 79:9, 10",
      gabc: "(c4) PRo(d)pí(ffg)ti(f)us(f) e(ghgh)sto(gv.fgFD.1) (,) * Dó(dgf/gh)mi(g)ne(ixg./hiGF'fd/f_[oh:h]g_[oh:h]f._[oh:h]) (;) pec(f)cá(ghghjkj)tis(ixhiH'G) no(ixhjg___!hwihi)stris :(ih..) (:) ne(f) quan(hg~)do(gj) di(hhg)cant(gh) gen(hg/hfg)tes :(fv.e!g'h/fg!hvF'EDef!gvgf.0) (:) U(ixf!hhi)bi(g) est(gjj) De(j)us(j) e(ixj.h!iw!jvIG'hw!ivHG)ó(fgf)rum?(f!h'j) (,) (fh'!jvjv'1IGfhg/hggf.0) (z0::c3) ℣. Ad(d)ju(d)va(f) nos,(gxg) De(h)us(h.) sa(h)lu(h)tá(h)ris(h) no(h)ster :(ihhe./h_[oh:h]i_[oh:h]h_[oh:h]/!ihhe.) (,) (hi!kv//lvKI'jvHF.1) (,) (h_g/ijh'___jvIH'jvIH'hvGF.) (:) et(hh) pro(h)pter(h) ho(h)nó(ih/ij_hih/ij_ij//hi/jij)rem(jh/jkihh/fgf.) (;) nó(d)mi(d)nis(d) tu(d)i(d) Dó(d)mi(d)ne,(d.) (,) * lí(dfE'D)be(ef)ra(fhG'Fhhh) nos.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #332)",
      blurb: {
        text: "Psalm 79 joins the prayer for forgiveness to a request for help from God the Saviour. Its next verse remembers the nations' question about God and asks that the blood of God's servants be known before them.",
        source: "Ps. 79:9, 10 (Vulgate numbering Ps. 78:9, 10) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent04-0.txt [Officium heading]; Divinum Officium, Pent04-0 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Dominus firmamentum meum",
      latin: "Dóminus firmaméntum meum, et refúgium meum, et liberátor meus : Deus meus adjútor meus.",
      translation: "The Lord is my firmament, and my refuge, and my deliverer: my God is my helper.",
      mode: "Communion · Ordinary Time (Years A & C) · Mode II",
      reference: "Ps. 18:3",
      gabc: "(f3) DO(h)mi(gh)nus(fhe.) *(,) fir(hg~)ma(hi)mén(iih)tum(f/hhe/gf) me(f_[oh:h]g_[oh:h]f_[oh:h])um,(f.) (;) et(e) re(f)fú(f!gwh)gi(e)um(ec~) me(ef!hvGF)um,(f!gwh.) (;) et(hf~) li(hih)be(iji)rá(jji)tor(hi) me(hiih)us :(h.) (:) De(j)us(ij) me(hvGF)us(fhffe.) (;) ad(gh'i~)jú(iih)tor(f/hhe/gf) me(f_[oh:h]g_[oh:h]f_[oh:h])us.(f.) (::)",
      source: "Graduale Romanum (GregoBase #512)",
      blurb: {
        text: "Psalm 18, verse 3 runs in full: \"The Lord is my firmament, my refuge, and my deliverer. My God is my helper, and in him will I put my trust. My protector, and the horn of my salvation, and my support\" are the words that close the verse. The Communion antiphon takes only the first two clauses, stopping at \"my God is my helper\" and setting aside the pledge of trust, the protector, the horn of salvation, and the support. What remains is the simplest statement of dependence, the bare naming of what God is, without the response that follows.",
        source: "Ps. 18:3 (Vulgate numbering Ps. 17:3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },
  /* ---- 11th Sunday in Ordinary Time ---- */
  "ot-11": {
    gradual: {
      title: "Protector noster aspice",
      latin: "Protéctor noster áspice, Deus, et réspice super servos tuos. ℣. Dómine Deus virtútum, exáudi preces servórum tuórum.",
      translation: "Behold, O God our protector: and look upon your servants. ℣. O Lord God of hosts, hear the prayers of your servants.",
      mode: "Gradual · Ordinary Time · Mode V",
      reference: "Ps. 84:10, 9",
      gabc: "(c4) PR{o}(d)té(ff)ctor(f) no(fgf//f'f)ster(f_d//fge'/fgd'/e[ll:1]ddc.) *(;) á(hf/gh!jj/kjk)spi(jij)ce(h_g) De(h/jjvHF.1hvGFgf)us,(f.) (:) et(f) ré(ghghjkj)spi(ixh_[oh:h]i_[oh:h]g_[oh:h]!iw!jvIH'i)ce(ih..) (;) su(jk)per(j_h~) ser(ixjhi)vos(gh) tu(gf)os.(ixffh//giHF.1) (,) (fhg___jv.jjjhh//fhg/hggf.0) (z0::c3) ℣. Dó(d)mi(d)ne(fe) De(eh)us(h) vir(h)tú(h)tum,(ihh'hfhv.ijh.1) (,) (hv.ijIH.ijHF.ghFD.1) (,) (fdfED//fd/ef!hh/ig/hf/hi!kkkh..) (:) ex(f)áu(hi!jvIH'/!hf/hhhi~)di(h.) (,) pre(gxfgFE.fgFD.1fvEDe[ll:1]d)ces(d.) (;) ser(d)vó(dfE'D)rum(ef) *() tu(h)ó(hiH'Fhhh)rum.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #1226)",
      blurb: {
        text: "Protector noster aspice Deus draws on two consecutive verses of Psalm 84, but reverses their order. Verse 10 becomes the respond and verse 9 becomes the versicle, and in both cases the text is adjusted: the singular \"orationem meam\" becomes the plural \"preces servorum tuorum,\" and the psalm's \"respice in faciem christi tui\" becomes \"respice super servos tuos.\" The prayer that arrives at the altar is no longer one voice but many.",
        source: "Ps. 84:10, 9 (Vulgate numbering Ps. 83:10, 9) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Domine in virtute tua",
      latin: "Allelúia. ℣. Dómine, in virtúte tua laetábitur rex : et super salutáre tuum exsultábit veheménter.",
      translation: "Alleluia. ℣. In your strength, O Lord, the king shall rejoice: and in your salvation he shall exult exceedingly.",
      mode: "Alleluia · Ordinary Time · Mode VI",
      reference: "Ps. 21:1",
      gabc: "(c4) AL(d)le(ff)lú(ixfgfivHG'h){ia}.(hv.fgf//ivGFhhf.) *(,) ij.(dfe___gvFD'dc//ffc.) (,) (f_0!h_0g_0j._0/!jjj//kjjh./fhg/hggf.0) (::) ℣. Dó(ff)mi(ixfgfivHG'h)ne,(hv.fgf//ivGFhhf.) (;) in(f!h'j) vir(ixjjvIG')tú(ixg/jjj//kjjhi)te(i_[oh:h]h) tu(fghjhhgh)a(hvGF.) (;) lae(f)tá(f!hgh//fgFD.cd/fd//cd!ff)(,)(ixg.h!iw!jvIH)bi(ghf)tur(ixf!gwh!ivHGhih~) rex :(h.) (:) et(ixf!gwhghjjjvIH'G//jjjvIG'Fhv.) (,) (ixf!gwhghjjjvIH'G//jjjvIG'Fhv.//ixfgf/ih) su(ghf)per(f.) (,) sa(df)lu(fgf)tá(fv.efd)re(cf) tu(df/hghv_GF)um(f.) (;) ex(d)sul(ff)tá(ixfgfivHG'h)bit(ixhv.fgf//ivGFhhf.) *(,) ve(dfe___gvFD'dc)he(ffc)mén(ixf_0!h_0g_0j._0/!jjj//kjjhi)ter.(hv.fhg/hggf.0) (::)",
      source: "Graduale Romanum (GregoBase #797)",
      blurb: {
        text: "Domine in virtute tua is the Latin incipit by which Psalm 21 is traditionally known, so the alleluia verse and the psalm it draws from share the same name. The psalm is attributed to David and is characterized as a psalm of thanksgiving. The Jerusalem Bible identifies messianic themes within it and commends its application to the idea of \"Christ the King\", so the king whose rejoicing this verse sings carries a weight beyond any earthly ruler.",
        source: "Wikipedia, \"Psalm 21\" (rev. 1327827403)",
      },
    },
    offertory: {
      title: "Benedicam Dominum",
      latin: "Benedícam Dóminum, qui mihi tríbuit intelléctum : providébam Deum in conspéctu meo semper : quóniam a dextris est mihi, ne commóvear.",
      translation: "I will bless the Lord, who has given me understanding: I set the Lord always in my sight: for he is at my right hand, that I be not moved.",
      mode: "Offertory · Ordinary Time · Mode I",
      reference: "Ps. 16:7, 8",
      gabc: "(c4) BE(c)ne(d)dí(ixdh'!iv)cam(hg~) Dó(h!jjj_h)mi(hg)num,(h.) *(;) qui(f) mi(g.h!iwj_h)hi(h) trí(h)bu(hgh)it(fg!hvhg.) (,) in(f)tel(ghg~)lé(h/jjjvG'F//h_g/hjh___!iwj_h)ctum :(h.) (:) pro(f)vi(g)dé(h)bam(j) De(jkJ'H)um(h.) (;) in(f) con(gh)spé(h_fh)ctu(h) me(gh!jjjggf)o(f.) sem(ixh_g/ihhf~)per :(gf..) (:) quó(fh)ni(h!iwji)am(ijh'ivG'Fg.) (,) a(f!gwhg) dex(h_f/g_[oh:h]f/hjh___!iwj)tris(g) est(f) mi(d!ew!fvED'e)hi,(dc..) (;) ne(d) com(fe~)mó(f_d//gf/gffd//g_[oh:h]f//hvGF)(,)(fff/gf/gffe)ve(de!fvED'e)ar.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #143)",
      blurb: {
        text: "Benedicam Dominum draws from two consecutive verses of Psalm 16, but drops the second half of verse 7. The full verse reads, in the Douay-Rheims, \"I will bless the Lord, who hath given me understanding: moreover, my reins also have corrected me even till night\"; the offertory takes only the first clause, then moves directly into verse 8. The omitted phrase, about the inmost being offering correction through the night, falls away, and the two remaining thoughts, blessing God for understanding and keeping God always in sight, join into a single, uninterrupted act of trust.",
        source: "Ps. 16:7, 8 (Vulgate numbering Ps. 15:7, 8) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Unam petii a Domino",
      latin: "Unam pétii a Dómino, hanc requíram : ut inhábitem in domo Dómini ómnibus diébus vitae meae.",
      translation: "One thing I have asked of the Lord, this will I seek after: that I may dwell in the house of the Lord all the days of my life.",
      mode: "Communion · Ordinary Time · Mode VII",
      reference: "Ps. 27:4",
      gabc: "(c3) U(i)nam(ig~) pé(ijij)ti(i)i(h.) *(,) a(fh) Dó(hgh)mi(fe)no,(e./fhe/fee[ll:1]d.0) (;) hanc(df!hv'1//i!kki) re(i.g!hw!ivH'GF'gw!hvGF)quí(ef!gvFE'f)ram :(fe..) (:) ut(h) in(ik)há(k)bi(jk)tem(i.) in(j) do(ijg)mo(h) Dó(jk)mi(j)ni(iji.) (;) ó(i)mni(h)bus(ghg) di(e)é(ghg)bus(fg'i~) (,) vi(i)tae(i.g!hw!ivH'GF'gw!hvGF) me(ef!gvFE'f)ae.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #574)",
      blurb: {
        text: "Unam petii a Domino asks one thing of the Lord: to dwell in his house all the days of life. The Communion gathers every desire into the prayer for lasting nearness to God.",
        source: "Ps. 27:4 (Vulgate numbering Ps. 26:4) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
  },

  /* ---- The Nativity of the Lord, Mass of the Day (puer-natus) ---------- */
  "puer-natus": {
    gradual: {
      title: "Viderunt omnes",
      latin: "Vidérunt omnes fines terræ salutáre Dei nostri : jubiláte Deo, omnis terra. ℣. Notum fecit Dóminus salutáre suum : ante conspéctum géntium revelávit justítiam suam.",
      translation: "All the ends of the earth have seen the salvation of our God: sing joyfully to God, all the earth. ℣. The Lord has made known his salvation: in the sight of the nations he has revealed his justice.",
      mode: "Gradual · The Nativity of the Lord (Mass of the Day) · Mode V",
      reference: "Ps. 98:3, 2",
      gabc: "(c3) VI(d)dé(d)runt(fh~) o(hiH'F//hhhjvIH)mnes(h.) *(,) fi(hi)nes(h_f) ter(hfhhf)rae(f/hhf/hg/hf..) (;) sa(f)lu(hg)tá(h_gi)re(ivHGh_f) (,) De(f_e/f!gwh/i_[oh:h]h)i(hg/ijk) no(i_[oh:h]h)stri :(hg/hf..) (:) ju(f)bi(hg)lá(h)te(hhh) De(fhee[ll:1]d)o(de!fhFD.1) (;) o(d!f'h/ijh)mnis(gxh.f!gw!hvGE'fw!gvFE) ter(ded)ra.(d!f'h//d!f'hhv'1GE//dfe/fee[ll:1]d.0) (::) ℣. No(d)tum(fe~) fe(eh)cit(hi~) Dó(ihhf/hiHG.hiFD.1)(,)(f/hhi/hhf/hiHG.hiFD.1)(,)(gxfg//e!g'h/ghghvFD.1)(,)(fdfED//fd/ef!hh/i!jwk)mi(ih)nus(hiHF.1) (;) sa(f)lu(hg)tá(hhf/hhf)re(f) su(fhf/hhf)um :(f.) (:) an(f)te(f) con(fi~)spé(i)ctum(hiH'F) gén(h.i!jwk)ti(ih)um(hiHF.1) (;) re(f!h'i/hhf)ve(f)lá(hfhhe/fd)vit(d.) *(,) ju(f)stí(f/hhfg)ti(ef)am(gxhf/ge) su(d)am.(cd/efe.) (,) (de!fhFE.gxde'f!hhe'gvFD.1) (::)",
      source: "Graduale Romanum (GregoBase #1163)",
      blurb: {
        text: "Verse 3 comes before verse 2, reversing the order in which Psalm 98 gives these lines. The Christmas Day Gradual therefore moves from the whole earth's vision of salvation back to the Lord's revelation before the nations.",
        source: "Ps. 98:3, 2 (Vulgate numbering Ps. 97:3, 2) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    alleluia: {
      title: "Dies sanctificatus",
      latin: "Allelúia. ℣. Dies sanctificátus illúxit nobis : veníte, gentes, et adoráte Dóminum : quia hódie descéndit lux magna super terram.",
      translation: "Alleluia. ℣. A hallowed day has dawned upon us: come, you nations, and adore the Lord: for today a great light has come down upon the earth.",
      mode: "Alleluia · The Nativity of the Lord (Mass of the Day) · Mode II",
      reference: "",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. Di(f_e/f!gwh'!iv//jiihi)es(iv.hh/fgf.) san(fg~)cti(f)fi(f)cá(fg)tus(f.) (,) il(f)lú(fg)xit(f) no(f!hh/ijHF'ivH'GEf./hfhhf/ge)bis :(e.) (:) ve(ffe/ffe/fc..)(,)(ef!hvvF'Ehhh)ní(hi)te(h) gen(hi~)tes,(h.) (,) et(h) ad(h)o(h)rá(h)te(ivH'Gh') Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])num :(f.) (:) qui(f)a(f) hó(f!h'i)di(jiihi)e(iv.hh/fgf.) (,) de(f)scén(fg~)dit(f) lux(f) ma(f!hh/ijHF'ivH'GEf./hfhhf/ge)gna(e.) (;) * su(hh)per(hi~) ter(i_[oh:h]h/jij)ram.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #324)",
      blurb: {
        text: "Giovanni Pierluigi da Palestrina set this same text as a four-voice motet, preserved in volume 5 of the Breitkopf & Härtel collected edition. The words sung here as plainchant are the words he chose for polyphonic elaboration.",
        source: "Wikipedia, \"List of compositions by Giovanni Pierluigi da Palestrina\" (rev. 1309884587)",
      },
    },
    offertory: {
      title: "Tui sunt caeli",
      latin: "Tui sunt cæli, et tua est terra : orbem terrárum, et plenitúdinem ejus tu fundásti : justítia et judícium præparátio sedis tuæ.",
      translation: "Yours are the heavens, and yours is the earth: the world and its fullness you have founded: justice and judgment are the preparation of your throne.",
      mode: "Offertory · The Nativity of the Lord (Mass of the Day) · Mode IV",
      reference: "Ps. 89:12, 15",
      gabc: "(c4) TU(f)I(ded) sunt(f) *() cae(e/fgF'EfvED)li,(fd/efe.) (;) et(fd~) tu(dfe)a(f) est(g_[oh:h]efvEDgvFE) ter(hvGFgvFE)ra :(e.) (:) or(d!g'h)bem(g) ter(fgffe)rá(egffe)rum,(fff) (;) et(dec) ple(dfe)ni(e)tú(e!gfg)di(d)nem(d.) (,) e(ff/gd/fffd/fffv_E~D~)jus(e[ll:1]d..) (,) tu(f!h'j) fun(gh)dá(egff)sti :(fe..) (:) ju(hg)stí(h_ghvGE//f!gwhgh//f!gwhgh)ti(f)a(eef.) (,) et(f.d!ewf) ju(f)dí(fffhvGF'D//gvFE'D)ci(d!ewf_d)um(d.) (;) prae(d)pa(ef)rá(gh)ti(g)o(ghGF.efED.) (,) se(fv.fffdgvFE)dis(g_[oh:h]f/hggf/ghg) tu(egff)ae.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1274)",
      blurb: {
        text: "Tui sunt caeli draws from two verses of Psalm 89, though not consecutive ones. Verse 12 supplies the opening lines about the heavens and the earth, and then verses 13 and 14 are set aside entirely, so the text jumps to verse 15. Even there the compiler stops midway: the psalm's verse 15 continues with \"mercy and truth shall go before your face,\" but that phrase is omitted, and the offertory closes on the image of God's throne prepared in justice and judgment.",
        source: "Ps. 89:12, 15 (Vulgate numbering Ps. 88:12, 15) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Viderunt omnes",
      latin: "Vidérunt omnes fines terræ salutáre Dei nostri.",
      translation: "All the ends of the earth have seen the salvation of our God.",
      mode: "Communion · The Nativity of the Lord (Mass of the Day) · Mode I",
      reference: "Ps. 98:3",
      gabc: "(c4) VI(fg)dé(gff)runt(de~) o(cd~)mnes(d.) *(,) fi(d!f'g)nes(gh) ter(hjjg)rae(g_[oh:h]fhvGE.) (;) sa(f)lu(ghg)tá(hv.fh!jvvH'GE'f)re(f.) (,) De(f_dfvECfhg___)i(ghF'Ef) no(d_[oh:h]e_[oh:h]d_[oh:h])stri.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1139)",
      blurb: {
        text: "Psalm 98 remembers God's mercy and truth toward Israel before declaring that all the ends of the earth have seen God's salvation. The Nativity of the Lord Communion lets that declaration speak at the Mass of the Day.",
        source: "Ps. 98:3 (Vulgate numbering Ps. 97:3) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Sancti-01-01 (Missale Romanum formulary)",
      },
    }
  },

  /* ---- 1st Sunday of Lent (lent-1) ------------------------------------- */
  "lent-1": {
    gradual: {
      title: "Angelis suis",
      latin: "Angelis suis mandávit de te, ut custódiant te in ómnibus viis tuis. ℣. In mánibus portábunt te, ne unquam offéndas ad lápidem pedem tuum.",
      translation: "He has given his angels charge over you, to keep you in all your ways. ℣. In their hands they shall bear you up, lest you dash your foot against a stone.",
      mode: "Gradual · 1st Sunday of Lent · Mode II",
      reference: "Ps. 91:11-12",
      gabc: "(c3) AN(egf)ge(f)lis(f.) *() su(hfghvF'Ege/fg)is(f.) (;) man(f)dá(hf/hi'j)vit(gxhffe!gvFE.) (`) de(e) te,(e[ll:1]d/feffd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) ut(hh) cu(h)stó(h)di(h)ant(hg/hi!jvHGhhg) (,) (i_[oh:h]hivHF) te(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) in(d) ó(de'f)mni(f)bus(f.0/[-0.5]hvGF'g) vi(e)is(f) tu(hf/h_i)is.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. In(f) má(h)ni(hi)bus(i) por(ij~)tá(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI)bunt(ji~) te,(i.) (:) ne(i) un(k.i!jw!kvJI')quam(i) of(ij)fén(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)das(f.) (:) ad(d) lá(de'f)pi(f)dem(f.0/[-0.5]hvGF'g) (,) * pe(e)dem(f) tu(hf/h_i)um.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #834)",
      blurb: {
        text: "Angelis suis draws both its respond and its verse from Psalm 91:11-12. The psalm's verse 11 opens with \"Quoniam,\" making the line a subordinate clause, \"For he hath given his angels charge over thee,\" but the gradual drops that word and begins directly with \"Angelis suis mandávit de te,\" so what was a dependent clause becomes a plain declaration. The verse left unsung after these two continues the same image: \"Thou shalt walk upon the asp and the basilisk: and thou shalt trample under foot the lion and the dragon.\"",
        source: "Ps. 91:11-12 (Vulgate numbering Ps. 90:11-12) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    tract: {
      title: "Qui habitat",
      latin: "Qui hábitat in adjutório Altíssimi, in protectióne Dei cæli commorábitur. ℣. Dicet Dómino : Suscéptor meus es tu, et refúgium meum : Deus meus, sperábo in eum. ℣. Quóniam ipse liberávit me de láqueo venántium, et a verbo áspero. ℣. Scápulis suis obumbrábit tibi, et sub pennis ejus sperábis. ℣. Scuto circúmdabit te véritas ejus : non timébis a timóre noctúrno. ℣. A sagítta volánte per diem, a negótio perambulánte in ténebris, a ruína et dæmónio meridiáno. ℣. Cadent a látere tuo mille, et decem míllia a dextris tuis : tibi autem non appropinquábit. ℣. Quóniam Angelis suis mandávit de te, ut custódiant te in ómnibus viis tuis. ℣. In mánibus portábunt te, ne unquam offéndas ad lápidem pedem tuum. ℣. Super áspidem et basilíscum ambulábis, et conculcábis leónem et dracónem. ℣. Quóniam in me sperávit, liberábo eum : prótegam eum, quóniam cognóvit nomen meum. ℣. Invocábit me, et ego exáudiam eum : cum ipso sum in tribulatióne. ℣. Erípiam eum, et glorificábo eum : longitúdine diérum adimplébo eum, et osténdam illi salutáre meum.",
      translation: "Whoever dwells in the shelter of the Most High shall abide under the protection of the God of heaven. ℣. He shall say to the Lord: You are my support and my refuge: my God, in him will I trust. ℣. For he has delivered me from the snare of the hunters, and from the harsh word. ℣. He will overshadow you with his shoulders, and under his wings you shall trust. ℣. His truth shall encompass you with a shield: you shall not fear the terror of the night. ℣. Of the arrow that flies by day, of the trouble that walks about in darkness, of ruin and the noonday demon. ℣. A thousand shall fall at your side, and ten thousand at your right hand: but it shall not come near you. ℣. For he has given his angels charge over you, to keep you in all your ways. ℣. In their hands they shall bear you up, lest you dash your foot against a stone. ℣. You shall walk upon the asp and the basilisk, and shall trample the lion and the dragon. ℣. Because he hoped in me, I will deliver him: I will protect him, because he has known my name. ℣. He shall cry to me, and I will hear him: I am with him in tribulation. ℣. I will rescue him and glorify him: with length of days will I fill him, and I will show him my salvation.",
      mode: "Tract · 1st Sunday of Lent · Mode II",
      reference: "Ps. 91:1-7, 11-16",
      gabc: "(f3) QUI(f_) há(f_)bi(efE'C)tat(ef//ef/hghvvGFggf.0) *(;) in(g) ad(e)ju(f)tó(hi)ri(hvGF)o(f') Al(gh'i)tís(hhg)si(fe)mi,(ef/gf/ggf/gh/iffe.) (:) in(e) pro(e)te(gh)cti(f)ó(f_e/f!gwh'!iv)ne(hgh.) De(i_[oh:h])i(e) cae(f!hh//hhh)li(gf..) (,) com(hg~)mo(h)rá(i_[oh:h]f//ihhvGF)bi(ef)tur.(f/ggf.0) (::) ℣. Di(hi)cet(f) Dó(hi)mi(ivH'GhvGF'g)no :(gf..) (;) Sus(hg)cé(h)ptor(fg~) me(f!hh//hhh)us(fg) es,(fe/ggf/gh/iffe.) (:) et(e) re(f)fú(f!h_gh//gh!jvIGhvGF'g)gi(fg)um(fg) me(fg)um,(fg) (,) De(fg)us(fg) me(f_e/f!gwh'!iv)us :(hg/hiih.0) (;) spe(ehg)rá(h/ihhe)bo(fgf) (`) in(hg) e(h_f/ggf)(,)(hiH'GhiF'E//hhhvGF')um.(f/ggf.0) (::) ℣. Quó(f)ni(e)am(f) i(h/ihhf/hh/ijhhg/ihhggf!gwhgh)pse(gf..) (;) li(f)be(hfh)rá(iv.hi/ji)vit(ig~) me(giH'GhvGFgf..) (;) de(hg) lá(hi)que(hvGE)o(f') ve(gh'i)nán(hhg)ti(fe)um,(ef/gf/ggf/gh/iffe.) (:) et(e) a(f) ver(hhi~)bo(h) á(hv.gh/ihi)spe(f)ro.(f/ggf.0) (::) ℣. Scá(i)pu(hiH'F)lis(f!gwh) su(hiH'F)is(f.) (,) ob(hg)um(hi~)brá(i_[oh:h]gi)bit(hg~) ti(hvGF)bi,(fe/ggf/gh/iffe.) (:) et(e) sub(e) pen(gh)nis(f) e(f_e/f!gwh'!iv)jus(hiH'GhvG'FEf_e) (,) spe(fhf)rá(hvvGF')bis.(f/ggf.0) (::) ℣. Scu(h)to(hh//hhh) cir(f)cúm(hfh)da(iv.hi/ji)bit(ig~) te(giH'GhvGFgf..) (;) vé(hi)ri(hvGE')tas(f) e(g_[oh:h]fg)jus :(fe/ggf/gh/iffe.) (:) non(gh) ti(f)mé(f_e/f!gwh'!iv)bis(hg/hiih.0) (;) a(i) ti(e)mó(f)re(f) no(hg)ctúr(hvGF)no.(fefEC//fefggf.0) (::) ℣. A(fhg) sa(h)gít(iji___/jij)ta(f.) vo(h)lán(hi!jvIH'GhvGF'g)te(gf..) (,) per(hg~) di(h_fg)em,(fe/ggf/gh/iffe.) (:) a(c) ne(c)gó(ef)ti(fe)o(f/hhhvF'E//f_efv.) (;) per(f)am(f)bu(hg)lán(hv.gh/ihi)te(f') in(gh'i) té(hhg)ne(fe)bris,(ef/gf/ggf/gh/iffe.) (:) a(c) ru(c)í(ef)na(f/hhhvF'E//f_efv.) (;) et(f) dae(hg)mó(hv.gh/ihi)ni(fe)o(ef) (,) me(ec)ri(e)di(f)á(fih/ihh'hhvF'EDef/hf)no.(f.) (::) ℣. Ca(hi/j_i)dent(ijIH'ihh'hhvGEf_e/f!gw!hvGFgf..) (;) a(h) lá(hi'j)te(jvIH'GhvGF'g)re(g_[oh:h]f) tu(f)o(fi) (,) mil(hiHF'fe//hiHF'fe//hvGF'ihhvGF'hfgv_[oh:h]F~E~)le,(fe..) (;) et(f) de(e)cem(f) míl(f!hh/ijhhg/ihhggf!gwh_g)li(hg)a(f.) (;) a(f!gwh_g) dex(h)tris(f!gwh_g) tu(hvGF)is :(fe/ggf/gh/iffe.) (:) ti(gh)bi(f) au(f_e/f!gwh'!iv)tem(hg/hiih.0) (;) non(i) ap(e)pro(f)pin(hg~)quá(hvGF)bit.(fefEC//fefggf.0) (::) ℣. Quó(f)ni(e)am(f) An(hi)ge(hiH'F)lis(f!gwh) su(hiH'F)is(f.) (;) man(fi~)dá(i_[oh:h]gi)vit(hg) de(fg) te,(fe/ggf/gh/iffe.) (:) ut(e) cu(e)stó(gh)di(f)ant(f_e/f!gwh'!iv) te(hg/hiih.0) (;) in(i) ó(i)mni(e)bus(f) vi(h)is(g/hihi) tu(f)is.(f/ggf.0) (::) ℣. In(h) má(i)ni(jiihi)bus(iv.hh/fgf.) (;) por(hfh)tá(iv.hi/ji)bunt(ig~) te,(giH'GhvGFgf..) (;) ne(hg) un(hi)quam(hvGE') of(f)fén(g_[oh:h]fg)das(fe/ggf/gh/iffe.) (:) ad(gh~) lá(f_e/f!gwh'!iv)pi(hi)dem(ivH'GhvG'FEf_e) (`) pe(h)dem(gh/ihi) tu(f)um.(f/ggf.0) (::) ℣. Su(fhg)per(h) á(i)spi(jiihi)dem(iv.hh/fgf.) (;) et(f) ba(f)si(hfh)lí(iv.hi!jvIG)scum(giH'GhvGFgf..) (;) am(f)bu(i)lá(hiHF'fe//hiHF'fe//hvGF'ihhvGF)bis,(fhffe.) (:) et(gh~) con(fg~)cul(f)cá(f_e/f!gwh'!iv)bis(hg/hiih.0) (;) le(f)ó(fefEC//f_e/f!gw!hvGF'g)nem(gf..) (,) et(hg~) dra(h)có(hjihjIH'ihh'hhvGEf_e/f!gw!hvGF'g)nem.(gf..) (::) ℣. Quó(f_)ni(f_e)am(e) in(f) me(hi) spe(f)rá(f!hh/ijhhg/ihhggf!gwhgh)vit,(gf..) (;) li(f)be(hg)rá(h)bo(f) e(f!hh//hhh)um :(fe/ggf/gh/iffe.) (:) pró(gh)te(f)gam(f) e(f_e/f!gwh'!iv)um,(hg/hiih.0) (;) quó(hi)ni(hvGE')am(f) co(fe~)gnó(gh)vit(h) no(h)men(gh/ihi) me(f)um.(f/ggf.0) (::) ℣. In(fhg)vo(h)cá(i)bit(jiihi) me,(iv.hh/fgf.) (;) et(h) e(hi'j)go(jvIH'GhvGFgf..) (,) ex(hg)áu(hi)di(hvGE')am(f) e(g_[oh:h]fg)um :(fe/ggf/gh/iffe.) (:) cum(gh) i(f)pso(f_e/f!gwh'!iv) sum(hg/hiih.0) (;) in(hi) tri(hhg)bu(fef)la(eh)ti(gh/ihi)ó(f)ne.(f/ggf.0) (::) ℣. E(h)rí(i)pi(hiH'F)am(f.) e(f!h_gh//gh!jvIGhvGF'g)um,(gf..) (;) et(fg~) glo(f)ri(f)fi(hg)cá(h)bo(f) e(f!hh//hhh)um :(fe/ggf/gh/iffe.) (:) lon(e)gi(f)tú(f!h_gh//gh!jvIGhvGF'g)di(fg)ne(fg) di(f)é(h)rum(hh//hhh) (,) ad(f)im(hg~)plé(h)bo(f) e(f!hh//hhh)um,(fe/ggf/gh/iffe.) (:) et(e) os(e)tén(gh)dam(f) il(f_e/f!gwh'!iv)li(kxhgi.jkiih.0) (;) sa(h/ihhg)lu(fe)tá(fgf)re(g.) *() me(i_[oh:h]hivHFg.)(,)(h!jijH'GF)um.(fe/f!hh/ijI'Gh.) (,) (gh!jvIH'hvGFggf.0) (::)",
      source: "Graduale Romanum (GregoBase #889)",
      blurb: {
        text: "Qui habitat passes from Psalm 91 verse 7 directly to verse 11, leaving verses 8 through 10 unsung. The long tract for the first Sunday of Lent then continues through angels, trial, rescue, and the promise of salvation.",
        source: "Ps. 91:1-7, 11-16 (Vulgate numbering Ps. 90:1-7, 11-16) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Scapulis suis",
      latin: "Scápulis suis obumbrábit tibi Dóminus, et sub pennis ejus sperábis : scuto circúmdabit te véritas ejus.",
      translation: "The Lord will overshadow you with his shoulders, and under his wings you shall trust: his truth shall encompass you with a shield.",
      mode: "Offertory · 1st Sunday of Lent · Mode VIII",
      reference: "Ps. 91:4-5",
      gabc: "(c4) SCá(h)pu(g)lis(g) su(gih)is(h.) *(,) ob(g)um(g)brá(gh/ji)bit(ih~) ti(jk)bi(hv.fhg) Dó(g)mi(ghg___)nus,(g.) (:) et(g) sub(g) pen(gh/ji)nis(j) e(j)jus(jjjvI'HGhg__) (;) spe(hih)rá(jj//hj/kjk)bis :(ji..) (:) scu(hj/kj)to(jj//jjj) cir(hg~)cúm(g.h!iwj)da(jkJ'H)bit(h_g) te(gf..) (;) vé(ixfg!ivHGh./jkj)ri(h_f)tas(fhg) e(ghg___)jus.(g.) (::)",
      source: "Graduale Romanum (GregoBase #294)",
      blurb: {
        text: "In the offertory for the first Sunday of Lent, Scapulis suis names the Lord directly before returning to Psalm 91's wings and shield. The explicit name turns the same sheltering words into an offering of trust.",
        source: "Ps. 91:4-5 (Vulgate numbering Ps. 90:4-5) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    communion: {
      title: "Scapulis suis",
      latin: "Scápulis suis obumbrábit tibi, et sub pennis ejus sperábis : scuto circúmdabit te véritas ejus.",
      translation: "He will overshadow you with his shoulders, and under his wings you shall trust: his truth shall encompass you with a shield.",
      mode: "Communion · 1st Sunday of Lent · Mode III",
      reference: "Ps. 91:4-5",
      gabc: "(c4) SCá(gh/ji)pu(j)lis(j) su(jvvIH)is(ih..) *(,) ob(f)um(gh)brá(h_fh)bit(g) ti(egff)bi,(fe..) (:) et(g) sub(g) pen(jv.jjj)nis(g) e(h)jus(f.) spe(ixfghig/h_g)rá(egff)bis :(fe..) (:) scu(ixhjhhgi)to(h_[oh:h]g_[oh:h]/!h_[oh:h]i_[oh:h]h._[oh:h]) (,) cir(f)cúm(hg~)da(h_fh)bit(gvFE'fwgfg) te(gf..) (,) vé(h_f)ri(gh)tas(g) e(egff)jus.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1100)",
      blurb: {
        text: "Scapulis suis takes Psalm 91's sheltering images from verses 4 and 5: wings, trust, and truth as a shield. The communion for the first Sunday of Lent gathers those images into a brief prayer of protection.",
        source: "Ps. 91:4-5 (Vulgate numbering Ps. 90:4-5) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    }
  },

  /* ---- 2nd Sunday of Easter (easter-2) — no Gradual in Eastertide ------ */
  "easter-2": {
    alleluia: {
      title: "In die resurrectionis meae",
      latin: "Allelúia. ℣. In die resurrectiónis meæ, dicit Dóminus, præcédam vos in Galilǽam.",
      translation: "Alleluia. ℣. On the day of my resurrection, says the Lord, I will go before you into Galilee.",
      mode: "Alleluia · 2nd Sunday of Easter · Mode VII",
      reference: "Cf. Matt. 28:7",
      gabc: "(c3) AL(e)le(e)lú(e_[uh:l]f//df!hvGFhi~){ia}.(ie..) *(,) ij.(fg!hvGFE.df!gvFE.) (;) (de!fv.gh'GFE.df!gvFE.//fgf/!ge/!ffe.) (::) ℣. In(ei) di(i)e(ihhf//h_ie.) (,) re(d)sur(f!gwh)re(hg)cti(fe)ó(fg)nis(f) me(efe___)ae,(e.) (,) di(dc)cit(de) Dó(e)mi(ef/hfg)nus,(fe..) (:) prae(i/kj/k_[uh:l]lK'JI')cé(i/kj/k_[uh:l]lK'JI'//hkkvJHivHF)dam(hi~) vos(i.) *(;) in(e) Ga(e)li(e)laé(e_[uh:l]f//df!hvGFhi)am.(ie..) (,) (fg!hvGFE.df!gvFE.) (;) (de!fv.gh'GFE.df!gvFE.//fgf/ge/ffe.) (::)",
      source: "Graduale Romanum (GregoBase #1042). On Low Sunday a second Alleluia, “Post dies octo,” follows.",
      blurb: {
        text: "In die resurrectionis meae is the first Alleluia named in the local Low Sunday record. Its verse takes Matthew's promise that the risen Lord will go before the disciples into Galilee.",
        source: "Cf. Matt. 28:7 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    },
    offertory: {
      title: "Angelus Domini descendit",
      latin: "Angelus Dómini descéndit de cælo, et dixit muliéribus : Quem quæritis, surréxit, sicut dixit, allelúia.",
      translation: "An angel of the Lord came down from heaven, and said to the women: He whom you seek is risen, as he said, alleluia.",
      mode: "Offertory · 2nd Sunday of Easter · Mode VIII",
      reference: "Matt. 28:2, 5-6",
      gabc: "(c4) AN(fg~)ge(g.!hjHG'gf/ghg___)lus(g.) *(,) Dó(hg/h!jjkvJH)mi(gfh)ni(h.) (;) de(h)scén(jhhf/ghGF'/!fde'1c)(,)(cd!ff/gh!jvHG'gfg)dit(g.) (;) de(g.h!iwj) cae(jji/j_g//h!jijkljj)lo,(ki/jhhg.) (;) et(g) di(gggvED'eg'hvGF'g)xit(g.) (,) mu(g)li(hj)é(ig/h!jj/klK'Ijkj)ri(ij)bus :(hig.) (:) Quem(gh~) quaé(hvGFgvFEf./ghffdg)ri(fg)tis,(g.) (;) sur(h)ré(gjI'Ghh//fh!jvGF'fd/ef!ghg)xit,(g.) (;) sic(g)ut(gj) di(jji/jhhg)xit,(h.) (;) al(h!iwji~)le(jkJH'//gi.hjIH'//g!jj/h_[oh:h]i_[oh:h]g_[oh:h])lú(ghg___){ia}.(g.) (::)",
      source: "Graduale Romanum (GregoBase #789)",
      blurb: {
        text: "Matthew 28:2, 5-6 gives the Offertory the angel's descent, his answer to the women, and the announcement that Christ has risen. The invitation to see the place where he lay turns the message toward the empty tomb.",
        source: "Matt. 28:2, 5-6 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Pasc1-0 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Mitte manum tuam",
      latin: "Mitte manum tuam, et cognósce loca clavórum, allelúia : et noli esse incrédulus, sed fidélis, allelúia.",
      translation: "Put in your hand, and know the place of the nails, alleluia: and be not unbelieving, but believing, alleluia.",
      mode: "Communion · 2nd Sunday of Easter · Mode VI",
      reference: "John 20:27",
      gabc: "(c4) MIt(ffg)te(f) * ma(gh)num(g) tu(f)am,(ghg.) (,) et(fvE~D~) co(f)gnó(g)sce(f) lo(f)ca(g) cla(e)vó(ixg!hwih)rum :(hg..) (:) et(fd~) no(f)li(g) es(h)se(g) in(f)cré(g)du(fe)lus(d.) (;) sed(fg) fi(f)dé(fg!hvGF'g)lis.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #589)",
      blurb: {
        text: "Mitte manum tuam quotes John 20:27, but quietly reshapes it. The verse includes the finger, the side, and the seeing; the antiphon sets those aside and pairs \"mitte manum tuam\" with \"cognósce loca clavórum,\" a phrase closer to Thomas's own earlier words of doubt in verse 25, closing then with what verse 27 does supply: \"noli esse incrédulus, sed fidélis.\" The day's Epistle, from 1 John 5:4-10, has already proclaimed \"hæc est victória, quæ vincit mundum, fides nostra,\" and the antiphon's final call to faith echoes that theme across the whole Mass.",
        source: "John 20:27 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pasc1-0 (Missale Romanum formulary)",
      },
    }
  },

  /* ===================================================================== *
   * ORDINARY TIME — the upcoming Sundays. Sourced per Sunday from the
   * modern Graduale Romanum / Gregorian Missal via gregorien.info's
   * Vatican-II calendar (the same repertory the diolc introits excerpt);
   * gabc from the in-repo GregoBase dump (Solesmes). The Graduale assigns
   * some OT graduals/communions by LECTIONARY YEAR, so those parts live
   * under cycle keys (ot-N-a/-b/-c, like the cycle-split introits) while
   * the cycle-independent alleluia and offertory live under the base key.
   * Picks logged in sources/gregobase/feasts-propers.csv.
   * ===================================================================== */

  /* ---- 13th Sunday in Ordinary Time (ot-13) --------------------------- *
   * Introit "Omnes gentes plaudite" (ot-13 in introits.js). Cycle-specific:
   * Gradual A "Venite filii" / C "Exaltabo te"; Communion A "Christus
   * resurgens" / B & C "Inclina aurem". Alleluia + Offertory are common.   */
  "ot-13": {
    alleluia: {
      title: "Omnes gentes plaudite",
      latin: "Allelúia. ℣. Omnes gentes pláudite mánibus : jubiláte Deo in voce exsultatiónis.",
      translation: "Alleluia. ℣. O clap your hands, all you nations: shout unto God with the voice of joy.",
      mode: "Alleluia · Ordinary Time · Mode I",
      reference: "Ps. 47:2",
      gabc: "(c4) AL(d)le(ff)lú(gv.f!hgh){ia}.(hjh___!iw!jvIH'hg//ixhiHG'gf.0) *(;) ij.(ixfg!hihhg/h_g//hfgvF'ED') (;) (fef.hg/h_g//hfgvF'ED'ewfd.1) (::) ℣. O(ixfg'i~)mnes(i) gen(ixiiij_ggf.0)(,)(ixj_i/j_[hl:1]k_[hl:1]i_[hl:1]ig!hw!ivHG'h)tes(h_ghvGFg.) (;) pláu(ixfg/iV_[oh:h]!gh~)di(ixh.0/ijh/iggf/hjh.1)(,)(ixf.g!hwigh./ijh/iggf/hjh.1)(,)(ixj_[hl:1]k_[hl:1]j_[hl:1]jhivGF'gwhg/hi)te(i.) (;) má(ixivHF'gffdde'f)ni(gffefvED'e)bus :(e[ll:1]d..) (:) ju(f)bi(f)lá(gh)te(h/iih) De(g.h!iw!jkj)o(jvIH.) (;) in(hg~) vo(fg/hg/hhg)ce(g./fghjjg/hhghvFE.) (;) * ex(e)sul(ef'g)ta(ghG'F)ti(ghg)ó(h)nis.(hjh___!iw!jvIH'hg//ixhiHG'gf.0) (;) (ixfg!hihhg/h_g//hfgvF'ED') (;) (fef.hg/h_g//hfgvF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #77)",
      blurb: {
        text: "Omnes gentes plaudite draws its words from the opening of Psalm 47, attributed in its heading to the sons of Korah. The chant quotes only verse 2, the summons to all nations to clap and shout to God. The psalm's next verse supplies the reason the chant's text leaves unspoken: \"For the Lord is high, terrible: a great king over all the earth.\"",
        source: "Ps. 47:2 (Vulgate numbering Ps. 46:2) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 47\" (rev. 1328069854)",
      },
    },
    offertory: {
      title: "Sicut in holocausto",
      latin: "Sicut in holocáusto aríetum et taurórum, et sicut in míllibus agnórum pínguium : sic fiat sacrifícium nostrum in conspéctu tuo hódie, ut pláceat tibi : quia non est confúsio confidéntibus in te, Dómine.",
      translation: "As in holocausts of rams and bullocks, and as in thousands of fat lambs: so let our sacrifice be in your sight this day, that it may please you: for there is no confusion for those who trust in you, O Lord.",
      mode: "Offertory · Ordinary Time · Mode V",
      reference: "Dan. 3:40",
      gabc: "(c3) SIc(gxd!ewf'!gv)ut(f) *() in(f) ho(gxfg)lo(f)cáu(feede)sto(e_[oh:h][ll:1]d) a(d)rí(ede)e(gxfgf)tum(f.) (,) et(fh~) tau(hv_G~F~)ró(hv.ghfg)rum,(f.) (;) et(f) sic(f!hwi'!jv)ut(i) in(i) míl(iji)li(hh/i_[oh:h]h)bus(h.) (,) a(h)gnó(hih)rum(h) pín(hg~)gui(g!hw!ivH'GF'g)um :(gf..) (:) sic(fdf) fi(f!gwhhvGF'g)at(g_[oh:h]f) (,) sa(f)cri(h)fí(h)ci(g!hw!ivH'GF'g)um(g_[oh:h]f) no(f_egvFE'f)strum(e.) (;) in(e) con(ei~)spé(iji)ctu(h) tu(hih)o(h.) (,) hó(hf/hh)di(ih)e,(h.) (;) ut(fdf) plá(f!gwhg/hih)ce(f)at(efe) ti(de!fvED'e)bi :(e[ll:1]d..) (:) qui(d)a(ef) non(f!gwhg/hih) est(f) con(ef~)fú(d)si(de!fvED'e)o(e[ll:1]d..) (;) con(d)fi(ef)dén(f)ti(e)bus(f!gwhg/hih) in(f) te(ef) (,) Dó(d)mi(de!fvED'e)ne.(d!ewfe/fhf.1) (,) (d!ewfe/fhff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #675)",
      blurb: {
        text: "Sicut in holocausto draws its text from a single verse in the prayer of the three young men in the furnace, Daniel 3:40. The verses just before it, Daniel 3:38-39, confess that at that moment there is no prince, no prophet, no holocaust, no sacrifice, no oblation, no incense. The three have nothing to offer. Verse 40, which this Offertory quotes entire, turns that emptiness into the offering itself, asking that their prayer stand in place of all those absent rites.",
        source: "Dan. 3:40 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ot-13, Year A: Gradual "Venite filii", Communion "Christus resurgens" */
  "ot-13-a": {
    gradual: {
      title: "Venite filii",
      latin: "Veníte fílii, audíte me : timórem Dómini docébo vos. ℣. Accédite ad eum, et illuminámini : et fácies vestræ non confundéntur.",
      translation: "Come, O children, hearken to me: I will teach you the fear of the Lord. ℣. Come to him and be enlightened: and your faces shall not be confounded.",
      mode: "Gradual · Ordinary Time (Year A) · Mode V",
      reference: "Ps. 34:12, 6",
      gabc: "(c4) VE(d)ní(ff)te(ghgh) fí(h_fg)li(g)i,(f.) *(,) au(hj~)dí(j_h//jij)te(ixgjh/i_[uh:l]j) me :(ixih..) (:) ti(h)mó(hg)rem(j) Dó(j)mi(ij)ni(h_f) do(gh)cé(f)bo(ef) vos.(dec.) (,) (fhg___//jkijh.fhg/hggf.0) (z0::c3) ℣. Ac(d)cé(d)di(f)te(hvvGFhvGEff) (,) (gxde!fgF'EfvEDe.) (,) (fh/ih/ih/ijh.1) (,) ad(h) e(ih/kkh/ih/kkvIH)um,(hv.ghGF.) (;) et(h) il(h)lu(h)mi(h)ná(i!jwk)mi(ih)ni :(hihh/fgf.) (:) et(fh~) fá(h)ci(h)es(g) ve(h)strae(f.) *(,) non(df) con(e!hgh)fun(f)dén(de~)tur.(d!ewfef//highf.dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #1022)",
      blurb: {
        text: "Venite filii draws two verses from Psalm 34, reversing their order. The body of the gradual quotes verse 12, which appears later in the psalm, and the versicle reaches back to verse 6. Between those two verses in the psalm itself stand lines about the poor man who cried out, the angel of the Lord encamping around those who fear him, and the saints who lack nothing, none of which the chant quotes. It is sung here between an Epistle from Romans on being freed from sin to bear fruit in holiness, and a Gospel from Matthew warning that a tree is known by its fruit.",
        source: "Ps. 34:12, 6 (Vulgate numbering Ps. 33:12, 6) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent07-0 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Christus resurgens",
      latin: "Christus resúrgens ex mórtuis, jam non móritur, allelúia : mors illi ultra non dominábitur, allelúia, allelúia.",
      translation: "Christ rising from the dead dies now no more, alleluia: death shall no longer have dominion over him, alleluia, alleluia.",
      mode: "Communion · Ordinary Time (Year A) · Mode VIII",
      reference: "Rom. 6:9",
      gabc: "(c3) CHri(eh)stus(ggh.) *(,) re(hf)súr(hi~)gens(g) ex(f) mór(ggh)tu(fe)is,(e.) (,) jam(g) non(g) mó(gf/g_[uh:l]h)ri(e)tur,(c.) (,) al(f)le(f)lú(e!f@ec~){ia} :(c.) (:) mors(f) il(ef)li(feec) ul(eg~)tra(f.) non(hhf~) do(hi'j)mi(ij)ná(g)bi(gihh)tur,(hg..) (;) al(gj~)le(j)lú(jij){ia},(g.) (,) al(h)le(fhGF')lú(gffef){ia}.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #593)",
      blurb: {
        text: "Christus resurgens draws on a single verse of Romans 6, set within a passage that speaks directly to the baptized: the surrounding verses run \"if we be dead with Christ, we believe that we shall live also together with Christ\" and \"so do you also reckon that you are dead to sin, but alive unto God.\" The antiphon sets aside that direct address and isolates the one declarative statement about Christ himself. The Gospel of the day, from John 16, begins with Christ telling his disciples that he is going to the one who sent him, \"Vado ad eum, qui misit me.\"",
        source: "Rom. 6:9 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pasc4-0 (Missale Romanum formulary)",
      },
    }
  },

  /* ot-13, Year B: Communion "Inclina aurem" (no proper Gradual assigned) */
  "ot-13-b": {
    communion: {
      title: "Inclina aurem tuam",
      latin: "Inclína aurem tuam, accélera, ut éruas nos.",
      translation: "Incline your ear to me: make haste to deliver us.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode IV",
      reference: "Ps. 31:3",
      gabc: "(c4) IN(f)clí(fgf)na(f_d) *() au(fe~)rem(f) tu(ghG'Fg_[uh:l]h)am,(h.) (:) ac(f)cé(h)le(gh_G'_FE'f)ra,(f_e) (,) ut(f) é(ghG'F)ru(g)as(ghG'FghG'F) nos.(e.) (::)",
      source: "Graduale Romanum (GregoBase #339)",
      blurb: {
        text: "Inclina aurem tuam draws on the opening of Psalm 31:3, leaving the rest of the verse unsung: the psalm continues, \"Be thou unto me a God, a protector, and a house of refuge, to save me.\" The chant also quietly shifts the person: where the Vulgate reads \"ut eruas me,\" deliver me, the chant sings \"ut eruas nos,\" turning a single voice's cry into a communal one.",
        source: "Ps. 31:3 (Vulgate numbering Ps. 30:3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ot-13, Year C: Gradual "Exaltabo te", Communion "Inclina aurem" */
  "ot-13-c": {
    gradual: {
      title: "Exaltabo te Domine",
      latin: "Exaltábo te, Dómine, quóniam suscepísti me : nec delectásti inimícos meos super me. ℣. Dómine Deus meus, clamávi ad te, et sanásti me : Dómine, abstraxísti ab ínferis ánimam meam, salvásti me a descendéntibus in lacum.",
      translation: "I will extol you, O Lord, for you have upheld me, and have not let my enemies rejoice over me. ℣. O Lord my God, I cried out to you, and you healed me: O Lord, you brought up my soul from the netherworld, you saved me from among those that go down into the pit.",
      mode: "Gradual · Ordinary Time (Year C) · Mode III",
      reference: "Ps. 30:2-4",
      gabc: "(c4) EX(f)al(ffff_c~)tá(d!ewf_e)bo(f) te,(fffd/fff) (,) * Dó(e.f!gwh_g)mi(hg)ne,(ixg_[uh:l]h//e.f!gw!higff/ded.) (;) quó(f.d!ewfe)ni(e)am(ege/ghgff/ded.) (,) sus(g)ce(hih)pí(j)sti(jh/jj//jj/khhg.) me :(ig/h!jjjh/klJ'IHjvIH) (,) (jj/ki'jvHG'jh'/ihhg.) (:) nec(gj) de(jkjji)le(jjj_h)ctá(h!jj)sti(jjjvH'G) (;) in(h_g/h!iwj)i(h_g/h!iwj)mí(hvGF'gwh)cos(ghg) me(ghG'Fgh!jjjh)(,)(k_[hl:1]j//kvJHgjh/ij)os(i.) (;) su(jk)per(kijvH'GF.h!iwj'!kv) me.(i_[oh:h]g//ivHGhhf/hh) (,) (g!jj//jj//jjjvH'GF'/[-0.5]{ix}E0f_h//ivGFghg/hgge.) (::) ℣. Dó(e[ll:1]d)mi(g)ne(hi) De(iij)us(h) me(h!jj//jjjvHGigh)us,(h.) (,) (i_j_i_2/j_[hl:1]k_[hl:1]i'_[hl:1]//kvJ'IHjvIH) (,) (jj/ki'jvHG'jh'/ihhg.) (:) cla(dg)má(gh'j)vi(j) ad(j) te,(i_[oh:h]g) (,) et(h) sa(j)ná(iki/jk_[hl:1]j//ki/jk_[hl:1]jk//ij/kjkkj)sti(j_i) me :(jh) (,) (jjjvHG'h!jjjvHGhh//gjh/ihhg.) (:) Dó(ij//j'jjvH'Gh!iwj_i)(,)(e!gh/jij//h!jj//jjjvH'Gh!iwj)mi(jjjvHG'h)ne,(hv.giHG'hffe.) (:) ab(ef)stra(dge)xí(gh//g.h!iwj)sti(jjjvH'G) (,) ab(hggf) ín(jj)fe(kjjvIH)ris(h_g//ivHG'hffe.) (;) á(ef)ni(dg)mam(g) me(hg/h!jjjhhg)am,(g.) (:) sal(dg)vá(gh'j)sti(j) me(jj//jjjh/ijHG.) (,) (jj//jjjh/!ijHG.) (,) (jj/kh/jjk/jk/ljjj'1h/ijHG.) (,) (jgjvvIH//jhjvIHjh/ihhg.) (:) a(g) de(g)scen(g)dén(ghG'Fgh/jjjhk)ti(jkJHgjh/ij)bus(i.) *(,) in(jk) la(kijvH'GF.h!iwj'!kv)cum.(i_[oh:h]g//ivHGhhf/hh) (,) (g!jj//jj//jjjvH'GF'E/!f_h/!/!ixivGFghg/hgge.) (::)",
      source: "Graduale Romanum (GregoBase #277)",
      blurb: {
        text: "Psalm 30 praises the Lord who upheld the singer rather than letting enemies rejoice. The Gradual continues with a cry for healing and thanksgiving for a soul brought up from the depths.",
        source: "Ps. 30:2-4 (Vulgate numbering Ps. 29:2-4) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C4b.txt [Officium heading]; Divinum Officium, Commune/C4b (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Inclina aurem tuam",
      latin: "Inclína aurem tuam, accélera, ut éruas nos.",
      translation: "Incline your ear to me: make haste to deliver us.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode IV",
      reference: "Ps. 31:3",
      gabc: "(c4) IN(f)clí(fgf)na(f_d) *() au(fe~)rem(f) tu(ghG'Fg_[uh:l]h)am,(h.) (:) ac(f)cé(h)le(gh_G'_FE'f)ra,(f_e) (,) ut(f) é(ghG'F)ru(g)as(ghG'FghG'F) nos.(e.) (::)",
      source: "Graduale Romanum (GregoBase #339)",
      blurb: {
        text: "Inclina aurem tuam draws from Psalm 31:3, but takes only the first half of the verse, setting aside the second half entirely. The chant also carries a quiet shift from singular to plural: where the Clementine Vulgate reads \"accelera ut eruas me,\" the antiphon sings \"ut eruas nos,\" turning one voice's prayer into the congregation's.",
        source: "Ps. 31:3 (Vulgate numbering Ps. 30:3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ---- 14th Sunday in Ordinary Time (ot-14) --------------------------- *
   * Introit "Suscepimus Deus". Gradual/Offertory/Communion common; only the
   * Alleluia changes by year (A "Venite ad me" / B & C "Magnus Dominus").  */
  "ot-14": {
    gradual: {
      title: "Esto mihi in Deum protectorem",
      latin: "Esto mihi in Deum protectórem, et in locum refúgii, ut salvum me fácias. ℣. Deus, in te sperávi : Dómine, non confúndar in aetérnum.",
      translation: "Be unto me a God of protection, and a house of refuge, to save me. ℣. In you, O God, have I hoped: O Lord, let me never be confounded.",
      mode: "Gradual · Ordinary Time · Mode V",
      reference: "Ps. 31:3",
      gabc: "(c4) E(ffg)sto(f) mi(fg)hi(f.) *(,) in(fg) De(gf)um(f) pro(ghgh)te(hgffd/ff//fg'h)ctó(gv.fgf)rem,(fv.) (,) (d!ff/ge'/fgd'/e[ll:1]ddc.) (:) et(fg) in(f) lo(ghghvGF)cum(g.) (,) re(g.h!iwji/jkj)fú(hvGF)gi(hg)i,(gv.d!f'g/fh!jvGF'fd) (,) (ff/ge'/fgd'/e[ll:1]ddc.) (:) ut(d) sal(fd/fff)vum(c_[ll:1]d) me(ff) (,) fá(ixhhg/hh//gh!ivGFhh//f!h'j)ci(j)as.(iyjkijh.) (,) (fg/h!jj/klijh.0ixgiHF.1) (z0::c3) ℣. De(d)us,(d) in(f) te(fh/ih/ijh) spe(h)rá(h)vi :(hhi.) (,) Dó(i_[oh:h]h)mi(h_g)ne,(hhf//hhf//hihh/fgf.) (:) non(hh) con(h)fún(ih/ij_hih/ij_ij//hi/jij)dar(jh/jkihh/fgf.) *(;) in(de'f) ae(f)tér(fhG'Fhhh)num.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #886)",
      blurb: {
        text: "Psalm 31:3 in the Vulgate asks to be made a house of refuge, using the word \"domum\"; this Gradual quietly substitutes \"locum,\" a place of refuge. The versicle then reaches back one verse to verse 2, whose opening words \"In te, Domine, speravi; non confundar in aeternum\" the chant rearranges as \"Deus, in te sperávi: Dómine, non confúndar in aetérnum,\" joining the two verses into a single movement of trust and petition.",
        source: "Ps. 31:3 (Vulgate numbering Ps. 30:3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Populum humilem",
      latin: "Pópulum húmilem salvum fácies, Dómine, et óculos superbórum humiliábis : quóniam quis Deus praeter te, Dómine?",
      translation: "You will save the humble people, O Lord, and will bring down the eyes of the proud: for who is God but you, O Lord?",
      mode: "Offertory · Ordinary Time · Mode V",
      reference: "Ps. 18:28, 32",
      gabc: "(c4) PO(fgf)pu(fgf)lum(fg'h) hú(hjHG')mi(hggfg)lem(gf..) *(;) sal(hj)vum(jh~) fá(jlk)ci(j_i)es,(jjj//hjG'Fg.) (,) Dó(d/ff//gh/j.h!iwj)mi(f_[oh:h]g_[oh:h]f_[oh:h])ne,(f.) (:) et(fg) ó(g.h!iw!jvIH)cu(h_[oh:h]i_[oh:h]h_[oh:h])los(h.) su(h)per(h_g~)bó(ixgiHG')rum(hggf.0) (,) hu(hf)mi(g)li(hj)á(jkJ'Hjjj_h//jkJ'H)bis :(h_[oh:h]i_[oh:h]h._[oh:h]) (:) quó(f)ni(g)am(h) quis(j_h/jjhi) De(g.h!iwj/kjjij)us(ji..) (;) prae(hi)ter(hg~) te,(jj) Dó(jkj'/ki'jvHG.jkj'/ki'jvH'Fg.)(,)(fhhgh//jki'/jh)mi(f_[oh:h]g_[oh:h]f_[oh:h])ne?(f.) (::)",
      source: "Graduale Romanum (GregoBase #1080)",
      blurb: {
        text: "Populum humilem draws from two verses of Psalm 18 that are not adjacent. Verse 28 supplies the opening line about saving the humble and humbling the proud, then verses 29 through 31 are passed over entirely, and verse 32 supplies the closing question. The chant also quietly rewrites that closing verse: where the psalm asks \"quis deus præter Dominum... præter Deum nostrum\" in the third person, the Offertory turns it into a direct address, \"quis Deus praeter te, Dómine,\" folding the rhetorical question into personal prayer.",
        source: "Ps. 18:28, 32 (Vulgate numbering Ps. 17:28, 32) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Gustate et videte",
      latin: "Gustáte et vidéte, quóniam suávis est Dóminus : beátus vir, qui sperat in eo.",
      translation: "Taste and see that the Lord is sweet: blessed is the man who hopes in him.",
      mode: "Communion · Ordinary Time · Mode III",
      reference: "Ps. 34:9",
      gabc: "(c4) GU(g)stá(hj)te(j.) *(,) et(j) vi(j)dé(jjj)te,(h.) (,) quó(h/jjj)ni(gh_G'_FE'f)am(f_e) su(f)á(ef'h)vis(h) est(hggf/ghg) Dó(e)mi(egff)nus :(fe..) (:) be(ef'g)á(g)tus(ghGF'h) vir,(h.) (,) qui(hv.ghF'D) spe(fh)rat(g) in(hggf/ghg) e(egff)o.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1203)",
      blurb: {
        text: "Gustate et videte invites the faithful to taste and see the Lord's goodness, calling blessed the one who hopes in him. The Communion makes trust a lived encounter with divine sweetness.",
        source: "Ps. 34:9 (Vulgate numbering Ps. 33:9) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ot-14, Year A: Alleluia "Venite ad me" */
  "ot-14-a": {
    alleluia: {
      title: "Venite ad me",
      latin: "Allelúia. ℣. Veníte ad me, omnes qui laborátis, et oneráti estis : et ego refíciam vos.",
      translation: "Alleluia. ℣. Come to me, all you who labor and are heavy laden: and I will refresh you.",
      mode: "Alleluia · Ordinary Time (Year A) · Mode VIII",
      reference: "Matt. 11:28",
      gabc: "(c3) AL(ee[ll:1]d~)le(ff)lú(efe/hiHF'gffe~){ia}.(e.) *(;) ij.(de!f!gwhe./de!f!gwhe'fvED.) (;) (df!hi//hjijvHF.1) (,) (ehf___!gwh'!ivHF'EDee) (,) (fh//gh'iHF'EDee//fe/hhe.) (::) ℣. Ve(e)ní(efe/hiHF'gffe)te(e) ad(d/efd/ee) me,(d.) (;) o(df!hv//jhi)mnes(i.) (,) qui(h) la(j)bo(i)rá(jkJI'i//hji/jkii)(,)(hiHF'Ehv.gh'!ivHF'EDee)(,)(fh//gh'iHF'EDee)(,)(hji/jkJI'i//hji/jki)tis,(i.) (;) et(hjh/ii) o(e)ne(f!gwh)rá(h)ti(hhhvGF) e(fhe/fe)stis :(e.) (:) et(e) e(ef)go(e) *() re(e)fí(ef)ci(e[ll:1]d)am(df!hiHF'gffe~) vos.(e.) (;) (de!f!gwhe./de!f!gwhe'fvED.) (;) (df!hi//hjijvHF.1) (,) (ehf___!gwh'!ivHF'EDee) (,) (fh//gh'iHF'EDee//fe/hhe.) (::)",
      source: "Graduale Romanum (GregoBase #1237)",
      blurb: {
        text: "Venite ad me omnes draws a single verse from Matthew 11, Christ's invitation to those who labor and are burdened. The passage continues in the next two verses: \"Tollite jugum meum super vos, et discite a me, quia mitis sum, et humilis corde\" and \"Jugum enim meum suave est, et onus meum leve,\" take up my yoke, learn from me, for the yoke is sweet and the burden light. The alleluia verse stops at the invitation itself, before those conditions and promises are named.",
        source: "Matt. 11:28 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ot-14, Year B: Alleluia "Magnus Dominus" */
  "ot-14-b": {
    alleluia: {
      title: "Magnus Dominus",
      latin: "Allelúia. ℣. Magnus Dóminus, et laudábilis valde, in civitáte Dei, in monte sancto ejus.",
      translation: "Alleluia. ℣. Great is the Lord, and exceedingly to be praised, in the city of our God, in his holy mountain.",
      mode: "Alleluia · Ordinary Time (Years B & C) · Mode VII",
      reference: "Ps. 48:2",
      gabc: "(c3) AL(ei)le(i)lú(hhivHFhi~){ia}.(i.) *(,) {ij.}(hij!kvJI'Hi./hii) (,) (hij!kvJI'Hi./hii) (,) (gi!jvIH'Fg./fh!ivFE'De.) (;) (ei!jvIH'Fg./fh!ivFE'DeegE'Dffe.) (::) ℣. Ma(ivHFhi~)gnus(i.) Dó(ikj/klm)mi(kvJI)nus,(i.) (;) et(ij~) lau(ih~)dá(fe)bi(de)lis(e.) val(ivHFhi~)de,(i.) (:) in(i) ci(hg)vi(hi)tá(i)te(hij!kvJI'Hi./hii) (,) (hij!kvJI'Hi./hii) (,) (gi!jvIH'Fg./fh!ivFE'De.) De(egf/gh)i,(fe..) *(;) in(e) mon(g)te(e) san(g)cto(h) e(ij)jus.(i.) (,) (hij!kvJI'Hi./hii) (,) (hij!kvJI'Hi./hii) (,) (gi!jvIH'Fg./fh!ivFE'De.) (;) (ei!jvIH'Fg./fh!ivFE'DeegE'Dffe.) (::)",
      source: "Graduale Romanum (GregoBase #709)",
      blurb: {
        text: "Magnus Dominus proclaims the Lord as great and worthy of abundant praise in the city of God and on his holy mountain. The Alleluia lets praise rise from the holy city toward the Lord's majesty.",
        source: "Ps. 48:2 (Vulgate numbering Ps. 47:2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ot-14, Year C: Alleluia "Magnus Dominus" (shared with Year B) */
  "ot-14-c": {
    alleluia: {
      title: "Magnus Dominus",
      latin: "Allelúia. ℣. Magnus Dóminus, et laudábilis valde, in civitáte Dei, in monte sancto ejus.",
      translation: "Alleluia. ℣. Great is the Lord, and exceedingly to be praised, in the city of our God, in his holy mountain.",
      mode: "Alleluia · Ordinary Time (Years B & C) · Mode VII",
      reference: "Ps. 48:2",
      gabc: "(c3) AL(ei)le(i)lú(hhivHFhi~){ia}.(i.) *(,) {ij.}(hij!kvJI'Hi./hii) (,) (hij!kvJI'Hi./hii) (,) (gi!jvIH'Fg./fh!ivFE'De.) (;) (ei!jvIH'Fg./fh!ivFE'DeegE'Dffe.) (::) ℣. Ma(ivHFhi~)gnus(i.) Dó(ikj/klm)mi(kvJI)nus,(i.) (;) et(ij~) lau(ih~)dá(fe)bi(de)lis(e.) val(ivHFhi~)de,(i.) (:) in(i) ci(hg)vi(hi)tá(i)te(hij!kvJI'Hi./hii) (,) (hij!kvJI'Hi./hii) (,) (gi!jvIH'Fg./fh!ivFE'De.) De(egf/gh)i,(fe..) *(;) in(e) mon(g)te(e) san(g)cto(h) e(ij)jus.(i.) (,) (hij!kvJI'Hi./hii) (,) (hij!kvJI'Hi./hii) (,) (gi!jvIH'Fg./fh!ivFE'De.) (;) (ei!jvIH'Fg./fh!ivFE'DeegE'Dffe.) (::)",
      source: "Graduale Romanum (GregoBase #709)",
      blurb: {
        text: "Magnus Dominus praises the Lord in the city of God and on his holy mountain. Psalm 48 then calls Mount Sion the joy of the whole earth and names it the city of the great king.",
        source: "Ps. 48:2 (Vulgate numbering Ps. 47:2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ---- 12th Sunday in Ordinary Time (ot-12) --------------------------- *
   * Introit "Dominus fortitudo". Gradual/Alleluia/Offertory common; the
   * Communion changes by year (A Circuibo / B Qui vult venire / C Quod dico). */
  "ot-12": {
    gradual: {
      title: "Convertere Domine",
      latin: "Convértere, Dómine, aliquántulum, et deprecáre super servos tuos. ℣. Dómine, refúgium factus es nobis, a generatióne et progénie.",
      translation: "Turn somewhat, O Lord, and be entreated in favor of your servants. ℣. Lord, you have been our refuge, from generation to generation.",
      mode: "Gradual · Ordinary Time · Mode V",
      reference: "Ps. 90:13, 1",
      gabc: "(c4) COn(d)vér(f/[1]{ix}f/g!hwi)te(gf)re(fgFD.1) *(,) Dó(dgf/gh)mi(g)ne(ixg./hiGF'fd/f_[oh:h]g_[oh:h]f._[oh:h]) (;) a(h)li(jj)quán(j)tu(ji)lum,(hgj.klkkj.0) (:) et(j) de(ixhi)pre(h_g)cá(h/jjjk)re(j.) (,) su(jk)per(j_h~) ser(ixjhi)vos(gh) tu(gf)os.(ixffh//giHF.1) (,) (fhg___jv.jjjhh//fhg/hggf.0) (z0::c3) ℣. Dó(h)mi(ih)ne(hvvGFhvGEff//gxde!fgF'EfvEDe.) (,) (fh/ih/ih/ijh.1) (;) re(h)fú(ih!kkh/ih!kkvIH)gi(h_ghvGF'g)um(gf..) (;) fa(h.i!jwk)ctus(ih) es(h.) no(gxfgFE.fgFD.1fvEDe[ll:1]d)bis,(d.) (:) a(d) ge(d)ne(d)ra(d)ti(d)ó(dfE'D)ne(ef) *(,) et(h) pro(h)gé(hiH'Fhhh)ni(h)e.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #1046)",
      blurb: {
        text: "Convertere Domine reverses the order of Psalm 90, taking the later verse first. The body of the Gradual draws on verse 13, and the versicle steps back to verse 1 for the familiar cry, \"Lord, you have been our refuge from generation to generation.\" The chant text also departs slightly from verse 13 as the Clementine Vulgate gives it: where the psalm reads \"usquequo?\" (how long?), the chant substitutes \"aliquantulum\" (somewhat), softening the urgency of the original address.",
        source: "Ps. 90:13, 1 (Vulgate numbering Ps. 89:13, 1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "In te Domine speravi",
      latin: "Allelúia. ℣. In te, Dómine, sperávi, non confúndar in aetérnum : in tua justítia líbera me, et éripe me : inclína ad me aurem tuam, accélera ut erípias me.",
      translation: "Alleluia. ℣. In you, O Lord, have I hoped, let me never be confounded: in your justice deliver me and rescue me: incline your ear to me, make haste to deliver me.",
      mode: "Alleluia · Ordinary Time · Mode III",
      reference: "Ps. 31:2-3",
      gabc: "(c4) AL(f)le(fgh)lú(gh!ivHG'j){ia}.(j.) *(,) {ij.}(jj//ghGF.jh/i_[oh:h]g//hg/hffe.) (;) (ef'ghghF'Ef_gffe.) (::) ℣. In(g) te(g) Dó(gh'j)mi(jijh)ne(jhhg.) (,) spe(hih)rá(jv.jjjvIHjgh)vi,(ge..) (;) non(e!fwg'!hv) con(g)fún(gh!jvH'GF'gwh'!iv)dar(hg__) (,) in(g) ae(hih)tér(ivHG'hffe//ghG'FgvFE)num :(e.) (:) in(e[ll:1]d~) tu(ghg)a(hi) ju(hg)stí(h!jj)ti(gh)a(g_[oh:h]f_[oh:h]) lí(g)be(f)ra(g) me,(e.) (;) et(e) é(e)ri(ef'g)pe(gh!jvH'GF'gwh'!iv) me :(hg..) (:) in(g)clí(gh/ji)na(jijh) ad(h) me(jhhg.) (,) au(hih~)rem(j.) tu(jjjvIHjgh)am,(ge..) (:) ac(e)cé(ef'ghiH'G)le(g.h!iw!jvIHij)ra(i.) *(,) ut(e) e(ef'g)rí(hiH'G)pi(hj)as(j) me.(jj//ghGF.) (,) (jh/i_[oh:h]g//hg/hffe.) (;) (ef'ghghF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #239)",
      blurb: {
        text: "In te Domine speravi places hope in the Lord and asks for deliverance, an attentive ear, and haste to save. The Alleluia gathers these urgent petitions into a prayer of steadfast trust.",
        source: "Ps. 31:2-3 (Vulgate numbering Ps. 30:2-3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Perfice gressus meos",
      latin: "Pérfice gressus meos in sémitis tuis, ut non moveántur vestígia mea : inclína aurem tuam, et exáudi verba mea : mirífica misericórdias tuas, qui salvos facis sperántes in te, Dómine.",
      translation: "Make my steps perfect in your paths, that my footsteps be not moved: incline your ear, and hear my words: show forth your wonderful mercies, you who save those who hope in you, O Lord.",
      mode: "Offertory · Ordinary Time · Mode IV",
      reference: "Ps. 17:5, 6-7",
      gabc: "(c4) PEr(c)fi(dfe)ce(f.) *() gres(ff//fff_d)sus(cd'f) me(f_e)os(egff) (,) in(dg~) sé(gv.f!h'j)mi(g_[oh:h]e)tis(gh) tu(fdgvFE)is,(e.) (;) ut(dg) non(gfg) mo(fe)ve(d!ff)án(fff)tur(d!ff) (,) ve(d)stí(fv.ffd)gi(f)a(fhG'Fghg) me(egff)a :(fe..) (:) in(f)clí(ixef/hig)na(ghffe) au(fffd~)rem(f) tu(gf)am,(f.) (;) et(fffd) ex(f)áu(gf~)di(fg) ver(g)ba(fgff) me(d!ffd)a :(d!ewf.) (:) mi(c)rí(cd/fef)fi(f)ca(f) mi(fgf)se(f)ri(ef)cór(gh)di(g)as(ef) tu(g.f!gwhgh)as,(hg..) (;) qui(f) sal(e.f!gwh)vos(ghF'E) fa(g)cis(fff_g) (,) spe(dc)rán(df~)tes(fffddc) in(df) te,(ef'g) Dó(e)mi(egff)ne.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #265)",
      blurb: {
        text: "Perfice gressus meos draws on three consecutive verses of Psalm 17. The middle verse, Psalm 17:6, opens in the Douay-Rheims with an acknowledgment, \"I have cried to thee, for thou, O God, hast heard me,\" before moving to the petition to incline and hear; the Offertory drops that opening acknowledgment and begins at the petition itself. The chant also adds \"Domine\" at the close, a word not present in verse 7 of the psalm.",
        source: "Ps. 17:5, 6-7 (Vulgate numbering Ps. 16:5, 6-7) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-12-a": {
    communion: {
      title: "Circuibo et immolabo",
      latin: "Circuíbo, et immolábo in tabernáculo ejus hóstiam jubilatiónis : cantábo, et psalmum dicam Dómino.",
      translation: "I will go around and offer in his tabernacle a sacrifice of jubilation: I will sing and recite a psalm to the Lord.",
      mode: "Communion · Ordinary Time (Year A) · Mode VI",
      reference: "Ps. 27:6",
      gabc: "(c2) CIr(f)cu(fc)í(exegf)bo,(f.) (,) * et(f) im(h)mo(f)lá(g)bo(f.) (,) in(fc~) ta(f)ber(gi~)ná(i)cu(iii)lo(g) e(gihiv_[oh:h]H~G~)jus(hg..) (;) hó(h!iwj'!kv)sti(j)am(j) ju(j)bi(jh)la(ij)ti(h)ó(f_[oh:h]g_[oh:h]f_[oh:h])nis :(f.) (:) can(df~)tá(fef)bo,(d.) (,) et(dc~) psal(fgf)mum(fe~) di(giihivHGh_g/hff)cam(f) Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])no.(f.) (::)",
      source: "Graduale Romanum (GregoBase #1079)",
      blurb: {
        text: "Psalm 27:6 opens with a military image, the psalmist exalted on a rock with his head lifted above his enemies, but this Communion antiphon omits that half of the verse entirely and begins where the psalmist turns to offer sacrifice and song. What remains is pure act of worship: going round, offering a sacrifice of jubilation, singing a psalm to the Lord. The Gospel of this Sunday's Mass is Mark's account of the feeding of the four thousand, so the antiphon is sung after a crowd has once again been given bread in the wilderness.",
        source: "Ps. 27:6 (Vulgate numbering Ps. 26:6) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent06-0 (Missale Romanum formulary)",
      },
    }
  },
  "ot-12-b": {
    communion: {
      title: "Qui vult venire post me",
      latin: "Qui vult veníre post me, ábneget semetípsum : et tollat crucem suam, et sequátur me.",
      translation: "Whoever wishes to come after me, let him deny himself: and take up his cross, and follow me.",
      mode: "Communion · Ordinary Time (Year B) · Mode I",
      reference: "Matt. 16:24",
      gabc: "(c4) QUI(d) vult(f) ve(fe)ní(gh)re(ixih) post(fg) me,(fvED.) *(;) áb(ixf!gwhg/hih)ne(g)get(f) se(fe)met(d)í(fg'h)psum :(e.) (:) et(h) tol(ghg)lat(ef) cru(ghgh)cem(f_d) su(gef)am,(f.) (;) et(eg/hjh) se(fg)quá(ef)tur(d!ew!fv_E~C~) me.(d.) (::)",
      source: "Graduale Romanum (GregoBase #89)",
      blurb: {
        text: "Qui vult venire draws its words from Matthew 16:24, where Jesus turns from Peter to address all his disciples. The chant quietly reshapes the verse's opening: where the Vulgate reads \"Si quis vult post me venire,\" the chant turns the conditional into a relative clause, \"Qui vult venire post me.\"",
        source: "Matt. 16:24 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C2 (Missale Romanum formulary)",
      },
    }
  },
  "ot-12-c": {
    communion: {
      title: "Quod dico vobis",
      latin: "Quod dico vobis in ténebris, dícite in lúmine, dicit Dóminus : et quod in aure audítis, praedicáte super tecta.",
      translation: "What I tell you in darkness, speak in the light, says the Lord: and what you hear whispered, proclaim upon the housetops.",
      mode: "Communion · Ordinary Time (Year C) · Mode IV",
      reference: "Matt. 10:27",
      gabc: "(c4) QUod(d) di(e)co(f) vo(g)bis(f) *() in(fd~) té(f)ne(f)bris,(e_[oh:h]c) (,) dí(f)ci(f)te(e) in(d) lú(e)mi(f)ne,(g_[oh:h]d) di(e)cit(de) Dó(c)mi(c)nus :(c.) (;) et(e) quod(c) in(d) au(f)re(fe) au(d)dí(fg)tis,(g.) (,) prae(f)di(ef)cá(d)te(dc) su(d)per(f) te(egff)cta.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1002)",
      blurb: {
        text: "Quod dico vobis draws from Matthew 10:27, a single verse from Jesus's instructions to the apostles as he sends them out. The day's Gospel, however, is Luke 12:1-8, which carries a close parallel: \"quæ in ténebris dixístis, in lúmine dicéntur: et quod in aurem locúti estis in cubículis, prædicábitur in tectis.\" The Communion antiphon thus echoes the Gospel reading almost word for word, but reaches back to Matthew's account of an earlier missionary discourse rather than quoting Luke directly.",
        source: "Matt. 10:27 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C3b (Missale Romanum formulary)",
      },
    }
  },

  /* ---- 15th Sunday in Ordinary Time (ot-15) --------------------------- *
   * Introit "Dum clamarem". Alleluia/Offertory/Communion common; Gradual by
   * year (A & C "Custodi me" / B "Ostende nobis").                         */
  "ot-15": {
    alleluia: {
      title: "Te decet hymnus",
      latin: "Allelúia. ℣. Te decet hymnus, Deus, in Sion : et tibi reddétur votum in Jerúsalem.",
      translation: "Alleluia. ℣. A hymn befits you, O God, in Sion: and to you a vow shall be fulfilled in Jerusalem.",
      mode: "Alleluia · Ordinary Time · Mode VII",
      reference: "Ps. 65:2",
      gabc: "(c2) AL(c)le(ce/g_[oh:h]f)lú(ef!gvFE'g){ia}.(g_[oh:h]f/g_[oh:h]e) *(,) ij.(g/iivG'Fgv.fffc..) (;) (dffe/fhGF'D//gf/gffc.) (,) (fffvD'Cd_eddc.) (::) ℣. Te(cg'!hv) de(gh)cet(g) hy(gh)mnus,(g.) (,) De(g!hw!ivHG)us,(ghf//gvFEfe..) (;) in(fg) Si(gffe//fg!iiivGFii/jiivHG')on :(g/hhg.) (:) et(g) ti(h/iji)bi(i_[oh:h]h) red(iiivHG)dé(g_[oh:h]f)tur(fgffe.) (;) vo(ef!gvFE/!fg!iiivGFii/jiivHG')tum(g/hhg.) *(;) in(g) Je(gd)rú(fe)sa(fg)lem.(ggd.) (,) (ghG'Fiii//ghG'//D) (,) (ghG'Fiii//ghg.) (,) (g//ijI'G//iivG'Fiig.) (,) (g!iifhvGF'fc.) (;) (dffe/fhGF'D//gf/gffc.) (,) (fffvD'C/!d_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #1052)",
      blurb: {
        text: "Te decet hymnus draws on a single line from Psalm 65, which the Douay-Rheims translates from a heading describing it as \"the canticle of Jeremias and Ezechiel to the people of the captivity, when they began to go out.\" The verse that follows the one quoted runs: \"O hear my prayer: all flesh shall come to thee,\" widening the act of praise into a petition that the chant leaves unvoiced.",
        source: "Ps. 65:2 (Vulgate numbering Ps. 64:2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Ad te Domine levavi",
      latin: "Ad te, Dómine, levávi ánimam meam : Deus meus, in te confído, non erubéscam : neque irrídeant me inimíci mei : étenim univérsi qui te exspéctant, non confundéntur.",
      translation: "To you, O Lord, I have lifted up my soul: my God, in you I trust, let me not be put to shame: neither let my enemies laugh at me: for none who wait for you shall be confounded.",
      mode: "Offertory · Ordinary Time · Mode II",
      reference: "Ps. 25:1-3",
      gabc: "(f3) AD(c) te(ef//efefhhh_g) Dó(f)mi(fg!hvGF'g)ne(gf..) (;) * le(f_e/f!gwh)vá(h)vi(gf) á(hhhvF'Ef/hhh)ni(f)mam(fgef) me(f_[oh:h]g_[oh:h]f_[oh:h])am :(f.) (:) De(h)us(h) me(hihh)us,(g_[oh:h]f) (,) in(fe~) te(f) con(fe~)fí(fhG'E)do,(fe..) (;) non(hhi) e(h)ru(high)bé(h_[oh:h]i_[oh:h]h_[oh:h])scam :(h.) (:) ne(hh)que(h_g) ir(hhh)rí(f)de(e!gw!hvGF)ant(fgf) me(f.) (,) in(e)i(g)mí(i_[oh:h]h)ci(h) me(h_fgvFE'f)i :(fe..) (:) ét(fe)e(fgf)nim(fc) (,) u(efe)ni(f)vér(fih~)si(hi) qui(hg) te(f) ex(e)spé(efe)ctant,(c_[oh:h]bc.) (;) non(ef) con(ef)fun(f!gwh/ig/h_g)dén(fg!hvGF'g)tur.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #962)",
      blurb: {
        text: "Psalm 25, verses one through three, opens with the words \"Ad te Domine levavi,\" and the chant takes those verses in full, beginning exactly where the psalm itself begins. One small but telling difference appears in the final phrase: where the Clementine Vulgate reads \"universi qui sustinent te, non confundentur,\" the chant sings \"universi qui te exspéctant, non confundéntur.\" Both carry the same assurance that those who wait on God will not be put to shame.",
        source: "Ps. 25:1-3 (Vulgate numbering Ps. 24:1-3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Passer invenit sibi domum",
      latin: "Passer invénit sibi domum, et turtur nidum, ubi repónat pullos suos : altária tua, Dómine virtútum, Rex meus, et Deus meus : beáti qui hábitant in domo tua, in saéculum saéculi laudábunt te.",
      translation: "The sparrow has found herself a house, and the turtledove a nest, where she may lay her young: your altars, O Lord of hosts, my King and my God: blessed are they who dwell in your house, they shall praise you for ever and ever.",
      mode: "Communion · Ordinary Time · Mode I",
      reference: "Ps. 84:4-5",
      gabc: "(c2) PAs(fi)ser(i) *() in(i)vé(i)nit(ig~) si(hj)bi(j) do(hi)mum,(hi) (,) et(gh~) tur(fg~)tur(gh~) ni(fg)dum,(g.) (;) u(g)bi(g) re(g)pó(iv.iii)nat(g_[oh:h]f) pul(f)los(exegf) su(f_[oh:h]g_[oh:h]d_[oh:h])os :(d.) (:) al(f)tá(gih)ri(h)a(h) tu(j)a(jh) Dó(jk)mi(j)ne(iih) vir(fi~)tú(iv.iii)tum,(hg..) (;) Rex(h_fh) me(ghF'D)us,(d.) (,) et(d!f'g) De(ghf)us(fef) me(deD'C)us :(c.) (:) be(fgd)á(f)ti(fg) qui(gd) há(fh)bi(gh)tant(fg/h_g) (,) in(ig~) do(ij)mo(kjk) tu(igjvIH)a,(h.) (;) in(f) saé(hih)cu(g)lum(ge~) saé(ghgh)cu(g)li(fge.) (,) lau(ef/gf/gh~)dá(d)bunt(d!ewf_d) te.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1090)",
      blurb: {
        text: "Psalm 84 reaches this verse after two verses of longing: the soul fainting for the courts of the Lord, the heart and flesh rejoicing in the living God. The word that opens verse 4 in the Vulgate, \"Etenim,\" meaning \"for\" or \"for indeed,\" makes the birds finding their home a direct answer to that longing. The chant drops \"Etenim\" and begins with \"Passer,\" so the sparrow and the turtledove at God's altars stand on their own, without the ache that precedes them in the psalm.",
        source: "Ps. 84:4-5 (Vulgate numbering Ps. 83:4-5) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-15-a": {
    gradual: {
      title: "Custodi me Domine",
      latin: "Custódi me, Dómine, ut pupíllam óculi : sub umbra alárum tuárum prótege me. ℣. De vultu tuo judícium meum pródeat : óculi tui vídeant aequitátem.",
      translation: "Keep me, O Lord, as the apple of your eye: protect me under the shadow of your wings. ℣. Let my judgment come forth from your countenance: let your eyes behold what is right.",
      mode: "Gradual · Ordinary Time (Years A & C) · Mode I",
      reference: "Ps. 17:8, 2",
      gabc: "(c4) CU(d)stó(d)di(cd) me,(ff//egF'EfvEDe[ll:1]d..) (,) * Dó(dfe/f_g)mi(feede)ne,(dv.cd!ffd/ffvDCfgfff'1d) (,) (ffd'e//fgdevDCdc..) (;) ut(fg) pu(f)píl(f!hgh)lam(ixhihhg) ó(f)cu(fvED)li :(d.0/[-0.5]ef'!gvF'ED.fgf'gvF'ED.) (:) sub(dcf) um(hfh)bra(h/jjh/jggf.0) (,) a(f)lá(hfhGF//hf/ghjvv)rum(hj) tu(gf)á(fv.egffvED)rum(df..) (,) (cd'f/hfh/!ghf/!f'gf/gffe.) (;) pró(f_d/f!gwhgh)te(hgffd/f/[1]{/[-1]ix}f/hiGF'hvGF')ge(gffvD'Cffc) (,) (fgfg) me.(ixhg/hiGF'ghgh'//jvHG'hvF'D//fff/d_[oh:h]e_[oh:h]d._[oh:h]) (::) ℣. De(cd) vul(ixdh'!iv)tu(h) tu(h)o(hg/hhg/hh) (,) (gh!jjjh//jvvIH'jggf.0) (;) ju(dh)dí(h/jjh)ci(h/jjh)um(h.) me(hg/h/jjjg/ihhg)um(g) pród(i)e(jvIH)at :(h_[oh:h]i_[oh:h]h._[oh:h]) (:) ó(hj)cu(h_f)li(g) tu(h_f/gh!jv.ijh.1)(,)(ixjjvH'GhiG'F//ghF'Dfv.e!gwhgh)i(ixhf/higff/ded.) (:) ví(dfED'fvED.//de!fg/hjIH'hgh.)(,)(ixfh!ivGF'E//f!gwh!ivHG)de(hg)ant(g.) *(;) ae(g)qui(gh)tá(ixjhiGF'h!jjvH'G)tem.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1088)",
      blurb: {
        text: "Custodi me draws two verses from Psalm 17 and sings them in reverse order. The respond comes from verse 8, though it drops that verse's opening phrase, \"from them that resist thy right hand,\" and places the direct address \"Domine\" there instead. The psalm itself moves from \"let my judgment come forth from thy countenance\" in verse 2 to \"keep me as the apple of thy eye\" in verse 8, but the gradual inverts this, opening with the plea for shelter and saving the appeal to God's just sight for the close.",
        source: "Ps. 17:8, 2 (Vulgate numbering Ps. 16:8, 2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-15-b": {
    gradual: {
      title: "Ostende nobis Domine",
      latin: "Osténde nobis, Dómine, misericórdiam tuam : et salutáre tuum da nobis. ℣. Benedixísti, Dómine, terram tuam : avertísti captivitátem Jacob.",
      translation: "Show us, O Lord, your mercy: and grant us your salvation. ℣. You have blessed your land, O Lord: you have turned away the captivity of Jacob.",
      mode: "Gradual · Ordinary Time (Year B) · Mode II",
      reference: "Ps. 85:8",
      gabc: "(c3) OS(d)tén(ef)de(fd) no(ef)bis,(f.) *(,) Dó(f_)mi(d)ne,(b//dde/dddb) (,) (dd/ec'dvBA'//db'/cbba.) (;) mi(ba)se(de)ri(d)cór(ef)di(f)am(e[ll:1]d~) tu(ef!hh/ig'hvFEhhe/gf)am :(f.) (:) et(f) sa(hh)lu(ivHF)tá(hg)re(i_[uh:l]j) tu(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF)um(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) da(de'fhvGFgef) no(hf/h_i)bis.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Be(f)ne(h)di(hi)xí(i)sti,(ij) Dó(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI)mi(ji)ne,(i.) (:) ter(i!jw!kvJI'jw!kvJI)ram(ij~) tu(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)am :(f.) (:) a(hh)ver(hi)tí(ivH'GE//fhGEfh..)(,)(gi!jvHF)sti(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) ca(d)pti(ef)vi(f)tá(f.0/[-0.5]hvGF'g)tem(ef) () * Ja(hf/h_i)cob.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1055)",
      blurb: {
        text: "Ostende nobis Domine asks to see God's mercy and receive his salvation. Psalm 85 places that plea after the promise that God will turn and give life, then follows it with the assurance that he will speak peace to his people.",
        source: "Ps. 85:8 (Vulgate numbering Ps. 84:8) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-15-c": {
    gradual: {
      title: "Custodi me Domine",
      latin: "Custódi me, Dómine, ut pupíllam óculi : sub umbra alárum tuárum prótege me. ℣. De vultu tuo judícium meum pródeat : óculi tui vídeant aequitátem.",
      translation: "Keep me, O Lord, as the apple of your eye: protect me under the shadow of your wings. ℣. Let my judgment come forth from your countenance: let your eyes behold what is right.",
      mode: "Gradual · Ordinary Time (Years A & C) · Mode I",
      reference: "Ps. 17:8, 2",
      gabc: "(c4) CU(d)stó(d)di(cd) me,(ff//egF'EfvEDe[ll:1]d..) (,) * Dó(dfe/f_g)mi(feede)ne,(dv.cd!ffd/ffvDCfgfff'1d) (,) (ffd'e//fgdevDCdc..) (;) ut(fg) pu(f)píl(f!hgh)lam(ixhihhg) ó(f)cu(fvED)li :(d.0/[-0.5]ef'!gvF'ED.fgf'gvF'ED.) (:) sub(dcf) um(hfh)bra(h/jjh/jggf.0) (,) a(f)lá(hfhGF//hf/ghjvv)rum(hj) tu(gf)á(fv.egffvED)rum(df..) (,) (cd'f/hfh/!ghf/!f'gf/gffe.) (;) pró(f_d/f!gwhgh)te(hgffd/f/[1]{/[-1]ix}f/hiGF'hvGF')ge(gffvD'Cffc) (,) (fgfg) me.(ixhg/hiGF'ghgh'//jvHG'hvF'D//fff/d_[oh:h]e_[oh:h]d._[oh:h]) (::) ℣. De(cd) vul(ixdh'!iv)tu(h) tu(h)o(hg/hhg/hh) (,) (gh!jjjh//jvvIH'jggf.0) (;) ju(dh)dí(h/jjh)ci(h/jjh)um(h.) me(hg/h/jjjg/ihhg)um(g) pród(i)e(jvIH)at :(h_[oh:h]i_[oh:h]h._[oh:h]) (:) ó(hj)cu(h_f)li(g) tu(h_f/gh!jv.ijh.1)(,)(ixjjvH'GhiG'F//ghF'Dfv.e!gwhgh)i(ixhf/higff/ded.) (:) ví(dfED'fvED.//de!fg/hjIH'hgh.)(,)(ixfh!ivGF'E//f!gwh!ivHG)de(hg)ant(g.) *(;) ae(g)qui(gh)tá(ixjhiGF'h!jjvH'G)tem.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1088)",
      blurb: {
        text: "Custodi me draws two verses from Psalm 17 and sings them in reverse order. The respond comes from verse 8, though it drops that verse's opening phrase, \"from them that resist thy right hand,\" and places the direct address \"Domine\" there instead. The psalm itself moves from \"let my judgment come forth from thy countenance\" in verse 2 to \"keep me as the apple of thy eye\" in verse 8, but the gradual inverts this, opening with the plea for shelter and saving the appeal to God's just sight for the close.",
        source: "Ps. 17:8, 2 (Vulgate numbering Ps. 16:8, 2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ---- 16th Sunday in Ordinary Time (ot-16) --------------------------- *
   * Introit "Ecce Deus". Alleluia/Offertory common; Gradual by year (A
   * "Domine Dominus noster" / C "Si ambulem"); Communion (A & B "Acceptabis"
   * / C "Optimam partem").                                                 */
  "ot-16": {
    alleluia: {
      title: "Eripe me de inimicis",
      latin: "Allelúia. ℣. Eripe me de inimícis meis, Deus meus : et ab insurgéntibus in me líbera me.",
      translation: "Alleluia. ℣. Deliver me from my enemies, O my God: and rescue me from those who rise up against me.",
      mode: "Alleluia · Ordinary Time · Mode II",
      reference: "Ps. 59:2",
      gabc: "(f3) AL(ef~)le(f/hfghvGE./[-0.5]f'1//hf/gf)lú(ef~){ia}.(f'hvGF.) *(;) ij.(f'ivHG'F//g'hvGF'fe.) (,) (f'ivHG'F//e!hhhvGFggf.0) (::) ℣. E(ef)ri(f)pe(fg/h_f/g_[oh:h]e//fg!hvGF'ef~) me(f.) (,) de(fg) in(e)i(f)mí(f)cis(fi~) me(ivvHF'E)is,(f.) (;) De(i_[oh:h]h/i_[oh:h]hivHF'E)us(f.) me(h_g/h_ghvGF'E)us :(f'hvGF.) (:) et(f) ab(f) in(hg~)sur(hi~)gén(iv.hihf!gwhgh/!fgf/!fe//fg!hvGF'Ef.)(;)(fg!h'i//hihf!gwhgh/fgffe//fg!hvGF'Ef.)(,)(fg!h'i)ti(f_e)bus(e_[oh:h]c) in(ef~) me(f'hvGF.) (;) * lí(ef)be(f/hfghvGE./[-0.5]f'1//hf/gf)ra(ef~) me.(f'hvGF.) (;) (f'ivHG'F//g'hvGF'fe.) (,) (f'ivHG'F//e!hhhvGFggf.0) (::)",
      source: "Graduale Romanum (GregoBase #879)",
      blurb: {
        text: "Psalm 59 carries its own superscription: it was composed, the text says, when Saul sent messengers to watch David's house in order to kill him. The Alleluia verse draws only the opening cry of verse 2, setting aside verse 3's further description of those being fled from, \"them that work iniquity\" and \"bloody men.\" What remains is the plea at its most direct and unadorned.",
        source: "Ps. 59:2 (Vulgate numbering Ps. 58:2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Justitiae Domini",
      latin: "Justítiae Dómini rectae, laetificántes corda, et dulcióra super mel et favum : nam et servus tuus custódiet ea.",
      translation: "The justices of the Lord are right, rejoicing hearts, and sweeter than honey and the honeycomb: for your servant keeps them.",
      mode: "Offertory · Ordinary Time · Mode IV",
      reference: "Ps. 19:9, 10, 11, 12",
      gabc: "(c4) JU(d)stí(f)ti(fff)ae(f!gwhg/h_g) Dó(f)mi(fg!hvGF'g)ni(gf..) (,) * re(fff!gwhgh)ctae,(gf..) (;) lae(fff)ti(d!ew!fvEC)fi(d)cán(f)tes(fff) cor(f!gwhghv_G~F~)da,(gf..) (:) et(fd~) dul(fg)ci(fg'h)ó(hggf/ghGF'g)ra(gf..) (;) su(f)per(d) mel(df'!gv) et(g_[oh:h]f) fa(f.d!ewf/ge//fddcd)vum :(dc..) (:) nam(c!fff) et(fe~) ser(gh)vus(f_e) tu(fhg___)us(g.) (;) cu(f)stó(h_f/hgh)di(gf)et(fv.fffcfv) e(fv.fffhvGFgvFE)a.(e.) (::)",
      source: "Graduale Romanum (GregoBase #591)",
      blurb: {
        text: "Justitiae Domini draws from four consecutive verses of Psalm 19 but compresses them sharply. It opens with the first half of verse 9, skips the rest of that verse entirely, omits the whole of verse 10, then picks up only the closing phrase of verse 11, leaving behind its image of gold and precious stones. The result joins the beginning of verse 9 directly to the end of verse 11: the justices of the Lord rejoice the heart, and they are sweeter than honey and the honeycomb. Verse 12 then closes the antiphon in its first clause only, dropping the promise of great reward.",
        source: "Ps. 19:9, 10, 11, 12 (Vulgate numbering Ps. 18:9, 10, 11, 12) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-16-a": {
    gradual: {
      title: "Domine Dominus noster",
      latin: "Dómine, Dóminus noster, quam admirábile est nomen tuum in univérsa terra! ℣. Quóniam eleváta est magnificéntia tua super caelos.",
      translation: "O Lord, our Lord, how admirable is your name in all the earth! ℣. For your magnificence is exalted above the heavens.",
      mode: "Gradual · Ordinary Time (Year A) · Mode V",
      reference: "Ps. 8:2",
      gabc: "(c4) DO(ffg)mi(f)ne(f.) (,) * Dó(ghgh)mi(gf)nus(ffhg) no(f)ster,(fffvDC'dff//h_g/hggf.0) (:) quam(ixhih) ad(hg~)mi(gj)rá(j)bi(ixkjjhi)le(i_[oh:h]h) est(fh) (,) no(h)men(g.f!gw!hvGF'g) tu(ghg___)um(g.) (;) in(h) u(hg)ni(gj)vér(j)sa(ixj.h!iw!jvIG'hw!ivHG) ter(fgf)ra!(f!h'j) (,) (fh'!jvjv'1IG//fhg/hggf.0) (z0::c3) ℣. Quó(d)ni(d)am(d) e(d)le(fe)vá(eh)ta(h) est(h_[oh:h]i_[oh:h]h_2[oh:h]//i_[oh:h]hjvHF.1) (,) (h_g/ijh'___jvIH'jvIH'//hvGF.) (:) ma(f)gni(fe)fi(h)cén(h)ti(gh)a(f_e//fhe/f_e) tu(de!fvED'e)a(e[ll:1]d..) (;) * su(de)per(f) cae(fhG'Fhhh)los.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #1205)",
      blurb: {
        text: "Domine Dominus noster is sung on the feast of the Holy Name of Jesus, and its single source verse does double duty: Psalm 8:2 is one continuous sentence in the psalm, but the Gradual splits it in two, taking the first half as the respond and the second half as the verse. The Gospel of the day is Luke 2:21, the moment the child receives his name. The collect for the day addresses God as one who commanded the name Jesus to be given, \"Jesum vocári jussísti,\" so the psalm's awe at a name admirable through all the earth falls on ears already attuned to a single, specific name.",
        source: "Ps. 8:2 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Nat2-0 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Acceptabis sacrificium",
      latin: "Acceptábis sacrifícium justítiae, oblatiónes et holocáusta, super altáre tuum, Dómine.",
      translation: "You will accept the sacrifice of justice, oblations and holocausts, upon your altar, O Lord.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode IV",
      reference: "Ps. 51:21",
      gabc: "(c4) AC(d)ce(dh)ptá(ixhv.fg'high)bis(eef.) *(,) sa(dg)cri(g)fí(ixhig/hi)ci(h)um(h) ju(ixhv.fghig/h_g)stí(e)ti(egff)ae,(eef.) (:) ob(fd)la(fe)ti(fg)ó(g)nes(d!ewf.) et(fd) ho(ef)lo(g)cáu(ixgh/ihhg~)sta,(hg..) (;) su(ge/ghGE'f)per(d!ewf) al(cd'f~)tá(fv.fffdg)re(g) tu(ghf)um,(d!ewf) Dó(e)mi(egff)ne.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1221)",
      blurb: {
        text: "Acceptabis sacrificium justitiae draws from the final verse of Psalm 51, but quietly reshapes it. The Clementine Vulgate reads \"tunc acceptabis sacrificium justitiae, oblationes et holocausta; tunc imponent super altare tuum vitulos,\" closing with the image of calves laid upon the altar. The chant drops that final clause and adds \"Domine\" in its place, turning a conditional promise tied to the rebuilding of Jerusalem into a direct address to God at the moment of offering.",
        source: "Ps. 51:21 (Vulgate numbering Ps. 50:21) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-16-b": {
    communion: {
      title: "Acceptabis sacrificium",
      latin: "Acceptábis sacrifícium justítiae, oblatiónes et holocáusta, super altáre tuum, Dómine.",
      translation: "You will accept the sacrifice of justice, oblations and holocausts, upon your altar, O Lord.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode IV",
      reference: "Ps. 51:21",
      gabc: "(c4) AC(d)ce(dh)ptá(ixhv.fg'high)bis(eef.) *(,) sa(dg)cri(g)fí(ixhig/hi)ci(h)um(h) ju(ixhv.fghig/h_g)stí(e)ti(egff)ae,(eef.) (:) ob(fd)la(fe)ti(fg)ó(g)nes(d!ewf.) et(fd) ho(ef)lo(g)cáu(ixgh/ihhg~)sta,(hg..) (;) su(ge/ghGE'f)per(d!ewf) al(cd'f~)tá(fv.fffdg)re(g) tu(ghf)um,(d!ewf) Dó(e)mi(egff)ne.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1221)",
      blurb: {
        text: "Acceptabis sacrificium justitiae draws from the final verse of Psalm 51, but quietly reshapes it. The Clementine Vulgate reads \"tunc acceptabis sacrificium justitiae, oblationes et holocausta; tunc imponent super altare tuum vitulos,\" closing with the image of calves laid upon the altar. The chant drops that final clause and adds \"Domine\" in its place, turning a conditional promise tied to the rebuilding of Jerusalem into a direct address to God at the moment of offering.",
        source: "Ps. 51:21 (Vulgate numbering Ps. 50:21) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-16-c": {
    gradual: {
      title: "Si ambulem",
      latin: "Si ámbulem in médio umbrae mortis, non timébo mala : quóniam tu mecum es, Dómine. ℣. Virga tua, et báculus tuus, ipsa me consoláta sunt.",
      translation: "Though I should walk in the midst of the shadow of death, I will fear no evils: for you are with me, O Lord. ℣. Your rod and your staff, they have comforted me.",
      mode: "Gradual · Ordinary Time (Year C) · Mode I",
      reference: "Ps. 23:4",
      gabc: "(c4) SI(d) ám(fg)bu(gvF'EfvED'e)lem(e[ll:1]d..) *(,) in(f) mé(ghgh)di(hjH'GF'gwhgh)o(hg..) (,) um(hv.fg'h)brae(g) mor(fv.dfe)tis,(d//ffd/fhhg.) (;) non(dh) ti(hg)mé(h'/jij)bo(hv.fh!jvH'GF'g) ma(fv.dfe)la :(d!ffd) (,) (fge'/fgd'/e[ll:1]ddc.) (:) quó(f)ni(d)am(e) tu(f) me(ghgh./gh/jj//jjj)cum(g) es,(hg/hfg) (,) Dó(d)mi(d)ne.(dc/d!ff/ghG'Efgff/ded.) (::) ℣. Vir(h_fhvhggef)ga(d.) tu(dc/d!ff/gh!jjg)(,)(ixhhghvGF./[-0.5]hiHG'hw!ivHGhi)a,(h.) (;) et(dh) bá(h/jjh)cu(h!jjh)lus(h_g) tu(hg/h!jjjgivHG'gf/gh/j.h!iwj_h)us,(h.) (:) i(h_f//hvhggef)psa(de) me(d_c/d!ewf!gv.fg!hvFEfg!hvhg.) *(,) con(g)so(gh)lá(ixjhiGF'h!jjvH'Gh')ta(d) sunt.(dc/d!ff/ghG'Efgff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #1121)",
      blurb: {
        text: "Si ambulem draws both its respond and its verse from a single verse of scripture, Psalm 23:4, without borrowing from anywhere else in the psalm. The Douay-Rheims renders that verse: \"For though I should walk in the midst of the shadow of death, I will fear no evils, for thou art with me. Thy rod and thy staff, they have comforted me.\" The gradual sets that one verse in full, dividing it at its midpoint to form the two musical units.",
        source: "Ps. 23:4 (Vulgate numbering Ps. 22:4) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Optimam partem",
      latin: "Óptimam partem elégit sibi María, quae non auferétur ab ea in aetérnum.",
      translation: "Mary has chosen the best part, which shall not be taken away from her for ever.",
      mode: "Communion · Ordinary Time (Year C) · Mode VIII",
      reference: "Luke 10:42",
      gabc: "(c4) OP(gg)ti(g)mam(gh~) par(hvGF//g.h!iwjg)tem(g.) *(,) e(gh)lé(jkjk)git(ij~) si(h)bi(hvGF') Ma(h)rí(hj/I'G)a,(g.) (:) quæ(g) non(hih) au(g)fe(e)ré(f/fg)tur(gvFED.) ab(fg) e(g)a(ghg'h) (,) in(f) æ(ghg)tér(h!jj/hi~)num.(g.) (::)",
      source: "Graduale Romanum (GregoBase #3316)",
      blurb: {
        text: "Optimam partem names Mary's choice of the best portion, which will not be taken from her. The Communion receives Christ's word as a quiet defense of attentive listening.",
        source: "Luke 10:42 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ---- 17th Sunday in Ordinary Time (ot-17) --------------------------- *
   * Introit "Deus in loco sancto". Alleluia/Offertory common; Gradual by year
   * (A "In Deo speravit" / B "Oculi omnium"); Communion by year (A "Simile
   * est", B "Honora Dominum", C "Petite et accipietis").                   */
  "ot-17": {
    alleluia: {
      title: "Exsultate Deo",
      latin: "Allelúia. ℣. Exsultáte Deo adjutóri nostro, jubiláte Deo Jacob : súmite psalmum jucúndum cum cíthara.",
      translation: "Alleluia. ℣. Rejoice in God our helper, sing aloud to the God of Jacob: take up a pleasant psalm with the harp.",
      mode: "Alleluia · Ordinary Time · Mode VII",
      reference: "Ps. 81:2-3",
      gabc: "(c2) AL(c)le(cfe)lú(fg~){ia}.(g.) (,) * ij.(ffg/e!g'h//fhg___!hwi_[oh:h]g.e.[ll:1]d!ewf/gffc) (,) (fffd/!/!fe/!gf/!fvD'C/!d_ed/!dc.) (::) ℣. Ex(cd)sul(c)tá(cfe)te(fg) De(ghF'Ef_g)o(g.) (;) ad(g)ju(g)tó(g)ri(i.g!hw!ivHG) no(ghF'Ef_g)stro,(ghfgvFEfe..) (:) ju(ef)bi(e)lá(e.f!gwh)te(hghvFDgv.) (,) De(gffvE'DC)o(ddc.) Ja(c.d!ewf'!gv)cob :(ghF'Efg..) (:) sú(c)mi(cfe)te(fg) psal(g!hwi/ji/!ig!hwi_[oh:h]hivH~G~)mum(h_g) (,) ju(g)cún(g)dum(i.g!hwi_[oh:h]hivHGhg..) *(;) cum(gd~) cí(dfe)tha(fg)ra.(g.) (,) (ffg/e!g'h//fhg___!hwi_[oh:h]g.e.[ll:1]d!ewf/gffc) (,) (fffd/!/!fe/!gf/!fvD'C/!d_ed/!dc.) (::)",
      source: "Graduale Romanum (GregoBase #580)",
      blurb: {
        text: "Exsultate Deo draws its words from Psalm 81:2-3, but verse 3 is quietly reshaped in the chant. The psalm's own text, \"Sumite psalmum, et date tympanum; psalterium jucundum cum cithara,\" lists three instruments: timbrel, psaltery, and harp. The chant drops the timbrel and the psaltery, and moves the word \"jucundum,\" meaning pleasant, from the psaltery to the psalm itself, so what the psalm called a pleasant psaltery becomes, in the chant, a pleasant psalm.",
        source: "Ps. 81:2-3 (Vulgate numbering Ps. 80:2-3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Exaltabo te Domine",
      latin: "Exaltábo te, Dómine, quóniam suscepísti me, nec delectásti inimícos meos super me : Dómine, clamávi ad te, et sanásti me.",
      translation: "I will extol you, O Lord, for you have upheld me, and have not let my enemies rejoice over me: O Lord, I cried to you, and you healed me.",
      mode: "Offertory · Ordinary Time · Mode II",
      reference: "Ps. 30:2-3",
      gabc: "(c3) EX(c)al(e)tá(egf)bo(f) te(f.) *(,) Dó(f)mi(f!hhh)ne,(fefe..) (;) quó(hh)ni(fef)am(f/hhh//giH'GhvGFgf..) (,) sus(fhF'Ef')ce(d)pí(df!hvF'D)sti(d_[oh:h]e_[oh:h]d_[oh:h]) me,(d.) (:) nec(f/hhi) de(f!hhh)le(f!hhh)ctá(e/fgf)sti(fe/f!hhhvFE'ece.) (;) in(c)i(c)mí(ef)cos(fe~) me(f/hh/i_[oh:h]h)os(h.) (,) su(hi/jij)per(h_f/ih'/ihhe/f!gw!hvGFgv_[oh:h]F~E~) me :(fe..) (:) Dó(fh/ih)mi(ivHF)ne(fefvECe.) (,) cla(ec~)má(ef)vi(fe) ad(f/hh/i_[oh:h]h) te,(h.) (;) et(h) sa(f!gwhg)ná(hhhvF'Ef/hhhvF'E//fgf/gf/hhh)sti(f_[oh:h]g_[oh:h]f_[oh:h]) me.(f.) (::)",
      source: "Graduale Romanum (GregoBase #648)",
      blurb: {
        text: "Exaltabo te Domine draws on the opening two verses of Psalm 30, trimming verse 3 in one small way: where the Vulgate reads \"Domine Deus meus, clamavi ad te, et sanasti me,\" the chant drops \"Deus meus,\" so the address moves directly from \"Domine\" to the cry for healing. The psalm carries a dedication heading in the Vulgate, \"Psalmus cantici, in dedicatione domus David,\" linking this song of deliverance to the founding of David's house.",
        source: "Ps. 30:2-3 (Vulgate numbering Ps. 29:2-3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-17-a": {
    gradual: {
      title: "In Deo speravit",
      latin: "In Deo sperávit cor meum, et adjútus sum : et reflóruit caro mea : et ex voluntáte mea confitébor illi. ℣. Ad te, Dómine, clamávi : Deus meus, ne síleas, ne discédas a me.",
      translation: "In God has my heart hoped, and I have been helped: and my flesh has flourished again: and with my will I shall give praise to him. ℣. To you, O Lord, I have cried: my God, be not silent, depart not from me.",
      mode: "Gradual · Ordinary Time (Year A) · Mode V",
      reference: "Ps. 28:7, 1",
      gabc: "(c4) IN(d) De(ffg)o(f.) *(,) spe(f)rá(fg)vit(f) cor(ghgh) me(hvGF'fvED)um,(e[ll:1]d..) (;) et(fe) ad(fg~)jú(ggf)tus(g) sum :(fe/fg/hghvGFgf..) (;) et(fg) re(f)fló(gh)ru(gf)it(f.) (,) ca(f)ro(g) me(f)a :(fv.d!ff/ge'/fgd'/e[ll:1]ddc.) (:) et(h) ex(f) vo(g)lun(h)tá(hj/kjk)te(j) me(ixi_[oh:h]h)a(iii/ghg.___) (;) con(ixih~)fi(i)té(jv.ikJI'ivH'GF)bor(ggf.0) (,) il(gf/ggf/gff//gf~)li.(gv.fgff'f//f'hg/hggf.0) (z0::c3) ℣. Ad(d) te,(f) Dó(fh/ih/ijh)mi(h)ne,(h.) (,) cla(h)má(h)vi :(ihhe./h_[oh:h]i_[oh:h]h_[oh:h]/ihhe.) (,) (hi!kv//lvKI'jvHF.1) (,) (h_g/ijh'___jvIH'jvIH'//hvGF.) (:) De(f!h'i)us(ih/jkihhf.) (`) me(hf/hhh)us,(h.f!gwh!iv.hi/jhh/iih.0) (:) ne(f) sí(h_f//g_0[uh:l]h_[uh:l]i!jwk)le(i_[oh:h]hivHFhhh)as :(h.) (;) ne(d) di(d)scé(dfE'D)das(ef) *() a(fhG'Fhhh) me.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #865)",
      blurb: {
        text: "In Deo speravit draws its verses from Psalm 28 in reverse order: the body of the gradual takes from verse 7, and the versicle reaches back to verse 1. The compiler also adjusted verse 7, where the psalm reads \"in ipso speravit cor meum,\" replacing \"in ipso\" with \"in Deo\" so the chant opens with an explicit name for God. In the versicle, the psalm's future tense \"clamabo\" becomes the past \"clamavi,\" turning what was a vow into a completed act.",
        source: "Ps. 28:7, 1 (Vulgate numbering Ps. 27:7, 1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Simile est regnum caelorum",
      latin: "Símile est regnum caelórum hómini negotiatóri, quaerénti bonas margarítas : invénta una pretiósa margaríta, dedit ómnia sua, et comparávit eam.",
      translation: "The kingdom of heaven is like a merchant seeking good pearls: having found one precious pearl, he gave all that he had, and bought it.",
      mode: "Communion · Ordinary Time (Year A) · Mode VIII",
      reference: "Matt. 13:45-46",
      gabc: "(c4) SI(ggh)mi(g)le(g) est(g) * re(g)gnum(d) cae(g)ló(giH'G)rum(g.) (;) hó(jij)mi(hg)ni(g) ne(h)go(i.h!iwj)ti(hg)a(hi)tó(hhgh)ri,(g.) (,) quae(g)rén(g_[oh:h])ti(d) bo(eg)nas(fv.efd) mar(d)ga(e)rí(gh)tas :(ghg.) (:) in(gh~)vén(jjjk~)ta(j.) (,) u(j)na(j) pre(j)ti(jh)ó(ijhi)sa(gh) mar(d)ga(e)rí(gh)ta,(gh/igh.) (;) de(e')dit(f) ó(g')mni(f)a(e') su(f)a,(efd.1) (,) et(gh) com(d)pa(g)rá(g/jjh)vit(ih) e(ghg___)am.(g.) (::)",
      source: "Graduale Romanum (GregoBase #673)",
      blurb: {
        text: "Simile est regnum caelorum tells Matthew 13's parable of the merchant who searches for fine pearls. After finding one pearl of great price, he gives all he has to buy it, and the Communion lets that costly choice describe the kingdom of heaven.",
        source: "Matt. 13:45-46 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-17-b": {
    gradual: {
      title: "Oculi omnium",
      latin: "Óculi ómnium in te sperant, Dómine : et tu das illis escam in témpore opportúno. ℣. Áperis tu manum tuam : et imples omne ánimal benedictióne.",
      translation: "The eyes of all hope in you, O Lord: and you give them food in due season. ℣. You open your hand: and fill every living creature with blessing.",
      mode: "Gradual · Ordinary Time (Year B) · Mode VII",
      reference: "Ps. 145:15-16",
      gabc: "(c2) O(c.d!ewff)cu(gffvED)li(d_c) *(,) ó(cd/ede)mni(cd!evDC'd)um(dc..) (;) in(cf) te(fg) spe(g'hvGF')rant,(gffe~) (,) Dó(fg)mi(g)ne :(gigivvHGhg/j_i//hjii/ghg.) (:) et(f) tu(h/iji) das(i_[oh:h]h) il(iiiv_[oh:h]H~G~)lis(ghgg/efe.) (;) e(ef!gh!ivGF'Ef_g)scam(ghff'fvE'DCdc..) (;) in(cd) tém(fe/f_g)po(gefvEDef)re(e./fgf'/gd//evDCdc..) (;) op(cd)por(fe~)tú(fgf)no.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::) ℣. A(g)pe(hgge/f'/gffe/g'/hgge//f'/gff)(,)(d!fffvDC'd!ff//eg!hvFEghG'Fgh)ris(gh) tu(g.) (;) ma(gigivvHGhg/j_i)num(i_[oh:h]h) (,) tu(hjI'HG)am :(gv.d_f!g!hw!ivHF'iv//hig/hhg.) (:) et(ghG'E) im(f!gwh)ples(g'/hg'/hff'f/gddc//dc/ded.) (,) o(cd)mne(c) á(c)ni(c.d!ew!fvED'e)mal(dc..) *(;) be(cd)ne(fe)di(fgf)cti(ge)ó(fg)ne.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::)",
      source: "Graduale Romanum (GregoBase #1230)",
      blurb: {
        text: "Psalm 145 describes all creatures looking to God for food in due season. Its next verse turns to God's open hand, which fills every living creature with blessing in this Ordinary Time Gradual.",
        source: "Ps. 145:15-16 (Vulgate numbering Ps. 144:15-16) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Honora Dominum",
      latin: "Honóra Dóminum de tua substántia, et de primítiis frugum tuárum : ut impleántur hórrea tua saturitáte, et vino torculária redundábunt.",
      translation: "Honor the Lord with your substance, and with the first of your fruits: that your barns may be filled with abundance, and your presses overflow with wine.",
      mode: "Communion · Ordinary Time (Year B) · Mode VI",
      reference: "Prov. 3:9-10",
      gabc: "(c4) HO(d)nó(ffg)ra(f) * Dó(ghgh)mi(gf)num(f.) (,) de(f) tu(fv.egF'D)a(d_c) sub(ixfv.eg!hvi.g!hw!ivHG')stán(f)ti(fg!hvGF'g)a,(gf..) (:) et(f) de(f) pri(hj)mí(j)ti(ixkjjhi)is(i_[oh:h]h) (,) fru(ixh.g!hwi)gum(h) tu(ghg)á(fg!hvGF'g)rum :(gf..) (:) ut(f) im(f)ple(h!iwj)án(jij)tur(h_gh.) hór(k)re(j)a(ij) tu(hjggfg)a(g_[oh:h]f_[oh:h]) (,) sa(fge)tu(e!g'h)ri(gh)tá(f_[oh:h]g_[oh:h]f_[oh:h])te,(f.) (:) et(fh~) vi(hgh)no(hg/hffg.) (,) tor(c)cu(d!ewf)lá(f)ri(ef)a(d_cd.) (,) red(fge)un(ixeg!hvi.g!hw!ivHG)dá(fg!hvGF'g)bunt.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #1145)",
      blurb: {
        text: "Honora Dominum draws its two verses directly from Proverbs 3:9-10, trimming them slightly. The Clementine Vulgate reads \"de primitiis omnium frugum tuarum da ei,\" including \"omnium\" and closing with \"da ei\"; the chant drops both, sharpening the conditional shape of the promise without the explicit command to give. The surrounding verses of Proverbs 3 frame this passage as part of a broader call to fear God and accept his correction, themes the chant leaves behind to hold the single image of barns filled and wine-presses running over.",
        source: "Prov. 3:9-10 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-17-c": {
    communion: {
      title: "Petite et accipietis",
      latin: "Pétite, et accipiétis : quaérite, et inveniétis : pulsáte, et aperiétur vobis : omnis enim qui petit, áccipit : et qui quaerit, ínvenit : pulsánti aperiétur.",
      translation: "Ask, and you shall receive: seek, and you shall find: knock, and it shall be opened to you: for everyone who asks, receives: and he who seeks, finds: to him who knocks it shall be opened.",
      mode: "Communion · Ordinary Time (Year C) · Mode I",
      reference: "Luke 11:9-10",
      gabc: "(c4) PE(fg)ti(h)te,(g.) *(,) et(g) ac(ge)ci(fg)pi(fe)é(d_[oh:h]e_[oh:h]d_[oh:h])tis :(d.) (;) quaé(f)ri(ef)te,(d.) (,) et(d) in(dc~)ve(dfe)ni(f)é(f_devDC'd)tis :(dc..) (;) pul(cd)sá(d!ewf!gvFE'fwgfg)te,(gf..) (,) et(fg) a(f)pe(ffe)ri(dc)é(df)tur(ef~) vo(d_[oh:h]e_[oh:h]d_[oh:h])bis :(d.) (:) o(fg'h)mnis(g) e(gh)nim(g) qui(g) pe(g)tit,(ge) ác(fg)ci(efED'e)pit :(e[ll:1]d..) (;) et(gh) qui(g) quae(g)rit,(ge) ín(fg)ve(ef_E'_DC'd)nit :(cd/e[ll:1]d..) (:) pul(cd)sán(f.e!fwgfg)ti(gf..) (,) a(ffe)pe(fg'h)ri(f_e)é(de!fvED'e)tur.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #422)",
      blurb: {
        text: "Petite et accipietis draws its text from Luke 11:9-10, following the Vulgate closely but with one quiet change: where Luke 11:9 reads dabitur vobis, it shall be given to you, the chant has accipietis, you shall receive, bringing the promise into closer alignment with the words that follow in verse 10, omnis enim qui petit, accipit. Those two verses sit in Luke immediately after the parable of a man knocking on a neighbor's door to beg for bread, so the command to ask, seek, and knock carries the weight of that story behind it.",
        source: "Luke 11:9-10 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ---- 18th Sunday in Ordinary Time (ot-18) --------------------------- *
   * Introit keys ot-18-a (Year A) / ot-18-b (Years B & C) in introits.js;
   * the day resolves with dayKey "ot-18" + cycle, so common propers live on
   * the base ot-18 key here. Gradual A "Oculi omnium" / B & C "Benedicam";
   * Offertory A & B "Precatus est Moyses" / C "Sanctificavit Moyses";
   * Alleluia & Communion common.                                          */
  "ot-18": {
    alleluia: {
      title: "Domine Deus salutis meae",
      latin: "Allelúia. ℣. Dómine Deus salútis meae, in die clamávi, et nocte coram te.",
      translation: "Alleluia. ℣. O Lord, the God of my salvation, I have cried in the day, and in the night before you.",
      mode: "Alleluia · Ordinary Time · Mode III",
      reference: "Ps. 88:2",
      gabc: "(c4) AL(e)le(egfefE'Dee[ll:1]d)lú(g!hwi'!jv){ia}.(ih) *(,) ij.(jvIHjji//gh/ihhg) (;) (gh!jvvIGhh//gh/i_[oh:h]g) (,) (gh!jvvIGhhvGF//ghg/hgge.) (::) ℣. Dó(efE'D)mi(g)ne(hjj) De(j)us(ih/jkJH'Ghhg.) (,) sa(hih)lú(iji)tis(h_g/h!iwj) me(ikJ'I)ae,(i.) (:) in(g) di(g!jj)e(i_[oh:h]h) cla(i)má(g/hhf/gg//egee[ll:1]d/ef)vi,(e.) (;) et(e) no(egf)cte(ef'g) () * co(hiH'G)ram(g'hj) te.(ih) (,) (jvIHjji//gh/ihhg) (;) (gh!jvvIGhh//gh/i_[oh:h]g) (,) (gh!jvvIGhhvGF//ghg/hgge.) (::)",
      source: "Graduale Romanum (GregoBase #1082)",
      blurb: {
        text: "Domine Deus salutis meae draws its verse from the opening of Psalm 88, which the Douay-Rheims describes as a psalm that agrees to Christ in his passion, and alludes to his death and burial. The Alleluia takes only that first supplication, the cry of trust, before the psalm moves on. By verse 3 the voice pleads for God to incline his ear, and by verse 4 it declares that the soul is filled with evils and that life has drawn nigh to hell. The Alleluia holds to the opening cry, before the psalm's long descent into darkness.",
        source: "Ps. 88:2 (Vulgate numbering Ps. 87:2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Panem de caelo",
      latin: "Panem de caelo dedísti nobis, Dómine, habéntem omne delectaméntum, et omnem sapórem suavitátis.",
      translation: "You gave us bread from heaven, O Lord, having in it all delight, and every taste of sweetness.",
      mode: "Communion · Ordinary Time · Mode V",
      reference: "Wis. 16:20",
      gabc: "(c3) PA(dde)nem(d) de(df) cae(feede)lo(e_[oh:h][ll:1]d) (,) * de(d)dí(ef)sti(hffe) no(hhi)bis,(h) Dó(hji)mi(ihhf)ne,(f.) (;) ha(f)bén(hi~)tem(h) o(h)mne(hhh) de(fg'h)le(e_[oh:h][ll:1]d)cta(fdf)mén(fe/gf)tum,(f.) (:) et(f) o(hi~)mnem(i) sa(ih)pó(i_[oh:h]hivH'GF'g)rem(g_[oh:h]f) (,) su(fhd)a(de'f)vi(gxfhFE'fw!gvFE)tá(de!fvED'e)tis.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #388)",
      blurb: {
        text: "Panem de caelo dedisti nobis draws from Wisdom 16:20, dropping the verse's opening comparison with Egypt's plagues and its phrase about bread prepared without labour. The antiphon also shifts the pronoun: the Vulgate says God gave the bread to them, præstitisti illis, but the antiphon replaces that with dedisti nobis, drawing the ancient gift of manna directly into the present prayer. The full verse in Wisdom addresses manna as God's answer to the plagues sent against the Egyptians; the antiphon sets all of that aside to rest on the gift alone.",
        source: "Wis. 16:20 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-18-a": {
    gradual: {
      title: "Oculi omnium",
      latin: "Óculi ómnium in te sperant, Dómine : et tu das illis escam in témpore opportúno. ℣. Áperis tu manum tuam : et imples omne ánimal benedictióne.",
      translation: "The eyes of all hope in you, O Lord: and you give them food in due season. ℣. You open your hand: and fill every living creature with blessing.",
      mode: "Gradual · Ordinary Time (Year A) · Mode VII",
      reference: "Ps. 145:15-16",
      gabc: "(c2) O(c.d!ewff)cu(gffvED)li(d_c) *(,) ó(cd/ede)mni(cd!evDC'd)um(dc..) (;) in(cf) te(fg) spe(g'hvGF')rant,(gffe~) (,) Dó(fg)mi(g)ne :(gigivvHGhg/j_i//hjii/ghg.) (:) et(f) tu(h/iji) das(i_[oh:h]h) il(iiiv_[oh:h]H~G~)lis(ghgg/efe.) (;) e(ef!gh!ivGF'Ef_g)scam(ghff'fvE'DCdc..) (;) in(cd) tém(fe/f_g)po(gefvEDef)re(e./fgf'/gd//evDCdc..) (;) op(cd)por(fe~)tú(fgf)no.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::) ℣. A(g)pe(hgge/f'/gffe/g'/hgge//f'/gff)(,)(d!fffvDC'd!ff//eg!hvFEghG'Fgh)ris(gh) tu(g.) (;) ma(gigivvHGhg/j_i)num(i_[oh:h]h) (,) tu(hjI'HG)am :(gv.d_f!g!hw!ivHF'iv//hig/hhg.) (:) et(ghG'E) im(f!gwh)ples(g'/hg'/hff'f/gddc//dc/ded.) (,) o(cd)mne(c) á(c)ni(c.d!ew!fvED'e)mal(dc..) *(;) be(cd)ne(fe)di(fgf)cti(ge)ó(fg)ne.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::)",
      source: "Graduale Romanum (GregoBase #1230)",
      blurb: {
        text: "Oculi omnium takes two consecutive verses from Psalm 145, verses 15 and 16, without omission. The Gradual's image of God opening his hand to feed every living creature leads into the Gospel's words about Christ as true food and drink.",
        source: "Ps. 145:15-16 (Vulgate numbering Ps. 144:15-16) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent01-4 (Missale Romanum formulary)",
      },
    },
    offertory: {
      title: "Precatus est Moyses",
      latin: "Precátus est Móyses in conspéctu Dómini Dei sui, et dixit : Quare, Dómine, irásceris in pópulo tuo? Parce irae ánimae tuae : meménto Abraham, Isaac et Jacob, quibus jurásti dare terram fluéntem lac et mel. Et placátus factus est Dóminus de malignitáte, quam dixit fácere pópulo suo.",
      translation: "Moses prayed in the sight of the Lord his God, and said: Why, O Lord, are you angry with your people? Let the anger of your soul be appeased: remember Abraham, Isaac and Jacob, to whom you swore to give a land flowing with milk and honey. And the Lord was appeased from the wrath which he had threatened against his people.",
      mode: "Offertory · Ordinary Time (Years A & B) · Mode VIII",
      reference: "Ex. 32:11-14",
      gabc: "(c3) PRe(e)cá(fhe)tus(d!ewfef) est(f_e) (,) * Mó(f)y(h)ses(hihhvGEf.) (;) in(b) con(b)spé(de)ctu(de) Dó(f_e/f!gw!hvGF)mi(e!gw!hvGF'g)ni(g_[oh:h]f) (,) De(f)i(e[ll:1]d) su(ef!gvFE'f)i,(fe..) (;) et(e) di(e!hhe/ff//df!hvED'db//cd!efe)xit.(e.) (:) Pre(e)cá(fhe/fe)tus(d!ewfef) est(f_e) (,) Mó(f)y(h)ses(hg/hihhvGEf.) (;) in(b) con(b)spé(de)ctu(de) Dó(f_e/f!gw!hvGF)mi(e!gw!hvGF'g)ni(g_[oh:h]f) (,) De(f)i(e[ll:1]d) su(ef!gvFE'f)i,(eb..) (;) et(b) di(b!ddb//cd!efe)xit :(e.) (:) Qua(ehhi)re,(hi) Dó(h)mi(ivHF)ne,(efe.) (,) i(e)rá(e!hh//hhhffee[ll:1]d!ewf!gvFE)sce(fe)ris(e.) (;) in(d) pó(efe/fg)pu(f)lo(f) tu(e.[ll:1]d!ewfef)o?(fe..) (:) Par(de/f!hhhhi~)ce(g) i(h)rae(efe.) (,) á(hhi)ni(f)mae(efe) tu(ffeg'FEfvEDef!gvFE'f)ae :(fe..) (:) me(e)mén(ei'!jv)to(i) A(i)bra(i)ham,(i!jw!kvJI) (,) I(hi)sa(gh)ac(iih.0) (,) et(hv.hh//hhh_g/hi!kvJI) Ja(hi)cob,(i_[oh:h]e/f_[oh:h]g_[oh:h]f._[oh:h]) (;) qui(d)bus(e) ju(f)rá(fi)sti(h) da(hg)re(f) ter(h)ram(hh//hhh) (,) flu(e)én(f)tem(e[ll:1]d~) lac(e.) (`) et(e!fwgf/g_[oh:h]f/hhf/hhvFD'ew!fvEDef) mel.(e.) (:) Et(d) pla(f)cá(h)tus(hf~) fa(hi'j)ctus(i) est(hiHF.1) (,) Dó(h!iwj_i)mi(i.h!iwjij)nus(ji..) (;) de(iv.hhhh_i) ma(e)li(f)gni(g)tá(g)te,(iv.hhhh_i) (;) quam(fe~) di(h!iwj_i)xit(j) fá(ijhh)ce(hv.fh!ivHG'h)re(hg..) (;) pó(i_[oh:h]h)pu(h)lo(ihhf/hhhhv'1GE//fhfhvFD.1) (,) (ef!hvvGF'gw!hvGF) su(ef!gvFE'f)o.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #325)",
      blurb: {
        text: "Precatus est Moyses draws from Exodus 32:11-14, but compresses Moses's prayer. Verse 12, where Moses argues that the Egyptians will mock God for leading the people out only to destroy them in the mountains, is dropped entirely. The promise Moses invokes in verse 13, that God would multiply their seed as the stars of heaven and give them the whole land, is silently replaced with the phrase \"terram fluentem lac et mel,\" a land flowing with milk and honey, a phrase that belongs to other passages in the books of Moses rather than to this moment. The chant retains the opening plea and the appeal to the patriarchs in compressed liturgical form.",
        source: "Ex. 32:11-14 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent12-0 (Missale Romanum formulary)",
      },
    }
  },
  "ot-18-b": {
    gradual: {
      title: "Benedicam Dominum",
      latin: "Benedícam Dóminum in omni témpore : semper laus ejus in ore meo. ℣. In Dómino laudábitur ánima mea : áudiant mansuéti, et laeténtur.",
      translation: "I will bless the Lord at all times: his praise shall ever be in my mouth. ℣. In the Lord shall my soul be praised: let the meek hear, and rejoice.",
      mode: "Gradual · Ordinary Time (Years B & C) · Mode VII",
      reference: "Ps. 34:2-3",
      gabc: "(c3) BE(ef)ne(e)dí(ef!hhhffe)cam(e_[uh:l]f) (,) * Dó(ef'h)mi(hhh)num(h.0/[-0.5]ijhh'hvF'E) (,) (hhhfhvGE'fe'//hf/gffe.) (;) in(e) o(ehg~)mni(hi) tém(i)po(ihkvJIkvJI)re :(ig/hi!kvvI'H//i!jwk/lkk/iji.) (,) (hj/iji/jg/hih/ihhg.) (:) sem(gh'i)per(jki/jhhg) laus(gh!i!jwk) e(ih/ih/ijI'H)jus(hhh_e) (,) (fgf'j//iji'/jhh'ih/ihhg.) (;) in(hf) o(h!iwjij)re(jihhf/hh/jkIH'jvIH') me(ihhvF'Ehhe)(,)(hihi)o.(ji/jkIH'ijij'lvJI'jvH'F//hhh/f_[oh:h]g_[oh:h]f._[oh:h]) (::) ℣. In(e) Dó(ef'h)mi(hhh)no(h.0/[-0.5]ijhh'hvF'E) (,) (hhhfhvGE'fe'//hf/gffe.) (;) lau(gh'i~)dá(i)bi(h)tur(h_g) á(h_g/hji)ni(ihhvGF)ma(g_[oh:h]f) (,) me(hf/hhvF'Ef!gwh_g)a :(hhhvGF'he//fvEDe[ll:1]d..) (:) áu(e)di(d.c!dwed/ef)ant(e.) man(d)su(f)é(h_0ivH'//Ef.)(,)(f!gwh'!ivH'//Ef./h_[oh:h]i_[oh:h]f.1_[oh:h])(,)(i/jg/hiH'GF.)(,)(i/jg/hiH'GF.hghFE.)(,)(ih/ijI'H)ti,(hhhvF'Effe/ff) (,) (ef!hhhf//hvvGF'he//fvEDe[ll:1]d..) (;) * et(ef) lae(hg)tén(hi)tur.(ijIH'hghv.) (,) (ijIH'hgiv.kkkh/ijIG.hig'hvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1182)",
      blurb: {
        text: "Benedicam Dominum draws its two verses from the opening of Psalm 34, which in Hebrew is an acrostic poem, each verse beginning with a successive letter of the alphabet. The psalm's heading connects it to the moment when David feigned madness before Achimelech; the account of the same event in 1 Samuel 21 names the king as Achish rather than Abimelech, and one explanation is that \"Abimelech\" in the heading is a title, literally meaning \"father of a king,\" rather than a personal name.",
        source: "Ps. 34:2-3 (Vulgate numbering Ps. 33:2-3) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 34\" (rev. 1351232126)",
      },
    },
    offertory: {
      title: "Precatus est Moyses",
      latin: "Precátus est Móyses in conspéctu Dómini Dei sui, et dixit : Quare, Dómine, irásceris in pópulo tuo? Parce irae ánimae tuae : meménto Abraham, Isaac et Jacob, quibus jurásti dare terram fluéntem lac et mel. Et placátus factus est Dóminus de malignitáte, quam dixit fácere pópulo suo.",
      translation: "Moses prayed in the sight of the Lord his God, and said: Why, O Lord, are you angry with your people? Let the anger of your soul be appeased: remember Abraham, Isaac and Jacob, to whom you swore to give a land flowing with milk and honey. And the Lord was appeased from the wrath which he had threatened against his people.",
      mode: "Offertory · Ordinary Time (Years A & B) · Mode VIII",
      reference: "Ex. 32:11-14",
      gabc: "(c3) PRe(e)cá(fhe)tus(d!ewfef) est(f_e) (,) * Mó(f)y(h)ses(hihhvGEf.) (;) in(b) con(b)spé(de)ctu(de) Dó(f_e/f!gw!hvGF)mi(e!gw!hvGF'g)ni(g_[oh:h]f) (,) De(f)i(e[ll:1]d) su(ef!gvFE'f)i,(fe..) (;) et(e) di(e!hhe/ff//df!hvED'db//cd!efe)xit.(e.) (:) Pre(e)cá(fhe/fe)tus(d!ewfef) est(f_e) (,) Mó(f)y(h)ses(hg/hihhvGEf.) (;) in(b) con(b)spé(de)ctu(de) Dó(f_e/f!gw!hvGF)mi(e!gw!hvGF'g)ni(g_[oh:h]f) (,) De(f)i(e[ll:1]d) su(ef!gvFE'f)i,(eb..) (;) et(b) di(b!ddb//cd!efe)xit :(e.) (:) Qua(ehhi)re,(hi) Dó(h)mi(ivHF)ne,(efe.) (,) i(e)rá(e!hh//hhhffee[ll:1]d!ewf!gvFE)sce(fe)ris(e.) (;) in(d) pó(efe/fg)pu(f)lo(f) tu(e.[ll:1]d!ewfef)o?(fe..) (:) Par(de/f!hhhhi~)ce(g) i(h)rae(efe.) (,) á(hhi)ni(f)mae(efe) tu(ffeg'FEfvEDef!gvFE'f)ae :(fe..) (:) me(e)mén(ei'!jv)to(i) A(i)bra(i)ham,(i!jw!kvJI) (,) I(hi)sa(gh)ac(iih.0) (,) et(hv.hh//hhh_g/hi!kvJI) Ja(hi)cob,(i_[oh:h]e/f_[oh:h]g_[oh:h]f._[oh:h]) (;) qui(d)bus(e) ju(f)rá(fi)sti(h) da(hg)re(f) ter(h)ram(hh//hhh) (,) flu(e)én(f)tem(e[ll:1]d~) lac(e.) (`) et(e!fwgf/g_[oh:h]f/hhf/hhvFD'ew!fvEDef) mel.(e.) (:) Et(d) pla(f)cá(h)tus(hf~) fa(hi'j)ctus(i) est(hiHF.1) (,) Dó(h!iwj_i)mi(i.h!iwjij)nus(ji..) (;) de(iv.hhhh_i) ma(e)li(f)gni(g)tá(g)te,(iv.hhhh_i) (;) quam(fe~) di(h!iwj_i)xit(j) fá(ijhh)ce(hv.fh!ivHG'h)re(hg..) (;) pó(i_[oh:h]h)pu(h)lo(ihhf/hhhhv'1GE//fhfhvFD.1) (,) (ef!hvvGF'gw!hvGF) su(ef!gvFE'f)o.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #325)",
      blurb: {
        text: "Moses's intercession in Exodus 32 offers three separate arguments against God's threatened punishment of Israel for the golden calf: the act of bringing the people out of Egypt, the mockery that would follow in Egypt if they were destroyed in the desert, and the oath sworn to the patriarchs. This offertory opens with the question from verse 11, \"Why, O Lord, are you angry with your people?\", but cuts the reference to the Exodus that ends that same verse and omits verse 12 entirely, so that the single remaining appeal is to the promise sworn to Abraham, Isaac, and Jacob. The Epistle for this Sunday, from 2 Corinthians 3, also turns on the figure of Moses, contrasting the old covenant \"lítteris deformáta in lapídibus\" with the new covenant of the Spirit.",
        source: "Ex. 32:11-14 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent12-0 (Missale Romanum formulary)",
      },
    }
  },
  "ot-18-c": {
    gradual: {
      title: "Benedicam Dominum",
      latin: "Benedícam Dóminum in omni témpore : semper laus ejus in ore meo. ℣. In Dómino laudábitur ánima mea : áudiant mansuéti, et laeténtur.",
      translation: "I will bless the Lord at all times: his praise shall ever be in my mouth. ℣. In the Lord shall my soul be praised: let the meek hear, and rejoice.",
      mode: "Gradual · Ordinary Time (Years B & C) · Mode VII",
      reference: "Ps. 34:2-3",
      gabc: "(c3) BE(ef)ne(e)dí(ef!hhhffe)cam(e_[uh:l]f) (,) * Dó(ef'h)mi(hhh)num(h.0/[-0.5]ijhh'hvF'E) (,) (hhhfhvGE'fe'//hf/gffe.) (;) in(e) o(ehg~)mni(hi) tém(i)po(ihkvJIkvJI)re :(ig/hi!kvvI'H//i!jwk/lkk/iji.) (,) (hj/iji/jg/hih/ihhg.) (:) sem(gh'i)per(jki/jhhg) laus(gh!i!jwk) e(ih/ih/ijI'H)jus(hhh_e) (,) (fgf'j//iji'/jhh'ih/ihhg.) (;) in(hf) o(h!iwjij)re(jihhf/hh/jkIH'jvIH') me(ihhvF'Ehhe)(,)(hihi)o.(ji/jkIH'ijij'lvJI'jvH'F//hhh/f_[oh:h]g_[oh:h]f._[oh:h]) (::) ℣. In(e) Dó(ef'h)mi(hhh)no(h.0/[-0.5]ijhh'hvF'E) (,) (hhhfhvGE'fe'//hf/gffe.) (;) lau(gh'i~)dá(i)bi(h)tur(h_g) á(h_g/hji)ni(ihhvGF)ma(g_[oh:h]f) (,) me(hf/hhvF'Ef!gwh_g)a :(hhhvGF'he//fvEDe[ll:1]d..) (:) áu(e)di(d.c!dwed/ef)ant(e.) man(d)su(f)é(h_0ivH'//Ef.)(,)(f!gwh'!ivH'//Ef./h_[oh:h]i_[oh:h]f.1_[oh:h])(,)(i/jg/hiH'GF.)(,)(i/jg/hiH'GF.hghFE.)(,)(ih/ijI'H)ti,(hhhvF'Effe/ff) (,) (ef!hhhf//hvvGF'he//fvEDe[ll:1]d..) (;) * et(ef) lae(hg)tén(hi)tur.(ijIH'hghv.) (,) (ijIH'hgiv.kkkh/ijIG.hig'hvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1182)",
      blurb: {
        text: "Benedicam Dominum draws its two verses from the opening of Psalm 34, which in Hebrew is an acrostic poem, each verse beginning with a successive letter of the alphabet. The psalm's heading connects it to the moment when David feigned madness before Achimelech; the account of the same event in 1 Samuel 21 names the king as Achish rather than Abimelech, and one explanation is that \"Abimelech\" in the heading is a title, literally meaning \"father of a king,\" rather than a personal name.",
        source: "Ps. 34:2-3 (Vulgate numbering Ps. 33:2-3) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 34\" (rev. 1351232126)",
      },
    },
    offertory: {
      title: "Sanctificavit Moyses",
      latin: "Sanctificávit Móyses altáre Dómino, ófferens super illud holocáusta, et ímmolans víctimas : fecit sacrifícium vespertínum in odórem suavitátis Dómino Deo, in conspéctu filiórum Israel.",
      translation: "Moses consecrated an altar to the Lord, offering upon it holocausts, and sacrificing victims: he made an evening sacrifice for an odor of sweetness to the Lord God, in the sight of the children of Israel.",
      mode: "Offertory · Ordinary Time (Year C) · Mode V",
      reference: "Ex. 24:4, 5",
      gabc: "(c4) SAn(fg)cti(f)fi(ghg)cá(ixhiH'G)vit(h_ghvGF.) (,) * Mó(f)y(h)ses(h!iwj/kjj/hih.) (;) al(f)tá(hj)re(jv.jjj_h) Dó(h)mi(h_[oh:h]i_[oh:h]h_[oh:h])no,(h.) (:) óf(hj)fe(gh)rens(gfg) su(ghG'F)per(fg) il(ixhgg'g//ggg_[oh:h]f/gih)lud(h.) (,) ho(h!iwj)lo(g/jjvHG'gfg)cáu(f.e!fwg!hvGF'g)sta,(gf..) (:) et(f.0h!iwj'!kv) ím(jk)mo(jvIH)lans(jj) ví(jk!lvKJ)cti(j_[hl:1]k_[hl:1]j_[hl:1])mas :(j.) (;) fe(jk)cit(jji) sa(jjj)cri(h!iw!jvIG')fí(h/jjj)ci(j_[hl:1]k_[hl:1]j_[hl:1])um(j.) ve(jk)sper(jvI~H~)tí(h_[oh:h]i_[oh:h]h_[oh:h])num(h.) (;) in(h) o(hf)dó(hj)rem(j'/kjj) su(j)a(j)vi(h)tá(h_g//hjg___hvGF'g)tis(gf..) (,) Dó(h!iwj)mi(g)no(fg/hgh) De(h_[oh:h]i_[oh:h]h_[oh:h])o,(h.) (:) in(h) con(j)spé(j_h/jjg/h//jjvH'Fg_[oh:h]f)ctu(fgff//df/gffgD'Cd_[oh:h]e_[oh:h]d._[oh:h]) (;) fi(c)li(d)ó(f)rum(gf~) Is(f)ra(gh)el.(hv.gh!jjvHG'ge//f_[oh:h]g_[oh:h]e_[oh:h]!fwggf.0) (::)",
      source: "Graduale Romanum (GregoBase #838)",
      blurb: {
        text: "Sanctificavit Moyses takes its opening from Exodus 24:4-5, where Moses builds an altar and sends young men to offer holocausts and pacific victims of calves. The offertory reshapes that material: it drops the twelve stone pillars, the twelve tribes, and the young men entirely, adds the phrase \"evening sacrifice,\" and frames the whole action as Moses himself sanctifying the altar in the sight of the children of Israel, a detail not present in those verses.",
        source: "Ex. 24:4, 5 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ---- 19th Sunday in Ordinary Time (ot-19) --------------------------- *
   * Introit "Respice Domine in testamentum". Offertory common; Gradual A
   * "Ostende nobis" / B "Beata gens"; Alleluia A "Domine refugium" (B & C
   * not assigned); Communion A & B "Panis quem" / C "Beatus servus".       */
  "ot-19": {
    offertory: {
      title: "In te speravi Domine",
      latin: "In te sperávi, Dómine : dixi : Tu es Deus meus, in mánibus tuis témpora mea.",
      translation: "In you have I hoped, O Lord: I said: You are my God, my times are in your hands.",
      mode: "Offertory · Ordinary Time · Mode II",
      reference: "Ps. 31:15-16",
      gabc: "(f3) IN(c) te(ef'g) spe(f)rá(h.f!gwh/i_[oh:h]h)vi,(hhhvGEf!gw!hvGF') (,) * Dó(f)mi(f!gwhgh)ne :(gf..) (:) di(fh)xi :(hhh/i_[uh:l]j) (,) Tu(hiH'F) es(f.) De(f!gw!hvGF)us(ef) me(f!gwh/ihhgh)us,(hg..) (:) in(hh) má(hi/jij)ni(h)bus(hhvGF) tu(hh/i_[oh:h]h)is(h.) (;) tém(h_f/hhvF'E//f!hhh)po(f_e)ra(egf) me(f_[oh:h]g_[oh:h]f_[oh:h])a.(f.) (::)",
      source: "Graduale Romanum (GregoBase #967)",
      blurb: {
        text: "Psalm 31, verses 15 and 16, arrive after dark preceding verses: the psalmist has been forgotten like the dead, surrounded by enemies who plot to take his life. This Offertory lifts only the turn toward trust. It then quietly trims verse 16 as well, stopping before the Vulgate's petition to be delivered from enemies and persecutors, and resting instead on the bare confession that all times belong to God.",
        source: "Ps. 31:15-16 (Vulgate numbering Ps. 30:15-16) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-19-a": {
    gradual: {
      title: "Ostende nobis Domine",
      latin: "Osténde nobis, Dómine, misericórdiam tuam : et salutáre tuum da nobis. ℣. Benedixísti, Dómine, terram tuam : avertísti captivitátem Jacob.",
      translation: "Show us, O Lord, your mercy: and grant us your salvation. ℣. You have blessed your land, O Lord: you have turned away the captivity of Jacob.",
      mode: "Gradual · Ordinary Time (Year A) · Mode II",
      reference: "Ps. 85:8",
      gabc: "(c3) OS(d)tén(ef)de(fd) no(ef)bis,(f.) *(,) Dó(f_)mi(d)ne,(b//dde/dddb) (,) (dd/ec'dvBA'//db'/cbba.) (;) mi(ba)se(de)ri(d)cór(ef)di(f)am(e[ll:1]d~) tu(ef!hh/ig'hvFEhhe/gf)am :(f.) (:) et(f) sa(hh)lu(ivHF)tá(hg)re(i_[uh:l]j) tu(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF)um(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) da(de'fhvGFgef) no(hf/h_i)bis.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Be(f)ne(h)di(hi)xí(i)sti,(ij) Dó(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI)mi(ji)ne,(i.) (:) ter(i!jw!kvJI'jw!kvJI)ram(ij~) tu(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)am :(f.) (:) a(hh)ver(hi)tí(ivH'GE//fhGEfh..)(,)(gi!jvHF)sti(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) ca(d)pti(ef)vi(f)tá(f.0/[-0.5]hvGF'g)tem(ef) () * Ja(hf/h_i)cob.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1055)",
      blurb: {
        text: "Ostende nobis Domine asks to see God's mercy and receive his salvation. Psalm 85 places that plea after the promise that God will turn and give life, then follows it with the assurance that he will speak peace to his people.",
        source: "Ps. 85:8 (Vulgate numbering Ps. 84:8) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Domine refugium",
      latin: "Allelúia. ℣. Dómine, refúgium factus es nobis a generatióne et progénie.",
      translation: "Alleluia. ℣. Lord, you have been our refuge from generation to generation.",
      mode: "Alleluia · Ordinary Time (Year A) · Mode VII",
      reference: "Ps. 90:1",
      gabc: "(c3) AL(ef)le(e)lú(ehg/ij){ia}.(ijIG.) *(,) ij.(h!iwjij//hiH'Gh.) (;) (fh'!jv//hji/jhhvG'E//f!gwhg) (,) (ijh./ghF'Ef_gffe.) (::) ℣. Dó(e.f!gwhghvGF'fe//f!gwh_g/hihi)mi(ji)ne,(i.) (;) re(i)fú(ijh//ijIG.hiH'Gh_iH'F)gi(f!gw!hvG'FEfg)um(fe..) (;) fa(h!iwji)ctus(ihhg) es(fhGF'g) no(e/hhf/ijH'Gh.)(,)(f!gwh'!iv//gihhvGF)bis(f!gwh_fgvFEfe..) (:) a(eg/ih) ge(gh)ne(gf)ra(gh)ti(g)ó(iv//jkihjihhe.)(;)(gi//jkihjihhe.)(,)(fhg___/hif/!fe/f!gw!hvGF'g)ne(fe..) *(;) et(eg/iV!gh~) pro(h)gé(hgi)ni(ji)e.(ijIG.) (,) (h!iwjij//hiH'Gh.) (;) (fh'!jv//hji/jhhvG'E//f!gwhg) (,) (ijh./ghF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #820)",
      blurb: {
        text: "Psalm 90 opens with a heading that names its author: \"A prayer of Moses the man of God.\" The Alleluia verse quotes only what follows, setting aside that attribution and letting the words of refuge stand on their own. The next verse of the psalm extends the thought outward in time: \"Before the mountains were made, or the earth and the world was formed; from eternity and to eternity thou art God.\"",
        source: "Ps. 90:1 (Vulgate numbering Ps. 89:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Panis quem ego dedero",
      latin: "Panis, quem ego dédero, caro mea est pro saéculi vita.",
      translation: "The bread that I will give is my flesh for the life of the world.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode I",
      reference: "John 6:52",
      gabc: "(c4) PA(ixdg!hih)nis,(h.) (,) * quem(h) e(hhg/hggf//{/[-2]ix}g'/igh)go(h) dé(h_fg)de(h)ro,(g.) (;) ca(h)ro(g) me(ghg'/hd//fg!hvG//D')a(d) est(d.) (:) pro(g) saé(ggf/g_[oh:h]d//ef/h_g/hfg)cu(f.e!fwgfg)li(g_[oh:h]f) (,) vi(hjh'jvG'FE.)(,)(gh/jhjvGF'fvED'ew!fvED'e)ta.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #782)",
      blurb: {
        text: "Panis quem ego dedero draws from only the second clause of John 6:52, omitting the first. The full verse in the Clementine Vulgate reads \"Si quis manducaverit ex hoc pane, vivet in æternum : et panis quem ego dabo, caro mea est pro mundi vita.\" The chant also diverges slightly from that Vulgate wording, replacing \"dabo\" with \"dedero\" and \"mundi\" with \"saeculi,\" both carrying roughly the same meaning but reflecting a different textual tradition.",
        source: "John 6:52 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-19-b": {
    gradual: {
      title: "Beata gens",
      latin: "Beáta gens, cujus est Dóminus Deus eórum : pópulus, quem elégit Dóminus in hereditátem sibi. ℣. Verbo Dómini caeli firmáti sunt : et spíritu oris ejus omnis virtus eórum.",
      translation: "Blessed is the nation whose God is the Lord: the people whom he has chosen for his inheritance. ℣. By the word of the Lord the heavens were established: and all their power by the spirit of his mouth.",
      mode: "Gradual · Ordinary Time (Year B) · Mode I",
      reference: "Ps. 33:12, 6",
      gabc: "(c4) BE(d)á(ff)ta(gffe//fhG'Fg_[oh:h]d) gens,(d.) *(;) cu(d)jus(d) est(ff) Dó(g_[oh:h]fh)mi(h)nus(h.) (,) De(hjhhg)us(g_[oh:h]f) e(fe)ó(ggfghvG__Fg_[oh:h]f)rum :(f.) (:) pó(hhghjjjvIH)pu(h_[oh:h]i_[oh:h]h_[oh:h])lus,(h.) (;) quem(f) e(ghg)lé(hvvG'FE'fwgfg)git(g_[oh:h]f_[oh:h]) (,) Dó(gffvED)mi(e[ll:1]d)nus(d/ffd/fge'/fgd'/e[ll:1]ddc.) (:) in(f) he(d)re(e)di(f)tá(ghgh//ijii)tem(ih..) (,) si(h)bi.(ghGEf_g//fgFDf_h//ghGEf_g//fgFD.1) (::) ℣. Ver(dh)bo(h) Dó(hjhhghGF.)(,)(ixhiHG'hw!ivHGhi)mi(h)ni(iyhjH'Gh!jjh//jjjvIH'jggf.0) (;) cae(h_[hl:1]k_[hl:1]j_[hl:1]kvJH'i)li(h.) fir(hg~)má(h!iwj)ti(g) sunt :(fh/jh/ih..) (:) et(f) spí(ghghjhhggf!gwh_g)ri(h)tu(g.) (,) o(h_fh)ris(g_[oh:h]fg) e(fg)jus(d/ffd/fge'/fgd'/e[ll:1]ddc.) (:) o(f_d/ff!gwhgh//jkjj'jvH'G/[-0.5]{ix}F0'gwh!iv_[oh:h]H~G~)mnis(h_g) vir(gh~)tus(g) *(,) e(gh)ó(ixjhiGF'h!jjvH'G)rum.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1044)",
      blurb: {
        text: "Beata gens draws two verses from Psalm 33, but not in the order the psalm gives them. The body of the gradual takes verse 12, and the verse takes verse 6, reversing the sequence, while the six verses that lie between them, including lines about nations fearing the Lord and his counsel standing forever, are passed over. The chant also quietly adjusts the wording of verse 12: where the Clementine Vulgate reads \"Deus ejus\" (God is his), the gradual has \"Deus eórum\" (God is theirs), shifting from the singular to address the whole people.",
        source: "Ps. 33:12, 6 (Vulgate numbering Ps. 32:12, 6) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Panis quem ego dedero",
      latin: "Panis, quem ego dédero, caro mea est pro saéculi vita.",
      translation: "The bread that I will give is my flesh for the life of the world.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode I",
      reference: "John 6:52",
      gabc: "(c4) PA(ixdg!hih)nis,(h.) (,) * quem(h) e(hhg/hggf//{/[-2]ix}g'/igh)go(h) dé(h_fg)de(h)ro,(g.) (;) ca(h)ro(g) me(ghg'/hd//fg!hvG//D')a(d) est(d.) (:) pro(g) saé(ggf/g_[oh:h]d//ef/h_g/hfg)cu(f.e!fwgfg)li(g_[oh:h]f) (,) vi(hjh'jvG'FE.)(,)(gh/jhjvGF'fvED'ew!fvED'e)ta.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #782)",
      blurb: {
        text: "Panis quem ego dedero draws from only the second clause of John 6:52, omitting the first. The full verse in the Clementine Vulgate reads \"Si quis manducaverit ex hoc pane, vivet in æternum : et panis quem ego dabo, caro mea est pro mundi vita.\" The chant also diverges slightly from that Vulgate wording, replacing \"dabo\" with \"dedero\" and \"mundi\" with \"saeculi,\" both carrying roughly the same meaning but reflecting a different textual tradition.",
        source: "John 6:52 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-19-c": {
    communion: {
      title: "Beatus servus",
      latin: "Beátus servus, quem, cum vénerit Dóminus, invénerit vigilántem : amen dico vobis, super ómnia bona sua constítuet eum.",
      translation: "Blessed is that servant whom, when the Lord comes, he shall find watching: amen I say to you, he will set him over all his goods.",
      mode: "Communion · Ordinary Time (Year C) · Mode III",
      reference: "Matt. 24:46-47",
      gabc: "(c2) BE(exdde)á(cf)tus(f) ser(g_[oh:h]f/g!hwihi)vus,(ih..) *(,) quem,(hj) cum(h) vé(jkj)ne(i)rit(hvGF) Dó(h_i)mi(h)nus,(h.) (,) in(fh~)vé(h)ne(ghg)rit(ef) vi(g)gi(fe)lán(df)tem :(c.) (:) a(cd)men(f) di(fe)co(d) vo(fvEC)bis,(c.) (,) su(f)per(g) ó(i)mni(h)a(g) bo(g)na(f) su(g)a(f_g) (,) con(gf~)stí(g!hwi)tu(f)et(exfgF'Efgf) e(exdfee)um.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1154)",
      blurb: {
        text: "Beatus servus draws from the final two verses of the Gospel just proclaimed at this Mass, Matthew 24:42-47, which begins with Christ's command to watch because the hour of his coming is unknown. The antiphon makes one quiet but pointed adjustment: where verse 46 of the Vulgate reads \"invenerit sic facientem,\" finding the servant doing thus, the antiphon substitutes \"invénerit vigilántem,\" finding him watching, drawing out the theme of watchfulness that the whole Gospel passage turns on.",
        source: "Matt. 24:46-47 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C4d (Missale Romanum formulary)",
      },
    }
  },

  /* ---- 20th Sunday in Ordinary Time (ot-20) --------------------------- *
   * Introit "Protector noster". Gradual/Offertory common; Alleluia A "Caro
   * mea" / C "Venite exsultemus" (B not assigned); Communion A "Domus mea",
   * B "Qui manducat carnem", C "Primum quaerite".                          */
  "ot-20": {
    gradual: {
      title: "Bonum est confidere",
      latin: "Bonum est confídere in Dómino, quam confídere in hómine. ℣. Bonum est speráre in Dómino, quam speráre in princípibus.",
      translation: "It is good to trust in the Lord, rather than to trust in man. ℣. It is good to hope in the Lord, rather than to hope in princes.",
      mode: "Gradual · Ordinary Time · Mode V",
      reference: "Ps. 118:8-9",
      gabc: "(c4) BO(ff)num(fg) est(fef.) (,) * con(f)fí(ixg!hwi)de(gf)re(fgFD.1) (,) in(d) Dó(dgf/gh)mi(g)no,(ixg./hiGF'fd/f_[oh:h]g_[oh:h]f._[oh:h]) (;) quam(ixhih) con(hg~)fí(gj)de(jjh)re(ixhv.fhg___/hiH'GF'fhvGFgf..) (,) in(fg) hó(g)mi(gff)ne.(dec.) (,) (fhg___/jkijh.fhg/hggf.0) (z0::c3) ℣. Bo(d)num(f) est(gxfh/ih/i_[oh:h]h//ivFD'//fh.ivFD'f!hfg.) (,) (fh/ih/i_[oh:h]h//ivFD'e_[oh:h][ll:1]d.0ddd/f_h/ijh.1) (;) spe(hi)rá(h)re(hg) in(ij) Dó(i_[oh:h]h)mi(h)no,(hg/i_[oh:h]h//jvIH'Ghf..) (:) quam(hh) spe(h)rá(ih/ij_hih/ij_ij//hi/jij)re(jh/jkihh/fgf.) (;) * in(de'f) prin(f)cí(fhGF')pi(i)bus.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff/dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #547)",
      blurb: {
        text: "Bonum est confidere sets trust in the Lord against confidence in man and princes. Psalm 118's neighboring verses name the Lord as helper, turning the Gradual's repeated contrast into a prayer that refuses fear of human power.",
        source: "Ps. 118:8-9 (Vulgate numbering Ps. 117:8-9) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Immittet Angelus",
      latin: "Immíttet Angelus Dómini in circúitu timéntium eum, et erípiet eos : gustáte et vidéte, quóniam suávis est Dóminus.",
      translation: "The angel of the Lord shall encamp around those who fear him, and shall deliver them: taste and see that the Lord is sweet.",
      mode: "Offertory · Ordinary Time · Mode VIII",
      reference: "Ps. 34:8-9",
      gabc: "(c4) IM(gh~)mít(hv.fhg)tet(g.) *(,) An(g!jj//jjj)ge(h)lus(ghg.) Dó(h!iwjjvIG)mi(h!iwjjvIG)ni(h!iwj/kjji.) (;) in(j) cir(hg~)cú(j'/ki'/jh')i(h)tu(f_[oh:h]g_[oh:h]f._[oh:h]) (,) ti(hg)mén(hg/jj//jjj)ti(hg)um(ixgv.fh!ivHG) e(ghg___)um,(g.) (:) et(g) e(gh/ji)rí(jjvIG)pi(h!iwji)et(j.) e(jjh/jkjkvJI)os :(j.) (:) gu(ji)stá(jv.jjj/kjk)te(h_g) (,) et(g) vi(hji)dé(jkj'/ki'jvH'GjjvIH'iwj)te,(g.) (;) quó(gh)ni(gf)am(g) su(h)á(h/jjj)vis(g) est(h_g/h!iwj/kjji.) (;) Dó(j'/kj'/ki'jvH'Fg.)(,)(fgh!jvvIH'iw!jvIH)mi(gh!ivHG'h)nus.(hg..) (::)",
      source: "Graduale Romanum (GregoBase #747)",
      blurb: {
        text: "Immittet Angelus draws on two consecutive verses of Psalm 34. The second of those verses reads in full, \"Gustate et videte quoniam suavis est Dominus; beatus vir qui sperat in eo,\" yet the Offertory sets aside the closing clause, \"blessed is the man that hopeth in him,\" and rests instead on the sweetness of the Lord himself. The Mass of the day pairs this with the Gospel of Matthew 6:24-33, in which Christ tells his disciples not to be anxious about food or clothing but to seek God first.",
        source: "Ps. 34:8-9 (Vulgate numbering Ps. 33:8-9) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent14-0 (Missale Romanum formulary)",
      },
    }
  },
  "ot-20-a": {
    alleluia: {
      title: "Caro mea vere est cibus",
      latin: "Allelúia. ℣. Caro mea vere est cibus, et sanguis meus vere est potus : qui mandúcat meam carnem, et bibit meum sánguinem, in me manet, et ego in eo.",
      translation: "Alleluia. ℣. My flesh is true food, and my blood is true drink: he who eats my flesh and drinks my blood abides in me, and I in him.",
      mode: "Alleluia · Ordinary Time (Year A) · Mode VII",
      reference: "John 6:56-57",
      gabc: "(c3) AL(d)le(efdeffe)lú(df!hvGFhh){ia}.(e.) *(;) ij.(hvijj/h/ii//efE'Dffe.) (,) (h'/ig'hvF'ED'C[ull:0]B.e.f!gwhhvG'FEffe.) (::) ℣. Ca(eh)ro(h_gfge) me(fe)a(e.) (,) ve(d)re(efef) est(f) ci(hvGF'ge)bus,(e.) (;) et(ei) san(iv.jkj/!jvIHjh/ij)guis(i) me(ij)us(i.) (,) ve(ij)re(i) est(i) po(j!kwljkvJIjvIHi)tus :(i.) (:) qui(ij) man(i)dú(ij/kljkvJIjvIHi)cat(i.) (;) me(eijvIH'hvGF'E)am(fe) car(de)nem,(e/ffe.) (;) et(e) bi(ehg)bit(hi) me(i./jkj/!jvIH'Ghih)um(i.) (,) sán(hv.fhG'FE'D//fg)gui(fe)nem,(e.) (;) in(d) me(efdeffe) ma(df!hvGFhh)net,(e.) (;) et(h) e(ijj)go(h) *() in(i) e(i)o.(efE'Dffe.) (,) (h'/ig'hvF'ED'C[ull:0]B.e.f!gwhhvG'FEffe.) (::)",
      source: "Graduale Romanum (GregoBase #774)",
      blurb: {
        text: "Caro mea vere est cibus joins John 6 verses 56 and 57: Christ's flesh is true food and his blood true drink, and those who receive them abide in him. The same passage places this feeding beside everlasting life and resurrection, holding it within hope of life that does not end.",
        source: "John 6:56-57 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Domus mea",
      latin: "Domus mea, domus oratiónis vocábitur, dicit Dóminus : in ea omnis, qui petit, áccipit : et qui quaerit, ínvenit, et pulsánti aperiétur.",
      translation: "My house shall be called a house of prayer, says the Lord: in it everyone who asks, receives: and he who seeks, finds, and to him who knocks it shall be opened.",
      mode: "Communion · Ordinary Time (Year A) · Mode V",
      reference: "Matt. 21:13",
      gabc: "(c4) DO(g)mus(fg) me(gh!ivHG'h)a,(hg..) (,) * do(jjk)mus(j) o(f)ra(g)ti(hj)ó(j)nis(g) vo(ixi)cá(ihi)bi(f)tur,(ixg_[uh:l]i) (,) di(ixi)cit(g_[oh:h]i_[oh:h]g_[oh:h]!hw!ivHG') Dó(f)mi(fg!hvGF'g)nus :(gf..) (:) in(f) e(gh)a(h) o(ixhg/higgf~)mnis,(f) qui(f) pe(hj)tit,(j) ác(jij)ci(h_[oh:h]i_[oh:h]h_[oh:h])pit :(h.) (;) et(hj~) qui(j) quae(j)rit,(ij) ín(h)ve(ixf!gwhg/hi)nit,(h.) (;) et(h) pul(j)sán(j_hjvIG'h)ti(f_g) a(fh)pe(g!jij)ri(h)é(f_[oh:h]g_[oh:h]f_[oh:h])tur.(f.) (::)",
      source: "Graduale Romanum (GregoBase #43)",
      blurb: {
        text: "Domus mea names Christ's house as a house of prayer and extends its invitation to all who ask, seek, and knock. The Communion lets the promise of receiving, finding, and an opened door follow the call to prayer.",
        source: "Matt. 21:13 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    }
  },
  "ot-20-b": {
    communion: {
      title: "Qui manducat carnem",
      latin: "Qui mandúcat carnem meam, et bibit sánguinem meum, in me manet, et ego in eo, dicit Dóminus.",
      translation: "He who eats my flesh and drinks my blood abides in me, and I in him, says the Lord.",
      mode: "Communion · Ordinary Time (Year B) · Mode VI",
      reference: "John 6:57",
      gabc: "(c4) QUI(c) man(d)dú(ff)cat(f.) *() car(f)nem(f) me(gfhvGF)am,(f.) (;) et(f) bi(fg'h)bit(h_g) sán(hj)gui(j)nem(j) me(jhjvIH)um,(h.) (;) in(hg~) me(h!iwj) ma(ghGF'g)net,(gf..) (:) et(d) e(d!fff)go(d_c) in(fdf) e(gfg)o,(g.) (;) di(ixiihivHGh_g//hff)cit(f) Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])nus.(f.) (::)",
      source: "Graduale Romanum (GregoBase #798)",
      blurb: {
        text: "Qui manducat carnem draws on a single verse from John 6, verse 57. In the surrounding discourse that verse is flanked by promises of everlasting life and resurrection, as in verse 55: \"He that eateth my flesh and drinketh my blood hath everlasting life: and I will raise him up in the last day.\" The chant sets those promises aside and keeps only the mutual indwelling, \"in me manet, et ego in eo,\" then closes with \"dicit Dominus,\" a phrase not present in the source verse, framing the whole as a direct divine declaration.",
        source: "John 6:57 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-20-c": {
    alleluia: {
      title: "Venite exsultemus",
      latin: "Allelúia. ℣. Veníte, exsultémus Dómino : jubilémus Deo salutári nostro.",
      translation: "Alleluia. ℣. Come, let us rejoice in the Lord: let us sing joyfully to God our Savior.",
      mode: "Alleluia · Ordinary Time (Year C) · Mode VII",
      reference: "Ps. 95:1",
      gabc: "(c2) AL(c)le(c)lú([oh:h{]f_eg){ia}.(ghGF'fd.) *(;) ij.(fgf___[oh}]ff'g//fff/ghffc.) (,) (fdf./efD'Cd_eddc.) (::) ℣. Ve(c)ní(cfe/gh)te,(g.) (;) ex(g)sul(gf~)té(g/iig)mus(ghfgvFEfe..) (,) Dó(f_[oh:h]g_[oh:h]e_[oh:h])mi(fgF'E)no :(f.g!hwihhg.) (:) ju(g)bi(g_[oh:h]e)lé(f!gwhgh)mus(g.) (,) De(g!iig//f_hGF'fhGF'fvE'DC)o(ddc.) (;) sa(cd)lu(c)tá(c.d!ewfef)ri(e.) (,) * no(f_[oh:h]g_[oh:h]f_[oh:h]fe/f!gwhgh)stro.(g/iig/he/f_g) (;) (d!ewf'!gv//iig/he/f_g) (,) (g/iii_[oh:h]g//jkI'GiivG'Fiig.) (,) (g/iifhvGF'fc.) (;) (dffe/fhGF'Dgf/gffc.) (,) (fffvD'Cd_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #1246)",
      blurb: {
        text: "Venite exsultemus draws on the single opening line of Psalm 95, stopping before the psalm continues into verse 2: \"præoccupemus faciem ejus in confessione, et in psalmis jubilemus ei\" (let us come before his presence with thanksgiving, and make a joyful noise to him with psalms). The Douay-Rheims argument for the psalm describes it as \"An invitation to adore and serve God, and to hear his voice.\"",
        source: "Ps. 95:1 (Vulgate numbering Ps. 94:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Primum quaerite",
      latin: "Primum quaérite regnum Dei, et ómnia adjiciéntur vobis, dicit Dóminus.",
      translation: "Seek first the kingdom of God, and all things shall be added unto you, says the Lord.",
      mode: "Communion · Ordinary Time (Year C) · Mode VIII",
      reference: "Matt. 6:33",
      gabc: "(c4) PRi(ggh)mum(g) quaé(g)ri(fef)te(d.) (,) * re(fe~)gnum(fg~) De(giH'G)i,(g.) (:) et(j) ó(jij)mni(hg)a(g.) ad(h)ji(i)ci(j)én(h)tur(gi~) vo(hhgh)bis,(g.) (;) di(gee[ll:1]d/geg)cit(g) Dó(g)mi(ghg___)nus.(g.) (::)",
      source: "Graduale Romanum (GregoBase #868)",
      blurb: {
        text: "Primum quaerite regnum Dei draws on a single verse from the Sermon on the Mount, Matthew 6:33, but quietly trims it. The full verse reads \"et justitiam ejus\" after \"regnum Dei,\" adding \"and his justice\" to the object of seeking; the antiphon drops that phrase entirely. It also replaces the verse's closing \"haec omnia\" with simply \"omnia,\" and appends \"dicit Dominus,\" which does not appear in Matthew at all.",
        source: "Matt. 6:33 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ---- 21st Sunday in Ordinary Time (ot-21) --------------------------- *
   * Introit "Inclina Domine". Gradual/Offertory/Communion (De fructu) common;
   * Alleluia A "Tu es Petrus" / B "Spiritus est" / C "Quoniam Deus magnus";
   * Year B communion "Qui manducat carnem".                                */
  "ot-21": {
    gradual: {
      title: "Bonum est confiteri",
      latin: "Bonum est confitéri Dómino, et psállere nómini tuo, Altíssime. ℣. Ad annuntiándum mane misericórdiam tuam, et veritátem tuam per noctem.",
      translation: "It is good to give praise to the Lord, and to sing to your name, O Most High. ℣. To proclaim your mercy in the morning, and your truth throughout the night.",
      mode: "Gradual · Ordinary Time · Mode V",
      reference: "Ps. 118:8-9",
      gabc: "(c4) BO(ff)num(fg) est(ff//d!ff/ge'/fgd'/e[ll:1]ddc.) (;) * con(f)fi(h)té(jh/jjj)ri(j_ik) Dó(k_[hl:1]j)mi(j_i)no :(jjh) (,) (jjh//jkjj/hih.) (:) et(hj) psál(h!j'k)le(jk)re(jj) (,) nó(hj/kjk)mi(j)ni(ij) tu(hg/h!jjkvJI)o,(j.) (;) Al(jj)tís(jkJ'Hjkjk)si(j_i)me.(jjjh/jjjh/jjh.) (,) (fg/h!jj/klijh.0ixgiHF.1) (z0::c3) ℣. Ad(d_) an(f)nun(d)ti(f)án(h.0/ijh)dum(h.) (,) ma(h)ne(ihhe./h_[oh:h]i_[oh:h]h_[oh:h]/ihhe.) (,) (hi!kv//lvKI'jvHF.1) (,) (h_g/ijh'___//jvIH'jvIH'//hvGF.) (:) mi(hh)se(h)ri(h)cór(ih/ij_hih/ij_ij//hi/jij)di(j)am(jh/jkihhf.) (,) tu(hf/hhh)am,(h.f!gwh!iv.hi/jhh/iih.0) (:) et(hh) ve(h)ri(h)tá(h)tem(hi~) tu(ivH'GE//fhGEfh..)(,)(gi!jvHF)am(fhF'Efhhf//hvvGF'hee[ll:1]d.0) *(:) per(hh) no(hiH'Fhihi)ctem.(hhhf/hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #1338)",
      blurb: {
        text: "Bonum est confiteri Domino begins with an allusion to Psalm 118's preference for the Lord over human confidence. It then turns to giving praise to the Most High, announcing mercy in the morning and truth through the night.",
        source: "Ps. 118:8-9 (Vulgate numbering Ps. 117:8-9) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C4a.txt [Officium heading]; Divinum Officium, Commune/C4a (Missale Romanum formulary)",
      },
    },
    offertory: {
      title: "Exspectans exspectavi",
      latin: "Exspéctans exspectávi Dóminum, et respéxit me : et exaudívit deprecatiónem meam : et immísit in os meum cánticum novum, hymnum Deo nostro.",
      translation: "With expectation I have waited for the Lord, and he was attentive to me: and he heard my prayer: and he put a new song into my mouth, a hymn to our God.",
      mode: "Offertory · Ordinary Time · Mode V",
      reference: "Ps. 40:2, 3, 4",
      gabc: "(c3) EX(f)spé(f!hhhi)ctans(hi) *(,) ex(h)spe(i)ctá(iki/j_k)vi(i) Dó(h)mi(hhh)num,(fh..) (;) et(e) re(f)spé(hv.hhh//h'ih)xit(hi!jv_I~H~) me :(ih..) (:) et(f) ex(f!h'i)au(iih~)dí(hiH'G)vit(hhh/f_[oh:h]g_[oh:h]f._[oh:h]) (,) de(f)pre(f)ca(f!hhf)ti(e)ó(fh/i_[oh:h]h)nem(hi~) me(ihhf//hih/i.f!gwh_f)am,(f.) (:) et(e) im(f)mí(hh)sit(ijhh/fgf.) (,) in(f) os(fhhg/hgg) me(eh/ghf/ggf)um(f.) (;) cán(hh)ti(f_e)cum(fef) no(hi)vum,(hg/hiih.0) (:) hy(h)mnum(hhhffe~) De(f_d/ef!ivH'GE)o(fef) no(f/hhvF'EDe_[uh:l]fE'D)stro.(d.) (::)",
      source: "Graduale Romanum (GregoBase #182)",
      blurb: {
        text: "Exspectans exspectavi moves across three verses of Psalm 40, but the compiler cut the heart of verse 3, which reads in the Douay-Rheims, \"he brought me out of the pit of misery and the mire of dregs; and he set my feet upon a rock, and directed my steps.\" The offertory keeps only the opening cry of waiting and the closing gift of the new song, letting nothing stand between them. The compiler also made small departures from the Clementine Vulgate: where the psalm says \"intendit mihi\" (he was attentive to me) the chant reads \"respexit me\" (he looked upon me), and where the psalm ends verse 4 with \"many shall see, and shall fear: and they shall hope in the Lord,\" the chant stops before that line.",
        source: "Ps. 40:2, 3, 4 (Vulgate numbering Ps. 39:2, 3, 4) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "De fructu operum",
      latin: "De fructu óperum tuórum, Dómine, satiábitur terra : ut edúcas panem de terra, et vinum laetíficet cor hóminis : ut exhílaret fáciem in óleo, et panis cor hóminis confírmet.",
      translation: "The earth shall be filled with the fruit of your works, O Lord: that you may bring bread out of the earth, and that wine may cheer the heart of man: that he may make the face cheerful with oil, and that bread may strengthen man's heart.",
      mode: "Communion · Ordinary Time · Mode VI",
      reference: "Ps. 104:13, 14-15",
      gabc: "(c4) DE(f) fru(gh)ctu(h) *() ó(h)pe(g)rum(g) tu(g)ó(h)rum,(gf~) Dó(g)mi(f)ne,(f_e) (,) sa(f)ti(ghg)á(h)bi(g)tur(fe~) ter(f!gwhgh)ra :(gf..) (:) ut(f) e(f)dú(gh)cas(f) pa(g)nem(f) de(e) ter(fg)ra,(f.) (;) et(f) vi(ixfg/ihi)num(h) lae(h)tí(jhhgh)fi(f)cet(fg'h) cor(fe) hó(d)mi(de!fvED'e)nis :(e[ll:1]d..) (:) ut(fg'h) ex(h)hí(ixjhi)la(ghGF'g)ret(gf..) (,) fá(fg)ci(f)em(f) in(fd) ó(ef)le(deDC'd)o,(dc..) (;) et(ec~) pa(de'f)nis(gfg) cor(fe) hó(f)mi(ixgi)nis(hiG'F) con(f)fír(ef~)met.(f.) (::)",
      source: "Graduale Romanum (GregoBase #1245)",
      blurb: {
        text: "Psalm 104 is a long hymn to God's providence over creation, and this Communion antiphon draws from verses 13 through 15. It begins partway through verse 13, dropping the opening clause, \"Thou waterest the hills from thy upper rooms,\" and picks up at \"de fructu operum tuorum satiabitur terra.\" It also omits the first half of verse 14, \"Bringing forth grass for cattle, and herb for the service of men,\" moving directly to the bread, wine, and oil that follow.",
        source: "Ps. 104:13, 14-15 (Vulgate numbering Ps. 103:13, 14-15) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-21-a": {
    alleluia: {
      title: "Tu es Petrus",
      latin: "Allelúia. ℣. Tu es Petrus, et super hanc petram aedificábo Ecclésiam meam.",
      translation: "Alleluia. ℣. You are Peter, and upon this rock I will build my Church.",
      mode: "Alleluia · Ordinary Time (Year A) · Mode II",
      reference: "Matt. 16:18",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. Tu(hi) es(i) Pe(jiihi)trus,(iv.hh/fgf.) (;) et(f) su(fg)per(f) hanc(f) pe(f!hh/ijHF'ivH'GEf./hfhhf/ge)tram(e.) (:) ae(f)di(e)fi(f)cá(ffe/ffe/fc..)(,)(ef!hvvF'Ehhh)bo(ivH'Ghf..) (;) Ec(f)clé(hh)si(h)am(hi~) *() me(i_[oh:h]h/jij)am.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #228)",
      blurb: {
        text: "Tu es Petrus draws from the first half of Matthew 16:18, stopping before the promise that the gates of hell shall not prevail against the Church. The full verse continues, \"et portæ inferi non prævalebunt adversus eam,\" and the following verse adds the gift of the keys of heaven; both are set aside, leaving the single act of naming at the center.",
        source: "Matt. 16:18 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-21-b": {
    alleluia: {
      title: "Spiritus est qui vivificat",
      latin: "Allelúia. ℣. Spíritus est, qui vivíficat : caro autem non prodest quidquam.",
      translation: "Alleluia. ℣. It is the Spirit that gives life: the flesh profits nothing.",
      mode: "Alleluia · Ordinary Time (Year B) · Mode VIII",
      reference: "John 6:64",
      gabc: "(c4) AL(g)le(g)lú(gh!jvI~H~){ia}.(jkJ//G'//hvG'Fg.) *(;) (dg/hggf//h'/jh'/i_[oh:h]g.) (,) (dg/hggf//h'/ijg.) (::) ℣. Spí(gg)ri(g)tus(gi) est(ijI'G//hihhg.) (,) qui(gh) vi(gd)ví(g)fi(gh!ivHG'h)cat :(hg..) (:) ca(g)ro(g_[oh:h]e//fgF'EfvED) au(gh!ivHG'h)tem(hjg.___) (,) non(gfh) prod(hv.gjh/ih.0/g!jhi)est(hg..) *(;) quid(gh!jvI~H~)quam.(jkJ//G'//hvG'Fg.) (;) (dg/hg/!gf//h'/jh'/i_[oh:h]g.) (,) (dg/hggf//h'/ijg.) (::)",
      source: "Graduale Romanum (GregoBase #1236)",
      blurb: {
        text: "Spiritus est qui vivificat confesses that the Spirit gives life while the flesh profits nothing. The Alleluia directs the hearer toward the life-giving Spirit in Christ's teaching.",
        source: "John 6:64 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Qui manducat carnem",
      latin: "Qui mandúcat carnem meam, et bibit sánguinem meum, in me manet, et ego in eo, dicit Dóminus.",
      translation: "He who eats my flesh and drinks my blood abides in me, and I in him, says the Lord.",
      mode: "Communion · Ordinary Time (Year B) · Mode VI",
      reference: "John 6:57",
      gabc: "(c4) QUI(c) man(d)dú(ff)cat(f.) *() car(f)nem(f) me(gfhvGF)am,(f.) (;) et(f) bi(fg'h)bit(h_g) sán(hj)gui(j)nem(j) me(jhjvIH)um,(h.) (;) in(hg~) me(h!iwj) ma(ghGF'g)net,(gf..) (:) et(d) e(d!fff)go(d_c) in(fdf) e(gfg)o,(g.) (;) di(ixiihivHGh_g//hff)cit(f) Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])nus.(f.) (::)",
      source: "Graduale Romanum (GregoBase #798)",
      blurb: {
        text: "Qui manducat carnem draws on a single verse from John 6, verse 57. In the surrounding discourse that verse is flanked by promises of everlasting life and resurrection, as in verse 55: \"He that eateth my flesh and drinketh my blood hath everlasting life: and I will raise him up in the last day.\" The chant sets those promises aside and keeps only the mutual indwelling, \"in me manet, et ego in eo,\" then closes with \"dicit Dominus,\" a phrase not present in the source verse, framing the whole as a direct divine declaration.",
        source: "John 6:57 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-21-c": {
    alleluia: {
      title: "Quoniam Deus magnus Dominus",
      latin: "Allelúia. ℣. Quóniam Deus magnus Dóminus, et Rex magnus super omnem terram.",
      translation: "Alleluia. ℣. For the Lord is a great God, and a great King above all the earth.",
      mode: "Alleluia · Ordinary Time (Year C) · Mode VII",
      reference: "Ps. 95:3",
      gabc: "(c3) AL(e)le(e)lú(ef!hh//hh/i_[uh:l]j){ia}.(i.) *(,) ij.(hi/j_h//ji/jiih//ijhhvGEffe.) (;) (f/hh/iji___/!i/g_[uh:l]hffe.) (,) (fh/ijhhvG'FEffe.) (::) ℣. Quó(ef)ni(e)am(e) De(hh)us(hi'j) ma(i/kkkvI'HG./!hi!jvIH/!i_[oh:h]h/!j_i)gnus(i.) (;) Dó(i_[oh:h]e/fhhe//fhe___e[ll:1]d.0)(,)(f_h//gh!jvIH'hvGF)mi(h.f!gw!hvG'FE'f)nus,(fe..) (:) et(eh) Rex(hi'j) ma(iv.hi!jvHGivHG)(,)(ijIH'i)gnus(ijhivHGhg..) (;) su(h)per(g.h!iwj) o(jijvH'FivH'GE)(,)(f!hgh)mnem(hiH'Ghv.f!gwh/ihhvG'FEfe..) *(,) ter(gh'i~)ram.(iv.hi!kvJIkkkh/ijIG.hig'hvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1352)",
      blurb: {
        text: "Psalm 95:3 reads, in the Clementine Vulgate, \"rex magnus super omnes deos,\" a great King above all gods. The alleluia verse quietly shifts that final phrase to \"super omnem terram,\" above all the earth. The surrounding verses of the psalm call the assembly to come and sing, so this single verse arrives already mid-movement, lifting out the reason for praise before the verses of invitation have been heard.",
        source: "Ps. 95:3 (Vulgate numbering Ps. 94:3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  /* ---- 22nd Sunday in Ordinary Time (ot-22) --------------------------- *
   * Introit "Miserere mihi". Gradual/Alleluia/Offertory common; Communion A
   * "Qui vult venire" / B & C "Domine memorabor".                          */
  "ot-22": {
    gradual: {
      title: "Timebunt gentes",
      latin: "Timébunt gentes nomen tuum, Dómine, et omnes reges terrae glóriam tuam. ℣. Quóniam aedificávit Dóminus Sion, et vidébitur in majestáte sua.",
      translation: "The nations shall fear your name, O Lord, and all the kings of the earth your glory. ℣. For the Lord has built up Sion, and he shall be seen in his majesty.",
      mode: "Gradual · Ordinary Time · Mode V",
      reference: "Ps. 102:16-17",
      gabc: "(c4) TI(d)mé(ff)bunt(gh~) gen(h_fgvFED.g_[oh:h]e/fg)tes(f.) (;) * no(hf/gh!jj/kjk)men(jij) tu(h_g/h/jjvH'GF)um,(h_g~) Dó(f)mi(fg!hvGF'g)ne,(gf..) (:) et(f) o(ghgh)mnes(jhhg) re(h!iwj)ges(j_i) (`) ter(jkJ'IH)rae(hjH'GhjjhjvvIH'jggf.0) (;) gló(fg'h!fg'h)ri(gf)am(fv.ef!gvgf.0) (,) tu(f!hhh//gh!jjjhjvvIH'jg./f.0h!iw!jvIH'GF'f//hvGFgf)am.(f.) (z0::c3) ℣. Quó(d)ni(d)am(d) ae(d)di(d)fi(fe)cá(eh)vit(h.) (,) Dó(h)mi(h)nus(ihh'hh_f//hhf/hhegxfgE0/[-0.5]{/[0.5]gy}D0.0/[-0.5]hhjvIH'//hvGF.) (;) Si(hi)on,(i_[oh:h]h/i/kkhi_[oh:h]h/kkkvIH'//hvGF.) (:) et(f) vi(hf)dé(h)bi(hfh)tur(hhhvF'Ef!hhhf/hhhvGF'hee[ll:1]d.0) (;) in(d) ma(d)je(d)stá(dfE'D)te(ef) *() su(fhG'Fhhh)a.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #1173)",
      blurb: {
        text: "Timebunt gentes looks toward a Lord whose name is feared by nations and whose glory kings behold. Psalm 102 follows this vision with God's rebuilding of Sion and regard for the prayer of the humble, holding majesty and mercy together.",
        source: "Ps. 102:16-17 (Vulgate numbering Ps. 101:16-17) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Cantate Domino",
      latin: "Allelúia. ℣. Cantáte Dómino cánticum novum : quia mirabília fecit Dóminus.",
      translation: "Alleluia. ℣. Sing to the Lord a new song: for the Lord has done wondrous deeds.",
      mode: "Alleluia · Ordinary Time · Mode I",
      reference: "Ps. 98:1",
      gabc: "(c4) AL(d)le(ff)lú(gv.f!hgh){ia}.(hjH'GF.) *(;) ij.(e!gwhgh./fhg/hffvEC.) (,) (d!ewf!gv.egF'ED'ewfd.1) (::) ℣. Can(cd)tá(ixdh//gihivGF//ggf/gg//fgh!jjg)(,)(ixhhghvGF.hiHG'hw!ivHGhi)te(h.) (,) Dó(h_g/jjvH'G//ixhihi)mi(g)no(g_[oh:h]f_[oh:h]) (;) cán(f_e/f!gwhgh)ti(hg/hf/ghg)cum(gd~) no(f_e/g_[oh:h]fgvFD'ewfd)vum :(d.) (:) qui(d/ffd/ffddef!gh)a(ghg.) (,) mi(f)ra(ghg)bí(h/jjhhgh.)(,)(ixfh!ivGF'fd/ffhvGF'fvED)li(e[ll:1]d)a(d.) (;) fe(ff)cit(fg) () * Dó(g_[oh:h]f)mi(f!gwhgh)nus.(hjH'GF.) (;) (e!gwhgh./fhg/hffvEC.) (,) (d!ewf!gv.egF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1077)",
      blurb: {
        text: "Psalm 98 opens with more than this Alleluia verse quotes. The full first verse in the Douay-Rheims reads: \"Sing ye to the Lord a new canticle: because he hath done wonderful things. His right hand hath wrought for him salvation, and his arm is holy.\" The chant takes only the first half, stopping after the reason for the new song, and leaves the lines about the saving right hand and holy arm unsung.",
        source: "Ps. 98:1 (Vulgate numbering Ps. 97:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Domine in auxilium",
      latin: "Dómine, in auxílium meum réspice : confundántur et revereántur, qui quaerunt ánimam meam, ut áuferant eam : Dómine, in auxílium meum réspice.",
      translation: "O Lord, look down to help me: let them be confounded and put to shame who seek my life to take it away: O Lord, look down to help me.",
      mode: "Offertory · Ordinary Time · Mode VI",
      reference: "Ps. 40:14, 15",
      gabc: "(c4) DO(f)mi(fff)ne,(c_[ll:1]d) *(,) in(c) au(d)xí(ff)li(gf)um(fg) me(fg!hvhg)um(ghffg) ré(f)spi(f_[oh:h]g_[oh:h]f_[oh:h])ce :(f.) (:) con(fgf)fun(g_[uh:l]h)dán(hg~)tur(ghGF.) (,) et(f) re(f)ve(f)re(d)án(d!ffdced)tur,(dc/ded.) (;) qui(c) quae(ffg)runt(f) á(g)ni(fg)mam(fe~) me(d!ew!fvED)am,(d.c!dw!evDCd.) (;) ut(c) áu(ffg~)fe(f)rant(fg/hghv_G~F~) e(f)am :(f/ghF'DffvD'Cffc.) (:) Dó(f)mi(fff)ne,(c_[ll:1]d) (,) in(c) au(d)xí(ff)li(gf)um(fg) me(fg!hvhg)um(ghffg) ré(f)spi(f_[oh:h]g_[oh:h]f_[oh:h])ce.(f.) (::)",
      source: "Graduale Romanum (GregoBase #993)",
      blurb: {
        text: "Domine in auxilium is drawn from Psalm 40, verses 14 and 15, but not quite as the psalm reads. The chant passes over the opening of verse 14, \"Complaceat tibi, Domine, ut eruas me,\" and begins instead with that verse's second half: \"Domine, in auxilium meum respice.\" From verse 15 it takes only the first clause, leaving aside the continuation \"Let them be turned backward and be ashamed that desire evils to me.\" The opening phrase then returns as a closing refrain, a repetition that belongs to the chant, not to the psalm.",
        source: "Ps. 40:14, 15 (Vulgate numbering Ps. 39:14, 15) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-22-a": {
    communion: {
      title: "Qui vult venire post me",
      latin: "Qui vult veníre post me, ábneget semetípsum : et tollat crucem suam, et sequátur me.",
      translation: "Whoever wishes to come after me, let him deny himself: and take up his cross, and follow me.",
      mode: "Communion · Ordinary Time (Year A) · Mode I",
      reference: "Matt. 16:24",
      gabc: "(c4) QUI(d) vult(f) ve(fe)ní(gh)re(ixih) post(fg) me,(fvED.) *(;) áb(ixf!gwhg/hih)ne(g)get(f) se(fe)met(d)í(fg'h)psum :(e.) (:) et(h) tol(ghg)lat(ef) cru(ghgh)cem(f_d) su(gef)am,(f.) (;) et(eg/hjh) se(fg)quá(ef)tur(d!ew!fv_E~C~) me.(d.) (::)",
      source: "Graduale Romanum (GregoBase #89)",
      blurb: {
        text: "Qui vult venire draws its words from Matthew 16:24, where Jesus turns from Peter to address all his disciples. The chant quietly reshapes the verse's opening: where the Vulgate reads \"Si quis vult post me venire,\" the chant turns the conditional into a relative clause, \"Qui vult venire post me.\"",
        source: "Matt. 16:24 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C2 (Missale Romanum formulary)",
      },
    }
  },
  "ot-22-b": {
    communion: {
      title: "Domine memorabor",
      latin: "Dómine, memorábor justítiae tuae sólius : Deus, docuísti me a juventúte mea : et usque in senéctam et sénium, Deus, ne derelínquas me.",
      translation: "O Lord, I will be mindful of your justice alone: O God, you have taught me from my youth: and unto old age and gray hairs, O God, forsake me not.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode VIII",
      reference: "Ps. 71:16-17, 18",
      gabc: "(c4) DO(fg'h)mi(g)ne,(g) (,) * me(g)mo(gf)rá(ggfg)bor(d.) (,) ju(d)stí(d/gfg)ti(ge/fd)ae(d) tu(gfg)ae(g.) (,) so(fghjij)lí(jh/ig)us :(g.) (:) De(j)us,(jjj) do(ji)cu(h)í(ij'k)sti(h) me(g.) (,) a(g) ju(g)ven(g)tú(gh/ji)te(ih/jkj) me(ixh_givHF)a,(f.) (:) et(g) us(g.h!iwjjk)que(j) in(h) se(g)né(f/gfg)ctam(d.) (,) et(f) sé(ef'g)ni(ge/fd)um,(d.) (;) De(gfg)us,(ghggf.0) (,) ne(f!h'j) de(f!h'j)re(jh/ig)lín(g)quas(g.f!gwh_g) me.(g.) (::)",
      source: "Graduale Romanum (GregoBase #1318)",
      blurb: {
        text: "Domine memorabor draws from three consecutive verses of Psalm 71, trimming each one. Verse 16 opens with \"I will enter into the powers of the Lord\" before reaching the words the chant begins with; that opening clause is dropped. From verse 17, only the first half is kept, setting aside the promise to declare God's wonderful works. Verse 18 is cut after \"forsake me not,\" leaving out the further vow to proclaim God's arm to the coming generation. Every declaration about what the psalmist will do is removed, leaving only direct petition addressed to God.",
        source: "Ps. 71:16-17, 18 (Vulgate numbering Ps. 70:16-17, 18) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-22-c": {
    communion: {
      title: "Domine memorabor",
      latin: "Dómine, memorábor justítiae tuae sólius : Deus, docuísti me a juventúte mea : et usque in senéctam et sénium, Deus, ne derelínquas me.",
      translation: "O Lord, I will be mindful of your justice alone: O God, you have taught me from my youth: and unto old age and gray hairs, O God, forsake me not.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode VIII",
      reference: "Ps. 71:16-17, 18",
      gabc: "(c4) DO(fg'h)mi(g)ne,(g) (,) * me(g)mo(gf)rá(ggfg)bor(d.) (,) ju(d)stí(d/gfg)ti(ge/fd)ae(d) tu(gfg)ae(g.) (,) so(fghjij)lí(jh/ig)us :(g.) (:) De(j)us,(jjj) do(ji)cu(h)í(ij'k)sti(h) me(g.) (,) a(g) ju(g)ven(g)tú(gh/ji)te(ih/jkj) me(ixh_givHF)a,(f.) (:) et(g) us(g.h!iwjjk)que(j) in(h) se(g)né(f/gfg)ctam(d.) (,) et(f) sé(ef'g)ni(ge/fd)um,(d.) (;) De(gfg)us,(ghggf.0) (,) ne(f!h'j) de(f!h'j)re(jh/ig)lín(g)quas(g.f!gwh_g) me.(g.) (::)",
      source: "Graduale Romanum (GregoBase #1318)",
      blurb: {
        text: "Domine memorabor draws from three consecutive verses of Psalm 71, trimming each one. Verse 16 opens with \"I will enter into the powers of the Lord\" before reaching the words the chant begins with; that opening clause is dropped. From verse 17, only the first half is kept, setting aside the promise to declare God's wonderful works. Verse 18 is cut after \"forsake me not,\" leaving out the further vow to proclaim God's arm to the coming generation. Every declaration about what the psalmist will do is removed, leaving only direct petition addressed to God.",
        source: "Ps. 71:16-17, 18 (Vulgate numbering Ps. 70:16-17, 18) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  // ---- 23rd Sunday in Ordinary Time ----
  // Gradual splits by cycle: A & B "Beata gens" / C "Domine refugium".
  // Alleluia, offertory, communion are common to all three years.
  "ot-23": {
    alleluia: {
      title: "Exaudi orationem",
      latin: "Allelúia. ℣. Exáudi oratiónem meam, Dómine, et deprecatiónem meam : áuribus pércipe lácrimas meas : quóniam ádvena ego sum apud te, et peregrínus.",
      translation: "Alleluia. ℣. Hear my prayer, O Lord, and my supplication: give ear to my tears: for I am a sojourner with you, and a pilgrim.",
      mode: "Alleluia · Ordinary Time · Mode VII",
      reference: "Ps. 39:13",
      gabc: "(c2) AL(cg)le(gh)lú(fef){ia}.(g.) (,) * ij.(fg/ih/ijhhg//ivHGivHG//higgfhvGF'fc.) (,) (ege/feevD'Cef!gv'1//hvGE'fddc.) (::) ℣. Ex(cg'!hv)áu(fef)di(g.) (,) o(g)ra(gh)ti(g)ó(gh!i'j)nem(j_k) me(g)am,(giHG.) (,) Dó(f_[oh:h]g_[oh:h]e_[oh:h])mi(fgF'E)ne,(f!gwh/ihhg.) (;) et(g_[oh:h]e) de(fg)pre(g)ca(gh)ti(g_[oh:h]e)ó(f!gwhgh)nem(g.) (,) me(giig//f_hGF'fhGF'fvE'DC)am :(dc..) (:) áu(cd/fef)ri(f)bus(f) pér(f.e!fwgfg)ci(hg)pe(g) (,) lá(ge)cri(fg)mas(g) me(gh/i_[oh:h]g/hi'/jh'//jvI'HGhi)as :(hg..) (:) quó(gh)ni(fe)am(fg) ád(g/h'ih)ve(gf)na(f.) (,) e(f)go(fvEDef!hvGF'fvED) sum(ff) (,) a(f)pud(df) te,(e./fgf'/gd//evDCdc..) (;) * et(c) per(cg)e(gh)grí(fef)nus.(g.) (,) (fg/ih/ijhhg//ivHGivHG//higgfhvGF'fc.) (,) (ege/feevD'Cef!gv'1//hvGE'fddc.) (::)",
      source: "Graduale Romanum (GregoBase #329)",
      blurb: {
        text: "Psalm 39 verse 13, in the Douay-Rheims, reads: \"Hear my prayer, O Lord, and my supplication: give ear to my tears. Be not silent: for I am a stranger with thee, and a sojourner as all my fathers were.\" The Alleluia verse draws on that single verse, but sets aside the plea \"Be not silent\" and the phrase \"as all my fathers were.\" What remains is quieter, the prayer of one person standing before God, without the fuller weight of the original.",
        source: "Ps. 39:13 (Vulgate numbering Ps. 38:13) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Oravi Deum",
      latin: "Orávi Deum meum ego Dániel, dicens : Exáudi, Dómine, preces servi tui : illúmina fáciem tuam super sanctuárium tuum : et propítius inténde pópulum istum, super quem invocátum est nomen tuum, Deus.",
      translation: "I, Daniel, prayed to my God, saying: Hear, O Lord, the prayers of your servant: show your face upon your sanctuary: and graciously look upon this people, upon whom your name is invoked, O God.",
      mode: "Offertory · Ordinary Time · Mode IV",
      reference: "Dan. 9:17, 18, 19",
      gabc: "(c4) O(dfd)rá(eef//dgff'ffvD'C//dfD'C//dfd/ef)vi(e.) *(,) De(e.f!gwh)um(hg~) me(g)um(ddf) (;) e(eef)go(d!ewffvED'd) Dá(c)ni(dfd)el,(e./f!hgh) di(egff)cens :(fe..) (:) Ex(g)áu(iij)di,(g) Dó(h)mi(gh_G'_FE'f)ne,(fe..) (;) pre(e!fwg'!hv)ces(g) ser(ghgg)vi(f_e) tu(egF'E)i :(eef.) (:) il(d)lú(dg)mi(hg)na(g) fá(hji)ci(i)em(jkjj) tu(h.g!hwihi)am(ih..) (;) su(h!jj//jjj)per(gh) san(ef)ctu(g)á(hg/h!jj)ri(hg)um(gh) tu(gihhg)um :(g.) (:) et(g) pro(g)pí(gj)ti(kj)us(j) in(h)tén(ixfg'high)de(e.) (;) pó(e!fwg'!hv)pu(g)lum(hg/hf) i(d)stum,(fd/ff//fffg~) (,) su(cd)per(cd~) quem(c) in(c)vo(d!ewf)cá(fgF'E)tum(fg'h) est(h_g) (,) no(ghg)men(gh) tu(gv.fg/hgh)um,(hg..) (;) De(e/fhg'hvF'D//ff//ffvE'Cege.)(,)(g'//hg'hvF'D//ff//dffc)(,)(effd/ef'!gvF'E)us.(e.) (::)",
      source: "Graduale Romanum (GregoBase #652)",
      blurb: {
        text: "Oravi Deum meum draws on three consecutive verses of Daniel's prayer in Daniel 9, compressing them freely. Verse 17 supplies the appeal to show God's face upon the sanctuary; verse 18 contributes the phrase \"super quem invocatum est nomen tuum\"; verse 19 gives the opening word \"Exaudi.\" The middle of verse 18, where Daniel confesses that Israel's plea rests not on its own righteousness but on God's abundant mercies, is left aside entirely. The result is a single-voiced plea in Daniel's name, shaped into a pure act of intercession.",
        source: "Dan. 9:17, 18, 19 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Vovete et reddite",
      latin: "Vovéte, et réddite Dómino Deo vestro, omnes qui in circúitu ejus affértis múnera : terríbili, et ei qui aufert spíritum príncipum : terríbili apud omnes reges terrae.",
      translation: "Make vows, and pay them to the Lord your God, all you who round about him bring gifts: to him who is terrible, and who takes away the spirit of princes: who is terrible to all the kings of the earth.",
      mode: "Communion · Ordinary Time · Mode II",
      reference: "Ps. 76:12-13",
      gabc: "(f3) VO(ef'g)vé(f)te,(f.) *(,) et(ef'h~) réd(hhi)di(h)te(h.) (,) Dó(h)mi(hhh)no(f) De(h)o(f) ve(hih)stro,(hhh) (;) o(fgF~'E~)mnes(f_e) qui(e) in(e) cir(ehg~)cú(hi)i(i)tu(hi) e(i)jus(e.) (,) af(f)fér(hih)tis(gh) mú(f)ne(f_[oh:h]g_[oh:h]f_[oh:h])ra :(f.) (:) ter(h)rí(hj)bi(iji)li,(i.) (,) et(hg) e(h_[oh:h]i_[oh:h]f_[oh:h])i(f.) qui(hg) au(hi)fert(hvGF) (,) spí(h)ri(h)tum(g!i'j) prín(ji/jhi)ci(h.g!hwihi)pum :(ih..) (:) ter(h)rí(hgh)bi(f)li(e.) (,) a(fgef)pud(efE'C) o(ef)mnes(f_e) re(hh)ges(ig/h_g) ter(fg!hvGF'g)rae.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #1134)",
      blurb: {
        text: "Vovete et reddite calls those gathered around the Lord to make vows and bring gifts, before the Lord who is terrible with kings. Psalm 76 places that offering beside praise from human thought and God's judgment to save the meek, turning the Communion into a reverent act of surrender.",
        source: "Ps. 76:12-13 (Vulgate numbering Ps. 75:12-13) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-23-a": {
    gradual: {
      title: "Beata gens",
      latin: "Beáta gens, cujus est Dóminus Deus eórum : pópulus, quem elégit Dóminus in hereditátem sibi. ℣. Verbo Dómini caeli firmáti sunt : et spíritu oris ejus omnis virtus eórum.",
      translation: "Blessed is the nation whose God is the Lord: the people whom he has chosen for his inheritance. ℣. By the word of the Lord the heavens were established: and all their power by the spirit of his mouth.",
      mode: "Gradual · Ordinary Time (Years A & B) · Mode I",
      reference: "Ps. 33:12, 6",
      gabc: "(c4) BE(d)á(ff)ta(gffe//fhG'Fg_[oh:h]d) gens,(d.) *(;) cu(d)jus(d) est(ff) Dó(g_[oh:h]fh)mi(h)nus(h.) (,) De(hjhhg)us(g_[oh:h]f) e(fe)ó(ggfghvG__Fg_[oh:h]f)rum :(f.) (:) pó(hhghjjjvIH)pu(h_[oh:h]i_[oh:h]h_[oh:h])lus,(h.) (;) quem(f) e(ghg)lé(hvvG'FE'fwgfg)git(g_[oh:h]f_[oh:h]) (,) Dó(gffvED)mi(e[ll:1]d)nus(d/ffd/fge'/fgd'/e[ll:1]ddc.) (:) in(f) he(d)re(e)di(f)tá(ghgh//ijii)tem(ih..) (,) si(h)bi.(ghGEf_g//fgFDf_h//ghGEf_g//fgFD.1) (::) ℣. Ver(dh)bo(h) Dó(hjhhghGF.)(,)(ixhiHG'hw!ivHGhi)mi(h)ni(iyhjH'Gh!jjh//jjjvIH'jggf.0) (;) cae(h_[hl:1]k_[hl:1]j_[hl:1]kvJH'i)li(h.) fir(hg~)má(h!iwj)ti(g) sunt :(fh/jh/ih..) (:) et(f) spí(ghghjhhggf!gwh_g)ri(h)tu(g.) (,) o(h_fh)ris(g_[oh:h]fg) e(fg)jus(d/ffd/fge'/fgd'/e[ll:1]ddc.) (:) o(f_d/ff!gwhgh//jkjj'jvH'G/[-0.5]{ix}F0'gwh!iv_[oh:h]H~G~)mnis(h_g) vir(gh~)tus(g) *(,) e(gh)ó(ixjhiGF'h!jjvH'G)rum.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1044)",
      blurb: {
        text: "Beata gens draws from two verses of Psalm 33 that are not adjacent and are taken in reverse order. The respond opens with verse 12, and the versicle then reaches back to verse 6, with six verses between them in the psalm passed over. Verse 6, \"Verbo Domini caeli firmati sunt,\" grounds the claim of the respond: the Lord who formed the heavens by his word is precisely the God in whose election the blessed nation stands.",
        source: "Ps. 33:12, 6 (Vulgate numbering Ps. 32:12, 6) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-23-b": {
    gradual: {
      title: "Beata gens",
      latin: "Beáta gens, cujus est Dóminus Deus eórum : pópulus, quem elégit Dóminus in hereditátem sibi. ℣. Verbo Dómini caeli firmáti sunt : et spíritu oris ejus omnis virtus eórum.",
      translation: "Blessed is the nation whose God is the Lord: the people whom he has chosen for his inheritance. ℣. By the word of the Lord the heavens were established: and all their power by the spirit of his mouth.",
      mode: "Gradual · Ordinary Time (Years A & B) · Mode I",
      reference: "Ps. 33:12, 6",
      gabc: "(c4) BE(d)á(ff)ta(gffe//fhG'Fg_[oh:h]d) gens,(d.) *(;) cu(d)jus(d) est(ff) Dó(g_[oh:h]fh)mi(h)nus(h.) (,) De(hjhhg)us(g_[oh:h]f) e(fe)ó(ggfghvG__Fg_[oh:h]f)rum :(f.) (:) pó(hhghjjjvIH)pu(h_[oh:h]i_[oh:h]h_[oh:h])lus,(h.) (;) quem(f) e(ghg)lé(hvvG'FE'fwgfg)git(g_[oh:h]f_[oh:h]) (,) Dó(gffvED)mi(e[ll:1]d)nus(d/ffd/fge'/fgd'/e[ll:1]ddc.) (:) in(f) he(d)re(e)di(f)tá(ghgh//ijii)tem(ih..) (,) si(h)bi.(ghGEf_g//fgFDf_h//ghGEf_g//fgFD.1) (::) ℣. Ver(dh)bo(h) Dó(hjhhghGF.)(,)(ixhiHG'hw!ivHGhi)mi(h)ni(iyhjH'Gh!jjh//jjjvIH'jggf.0) (;) cae(h_[hl:1]k_[hl:1]j_[hl:1]kvJH'i)li(h.) fir(hg~)má(h!iwj)ti(g) sunt :(fh/jh/ih..) (:) et(f) spí(ghghjhhggf!gwh_g)ri(h)tu(g.) (,) o(h_fh)ris(g_[oh:h]fg) e(fg)jus(d/ffd/fge'/fgd'/e[ll:1]ddc.) (:) o(f_d/ff!gwhgh//jkjj'jvH'G/[-0.5]{ix}F0'gwh!iv_[oh:h]H~G~)mnis(h_g) vir(gh~)tus(g) *(,) e(gh)ó(ixjhiGF'h!jjvH'G)rum.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1044)",
      blurb: {
        text: "Beata gens draws two verses from Psalm 33, but not in the order the psalm gives them. The body of the gradual takes verse 12, and the verse takes verse 6, reversing the sequence, while the six verses that lie between them, including lines about nations fearing the Lord and his counsel standing forever, are passed over. The chant also quietly adjusts the wording of verse 12: where the Clementine Vulgate reads \"Deus ejus\" (God is his), the gradual has \"Deus eórum\" (God is theirs), shifting from the singular to address the whole people.",
        source: "Ps. 33:12, 6 (Vulgate numbering Ps. 32:12, 6) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-23-c": {
    gradual: {
      title: "Domine refugium",
      latin: "Dómine, refúgium factus es nobis, a generatióne et progénie. ℣. Priúsquam montes fíerent, aut formarétur terra et orbis : a saéculo, et in saéculum tu es Deus.",
      translation: "Lord, you have been our refuge, from generation to generation. ℣. Before the mountains were made, or the earth and the world was formed: from eternity and to eternity you are God.",
      mode: "Gradual · Ordinary Time (Year C) · Mode II",
      reference: "Ps. 90:1-2",
      gabc: "(c3) DO(egf)mi(f)ne,(f.) *(,) re(f)fú(hfghvF'Egef)gi(gf)um(f.) (;) fa(hf/hi'j)ctus(hvGF) es(gxfegvFE.) (,) no(e[ll:1]d/fef)bis,(fd/ef!hvvF'Ef!gwh/ihh/fgf.) (:) a(hh) ge(h)ne(h)ra(h)ti(h)ó(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF)ne(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) et(de'fhvGF'g) pro(ef)gé(hf)ni(hi)e.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Pri(f)ús(h)quam(ij~) mon(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)tes(ji..) (:) fí(i!jw!kvJI'jw!kvJI)e(i)rent,(i.) (,) aut(i) for(i)ma(i)ré(i)tur(ij~) ter(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)ra(f.) (`) et(hh) or(h)bis :(h.[ob:1;8mm]) (:) a(hi) saé(ivH'GE//fhGEfh..)(,)(gi!jvHF')cu(f)lo,(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) et(d) in(d) saé(de'f)cu(f)lum(f.0/[-0.5]hvGF'g) (,) tu(e) es(f) () * De(hf/h_i)us.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1108)",
      blurb: {
        text: "Domine refugium takes the opening two verses of Psalm 90 and uses them whole, without omission. The psalm itself carries an unusual distinction: its header reads \"Oratio Moysi, hominis Dei,\" a prayer of Moses, the man of God, making it the only psalm in the psalter bearing that attribution. The title \"the man of God\" given to Moses here echoes Deuteronomy 33:1, where it introduces the Blessing of Moses.",
        source: "Ps. 90:1-2 (Vulgate numbering Ps. 89:1-2) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 90\" (rev. 1323218217)",
      },
    }
  },

  // ---- 24th Sunday in Ordinary Time ----
  // Gradual & alleluia common; offertory splits A & B "Sanctificavit" / C "Precatus";
  // communion splits A "Tollite hostias" / B "Qui vult venire" / C "Dico vobis".
  "ot-24": {
    gradual: {
      title: "Laetatus sum",
      latin: "Laetátus sum in his quae dicta sunt mihi : in domum Dómini íbimus. ℣. Fiat pax in virtúte tua : et abundántia in túrribus tuis.",
      translation: "I rejoiced at the things that were said to me: we shall go into the house of the Lord. ℣. Let peace be in your strength: and abundance in your towers.",
      mode: "Gradual · Ordinary Time · Mode VII",
      reference: "Ps. 122:1, 7",
      gabc: "(c2) LAe(ff)tá(g)tus(fgF'Dgfg) sum(g./hiHG'gf/ghg.___) *(;) in(fg) his(gj) quae(j) di(jii)cta(g) sunt(gj~) mi(j_)hi :(g) (,) (ihij_i//hjii/ghg.) (:) in(gh) do(gh)mum(g_[oh:h]e) Dó(f)mi(dec)ni(c.) (,) í(eggf/g_[oh:h]e//fvED'ef'!gffd!ewf)bi(cdc___)mus.(c.) (::) ℣. Fi(gfg)at(gj~) pax(j_kJ'//G//ihij_i//hjii/ghg.) (;) in(f) vir(g)tú(g!ii//iikvJI'ig)te(gffd) tu(fdffd/ec)a :(c.) (:) et(g) a(c)bun(df~)dán(fv.d!gf'gjv.iiiih~)ti(ij)a(j_g//ihij_i//hjii/ghg.) (;) * in(cd) túr(fgf)ri(dgf/gh)bus(gh) tu(gf)is.(f.) (,) (hg/i_[oh:h]hgiHG'ge./fge'fvD'Cd_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #1011)",
      blurb: {
        text: "Laetatus sum draws on Psalm 122, one of the fifteen psalms the Vulgate heads Canticum graduum, a canticle of ascent. The gradual takes verse 1, the pilgrim's cry of joy at setting out for Jerusalem, then moves to verse 7, the prayer for peace within the city's walls. The intervening verses, describing Jerusalem's unity, the tribes gathering for judgment, and the call to pray for the city's peace, are passed over entirely, leaving the chant as a single arc from departure to arrival.",
        source: "Ps. 122:1, 7 (Vulgate numbering Ps. 121:1, 7) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Timebunt gentes",
      latin: "Allelúia. ℣. Timébunt gentes nomen tuum, Dómine : et omnes reges terrae glóriam tuam.",
      translation: "Alleluia. ℣. The nations shall fear your name, O Lord: and all the kings of the earth your glory.",
      mode: "Alleluia · Ordinary Time · Mode I",
      reference: "Ps. 102:16",
      gabc: "(c4) AL(dfddc~)le(fgf)lú(ghggf~){ia}.(f.) *(;) ij.(ixfh!ivHGhjh'jvIG'gf.0) (;) (ixfh!ivHGhjh'jvIG'gf.0) (,) (ghGF'gd.0/e!fwgffvEC.) (,) (cd!ef/gffvED.) (::) ℣. Ti(dfddc)mé(fgf)bunt(ghg/hgg) gen(fg!hvGF'g)tes(fgf.) (;) no(fg!hvGF'gd.0/e!fwgf)men(fvEC.) tu(cd!ef/gffvED)um,(d.) (,) Dó(cb)mi(c.d!ewfd)ne :(d.) (:) et(d) o(df/dec)mnes(d.0f!gwhghvGF) re(g.h!iwjh.1)(,)(fgh!jjhh'hhvGF)ges(gh) ter(ghGF'g)rae(d/ffd/e[ll:1]ddc.) (;) gló(ccdde/!fg./!fh/!ghf.1)(,)(gf/!ghf/!fvECddv[ll:1]/CA)ri(cd)am(d.) *(,) tu(ff/dec./d!ffg//f!gh'GF)am.(f.) (;) (ixfh!ivHGhjh'jvIG'gf.0) (;) (ixfh!ivHGhjh'jvIG'gf.0) (,) (ghGF'gd.0/e!fwgffvEC.) (,) (cd!ef/gffvED.) (::)",
      source: "Graduale Romanum (GregoBase #1097)",
      blurb: {
        text: "Psalm 102:16, the verse sung here, sits within a movement from desolation to restoration. The two verses immediately before it speak of God rising to have mercy on Sion because its very stones are dear to his servants; the verse immediately after supplies the reason the nations will fear: \"the Lord hath built up Sion: and he shall be seen in his glory.\" The Alleluia verse lifts out the central declaration, leaving its cause and its consequence resting in the psalm around it.",
        source: "Ps. 102:16 (Vulgate numbering Ps. 101:16) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-24-a": {
    offertory: {
      title: "Sanctificavit Moyses",
      latin: "Sanctificávit Móyses altáre Dómino, ófferens super illud holocáusta, et ímmolans víctimas : fecit sacrifícium vespertínum in odórem suavitátis Dómino Deo, in conspéctu filiórum Israel.",
      translation: "Moses consecrated an altar to the Lord, offering upon it holocausts, and sacrificing victims: he made an evening sacrifice for an odor of sweetness to the Lord God, in the sight of the children of Israel.",
      mode: "Offertory · Ordinary Time (Years A & B) · Mode V",
      reference: "Ex. 24:4, 5",
      gabc: "(c4) SAn(fg)cti(f)fi(ghg)cá(ixhiH'G)vit(h_ghvGF.) (,) * Mó(f)y(h)ses(h!iwj/kjj/hih.) (;) al(f)tá(hj)re(jv.jjj_h) Dó(h)mi(h_[oh:h]i_[oh:h]h_[oh:h])no,(h.) (:) óf(hj)fe(gh)rens(gfg) su(ghG'F)per(fg) il(ixhgg'g//ggg_[oh:h]f/gih)lud(h.) (,) ho(h!iwj)lo(g/jjvHG'gfg)cáu(f.e!fwg!hvGF'g)sta,(gf..) (:) et(f.0h!iwj'!kv) ím(jk)mo(jvIH)lans(jj) ví(jk!lvKJ)cti(j_[hl:1]k_[hl:1]j_[hl:1])mas :(j.) (;) fe(jk)cit(jji) sa(jjj)cri(h!iw!jvIG')fí(h/jjj)ci(j_[hl:1]k_[hl:1]j_[hl:1])um(j.) ve(jk)sper(jvI~H~)tí(h_[oh:h]i_[oh:h]h_[oh:h])num(h.) (;) in(h) o(hf)dó(hj)rem(j'/kjj) su(j)a(j)vi(h)tá(h_g//hjg___hvGF'g)tis(gf..) (,) Dó(h!iwj)mi(g)no(fg/hgh) De(h_[oh:h]i_[oh:h]h_[oh:h])o,(h.) (:) in(h) con(j)spé(j_h/jjg/h//jjvH'Fg_[oh:h]f)ctu(fgff//df/gffgD'Cd_[oh:h]e_[oh:h]d._[oh:h]) (;) fi(c)li(d)ó(f)rum(gf~) Is(f)ra(gh)el.(hv.gh!jjvHG'ge//f_[oh:h]g_[oh:h]e_[oh:h]!fwggf.0) (::)",
      source: "Graduale Romanum (GregoBase #838)",
      blurb: {
        text: "Sanctificavit Moyses takes its opening from Exodus 24:4-5, where Moses builds an altar and sends young men to offer holocausts and pacific victims of calves. The offertory reshapes that material: it drops the twelve stone pillars, the twelve tribes, and the young men entirely, adds the phrase \"evening sacrifice,\" and frames the whole action as Moses himself sanctifying the altar in the sight of the children of Israel, a detail not present in those verses.",
        source: "Ex. 24:4, 5 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Tollite hostias",
      latin: "Tóllite hóstias, et introíte in átria ejus : adoráte Dóminum in aula sancta ejus.",
      translation: "Bring up sacrifices, and come into his courts: adore the Lord in his holy court.",
      mode: "Communion · Ordinary Time (Year A) · Mode IV",
      reference: "Ps. 96:8-9",
      gabc: "(c3) TOl(i)li(h)te(g) hó(ijij)sti(hi)as,(i_[oh:h]g) *(,) et(h) in(g)tro(hi)í(i_[oh:h]g/hih)te(g.) (,) in(h) á(h_f//hgh)tri(gf)a(f) e(fhghvG~F~)jus :(gf..) (:) ad(hg)o(h)rá(i_[oh:h]h_[oh:h])te(h_f) Dó(f_e)mi(e_[oh:h][ll:1]d)num(d.) (,) in(f) au(fhgivH~G~)la(g) san(g)cta(gih) e(fiH~'G~)jus.(g.) (::)",
      source: "Graduale Romanum (GregoBase #404)",
      blurb: {
        text: "Tollite hostias draws from two consecutive verses of Psalm 96, trimming both ends. The opening of verse 8, \"Bring to the Lord glory unto his name,\" is dropped, and so is the close of verse 9, \"Let all the earth be moved at his presence.\" What remains is the direct invitation: bring offerings, enter the courts, adore the Lord in his holy place. The compression turns a broader hymn of cosmic praise into a focused call to approach.",
        source: "Ps. 96:8-9 (Vulgate numbering Ps. 95:8-9) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-24-b": {
    offertory: {
      title: "Sanctificavit Moyses",
      latin: "Sanctificávit Móyses altáre Dómino, ófferens super illud holocáusta, et ímmolans víctimas : fecit sacrifícium vespertínum in odórem suavitátis Dómino Deo, in conspéctu filiórum Israel.",
      translation: "Moses consecrated an altar to the Lord, offering upon it holocausts, and sacrificing victims: he made an evening sacrifice for an odor of sweetness to the Lord God, in the sight of the children of Israel.",
      mode: "Offertory · Ordinary Time (Years A & B) · Mode V",
      reference: "Ex. 24:4, 5",
      gabc: "(c4) SAn(fg)cti(f)fi(ghg)cá(ixhiH'G)vit(h_ghvGF.) (,) * Mó(f)y(h)ses(h!iwj/kjj/hih.) (;) al(f)tá(hj)re(jv.jjj_h) Dó(h)mi(h_[oh:h]i_[oh:h]h_[oh:h])no,(h.) (:) óf(hj)fe(gh)rens(gfg) su(ghG'F)per(fg) il(ixhgg'g//ggg_[oh:h]f/gih)lud(h.) (,) ho(h!iwj)lo(g/jjvHG'gfg)cáu(f.e!fwg!hvGF'g)sta,(gf..) (:) et(f.0h!iwj'!kv) ím(jk)mo(jvIH)lans(jj) ví(jk!lvKJ)cti(j_[hl:1]k_[hl:1]j_[hl:1])mas :(j.) (;) fe(jk)cit(jji) sa(jjj)cri(h!iw!jvIG')fí(h/jjj)ci(j_[hl:1]k_[hl:1]j_[hl:1])um(j.) ve(jk)sper(jvI~H~)tí(h_[oh:h]i_[oh:h]h_[oh:h])num(h.) (;) in(h) o(hf)dó(hj)rem(j'/kjj) su(j)a(j)vi(h)tá(h_g//hjg___hvGF'g)tis(gf..) (,) Dó(h!iwj)mi(g)no(fg/hgh) De(h_[oh:h]i_[oh:h]h_[oh:h])o,(h.) (:) in(h) con(j)spé(j_h/jjg/h//jjvH'Fg_[oh:h]f)ctu(fgff//df/gffgD'Cd_[oh:h]e_[oh:h]d._[oh:h]) (;) fi(c)li(d)ó(f)rum(gf~) Is(f)ra(gh)el.(hv.gh!jjvHG'ge//f_[oh:h]g_[oh:h]e_[oh:h]!fwggf.0) (::)",
      source: "Graduale Romanum (GregoBase #838)",
      blurb: {
        text: "Sanctificavit Moyses takes its opening from Exodus 24:4-5, where Moses builds an altar and sends young men to offer holocausts and pacific victims of calves. The offertory reshapes that material: it drops the twelve stone pillars, the twelve tribes, and the young men entirely, adds the phrase \"evening sacrifice,\" and frames the whole action as Moses himself sanctifying the altar in the sight of the children of Israel, a detail not present in those verses.",
        source: "Ex. 24:4, 5 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Qui vult venire post me",
      latin: "Qui vult veníre post me, ábneget semetípsum : et tollat crucem suam, et sequátur me.",
      translation: "Whoever wishes to come after me, let him deny himself: and take up his cross, and follow me.",
      mode: "Communion · Ordinary Time (Year B) · Mode I",
      reference: "Matt. 16:24",
      gabc: "(c4) QUI(d) vult(f) ve(fe)ní(gh)re(ixih) post(fg) me,(fvED.) *(;) áb(ixf!gwhg/hih)ne(g)get(f) se(fe)met(d)í(fg'h)psum :(e.) (:) et(h) tol(ghg)lat(ef) cru(ghgh)cem(f_d) su(gef)am,(f.) (;) et(eg/hjh) se(fg)quá(ef)tur(d!ew!fv_E~C~) me.(d.) (::)",
      source: "Graduale Romanum (GregoBase #89)",
      blurb: {
        text: "Qui vult venire draws its words from Matthew 16:24, where Jesus turns from Peter to address all his disciples. The chant quietly reshapes the verse's opening: where the Vulgate reads \"Si quis vult post me venire,\" the chant turns the conditional into a relative clause, \"Qui vult venire post me.\"",
        source: "Matt. 16:24 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C2 (Missale Romanum formulary)",
      },
    }
  },
  "ot-24-c": {
    offertory: {
      title: "Precatus est Moyses",
      latin: "Precátus est Móyses in conspéctu Dómini Dei sui, et dixit : Quare, Dómine, irásceris in pópulo tuo? Parce irae ánimae tuae : meménto Abraham, Isaac et Jacob, quibus jurásti dare terram fluéntem lac et mel. Et placátus factus est Dóminus de malignitáte, quam dixit fácere pópulo suo.",
      translation: "Moses prayed in the sight of the Lord his God, and said: Why, O Lord, are you angry with your people? Let the anger of your soul be appeased: remember Abraham, Isaac and Jacob, to whom you swore to give a land flowing with milk and honey. And the Lord was appeased from the wrath which he had threatened against his people.",
      mode: "Offertory · Ordinary Time (Year C) · Mode VIII",
      reference: "Ex. 32:11-14",
      gabc: "(c3) PRe(e)cá(fhe)tus(d!ewfef) est(f_e) (,) * Mó(f)y(h)ses(hihhvGEf.) (;) in(b) con(b)spé(de)ctu(de) Dó(f_e/f!gw!hvGF)mi(e!gw!hvGF'g)ni(g_[oh:h]f) (,) De(f)i(e[ll:1]d) su(ef!gvFE'f)i,(fe..) (;) et(e) di(e!hhe/ff//df!hvED'db//cd!efe)xit.(e.) (:) Pre(e)cá(fhe/fe)tus(d!ewfef) est(f_e) (,) Mó(f)y(h)ses(hg/hihhvGEf.) (;) in(b) con(b)spé(de)ctu(de) Dó(f_e/f!gw!hvGF)mi(e!gw!hvGF'g)ni(g_[oh:h]f) (,) De(f)i(e[ll:1]d) su(ef!gvFE'f)i,(eb..) (;) et(b) di(b!ddb//cd!efe)xit :(e.) (:) Qua(ehhi)re,(hi) Dó(h)mi(ivHF)ne,(efe.) (,) i(e)rá(e!hh//hhhffee[ll:1]d!ewf!gvFE)sce(fe)ris(e.) (;) in(d) pó(efe/fg)pu(f)lo(f) tu(e.[ll:1]d!ewfef)o?(fe..) (:) Par(de/f!hhhhi~)ce(g) i(h)rae(efe.) (,) á(hhi)ni(f)mae(efe) tu(ffeg'FEfvEDef!gvFE'f)ae :(fe..) (:) me(e)mén(ei'!jv)to(i) A(i)bra(i)ham,(i!jw!kvJI) (,) I(hi)sa(gh)ac(iih.0) (,) et(hv.hh//hhh_g/hi!kvJI) Ja(hi)cob,(i_[oh:h]e/f_[oh:h]g_[oh:h]f._[oh:h]) (;) qui(d)bus(e) ju(f)rá(fi)sti(h) da(hg)re(f) ter(h)ram(hh//hhh) (,) flu(e)én(f)tem(e[ll:1]d~) lac(e.) (`) et(e!fwgf/g_[oh:h]f/hhf/hhvFD'ew!fvEDef) mel.(e.) (:) Et(d) pla(f)cá(h)tus(hf~) fa(hi'j)ctus(i) est(hiHF.1) (,) Dó(h!iwj_i)mi(i.h!iwjij)nus(ji..) (;) de(iv.hhhh_i) ma(e)li(f)gni(g)tá(g)te,(iv.hhhh_i) (;) quam(fe~) di(h!iwj_i)xit(j) fá(ijhh)ce(hv.fh!ivHG'h)re(hg..) (;) pó(i_[oh:h]h)pu(h)lo(ihhf/hhhhv'1GE//fhfhvFD.1) (,) (ef!hvvGF'gw!hvGF) su(ef!gvFE'f)o.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #325)",
      blurb: {
        text: "Precatus est Moyses draws from Exodus 32:11-14, but compresses Moses's prayer. Verse 12, where Moses argues that the Egyptians will mock God for leading the people out only to destroy them in the mountains, is dropped entirely. The promise Moses invokes in verse 13, that God would multiply their seed as the stars of heaven and give them the whole land, is silently replaced with the phrase \"terram fluentem lac et mel,\" a land flowing with milk and honey, a phrase that belongs to other passages in the books of Moses rather than to this moment. The chant retains the opening plea and the appeal to the patriarchs in compressed liturgical form.",
        source: "Ex. 32:11-14 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent12-0 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Dico vobis: gaudium est",
      latin: "Dico vobis : gáudium est Angelis Dei super uno peccatóre paeniténtiam agénte.",
      translation: "I say to you: there is joy before the Angels of God upon one sinner doing penance.",
      mode: "Communion · Ordinary Time (Year C) · Mode V",
      reference: "Luke 15:10",
      gabc: "(c3) DI(h)co(f) vo(hi)bis,(i.) *(,) gáu(ij)di(i)um(h) est(h) An(h)ge(g)lis(i) De(h_[oh:h]i_[oh:h]f_[oh:h])i(f.) (;) su(f)per(e) u(f)no(e) pec(f)ca(d)tó(ef)re(f.) (,) pae(f)ni(h)tén(f)ti(e)am(f!gwhg/hih) a(f)gén(d_[oh:h]e_[oh:h]d~)te.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1058)",
      blurb: {
        text: "Dico vobis gaudium est quotes Luke 15:10, the closing line of the parable sequence about the lost sheep and lost coin. The antiphon compresses the Vulgate slightly: where Luke reads \"gaudium erit coram angelis Dei,\" the chant has \"gaudium est Angelis Dei,\" shifting from future to present tense and placing joy among the angels rather than before them.",
        source: "Luke 15:10 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent03-0r (Missale Romanum formulary)",
      },
    }
  },

  // ---- 25th Sunday in Ordinary Time ----
  // Gradual splits A "Dirigatur" / B "Quis sicut Dominus" / C "Prope est Dominus";
  // alleluia, offertory, communion common.
  "ot-25": {
    alleluia: {
      title: "Confitemini et invocate",
      latin: "Allelúia. ℣. Confitémini Dómino, et invocáte nomen ejus : annuntiáte inter gentes ópera ejus.",
      translation: "Alleluia. ℣. Give praise to the Lord, and call upon his name: declare his deeds among the nations.",
      mode: "Alleluia · Ordinary Time · Mode II",
      reference: "Ps. 105:1",
      gabc: "(c3) AL(ef)le(f)lú(hf/hh/ihhi){ia}.(ijhhe.) *(,) ij.(hhh'j!lvI'HGF'gwhf.1) (::) ℣. Con(f)fi(hh)té(i)mi(h)ni(hjihh/fgf.) (,) Dó(hf/hh/ihhi)mi(f)no,(efe.) (;) et(fd) in(e)vo(f)cá(fih'/ig'/hf)te(efe.) (,) no(f)men(fgef) e(f!gwhgh)jus :(gf..) (:) an(g)nun(e)ti(f)á(hjIH'h//fiH'GEf./hf/hf/he)te(e.) (,) in(e)ter(e) gen(egFE'f!hhhf//ijhh)tes(g_[oh:h]fgvFEfe..) *(;) ó(fd)pe(e)ra(f) e(hf/hh/ihhi)jus.(ijhhe.) (,) (hhh'j!lvI'HGF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1192)",
      blurb: {
        text: "Confitemini et invocate joins praise with proclamation: give thanks to the Lord, call upon his name, and make his deeds known among the nations. The Alleluia turns remembered mercy into public witness.",
        source: "Ps. 105:1 (Vulgate numbering Ps. 104:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Si ambulavero",
      latin: "Si ambulávero in médio tribulatiónis, vivificábis me, Dómine : et super iram inimicórum meórum exténdes manum tuam, et salvum me fecit déxtera tua.",
      translation: "If I shall walk in the midst of tribulation, you will revive me, O Lord: and you will stretch forth your hand against the wrath of my enemies, and your right hand has saved me.",
      mode: "Offertory · Ordinary Time · Mode VIII",
      reference: "Ps. 138:7",
      gabc: "(c4) SI(ghg) am(f)bu(g)lá(gj/hi//hjj'1j)ve(kjjvI'HG)ro(hhg.) *(;) in(g) mé(hg/h!jjk)di(hg)o(g.) (,) tri(g!hwi_[oh:h]h)bu(hg)la(gffvED')ti(g)ó(g!hwihi)nis,(hg..) (:) vi(ghg)vi(f)fi(g)cá(gj/hi//h!jj//jjjhhggf.0)(,)(h!iwjj)bis(kj~) me,(jv.ijh'ivH'G//jjjvIH'iw!jvIH) (,) Dó(hg)mi(g!hwihi)ne :(hg..) (:) et(g!h!gh~) su(f)per(g) i(gjji!jwkj)ram(j_k) (,) in(j)i(jkJ'H)mi(ji)có(jv.ijhi)rum(hhg.) (,) me(g)ó(ghGF'gffvEDgh)rum(g.) (;) ex(h)tén(gjI'Ghh//fh!jvGF'fd/ef!ghg)des(g.) (;) ma(ig/h!jj/klKJ'jvIG)num(jj) tu(h!iw!jvI'HG'h)am,(gh/ih..) (:) et(g) sal(hi~)vum(i) me(i) fe(ij!kvJHji)cit(i.) (;) déx(ij'k)te(j)ra(kjj'jj_h) tu(jj//jjj_h//jjh//jvIGh.)(,)(fh!jvIG___//ivHGhg)a.(g.) (::)",
      source: "Graduale Romanum (GregoBase #616)",
      blurb: {
        text: "Psalm 138:7 trusts that the Lord will revive the speaker in the midst of tribulation. The following verse turns from affliction to the Lord's enduring mercy and asks that the works of God's hands not be despised.",
        source: "Ps. 138:7 (Vulgate numbering Ps. 137:7) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent19-0.txt [Officium heading]; Divinum Officium, Pent19-0 (Missale Romanum formulary)",
      },
    },
    communion: {
      title: "Tu mandasti",
      latin: "Tu mandásti mandáta tua custodíri nimis : útinam dirigántur viae meae, ad custodiéndas justificatiónes tuas.",
      translation: "You have commanded that your commandments be kept most diligently: O that my ways may be directed to keep your justifications.",
      mode: "Communion · Ordinary Time · Mode V",
      reference: "Ps. 119:4-5",
      gabc: "(c3) TU(h) man(hf~)dá(hi)sti(h.) *(,) man(fe~)dá(gxfgf)ta(e) tu(f/hhh)a(h.) (,) cu(d)sto(ef)dí(gxfgF'E)ri(hh) ni(i_[oh:h]h)mis :(hiHF.1) (:) ú(gxfg)ti(f)nam(f) di(f)ri(gxgh)gán(h)tur(f) vi(ih)ae(gxgh) me(gxh)ae,(hihh/fgf.) (;) ad(d) cu(ef)sto(gxfgf')di(e)én(fgF~'E~)das(f_e) (,) ju(d)sti(gxfgf')fi(e)ca(fgf')ti(e)ó(fg!hvG'FE)nes(fe/f_e) tu(de!fvED'e)as.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #479)",
      blurb: {
        text: "Tu mandasti joins two consecutive verses from Psalm 119:4-5. The first acknowledges God's command that his commandments be kept, while the second turns that acknowledgment into a prayer that one's ways be directed toward keeping them. The chant lets obedience and the desire for grace stand together in a single Communion text.",
        source: "Ps. 119:4-5 (Vulgate numbering Ps. 118:4-5) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent19-0 (Missale Romanum formulary); Divinum Officium, Pent19-0.txt [Officium heading]",
      },
    }
  },
  "ot-25-a": {
    gradual: {
      title: "Dirigatur oratio mea",
      latin: "Dirigátur orátio mea sicut incénsum in conspéctu tuo, Dómine. ℣. Elevátio mánuum meárum sacrifícium vespertínum.",
      translation: "Let my prayer be directed as incense in your sight, O Lord. ℣. The lifting up of my hands as an evening sacrifice.",
      mode: "Gradual · Ordinary Time (Year A) · Mode VII",
      reference: "Ps. 141:2",
      gabc: "(c2) DI(c)ri(cg)gá(g)tur(g_[oh:h]e/fgddc.) (,) * o(c)rá(c!feg)ti(gh)o(hfg) me(gh!ivHG'h)a(gh/ih..) (;) sic(f)ut(g) in(hj~)cén(j)sum(j_g/hg..) (,) in(g) con(h)spé(hj)ctu(i) tu(hfg)o,(g_[oh:h]e//fgf'/gddc.) (;) Dó(ffd/fef)mi(e)ne.(ce!ghGF'fe//ced/e[ll:1]ddc.) (::) ℣. E(f)le(g)vá(g_[uh:l]j//ij/kii'iivGF'fd)(,)(ffd/ffg)ti(g)o(g_[oh:h]f//gih/ijhhg.) (;) má(gj)nu(j_0)um(k) me(g)á(igge//fhGF'fd!ew!fvE'DC'd)rum(dc..) (:) sa(c)cri(d)fí(fgf)ci(dgf/gh)um(g.) *(,) ves(c)per(ff)tí(fv.ef/gfg)num.(gge./giHG'ivHG'ge.) (,) (fge'fvD'Cd_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #44)",
      blurb: {
        text: "Both the respond and the versicle are drawn from a single verse, Psalm 141:2, divided between them: the respond takes the first half and the versicle the second. The verse's image of prayer rising like incense stands in for a temple sacrifice the psalmist cannot offer, and it drew the verse into Christian evening worship from an early time. John Chrysostom records that it was sung every day.",
        source: "Ps. 141:2 (Vulgate numbering Ps. 140:2) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 141\" (rev. 1351255003)",
      },
    }
  },
  "ot-25-b": {
    gradual: {
      title: "Quis sicut Dominus",
      latin: "Quis sicut Dóminus Deus noster, qui in altis hábitat : humília réspicit in caelo et in terra? ℣. Súscitans a terra ínopem, et de stércore érigens páuperem.",
      translation: "Who is like the Lord our God, who dwells on high: and looks down on the lowly things in heaven and on earth? ℣. Raising up the needy from the earth, and lifting the poor out of the dunghill.",
      mode: "Gradual · Ordinary Time (Year B) · Mode V",
      reference: "Ps. 113:5-7",
      gabc: "(c4) QUis(d) sic(ff)ut(gh~) Dó(h_fgvFED.g_[oh:h]e/fg)mi(f)nus(f.) *(;) De(fg'h)us(hg/h_g) no(fg!hvGF'g)ster,(gf..) (;) qui(f) in(hj) al(j)tis(h) há(jk)bi(j.i!jwkjk)tat :(kj..) (:) hu(h)mí(h)li(ixgiH'Ghf)a(f.) ré(h_g)spi(h)cit(f.) (`) in(hj~) cae(j)lo(ij) (,) et(h) in(fg~) ter(f)ra?(gffgD0'/[-0.5]{ix}C0hv.giHF.1) (,) (fhg___jv.jjjhh//fhg/hggf.0) (z0::c3) ℣. Sús(h)ci(hi)tans(ihhf/hiHG.hiFD.1) (,) (f/hhi/hhf/hiHG.hiFD.1) (,) (gxfg//e!g'h/ghghvFD.1) (,) (fdfED//fd/ef!hh/ig/hf/hi!kkkh..) (;) a(hi/j.i!jwk) ter(ikH'Gh)ra(f.) ín(fh)o(hef)pem,(d.) (:) et(d) de(fe) stér(eh)co(h)re(h_[oh:h]i_[oh:h]h_2[oh:h]//i_[oh:h]hjvIH'Ghf..) (;) é(de'f)ri(f)gens(f) *() páu(fhGF')pe(i)rem.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhf.0/dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #472)",
      blurb: {
        text: "Quis sicut Dominus asks who is like the God who dwells on high yet looks upon the lowly. Psalm 113 answers with God's raising of the needy and lifting of the poor, making the Gradual's high vision a promise of attention to the lowly.",
        source: "Ps. 113:5-7 (Vulgate numbering Ps. 112:5-7) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-25-c": {
    gradual: {
      title: "Prope est Dominus",
      latin: "Prope est Dóminus ómnibus invocántibus eum : ómnibus qui ínvocant eum in veritáte. ℣. Laudem Dómini loquétur os meum : et benedícat omnis caro nomen sanctum ejus.",
      translation: "The Lord is near to all who call upon him: to all who call upon him in truth. ℣. My mouth shall speak the praise of the Lord: and let all flesh bless his holy name.",
      mode: "Gradual · Ordinary Time (Year C) · Mode V",
      reference: "Ps. 145:18, 21",
      gabc: "(c4) PRo(f)pe(f) est(f) Dó(f_)mi(d)nus(d//ffg/fffd) (,) (ff/ge'fvDC'//fd'/e[ll:1]ddc.) (;) * ó(f)mni(gh)bus(h) in(h)vo(g)cán(fhg)ti(g)bus(g) (`) e(hg/h!jjjh)(,)(jjjvIH'jggfg)um :(gf..) (:) ó(hj)mni(gf)bus(f) qui(f) ín(f)vo(e)cant(dgf~) e(fge'/fddcd)um(dc..) (;) in(e_[oh:h]) ve(c)ri(d!ewf)tá(fgF//C'd!fff)te.(f.) (,) (ixhhg/hh//gh!ivGF/!hh//iyfh!jkijh.) (,) (fg/h!jj/klijh.ixgiHF.1) (z0::c3) ℣. Lau(hh)dem(h) Dó(h)mi(h)ni(ihh'hh_f) (,) (hhf/hhe//gxfgED./[-3]gy/[0.5]hhjvIH//hvGF.) (:) lo(f!h'i)qué(i)tur(ih/jkIH'hf.) (,) os(hf/hhh) me(h)um :(h.f!gwh!iv.hi/!jh/!h/iih.0) (:) et(d) be(d)ne(fe)dí(eh)cat(h.) (,) o(ihhg~)mnis(i'/jk) ca(i_[oh:h]h)ro(hg/i_[oh:h]h//jvIH'Ghf..) (;) no(f_e)men(gxegf'gvE'D) san(fe~)ctum(h.) *(,) e(hiH'F)jus.(f./de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #284)",
      blurb: {
        text: "Prope est Dominus draws two verses from Psalm 145, but not two consecutive ones. The respond takes verse 18, then the verse (℣) leaps to verse 21, passing over verses 19 and 20, which speak of God hearing the prayers of those who fear him and destroying the wicked. The psalm's verse 21 also closes with the phrase \"in sæculum, et in sæculum sæculi\" (forever and ever), which the chant quietly omits.",
        source: "Ps. 145:18, 21 (Vulgate numbering Ps. 144:18, 21) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  // ---- 26th Sunday in Ordinary Time ----
  // Gradual splits A "Christus factus est" / B & C "Oculi omnium";
  // alleluia, offertory, communion common.
  "ot-26": {
    alleluia: {
      title: "Paratum cor meum",
      latin: "Allelúia. ℣. Parátum cor meum, Deus, parátum cor meum : cantábo, et psallam tibi, glória mea.",
      translation: "Alleluia. ℣. My heart is ready, O God, my heart is ready: I will sing, and chant a psalm to you, my glory.",
      mode: "Alleluia · Ordinary Time · Mode III",
      reference: "Ps. 108:2",
      gabc: "(c4) AL(eef)le(dg)lú(g_[oh:h]i_[oh:h]g_[oh:h]/h!iwjjk){ia}.(i.) *(;) ij.(g.h!iwj_h//jh/ig.) (,) (g.h!iwj_h//jh/igge.) (,) (ef'ghghF'Ef_gffe.) (::) ℣. Pa(c.d!ewff)rá(f)tum(fg~) cor(g_[oh:h]f) me(ixf!gwh'!iv)um,(hg~) De(ghGF'g)us,(gf..) (;) pa(f.0h!iwjj)rá(j)tum(ixjjvIG') cor(g!jjj) me(ixj_h/iih)um :(h.) (:) can(fh)tá(h/jhhfg)bo,(gv.ff/ded.) (,) et(d) psal(ff)lam(ghGF'g) ti(ixg/hig)bi(g.) (;) gló(ixfh/ig/hh//gg/hfg.)(,)(ixgjjh/ig/hh//gg/hfg.)(,)(ixjjjh/ig/hh//gg/hfg.)(,)(ef/ghgfv.efd.1)(,)(de!fvghg)ri(f_efvED'e)a(e[ll:1]d..) *(;) me(ff/g_[oh:h]f/hgh)a.(hhf.) (,) (h_ghvFDgff'fvE'C//ggf/ghdd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #745)",
      blurb: {
        text: "Paratum cor meum draws on a single verse of Psalm 108. The verse that follows immediately in the psalm reads, \"Arise, my glory; arise, psaltery and harp: I will arise in the morning early,\" giving the opening declaration of readiness an explicitly dawn setting within the psalm itself. Marc-Antoine Charpentier set the same psalm opening to music around 1680, in a Latin work for three voices and continuo, H.183.",
        source: "Ps. 108:2 (Vulgate numbering Ps. 107:2) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 108\" (rev. 1358217592)",
      },
    },
    offertory: {
      title: "Super flumina Babylonis",
      latin: "Super flúmina Babylónis, illic sédimus, et flévimus, dum recordarémur tui, Sion.",
      translation: "Upon the rivers of Babylon, there we sat and wept, while we remembered you, O Sion.",
      mode: "Offertory · Ordinary Time · Mode I",
      reference: "Ps. 137:1",
      gabc: "(c4) SU(f)per(ixgh'i) flú(h)mi(hgh)na(hf/gh/jhjvGF'fd/fddc.) *(,) Ba(d)by(dc/d!ff/g.h!iw!jvIH//ghG'F)ló(fg!hvGF'g)nis,(gf..) (:) il(fh)lic(h_g) sé(h!iwj)di(hvGF)mus,(ixg!hwih.) (;) et(h_ghvGE) flé(f!gwhg)vi(gffvED)mus,(d!ffd/fge'/fgd'/e[ll:1]ddc.) (:) dum(f) re(d)cor(e)da(f)ré(ghgh)mur(jh/jjvH'G) tu(ixgf/hiG'F)i,(ff/ghF'E) (,) Si(f)on.(f_d//f!gwhgh'jvHG'hvF'Df.) (,) (e/gwhgh'jvHG'hvF'D//f_[oh:h]g_[oh:h]f_2[oh:h]//g_[oh:h]f/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #812)",
      blurb: {
        text: "Super flumina Babylonis sits in exile beside the rivers and weeps while remembering Sion. Psalm 137 follows with the silence of instruments and the captors' demand for songs, so the Offertory lets remembered worship remain honest about captivity.",
        source: "Ps. 137:1 (Vulgate numbering Ps. 136:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Memento verbi tui",
      latin: "Meménto verbi tui servo tuo, Dómine, in quo mihi spem dedísti : haec me consoláta est in humilitáte mea.",
      translation: "Remember your word to your servant, O Lord, in which you have given me hope: this has comforted me in my lowliness.",
      mode: "Communion · Ordinary Time · Mode IV",
      reference: "Ps. 119:49-50",
      gabc: "(c4) ME(f)mén(gh)to(hg) *() ver(h)bi(hg) tu(h)i(hf) ser(g)vo(gd) tu(f)o,(f.) Dó(e)mi(egff)ne(eef.) (;) in(d) quo(fhg) mi(h)hi(g_[oh:h]f) spem(gh) de(g)dí(egff)sti :(fe..) (:) haec(g) me(gh!ivih) con(h)so(hg)lá(h)ta(gh_G'_FE'f) est(fe..) (;) in(efe') hu(d)mi(efe')li(d)tá(ef'g)te(f) me(egff)a.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #696)",
      blurb: {
        text: "Memento verbi tui draws its two verses from Psalm 119, the great alphabetical psalm of love for God's word. The antiphon keeps both verses almost intact but stops partway through the second: the psalm's verse 50 continues beyond the chant's closing phrase, adding \"quia eloquium tuum vivificavit me,\" because thy word hath enlivened me, and that clause is left out. The antiphon also opens with \"Meménto\" where the Vulgate reads \"Memor esto\"; both mean \"be mindful,\" but the form is changed to a more direct address.",
        source: "Ps. 119:49-50 (Vulgate numbering Ps. 118:49-50) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-26-a": {
    gradual: {
      title: "Christus factus est",
      latin: "Christus factus est pro nobis obédiens usque ad mortem, mortem autem crucis. ℣. Propter quod et Deus exaltávit illum, et dedit illi nomen, quod est super omne nomen.",
      translation: "Christ became for us obedient unto death, even to the death of the cross. ℣. Therefore God also has exalted him, and has given him a name which is above every name.",
      mode: "Gradual · Ordinary Time (Year A) · Mode V",
      reference: "Phil. 2:8-9",
      gabc: "(c4) CHri(ffg)stus(f.) *(,) fa(fg)ctus(f) est(f') pro(f) no(ghF'ED.g_[oh:h]e/fg)bis(f.) (;) ob(f)é(hf/gh!jj/kjk)di(jij)ens(h_g) (,) us(h!jjh)que(f.) ad(ixfiH'Gh) mor(f_[oh:h]g_[oh:h]f_[oh:h])tem,(f.) (:) mor(ixf!hhi)tem(g) au(ixgjj)tem(j.h!iw!jvIG'hw!ivHG) cru(fv.ff)cis.(f_c) (,) (fg!hvGF.e!g'h//fhg/hggf.0) (z0::c3) ℣. Pro(d)pter(d) quod(d) et(fe~) De(eh)us(h.) (,) ex(h)al(h)tá(h)vit(h) il(h)lum,(ihhe./h_[oh:h]i_[oh:h]h_[oh:h]/ihhe.) (,) (hi!kv//lvKI'jvHF.1) (,) (h_g/ijh'___jvIH'jvIH'//hvGF.) (:) et(f) de(f!h'i)dit(i) il(i)li(ih/jkihhf.) (,) no(hf/hhh)men,(h.f!gwh!iv.hi/jhh/iih.0) (;) quod(d) est(d) su(d)per(d) o(dfE'D)mne(ef) * no(fhG'Fhhh)men.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #873)",
      blurb: {
        text: "Philippians 2:8-9 traces Christ's obedience through death on a cross and then God's exaltation of him. This Ordinary Time Gradual keeps the two movements together: Christ's humility and the name set above every name.",
        source: "Phil. 2:8-9 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "ot-26-b": {
    gradual: {
      title: "Oculi omnium",
      latin: "Óculi ómnium in te sperant, Dómine : et tu das illis escam in témpore opportúno. ℣. Áperis tu manum tuam : et imples omne ánimal benedictióne.",
      translation: "The eyes of all hope in you, O Lord: and you give them food in due season. ℣. You open your hand: and fill every living creature with blessing.",
      mode: "Gradual · Ordinary Time (Years B & C) · Mode VII",
      reference: "Ps. 145:15-16",
      gabc: "(c2) O(c.d!ewff)cu(gffvED)li(d_c) *(,) ó(cd/ede)mni(cd!evDC'd)um(dc..) (;) in(cf) te(fg) spe(g'hvGF')rant,(gffe~) (,) Dó(fg)mi(g)ne :(gigivvHGhg/j_i//hjii/ghg.) (:) et(f) tu(h/iji) das(i_[oh:h]h) il(iiiv_[oh:h]H~G~)lis(ghgg/efe.) (;) e(ef!gh!ivGF'Ef_g)scam(ghff'fvE'DCdc..) (;) in(cd) tém(fe/f_g)po(gefvEDef)re(e./fgf'/gd//evDCdc..) (;) op(cd)por(fe~)tú(fgf)no.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::) ℣. A(g)pe(hgge/f'/gffe/g'/hgge//f'/gff)(,)(d!fffvDC'd!ff//eg!hvFEghG'Fgh)ris(gh) tu(g.) (;) ma(gigivvHGhg/j_i)num(i_[oh:h]h) (,) tu(hjI'HG)am :(gv.d_f!g!hw!ivHF'iv//hig/hhg.) (:) et(ghG'E) im(f!gwh)ples(g'/hg'/hff'f/gddc//dc/ded.) (,) o(cd)mne(c) á(c)ni(c.d!ew!fvED'e)mal(dc..) *(;) be(cd)ne(fe)di(fgf)cti(ge)ó(fg)ne.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::)",
      source: "Graduale Romanum (GregoBase #1230)",
      blurb: {
        text: "Oculi omnium sets Psalm 145's verses about food given in due season and every living creature filled with blessing. The same Latin text was also set as a three-voice motet by Pierre Moulu, a composer active in France and associated with the royal chapel and Meaux Cathedral.",
        source: "Ps. 145:15-16 (Vulgate numbering Ps. 144:15-16) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Pierre Moulu\" (rev. 1258601544)",
      },
    }
  },
  "ot-26-c": {
    gradual: {
      title: "Oculi omnium",
      latin: "Óculi ómnium in te sperant, Dómine : et tu das illis escam in témpore opportúno. ℣. Áperis tu manum tuam : et imples omne ánimal benedictióne.",
      translation: "The eyes of all hope in you, O Lord: and you give them food in due season. ℣. You open your hand: and fill every living creature with blessing.",
      mode: "Gradual · Ordinary Time (Years B & C) · Mode VII",
      reference: "Ps. 145:15-16",
      gabc: "(c2) O(c.d!ewff)cu(gffvED)li(d_c) *(,) ó(cd/ede)mni(cd!evDC'd)um(dc..) (;) in(cf) te(fg) spe(g'hvGF')rant,(gffe~) (,) Dó(fg)mi(g)ne :(gigivvHGhg/j_i//hjii/ghg.) (:) et(f) tu(h/iji) das(i_[oh:h]h) il(iiiv_[oh:h]H~G~)lis(ghgg/efe.) (;) e(ef!gh!ivGF'Ef_g)scam(ghff'fvE'DCdc..) (;) in(cd) tém(fe/f_g)po(gefvEDef)re(e./fgf'/gd//evDCdc..) (;) op(cd)por(fe~)tú(fgf)no.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::) ℣. A(g)pe(hgge/f'/gffe/g'/hgge//f'/gff)(,)(d!fffvDC'd!ff//eg!hvFEghG'Fgh)ris(gh) tu(g.) (;) ma(gigivvHGhg/j_i)num(i_[oh:h]h) (,) tu(hjI'HG)am :(gv.d_f!g!hw!ivHF'iv//hig/hhg.) (:) et(ghG'E) im(f!gwh)ples(g'/hg'/hff'f/gddc//dc/ded.) (,) o(cd)mne(c) á(c)ni(c.d!ew!fvED'e)mal(dc..) *(;) be(cd)ne(fe)di(fgf)cti(ge)ó(fg)ne.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::)",
      source: "Graduale Romanum (GregoBase #1230)",
      blurb: {
        text: "Psalm 145 names the moment when every creature waits upon God for food in due season. Its second verse addresses God directly: your open hand fills all living creatures with blessing. The Gradual gives those words to Ordinary Time in Years B and C.",
        source: "Ps. 145:15-16 (Vulgate numbering Ps. 144:15-16) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  // ---- 27th Sunday in Ordinary Time ---- (all parts common to A/B/C)
  "ot-27": {
    gradual: {
      title: "Domine refugium",
      latin: "Dómine, refúgium factus es nobis, a generatióne et progénie. ℣. Priúsquam montes fíerent, aut formarétur terra et orbis : a saéculo, et in saéculum tu es Deus.",
      translation: "Lord, you have been our refuge, from generation to generation. ℣. Before the mountains were made, or the earth and the world was formed: from eternity and to eternity you are God.",
      mode: "Gradual · Ordinary Time · Mode II",
      reference: "Ps. 90:1-2",
      gabc: "(c3) DO(egf)mi(f)ne,(f.) *(,) re(f)fú(hfghvF'Egef)gi(gf)um(f.) (;) fa(hf/hi'j)ctus(hvGF) es(gxfegvFE.) (,) no(e[ll:1]d/fef)bis,(fd/ef!hvvF'Ef!gwh/ihh/fgf.) (:) a(hh) ge(h)ne(h)ra(h)ti(h)ó(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF)ne(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) et(de'fhvGF'g) pro(ef)gé(hf)ni(hi)e.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Pri(f)ús(h)quam(ij~) mon(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)tes(ji..) (:) fí(i!jw!kvJI'jw!kvJI)e(i)rent,(i.) (,) aut(i) for(i)ma(i)ré(i)tur(ij~) ter(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)ra(f.) (`) et(hh) or(h)bis :(h.[ob:1;8mm]) (:) a(hi) saé(ivH'GE//fhGEfh..)(,)(gi!jvHF')cu(f)lo,(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) et(d) in(d) saé(de'f)cu(f)lum(f.0/[-0.5]hvGF'g) (,) tu(e) es(f) () * De(hf/h_i)us.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1108)",
      blurb: {
        text: "Domine refugium takes the opening two verses of Psalm 90 and uses them whole, without omission. The psalm itself carries an unusual distinction: its header reads \"Oratio Moysi, hominis Dei,\" a prayer of Moses, the man of God, making it the only psalm in the psalter bearing that attribution. The title \"the man of God\" given to Moses here echoes Deuteronomy 33:1, where it introduces the Blessing of Moses.",
        source: "Ps. 90:1-2 (Vulgate numbering Ps. 89:1-2) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 90\" (rev. 1323218217)",
      },
    },
    alleluia: {
      title: "In exitu Israel",
      latin: "Allelúia. ℣. In éxitu Israel ex Aegýpto, domus Jacob de pópulo bárbaro.",
      translation: "Alleluia. ℣. When Israel went out of Egypt, the house of Jacob from a barbarous people.",
      mode: "Alleluia · Ordinary Time · Mode II",
      reference: "Ps. 114:1",
      gabc: "(f3) AL(ef'g~)le(g./hig/hffe)lú(fg~){ia}.(g.) *(;) ij.(fiH'Fg./f!hh) (,) (f!gwh'!ivH'Fg./f!hh) (,) (g!hwi!jvIH'ivHF'gffe.) (;) (ef/hffe//gihh'hhvG'FE//g_[uh:l]hggf.0) (::) ℣. In(e!fwggf) éx(f!gwh)i(gf)tu(f.) Is(hjji)ra(gfhvF'Eg)el(g.) (;) ex(kxfji___!jw!kvJI'j) Ae(gfh)gý(ef'h)pto,(g//hiG'FhvGEf.) (:) do(fg!h'i)mus(i_[oh:h]g) Ja(hiG'Fhhg)cob(g.) (;) de(eg) pó(i_[oh:h]g/ijIG.e_[oh:h]g_[oh:h]f_[oh:h]ivGFhhg)pu(ef)lo(f.) *(,) bár(ef'g~)ba(g)ro.(gv.fiH'Fg./f!hh) (,) (f!gwh'!ivH'Fg./f!hh) (,) (g!hwi!jvIH'ivHF'gffe.) (;) (ef/hffe//gihh'hhvG'FE//g_[uh:l]hggf.0) (::)",
      source: "Graduale Romanum (GregoBase #1380)",
      blurb: {
        text: "In exitu Israel draws on only the opening verse of Psalm 114, an eight-verse psalm whose two central stanzas go on to evoke the parting of the Red Sea and the turning back of the Jordan, with God named only at the psalm's close. Psalm 114 is the only psalm traditionally chanted to the Tonus peregrinus, a wandering melodic tone distinct from the eight regular psalm tones.",
        source: "Ps. 114:1 (Vulgate numbering Ps. 113:1) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 114\" (rev. 1351239947)",
      },
    },
    offertory: {
      title: "Vir erat",
      latin: "Vir erat in terra nómine Job, simplex et rectus, ac timens Deum : quem Satan pétiit, ut tentáret : et data est ei potéstas a Dómino in facultáte et in carne ejus : perdidítque omnem substántiam ipsíus, et fílios : carnem quoque ejus gravi úlcere vulnerávit.",
      translation: "There was a man in the land named Job, simple and upright, and fearing God: whom Satan besought that he might tempt: and power was given to him by the Lord over his possessions and over his flesh: and he destroyed all his substance and his children: and afflicted his flesh also with a grievous ulcer.",
      mode: "Offertory · Ordinary Time · Mode II",
      reference: "Job 1:1",
      gabc: "(c3) VIR(c) e(ef'g)rat(f.) *(,) in(fe~) ter(fhvhfgv_[oh:h]F~E~)ra(fe..) (;) nó(h)mi(hi_[oh:h]H'_[oh:h]GF)ne(f.e!fw!gvFE'f) Job,(f!gwhf.1) (:) sim(h'/igh)plex(f.) et(gh'i~) re(i_[oh:h]g/hihi)ctus,(f.) (;) ac(f) ti(fe)mens(f!gwh/ig/h_g) De(fhf)um :(fe/fgf.) (:) quem(fc~) Sa(ef'g)tan(fe~) pé(hi'j)ti(jiihi)it,(i_[oh:h]h) (;) ut(hhg) ten(fe~)tá(fg!hvGF'g)ret :(gf..) (:) et(f) da(h)ta(hi) est(i) e(ij)i(i.) pot(i)é(i'/jij)stas(hih.) (,) a(f) Dó(hi)mi(ivH'GhvGF'g)no(gf..) (;) in(fe~) fa(f)cul(hg~)tá(h)te(f.) (,) et(f) in(hg~) car(h)ne(f) e(fgF~'E~)jus :(fe/fgf.) (:) per(fc~)di(e)dít(fg~)que(f.) (,) o(fgF~'E~)mnem(f_e) sub(hg)stán(hi)ti(iv.hh/i_[oh:h]h)am(h) i(h)psí(hig/hg)us,(fe..) (;) et(fhf___!gw!h!gh~) fí(f)li(fg!hvGF'g)os :(gf..) (:) car(hhg~)nem(ih~) quo(hhg)que(fe) e(fgF~'E~)jus(f_e) (;) gra(f)vi(h) úl(hhg)ce(fe)re(f.) (,) vul(f)ne(h.f!gwh_g)rá(fg!hvGF'g)vit.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #1363)",
      blurb: {
        text: "Vir erat presents Job as simple, upright, fearing God, and avoiding evil, then recounts Satan's request to test him. Job's opening chapter places this trial under God's permission, inviting the hearer to hold fidelity amid suffering.",
        source: "Job 1:1 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "In salutari tuo",
      latin: "In salutári tuo ánima mea, et in verbum tuum sperávi : quando fácies de persequéntibus me judícium? iníqui persecúti sunt me, ádjuva me, Dómine Deus meus.",
      translation: "My soul has longed for your salvation, and in your word have I hoped: when will you execute judgment on those who persecute me? The wicked have persecuted me: help me, O Lord my God.",
      mode: "Communion · Ordinary Time · Mode I",
      reference: "Ps. 119:81, 84, 86",
      gabc: "(c4) IN(d) sa(df)lu(fe)tá(f)ri(g) tu(g)o(g.) *(,) á(e)ni(f)ma(ef) me(d_[oh:h]e_[oh:h]d_[oh:h])a,(d.) (;) et(c) in(d) ver(f)bum(fe~) tu(ghg)um(h) spe(ghg)rá(fg!hvGF'g)vi :(gf..) (:) quan(h)do(h) fá(h)ci(gh)es(h.) de(h) per(h)se(g)quén(h)ti(g)bus(fe) me(g_[uh:l]h) (,) ju(fe)dí(d)ci(d!ew!fvED'e)um?(e[ll:1]d..) (:) in(f)í(gh)qui(h) per(h)se(h)cú(hj)ti(h) sunt(gf~) me,(f.) (;) ád(h)ju(h)va(g) me,(g) Dó(h)mi(gf)ne(f_[oh:h]g_[oh:h]e_[oh:h]e[ll:1]d.0) (,) De(d!ewf!g'h)us(f_e) me(de!fvED'e)us.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1290)",
      blurb: {
        text: "In salutari tuo draws on three verses of Psalm 119, verses 81, 84, and 86, skipping the verses between them to press longing, petition, and the cry for help into a single arc. The opening also quietly reshapes the psalm's own language: verse 81 begins \"Defecit in salutare tuum anima mea,\" meaning the soul has fainted or given out in its longing for salvation, but the antiphon drops \"Defecit\" and opens instead with \"In salutari tuo anima mea.\" The closing words \"Dómine Deus meus\" do not appear in verse 86 of the psalm.",
        source: "Ps. 119:81, 84, 86 (Vulgate numbering Ps. 118:81, 84, 86) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  // ---- 28th Sunday in Ordinary Time ---- (all parts common to A/B/C)
  "ot-28": {
    gradual: {
      title: "Si ambulem",
      latin: "Si ámbulem in médio umbrae mortis, non timébo mala : quóniam tu mecum es, Dómine. ℣. Virga tua, et báculus tuus, ipsa me consoláta sunt.",
      translation: "Though I should walk in the midst of the shadow of death, I will fear no evils: for you are with me, O Lord. ℣. Your rod and your staff, they have comforted me.",
      mode: "Gradual · Ordinary Time · Mode I",
      reference: "Ps. 23:4",
      gabc: "(c4) SI(d) ám(fg)bu(gvF'EfvED'e)lem(e[ll:1]d..) *(,) in(f) mé(ghgh)di(hjH'GF'gwhgh)o(hg..) (,) um(hv.fg'h)brae(g) mor(fv.dfe)tis,(d//ffd/fhhg.) (;) non(dh) ti(hg)mé(h'/jij)bo(hv.fh!jvH'GF'g) ma(fv.dfe)la :(d!ffd) (,) (fge'/fgd'/e[ll:1]ddc.) (:) quó(f)ni(d)am(e) tu(f) me(ghgh./gh/jj//jjj)cum(g) es,(hg/hfg) (,) Dó(d)mi(d)ne.(dc/d!ff/ghG'Efgff/ded.) (::) ℣. Vir(h_fhvhggef)ga(d.) tu(dc/d!ff/gh!jjg)(,)(ixhhghvGF./[-0.5]hiHG'hw!ivHGhi)a,(h.) (;) et(dh) bá(h/jjh)cu(h!jjh)lus(h_g) tu(hg/h!jjjgivHG'gf/gh/j.h!iwj_h)us,(h.) (:) i(h_f//hvhggef)psa(de) me(d_c/d!ewf!gv.fg!hvFEfg!hvhg.) *(,) con(g)so(gh)lá(ixjhiGF'h!jjvH'Gh')ta(d) sunt.(dc/d!ff/ghG'Efgff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #1121)",
      blurb: {
        text: "Si ambulem draws both its respond and its verse from a single verse of scripture, Psalm 23:4, without borrowing from anywhere else in the psalm. The Douay-Rheims renders that verse: \"For though I should walk in the midst of the shadow of death, I will fear no evils, for thou art with me. Thy rod and thy staff, they have comforted me.\" The gradual sets that one verse in full, dividing it at its midpoint to form the two musical units.",
        source: "Ps. 23:4 (Vulgate numbering Ps. 22:4) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Qui timent Dominum",
      latin: "Allelúia. ℣. Qui timent Dóminum, sperent in eo : adjútor et protéctor eórum est.",
      translation: "Alleluia. ℣. Let those who fear the Lord hope in him: he is their helper and protector.",
      mode: "Alleluia · Ordinary Time · Mode I",
      reference: "Ps. 115:11",
      gabc: "(c4) AL(d)le(ff)lú(gv.f!hgh){ia}.(hjH'GF.) *(;) ij.(e!gwhgh./fhg/hffvEC.) (,) (d!ewf!gv.egF'ED'ewfd.1) (::) ℣. Qui(cd) ti(ixdh//gihivGF//ggf/gg//fgh!jjg)(,)(ixhhghvGF.hiHG'hw!ivHGhi)ment(h.) (,) Dó(h_g/jjvH'Gixhihi)mi(g)num,(ge~) (,) spe(f_e/f!gwhgh)rent(hg/hf/ghg) in(gd) e(f_e/g_[oh:h]fgvFD'ewfd)o :(d.) (:) ad(d)jú(d/ffd/ffddef!gh)tor(ghg.) (,) et(f) pro(ghg)té(h/jjhhgh.)(,)(ixfh!ivGF'fd/ffhvGF'fvED)ctor(e[ll:1]d..) (;) * e(d)ó(d/fff/g_[oh:h]f)rum(f!hgh) est.(hjH'GF.) (;) (e!gwhgh./fhg/hffvEC.) (,) (d!ewf!gv.egF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #933)",
      blurb: {
        text: "Qui timent Dominum draws its verse from Psalm 115, where the psalm reports that those who fear the Lord have hoped in him and found him their helper and protector. The chant turns that report into a wish, asking that they hope in him, and sets it as the Alleluia for Ordinary Time.",
        source: "Ps. 115:11 (Vulgate numbering Ps. 113:19) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Recordare mei",
      latin: "Recordáre mei, Dómine, omni potentátui dóminans : da sermónem rectum in os meum, ut pláceant verba mea in conspéctu príncipis.",
      translation: "Remember me, O Lord, you who rule over all power: put well-ordered speech in my mouth, that my words may be pleasing in the sight of the prince.",
      mode: "Offertory · Ordinary Time · Mode I",
      reference: "Esth. 14:12, 13",
      gabc: "(c4) RE(ddc)cor(f)dá(fhg)re(ghh) me(g)i,(g.) *(,) Dó(ixgiHG'gfgvFD)mi(d!ewfd)ne,(d.) (;) o(d!f'g)mni(g) pot(g)en(g)tá(gg/hgh)tu(f/gfg)i(d!ewf) (,) dó(d!f'g)mi(gvF'EfvED'e)nans :(e[ll:1]d..) (:) da(d!f'g) ser(g)mó(g)nem(gh~) re(ixh_ghvGFixf'g/hg/hi)ctum(h.) (,) in(h) os(hjj) me(jkJ'IH)um,(ghg.) (;) ut(gh~) plá(h)ce(giw!ji/jkJ'IH)ant(hhg~) (,) ver(ixgihh)ba(g_[oh:h]e) me(fgffvED)a(d/ffd/fge'/fgD'Cd.) (:) in(c) con(d)spé(ghfff'gff'ff)(,)(fd/ffvD'Cd!ffd.)(,)(ghf/!ff'gff'ff)(,)(fd/ef/ggf//gf/ge/fgefvDC)(,)(ffd/ffc//g_[oh:h]f)ctu(fe/fe/f_g) prín(d)ci(dee[ll:1]d)pis.(d.) (::)",
      source: "Graduale Romanum (GregoBase #67)",
      blurb: {
        text: "Recordare mei asks the Lord to remember the singer in tribulation and place ordered speech in her mouth before the powerful. Esther's prayer asks for boldness before the lion and for the enemy's heart to be turned, so the Offertory becomes a plea for ordered speech under pressure.",
        source: "Esth. 14:12, 13 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Aufer a me",
      latin: "Aufer a me oppróbrium et contémptum, quia mandáta tua exquisívi, Dómine : nam et testimónia tua meditátio mea est.",
      translation: "Take away from me reproach and contempt, for I have sought your commandments, O Lord: for your testimonies are my meditation.",
      mode: "Communion · Ordinary Time · Mode II",
      reference: "Ps. 119:22, 24",
      gabc: "(f3) AU(hi)fer(ij) a(i) me(hi!jvji.) *(,) op(i)pró(j)bri(i)um(hg) et(hj) con(ih~)tém(i)ptum.(f.) (;) qui(f)a(fe) man(fhg)dá(h)ta(f) tu(hji)a(i.) (,) ex(gh)qui(gf)sí(gi)vi,(i) Dó(gh)mi(g)ne :(f.) (:) nam(ghg') et(f) te(ghg')sti(f)mó(g')ni(f)a(fe) tu(f)a(fc) (;) me(e)di(f)tá(fhG'F)ti(ef)o(f) me(fhG'F)a(g) est.(f.) (::)",
      source: "Graduale Romanum (GregoBase #828)",
      blurb: {
        text: "Aufer a me draws from two verses of Psalm 119, joining verse 22 directly to verse 24 and leaving out verse 23 between them. The omitted verse reads, \"For princes sat, and spoke against me: but thy servant was employed in thy justifications.\" The join also carries a small but deliberate change: the Vulgate's verse 22 reads \"quia testimonia tua exquisivi,\" because I have sought your testimonies, but the chant substitutes \"mandata\" for \"testimonia,\" making it \"your commandments\" rather than \"your testimonies.\" The word \"testimonia\" then returns in the second half, drawn from verse 24.",
        source: "Ps. 119:22, 24 (Vulgate numbering Ps. 118:22, 24) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  // ---- 29th Sunday in Ordinary Time ---- (all parts common to A/B/C)
  "ot-29": {
    gradual: {
      title: "Salvum fac populum",
      latin: "Salvum fac pópulum tuum, Dómine, et bénedic hereditáti tuae. ℣. Ad te, Dómine, clamávi : Deus meus, ne síleas a me, et ero símilis descendéntibus in lacum.",
      translation: "Save your people, O Lord, and bless your inheritance. ℣. To you, O Lord, have I cried: my God, be not silent to me, lest I become like those who go down into the pit.",
      mode: "Gradual · Ordinary Time · Mode VII",
      reference: "Ps. 28:9, 1",
      gabc: "(c3) SAl(e_f_d_2//fhf___//hih)vum(hhhvF'ED'ewfef) fac(fe..) (;) * pó(e)pu(ehg)lum(h) tu(ihi)um,(i.) (,) Dó(ijij)mi(ih)ne :(hv.gh!ivih/ii) (,) (hi!kkkikvvJI'jh//ivHGhg..) (:) et(e'!hi/kjk) bé(i.h!iwj)ne(ihi)dic(ig'hvF'Effe/ff) (,) (ef!hhhfhvvGF'he//fvEDe[ll:1]d..) (;) he(d')re(e)di(f)tá(hi!kvJI)ti(ig/hjIH'hefv.) (,) tu(hv.gih.1/f!hhvFDff//e!hhe'gvF'E)ae.(hf/hhf'ivH'GE) (,) (f!gwh_g/ihh'hhvF'Ef_gffe.) (::) ℣. Ad(eh) te(h.i!jwk) Dó(klK'I)mi(i_[oh:h]h)ne(hh) (,) cla(h)má(i_[oh:h]h/i!jw!kv_[hl:1]JI'H)vi :(hiH'GhvG'FEfe..) (:) De(f)us(h) me(h)us,(hhhf/hffd.) (,) ne(f) sí(hg/h_i)le(f)as(f!gw!hvG'FEfgf.) a(d) me,(d.0f!gwhhvG'FEfe..) (:) et(eh) e(h/i'j)ro(h_g) sí(hi)mi(i)lis(i_[hl:1]k_[hl:1]i_[hl:1]!jwkkvJIji..) (;) de(ikJI')scen(i)dén(ig/hi!kvvI'HijHFhv.hhhvF'ED.)(,)(f_d/ef!gwh'!iv)ti(h)bus(hhhvFDff//e!hhe'gvFE.) *(;) in(ef) la(e.f!gwh'!iv)cum.(ijIH'hghv.) (,) (ijIH'hgiv.kkkh/ijIG.hig'hvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #296)",
      blurb: {
        text: "Salvum fac populum joins David's cry not to be silent with the plea to save and bless God's people. The Psalm's surrounding line asks the Lord to rule and exalt them forever, while the Gradual brings the cry from the pit into the liturgy.",
        source: "Ps. 28:9, 1 (Vulgate numbering Ps. 27:9, 1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Lauda anima mea",
      latin: "Allelúia. ℣. Lauda, ánima mea, Dóminum : laudábo Dóminum in vita mea : psallam Deo meo, quámdiu ero.",
      translation: "Alleluia. ℣. Praise the Lord, O my soul: I will praise the Lord in my life: I will sing to my God as long as I shall be.",
      mode: "Alleluia · Ordinary Time · Mode VIII",
      reference: "Ps. 146:2",
      gabc: "(c3) Al(d!ef)le(f_e/f!gwhg)lú(fh/hh)ia.(hi/HF/fe.) (;) (gh//ef/ED.//f!gwh/hg////ehf/gf/fe.) (::) ℣. Lau(hv_//gih)da,(h) á(h)ni(h)ma(h) me(hg)a,(g) Dó(gh!ivivHF/hfg)mi(hg)num :(g.) (;) lau(gf~)dá(hji)bo(h) Dó(gh)mi(fe)num(e.) (,) in(eh~) vi(h/hg)ta(e.) me(gxfg/FD.//eg/FE/fe)a :(e.) (:) psal(e)lam(e) De(feh)o(h.) me(hfh'/GE//fh/FD//gxgvFE//f.//hhh/ij/HF.,gig___/ivHG'/he.//gxf_e/g_e//gvFE/fd)o,(d.) (;) quám(fd~)di(ef)u(f) e(hg/hfh)ro.(gh/FE.,df/hvFE//d.f!gwhg/hvGF/g.////egf/gvE'd/efe.,gxh/hvFE/fg/ED.//gyh/hvFE/fgf/fe.) (::)",
      source: "Graduale Romanum (GregoBase #3318)",
      blurb: {
        text: "Lauda anima mea makes praise a lifelong act: the singer promises to praise the Lord in life and sing to God as long as he is. The verse places that promise beside a warning not to trust in princes, turning the soul toward God as its lasting hope.",
        source: "Ps. 146:2 (Vulgate numbering Ps. 145:2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Meditabor",
      latin: "Meditábor in mandátis tuis, quae diléxi valde : et levábo manus meas ad mandáta tua, quae diléxi.",
      translation: "I will meditate on your commandments, which I have greatly loved: and I will lift up my hands to your commandments, which I have loved.",
      mode: "Offertory · Ordinary Time · Mode II",
      reference: "Ps. 119:47, 48",
      gabc: "(c3) ME(c)di(ef)tá(f/hhe/gf)bor(f.) *(,) in(e) man(f)dá(hih)tis(hh/ih) tu(hh/ihhvGF)is,(gf..) (;) quae(hg) di(h)lé(hji)xi(hji) val(h_g_f~)de :(f.) (:) et(e) le(f)vá(hhi)bo(h.hhh) (,) ma(fhh'1hh)nus(ef) me(fh)as(hhh/ih/!ih//h'hhvF'Ef.) (,) ad(e) man(f)dá(hih)ta(high) tu(fgffe)a,(e.) (;) quae(hg) di(h)lé(hjIH'/!hf//ih/!ih//h'hhvFE'D)(,)(efE'Defef)xi.(f!gwhhvGF'gwhhvGF.) (::)",
      source: "Graduale Romanum (GregoBase #810)",
      blurb: {
        text: "Meditabor speaks in the first person of loving God's commandments and lifting hands toward them. The Psalm's surrounding verses call God's word a comfort and hope, so the Ordinary Time Offertory receives obedience as a prayer shaped by love.",
        source: "Ps. 119:47, 48 (Vulgate numbering Ps. 118:47, 48) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Domine Dominus noster",
      latin: "Dómine, Dóminus noster, quam admirábile est nomen tuum in univérsa terra!",
      translation: "O Lord, our Lord, how admirable is your name in all the earth!",
      mode: "Communion · Ordinary Time · Mode II",
      reference: "Ps. 8:2",
      gabc: "(f3) DO(f)mi(e!gw!hvGF'g)ne(gf..) *(,) Dó(hih)mi(hg)nus(fe) no(f!gwhgh)ster,(gf..) (:) quam(kxhi!jkj) ad(j)mi(ji)rá(j)bi(i)le(i_0[uh:l]) est(j) (,) no(hvGEfg)men(f.) tu(fihhvG'E//f!gw!hvGF'g)um(gf..) (;) in(c) u(ef)ni(fe)vér(f!hhhvFE'D//e!gef)sa(f) ter(fg!hvGF'g)ra!(gf..) (::)",
      source: "Graduale Romanum (GregoBase #998)",
      blurb: {
        text: "Psalm 8 opens by acclaiming the Lord's name as admirable in all the earth, before extending that praise to God's majesty above the heavens. The Communion keeps the psalm's brief, world-spanning opening acclamation.",
        source: "Ps. 8:2 (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry); Divinum Officium, Nat2-0 (Missale Romanum formulary)",
      },
    }
  },

  // ---- 30th Sunday in Ordinary Time ----
  // Gradual splits A & B "Unam petii" / C "Clamaverunt iusti";
  // alleluia, offertory, communion common.
  "ot-30": {
    alleluia: {
      title: "Lauda Jerusalem",
      latin: "Allelúia. ℣. Lauda, Jerúsalem, Dóminum : lauda Deum tuum, Sion.",
      translation: "Alleluia. ℣. Praise the Lord, O Jerusalem: praise your God, O Sion.",
      mode: "Alleluia · Ordinary Time · Mode IV",
      reference: "Ps. 147:12",
      gabc: "(c4) AL(fd~)le(ef'g)lú(hgh){ia}.(ixhiHG'gf.0) *(,) ij.(ixhiHG'ge./ghGF'Ef_gffe.) (::) ℣. Lau(h)da,(ixg'//ivHG'hffe.) (,) Je(fd)rú(ef)sa(g)lem,(ixg./hiHFhfg.) Dó(ixgh!i'j)mi(g)num :(giHG.) (:) lau(ixge/ghF'EghF'Ef_h//ivGFhvGFge~)da(e.) (,) De(ef'g)um(gh~) tu(ixhi_[oh:h]H'_[oh:h]GF)um,(ghg.___) *(;) Si(ixg!hwih)on.(hv.ghgfffd//gfg/ffdgvFE.) (::)",
      source: "Graduale Romanum (GregoBase #641)",
      blurb: {
        text: "Lauda Jerusalem takes only verse 12 of Psalm 147, the bare summons to praise. The psalm's next two verses give the grounds for that praise: \"Quoniam confortavit seras portarum tuarum; benedixit filiis tuis in te\", that God has strengthened the bars of Jerusalem's gates and blessed her children within her, and that he has set peace as her border and satisfied her with the finest wheat. The chant sings the call without the reasons that follow.",
        source: "Ps. 147:12 (Vulgate numbering Ps. 147:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Domine vivifica me",
      latin: "Dómine, vivífica me secúndum elóquium tuum : ut sciam testimónia tua.",
      translation: "O Lord, give me life according to your word: that I may know your testimonies.",
      mode: "Offertory · Ordinary Time · Mode III",
      reference: "Ps. 119:107, 125",
      gabc: "(c4) DO(j)mi(h)ne,(h!iwj/k_[hl:1]jj'jhhg//i_[hl:1]k_[hl:1]i._[hl:1]) (,) * vi(e_[oh:h]g_[oh:h]e_[oh:h])ví(gh)fi(g)ca(hjhhg/h!iwjij) me(ji..) (;) se(ikj)cún(jjj)dum(h_g) e(ghe)ló(g)qui(gihhg)um(g) tu(f)um :(fgff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) ut(g) sci(h_g/h!iwj_i)am(j.) (,) te(jj//jj)sti(g)mó(h_f)ni(g)a(g/jjh/ig/h_g) tu(egff)a.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #109)",
      blurb: {
        text: "Domine vivifica me asks God to give life according to his word, then asks for understanding to know his testimonies. Psalm 119 places this plea after the singer's humiliation and beside a servant's request for understanding, making the Offertory a prayer for life and fidelity before God's word.",
        source: "Ps. 119:107, 125 (Vulgate numbering Ps. 118:107, 125) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Laetabimur",
      latin: "Laetábimur in salutári tuo : et in nómine Dómini Dei nostri magnificábimur.",
      translation: "We will rejoice in your salvation: and in the name of the Lord our God we will be magnified.",
      mode: "Communion · Ordinary Time · Mode II",
      reference: "Ps. 20:6",
      gabc: "(f3) LAe(f)tá(fefvEDefef)bi(g)mur(f!gwh.) *(,) in(hf~) sa(hih)lu(iji)tá(jlKJ')ri(i) tu(hg/hihi)o :(f!gwh.) (;) et(f) in(h) nó(ij)mi(i)ne(i) Dó(j)mi(ih)ni(hihh/fgf.) (,) De(hhg)i(hi/jij) no(h)stri(hv.fgFE.) (,) ma(e)gni(hg)fi(hi)cá(iv.giHG'F//e_[uh:l]f)bi(e.[ll:1]d!ewfe/fg)mur.(f.) (::)",
      source: "Graduale Romanum (GregoBase #1296)",
      blurb: {
        text: "Laetabimur joins rejoicing in God's salvation to magnifying the name of the Lord. The Psalm's next verses contrast those who trust in horses with those who call on God's name, so this Communion lets rejoicing become confident invocation.",
        source: "Ps. 20:6 (Vulgate numbering Ps. 19:6) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  // ot-30, Years A & B: Gradual "Unam petii"
  "ot-30-a": {
    gradual: {
      title: "Unam petii",
      latin: "Unam pétii a Dómino, hanc requíram : ut inhábitem in domo Dómini. ℣. Ut vídeam voluptátem Dómini, et prótegar a templo sancto ejus.",
      translation: "One thing I have asked of the Lord, this will I seek after: that I may dwell in the house of the Lord. ℣. That I may behold the delight of the Lord, and be protected by his holy temple.",
      mode: "Gradual · Ordinary Time (Years A & B) · Mode V",
      reference: "Ps. 27:4",
      gabc: "(c4) U(ffg)nam(f) pé(ghgh)ti(g)i(fgFD.1) (,) * a(d) Dó(dgf/gh)mi(g)no,(ixg./hiGF'fd/f_[oh:h]g_[oh:h]f._[oh:h]) (;) hanc(hj~) re(j_h)quí(jhjjh)ram,(h.) (;) ut(h) in(hj)há(j)bi(ixij!kvJ'IHi)tem(ih..) (,) in(ixi) do(hhg)mo(gh) Dó(hg/hf/g_[oh:h]f)mi(ef)ni.(ixf./hiHF.) (,) (hg/hjhh/fgf.) (z0::c3) ℣. Ut(d) ví(d)de(f)am(gxfh/ih/i_[oh:h]h//ivFD'//fh.ivFD'f!hfg.) (,) (fh/ih/i_[oh:h]h//ivFD'e_[oh:h][ll:1]d.0d'dd!f_h/ijh.1) (;) vo(hi)lu(h)ptá(h)tem(hg/ij) Dó(i_[oh:h]h)mi(h)ni :(hg/i_[oh:h]h//jvIH'Ghf..) (:) et(hh) pró(ih/ij_hih/ij_ij//hi/jij)te(j)gar(jh/jkihh/fgf.) (;) a(d) tem(d)plo(d) san(dfE'D)cto(ef) *() e(fhG'Fhhh)jus.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #229)",
      blurb: {
        text: "Unam petii takes its opening petition from the fourth verse of Psalm 27, but reshapes the verse: it omits \"all the days of my life\" and replaces \"visit his temple\" with a plea to be sheltered by God's holy temple. The result is a compact prayer for dwelling, vision, and protection.",
        source: "Ps. 27:4 (Vulgate numbering Ps. 26:4) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Epi1-0 (Missale Romanum formulary)",
      },
    }
  },
  // ot-30, Year B: Gradual "Unam petii" (shared with Year A)
  "ot-30-b": {
    gradual: {
      title: "Unam petii",
      latin: "Unam pétii a Dómino, hanc requíram : ut inhábitem in domo Dómini. ℣. Ut vídeam voluptátem Dómini, et prótegar a templo sancto ejus.",
      translation: "One thing I have asked of the Lord, this will I seek after: that I may dwell in the house of the Lord. ℣. That I may behold the delight of the Lord, and be protected by his holy temple.",
      mode: "Gradual · Ordinary Time (Years A & B) · Mode V",
      reference: "Ps. 27:4",
      gabc: "(c4) U(ffg)nam(f) pé(ghgh)ti(g)i(fgFD.1) (,) * a(d) Dó(dgf/gh)mi(g)no,(ixg./hiGF'fd/f_[oh:h]g_[oh:h]f._[oh:h]) (;) hanc(hj~) re(j_h)quí(jhjjh)ram,(h.) (;) ut(h) in(hj)há(j)bi(ixij!kvJ'IHi)tem(ih..) (,) in(ixi) do(hhg)mo(gh) Dó(hg/hf/g_[oh:h]f)mi(ef)ni.(ixf./hiHF.) (,) (hg/hjhh/fgf.) (z0::c3) ℣. Ut(d) ví(d)de(f)am(gxfh/ih/i_[oh:h]h//ivFD'//fh.ivFD'f!hfg.) (,) (fh/ih/i_[oh:h]h//ivFD'e_[oh:h][ll:1]d.0d'dd!f_h/ijh.1) (;) vo(hi)lu(h)ptá(h)tem(hg/ij) Dó(i_[oh:h]h)mi(h)ni :(hg/i_[oh:h]h//jvIH'Ghf..) (:) et(hh) pró(ih/ij_hih/ij_ij//hi/jij)te(j)gar(jh/jkihh/fgf.) (;) a(d) tem(d)plo(d) san(dfE'D)cto(ef) *() e(fhG'Fhhh)jus.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #229)",
      blurb: {
        text: "Unam petii places the desire to dwell in the Lord's house beside the request to behold his delight and be protected by his holy temple. Its wording adapts Psalm 27:4: the chant leaves out \"all the days of my life\" and turns \"visit his temple\" into a prayer for shelter.",
        source: "Ps. 27:4 (Vulgate numbering Ps. 26:4) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Epi1-0 (Missale Romanum formulary)",
      },
    }
  },
  // ot-30, Year C: Gradual "Clamaverunt iusti"
  "ot-30-c": {
    gradual: {
      title: "Clamaverunt iusti",
      latin: "Clamavérunt justi, et Dóminus exaudívit eos : et ex ómnibus tribulatiónibus eórum liberávit eos. ℣. Juxta est Dóminus his qui tribuláto sunt corde : et húmiles spíritu salvábit.",
      translation: "The just cried, and the Lord heard them: and delivered them out of all their troubles. ℣. The Lord is near to those who are of a contrite heart: and he will save the humble of spirit.",
      mode: "Gradual · Ordinary Time (Year C) · Mode VII",
      reference: "Ps. 34:18-19",
      gabc: "(c3) CLa(e)ma(ded)vé(ef)runt(e.f!gw!hvGF'g) ju(ef/hfg)sti,(fe..) *(;) et(gh'i~) Dó(i)mi(hg/hiih/ij)nus(i.) (,) ex(i)au(ih~)dí(i/kki)vit(ij) e(i.h!iwj)os :(ji/ji/jh//ivHGhg..) (:) et(fhg) ex(hi) ó(ig/h_i)mni(ighvGF'gh)bus(g.) (,) tri(h)bu(h)la(g)ti(h)ó(i)ni(h)bus(i) e(h)ó(h)rum(hhhvF'E) (,) (ffe/ff//ef!hhhf//hvvGF'he//fvEDe[ll:1]d..) (;) li(e)be(f)rá(ggh)vit(fi!jv) e(hg)os.(g./e!hfh./ghF'Ef_gffe.) (::) ℣. Jux(e)ta(e) est(g') Dó(i/kkihjihhe.)(,)(gi/kkihjihhe.)(,)(fhg___/hhfhvF'De_[oh:h][ll:1]d)(,)(hhf/hhvF'De[ll:1]d..)(;)([oh:{]hhi/klj___//kvJIjvIHihi)mi(i)nus(i_k_i_!jwkkvJIji..) (;) his,(i) qui(i) tri(i)bu(h)lá([oll:0{0]kk/lkl[oll:}])to(lkkvJI) sunt(i_k_i_!jwkkvJIji..[oh:}]) (;) cor(i/jg/h_i//ji/jg/h_i)(,)(kkh/jijvHF'gwh!iv.giH'GE)(,)(f!hgh./fh//ghF'Dev.)(;)(i_[uh:l]jI'//Ef_e//f!gwh!iv.h!kki)(,)([oh:{]k_j/l_klvKI.[oh:}]//kjkvIH'iwj)de :(ijhivHGhg..) (:) et(g) hú(ijij)mi(jiigh)les(h_g) spí(g)ri(iggf/giG'Fg)tu(ef..) (;) * sal(ef'g~)vá(giHG'j)bit.(iig.) (,) (h_ghvFE.ghFE.gfiv.iiigg//egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1009)",
      blurb: {
        text: "Clamaverunt iusti holds two assurances together: the Lord hears the cry of the just and stays near the contrite. The Gradual lets deliverance and humility become one prayer.",
        source: "Ps. 34:18-19 (Vulgate numbering Ps. 33:18-19) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  // ---- 31st Sunday in Ordinary Time ----
  // Alleluia splits A & B "Verbo Domini" / C "O quam bonus";
  // gradual, offertory, communion common.
  "ot-31": {
    gradual: {
      title: "Suscepimus Deus",
      latin: "Suscépimus, Deus, misericórdiam tuam in médio templi tui : secúndum nomen tuum, Deus, ita et laus tua in fines terrae. ℣. Sicut audívimus, ita et vídimus in civitáte Dei nostri, in monte sancto ejus.",
      translation: "We have received your mercy, O God, in the midst of your temple: according to your name, O God, so also is your praise unto the ends of the earth. ℣. As we have heard, so have we seen, in the city of our God, in his holy mountain.",
      mode: "Gradual · Ordinary Time · Mode V",
      reference: "Ps. 48:10-11, 9",
      gabc: "(c4) SUs(d)cé(ffg)pi(f)mus,(f.) *(,) De(ghg'/hg)us,(gv.fgFD.1) (,) mi(d)se(ffg)ri(f)cór(fg~)di(f)am(f) tu(fffvDC'dff/hghf)am(f.) (;) in(hj~) mé(j)di(kvJH)o(h) tem(f)pli(h) tu(gv.fhf/gh)i :(g.) (:) se(h)cún(hg~)dum(j) no(j)men(ij) tu(hhg)um,(h_g) De(fg!hvGF'g)us,(gf..) (;) i(ffg)ta(f) et(f) laus(ghg'hvG'F) tu(fv.ege/f_d)a(dc..) (;) in(fgf) fi(fg'h)nes(ixhjHG'hw!ivHG') ter(f)rae.(fffvDC.) (,) (fg!hvGF.e!g'h//fhg/hggf.0) (z0::c3) ℣. Sic(d)ut(d) au(fe~)dí(eh)vi(h)mus,(h_[oh:h]i_[oh:h]h_2[oh:h]//i_[oh:h]hjvHF.1) (,) (h_g/ijh'___jvIH'jvIH'//hvGF.) (:) i(f!h'i)ta(ih/jkihhf.) (,) et(f) ví(hfh)di(hhh)mus(h.f!gwh!iv.hi/jhh/iih.0) (:) in(d) ci(d)vi(d)tá(d)te(d) De(d)i(d) no(de)stri,(d.) (,) in(d) mon(d)te(d) san(dfE'D)cto(ef) *() e(fhG'Fhhh)jus.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #50)",
      blurb: {
        text: "Suscepimus Deus draws its respond from Psalm 48, verses 10 and 11, but sets aside the closing phrase of verse 11, \"justitia plena est dextera tua\" (thy right hand is full of justice). The verse that follows in the chant reaches back to verse 9 of the psalm, which in the psalm itself comes before the two verses of the respond, so the order of the psalm is reversed in performance.",
        source: "Ps. 48:10-11, 9 (Vulgate numbering Ps. 47:10-11, 9) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Benedic anima mea",
      latin: "Bénedic, ánima mea, Dómino, et noli oblivísci omnes retributiónes ejus : et renovábitur, sicut áquilae, juvéntus tua.",
      translation: "Bless the Lord, O my soul, and forget not all his benefits: and your youth shall be renewed like the eagle's.",
      mode: "Offertory · Ordinary Time · Mode V",
      reference: "Ps. 103:2, 5",
      gabc: "(c3) BE(d)ne(f)dic(hh) *(,) á(hihi)ni(f)ma(fe) me(fh)a(hhi) Dó(ijI'H)mi(ih)no,(h_[oh:h]i_[oh:h]h._[oh:h]) (;) et(f) no(f!h'i)li(ih) ob(hihhg)li(fe)ví(f)sci(hh) (,) o(hf~)mnes(gxg_[oh:h]f) re(d)tri(ef)bu(fe)ti(gyf!gwh)ó(h_g)nes(hihhg) e(f!gwhgh)jus :(gf..) (:) et(g) re(e)no(f)vá(h)bi(hhh)tur,(h.) (,) sic(ivHF)ut(h.f!gwh_g) á(hf/hh//hhh)qui(fgFE'f)lae,(fe..) (;) ju(hh)vén(h_f/hhf/hhf./def!hh/ijH'FhvGEf.)(,)(f!hh//hhh.f!gwh)tus(hhh_f) tu(d_[oh:h]e_[oh:h]d_[oh:h])a.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1359)",
      blurb: {
        text: "Psalm 103 verse 2 and verse 5 are both quoted here, but verses 3 and 4 are left out. Those omitted verses speak of forgiveness of iniquities, healing of diseases, and redemption from destruction. What remains is the opening summons of verse 2, \"Bless the Lord, O my soul, and never forget all he hath done for thee,\" joined directly by an added \"et\" to the closing promise of verse 5: that youth shall be renewed like the eagle's. The compiler drew a single arc from grateful remembrance to renewal, leaving the catalogue of mercies in between to the full psalm.",
        source: "Ps. 103:2, 5 (Vulgate numbering Ps. 102:2, 5) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Notas mihi fecisti",
      latin: "Notas mihi fecísti vias vitae : adimplébis me laetítia cum vultu tuo, Dómine.",
      translation: "You have made known to me the ways of life: you will fill me with joy with your countenance, O Lord.",
      mode: "Communion · Ordinary Time · Mode VII",
      reference: "Ps. 16:10",
      gabc: "(c3) NO(j)tas(iji) * mi(j)hi(i) fe(h)cí(iji)sti(g.) (,) vi(h)as(f_e/f!gwh_g) vi(igh)tae :(g.f!gwh_fgvFEfe..) (:) ad(e)im(fg~)plé(g)bis(ihh) me(gf/ghg.) (,) lae(ge)tí(gi)ti(ihhgh)a(hg..) (;) cum(gf~) vul(e!fw!gvFEfg)tu(f) tu(h)o,(hvvGF'gw!hvGF') Dó(e)mi(ef!gvFE'f)ne.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #531)",
      blurb: {
        text: "Notas mihi fecisti asks the Lord to make known the ways of life and fill the singer with joy in his presence. The verse sets that joy after the promise that God's holy one will not see corruption, placing life and gladness within hope.",
        source: "Ps. 16:10 (Vulgate numbering Ps. 15:10) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  // ot-31, Years A & B: Alleluia "Verbo Domini"
  "ot-31-a": {
    alleluia: {
      title: "Verbo Domini",
      latin: "Allelúia. ℣. Verbo Dómini caeli firmáti sunt, et Spíritu oris ejus omnis virtus eórum.",
      translation: "Alleluia. ℣. By the word of the Lord the heavens were established, and all their host by the spirit of his mouth.",
      mode: "Alleluia · Ordinary Time (Years A & B) · Mode VIII",
      reference: "Ps. 33:6",
      gabc: "(c4) AL(gf~)le(defghg___)lú(fg~){ia}.(g.) *(;) (ghgfgfdeddc.) (,) (cd!ef!gv'1//hihhg.) (::) ℣. Ver(cd!e!fwg)bo(g.) Dó(fe)mi(fg)ni(g.) (,) cae(ghg___jvIHG'Efg)li(g.) fir(gvF~D~)má(evDC)ti(dc) sunt,(c.) (:) et(cd) Spí(ef/ghg___)ri(fg)tu(g.) (,) o(g)ris(g) e(ghgfgfdeddc~)jus(c.) (;) o(c)mnis(d) vir(e!fwg)tus(g.) *() e(hg)ó(fg)rum.(ghgfgfdeddc.) (,) (cd!ef!gv'1//hihhg.) (::)",
      source: "Graduale Romanum (GregoBase #635)",
      blurb: {
        text: "Verbo Domini draws its single verse from Psalm 33, which the Douay-Rheims describes as an exhortation to praise God and to trust in him. The verse, Psalm 33:6, is also woven into the traditional Introit for the Second Sunday after Easter, whose full Latin text runs: \"Misericórdia Dómini plena est terra, allelúia: verbo Dómini caeli firmáti sunt, allelúia, allelúia. Exsultáte, iusti, in Dómino: rectos decet collaudátio.\" That Introit draws together verses 5, 6, and 1 of the same psalm.",
        source: "Ps. 33:6 (Vulgate numbering Ps. 32:6) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Third Sunday of Easter\" (rev. 1350083546)",
      },
    }
  },
  // ot-31, Year B: Alleluia "Verbo Domini" (shared with Year A)
  "ot-31-b": {
    alleluia: {
      title: "Verbo Domini",
      latin: "Allelúia. ℣. Verbo Dómini caeli firmáti sunt, et Spíritu oris ejus omnis virtus eórum.",
      translation: "Alleluia. ℣. By the word of the Lord the heavens were established, and all their host by the spirit of his mouth.",
      mode: "Alleluia · Ordinary Time (Years A & B) · Mode VIII",
      reference: "Ps. 33:6",
      gabc: "(c4) AL(gf~)le(defghg___)lú(fg~){ia}.(g.) *(;) (ghgfgfdeddc.) (,) (cd!ef!gv'1//hihhg.) (::) ℣. Ver(cd!e!fwg)bo(g.) Dó(fe)mi(fg)ni(g.) (,) cae(ghg___jvIHG'Efg)li(g.) fir(gvF~D~)má(evDC)ti(dc) sunt,(c.) (:) et(cd) Spí(ef/ghg___)ri(fg)tu(g.) (,) o(g)ris(g) e(ghgfgfdeddc~)jus(c.) (;) o(c)mnis(d) vir(e!fwg)tus(g.) *() e(hg)ó(fg)rum.(ghgfgfdeddc.) (,) (cd!ef!gv'1//hihhg.) (::)",
      source: "Graduale Romanum (GregoBase #635)",
      blurb: {
        text: "Verbo Domini draws its single verse from Psalm 33, which the Douay-Rheims describes as an exhortation to praise God and to trust in him. The verse, Psalm 33:6, is also woven into the traditional Introit for the Second Sunday after Easter, whose full Latin text runs: \"Misericórdia Dómini plena est terra, allelúia: verbo Dómini caeli firmáti sunt, allelúia, allelúia. Exsultáte, iusti, in Dómino: rectos decet collaudátio.\" That Introit draws together verses 5, 6, and 1 of the same psalm.",
        source: "Ps. 33:6 (Vulgate numbering Ps. 32:6) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Third Sunday of Easter\" (rev. 1350083546)",
      },
    }
  },
  // ot-31, Year C: Alleluia "O quam bonus"
  "ot-31-c": {
    alleluia: {
      title: "O quam bonus",
      latin: "Allelúia. ℣. O quam bonus et suávis est, Dómine, Spíritus tuus in nobis!",
      translation: "Alleluia. ℣. O how good and sweet, O Lord, is your Spirit within us!",
      mode: "Alleluia · Ordinary Time (Year C) · Mode I",
      reference: "Wis. 12:1",
      gabc: "(c4) AL(c)le(d!fdf)lú(ef!gvFEfg~){ia}.(g.) *(;) ij.(hvGFgvFEf_ghvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'EDde!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::) ℣. O(h) quam(h) bo(h_g)nus(g_[oh:h]e//fgf/gddc.) (,) et(c) su(d)á(ef'g)vis(g_[oh:h]e) est,(g_[uh:l]h) Dó(fvED)mi(d.c!dw!evDCde)ne,(d.) (:) Spí(dede)ri(c)tus(e) tu(ixg_[uh:l]h/ig/h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(ixce!g_4[uh:l]h/ig/h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(gv.ef/g_[oh:h]e/f_dev.)(,)(gv./!ef/!g_[oh:h]e/!f_d/!ev.c!dwe'!fv)us(e[ll:1]d..) *(:) in(c) no(d!fdf)bis!(ef!gvFEfg..) (,) (hvGFgvFEf_ghvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'EDde!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::)",
      source: "Graduale Romanum (GregoBase #119)",
      blurb: {
        text: "O quam bonus praises the Lord's Spirit as good and sweet. Wisdom's next verse describes that Spirit's patient correction of those who err, so the Alleluia lets praise open toward conversion.",
        source: "Wis. 12:1 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },

  // ---- 32nd Sunday in Ordinary Time ----
  // Alleluia & Communion split: A "Quinque prudentes" (both) / B & C
  // "Qui posuit fines" (alleluia) + "Dominus regit me" (communion).
  // Gradual & Offertory common.
  "ot-32": {
    gradual: {
      title: "Dirigatur oratio mea",
      latin: "Dirigátur orátio mea sicut incénsum in conspéctu tuo, Dómine. ℣. Elevátio mánuum meárum sacrifícium vespertínum.",
      translation: "Let my prayer be directed as incense in your sight, O Lord. ℣. The lifting up of my hands as an evening sacrifice.",
      mode: "Gradual · Ordinary Time · Mode VII",
      reference: "Ps. 141:2",
      gabc: "(c2) DI(c)ri(cg)gá(g)tur(g_[oh:h]e/fgddc.) (,) * o(c)rá(c!feg)ti(gh)o(hfg) me(gh!ivHG'h)a(gh/ih..) (;) sic(f)ut(g) in(hj~)cén(j)sum(j_g/hg..) (,) in(g) con(h)spé(hj)ctu(i) tu(hfg)o,(g_[oh:h]e//fgf'/gddc.) (;) Dó(ffd/fef)mi(e)ne.(ce!ghGF'fe//ced/e[ll:1]ddc.) (::) ℣. E(f)le(g)vá(g_[uh:l]j//ij/kii'iivGF'fd)(,)(ffd/ffg)ti(g)o(g_[oh:h]f//gih/ijhhg.) (;) má(gj)nu(j_0)um(k) me(g)á(igge//fhGF'fd!ew!fvE'DC'd)rum(dc..) (:) sa(c)cri(d)fí(fgf)ci(dgf/gh)um(g.) *(,) ves(c)per(ff)tí(fv.ef/gfg)num.(gge./giHG'ivHG'ge.) (,) (fge'fvD'Cd_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #44)",
      blurb: {
        text: "Both the respond and the versicle are drawn from a single verse, Psalm 141:2, divided between them: the respond takes the first half and the versicle the second. The verse's image of prayer rising like incense stands in for a temple sacrifice the psalmist cannot offer, and it drew the verse into Christian evening worship from an early time. John Chrysostom records that it was sung every day.",
        source: "Ps. 141:2 (Vulgate numbering Ps. 140:2) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Psalm 141\" (rev. 1351255003)",
      },
    },
    offertory: {
      title: "Gressus meos",
      latin: "Gressus meos dírige secúndum elóquium tuum : ut non dominétur mei omnis injustítia, Dómine.",
      translation: "Direct my steps according to your word: that no iniquity may have dominion over me, O Lord.",
      mode: "Offertory · Ordinary Time · Mode VIII",
      reference: "Ps. 119:133",
      gabc: "(c4) GRes(f)sus(fg) me(g)os(g.) *(,) dí(ghg)ri(gef)ge(d!ff) Dó(ixfh!ivHG)mi(ghg___)ne(g.) (;) se(j)cún(jjjvHG'gf/gh!jjjgivHG'gf!gwh!iv_[oh:h]H~G~)dum(hg..) (,) e(f)ló(fg!hvhg)qui(g.h!iwji)um(ih~) tu(jkj)um :(hihhg.) (:) ut(fg'h~) non(g!jj//jjj) do(h)mi(hg)né(h)tur(ge/fg!hvhg.) (;) o(ge~)mnis(fgffgD'Cd.) in(c)ju(d)stí(dg)ti(gf)a,(g.jvvIH'iw!jvIH) (,) Dó(hg)mi(gh/jhi)ne.(hg..) (::)",
      source: "Graduale Romanum (GregoBase #1099)",
      blurb: {
        text: "Gressus meos asks the Lord to direct the singer's steps by his word and keep iniquity from ruling. Psalm 119 places that plea among requests for mercy, redemption, and instruction, so the Ordinary Time Offertory becomes a prayer for a life kept within God's teaching.",
        source: "Ps. 119:133 (Vulgate numbering Ps. 118:133) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  // ot-32, Year A: Alleluia & Communion "Quinque prudentes virgines"
  "ot-32-a": {
    alleluia: {
      title: "Quinque prudentes virgines",
      latin: "Allelúia. ℣. Quinque prudéntes vírgines accepérunt óleum in vasis suis cum lampádibus : média autem nocte clamor factus est : Ecce sponsus venit, exíte óbviam Christo Dómino.",
      translation: "Alleluia. ℣. The five wise virgins took oil in their vessels with the lamps: and at midnight there was a cry: Behold the bridegroom comes, go forth to meet Christ the Lord.",
      mode: "Alleluia · Ordinary Time (Year A) · Mode VII",
      reference: "Matt. 25:4-6",
      gabc: "(c3) AL(ef)le(ev.df!hvGF)lú(hi){ia}.(i.) (,) * ij.(jvIH'hvG'FE.fgFE.) (;) (df!hvGFhi//jvIH'hvG'FE.d/fgffe.) (::) ℣. Quin(ef)que(e.) pru(df!hvGF)dén(hi)tes(i) vír(iji)gi(hi)nes(i.) (;) ac(i)ce(ijI'H)pé(h)runt(hf) ó(gfgvFE//fhG'FEfe)le(de)um(e.) (;) in(efe) va(d)sis(fh) su(h)is(hf) (,) cum(g) lam(fg)pá(ef!gvFEfe)di(de)bus :(e.) (:) mé(f)di(e')a(d) au(e)tem(f) no(hi/hji)cte(i.) (;) cla(hik)mor(kvvJIjvIHi.) (,) (hi!kvvJIjvIHi.) (,) (jvIH'hvG'FE) fa(fe)ctus(de) est :(e.) (:) Ec(f)ce(e[ll:1]d) spon(e)sus(f) ve(hi/hji)nit :(i.) (;) ex(ijI'H)í(h)te(hf) ób(gfgvFE//fhG'FEfe)vi(de)am(e.) (;) Chri(f)sto(efE'D) ()* Dó(df!hvGF)mi(hi)no.(i.) (,) (jvIH'hvG'FE.fgFE.) (;) (df!hvGFhi//jvIH'hvG'FE.d/fgffe.) (::)",
      source: "Graduale Romanum (GregoBase #301)",
      blurb: {
        text: "Quinque prudentes virgines sets the wise virgins' oil and lamps beside the midnight cry that the bridegroom has come. Its final command keeps watch for Christ the Lord: go out to meet him.",
        source: "Matt. 25:4-6 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Quinque prudentes virgines",
      latin: "Quinque prudéntes vírgines accepérunt óleum in vasis suis cum lampádibus : média autem nocte clamor factus est : Ecce sponsus venit, exíte óbviam Christo Dómino.",
      translation: "The five wise virgins took oil in their vessels with the lamps: and at midnight there was a cry: Behold the bridegroom comes, go forth to meet Christ the Lord.",
      mode: "Communion · Ordinary Time (Year A) · Mode V",
      reference: "Matt. 25:4-6",
      gabc: "(c3) QUin(dde~)que(d) *() pru(d)dén(ef~)tes(f) vír(f!gwh)gi(e)nes(deD/B.1) (;) ac([ull:1{1]b)ce(b[ull:}])pé(ded)runt(dc~) ó(efef)le(ef)um(f.) (;) in(df~) va(f)sis(ef) su(d)is(dc) cum(e) lam(ef~)pá(d)di(de!fvED'e)bus :(e[ll:1]d..) (:) mé(f)di(e)a(d) au(e)tem(f) no(hjI'H)cte(h.) (,) cla(hi)mor(j_i) fa(h)ctus(gh) est :(hihh/fgf.) (;) Ec(f)ce(e_[oh:h][ll:1]d) spon(e)sus(f) ve(hjI'H)nit(h.) (,) ex(i)í(i!jwk)te(h.) ób(gxffg)vi(e[ll:1]d)am(d.) (,) Chri(gxd!ffg)sto(ehhh.f!gw!hvGE'fgd') Dó(d)mi(d_[oh:h]e_[oh:h]d_[oh:h])no.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1301)",
      blurb: {
        text: "Quinque prudentes draws from Matthew 25:4 and 25:6 but quietly omits verse 5, the line about the bridegroom tarrying and all the virgins falling asleep. The ending of verse 6 is also altered: where the Gospel reads \"exite obviam ei,\" go out to meet him, the antiphon substitutes \"Christo Domino,\" making the identity of the bridegroom explicit.",
        source: "Matt. 25:4-6 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Commune/C6b (Missale Romanum formulary)",
      },
    }
  },
  // ot-32, Year B: Alleluia "Qui posuit fines" + Communion "Dominus regit me"
  "ot-32-b": {
    alleluia: {
      title: "Qui posuit fines",
      latin: "Allelúia. ℣. Qui pósuit fines tuos pacem, et ádipe fruménti sátiat te.",
      translation: "Alleluia. ℣. He has made your borders peace, and fills you with the fat of corn.",
      mode: "Alleluia · Ordinary Time (Years B & C) · Mode IV",
      reference: "Ps. 147:14",
      gabc: "(c4) AL(fd~)le(ef'g)lú(hgh){ia}.(ixhiHG'gf.0) *(,) (ixhiHG'ge./ghGF'Ef_gffe.) (::) ℣. Qui(h) pó(h)su(g)it(ixg'//ivHG'hffe.) (,) fi(fd/ef!ghhg)nes(gh) tu(hg/hf/ghg)os(g_[oh:h]d) pa(e!gfg)cem,(fe..) (:) et(f) á(gh)di(gf)pe(g) fru(fd)mén(fv.fffdgvFE.)(,)(df/h_f/g_[oh:h]efv.df/gV!ef~)ti(fe..) *(;) sá(ef'g)ti(gdgvFE)at(fd/ef!g'h) te.(ixhiHG'gf.0) (,) (ixhiHG'ge./ghGF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #700)",
      blurb: {
        text: "Qui posuit fines praises God for giving peace to Jerusalem's borders and filling her with the richness of grain. Psalm 147 places this gift before the swift word that runs across the earth, holding settled abundance beside God's living speech.",
        source: "Ps. 147:14 (Vulgate numbering Ps. 147:3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Dominus regit me",
      latin: "Dóminus regit me, et nihil mihi déerit : in loco páscuae ibi me collocávit : super aquam refectiónis educávit me.",
      translation: "The Lord rules me, and I shall want nothing: he has set me in a place of pasture: he has brought me up on the water of refreshment.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode II",
      reference: "Ps. 23:1-2",
      gabc: "(f3) DO(h)mi(gh)nus(f!gw!hvGE.) ()* re(hiH'G)git(h!iwjij) me,(ji..) (;) et(i) ni(j)hil(i) mi(hg)hi(f) dé(hgh)e(fgFE'f)rit :(ef/gf..) (:) in(ef) lo(fhhi)co(h) pá(hg/h_i)scu(f!gw!hvG'FE'f)ae(fe..) (;) i(hg/h_i)bi(i) me(hvvGF) col(h.f!gwh)lo(h)cá(gh)vit :(h.) (:) su(hg)per(h) a(ij)quam(iji) re(h)fe(hg)cti(f)ó(f)nis(ef!gvgf.0) (;) e(hg)du(hi)cá(iv.giHG'F//e_[uh:l]f)vit(e.[ll:1]d!ewfe/fg) me.(f.) (::)",
      source: "Graduale Romanum (GregoBase #278)",
      blurb: {
        text: "Dominus regit me rests in the Lord's promise of no want, pasture, and waters of refreshment. The next verses speak of a soul restored and God's presence in the valley of death, so this Communion's brief portion becomes a prayer of trust.",
        source: "Ps. 23:1-2 (Vulgate numbering Ps. 22:1-2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  // ot-32, Year C: Alleluia "Qui posuit fines" + Communion "Dominus regit me" (shared with Year B)
  "ot-32-c": {
    alleluia: {
      title: "Qui posuit fines",
      latin: "Allelúia. ℣. Qui pósuit fines tuos pacem, et ádipe fruménti sátiat te.",
      translation: "Alleluia. ℣. He has made your borders peace, and fills you with the fat of corn.",
      mode: "Alleluia · Ordinary Time (Years B & C) · Mode IV",
      reference: "Ps. 147:14",
      gabc: "(c4) AL(fd~)le(ef'g)lú(hgh){ia}.(ixhiHG'gf.0) *(,) (ixhiHG'ge./ghGF'Ef_gffe.) (::) ℣. Qui(h) pó(h)su(g)it(ixg'//ivHG'hffe.) (,) fi(fd/ef!ghhg)nes(gh) tu(hg/hf/ghg)os(g_[oh:h]d) pa(e!gfg)cem,(fe..) (:) et(f) á(gh)di(gf)pe(g) fru(fd)mén(fv.fffdgvFE.)(,)(df/h_f/g_[oh:h]efv.df/gV!ef~)ti(fe..) *(;) sá(ef'g)ti(gdgvFE)at(fd/ef!g'h) te.(ixhiHG'gf.0) (,) (ixhiHG'ge./ghGF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #700)",
      blurb: {
        text: "Psalm 147 praises the God who makes the borders peaceful and fills them with the finest wheat. The Alleluia for Ordinary Time gives those two gifts, peace and fullness, its praise.",
        source: "Ps. 147:14 (Vulgate numbering Ps. 147:3) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Dominus regit me",
      latin: "Dóminus regit me, et nihil mihi déerit : in loco páscuae ibi me collocávit : super aquam refectiónis educávit me.",
      translation: "The Lord rules me, and I shall want nothing: he has set me in a place of pasture: he has brought me up on the water of refreshment.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode II",
      reference: "Ps. 23:1-2",
      gabc: "(f3) DO(h)mi(gh)nus(f!gw!hvGE.) ()* re(hiH'G)git(h!iwjij) me,(ji..) (;) et(i) ni(j)hil(i) mi(hg)hi(f) dé(hgh)e(fgFE'f)rit :(ef/gf..) (:) in(ef) lo(fhhi)co(h) pá(hg/h_i)scu(f!gw!hvG'FE'f)ae(fe..) (;) i(hg/h_i)bi(i) me(hvvGF) col(h.f!gwh)lo(h)cá(gh)vit :(h.) (:) su(hg)per(h) a(ij)quam(iji) re(h)fe(hg)cti(f)ó(f)nis(ef!gvgf.0) (;) e(hg)du(hi)cá(iv.giHG'F//e_[uh:l]f)vit(e.[ll:1]d!ewfe/fg) me.(f.) (::)",
      source: "Graduale Romanum (GregoBase #278)",
      blurb: {
        text: "Psalm 23 opens with the Lord who rules the speaker and leaves nothing wanting. The Communion follows the Psalm to its pasture and waters of refreshment, where that care is received.",
        source: "Ps. 23:1-2 (Vulgate numbering Ps. 22:1-2) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Quad4-6.txt [Officium heading]; Divinum Officium, Quad4-6 (Missale Romanum formulary)",
      },
    }
  },

  // ---- 33rd Sunday in Ordinary Time ----
  // Communion splits A & B "Amen dico vobis" / C "Domine quinque talenta";
  // gradual, alleluia, offertory common.
  "ot-33": {
    gradual: {
      title: "Liberasti nos",
      latin: "Liberásti nos, Dómine, ex affligéntibus nos : et eos qui nos odérunt, confudísti. ℣. In Deo laudábimur tota die, et in nómine tuo confitébimur in saécula.",
      translation: "You have saved us, O Lord, from those who afflict us: and you have put to shame those who hate us. ℣. In God we will glory all the day long: and in your name we will give praise for ever.",
      mode: "Gradual · Ordinary Time · Mode VII",
      reference: "Ps. 44:8-9",
      gabc: "(c2) LI(d)be(ff)rá(fg)sti(fg'h) nos,(fef.) *(,) Dó(ihig)mi(fg)ne,(g_[oh:h]d//gih/ijhhg.) (;) ex(g) af(gih)fli(ij)gén(j)ti(g)bus(jh/ihig) nos :(g_[oh:h]e//fgf/gddc.) (:) et(c) e(df)os(fdf) qui(d) nos(fe) o(fg)dé(ggfgd//ef/gfg)runt,(fe..) (;) con(gih)fu(jhhggefv.dfe)dí(cdc)sti.(c!e'g) (,) (ce'!gvgv'1FD//ced/e[ll:1]ddc.) (::) ℣. In(cg) De(gv.fg!hvFD'gvF'EC'd//ffdevDCdv[ll:1]/CBc.)(,)(ff//fffc/dfD'[ull:0]BdfD'Bc.)(,)(ffg/iiivGFE./[-0.5]ghGF'Ef_g)o(g.) (;) lau(hi'j~)dá(j)bi(i)mur(i_[oh:h]h) to(i_[oh:h]h/ikj)ta(jiig) (,) di(gig/iivG'Fg!hwi_[oh:h]h)e,(iiivHG'hfgvFEfe..) (:) et(c) nó(ff)mi(d)ni(c) tu(gfg)o(gge//fgf/gddc.) (;) con(c)fi(d)té(fgf)bi(dgf/gh)mur(g.) *(,) in(cd) saé(fgf)cu(dgf/gh)la.(g.) (;) (cg/i.g!hwi_[oh:h]g/!iigffd//ceDC.) (::)",
      source: "Graduale Romanum (GregoBase #395)",
      blurb: {
        text: "Liberasti nos Domine draws its two verses from the middle of Psalm 44, which the Douay-Rheims describes as commemorating \"former favours, and present afflictions.\" The verses surrounding the quoted pair show how narrow the selection is: just before, the psalm reads \"I will not trust in my bow: neither shall my sword save me,\" and just after, \"now thou hast cast us off, and put us to shame.\" The gradual lifts two verses of confident praise from within a psalm whose wider arc is largely a lament about present abandonment and defeat.",
        source: "Ps. 44:8-9 (Vulgate numbering Ps. 43:8-9) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "De profundis",
      latin: "Allelúia. ℣. De profúndis clamávi ad te, Dómine : Dómine, exáudi vocem meam.",
      translation: "Alleluia. ℣. Out of the depths I have cried to you, O Lord: Lord, hear my voice.",
      mode: "Alleluia · Ordinary Time · Mode VII",
      reference: "Ps. 130:1-2",
      gabc: "(c2) AL(cd)le(c)lú(cfe/gh){ia}.(g.) *(;) ij.(fg/ihivHGhhg//hih/ig.) (;) (fg/ihivHGhhg//hih/ig.) (;) (fg/ihivHG'hffdfv.) (,) (ef!hvGF.efDC.) (,) (e.f!gw!hvGF.efD'Cd_eddc.) (::) ℣. De(cd) pro(c)fún(cfe/gh)dis(g.) (,) cla(g)má(g!hwi/jiivHG)vi(ghfgvFEfe..) (;) ad(dg) te,(ghGF'gffvED'ew!fvED'e) Dó(c)mi(cd'e)ne :(dc..) (:) Dó(cfe/gh)mi(g)ne(g.) (,) ex(gh!i'j)áu(j_k)di(g_[oh:h]i_[oh:h]g_[oh:h]!hwi_[oh:h]hivHGhg..) (;) * vo(dfe)cem(fg) me(g)am.(g.) (,) (fg/ihivHGhhg//hih/ig.) (;) (fg/ihivHGhhg//hih/ig.) (;) (fg/ihivHG'hffdfv.) (,) (ef!hvGF.efDC.) (,) (e.f!gw!hvGF.efD'Cd_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #331)",
      blurb: {
        text: "Psalm 130 opens with two verses of petition, and this Alleluia verse draws on both of them, trimming the second. The psalm's verse 2 continues beyond where the chant ends: \"Let thy ears be attentive to the voice of my supplication.\" The verse as sung stops at \"Lord, hear my voice,\" letting that single cry stand without the elaboration the psalm goes on to add.",
        source: "Ps. 130:1-2 (Vulgate numbering Ps. 129:1-2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "De profundis",
      latin: "De profúndis clamávi ad te, Dómine : Dómine, exáudi oratiónem meam : de profúndis clamávi ad te, Dómine.",
      translation: "Out of the depths I have cried to you, O Lord: Lord, hear my prayer: out of the depths I have cried to you, O Lord.",
      mode: "Offertory · Ordinary Time · Mode II",
      reference: "Ps. 130:1-2",
      gabc: "(f3) DE(c) pro(e)fún(f'/hf/hhh)dis(f_ef.) *(,) cla(e)má(e.f!gwh_f)vi(h_g) ad(hghf) te,(fgE'Defef) Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])ne :(f.) (:) Dó(hig'/hf)mi(ef)ne(ff) (,) ex(hji)áu(high)di(f.) (,) o(f)ra(fe)ti(gih)ó(hhhe/gf)nem(fg) me(f)am :(f//hhhe/g_[oh:h]f) (,) (f'/hg/hiG'F//g_[oh:h]fgvFEfvEC//e.f!gwh_f) (,) (h_f/hhhvFE'ec/eef.) (:) de(c) pro(e)fún(f'/hf/hhh)dis(f_ef.) (,) cla(e)má(e.f!gwh_f)vi(h_g) ad(hghf) te,(fgE'Defef) Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])ne.(f.) (::)",
      source: "Graduale Romanum (GregoBase #986)",
      blurb: {
        text: "De profundis draws on the opening of Psalm 130 but shapes the text with care. The second psalm verse reads in full, \"Domine, exaudi vocem meam. Fiant aures tuæ intendentes in vocem deprecationis meæ,\" yet the offertory takes only its opening plea, replaces \"vocem meam\" with \"orationem meam,\" and drops the second half of the verse entirely. The chant then returns to the psalm's first cry, so the whole piece opens and closes with the same words rising from the depths.",
        source: "Ps. 130:1-2 (Vulgate numbering Ps. 129:1-2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  // ot-33, Years A & B: Communion "Amen dico vobis quidquid orantes"
  "ot-33-a": {
    communion: {
      title: "Amen dico vobis",
      latin: "Amen dico vobis, quidquid orántes pétitis, crédite quia accipiétis, et fiet vobis.",
      translation: "Amen I say to you, whatever you ask when you pray, believe that you shall receive, and it shall be done for you.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode I",
      reference: "Mark 11:24",
      gabc: "(c4) A(cd)men(ixdh'!iv) di(h)co(g) vo(jijh)bis,(h.) (,) * quid(h)quid(g) o(f)rán(h)tes(f) pé(ghg)ti(fg)tis,(g.) (;) cré(ixhih)di(g)te(f) qui(fg)a(f) ac(f)ci(f)pi(f)é(ixfg!hiHF'g)tis,(f.) (;) et(hhV!gh~) fi(fg'h)et(ffe) vo(de!fvED'e)bis.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #592)",
      blurb: {
        text: "The Vulgate text of Mark 11:24 opens not with \"Amen\" but with \"Propterea,\" meaning \"therefore,\" making the verse a continuation of Christ's teaching about faith moving mountains in verse 23. The chant replaces that opening word with \"Amen dico vobis,\" lifting the promise free of its preceding argument and giving it the direct, solemn weight of a standalone declaration. The Gospel sung at this Mass, from Matthew 9:18-26, recounts two healings granted to people who reached out to Christ in faith, and the Communion antiphon arrives as the promise on which both stories rest.",
        source: "Mark 11:24 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent23-0 (Missale Romanum formulary)",
      },
    }
  },
  // ot-33, Year B: Communion "Amen dico vobis" (shared with Year A)
  "ot-33-b": {
    communion: {
      title: "Amen dico vobis",
      latin: "Amen dico vobis, quidquid orántes pétitis, crédite quia accipiétis, et fiet vobis.",
      translation: "Amen I say to you, whatever you ask when you pray, believe that you shall receive, and it shall be done for you.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode I",
      reference: "Mark 11:24",
      gabc: "(c4) A(cd)men(ixdh'!iv) di(h)co(g) vo(jijh)bis,(h.) (,) * quid(h)quid(g) o(f)rán(h)tes(f) pé(ghg)ti(fg)tis,(g.) (;) cré(ixhih)di(g)te(f) qui(fg)a(f) ac(f)ci(f)pi(f)é(ixfg!hiHF'g)tis,(f.) (;) et(hhV!gh~) fi(fg'h)et(ffe) vo(de!fvED'e)bis.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #592)",
      blurb: {
        text: "The Vulgate text of Mark 11:24 opens not with \"Amen\" but with \"Propterea,\" meaning \"therefore,\" making the verse a continuation of Christ's teaching about faith moving mountains in verse 23. The chant replaces that opening word with \"Amen dico vobis,\" lifting the promise free of its preceding argument and giving it the direct, solemn weight of a standalone declaration.",
        source: "Mark 11:24 (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Pent23-0 (Missale Romanum formulary)",
      },
    }
  },
  // ot-33, Year C: Communion "Domine quinque talenta"
  "ot-33-c": {
    communion: {
      title: "Domine quinque talenta",
      latin: "Dómine, quinque talénta tradidísti mihi : ecce ália quinque superlucrátus sum. Euge serve fidélis, quia in pauca fuísti fidélis, supra multa te constítuam, intra in gáudium Dómini tui.",
      translation: "Lord, you delivered to me five talents: behold, I have gained five more. Well done, good and faithful servant, because you have been faithful over a few things, I will set you over many: enter into the joy of your Lord.",
      mode: "Communion · Ordinary Time (Year C) · Mode VII",
      reference: "Matt. 25:20-21",
      gabc: "(c3) DO(ggh)mi(f!gwh)ne,(h_e) (,) * quin(g_[uh:l]h)que(f) ta(e)lén(ig/ij)ta(i.) (,) tra(i)di(ig)dí(ijij)sti(i) mi(gihh)hi :(hg..) (;) ec(i)ce(ig) á(ijij)li(ih)a(h) quin(hi)que(hg/hih.) (,) su(h)per(hg)lu(ge)crá(gh'i)tus(f!gw!hvG'FE'f) sum.(fe..) (:) Eu(i_[uh:l]kJ~'I~)ge(j_i) ser(jk)ve(j) fi(ih)dé(i!jw!kvJI)lis,(i!jwk.) (;) qui(h)a(h) in(ik~) pau(k)ca(kj) fu(i)í(jk)sti(j) fi(ih)dé(i!jw!kvJI'j)lis,(ji..) (;) su(ij)pra(i) mul(ij~)ta(i) te(j/kkj) con(h)stí(ji/jkj)tu(ij_I'_HG'h)am,(hg..) (:) in(ij)tra(i) in(i) gáu(ih/i_[uh:l]j)di(h)um(f!gw!hvGE.) (,) Dó(g/hhf//g!hwi'!jv)mi(i)ni(i.g!hw!ivH'GF'gw!hvGF) tu(ef!gvFE'f)i.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #383)",
      blurb: {
        text: "Domine quinque talenta draws from Matthew 25:20-21, the moment when the first servant returns his doubled five talents to his lord. The parable's next two verses give the lord the identical words of praise to the two-talent servant, but the chant quotes only this first exchange. The text also attracted the Italian Baroque composer Francesco Foggia, baptized 17 November 1603 and died 8 January 1688, who set it as a separate composition; that setting survives as a manuscript in the papers of Gustav Düben.",
        source: "Matt. 25:20-21 (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Francesco Foggia\" (rev. 1255899760)",
      },
    }
  },

  // ===================================================================== *
  // OUR LORD JESUS CHRIST, KING OF THE UNIVERSE (christ-king) — the
  // Solemnity that closes the liturgical year (last Sunday of OT). One Mass,
  // no A/B/C split. Introit "Dignus est Agnus" lives in introits.js.
  // ===================================================================== *
  "christ-king": {
    gradual: {
      title: "Dominabitur a mari",
      latin: "Dominábitur a mari usque ad mare, et a flúmine usque ad términos orbis terrárum. ℣. Et adorábunt eum omnes reges terrae : omnes gentes sérvient ei.",
      translation: "He shall have dominion from sea to sea, and from the river to the ends of the earth. ℣. And all the kings of the earth shall adore him: all nations shall serve him.",
      mode: "Gradual · Christ the King · Mode V",
      reference: "Ps. 72:8; Ps. 79:11",
      gabc: "(c3) DO(d)mi(d)ná(efefhig'hvFE'e)bi(de)tur(e.) *(;) a(d) ma(efe)ri(f) us(f!hhh/ijhhvF'Egihh)que(f) ad(f) ma(f_[oh:h]g_[oh:h]f_[oh:h])re,(f.) (:) et(ijIHih) a(fh) flú(h)mi(feh)ne(hig'/hf.) (;) us(fh)que(h) ad(g) tér(h)mi(f)nos(d.) (,) or(dfe___/hgh)bis(f) ter(e)rá(de)rum.(d!ewfef//highf.dfe/fee[ll:1]d.0) (::) ℣. Et(d) ad(d)o(fe)rá(eh)bunt(h) e(hi)um(ihhf/hiHG.hiFD.1) (,) (f!hhi/hhf/hiHG.hiFD.1) (,) (fdfED//fd/ef/hh/ig/hf/hi/kkkh..) (;) o(f)mnes(hg) re(hih)ges(hf) ter(ffe)rae :(gxe_f_d_2//f_e/fgF'ED'dfvEDe[ll:1]d..) (:) o(fdfED)mnes(d.) Gen(fd/ef!hh/i!jwkI'H)tes(hiHF.1) (;) sér(gxgg//gg)vi(d)ent(efe/ffe.) * e(fhG'F//hhh)i.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #583)",
      blurb: {
        text: "Dominabitur a mari joins the promise of dominion from sea to sea with the vision of kings adoring and nations serving. The paired Psalm verses set universal rule beside the Lord's vineyard whose branches cover the hills, giving the acclamation a wide image of his reign.",
        source: "Ps. 72:8; Ps. 79:11 (Vulgate numbering Ps. 71:8; Ps. 79:11) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    alleluia: {
      title: "Potestas eius",
      latin: "Allelúia. ℣. Potéstas ejus, potéstas aetérna, quae non auferétur : et regnum ejus, quod non corrumpétur.",
      translation: "Alleluia. ℣. His power is an everlasting power, that shall not be taken away: and his kingdom that shall not be destroyed.",
      mode: "Alleluia · Christ the King · Mode I",
      reference: "Dan. 7:14",
      gabc: "(c4) AL(dc~)le(d./fgF'ED'fvED'dc)lú(ixf!gwh'!iv){ia}.(hfg.) *(,) ij.(ixhvGFg_[uh:l]i//hi!jvIHG.hvGFghhvGF'g/!/!dfddc.) (,) (cf/ghGE'Dffd.) (::) ℣. Pot(c)é(cd)stas(d) e(dc~)jus,(d./fgF'ED'//fvED'dc) (,) pot(f)é(ixghhvGFgfghg/hi)stas(hgg) (,) ae(f)tér(ixgfghvGFg_[uh:l]i//hi!jvIG'gfghg/hi)na,(h.) (;) quae(hvGF'g//dfddc.) non(cf/ghG'F) au(e[ll:1]d)fe(cd)ré(d_[oh:h]e_[oh:h]d_[oh:h])tur :(d.) (:) et(ixcf/giiiv'1HFgfghjh.1) (,) (ixcf/giiiv'1HFgfghjh.1) (,) (ixjvIHivHGhvGFg_[uh:l]h) re(hvGF)gnum(gh) e(gf~)jus,(fgffvED.) *(;) quod(d) non(dc) cor(d./fgF'ED'//fvED)rum(dc)pé(ixf!gwh'!iv)tur.(hfg.) (,) (ixhvGFg_[uh:l]i//hi!jvIHG.hvGF/!ghhvGF'g//dfddc.) (,) (cf/ghGE'Dffd.) (::)",
      source: "Graduale Romanum (GregoBase #746)",
      blurb: {
        text: "Potestas eius draws from Daniel 7:14, the verse in which the Son of Man is given power, and glory, and a kingdom over all peoples, tribes, and tongues. The chant sings only the second part of that verse, the proclamation that his power is everlasting and his kingdom shall not be destroyed. The bestowal comes first in the scripture, and the proclamation follows from it, so the chant begins at the declaration that the gift has made possible.",
        source: "Dan. 7:14 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Postula a me",
      latin: "Póstula a me, et dabo tibi gentes hereditátem tuam, et possessiónem tuam términos terrae.",
      translation: "Ask of me, and I will give you the nations for your inheritance, and the ends of the earth for your possession.",
      mode: "Offertory · Christ the King · Mode IV",
      reference: "Ps. 2:8",
      gabc: "(c4) PO(c)stu(dfe)la(f) * a(e/fgF'EfvED) me,(fd/efe.) (,) et(fd~) da(dfe)bo(fg) ti(g)bi(g_[oh:h]efvEDgvFE) Gen(hvGFgvF~E~)tes(e.) (;) he(e)re(e)di(e)tá(egf/gff'fd)tem(dgF'E) tu(hgh_fhggd)am,(dgF'EfgFD.1) (:) et(d) pos(d)ses(df/gef)si(f)ó(f/[1]{ix}f/hih/ihhg)nem(gh/igh.) tu(e.f!gwhhg)am(gf/ghhg.) (;) tér(g_[oh:h]d)mi(dgF'E)nos(e.) ter(eg!hvGFghg)rae.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #390)",
      blurb: {
        text: "Postula a me hears the promise that the nations will be given as an inheritance and the earth's farthest reaches as possession. Psalm 2 places that promise after the declaration of the royal Son, so the Offertory places its request within the psalm's vision of his reign.",
        source: "Ps. 2:8 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    communion: {
      title: "Sedebit Dominus Rex",
      latin: "Sedébit Dóminus Rex in aetérnum : Dóminus benedícet pópulo suo in pace.",
      translation: "The Lord shall sit as King for ever: the Lord will bless his people with peace.",
      mode: "Communion · Christ the King · Mode VI",
      reference: "Ps. 29:10, 11",
      gabc: "(c4) SE(cd)dé(f)bit(dc) * Dó(fg)mi(h)nus(gf) Rex(fgf) in(f_e) ae(ixg_[oh:h]i_[oh:h]g_[oh:h]!hwi)tér(f_[oh:h]g_[oh:h]f_[oh:h])num :(f.) (;) Dó(fg)mi(f)nus(f) be(f)ne(f)dí(ixf!gwh'!iv)cet(h.) (,) pó(hj)pu(g)lo(fg) su(gf)o(fgff/ded.) (,) in(f_e/ggh) pa(f_[oh:h]g_[oh:h]f_[oh:h])ce.(f.) (::)",
      source: "Graduale Romanum (GregoBase #1229)",
      blurb: {
        text: "Psalm 29 verses 10 and 11 each contain two clauses, but this communion takes only the second clause from each. The opening of verse 10, \"Dominus diluvium inhabitare facit\" (the Lord makes the flood to dwell), and the opening of verse 11, \"Dominus virtutem populo suo dabit\" (the Lord will give strength to his people), are both set aside. What remains, joined directly, is the declaration of the Lord's eternal kingship and the blessing of his people with peace.",
        source: "Ps. 29:10, 11 (Vulgate numbering Ps. 28:10, 11) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  },
  "matthew": {
    // Partial proper, copied verbatim from data/propers-1962.js's "matthew" entry
    // (see sources/gregobase/modern-sanctoral-worklist.md, Jul-Sep batch): the
    // Introitus is `@Commune/C5b` (unbuilt Common) so no Introit entry exists
    // for this key in data/introits.js either; the Communio ("Magna est gloria
    // ejus in salutari tuo") returned only Office Responsory hits (office-part=rb),
    // not a confirmed Mass Communion, so it remains unauthored too. St. Matthew's
    // feast (Sep 21) is unchanged between the 1962 and modern calendars and the
    // Graduale Romanum propers for ancient apostle feasts did not change in the
    // 1969/1974 reform, so the Gradual and Offertory below carry over directly.
    gradual: {
      title: "Beatus vir qui timet Dominum",
      latin: "Beátus vir, qui timet Dóminum : in mandátis ejus cupit nimis. ℣. Potens in terra erit semen ejus : generátio rectórum benedicétur.",
      translation: "Blessed is the man that fears the Lord: he shall delight exceedingly in his commandments. ℣. His seed shall be mighty upon earth: the generation of the righteous shall be blessed.",
      mode: "Gradual · St. Matthew, Apostle and Evangelist · Mode V",
      reference: "Ps. 112:1-2",
      gabc: "(c4) BE(d)á(ff/g_[oh:h]e/f_d//g_[oh:h]ef)tus(d/gef) vir,(f.) *(;) qui(jj) ti(j_[hl:1]k_[hl:1]j_[hl:1])met(j) Dó(ixj_hivHGivHG//f!gwhgh//gh)mi(fg)num :(fgff/ded.) (:) in(d) man(d)dá(fgfgh_g//jv.ikjjvIH)tis(hv.gj/kj) e(jjjijv_I~H~)jus(ih..) (;) cu(jjlK'J)pit(j_i/jjj_hj) ni(gh)mis.(e.f!gwhgh.//ghGF'f//f'hg/hggf.0) (z0::c3) ℣. Pot(d)ens(d) in(f) ter(h)ra(ihh'hh//f!hhhvF'ED//fvED//fvED) (,) (f!gwh/i_[oh:h]g/i_[oh:h]h//h'hhjIH'//hvGF.) (;) e(f!h'i)rit(ih/jkihhf.) se(hf/hhh)men(h) e(ihhfhv.)(,)(df/h_fhv.ihhfhv.ih/ihhghv_G~F~)jus :(gf..) (:) ge(f)ne(h)rá(h)ti(hfih)o(hhhvF'D) re(f)ctó(hv.fig'hvF'Ef.)(,)(egF'EfvED'e)rum(e[ll:1]d..) *(;) be(d)ne(ef)di(fhGF')cé(i)tur.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #153)",
      blurb: {
        text: "Beatus vir qui timet Dominum draws its title and its verses from the opening of Psalm 112. The gradual takes only the first two verses, stopping before verse 3, which the Clementine Vulgate continues: \"Gloria et divitiæ in domo ejus, et justitia ejus manet in sæculum sæculi.\" One small difference in wording is worth noting: where the Clementine Vulgate reads \"in mandatis ejus volet nimis,\" the chant sings \"cupit nimis,\" a variant that carries the same sense of ardent longing but uses a different Latin verb.",
        source: "Ps. 112:1-2 (Vulgate numbering Ps. 111:1-2) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "Posuisti Domine",
      latin: "Posuísti, Dómine, in cápite ejus corónam de lápide pretióso : vitam pétiit a te, tribuísti ei, allelúia.",
      translation: "You have set, O Lord, on his head a crown of precious stones: he asked life of you, and you have given it him, alleluia.",
      mode: "Offertory · St. Matthew, Apostle and Evangelist · Mode VIII",
      reference: "Ps. 21:4-5",
      gabc: "(c4) PO(f)su(g)í(g./hjHG'gf/ghg___)sti(g.) *(,) Dó(hg/h!jjkvJH)mi(gfh)ne(h.) (;) in(h) cá(jhhf/!ghGF'/!fde'1c)(,)(cd!ff/gh/jh)pi(g)te(f) e(fg~)jus(g.) (;) co(g.h!iwj)ró(jj/ij_g//h!jijkljj)nam(ki/jhhg.) (;) de(g) lá(g)pi(g)de(gggvED'eg'!hvGFg.) (,) pre(g)ti(hj)ó(ig/h!jj/klK'Ijkjjh/ig)so :(g.) (:) vi(g)tam(gh~) pé(hvGFgvFEf.0/!ghffdg)ti(fg)it(g.) (,) a(h) te,(gjI'Ghh//fh!jvGF'fd/ef!ghg.) (:) tri(g)bu(g)í(gjji/jh)sti(h) e(gh)i,(h.) (;) al(h!iwji~)le(jkJH'//gi.hjIH'//g!jj/h_[oh:h]i_[oh:h]g_[oh:h])lú(ghg___){ia}.(g.) (::)",
      source: "Graduale Romanum (GregoBase #487)",
      blurb: {
        text: "Psalm 21 gives the king blessings, a crown of precious stones, and length of days. For St. Matthew's Offertory, the verses become a prayer of praise for the apostle, whose feast keeps the royal image before God.",
        source: "Ps. 21:4-5 (Vulgate numbering Ps. 20:4-5) (Douay-Rheims; Latin from the Clementine Vulgate); Chant of the Day (this project's own chant entry)",
      },
    }
  },
  "thomas-apostle": {
    // Full proper, copied verbatim from data/propers-1962.js's "thomas-apostle"
    // entry (see sources/gregobase/modern-sanctoral-worklist.md, Oct-Dec batch):
    // the 1962 Missal's Dec 21 feast of St. Thomas the Apostle moved to July 3
    // in the modern calendar (the date associated with the transfer of his
    // relics / his principal feast in the East), but the Graduale Romanum
    // propers for this ancient apostle feast are unchanged by the 1969/1974
    // reform, the same pattern already used for Matthew and other apostles
    // elsewhere in this repo.
    gradual: {
      title: "Nimis honorati sunt",
      latin: "Nimis honoráti sunt amíci tui, Deus : nimis confortátus est principátus eórum. ℣. Dinumerábo eos, et super arénam multiplicabúntur.",
      translation: "Your friends, O God, are made exceedingly honorable: their principality is exceedingly strengthened. ℣. I will number them, and they shall be multiplied above the sand.",
      mode: "Gradual · St. Thomas, Apostle · Mode II",
      reference: "Ps. 139:17-18",
      gabc: "(c3) NI(egf)mis(f.) *(,) ho(f)no(f)rá(hfghvF'Egef)ti(g) sunt(f.) (;) a(f)mí(hf/hi'j)ci(h_f) tu(f_e)i,(gxegFE.) (,) De(e[ll:1]d/fef)us :(fd/ef!hvvF'E//f!gwh/ihh/fgf.0) (:) ni(hh)mis(h) con(h)for(h)tá(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF')tus(f) est(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) prin(d)ci(ef)pá(f.0/[-0.5]hvGF'g)tus(e) e(f)ó(hf/h_i)rum.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Di(f)nu(h)me(hi)rá(i)bo(ij) e(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)os :(ji..) (:) et(i) su(k.i!jw!kvJI')per(i) a(ij)ré(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)nam(f.) *(:) mul(d)ti(ef)pli(f.0/[-0.5]hvGF'g)ca(ef)bún(hf/h_i~)tur.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #148); byte-for-byte the same Common-of-Apostles Gradual text as the 1962 Sancti/12-21.txt's own spelled-out Graduale.",
      blurb: {
        text: "Nimis honorati sunt draws both its respond and its verse from Psalm 139, verses 17 and 18. The verse as the psalm has it does not end where the chant ends: the full line in the Vulgate continues, \"Exsurrexi, et adhuc sum tecum,\" meaning \"I rose up, and am still with thee,\" but the gradual sets that closing phrase aside, leaving the verse on the image of multiplication above the sand. The Gospel of the day, from John 20, is the account of Thomas refusing to believe until he had touched the wounds, and then confessing Christ.",
        source: "Ps. 139:17-18 (Vulgate numbering Ps. 138:17-18) (Douay-Rheims; Latin from the Clementine Vulgate); Divinum Officium, Sancti-12-21 (Missale Romanum formulary)",
      },
    },
    alleluia: {
      title: "Gaudete justi",
      latin: "Allelúia. ℣. Gaudéte, justi, in Dómino : rectos decet collaudátio.",
      translation: "Alleluia. ℣. Rejoice, you just, in the Lord: praise befits the upright.",
      mode: "Alleluia · St. Thomas, Apostle · Mode IV",
      reference: "Ps. 33:1",
      gabc: "(c4) AL(d!ff)le(ef)lú(ghG'Fggh){ia}.(hjHG'gf.0) (;) * ij.(ghg'hvGF'fd./ghG'F//g_[oh:h]f/gffe.) (::) ℣. Gau(fffg~)dé(ixdg/hg/hi)te(h) ju(hhgh)sti(e.) (,) in(f!gwhg~) Dó(hhg)mi(hgh)no :(fgf'gvd_[oh:h]e_[oh:h]d._[oh:h]) (:) re(d!ffd/ffdd!ef!gh)ctos(ghg.) (,) de(h_f/gffv//ce'!gv//hgg'g//ggge//fefvED//fgfg)cet(fe..) (;) * col(e!fwg'!hv)lau(gh~)dá(hvGF)ti(ghg)o.(hjHG'gf.0) (;) (ghg'hvGF'fd./ghG'F//g_[oh:h]f/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #216); the 1962 Sancti/12-21.txt's own Graduale block gives this text (Ps 32:1) as the Alleluia verse, distinct from Common-of-Apostles' own Alleluia (#130, same 'Nimis honorati' text as the Gradual).",
      blurb: {
        text: "Gaudete justi in Domino draws its verse from the opening of Psalm 33, though the chant quietly substitutes \"Gaudete\" for the Clementine Vulgate's \"Exsultate,\" arriving at the same meaning, rejoicing in the Lord, by a slightly different word. The psalm's second and third verses go on to name the instruments and the new song with which that praise is to be offered.",
        source: "Ps. 33:1 (Vulgate numbering Ps. 32:1) (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    },
    offertory: {
      title: "In omnem terram",
      latin: "In omnem terram exívit sonus eórum : et in fines orbis terrae verba eórum.",
      translation: "Their sound has gone forth into all the earth: and their words unto the ends of the world.",
      mode: "Offertory · St. Thomas, Apostle · Mode II",
      reference: "Ps. 19:5",
      gabc: "(c4) IN(e!g'h) o(hiH'G)mnem(g.ggg//hihi) ter(ghE'D)(,)(de/ghg___//hi/k_[hl:1]i/j_kh)ram(h.) *(;) ex(jj)í(j_i)vit(jjj_h) so(hjjh)nus(h.) e(gh)ó(hjj'1jjh//kjjh/ig)rum :(g.) (:) et(jj) in(j) fi(kjjh)nes(h) or(g!jjj)bis(j) ter(hig)rae(e!geg.) (;) ver(deg)ba(e/ghg___//ikj'kvJ'IH) e(h)ó(h)rum.(h!iwjjvIHiih.0) (::)",
      source: "Graduale Romanum (GregoBase #570); the 1962 Sancti/12-21.txt's Offertorium cross-references @Sancti/07-04oct (the Octave of Sts. Peter & Paul), whose own Offertorium is this proper text (Ps 18:5).",
      blurb: {
        text: "Psalm 19 is a hymn to creation, and the verses surrounding this single quotation speak of day and night pouring forth speech and of the sun rejoicing like a giant to run its course. The verse itself, \"their sound hath gone forth into all the earth,\" describes the voice of the heavens in that original setting, but the liturgy applies it here to the apostles. The melody also served as the borrowed tenor voice in a 14th-century isorhythmic motet, Sub Arturo plebs, by the English composer Johannes Alanus, who died in 1373.",
        source: "Ps. 19:5 (Vulgate numbering Ps. 18:5) (Douay-Rheims; Latin from the Clementine Vulgate); Wikipedia, \"Isorhythm\" (rev. 1322163626); Wikipedia, \"Sub Arturo plebs\" (rev. 1326414432)",
      },
    },
    communion: {
      title: "Mitte manum tuam",
      latin: "Mitte manum tuam, et cognósce loca clavórum, allelúia : et noli esse incrédulus, sed fidélis, allelúia, allelúia.",
      translation: "Put in your hand, and know the place of the nails, alleluia: and do not be unbelieving, but believing, alleluia, alleluia.",
      mode: "Communion · St. Thomas, Apostle · Mode VI",
      reference: "John 20:27",
      gabc: "(c4) MIt(ffg)te(f) *() ma(gh)num(g) tu(f)am,(ghg.) (,) et(fvE~D~) co(f)gnó(g)sce(f) lo(f)ca(f) cla(f)vó(f)rum,(g.) (,) al(fd~)le(f)lú(ixg!hw!ivH~G~){ia} :(hg..) (:) et(fd~) no(f)li(g) es(h)se(g) in(f)cré(g)du(fe)lus,(d.) (,) sed(f) fi(f)dé(d_[oh:h]e_[oh:h]c_[oh:h])lis,(c.) (;) al(f)le(g)lú(ixi){ia},(h.) (,) al(ixi)le(hv.gih)lú(f_[oh:h]g_[oh:h]f_[oh:h]){ia}.(f.) (::)",
      source: "Graduale Romanum (GregoBase #953); the 1962 Sancti/12-21.txt's Communio cross-references @Tempora/Pasc1-0 (Low Sunday), whose own Communio is John 20:27 -- the same Doubting-Thomas Gospel scene (John 20:24-29) proclaimed at this Mass's own Evangelium.",
      blurb: {
        text: "Mitte manum tuam draws from Christ's words to Thomas in John 20:27, but condenses the verse. The Vulgate reads in full: \"Infer digitum tuum huc, et vide manus meas, et affer manum tuam, et mitte in latus meum: et noli esse incredulus, sed fidelis,\" put in your finger and see my hands, bring your hand and put it into my side, be not faithless but believing. The antiphon drops the finger, drops the side, and focuses the gesture entirely on the hand and the places of the nails, before closing with the call to faith. The same antiphon text also serves as the Communion for Low Sunday, where the Thomas scene from John 20:24-29 is again the Gospel of the Mass.",
        source: "John 20:27 (Douay-Rheims; Latin from the Clementine Vulgate)",
      },
    }
  }
};
