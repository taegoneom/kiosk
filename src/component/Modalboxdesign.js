import React, { useState, useEffect } from "react";
import { show, hide } from "react-functional-modal";
import { MenuPriceStatus } from "./PriceStatus";
import { OptionOfMenu } from "./OptionStatus";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { CustomOptions } from "./Orderdata";
import CustomizedAccordions from "./CustomizedAccordions";

let counter = 0;
function Modalboxdesign() {
  const {
    ///////////////////////cake////////////////////////
    tiramisu,
    tiramisustrawberry,
    hazelnutchocolatecake,
    carrotcake,
    burntcheesecake,
    oreomilkcake,
    //////////////////////combo/////////////////////////
    coffeeanddonutset,
    coffeeandonionbagelset,
    coffeeandplainbagelset,
    quattrocheesegrilledpaniniset,
    hamcheessmuffinset,
    peperonigrilledcheesepaniniset,
    hotchickengrilledpaniniset,
    macaronset8plus1, //excluded bag and +1 price.
    //////////////////////coffee/////////////////////////
    americano,
    banaricano,
    cafelatte,
    cinnamonlatte,
    coldbrew,
    condensedlatte,
    creamylatte,
    dolcecoldbrew,
    espresso,
    honeyamericano,
    milkcaramelmacciato,
    pistachiocafelatte,
    signatureamericano,
    signaturecoldbrew,
    vanillacoldbrew,
    vanillalatte,
    //////////////////////decaf/////////////////////////
    decafamericano,
    decafbanaricano,
    decafcafelatte,
    decafcinnamonlatte,
    decafcondensed,
    decafcreamylatte,
    decafespresso,
    decafhoneyamericano,
    decafmilkcaramelmacciato,
    decafpistachio,
    decafvanillalatte,
    //////////////////////milk/////////////////////////
    blacksugarbubbletea,
    blacksugarmilktea,
    chaimilktea,
    classicmilktea,
    dalgonalatte,
    earlgreybubbletea,
    earlgreymilktea,
    greentealatte,
    oatmeallatte,
    pistachiolatte,
    realchoco,
    realvanillabean,
    ripepersimmonlatte,
    royalmilktea,
    strawberrylatte,
    toffeenutlatte,
    //////////////////////juicedrink/////////////////////////
    goldmedalapplejuice, //from web
    goldmedalsparkling, // from web
    mangojuice,
    peachyogurtdrink,
    perrierlemon,
    perrierlime,
    plainyogurtdrink,
    ripepersimmonjuice,
    strawberrybananajuice,
    strawberryjuice,
    strawberryyogurtdrink,
    tomatofreshjuice,
    //////////////////////smothiebanaccino/////////////////////////
    chocoshake,
    cookieandcreambanaccino,
    greenteabanaccino,
    javachipbanaccino,
    lemonstrawberrysmoothie,
    lemonyogurtsmoothie,
    mangosmoothie,
    mintchocobanaccino,
    strawberrypeachsmoothie,
    strawberrysmoothie,
    vanillashake,
    //////////////////////teaade/////////////////////////
    chamomilelycheetea,
    chamomile,
    yujaappletea,
    earlgrey,
    gingerlemontea,
    grapefruitade,
    grapefruithibiscustea,
    greengrapeade,
    hibiscus,
    honeygrapefruittea,
    honeylemontea,
    jejugreentangerinetea,
    jujubeblackherbaltea,
    lemonade,
    lemonpepperminttea,
    mintyujapeartea,
    newpeachicedtea,
    peachade,
    pearbellflowerroottea,
    peppermint,
    //////////////////////bread/////////////////////////
    clubsandwich,
    custarddonut,
    eggbaconsandwich,
    hamcheeseenglishmuffin,
    hotchickengrilledpanini,
    jalapenobulgogisandwich,
    onionbagel,
    paulycreamcheese,
    peperonigrilledcheesepanini,
    plainbagel,
    quattrocheesegrilledpanini,
    tunasandwich,
    //////////////////////dessert/////////////////////////
    almondbonbonmacaron,
    americancookie,
    chocochipcookie,
    chocolatemacaron,
    cookieandcreammacaron,
    dessertshoppingbag,
    greenteawhitecookie,
    injeolmimacaron,
    marlenkacake_cocoa,
    marlenkacake_walnut,
    milkmacaron,
    mintchocomacaron,
    raspberrymacaron,
    vanillamacaron,
    yellowcheesemacaron,
    //////////////////////MD/////////////////////////
    point_9900,
    point_10000,
    point_30000,
    point_50000,
    acrylkeyring_typea, //smart store price
    acrylkeyring_typeb, //smart store price
    acrylkeyring_typec, //smart store price
    acrylkeyring_typed, //smart store price
    dripbag_blend,
    ethifacekeyring,
    ethimonitordoll, //smart store price
    maskingtape_babybokthi, //smart store price
    maskingtape_babyethi, //smart store price
    memopad_babybokthi, //smart store price
    memopad_babyethi, //smart store price
    mousepad_babybokthi, //smart store price
    mousepad_babyethi, //smart store price
    note_babyethiandbokthi, //smart store price
    pouch_babyethiandbokthi, //smart store price
    removablesticker_babybokthi, //smart store price
    removablesticker_babyethi, //smart store price
    removablesticker_babyethiandbokthi, //smart store price
    reusabletubler_pink,
    reusabletubler_white,
    smarttok_babyethi,
    smarttok_babybokthi, //smart store price
  } = MenuPriceStatus();

  const {
    ///////////////////////cake////////////////////////
    istiramisu,
    Settiramisutrue,
    Settiramisufalse,

    istiramisustrawberry,
    Settiramisustrawberrytrue,
    Settiramisustrawberryfalse,

    ishazelnutchocolatecake,
    Sethazelnutchocolatecaketrue,
    Sethazelnutchocolatecakefalse,

    iscarrotcake,
    Setcarrotcaketrue,
    Setcarrotcakefalse,

    isburntcheesecake,
    Setburntcheesecaketrue,
    Setburntcheesecakefalse,

    isoreomilkcake,
    Setoreomilkcaketrue,
    Setoreomilkcakefalse,

    //////////////////////combo/////////////////////////
    iscoffeeanddonutset,
    Setcoffeeanddonutsettrue,
    Setcoffeeanddonutsetfalse,

    iscoffeeandonionbagelset,
    Setcoffeeandonionbagelsettrue,
    Setcoffeeandonionbagelsetfalse,

    iscoffeeandplainbagelset,
    Setcoffeeandplainbagelsettrue,
    Setcoffeeandplainbagelsetfalse,

    isquattrocheesegrilledpaniniset,
    Setquattrocheesegrilledpaninisettrue,
    Setquattrocheesegrilledpaninisetfalse,

    ishamcheessmuffinset,
    Sethamcheessmuffinsettrue,
    Sethamcheessmuffinsetfalse,

    ispeperonigrilledcheesepaniniset,
    Setpeperonigrilledcheesepaninisettrue,
    Setpeperonigrilledcheesepaninisetfalse,

    ishotchickengrilledpaniniset,
    Sethotchickengrilledpaninisettrue,
    Sethotchickengrilledpaninisetfalse,

    ismacaronsetplus, //excluded bag and + price.
    Setmacaronsetplustrue,
    Setmacaronsetplusfalse,

    //////////////////////coffee/////////////////////////
    isamericano,
    Setamericanotrue,
    Setamericanofalse,

    isbanaricano,
    Setbanaricanotrue,
    Setbanaricanofalse,

    iscafelatte,
    Setcafelattetrue,
    Setcafelattefalse,

    iscinnamonlatte,
    Setcinnamonlattetrue,
    Setcinnamonlattefalse,

    iscoldbrew,
    Setcoldbrewtrue,
    Setcoldbrewfalse,

    iscondensedlatte,
    Setcondensedlattetrue,
    Setcondensedlattefalse,

    iscreamylatte,
    Setcreamylattetrue,
    Setcreamylattefalse,

    isdolcecoldbrew,
    Setdolcecoldbrewtrue,
    Setdolcecoldbrewfalse,

    isespresso,
    Setespressotrue,
    Setespressofalse,

    ishoneyamericano,
    Sethoneyamericanotrue,
    Sethoneyamericanofalse,

    ismilkcaramelmacciato,
    Setmilkcaramelmacciatotrue,
    Setmilkcaramelmacciatofalse,

    ispistachiocafelatte,
    Setpistachiocafelattetrue,
    Setpistachiocafelattefalse,

    issignatureamericano,
    Setsignatureamericanotrue,
    Setsignatureamericanofalse,

    issignaturecoldbrew,
    Setsignaturecoldbrewtrue,
    Setsignaturecoldbrewfalse,

    isvanillacoldbrew,
    Setvanillacoldbrewtrue,
    Setvanillacoldbrewfalse,

    isvanillalatte,
    Setvanillalattetrue,
    Setvanillalattefalse,

    //////////////////////decaf/////////////////////////
    isdecafamericano,
    Setdecafamericanotrue,
    Setdecafamericanofalse,

    isdecafbanaricano,
    Setdecafbanaricanotrue,
    Setdecafbanaricanofalse,

    isdecafcafelatte,
    Setdecafcafelattetrue,
    Setdecafcafelattefalse,

    isdecafcinnamonlatte,
    Setdecafcinnamonlattetrue,
    Setdecafcinnamonlattefalse,

    isdecafcondensed,
    Setdecafcondensedtrue,
    Setdecafcondensedfalse,

    isdecafcreamylatte,
    Setdecafcreamylattetrue,
    Setdecafcreamylattefalse,

    isdecafespresso,
    Setdecafespressotrue,
    Setdecafespressofalse,

    isdecafhoneyamericano,
    Setdecafhoneyamericanotrue,
    Setdecafhoneyamericanofalse,

    isdecafmilkcaramelmacciato,
    Setdecafmilkcaramelmacciatotrue,
    Setdecafmilkcaramelmacciatofalse,

    isdecafpistachio,
    Setdecafpistachiotrue,
    Setdecafpistachiofalse,

    isdecafvanillalatte,
    Setdecafvanillalattetrue,
    Setdecafvanillalattefalse,

    //////////////////////milk/////////////////////////

    isblacksugarbubbletea,
    Setblacksugarbubbleteatrue,
    Setblacksugarbubbleteafalse,

    isblacksugarmilktea,
    Setblacksugarmilkteatrue,
    Setblacksugarmilkteafalse,

    ischaimilktea,
    Setchaimilkteatrue,
    Setchaimilkteafalse,

    isclassicmilktea,
    Setclassicmilkteatrue,
    Setclassicmilkteafalse,

    isdalgonalatte,
    Setdalgonalattetrue,
    Setdalgonalattefalse,

    isearlgreybubbletea,
    Setearlgreybubbleteatrue,
    Setearlgreybubbleteafalse,

    isearlgreymilktea,
    Setearlgreymilkteatrue,
    Setearlgreymilkteafalse,

    isgreentealatte,
    Setgreentealattetrue,
    Setgreentealattefalse,

    isoatmeallatte,
    Setoatmeallattetrue,
    Setoatmeallattefalse,

    ispistachiolatte,
    Setpistachiolattetrue,
    Setpistachiolattefalse,

    isrealchoco,
    Setrealchocotrue,
    Setrealchocofalse,

    isrealvanillabean,
    Setrealvanillabeantrue,
    Setrealvanillabeanfalse,

    isripepersimmonlatte,
    Setripepersimmonlattetrue,
    Setripepersimmonlattefalse,

    isroyalmilktea,
    Setroyalmilkteatrue,
    Setroyalmilkteafalse,

    isstrawberrylatte,
    Setstrawberrylattetrue,
    Setstrawberrylattefalse,

    istoffeenutlatte,
    Settoffeenutlattetrue,
    Settoffeenutlattefalse,

    //////////////////////juicedrink/////////////////////////

    isgoldmedalapplejuice, //from web
    Setgoldmedalapplejuicetrue,
    Setgoldmedalapplejuicefalse,

    isgoldmedalsparkling, // from web
    Setgoldmedalsparklingtrue,
    Setgoldmedalsparklingfalse,

    ismangojuice,
    Setmangojuicetrue,
    Setmangojuicefalse,

    ispeachyogurtdrink,
    Setpeachyogurtdrinktrue,
    Setpeachyogurtdrinkfalse,

    isperrierlemon,
    Setperrierlemontrue,
    Setperrierlemonfalse,

    isperrierlime,
    Setperrierlimetrue,
    Setperrierlimefalse,

    isplainyogurtdrink,
    Setplainyogurtdrinktrue,
    Setplainyogurtdrinkfalse,

    isripepersimmonjuice,
    Setripepersimmonjuicetrue,
    Setripepersimmonjuicefalse,

    isstrawberrybananajuice,
    Setstrawberrybananajuicetrue,
    Setstrawberrybananajuicefalse,

    isstrawberryjuice,
    Setstrawberryjuicetrue,
    Setstrawberryjuicefalse,

    isstrawberryyogurtdrink,
    Setstrawberryyogurtdrinktrue,
    Setstrawberryyogurtdrinkfalse,

    istomatofreshjuice,
    Settomatofreshjuicetrue,
    Settomatofreshjuicefalse,

    //////////////////////smothiebanaccino/////////////////////////

    ischocoshake,
    Setchocoshaketrue,
    Setchocoshakefalse,

    iscookieandcreambanaccino,
    Setcookieandcreambanaccinotrue,
    Setcookieandcreambanaccinofalse,

    isgreenteabanaccino,
    Setgreenteabanaccinotrue,
    Setgreenteabanaccinofalse,

    isjavachipbanaccino,
    Setjavachipbanaccinotrue,
    Setjavachipbanaccinofalse,

    islemonstrawberrysmoothie,
    Setlemonstrawberrysmoothietrue,
    Setlemonstrawberrysmoothiefalse,

    islemonyogurtsmoothie,
    Setlemonyogurtsmoothietrue,
    Setlemonyogurtsmoothiefalse,

    ismangosmoothie,
    Setmangosmoothietrue,
    Setmangosmoothiefalse,

    ismintchocobanaccino,
    Setmintchocobanaccinotrue,
    Setmintchocobanaccinofalse,

    isstrawberrypeachsmoothie,
    Setstrawberrypeachsmoothietrue,
    Setstrawberrypeachsmoothiefalse,

    isstrawberrysmoothie,
    Setstrawberrysmoothietrue,
    Setstrawberrysmoothiefalse,

    isvanillashake,
    Setvanillashaketrue,
    Setvanillashakefalse,

    //////////////////////teaade/////////////////////////

    ischamomilelycheetea,
    Setchamomilelycheeteatrue,
    Setchamomilelycheeteafalse,

    ischamomile,
    Setchamomiletrue,
    Setchamomilefalse,

    isyujaappletea,
    Setyujaappleteatrue,
    Setyujaappleteafalse,

    isearlgrey,
    Setearlgreytrue,
    Setearlgreyfalse,

    isgingerlemontea,
    Setgingerlemonteatrue,
    Setgingerlemonteafalse,

    isgrapefruitade,
    Setgrapefruitadetrue,
    Setgrapefruitadefalse,

    isgrapefruithibiscustea,
    Setgrapefruithibiscusteatrue,
    Setgrapefruithibiscusteafalse,

    isgreengrapeade,
    Setgreengrapeadetrue,
    Setgreengrapeadefalse,

    ishibiscus,
    Sethibiscustrue,
    Sethibiscusfalse,

    ishoneygrapefruittea,
    Sethoneygrapefruitteatrue,
    Sethoneygrapefruitteafalse,

    ishoneylemontea,
    Sethoneylemonteatrue,
    Sethoneylemonteafalse,

    isjejugreentangerinetea,
    Setjejugreentangerineteatrue,
    Setjejugreentangerineteafalse,

    isjujubeblackherbaltea,
    Setjujubeblackherbalteatrue,
    Setjujubeblackherbalteafalse,

    islemonade,
    Setlemonadetrue,
    Setlemonadefalse,

    islemonpepperminttea,
    Setlemonpeppermintteatrue,
    Setlemonpeppermintteafalse,

    ismintyujapeartea,
    Setmintyujapearteatrue,
    Setmintyujapearteafalse,

    isnewpeachicedtea,
    Setnewpeachicedteatrue,
    Setnewpeachicedteafalse,

    ispeachade,
    Setpeachadetrue,
    Setpeachadefalse,

    ispearbellflowerroottea,
    Setpearbellflowerrootteatrue,
    Setpearbellflowerrootteafalse,

    ispeppermint,
    Setpepperminttrue,
    Setpeppermintfalse,

    //////////////////////bread/////////////////////////

    isclubsandwich,
    Setclubsandwichtrue,
    Setclubsandwichfalse,

    iscustarddonut,
    Setcustarddonuttrue,
    Setcustarddonutfalse,

    iseggbaconsandwich,
    Seteggbaconsandwichtrue,
    Seteggbaconsandwichfalse,

    ishamcheeseenglishmuffin,
    Sethamcheeseenglishmuffintrue,
    Sethamcheeseenglishmuffinfalse,

    ishotchickengrilledpanini,
    Sethotchickengrilledpaninitrue,
    Sethotchickengrilledpaninifalse,

    isjalapenobulgogisandwich,
    Setjalapenobulgogisandwichtrue,
    Setjalapenobulgogisandwichfalse,

    isonionbagel,
    Setonionbageltrue,
    Setonionbagelfalse,

    ispaulycreamcheese,
    Setpaulycreamcheesetrue,
    Setpaulycreamcheesefalse,

    ispeperonigrilledcheesepanini,
    Setpeperonigrilledcheesepaninitrue,
    Setpeperonigrilledcheesepaninifalse,

    isplainbagel,
    Setplainbageltrue,
    Setplainbagelfalse,

    isquattrocheesegrilledpanini,
    Setquattrocheesegrilledpaninitrue,
    Setquattrocheesegrilledpaninifalse,

    istunasandwich,
    Settunasandwichtrue,
    Settunasandwichfalse,

    //////////////////////dessert/////////////////////////

    isalmondbonbonmacaron,
    Setalmondbonbonmacarontrue,
    Setalmondbonbonmacaronfalse,

    isamericancookie,
    Setamericancookietrue,
    Setamericancookiefalse,

    ischocochipcookie,
    Setchocochipcookietrue,
    Setchocochipcookiefalse,

    ischocolatemacaron,
    Setchocolatemacarontrue,
    Setchocolatemacaronfalse,

    iscookieandcreammacaron,
    Setcookieandcreammacarontrue,
    Setcookieandcreammacaronfalse,

    isdessertshoppingbag,
    Setdessertshoppingsetrue,
    Setdessertshoppingbagfalse,

    isgreenteawhitecookie,
    Setgreenteawhitecookietrue,
    Setgreenteawhitecookiefalse,

    isinjeolmimacaron,
    Setinjeolmimacarontrue,
    Setinjeolmimacaronfalse,

    ismarlenkacake_cocoa,
    Setmarlenkacake_cocoatrue,
    Setmarlenkacake_cocoafalse,

    ismarlenkacake_walnut,
    Setmarlenkacake_walnuttrue,
    Setmarlenkacake_walnutfalse,

    ismilkmacaron,
    Setmilkmacarontrue,
    Setmilkmacaronfalse,

    ismintchocomacaron,
    Setmintchocomacarontrue,
    Setmintchocomacaronfalse,

    israspberrymacaron,
    Setraspberrymacarontrue,
    Setraspberrymacaronfalse,

    isvanillamacaron,
    Setvanillamacarontrue,
    Setvanillamacaronfalse,

    isyellowcheesemacaron,
    Setyellowcheesemacarontrue,
    Setyellowcheesemacaronfalse,

    //////////////////////MD/////////////////////////

    ispoint_9900,
    Setpoint_9900true,
    Setpoint_9900false,

    ispoint_10000,
    Setpoint_10000true,
    Setpoint_10000false,

    ispoint_30000,
    Setpoint_30000true,
    Setpoint_30000false,

    ispoint_50000,
    Setpoint_50000true,
    Setpoint_50000false,

    isacrylkeyring_typea, //smart store price
    Setacrylkeyring_typeatrue,
    Setacrylkeyring_typeafalse,

    isacrylkeyring_typeb, //smart store price
    Setacrylkeyring_typebtrue,
    Setacrylkeyring_typebfalse,

    isacrylkeyring_typec, //smart store price
    Setacrylkeyring_typectrue,
    Setacrylkeyring_typecfalse,

    isacrylkeyring_typed, //smart store price
    Setacrylkeyring_typedtrue,
    Setacrylkeyring_typedfalse,

    isdripbag_blend,
    Setdripbag_blendtrue,
    Setdripbag_blendfalse,

    isethifacekeyring,
    Setethifacekeyringtrue,
    Setethifacekeyringfalse,

    isethimonitordoll, //smart store price
    Setethimonitordolltrue,
    Setethimonitordollfalse,

    ismaskingtape_babybokthi, //smart store price
    Setmaskingtape_babybokthitrue,
    Setmaskingtape_babybokthifalse,

    ismaskingtape_babyethi, //smart store price
    Setmaskingtape_babyethitrue,
    Setmaskingtape_babyethifalse,

    ismemopad_babybokthi, //smart store price
    Setmemopad_babybokthitrue,
    Setmemopad_babybokthifalse,

    ismemopad_babyethi, //smart store price
    Setmemopad_babyethitrue,
    Setmemopad_babyethifalse,

    ismousepad_babybokthi, //smart store price
    Setmousepad_babybokthitrue,
    Setmousepad_babybokthifalse,

    ismousepad_babyethi, //smart store price
    Setmousepad_babyethitrue,
    Setmousepad_babyethifalse,

    isnote_babyethiandbokthi, //smart store price
    Setnote_babyethiandbokthitrue,
    Setnote_babyethiandbokthifalse,

    ispouch_babyethiandbokthi, //smart store price
    Setpouch_babyethiandbokthitrue,
    Setpouch_babyethiandbokthifalse,

    isremovablesticker_babybokthi, //smart store price
    Setremovablesticker_babybokthitrue,
    Setremovablesticker_babybokthifalse,

    isremovablesticker_babyethi, //smart store price
    Setremovablesticker_babyethitrue,
    Setremovablesticker_babyethifalse,

    isremovablesticker_babyethiandbokthi, //smart store price
    Setremovablesticker_babyethiandbokthitrue,
    Setremovablesticker_babyethiandbokthifalse,

    isreusabletubler_pink,
    Setreusabletubler_pinktrue,
    Setreusabletubler_pinkfalse,

    isreusabletubler_white,
    Setreusabletubler_whitetrue,
    Setreusabletubler_whitefalse,

    issmarttok_babyethi,
    Setsmarttok_babyethitrue,
    Setsmarttok_babyethifalse,

    issmarttok_babybokthi, //smart store price
    Setsmarttok_babybokthitrue,
    Setsmarttok_babybokthifalse,

    ismodalexit,
    Setismodalexittrue,
    Setismodalexitfalse,
  } = OptionOfMenu();

  const {
    menuname,
    setmenuname,
    menuprice,
    setmenuprice,
    menutype,
    setmenutype,
    menuid,
    setmenuid,
    receipt,
    setreceipt,
    sum,
    addsum,
    setsum,
    setoptionitem,
    optionitem,
    increaseoptionitem,
    decreaseoptionitem,

    optioniced,
    setoptioniced,
    increaseoptioniced,
    decreaseoptioniced,

    optionhot,
    setoptionhot,
    increaseoptionhot,
    decreaseoptionhot,
    cshowtype,
    setcshowtype,
    valueoflist,
    setvalueoflist,
  } = CustomOptions();

  useEffect(() => {
    if (istiramisu) {
      setmenutype(2);
      setmenuname("티라미수");
      setmenuprice(tiramisu);
      setmenuid(21);
    } else if (istiramisustrawberry) {
      setmenutype(2);
      setmenuname("딸기티라미수");
      setmenuprice(tiramisustrawberry);
      setmenuid(22);
    } else if (ishazelnutchocolatecake) {
      setmenutype(2);
      setmenuname("헤이즐넛초콜릿케이크");
      setmenuprice(hazelnutchocolatecake);
      setmenuid(23);
    } else if (iscarrotcake) {
      setmenutype(2);
      setmenuname("당근케이크");
      setmenuprice(carrotcake);
      setmenuid(24);
    } else if (isburntcheesecake) {
      setmenutype(2);
      setmenuname("번트치즈케이크");
      setmenuprice(burntcheesecake);
      setmenuid(25);
    } else if (isoreomilkcake) {
      setmenutype(2);
      setmenuname("오레오우유케이크");
      setmenuprice(oreomilkcake);
      setmenuid(26);
    } else if (iscoffeeanddonutset) {
      setmenutype(3);
      setmenuname("커피&도넛세트");
      setmenuprice(coffeeanddonutset);
      setmenuid(31);
    } else if (iscoffeeandonionbagelset) {
      setmenutype(3);
      setmenuname("커피&어니언베이글세트");
      setmenuprice(coffeeandonionbagelset);
      setmenuid(32);
    } else if (iscoffeeandplainbagelset) {
      setmenutype(3);
      setmenuname("커피&플레인베이글세트");
      setmenuprice(coffeeandplainbagelset);
      setmenuid(33);
    } else if (isquattrocheesegrilledpaniniset) {
      setmenutype(3);
      setmenuname("콰트로치즈그릴드파니니 세트");
      setmenuprice(quattrocheesegrilledpaniniset);
      setmenuid(34);
    } else if (ishamcheessmuffinset) {
      setmenutype(3);
      setmenuname("햄치즈머핀세트");
      setmenuprice(hamcheessmuffinset);
      setmenuid(35);
    } else if (ispeperonigrilledcheesepaniniset) {
      setmenutype(3);
      setmenuname("페퍼로니그릴드치즈파니니 세트");
      setmenuprice(peperonigrilledcheesepaniniset);
      setmenuid(36);
    } else if (ishotchickengrilledpaniniset) {
      setmenutype(3);
      setmenuname("핫치킨그릴드치즈파니니 세트");
      setmenuprice(hotchickengrilledpaniniset);
      setmenuid(37);
    } else if (ismacaronsetplus) {
      setmenutype(3);
      setmenuname("마카롱세트8+1");
      setmenuprice(macaronset8plus1);
      setmenuid(38);
    } else if (isamericano) {
      setmenutype(4);
      setmenuname("아메리카노");
      setmenuprice(americano);
      setmenuid(41);
    } else if (isbanaricano) {
      setmenutype(4);
      setmenuname("바나리카노");
      setmenuprice(banaricano);
      setmenuid(42);
    } else if (iscafelatte) {
      setmenutype(4);
      setmenuname("카페라떼");
      setmenuprice(cafelatte);
      setmenuid(43);
    } else if (iscinnamonlatte) {
      setmenutype(4);
      setmenuname("시나몬라떼");
      setmenuprice(cinnamonlatte);
      setmenuid(44);
    } else if (iscoldbrew) {
      setmenutype(4);
      setmenuname("콜드브루");
      setmenuprice(coldbrew);
      setmenuid(45);
    } else if (iscondensedlatte) {
      setmenutype(4);
      setmenuname("연유라떼");
      setmenuprice(condensedlatte);
      setmenuid(46);
    } else if (iscreamylatte) {
      setmenutype(4);
      setmenuname("크리미라떼");
      setmenuprice(creamylatte);
      setmenuid(47);
    } else if (isdolcecoldbrew) {
      setmenutype(4);
      setmenuname("돌체 콜드브루");
      setmenuprice(dolcecoldbrew);
      setmenuid(48);
    } else if (isespresso) {
      setmenutype(4);
      setmenuname("에스프레소");
      setmenuprice(espresso);
      setmenuid(49);
    } else if (ishoneyamericano) {
      setmenutype(4);
      setmenuname("허니아메리카노");
      setmenuprice(honeyamericano);
      setmenuid(410);
    } else if (ismilkcaramelmacciato) {
      setmenutype(4);
      setmenuname("밀크카라멜마키아또");
      setmenuprice(milkcaramelmacciato);
      setmenuid(411);
    } else if (ispistachiocafelatte) {
      setmenutype(4);
      setmenuname("피스타치오카페라떼");
      setmenuprice(pistachiocafelatte);
      setmenuid(412);
    } else if (issignatureamericano) {
      setmenutype(4);
      setmenuname("시그니처아메리카노");
      setmenuprice(signatureamericano);
      setmenuid(413);
    } else if (issignaturecoldbrew) {
      setmenutype(4);
      setmenuname("시그니처콜드브루");
      setmenuprice(signaturecoldbrew);
      setmenuid(414);
    } else if (isvanillacoldbrew) {
      setmenutype(4);
      setmenuname("바닐라 콜드브루");
      setmenuprice(vanillacoldbrew);
      setmenuid(415);
    } else if (isvanillalatte) {
      setmenutype(4);
      setmenuname("바닐라라떼");
      setmenuprice(vanillalatte);
      setmenuid(416);
    } else if (isdecafamericano) {
      setmenutype(5);
      setmenuname("디카페인 아메리카노");
      setmenuprice(decafamericano);
      setmenuid(51);
    } else if (isdecafbanaricano) {
      setmenutype(5);
      setmenuname("디카페인 바나리카노");
      setmenuprice(decafbanaricano);
      setmenuid(52);
    } else if (isdecafcafelatte) {
      setmenutype(5);
      setmenuname("디카페인 카페라떼");
      setmenuprice(decafcafelatte);
      setmenuid(53);
    } else if (isdecafcinnamonlatte) {
      setmenutype(5);
      setmenuname("디카페인 시나몬라떼");
      setmenuprice(decafcinnamonlatte);
      setmenuid(54);
    } else if (isdecafcondensed) {
      setmenutype(5);
      setmenuname("디카페인 연유라떼");
      setmenuprice(decafcondensed);
      setmenuid(55);
    } else if (isdecafcreamylatte) {
      setmenutype(5);
      setmenuname("디카페인 크리미라떼");
      setmenuprice(decafcreamylatte);
      setmenuid(56);
    } else if (isdecafespresso) {
      setmenutype(5);
      setmenuname("디카페인 에스프레소");
      setmenuprice(decafespresso);
      setmenuid(57);
    } else if (isdecafhoneyamericano) {
      setmenutype(5);
      setmenuname("디카페인 허니아메리카노");
      setmenuprice(decafhoneyamericano);
      setmenuid(58);
    } else if (isdecafmilkcaramelmacciato) {
      setmenutype(5);
      setmenuname("디카페인 밀크카라멜마키아또");
      setmenuprice(decafmilkcaramelmacciato);
      setmenuid(59);
    } else if (isdecafpistachio) {
      setmenutype(5);
      setmenuname("디카페인 피스타치오카페라떼");
      setmenuprice(decafpistachio);
      setmenuid(510);
    } else if (isdecafvanillalatte) {
      setmenutype(5);
      setmenuname("디카페인 바닐라라떼");
      setmenuprice(decafvanillalatte);
      setmenuid(511);
    } else if (isblacksugarbubbletea) {
      setmenutype(6);
      setmenuname("흑당버블티");
      setmenuprice(blacksugarbubbletea);
      setmenuid(61);
    } else if (isblacksugarmilktea) {
      setmenutype(6);
      setmenuname("흑당밀크티");
      setmenuprice(blacksugarmilktea);
      setmenuid(62);
    } else if (ischaimilktea) {
      setmenutype(6);
      setmenuname("차이밀크티");
      setmenuprice(chaimilktea);
      setmenuid(63);
    } else if (isclassicmilktea) {
      setmenutype(6);
      setmenuname("클래식밀크티");
      setmenuprice(classicmilktea);
      setmenuid(64);
    } else if (isdalgonalatte) {
      setmenutype(6);
      setmenuname("달고나라떼");
      setmenuprice(dalgonalatte);
      setmenuid(65);
    } else if (isearlgreybubbletea) {
      setmenutype(6);
      setmenuname("얼그레이버블티");
      setmenuprice(earlgreybubbletea);
      setmenuid(66);
    } else if (isearlgreymilktea) {
      setmenutype(6);
      setmenuname("얼그레이밀크티");
      setmenuprice(earlgreymilktea);
      setmenuid(67);
    } else if (isgreentealatte) {
      setmenutype(6);
      setmenuname("녹차라떼");
      setmenuprice(greentealatte);
      setmenuid(68);
    } else if (isoatmeallatte) {
      setmenutype(6);
      setmenuname("오트밀라떼");
      setmenuprice(oatmeallatte);
      setmenuid(69);
    } else if (ispistachiolatte) {
      setmenutype(6);
      setmenuname("피스타치오라떼");
      setmenuprice(pistachiolatte);
      setmenuid(610);
    } else if (isrealchoco) {
      setmenutype(6);
      setmenuname("리얼초코");
      setmenuprice(realchoco);
      setmenuid(611);
    } else if (isrealvanillabean) {
      setmenutype(6);
      setmenuname("리얼바닐라빈");
      setmenuprice(realvanillabean);
      setmenuid(612);
    } else if (isripepersimmonlatte) {
      setmenutype(6);
      setmenuname("홍시라떼");
      setmenuprice(ripepersimmonlatte);
      setmenuid(613);
    } else if (isroyalmilktea) {
      setmenutype(6);
      setmenuname("로열밀크티");
      setmenuprice(royalmilktea);
      setmenuid(614);
    } else if (isstrawberrylatte) {
      setmenutype(6);
      setmenuname("딸기라떼");
      setmenuprice(strawberrylatte);
      setmenuid(615);
    } else if (istoffeenutlatte) {
      setmenutype(6);
      setmenuname("토피넛라떼");
      setmenuprice(toffeenutlatte);
      setmenuid(616);
    } else if (isgoldmedalapplejuice) {
      setmenutype(7);
      setmenuname("골드메달 애플쥬스");
      setmenuprice(goldmedalapplejuice);
      setmenuid(71);
    } else if (isgoldmedalsparkling) {
      setmenutype(7);
      setmenuname("골드메달 애플스파클링");
      setmenuprice(goldmedalsparkling);
      setmenuid(72);
    } else if (ismangojuice) {
      setmenutype(7);
      setmenuname("망고쥬스");
      setmenuprice(mangojuice);
      setmenuid(73);
    } else if (ispeachyogurtdrink) {
      setmenutype(7);
      setmenuname("복숭아요거트드링크");
      setmenuprice(peachyogurtdrink);
      setmenuid(74);
    } else if (isperrierlemon) {
      setmenutype(7);
      setmenuname("페리에레몬");
      setmenuprice(perrierlemon);
      setmenuid(75);
    } else if (isperrierlime) {
      setmenutype(7);
      setmenuname("페리에라임");
      setmenuprice(perrierlime);
      setmenuid(76);
    } else if (isplainyogurtdrink) {
      setmenutype(7);
      setmenuname("플레인요거트드링크");
      setmenuprice(plainyogurtdrink);
      setmenuid(77);
    } else if (isripepersimmonjuice) {
      setmenutype(7);
      setmenuname("홍시쥬스");
      setmenuprice(ripepersimmonjuice);
      setmenuid(78);
    } else if (isstrawberrybananajuice) {
      setmenutype(7);
      setmenuname("딸기바나나쥬스");
      setmenuprice(strawberrybananajuice);
      setmenuid(79);
    } else if (isstrawberryjuice) {
      setmenutype(7);
      setmenuname("딸기쥬스");
      setmenuprice(strawberryjuice);
      setmenuid(710);
    } else if (isstrawberryyogurtdrink) {
      setmenutype(7);
      setmenuname("딸기요거트드링크");
      setmenuprice(strawberryyogurtdrink);
      setmenuid(711);
    } else if (istomatofreshjuice) {
      setmenutype(7);
      setmenuname("토마토생과일쥬스");
      setmenuprice(tomatofreshjuice);
      setmenuid(712);
    } else if (ischocoshake) {
      setmenutype(8);
      setmenuname("초코쉐이크");
      setmenuprice(chocoshake);
      setmenuid(81);
    } else if (iscookieandcreambanaccino) {
      setmenutype(8);
      setmenuname("쿠앤크바나치노");
      setmenuprice(cookieandcreambanaccino);
      setmenuid(82);
    } else if (isgreenteabanaccino) {
      setmenutype(8);
      setmenuname("녹차바나치노");
      setmenuprice(greenteabanaccino);
      setmenuid(83);
    } else if (isjavachipbanaccino) {
      setmenutype(8);
      setmenuname("자바칩바나치노");
      setmenuprice(javachipbanaccino);
      setmenuid(84);
    } else if (islemonstrawberrysmoothie) {
      setmenutype(8);
      setmenuname("레몬딸기스무디");
      setmenuprice(lemonstrawberrysmoothie);
      setmenuid(85);
    } else if (islemonyogurtsmoothie) {
      setmenutype(8);
      setmenuname("레몬요거트스무디");
      setmenuprice(lemonyogurtsmoothie);
      setmenuid(86);
    } else if (ismangosmoothie) {
      setmenutype(8);
      setmenuname("망고스무디");
      setmenuprice(mangosmoothie);
      setmenuid(87);
    } else if (ismintchocobanaccino) {
      setmenutype(8);
      setmenuname("민트초코바나치노");
      setmenuprice(mintchocobanaccino);
      setmenuid(88);
    } else if (isstrawberrypeachsmoothie) {
      setmenutype(8);
      setmenuname("딸기복숭아스무디");
      setmenuprice(strawberrypeachsmoothie);
      setmenuid(89);
    } else if (isstrawberrysmoothie) {
      setmenutype(8);
      setmenuname("딸기스무디");
      setmenuprice(strawberrysmoothie);
      setmenuid(810);
    } else if (isvanillashake) {
      setmenutype(8);
      setmenuname("바닐라쉐이크");
      setmenuprice(vanillashake);
      setmenuid(811);
    } else if (ischamomilelycheetea) {
      setmenutype(9);
      setmenuname("캐모마일리치티");
      setmenuprice(chamomilelycheetea);
      setmenuid(91);
    } else if (ischamomile) {
      setmenutype(9);
      setmenuname("캐모마일");
      setmenuprice(chamomile);
      setmenuid(92);
    } else if (isyujaappletea) {
      setmenutype(9);
      setmenuname("유자애플티");
      setmenuprice(yujaappletea);
      setmenuid(93);
    } else if (isearlgrey) {
      setmenutype(9);
      setmenuname("얼그레이");
      setmenuprice(earlgrey);
      setmenuid(94);
    } else if (isgingerlemontea) {
      setmenutype(9);
      setmenuname("생강레몬티");
      setmenuprice(gingerlemontea);
      setmenuid(95);
    } else if (isgrapefruitade) {
      setmenutype(9);
      setmenuname("자몽에이드");
      setmenuprice(grapefruitade);
      setmenuid(96);
    } else if (isgrapefruithibiscustea) {
      setmenutype(9);
      setmenuname("자몽히비스커스티");
      setmenuprice(grapefruithibiscustea);
      setmenuid(97);
    } else if (isgreengrapeade) {
      setmenutype(9);
      setmenuname("청포도에이드");
      setmenuprice(greengrapeade);
      setmenuid(98);
    } else if (ishibiscus) {
      setmenutype(9);
      setmenuname("히비스커스");
      setmenuprice(hibiscus);
      setmenuid(99);
    } else if (ishoneygrapefruittea) {
      setmenutype(9);
      setmenuname("허니자몽티");
      setmenuprice(honeygrapefruittea);
      setmenuid(910);
    } else if (ishoneylemontea) {
      setmenutype(9);
      setmenuname("허니레몬티");
      setmenuprice(honeylemontea);
      setmenuid(911);
    } else if (isjejugreentangerinetea) {
      setmenutype(9);
      setmenuname("제주청귤티");
      setmenuprice(jejugreentangerinetea);
      setmenuid(912);
    } else if (isjujubeblackherbaltea) {
      setmenutype(9);
      setmenuname("대추쌍화차");
      setmenuprice(jujubeblackherbaltea);
      setmenuid(913);
    } else if (islemonade) {
      setmenutype(9);
      setmenuname("레몬에이드");
      setmenuprice(lemonade);
      setmenuid(914);
    } else if (islemonpepperminttea) {
      setmenutype(9);
      setmenuname("레몬페퍼민트티");
      setmenuprice(lemonpepperminttea);
      setmenuid(915);
    } else if (ismintyujapeartea) {
      setmenutype(9);
      setmenuname("민트유자페어티");
      setmenuprice(mintyujapeartea);
      setmenuid(916);
    } else if (isnewpeachicedtea) {
      setmenutype(9);
      setmenuname("NEW복숭아아이스티");
      setmenuprice(newpeachicedtea);
      setmenuid(917);
    } else if (ispeachade) {
      setmenutype(9);
      setmenuname("복숭아에이드");
      setmenuprice(peachade);
      setmenuid(918);
    } else if (ispearbellflowerroottea) {
      setmenutype(9);
      setmenuname("배도라지차");
      setmenuprice(pearbellflowerroottea);
      setmenuid(919);
    } else if (ispeppermint) {
      setmenutype(9);
      setmenuname("페퍼민트");
      setmenuprice(peppermint);
      setmenuid(920);
    } else if (isclubsandwich) {
      setmenutype(10);
      setmenuname("클럽샌드위치");
      setmenuprice(clubsandwich);
      setmenuid(101);
    } else if (iscustarddonut) {
      setmenutype(10);
      setmenuname("커스터드도넛");
      setmenuprice(custarddonut);
      setmenuid(102);
    } else if (iseggbaconsandwich) {
      setmenutype(10);
      setmenuname("에그베이컨샌드위치");
      setmenuprice(eggbaconsandwich);
      setmenuid(103);
    } else if (ishamcheeseenglishmuffin) {
      setmenutype(10);
      setmenuname("햄치즈잉글리시머핀");
      setmenuprice(hamcheeseenglishmuffin);
      setmenuid(104);
    } else if (ishotchickengrilledpanini) {
      setmenutype(10);
      setmenuname("핫치킨그릴드치즈파니니");
      setmenuprice(hotchickengrilledpanini);
      setmenuid(105);
    } else if (isjalapenobulgogisandwich) {
      setmenutype(10);
      setmenuname("할라피뇨불고기샌드위치");
      setmenuprice(jalapenobulgogisandwich);
      setmenuid(106);
    } else if (isonionbagel) {
      setmenutype(10);
      setmenuname("어니언베이글");
      setmenuprice(onionbagel);
      setmenuid(107);
    } else if (ispaulycreamcheese) {
      setmenutype(10);
      setmenuname("폴리크림치즈");
      setmenuprice(paulycreamcheese);
      setmenuid(108);
    } else if (ispeperonigrilledcheesepanini) {
      setmenutype(10);
      setmenuname("페퍼로니그릴드치즈파니니");
      setmenuprice(peperonigrilledcheesepanini);
      setmenuid(109);
    } else if (isplainbagel) {
      setmenutype(10);
      setmenuname("플레인베이글");
      setmenuprice(plainbagel);
      setmenuid(1010);
    } else if (isquattrocheesegrilledpanini) {
      setmenutype(10);
      setmenuname("콰트로치즈그릴드파니니");
      setmenuprice(quattrocheesegrilledpanini);
      setmenuid(1011);
    } else if (istunasandwich) {
      setmenutype(10);
      setmenuname("튜나샌드위치");
      setmenuprice(tunasandwich);
      setmenuid(1012);
    } else if (isalmondbonbonmacaron) {
      setmenutype(11);
      setmenuname("아몬드봉봉마카롱");
      setmenuprice(almondbonbonmacaron);
      setmenuid(111);
    } else if (isamericancookie) {
      setmenutype(11);
      setmenuname("아메리칸쿠키");
      setmenuprice(americancookie);
      setmenuid(112);
    } else if (ischocochipcookie) {
      setmenutype(11);
      setmenuname("초코칩쿠키");
      setmenuprice(chocochipcookie);
      setmenuid(113);
    } else if (ischocolatemacaron) {
      setmenutype(11);
      setmenuname("초콜릿마카롱");
      setmenuprice(chocolatemacaron);
      setmenuid(114);
    } else if (iscookieandcreammacaron) {
      setmenutype(11);
      setmenuname("쿠키앤크림마카롱");
      setmenuprice(cookieandcreammacaron);
      setmenuid(115);
    } else if (isdessertshoppingbag) {
      setmenutype(11);
      setmenuname("디저트쇼핑백");
      setmenuprice(dessertshoppingbag);
      setmenuid(116);
    } else if (isgreenteawhitecookie) {
      setmenutype(11);
      setmenuname("말차화이트쿠키");
      setmenuprice(greenteawhitecookie);
      setmenuid(117);
    } else if (isinjeolmimacaron) {
      setmenutype(11);
      setmenuname("인절미마카롱");
      setmenuprice(injeolmimacaron);
      setmenuid(118);
    } else if (ismarlenkacake_cocoa) {
      setmenutype(11);
      setmenuname("말렌카케이크(코코아)");
      setmenuprice(marlenkacake_cocoa);
      setmenuid(119);
    } else if (ismarlenkacake_walnut) {
      setmenutype(11);
      setmenuname("말렌카케이크(호두)");
      setmenuprice(marlenkacake_walnut);
      setmenuid(1110);
    } else if (ismilkmacaron) {
      setmenutype(11);
      setmenuname("밀크마카롱");
      setmenuprice(milkmacaron);
      setmenuid(1111);
    } else if (ismintchocomacaron) {
      setmenutype(11);
      setmenuname("민트초코마카롱");
      setmenuprice(mintchocomacaron);
      setmenuid(1112);
    } else if (israspberrymacaron) {
      setmenutype(11);
      setmenuname("산딸기마카롱");
      setmenuprice(raspberrymacaron);
      setmenuid(1113);
    } else if (isvanillamacaron) {
      setmenutype(11);
      setmenuname("바닐라마카롱");
      setmenuprice(vanillamacaron);
      setmenuid(1114);
    } else if (isyellowcheesemacaron) {
      setmenutype(11);
      setmenuname("황치즈마카롱");
      setmenuprice(yellowcheesemacaron);
      setmenuid(1115);
    } else if (ispoint_9900) {
      setmenutype(12);
      setmenuname("바나프레소 상품권 9,900원권");
      setmenuprice(point_9900);
      setmenuid(121);
    } else if (ispoint_10000) {
      setmenutype(12);
      setmenuname("바나프레소 상품권 1만원권");
      setmenuprice(point_10000);
      setmenuid(122);
    } else if (ispoint_30000) {
      setmenutype(12);
      setmenuname("바나프레소 상품권 3만원권");
      setmenuprice(point_30000);
      setmenuid(123);
    } else if (ispoint_50000) {
      setmenutype(12);
      setmenuname("바나프레소 상품권 5만원권");
      setmenuprice(point_50000);
      setmenuid(124);
    } else if (isacrylkeyring_typea) {
      setmenutype(12);
      setmenuname("아크릴키링_A타입");
      setmenuprice(acrylkeyring_typea);
      setmenuid(125);
    } else if (isacrylkeyring_typeb) {
      setmenutype(12);
      setmenuname("아크릴키링_B타입");
      setmenuprice(acrylkeyring_typeb);
      setmenuid(126);
    } else if (isacrylkeyring_typec) {
      setmenutype(12);
      setmenuname("아크릴키링_C타입");
      setmenuprice(acrylkeyring_typec);
      setmenuid(127);
    } else if (isacrylkeyring_typed) {
      setmenutype(12);
      setmenuname("아크릴키링_D타입");
      setmenuprice(acrylkeyring_typed);
      setmenuid(128);
    } else if (isdripbag_blend) {
      setmenutype(12);
      setmenuname("드립백(블렌드)");
      setmenuprice(dripbag_blend);
      setmenuid(129);
    } else if (isethifacekeyring) {
      setmenutype(12);
      setmenuname("에티얼굴키링");
      setmenuprice(ethifacekeyring);
      setmenuid(1210);
    } else if (isethimonitordoll) {
      setmenutype(12);
      setmenuname("에티모니터인형");
      setmenuprice(ethimonitordoll);
      setmenuid(1211);
    } else if (ismaskingtape_babybokthi) {
      setmenutype(12);
      setmenuname("마스킹테이프_베이비복티");
      setmenuprice(maskingtape_babybokthi);
      setmenuid(1212);
    } else if (ismaskingtape_babyethi) {
      setmenutype(12);
      setmenuname("마스킹테이프_베이비에티");
      setmenuprice(maskingtape_babyethi);
      setmenuid(1213);
    } else if (ismemopad_babybokthi) {
      setmenutype(12);
      setmenuname("메모패드_베이비복티");
      setmenuprice(memopad_babybokthi);
      setmenuid(1214);
    } else if (ismemopad_babyethi) {
      setmenutype(12);
      setmenuname("메모패드_베이비에티");
      setmenuprice(memopad_babyethi);
      setmenuid(1215);
    } else if (ismousepad_babybokthi) {
      setmenutype(12);
      setmenuname("마우스패드_베이비복티");
      setmenuprice(mousepad_babybokthi);
      setmenuid(1216);
    } else if (ismousepad_babyethi) {
      setmenutype(12);
      setmenuname("마우스패드_베이비에티");
      setmenuprice(mousepad_babyethi);
      setmenuid(1217);
    } else if (isnote_babyethiandbokthi) {
      setmenutype(12);
      setmenuname("노트_베이비에티&복티");
      setmenuprice(note_babyethiandbokthi);
      setmenuid(1218);
    } else if (ispouch_babyethiandbokthi) {
      setmenutype(12);
      setmenuname("파우치_베이비에티&복티");
      setmenuprice(pouch_babyethiandbokthi);
      setmenuid(1219);
    } else if (isremovablesticker_babybokthi) {
      setmenutype(12);
      setmenuname("리무버블스티커_베이비복티");
      setmenuprice(removablesticker_babybokthi);
      setmenuid(1220);
    } else if (isremovablesticker_babyethi) {
      setmenutype(12);
      setmenuname("리무버블스티커_베이비에티");
      setmenuprice(removablesticker_babyethi);
      setmenuid(1221);
    } else if (isremovablesticker_babyethiandbokthi) {
      setmenutype(12);
      setmenuname("리무버블스티커_베이비에티&복티");
      setmenuprice(removablesticker_babyethiandbokthi);
      setmenuid(1222);
    } else if (isreusabletubler_pink) {
      setmenutype(12);
      setmenuname("리유저블텀블러(핑크)");
      setmenuprice(reusabletubler_pink);
      setmenuid(1223);
    } else if (isreusabletubler_white) {
      setmenutype(12);
      setmenuname("리유저블텀블러(화이트)");
      setmenuprice(reusabletubler_white);
      setmenuid(1224);
    } else if (issmarttok_babyethi) {
      setmenutype(12);
      setmenuname("스마트톡_베이비에티");
      setmenuprice(smarttok_babyethi);
      setmenuid(1225);
    } else if (issmarttok_babybokthi) {
      setmenutype(12);
      setmenuname("스마트톡_베이비복티");
      setmenuprice(smarttok_babybokthi);
      setmenuid(1226);
    } else {
      alert("problem while setting types");
    }
  }, []);
  /////////////////////////////////

  useEffect(() => {
    if (ismodalexit) {
      //setmenuname("something wrong");
      //setmenuprice(0);
      //setmenutype(0);
      //setmenuid(0);
      //추천1);케이크2);세트3);커피4);디카페인5);밀크&라떼6);주스&드링크7);스무디&바나치노8);차&에이드9);브레드10);디저트11);MD12
      Settiramisufalse();
      Settiramisustrawberryfalse();
      Sethazelnutchocolatecakefalse();
      Setcarrotcakefalse();
      Setburntcheesecakefalse();
      Setoreomilkcakefalse();
      Setcoffeeanddonutsetfalse();
      Setcoffeeandonionbagelsetfalse();
      Setcoffeeandplainbagelsetfalse();
      Setquattrocheesegrilledpaninisetfalse();
      Sethamcheessmuffinsetfalse();
      Setpeperonigrilledcheesepaninisetfalse();
      Sethotchickengrilledpaninisetfalse();
      Setmacaronsetplusfalse();
      Setamericanofalse();
      Setbanaricanofalse();
      Setcafelattefalse();
      Setcinnamonlattefalse();
      Setcoldbrewfalse();
      Setcondensedlattefalse();
      Setcreamylattefalse();
      Setdolcecoldbrewfalse();
      Setespressofalse();
      Sethoneyamericanofalse();
      Setmilkcaramelmacciatofalse();
      Setpistachiocafelattefalse();
      Setsignatureamericanofalse();
      Setsignaturecoldbrewfalse();
      Setvanillacoldbrewfalse();
      Setvanillalattefalse();
      Setdecafamericanofalse();
      Setdecafbanaricanofalse();
      Setdecafcafelattefalse();
      Setdecafcinnamonlattefalse();
      Setdecafcondensedfalse();
      Setdecafcreamylattefalse();
      Setdecafespressofalse();
      Setdecafhoneyamericanofalse();
      Setdecafmilkcaramelmacciatofalse();
      Setdecafpistachiofalse();
      Setdecafvanillalattefalse();
      Setblacksugarbubbleteafalse();
      Setblacksugarmilkteafalse();
      Setchaimilkteafalse();
      Setclassicmilkteafalse();
      Setdalgonalattefalse();
      Setearlgreybubbleteafalse();
      Setearlgreymilkteafalse();
      Setgreentealattefalse();
      Setoatmeallattefalse();
      Setpistachiolattefalse();
      Setrealchocofalse();
      Setrealvanillabeanfalse();
      Setripepersimmonlattefalse();
      Setroyalmilkteafalse();
      Setstrawberrylattefalse();
      Settoffeenutlattefalse();
      Setgoldmedalapplejuicefalse();
      Setgoldmedalsparklingfalse();
      Setmangojuicefalse();
      Setpeachyogurtdrinkfalse();
      Setperrierlemonfalse();
      Setperrierlimefalse();
      Setplainyogurtdrinkfalse();
      Setripepersimmonjuicefalse();
      Setstrawberrybananajuicefalse();
      Setstrawberryjuicefalse();
      Setstrawberryyogurtdrinkfalse();
      Settomatofreshjuicefalse();
      Setchocoshakefalse();
      Setcookieandcreambanaccinofalse();
      Setgreenteabanaccinofalse();
      Setjavachipbanaccinofalse();
      Setlemonstrawberrysmoothiefalse();
      Setlemonyogurtsmoothiefalse();
      Setmangosmoothiefalse();
      Setmintchocobanaccinofalse();
      Setstrawberrypeachsmoothiefalse();
      Setstrawberrysmoothiefalse();
      Setvanillashakefalse();
      Setchamomilelycheeteafalse();
      Setchamomilefalse();
      Setyujaappleteafalse();
      Setearlgreyfalse();
      Setgingerlemonteafalse();
      Setgrapefruitadefalse();
      Setgrapefruithibiscusteafalse();
      Setgreengrapeadefalse();
      Sethibiscusfalse();
      Sethoneygrapefruitteafalse();
      Sethoneylemonteafalse();
      Setjejugreentangerineteafalse();
      Setjujubeblackherbalteafalse();
      Setlemonadefalse();
      Setlemonpeppermintteafalse();
      Setmintyujapearteafalse();
      Setnewpeachicedteafalse();
      Setpeachadefalse();
      Setpearbellflowerrootteafalse();
      Setpeppermintfalse();
      Setclubsandwichfalse();
      Setcustarddonutfalse();
      Seteggbaconsandwichfalse();
      Sethamcheeseenglishmuffinfalse();
      Sethotchickengrilledpaninifalse();
      Setjalapenobulgogisandwichfalse();
      Setonionbagelfalse();
      Setpaulycreamcheesefalse();
      Setpeperonigrilledcheesepaninifalse();
      Setplainbagelfalse();
      Setquattrocheesegrilledpaninifalse();
      Settunasandwichfalse();
      Setalmondbonbonmacaronfalse();
      Setamericancookiefalse();
      Setchocochipcookiefalse();
      Setchocolatemacaronfalse();
      Setcookieandcreammacaronfalse();
      Setdessertshoppingbagfalse();
      Setgreenteawhitecookiefalse();
      Setinjeolmimacaronfalse();
      Setmarlenkacake_cocoafalse();
      Setmarlenkacake_walnutfalse();
      Setmilkmacaronfalse();
      Setmintchocomacaronfalse();
      Setraspberrymacaronfalse();
      Setvanillamacaronfalse();
      Setyellowcheesemacaronfalse();
      Setpoint_9900false();
      Setpoint_10000false();
      Setpoint_30000false();
      Setpoint_50000false();
      Setacrylkeyring_typeafalse();
      Setacrylkeyring_typebfalse();
      Setacrylkeyring_typecfalse();
      Setacrylkeyring_typedfalse();
      Setdripbag_blendfalse();
      Setethifacekeyringfalse();
      Setethimonitordollfalse();
      Setmaskingtape_babybokthifalse();
      Setmaskingtape_babyethifalse();
      Setmemopad_babybokthifalse();
      Setmemopad_babyethifalse();
      Setmousepad_babybokthifalse();
      Setmousepad_babyethifalse();
      Setnote_babyethiandbokthifalse();
      Setpouch_babyethiandbokthifalse();
      Setremovablesticker_babybokthifalse();
      Setremovablesticker_babyethifalse();
      Setremovablesticker_babyethiandbokthifalse();
      Setreusabletubler_pinkfalse();
      Setreusabletubler_whitefalse();
      Setsmarttok_babyethifalse();
      Setsmarttok_babybokthifalse();
      Setismodalexitfalse();
    }
  }, []);

  var showtype = -1;

  //no option
  if (
    menuid === 21 ||
    menuid === 22 ||
    menuid === 23 ||
    menuid === 24 ||
    menuid === 25 ||
    menuid === 26 ||
    menuid === 38 ||
    menuid === 71 ||
    menuid === 72 ||
    menuid === 75 ||
    menuid === 76 ||
    menuid === 101 ||
    menuid === 102 ||
    menuid === 103 ||
    menuid === 104 ||
    menuid === 105 ||
    menuid === 106 ||
    menuid === 107 ||
    menuid === 108 ||
    menuid === 109 ||
    menuid === 1010 ||
    menuid === 1011 ||
    menuid === 1012 ||
    menuid === 111 ||
    menuid === 112 ||
    menuid === 113 ||
    menuid === 114 ||
    menuid === 115 ||
    menuid === 116 ||
    menuid === 117 ||
    menuid === 118 ||
    menuid === 119 ||
    menuid === 1110 ||
    menuid === 1111 ||
    menuid === 1112 ||
    menuid === 1113 ||
    menuid === 1114 ||
    menuid === 1115 ||
    menuid === 121 ||
    menuid === 122 ||
    menuid === 123 ||
    menuid === 124 ||
    menuid === 125 ||
    menuid === 126 ||
    menuid === 127 ||
    menuid === 128 ||
    menuid === 129 ||
    menuid === 1210 ||
    menuid === 1211 ||
    menuid === 1212 ||
    menuid === 1213 ||
    menuid === 1214 ||
    menuid === 1215 ||
    menuid === 1216 ||
    menuid === 1217 ||
    menuid === 1218 ||
    menuid === 1219 ||
    menuid === 1220 ||
    menuid === 1221 ||
    menuid === 1222 ||
    menuid === 1223 ||
    menuid === 1224 ||
    menuid === 1225 ||
    menuid === 1226
  ) {
    showtype = 1;
  }
  //온도 샷조절 얼음 물양 원두변경(200원) 헤이즐넛시럽추가 라떼로 변경(우유) 라떼로 변경(두유) 시나몬시럽추가
  else if (
    menuid === 31 ||
    menuid === 32 ||
    menuid === 33 ||
    menuid === 34 ||
    menuid === 35 ||
    menuid === 36 ||
    menuid === 37
  ) {
    showtype = 2;
  }
  //온도 샷조절 얼음 물양 헤이즐넛시럽추가 시나몬시럽추가
  else if (menuid === 41 || menuid === 51) {
    showtype = 3;
  }
  //테이크아웃전용 샷양  물양 원두변경(400원)
  else if (menuid === 42 || menuid === 52) {
    showtype = 4;
  }
  //온도 샷조절 얼음 원두변경(200원) 두유로변경 헤이즐넛시럽추가 시나몬시럽추가
  else if (menuid === 43 || menuid === 53) {
    showtype = 5;
  }
  //온도 얼음 원두변경(200원) 당도 두유로변경 샷추가 휘핑추가
  else if (menuid === 44 || menuid === 54 || menuid === 46 || menuid === 55) {
    showtype = 6;
  }
  //iced only 얼음 물양 헤이즐넛시럽추가 시나몬시럽추가
  else if (menuid === 45) {
    showtype = 7;
  }
  //iced only 샷양 얼음 원두변경(200원) 휘핑추가 헤이즐넛시럽추가 시나몬시럽추가
  else if (menuid === 47 || menuid === 56) {
    showtype = 8;
  }
  //iced only 당도 두유로변경 휘핑추가
  else if (menuid === 48) {
    showtype = 9;
  }
  //hot only 원두변경(200원) 샷추가
  else if (menuid === 49 || menuid === 57) {
    showtype = 10;
  }
  //온도 샷조절 얼음 물양 원두변경(200원) 당도
  else if (menuid === 410 || menuid === 58) {
    showtype = 11;
  }
  //온도 얼음 원두변경 당도 두유로변경 샷추가 휘핑추가
  else if (
    menuid === 411 ||
    menuid === 412 ||
    menuid === 416 ||
    menuid === 59 ||
    menuid === 510 ||
    menuid === 511
  ) {
    showtype = 12;
  }
  //온도 샷조절 얼음 물양 헤이즐넛시럽추가 시나몬시럽추가
  else if (menuid === 413) {
    showtype = 13;
  }
  //iced only 얼음 물양 헤이즐넛시럽추가 시나몬시럽추가
  else if (menuid === 414) {
    showtype = 14;
  }
  //iced only 당도 두유로변경 휘핑추가
  else if (menuid === 415) {
    showtype = 15;
  }
  //iced only 얼음 당도 두유로변경 샷추가
  else if (menuid === 61 || menuid === 62) {
    showtype = 16;
  }
  //온도 두유로변경
  else if (menuid === 63 || menuid === 64) {
    showtype = 17;
  }
  //온도 당도 두유로변경 샷추가 달고나추가
  else if (menuid === 65) {
    showtype = 18;
  }
  //iced only 얼음 당도 두유로변경 샷추가
  else if (menuid === 66) {
    showtype = 19;
  }
  //온도 얼음 당도 두유로변경 샷추가
  else if (menuid === 67) {
    showtype = 20;
  }
  //온도 얼음 당도 두유로변경 샷추가 휘핑추가
  else if (menuid === 68 || menuid === 69 || menuid === 611 || menuid === 612) {
    showtype = 21;
  }
  //온도 얼음 당도 두유로변경 휘핑추가
  else if (menuid === 610) {
    showtype = 22;
  }
  //iced only 당도
  else if (menuid === 613 || menuid === 73 || menuid === 78) {
    showtype = 23;
  }
  //온도조절 두유로변경
  else if (menuid === 614) {
    showtype = 24;
  }
  //iced only 얼음 당도 두유로변경 휘핑추가
  else if (menuid === 615) {
    showtype = 25;
  }
  //온도조절 당도 두유로변경 토핑제외 샷추가 휘핑추가
  else if (menuid === 616) {
    showtype = 26;
  }
  //iced only
  else if (
    menuid === 74 ||
    menuid === 77 ||
    menuid === 79 ||
    menuid === 710 ||
    menuid === 711 ||
    menuid === 81 ||
    menuid === 85 ||
    menuid === 86 ||
    menuid === 87 ||
    menuid === 89 ||
    menuid === 810 ||
    menuid === 811
  ) {
    showtype = 27;
  }
  //iced only 당도 시럽제외
  else if (menuid === 712) {
    showtype = 28;
  }
  //iced only 휘핑 샷추가
  else if (menuid === 82 || menuid === 83 || menuid === 84) {
    showtype = 29;
  }
  //iced only 휘핑 두유로변경 샷추가
  else if (menuid === 88) {
    showtype = 30;
  }
  //온도조절 당도
  else if (
    menuid === 91 ||
    menuid === 93 ||
    menuid === 95 ||
    menuid === 912 ||
    menuid === 913 ||
    menuid === 916 ||
    menuid === 919
  ) {
    showtype = 31;
  }
  //온도조절 얼음
  else if (
    menuid === 92 ||
    menuid === 94 ||
    menuid === 97 ||
    menuid === 99 ||
    menuid === 915 ||
    menuid === 920
  ) {
    showtype = 32;
  }
  //iced only 얼음 당도
  else if (menuid === 96 || menuid === 98 || menuid === 914) {
    showtype = 33;
  }
  //온도조절 얼음 당도
  else if (menuid === 910 || menuid === 911) {
    showtype = 34;
  }
  //iced only 얼음 과육제외 샷추가
  else if (menuid === 917) {
    showtype = 35;
  }
  //iced only 얼음 덜달게
  else if (menuid === 918) {
    showtype = 36;
  } else {
    showtype = -1;
  }
  var showoption = [];
  if (showtype === 1) {
    //////////////no option//////////////////
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionitem();
          }}
        >
          +
        </Button>
        <Typography align="left">{optionitem}</Typography>
        <Button
          onClick={() => {
            decreaseoptionitem();
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 2) {
    //온도 샷조절 얼음 물양 원두변경(200원) 헤이즐넛시럽추가 라떼로 변경(우유) 라떼로 변경(두유) 시나몬시럽추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 3) {
    //온도 샷조절 얼음 물양 헤이즐넛시럽추가 시나몬시럽추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 4) {
    //iced only 샷양  물양 원두변경(400원)
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 5) {
    //온도 샷조절 얼음 원두변경(200원) 두유로변경 헤이즐넛시럽추가 시나몬시럽추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 6) {
    //온도 얼음 원두변경(200원) 당도 두유로변경 샷추가 휘핑추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 7) {
    //iced only 얼음 물양 헤이즐넛시럽추가 시나몬시럽추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 8) {
    //iced only 샷양 얼음 원두변경(200원) 휘핑추가 헤이즐넛시럽추가 시나몬시럽추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 9) {
    //iced only 당도 두유로변경 휘핑추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 10) {
    //hot only 원두변경(200원) 샷추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 11) {
    //온도 샷조절 얼음 물양 원두변경(200원) 당도
    showoption.push(<div> </div>);
  } else if (showtype === 12) {
    //온도 얼음 원두변경 당도 두유로변경 샷추가 휘핑추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 13) {
    //온도 샷조절 얼음 물양 헤이즐넛시럽추가 시나몬시럽추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 14) {
    //iced only 얼음 물양 헤이즐넛시럽추가 시나몬시럽추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 15) {
    //iced only 당도 두유로변경 휘핑추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 16) {
    //iced only 얼음 당도 두유로변경 샷추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 17) {
    //온도 두유로변경
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 18) {
    //온도 당도 두유로변경 샷추가 달고나추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 19) {
    //iced only 얼음 당도 두유로변경 샷추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 20) {
    //온도 얼음 당도 두유로변경 샷추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 21) {
    //온도 얼음 당도 두유로변경 샷추가 휘핑추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 22) {
    //온도 얼음 당도 두유로변경 휘핑추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 23) {
    //iced only 당도
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 24) {
    //온도조절 두유로변경
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 25) {
    //iced only 얼음 당도 두유로변경 휘핑추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 26) {
    //온도조절 당도 두유로변경 토핑제외 샷추가 휘핑추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 27) {
    //iced only
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 28) {
    //iced only 당도 시럽제외
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 29) {
    //iced only 휘핑 샷추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 30) {
    //iced only 휘핑 두유로변경 샷추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 31) {
    //온도조절 당도
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 32) {
    //온도조절 얼음
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 33) {
    //iced only 얼음 당도
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 34) {
    //온도조절 얼음 당도
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 35) {
    //iced only 얼음 과육제외 샷추가
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 36) {
    //iced only 얼음 덜달게
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else {
  }

  function genstring(input) {
    var str = "";
    str = str.concat(
      "",
      input.ice == 1
        ? "얼음많이, "
        : input.ice == 2
        ? "얼음적게, "
        : input.ice == 3
        ? "얼음없이, "
        : ""
    );

    str = str.concat(
      "",
      input.water == 1 ? "물양적게, " : input.water == 2 ? "물양많이, " : ""
    );
    str = str.concat(
      "",
      input.sweet == 1 ? "더달게, " : input.sweet == 2 ? "단맛줄임, " : ""
    );
    str = str.concat(
      "",
      input.shotamount == 1
        ? "샷추가, "
        : input.shotamount == 2
        ? "연한샷, "
        : ""
    );
    str = str.concat("", input.pulp == 1 ? "복숭아과육빼고, " : "");
    str = str.concat("", input.soymilk == 1 ? "두유로 변경, " : "");
    str = str.concat("", input.whippedcream == 1 ? "휘핑추가, " : "");
    str = str.concat("", input.excludesyrup == 1 ? "시럽제외, " : "");
    str = str.concat("", input.excludetopping == 1 ? "토핑제외, " : "");
    str = str.concat("", input.includedalgona == 1 ? "달고나 추가, " : "");
    str = str.concat(
      "",
      input.addhazelnutsyrup == 1 ? "헤이즐넛 시럽추가, " : ""
    );
    str = str.concat(
      "",
      input.addcinnamonsyrup == 1 ? "시나몬 시럽추가, " : ""
    );
    str = str.concat(
      "",
      input.changenormalintosignature == 1 ? "시그니처 원두변경, " : ""
    );
    str = str.concat(
      "",
      input.changebanaintosignature == 1 ? "바나리카노 시그니처 원두변경, " : ""
    );
    str = str.concat(
      "",
      input.changelatteorsoyfromset == 1
        ? "라떼로 변경(우유), "
        : input.changelatteorsoyfromset == 2
        ? "라떼로 변경(두유), "
        : ""
    );
    console.log("option string is");
    console.log(str);
    return str;
  } //valueoflist[i]
  function sumoption(input) {
    var sumtemp = 0;
    if (input.shotamount == 1) {
      sumtemp += 500;
    }
    if (input.whippedcream == 1) {
      sumtemp += 500;
    }
    if (input.includedalgona == 1) {
      sumtemp += 500;
    }
    if (input.addhazelnutsyrup == 1) {
      sumtemp += 500;
    }
    if (input.addcinnamonsyrup == 1) {
      sumtemp += 500;
    }
    if (input.changenormalintosignature == 1) {
      sumtemp += 200;
    }
    if (input.changebanaintosignature == 1) {
      sumtemp += 400;
    }
    if (input.changelatteorsoyfromset == 1) {
      sumtemp += 800;
    }
    if (input.changelatteorsoyfromset == 2) {
      sumtemp += 800;
    }

    return sumtemp;
  } //valueoflist[i]
  let i = 0;
  let j = 0;
  let temp = [];
  return (
    <div>
      <Card
        raised
        sx={{ margin: "0 auto", padding: "0px" }}
        style={{
          width: "90vw",
          height: "140vw",
          borderRadius: "16px",
          marginTop: "20px",
        }}
      >
        <Button
          onClick={() => {
            Setismodalexittrue();
            if (!ismodalexit) {
              setoptioniced(0);
              setoptionhot(0);
              hide(setoptionitem());
            }
          }}
        >
          닫기
        </Button>
        <Button
          onClick={() => {
            //온클릭이벤트를 가감에써야함;
            console.log("담기선택됨");
            if (showtype === 1) {
              temp = receipt;
              temp = [
                //receipt에 아이템추가로직(기본값으로)
                ...temp,
                {
                  rmenuname: menuname,
                  rmenuprice: menuprice,
                  rmenutype: menutype,
                  rmenuid: menuid,
                  rmenuamount: optionitem,
                  ritemid: counter++,
                  ritemoptiondescription: "",
                  rtemperature: "",
                },
              ];
              console.log("current id = ".concat("", temp.ritemid));
              console.log("current temp state is ");
              console.log(temp);
              setreceipt(temp);
              var temp2 = 0; //가격정산로직(담을때)
              for (i = 0; i < temp.length; i++) {
                temp2 += temp[i].rmenuprice * temp[i].rmenuamount;
                console.log("isNaN rmenuprice".concat("", isNaN(temp2)));
              }
              Setismodalexittrue();
              if (!ismodalexit) {
                hide(setoptionitem());
                console.log(temp2);
                setsum(sum + temp2);
                console.log("isNaN rmenuprice".concat("", isNaN(temp2)));
              }
            } else {
              console.log("옵션있는쪽으로 이동됨");
              console.log("optionhot amount");
              console.log({ optionhot });
              console.log("optioniced amount");
              console.log({ optioniced });
              //////////////////////////////////////////////////////////////////여기꼭수정해라확인해라제발
              //담아질때, 일괄적으로 receipt에 추가됨. 따라서... 각 값을 불러와야하무
              //나는 iced, hot을 받아올수있고.. accordion은 +-에따라 그려지고 ,,
              //시작이다.
              var temp2 = 0;
              console.log({ optioniced });

              temp = receipt;
              for (i = 0; i < optionhot; i++) {
                console.log("looping..");
                console.log(i);
                var optiondescription = genstring(valueoflist[i]);
                var optionsum = sumoption(valueoflist[i]);

                temp = [
                  //receipt에 아이템추가로직(기본값으로)
                  ...temp,
                  {
                    rmenuname: menuname,
                    rmenuprice: menuprice + optionsum,
                    rmenutype: menutype,
                    rmenuid: menuid,
                    rmenuamount: 1,
                    ritemid: counter++,
                    ritemoptiondescription: optiondescription,
                    rtemperature: "HOT",
                  },
                ];

                console.log("current temp state is ");
                console.log(temp);
                temp2 += menuprice + optionsum;
                setsum(sum + temp2);
                console.log("isNaN rmenuprice".concat("", isNaN(temp2)));
                setreceipt(temp);
              }

              for (j = 0; j < optioniced; j++) {
                console.log("looping");
                console.log(j);
                var optiondescription = genstring(valueoflist[j + 25]);
                var optionsum = sumoption(valueoflist[j + 25]);

                temp = [
                  //receipt에 아이템추가로직(기본값으로)
                  ...temp,
                  {
                    rmenuname: menuname,
                    rmenuprice: menuprice + optionsum,
                    rmenutype: menutype,
                    rmenuid: menuid,
                    rmenuamount: 1,
                    ritemid: counter++,
                    ritemoptiondescription: optiondescription,
                    rtemperature: "ICED",
                  },
                ];
                console.log("current temp state is ");
                console.log(temp);
                console.log(temp.ritemoptiondescription);
                temp2 += menuprice + optionsum;
                console.log("isNaN rmenuprice".concat("", isNaN(temp2)));
                setsum(sum + temp2);
                setreceipt(temp);
              }
              console.log("loop ended.");
              Setismodalexittrue();
              if (!ismodalexit) {
                hide(setoptionitem());
                console.log(temp2);

                setoptioniced(0);
                setoptionhot(0);
                ///////////////////////다담고 hot iced 초기화 꼭!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                console.log("receiptchecker");
                console.log(receipt);

                var vl = [];
                for (var k = 0; k < 51; k++) {
                  //각25잔넘지마 ㅠ.
                  vl.push({
                    id: k,
                    ice: "0", //기본 0 얼음많이1 얼음적게2 얼음없이3
                    water: "0", //기본0 물양적게1 물양많이2
                    sweet: "0", //기본0 더달게1 단맛줄임2
                    shotamount: "0", //기본0 샷추가 1,(500원) 연한샷2
                    pulp: "0", //기본0,과육제외1
                    soymilk: "0", //기본 0두유로변경(라떼에서) 1
                    whippedcream: "0", //휘핑추가: 안함 0 휘핑추가1 500원
                    excludesyrup: "0", //기본0 시럽제외1
                    excludetopping: "0", //기본 0 토핑제외1
                    includedalgona: "0", //기본 0 달고나추가1(500원)
                    addhazelnutsyrup: "0", //안함 0 헤이즐넛시럽추가1(500원)
                    addcinnamonsyrup: "0", //안함 0 시나몬시럽추가1(500원)
                    changenormalintosignature: "0", //안함 0 원두변경1(200)
                    changebanaintosignature: "0", //안함 0 원두변경1(바나리카노400)
                    changelatteorsoyfromset: "0", //안함 0 라떼로 변경1 2두유로변경(세트만800)
                  });
                }

                setvalueoflist(vl);
                var vl = [];
              }
            }
          }}
        >
          담기
        </Button>

        <CardContent sx={{ padding: "0px" }}></CardContent>
        <Typography align="center">{menuname}</Typography>
        <Typography align="center">{menuprice}</Typography>

        {showoption[0]}

        <CustomizedAccordions></CustomizedAccordions>
      </Card>
    </div>
  );
}

export default React.memo(Modalboxdesign);
