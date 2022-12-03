import React, { useState } from "react";
import zustand from "zustand";
import { MenuStatus } from "./MenuViewStatus";
import { OptionOfMenu } from "./OptionStatus";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { show, hide } from "react-functional-modal";
import Modalboxdesign from "./Modalboxdesign";
import { MenuPriceStatus } from "./PriceStatus";
import { AppViewStatus } from "./ViewStatus";
import { CustomOptions } from "./Orderdata";
import { devtools } from "zustand/middleware";

function MenuSelecterMain() {
  const { receipt, sumparser, setsumparser } = CustomOptions();
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
    Setdessertshoppingbagtrue,
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
  } = OptionOfMenu();

  function optionaction() {
    show(
      <div>
        <Modalboxdesign> </Modalboxdesign>
      </div>
    );
  }
  const {
    valueofmenu,
    SetSuggest,
    SetPopular,
    SetNewMenu,
    SetComboMenu,
    SetCoffee,
    SetDecaf,
    SetMilk,
    SetJuiceDrink,
    SetSmoothie,
    SetTeaAde,
    SetBread,
    SetDessert,
    SetMD,
  } = MenuStatus();

  const { value } = AppViewStatus();

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

  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;

  return (
    <div
      style={{
        overflow: "scroll",
        width: "100vw",
        height: "35vh",
        left: "0.22vw",
        position: "absolute",
        top: "17vh",
      }}
    >
      {valueofmenu === 1 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 1 ? "block" : "none",
            left: "0vw",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignContent={"space-between"}
          >
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/strawberryyogurtdrink.png"
                  onClick={() => {
                    Setstrawberryyogurtdrinktrue();
                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />

                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    딸기요거트드링크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {strawberryyogurtdrink}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/raspberrymacaron.png"
                  onClick={() => {
                    Setraspberrymacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    산딸기마카롱
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {raspberrymacaron}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/peachyogurtdrink.png"
                  onClick={() => {
                    Setpeachyogurtdrinktrue();
                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    복숭아요거트드링크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {peachyogurtdrink}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/newpeachicedtea.png"
                  onClick={() => {
                    Setnewpeachicedteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />

                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    NEW복숭아아이스티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {newpeachicedtea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/jejugreentangerinetea.png"
                  onClick={() => {
                    Setjejugreentangerineteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    제주청귤티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {jejugreentangerinetea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/honeylemontea.png"
                  onClick={() => {
                    Sethoneylemonteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    허니레몬티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {honeylemontea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/almondbonbonmacaron.png"
                  onClick={() => {
                    Setalmondbonbonmacarontrue();
                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    아몬드봉봉마카롱
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {almondbonbonmacaron}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image={
                    value === 3
                      ? "menuimages/coffee/americano.png"
                      : "menuimages/suggest/banaricano.png"
                  }
                  onClick={() => {
                    value === 3 ? Setamericanotrue() : Setbanaricanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {value === 3 ? "아메리카노" : "바나리카노"}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {value === 3 ? americano : banaricano}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/honeygrapefruittea.png"
                  onClick={() => {
                    Sethoneygrapefruitteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    허니자몽티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {honeygrapefruittea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 2 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 2 ? "block" : "none",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/tiramisu.png"
                  onClick={() => {
                    Settiramisutrue();
                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    티라미수
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {tiramisu}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/burntcheesecake.png"
                  onClick={() => {
                    Setburntcheesecaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    번트치즈케이크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {burntcheesecake}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/carrotcake.png"
                  onClick={() => {
                    Setcarrotcaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    당근케이크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {carrotcake}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/hazelnutchocolatecake.png"
                  onClick={() => {
                    Sethazelnutchocolatecaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    align="center"
                    sx={{ margin: "0%", padding: "0%" }}
                  >
                    헤이즐넛초콜릿케이크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {hazelnutchocolatecake}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/oreomilkcake.png"
                  onClick={() => {
                    Setoreomilkcaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    오레오우유케이크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {oreomilkcake}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/strawberrytiramisu.png"
                  onClick={() => {
                    Settiramisustrawberrytrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    딸기티라미수
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {tiramisustrawberry}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 3 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 2 ? "block" : "none",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/tiramisu.png"
                  onClick={() => {
                    Settiramisutrue();
                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    티라미수
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {tiramisu}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/burntcheesecake.png"
                  onClick={() => {
                    Setburntcheesecaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    번트치즈케이크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {burntcheesecake}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/carrotcake.png"
                  onClick={() => {
                    Setcarrotcaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    당근케이크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {carrotcake}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/hazelnutchocolatecake.png"
                  onClick={() => {
                    Sethazelnutchocolatecaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    align="center"
                    sx={{ margin: "0%", padding: "0%" }}
                  >
                    헤이즐넛초콜릿케이크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {hazelnutchocolatecake}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/oreomilkcake.png"
                  onClick={() => {
                    Setoreomilkcaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    오레오우유케이크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {oreomilkcake}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/strawberrytiramisu.png"
                  onClick={() => {
                    Settiramisustrawberrytrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    딸기티라미수
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {tiramisustrawberry}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 4 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 4 ? "block" : "none",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/coffeedonutset.png"
                  onClick={() => {
                    Setcoffeeanddonutsettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    커피&도넛세트
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {coffeeanddonutset}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",

                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/coffeeonionbagelset.png"
                  onClick={() => {
                    Setcoffeeandonionbagelsettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    커피&어니언베이글세트
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {coffeeandonionbagelset}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/coffeeplainbagelset.png"
                  onClick={() => {
                    Setcoffeeandplainbagelsettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    커피&플레인베이글세트
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {coffeeandplainbagelset}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/cuatrocheesegrilledpaniniset.png"
                  onClick={() => {
                    Setquattrocheesegrilledpaninisettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    콰트로치즈그릴드파니니 세트
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {quattrocheesegrilledpaniniset}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/hamcheesemuffinset.png"
                  onClick={() => {
                    Sethamcheessmuffinsettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    햄치즈머핀세트
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {hamcheessmuffinset}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/pepperonigrilledcheesepaniniset.png"
                  onClick={() => {
                    Setpeperonigrilledcheesepaninisettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    페퍼로니그릴드치즈파니니 세트
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {peperonigrilledcheesepaniniset}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/hotchickengrilledcheesepaniniset.png"
                  onClick={() => {
                    Sethotchickengrilledpaninisettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    핫치킨그릴드치즈파니니 세트
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {hotchickengrilledpaniniset}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/macaronset(8+1).png"
                  onClick={() => {
                    Setmacaronsetplustrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    마카롱세트8+1
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {macaronset8plus1}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 5 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 5 ? "block" : "none",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/americano.png"
                  onClick={() => {
                    Setamericanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    아메리카노
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {americano}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/banaricano.png"
                  onClick={() => {
                    Setbanaricanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    바나리카노
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {banaricano}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/cafelatte.png"
                  onClick={() => {
                    Setcafelattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    카페라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {cafelatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/cinnamonlatte.png"
                  onClick={() => {
                    Setcinnamonlattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    시나몬라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {cinnamonlatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/coldbrew.png"
                  onClick={() => {
                    Setcoldbrewtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    콜드브루
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {coldbrew}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/condensedmilkcafelatte.png"
                  onClick={() => {
                    Setcondensedlattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    연유라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {condensedlatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/creamylatte.png"
                  onClick={() => {
                    Setcreamylattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    크리미라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {creamylatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/dolcecoldbrew.png"
                  onClick={() => {
                    Setdolcecoldbrewtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    돌체 콜드브루
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {dolcecoldbrew}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/espresso.png"
                  onClick={() => {
                    Setespressotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    에스프레소
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {espresso}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/honeyamericano.png"
                  onClick={() => {
                    Sethoneyamericanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    허니아메리카노
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {honeyamericano}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/milkcaramelmacchiato.png"
                  onClick={() => {
                    Setmilkcaramelmacciatotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    밀크카라멜마키아또
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {milkcaramelmacciato}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/pistachiocafelatte.png"
                  onClick={() => {
                    Setpistachiocafelattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    피스타치오카페라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {pistachiocafelatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/signatureamericano.png"
                  onClick={() => {
                    Setsignatureamericanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    시그니처아메리카노
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {signatureamericano}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/signaturecoldbrew.png"
                  onClick={() => {
                    Setsignaturecoldbrewtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    시그니처콜드브루
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {signaturecoldbrew}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/vanillacoldbrew.png"
                  onClick={() => {
                    Setvanillacoldbrewtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    바닐라 콜드브루
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {vanillacoldbrew}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/vanillalatte.png"
                  onClick={() => {
                    Setvanillalattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    바닐라라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {vanillalatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 6 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 6 ? "block" : "none",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafamericano.png"
                  onClick={() => {
                    Setdecafamericanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    디카페인 아메리카노
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {decafamericano}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafbanaricano.png"
                  onClick={() => {
                    Setdecafbanaricanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    디카페인 바나리카노
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {decafbanaricano}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafcafelatte.png"
                  onClick={() => {
                    Setdecafcafelattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    디카페인 카페라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {decafcafelatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafcinnamonlatte.png"
                  onClick={() => {
                    Setdecafcinnamonlattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    디카페인 시나몬라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {decafcinnamonlatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafcondensedmilkcafelatte.png"
                  onClick={() => {
                    Setdecafcondensedtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    디카페인 연유라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {decafcondensed}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafcreamylatte.png"
                  onClick={() => {
                    Setdecafcreamylattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    디카페인 크리미라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {decafcreamylatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafespresso.png"
                  onClick={() => {
                    Setdecafespressotrue();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    디카페인 에스프레소
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {decafespresso}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafhoneyamericano.png"
                  onClick={() => {
                    Setdecafhoneyamericanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    디카페인 허니아메리카노
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {decafhoneyamericano}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafmilkcaramelmacchiato.png"
                  onClick={() => {
                    Setdecafmilkcaramelmacciatotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    디카페인 밀크카라멜마키아또
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {decafmilkcaramelmacciato}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafpistachiocafelatte.png"
                  onClick={() => {
                    Setdecafpistachiotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    디카페인 피스타치오카페라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {decafpistachio}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafvanillalatte.png"
                  onClick={() => {
                    Setdecafvanillalattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    디카페인 바닐라라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {decafvanillalatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 7 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 7 ? "block" : "none",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/blacksugarbubbletea.png"
                  onClick={() => {
                    Setblacksugarbubbleteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    흑당버블티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {blacksugarbubbletea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/blacksugarmilktea.png"
                  onClick={() => {}}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    흑당밀크티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {blacksugarmilktea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/chaimilktea.png"
                  onClick={() => {
                    Setchaimilkteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    차이밀크티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {chaimilktea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/classicmilktea.png"
                  onClick={() => {
                    Setclassicmilkteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    클래식밀크티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {classicmilktea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/dalgonalatte.png"
                  onClick={() => {
                    Setdalgonalattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    달고나라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {dalgonalatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/earlgreybubbletea.png"
                  onClick={() => {
                    Setearlgreybubbleteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    얼그레이버블티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {earlgreybubbletea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/earlgreymilktea.png"
                  onClick={() => {
                    Setearlgreymilkteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    얼그레이밀크티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {earlgreymilktea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/greentealatte.png"
                  onClick={() => {
                    Setgreentealattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    녹차라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {greentealatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/oatmeallatte.png"
                  onClick={() => {
                    Setoatmeallattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    오트밀라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {oatmeallatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/pistachiolatte.png"
                  onClick={() => {
                    Setpistachiolattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    피스타치오라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {pistachiolatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/realchoco.png"
                  onClick={() => {
                    Setrealchocotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    리얼초코
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {realchoco}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/realvanillabean.png"
                  onClick={() => {
                    Setrealvanillabeantrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    리얼바닐라빈
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {realvanillabean}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/ripepersimmonlatte.png"
                  onClick={() => {
                    Setripepersimmonlattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    홍시라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {ripepersimmonlatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/royalmilktea.png"
                  onClick={() => {
                    Setroyalmilkteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    로열밀크티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {royalmilktea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/strawberrylatte.png"
                  onClick={() => {
                    Setstrawberrylattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    딸기라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {strawberrylatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/toffeenutlatte.png"
                  onClick={() => {
                    Settoffeenutlattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    토피넛라떼
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {toffeenutlatte}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 8 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 8 ? "block" : "none",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/goldmedalapplejuice.png"
                  onClick={() => {
                    Setgoldmedalapplejuicetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    골드메달 애플쥬스
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {goldmedalapplejuice}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/goldmedalapplesparkling.png"
                  onClick={() => {
                    Setgoldmedalsparklingtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    골드메달 애플스파클링
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {goldmedalsparkling}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/mangojuice.png"
                  onClick={() => {
                    Setmangojuicetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    망고쥬스
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {mangojuice}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/peachyogurtdrink.png"
                  onClick={() => {
                    Setpeachyogurtdrinktrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    복숭아요거트드링크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {peachyogurtdrink}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/perrierlemon.png"
                  onClick={() => {
                    Setperrierlemontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    페리에레몬
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {perrierlemon}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/perrierlime.png"
                  onClick={() => {
                    Setperrierlimetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    페리에라임
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {perrierlime}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/plainyogurtdrink.png"
                  onClick={() => {
                    Setplainyogurtdrinktrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    플레인요거트드링크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {plainyogurtdrink}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/ripepersimmonjuice.png"
                  onClick={() => {
                    Setripepersimmonjuicetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    홍시쥬스
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {ripepersimmonjuice}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/strawberrybananajuice.png"
                  onClick={() => {
                    Setstrawberrybananajuicetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    딸기바나나쥬스
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {strawberrybananajuice}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/strawberryjuice.png"
                  onClick={() => {
                    Setstrawberryjuicetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    딸기쥬스
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {strawberryjuice}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/strawberryyogurtdrink.png"
                  onClick={() => {
                    Setstrawberryyogurtdrinktrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    딸기요거트드링크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {strawberryyogurtdrink}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/tomatofreshjuice.png"
                  onClick={() => {
                    Settomatofreshjuicetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    토마토생과일쥬스
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {tomatofreshjuice}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 9 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 9 ? "block" : "none",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/chocoshake.png"
                  onClick={() => {
                    Setchocoshaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    초코쉐이크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {chocoshake}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/cookie&creambanaccino.png"
                  onClick={() => {
                    Setcookieandcreambanaccinotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    쿠앤크바나치노
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {cookieandcreambanaccino}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/greenteabanaccino.png"
                  onClick={() => {
                    Setgreenteabanaccinotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    녹차바나치노
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {greenteabanaccino}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/javachipbanaccino.png"
                  onClick={() => {
                    Setjavachipbanaccinotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    자바칩바나치노
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {javachipbanaccino}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/lemonstrawberrysmoothie.png"
                  onClick={() => {
                    Setlemonstrawberrysmoothietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    레몬딸기스무디
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {lemonstrawberrysmoothie}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/lemonyogurtsmoothie.png"
                  onClick={() => {
                    Setlemonyogurtsmoothietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    레몬요거트스무디
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {lemonyogurtsmoothie}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/mangosmoothie.png"
                  onClick={() => {
                    Setmangosmoothietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    망고스무디
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {mangosmoothie}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/mintchocolatebanaccino.png"
                  onClick={() => {
                    Setmintchocobanaccinotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    민트초코바나치노
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {mintchocobanaccino}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/strawberrypeachsmoothie.png"
                  onClick={() => {
                    Setstrawberrypeachsmoothietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    딸기복숭아스무디
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {strawberrypeachsmoothie}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/strawberrysmoothie.png"
                  onClick={() => {
                    Setstrawberrysmoothietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    딸기스무디
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {strawberrysmoothie}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/vanillashake.png"
                  onClick={() => {
                    Setvanillashaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    바닐라쉐이크
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {vanillashake}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 10 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 10 ? "block" : "none",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/chamomilelycheetea.png"
                  onClick={() => {
                    Setchamomilelycheeteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    캐모마일리치티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {chamomilelycheetea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/chamomiletea.png"
                  onClick={() => {
                    Setchamomiletrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    캐모마일
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {chamomile}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/citronappletea.png"
                  onClick={() => {
                    Setyujaappleteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    유자애플티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {yujaappletea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/earlgreytea.png"
                  onClick={() => {
                    Setearlgreytrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    얼그레이
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {earlgrey}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/gingerlemontea.png"
                  onClick={() => {
                    Setgingerlemonteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    생강레몬티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {gingerlemontea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/grapefruitade.png"
                  onClick={() => {
                    Setgrapefruitadetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    자몽에이드
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {grapefruitade}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/grapefruithibiscustea.png"
                  onClick={() => {
                    Setgrapefruithibiscusteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    자몽히비스커스티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {grapefruithibiscustea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/greengrapeade.png"
                  onClick={() => {
                    Setgreengrapeadetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    청포도에이드
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {greengrapeade}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/hibiscustea.png"
                  onClick={() => {
                    Sethibiscustrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    히비스커스
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {hibiscus}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/honeygrapefruittea.png"
                  onClick={() => {
                    Sethoneygrapefruitteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    허니자몽티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {honeygrapefruittea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/honeylemontea.png"
                  onClick={() => {
                    Sethoneylemonteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    허니레몬티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {honeylemontea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/jejugreentangerinetea.png"
                  onClick={() => {
                    Setjejugreentangerineteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    제주청귤티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {jejugreentangerinetea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/jujubeblackherbaltea.png"
                  onClick={() => {
                    Setjujubeblackherbalteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    대추쌍화차
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {jujubeblackherbaltea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/lemonade.png"
                  onClick={() => {
                    Setlemonadetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    레몬에이드
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {lemonade}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/lemonpepperminttea.png"
                  onClick={() => {
                    Setlemonpeppermintteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    레몬페퍼민트티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {lemonpepperminttea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/mintyujapeartea.png"
                  onClick={() => {
                    Setmintyujapearteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    민트유자페어티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {mintyujapeartea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/newpeachicedtea.png"
                  onClick={() => {
                    Setnewpeachicedteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    NEW복숭아아이스티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {newpeachicedtea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/peachade.png"
                  onClick={() => {
                    Setpeachadetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    복숭아에이드
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {peachade}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/pearbellflowerroottea.png"
                  onClick={() => {
                    Setpearbellflowerrootteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    배도라지차
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {pearbellflowerroottea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/peppermint tea.png"
                  onClick={() => {
                    Setpepperminttrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    페퍼민트
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {peppermint}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 11 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 11 ? "block" : "none",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/clubsandwich.png"
                  onClick={() => {
                    Setclubsandwichtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    클럽샌드위치
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {clubsandwich}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/custarddonut.png"
                  onClick={() => {
                    Setcustarddonuttrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    커스터드도넛
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {custarddonut}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/eggbaconsandwich.png"
                  onClick={() => {
                    Seteggbaconsandwichtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    에그베이컨샌드위치
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {eggbaconsandwich}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/hamcheeseenglishmuffin.png"
                  onClick={() => {
                    Sethamcheeseenglishmuffintrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    햄치즈잉글리시머핀
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {hamcheeseenglishmuffin}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/hotchickengrilledcheesepanini.png"
                  onClick={() => {
                    Sethotchickengrilledpaninitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    핫치킨그릴드치즈파니니
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {hotchickengrilledpanini}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/jalapenobulgogisandwich.png"
                  onClick={() => {
                    Setjalapenobulgogisandwichtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    할라피뇨불고기샌드위치
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {jalapenobulgogisandwich}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/onionbagel.png"
                  onClick={() => {
                    Setonionbageltrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    어니언베이글
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {onionbagel}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/paulycreamcheese.png"
                  onClick={() => {
                    Setpaulycreamcheesetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    폴리크림치즈
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {paulycreamcheese}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/peperonigrilledcheesepanini.png"
                  onClick={() => {
                    Setpeperonigrilledcheesepaninitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    페퍼로니그릴드치즈파니니
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {peperonigrilledcheesepanini}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/plainbagel.png"
                  onClick={() => {
                    Setplainbageltrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    플레인베이글
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {plainbagel}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/quatrocheesegrilledpanini.png"
                  onClick={() => {
                    Setquattrocheesegrilledpaninitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    콰트로치즈그릴드파니니
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {quattrocheesegrilledpanini}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/tunasandwich.png"
                  onClick={() => {
                    Settunasandwichtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    튜나샌드위치
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {tunasandwich}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 12 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 12 ? "block" : "none",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/almondbonbonmacaron.png"
                  onClick={() => {
                    Setalmondbonbonmacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    아몬드봉봉마카롱
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {almondbonbonmacaron}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/americancookie.png"
                  onClick={() => {
                    Setamericancookietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    아메리칸쿠키
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {americancookie}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/chocochipcookie.png"
                  onClick={() => {
                    Setchocochipcookietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    초코칩쿠키
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {chocochipcookie}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/chocolatemacaron.png"
                  onClick={() => {
                    Setchocolatemacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    초콜릿마카롱
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {chocolatemacaron}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/cookeandcreammacaron.png"
                  onClick={() => {
                    Setcookieandcreammacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    쿠키앤크림마카롱
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {cookieandcreammacaron}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/dessertshoppingbag.png"
                  onClick={() => {
                    Setdessertshoppingbagtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    디저트쇼핑백
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {dessertshoppingbag}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/greenteawhitecookie.png"
                  onClick={() => {
                    Setgreenteawhitecookietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    말차화이트쿠키
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {greenteawhitecookie}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/injeolmimacaron.png"
                  onClick={() => {
                    Setinjeolmimacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    인절미마카롱
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {injeolmimacaron}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/marlenkacake(cocoa).png"
                  onClick={() => {
                    Setmarlenkacake_cocoatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    말렌카케이크(코코아)
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {marlenkacake_cocoa}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/marlenkacake(walnut).png"
                  onClick={() => {
                    Setmarlenkacake_walnuttrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    말렌카케이크(호두)
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {marlenkacake_walnut}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/milkmacaron.png"
                  onClick={() => {
                    Setmilkmacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    우유마카롱
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {milkmacaron}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/mintchocolatemacaron.png"
                  onClick={() => {
                    Setmintchocomacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    민트초코마카롱
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {mintchocomacaron}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/raspberrymacaron.png"
                  onClick={() => {
                    Setraspberrymacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    산딸기마카롱
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {raspberrymacaron}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/vanillamacaron.png"
                  onClick={() => {
                    Setvanillamacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    바닐라마카롱
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {vanillamacaron}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/yellowcheesemacaron.png"
                  onClick={() => {
                    Setyellowcheesemacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    황치즈마카롱
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {yellowcheesemacaron}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 13 ? (
        <div
          style={{
            width: "100%",
            left: "0.22vw",
            top: "0vw",
            display: valueofmenu === 13 ? "block" : "none",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/9900point.png"
                  onClick={() => {
                    Setpoint_9900true();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    바나프레소 상품권 9,900원권
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {point_9900}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/10000point.png"
                  onClick={() => {
                    Setpoint_10000true();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    바나프레소 상품권 1만원권
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {point_10000}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/30000point.png"
                  onClick={() => {
                    Setpoint_30000true();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    바나프레소 상품권 3만원권
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {point_30000}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/50000point.png"
                  onClick={() => {
                    Setpoint_50000true();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    바나프레소 상품권 5만원권
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {point_50000}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/acrylickeyringatype.png"
                  onClick={() => {
                    Setacrylkeyring_typeatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    아크릴키링_A타입
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {acrylkeyring_typea}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/acrylickeyringbtype.png"
                  onClick={() => {
                    Setacrylkeyring_typebtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    아크릴키링_B타입
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {acrylkeyring_typeb}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/acrylickeyringctype.png"
                  onClick={() => {
                    Setacrylkeyring_typectrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    아크릴키링_C타입
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {acrylkeyring_typec}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/acrylickeyringdtype.png"
                  onClick={() => {
                    Setacrylkeyring_typedtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    아크릴키링_D타입
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {acrylkeyring_typed}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/dripbagblend.png"
                  onClick={() => {
                    Setdripbag_blendtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    드립백(블렌드)
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {dripbag_blend}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/ethifacekeyring.png"
                  onClick={() => {
                    Setethifacekeyringtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    에티얼굴키링
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {ethifacekeyring}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/ethimonitorplush.png"
                  onClick={() => {
                    Setethimonitordolltrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    에티모니터인형
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {ethimonitordoll}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/maskingtapebabybokthi.png"
                  onClick={() => {
                    Setmaskingtape_babybokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    마스킹테이프_베이비복티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {maskingtape_babybokthi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/maskingtapebabyethi.png"
                  onClick={() => {
                    Setmaskingtape_babyethitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    마스킹테이프_베이비에티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {maskingtape_babyethi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/memopadbabybokthi.png"
                  onClick={() => {
                    Setmemopad_babybokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    메모패드_베이비복티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {memopad_babybokthi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/memopadbabyethi.png"
                  onClick={() => {
                    Setmemopad_babyethitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    메모패드_베이비에티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {memopad_babyethi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/mousepadbabybokthi.png"
                  onClick={() => {
                    Setmousepad_babybokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    마우스패드_베이비복티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {mousepad_babybokthi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/mousepadbabyethi.png"
                  onClick={() => {
                    Setmousepad_babyethitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    마우스패드_베이비에티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {mousepad_babyethi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/notebabyethibokthi.png"
                  onClick={() => {
                    Setnote_babyethiandbokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    노트_베이비에티&복티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {note_babyethiandbokthi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/pouchbabyethibokthi.png"
                  onClick={() => {
                    Setpouch_babyethiandbokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    파우치_베이비에티&복티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {pouch_babyethiandbokthi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/removablestickerbabybokthi.png"
                  onClick={() => {
                    Setremovablesticker_babybokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    리무버블스티커_베이비복티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {removablesticker_babybokthi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/removablestickerbabyethi.png"
                  onClick={() => {
                    Setremovablesticker_babyethitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    리무버블스티커_베이비에티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {removablesticker_babyethi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/removablestickerbabyethibokthi.png"
                  onClick={() => {
                    Setremovablesticker_babyethiandbokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    리무버블스티커_베이비에티&복티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {removablesticker_babyethiandbokthi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/reusabletumblerpink.png"
                  onClick={() => {
                    Setreusabletubler_pinktrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    리유저블텀블러(핑크)
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {reusabletubler_pink}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/reusabletumblerwhite.png"
                  onClick={() => {
                    Setreusabletubler_whitetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    리유저블텀블러(화이트)
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {reusabletubler_white}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/smarttok_babyethi.png"
                  onClick={() => {
                    Setsmarttok_babyethitrue();
                    optionaction();
                  }}
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    스마트톡_베이비에티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {smarttok_babyethi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0vw" }}
                style={{
                  width: "24vw",
                  height: "18vh",
                  background: "#F5F5F5",
                  borderRadius: "0.73vw",
                  marginTop: "1.46vw",
                  boxShadow: "0vw 0vw red",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/smarttokbabybokthi.png"
                  onClick
                  sx={{ padding: "0vw", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0vw" }}>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                    }}
                    align="center"
                  >
                    스마트톡_베이비복티
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Semi Bold",
                      fontWeight: 600,
                      fontSize: "1.46vw",
                      lineHeight: "1.76vw",
                      textAlign: "center",
                      color: "#47D1B7",
                    }}
                    align="center"
                  >
                    {smarttok_babybokthi}원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default MenuSelecterMain;
