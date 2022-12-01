import create from "zustand";

// set method로 상태 변경 가능
const OptionStatus = create((set) => ({
  ///////////////////////cake////////////////////////
  istiramisu: false,
  Settiramisutrue: () => set({ istiramisu: true }),
  Settiramisufalse: () => set({ istiramisu: false }),

  istiramisustrawberry: false,
  Settiramisustrawberrytrue: () => set({ istiramisustrawberry: true }),
  Settiramisustrawberryfalse: () => set({ istiramisustrawberry: false }),

  ishazelnutchocolatecake: false,
  Sethazelnutchocolatecaketrue: () => set({ ishazelnutchocolatecake: true }),
  Sethazelnutchocolatecakefalse: () => set({ ishazelnutchocolatecake: false }),

  iscarrotcake: false,
  Setcarrotcaketrue: () => set({ iscarrotcake: true }),
  Setcarrotcakefalse: () => set({ iscarrotcake: false }),

  isburntcheesecake: false,
  Setburntcheesecaketrue: () => set({ isburntcheesecake: true }),
  Setburntcheesecakefalse: () => set({ isburntcheesecake: false }),

  isoreomilkcake: false,
  Setoreomilkcaketrue: () => set({ isoreomilkcake: true }),
  Setoreomilkcakefalse: () => set({ isoreomilkcake: false }),

  //////////////////////combo/////////////////////////
  iscoffeeanddonutset: false,
  Setcoffeeanddonutsettrue: () => set({ iscoffeeanddonutset: true }),
  Setcoffeeanddonutsetfalse: () => set({ iscoffeeanddonutset: false }),

  iscoffeeandonionbagelset: false,
  Setcoffeeandonionbagelsettrue: () => set({ iscoffeeandonionbagelset: true }),
  Setcoffeeandonionbagelsetfalse: () =>
    set({ iscoffeeandonionbagelset: false }),

  iscoffeeandplainbagelset: false,
  Setcoffeeandplainbagelsettrue: () => set({ iscoffeeandplainbagelset: true }),
  Setcoffeeandplainbagelsetfalse: () =>
    set({ iscoffeeandplainbagelset: false }),

  isquattrocheesegrilledpaniniset: false,
  Setquattrocheesegrilledpaninisettrue: () =>
    set({ isquattrocheesegrilledpaniniset: true }),
  Setquattrocheesegrilledpaninisetfalse: () =>
    set({ isquattrocheesegrilledpaniniset: false }),

  ishamcheessmuffinset: false,
  Sethamcheessmuffinsettrue: () => set({ ishamcheessmuffinset: true }),
  Sethamcheessmuffinsetfalse: () => set({ ishamcheessmuffinset: false }),

  ispeperonigrilledcheesepaniniset: false,
  Setpeperonigrilledcheesepaninisettrue: () =>
    set({ ispeperonigrilledcheesepaniniset: true }),
  Setpeperonigrilledcheesepaninisetfalse: () =>
    set({ ispeperonigrilledcheesepaniniset: false }),

  ishotchickengrilledpaniniset: false,
  Sethotchickengrilledpaninisettrue: () =>
    set({ ishotchickengrilledpaniniset: true }),
  Sethotchickengrilledpaninisetfalse: () =>
    set({ ishotchickengrilledpaniniset: false }),

  ismacaronsetplus: false, //excluded bag and + price.
  Setmacaronsetplustrue: () => set({ ismacaronsetplus: true }),
  Setmacaronsetplusfalse: () => set({ ismacaronsetplus: false }),

  //////////////////////coffee/////////////////////////
  isamericano: false,
  Setamericanotrue: () => set({ isamericano: true }),
  Setamericanofalse: () => set({ isamericano: false }),

  isbanaricano: false,
  Setbanaricanotrue: () => set({ isbanaricano: true }),
  Setbanaricanofalse: () => set({ isbanaricano: false }),

  iscafelatte: false,
  Setcafelattetrue: () => set({ iscafelatte: true }),
  Setcafelattefalse: () => set({ iscafelatte: false }),

  iscinnamonlatte: false,
  Setcinnamonlattetrue: () => set({ iscinnamonlatte: true }),
  Setcinnamonlattefalse: () => set({ iscinnamonlatte: false }),

  iscoldbrew: false,
  Setcoldbrewtrue: () => set({ iscoldbrew: true }),
  Setcoldbrewfalse: () => set({ iscoldbrew: false }),

  iscondensedlatte: false,
  Setcondensedlattetrue: () => set({ iscondensedlatte: true }),
  Setcondensedlattefalse: () => set({ iscondensedlatte: false }),

  iscreamylatte: false,
  Setcreamylattetrue: () => set({ iscreamylatte: true }),
  Setcreamylattefalse: () => set({ iscreamylatte: false }),

  isdolcecoldbrew: false,
  Setdolcecoldbrewtrue: () => set({ isdolcecoldbrew: true }),
  Setdolcecoldbrewfalse: () => set({ isdolcecoldbrew: false }),

  isespresso: false,
  Setespressotrue: () => set({ isespresso: true }),
  Setespressofalse: () => set({ isespresso: false }),

  ishoneyamericano: false,
  Sethoneyamericanotrue: () => set({ ishoneyamericano: true }),
  Sethoneyamericanofalse: () => set({ ishoneyamericano: false }),

  ismilkcaramelmacciato: false,
  Setmilkcaramelmacciatotrue: () => set({ ismilkcaramelmacciato: true }),
  Setmilkcaramelmacciatofalse: () => set({ ismilkcaramelmacciato: false }),

  ispistachiocafelatte: false,
  Setpistachiocafelattetrue: () => set({ ispistachiocafelatte: true }),
  Setpistachiocafelattefalse: () => set({ ispistachiocafelatte: false }),

  issignatureamericano: false,
  Setsignatureamericanotrue: () => set({ issignatureamericano: true }),
  Setsignatureamericanofalse: () => set({ issignatureamericano: false }),

  issignaturecoldbrew: false,
  Setsignaturecoldbrewtrue: () => set({ issignaturecoldbrew: true }),
  Setsignaturecoldbrewfalse: () => set({ issignaturecoldbrew: false }),

  isvanillacoldbrew: false,
  Setvanillacoldbrewtrue: () => set({ isvanillacoldbrew: true }),
  Setvanillacoldbrewfalse: () => set({ isvanillacoldbrew: false }),

  isvanillalatte: false,
  Setvanillalattetrue: () => set({ isvanillalatte: true }),
  Setvanillalattefalse: () => set({ isvanillalatte: false }),

  //////////////////////decaf/////////////////////////
  isdecafamericano: false,
  Setdecafamericanotrue: () => set({ isdecafamericano: true }),
  Setdecafamericanofalse: () => set({ isdecafamericano: false }),

  isdecafbanaricano: false,
  Setdecafbanaricanotrue: () => set({ isdecafbanaricano: true }),
  Setdecafbanaricanofalse: () => set({ isdecafbanaricano: false }),

  isdecafcafelatte: false,
  Setdecafcafelattetrue: () => set({ isdecafcafelatte: true }),
  Setdecafcafelattefalse: () => set({ isdecafcafelatte: false }),

  isdecafcinnamonlatte: false,
  Setdecafcinnamonlattetrue: () => set({ isdecafcinnamonlatte: true }),
  Setdecafcinnamonlattefalse: () => set({ isdecafcinnamonlatte: false }),

  isdecafcondensed: false,
  Setdecafcondensedtrue: () => set({ isdecafcondensed: true }),
  Setdecafcondensedfalse: () => set({ isdecafcondensed: false }),

  isdecafcreamylatte: false,
  Setdecafcreamylattetrue: () => set({ isdecafcreamylatte: true }),
  Setdecafcreamylattefalse: () => set({ isdecafcreamylatte: false }),

  isdecafespresso: false,
  Setdecafespressotrue: () => set({ isdecafespresso: true }),
  Setdecafespressofalse: () => set({ isdecafespresso: false }),

  isdecafhoneyamericano: false,
  Setdecafhoneyamericanotrue: () => set({ isdecafhoneyamericano: true }),
  Setdecafhoneyamericanofalse: () => set({ isdecafhoneyamericano: false }),

  isdecafmilkcaramelmacciato: false,
  Setdecafmilkcaramelmacciatotrue: () =>
    set({ decafmilkcaramelmacciato: true }),
  Setdecafmilkcaramelmacciatofalse: () =>
    set({ decafmilkcaramelmacciato: false }),

  isdecafpistachio: false,
  Setdecafpistachiotrue: () => set({ isdecafpistachio: true }),
  Setdecafpistachiofalse: () => set({ isdecafpistachio: false }),

  isdecafvanillalatte: false,
  Setdecafvanillalattetrue: () => set({ isdecafvanillalatte: true }),
  Setdecafvanillalattefalse: () => set({ isdecafvanillalatte: false }),

  //////////////////////milk/////////////////////////

  isblacksugarbubbletea: false,
  Setblacksugarbubbleteatrue: () => set({ isblacksugarbubbletea: true }),
  Setblacksugarbubbleteafalse: () => set({ isblacksugarbubbletea: false }),

  isblacksugarmilktea: false,
  Setblacksugarmilkteatrue: () => set({ isblacksugarmilktea: true }),
  Setblacksugarmilkteafalse: () => set({ isblacksugarmilktea: false }),

  ischaimilktea: false,
  Setchaimilkteatrue: () => set({ ischaimilktea: true }),
  Setchaimilkteafalse: () => set({ ischaimilktea: false }),

  isclassicmilktea: false,
  Setclassicmilkteatrue: () => set({ isclassicmilktea: true }),
  Setclassicmilkteafalse: () => set({ isclassicmilktea: false }),

  isdalgonalatte: false,
  Setdalgonalattetrue: () => set({ isdalgonalatte: true }),
  Setdalgonalattefalse: () => set({ isdalgonalatte: false }),

  isearlgreybubbletea: false,
  Setearlgreybubbleteatrue: () => set({ isearlgreybubbletea: true }),
  Setearlgreybubbleteafalse: () => set({ isearlgreybubbletea: false }),

  isearlgreymilktea: false,
  Setearlgreymilkteatrue: () => set({ isearlgreymilktea: true }),
  Setearlgreymilkteafalse: () => set({ isearlgreymilktea: false }),

  isgreentealatte: false,
  Setgreentealattetrue: () => set({ isgreentealatte: true }),
  Setgreentealattefalse: () => set({ isgreentealatte: false }),

  isoatmeallatte: false,
  Setoatmeallattetrue: () => set({ isoatmeallatte: true }),
  Setoatmeallattefalse: () => set({ isoatmeallatte: false }),

  ispistachiolatte: false,
  Setpistachiolattetrue: () => set({ ispistachiolatte: true }),
  Setpistachiolattefalse: () => set({ ispistachiolatte: false }),

  isrealchoco: false,
  Setrealchocotrue: () => set({ isrealchoco: true }),
  Setrealchocofalse: () => set({ isrealchoco: false }),

  isrealvanillabean: false,
  Setrealvanillabeantrue: () => set({ isrealvanillabean: true }),
  Setrealvanillabeanfalse: () => set({ isrealvanillabean: false }),

  isripepersimmonlatte: false,
  Setripepersimmonlattetrue: () => set({ isripepersimmonlatte: true }),
  Setripepersimmonlattefalse: () => set({ isripepersimmonlatte: false }),

  isroyalmilktea: false,
  Setroyalmilkteatrue: () => set({ isroyalmilktea: true }),
  Setroyalmilkteafalse: () => set({ isroyalmilktea: false }),

  isstrawberrylatte: false,
  Setstrawberrylattetrue: () => set({ isstrawberrylatte: true }),
  Setstrawberrylattefalse: () => set({ isstrawberrylatte: false }),

  istoffeenutlatte: false,
  Settoffeenutlattetrue: () => set({ istoffeenutlatte: true }),
  Settoffeenutlattefalse: () => set({ istoffeenutlatte: false }),

  //////////////////////juicedrink/////////////////////////

  isgoldmedalapplejuice: false, //from web
  Setgoldmedalapplejuicetrue: () => set({ isgoldmedalapplejuice: true }),
  Setgoldmedalapplejuicefalse: () => set({ isgoldmedalapplejuice: false }),

  isgoldmedalsparkling: false, // from web
  Setgoldmedalsparklingtrue: () => set({ isgoldmedalsparkling: true }),
  Setgoldmedalsparklingfalse: () => set({ isgoldmedalsparkling: false }),

  ismangojuice: false,
  Setmangojuicetrue: () => set({ ismangojuice: true }),
  Setmangojuicefalse: () => set({ ismangojuice: false }),

  ispeachyogurtdrink: false,
  Setpeachyogurtdrinktrue: () => set({ ispeachyogurtdrink: true }),
  Setpeachyogurtdrinkfalse: () => set({ ispeachyogurtdrink: false }),

  isperrierlemon: false,
  Setperrierlemontrue: () => set({ isperrierlemon: true }),
  Setperrierlemonfalse: () => set({ isperrierlemon: false }),

  isperrierlime: false,
  Setperrierlimetrue: () => set({ isperrierlime: true }),
  Setperrierlimefalse: () => set({ isperrierlime: false }),

  isplainyogurtdrink: false,
  Setplainyogurtdrinktrue: () => set({ isplainyogurtdrink: true }),
  Setplainyogurtdrinkfalse: () => set({ isplainyogurtdrink: false }),

  isripepersimmonjuice: false,
  Setripepersimmonjuicetrue: () => set({ isripepersimmonjuice: true }),
  Setripepersimmonjuicefalse: () => set({ isripepersimmonjuice: false }),

  isstrawberrybananajuice: false,
  Setstrawberrybananajuicetrue: () => set({ isstrawberrybananajuice: true }),
  Setstrawberrybananajuicefalse: () => set({ isstrawberrybananajuice: false }),

  isstrawberryjuice: false,
  Setstrawberryjuicetrue: () => set({ isstrawberryjuice: true }),
  Setstrawberryjuicefalse: () => set({ isstrawberryjuice: false }),

  isstrawberryyogurtdrink: false,
  Setstrawberryyogurtdrinktrue: () => set({ isstrawberryyogurtdrink: true }),
  Setstrawberryyogurtdrinkfalse: () => set({ isstrawberryyogurtdrink: false }),

  istomatofreshjuice: false,
  Settomatofreshjuicetrue: () => set({ istomatofreshjuice: true }),
  Settomatofreshjuicefalse: () => set({ istomatofreshjuice: false }),

  //////////////////////smothiebanaccino/////////////////////////

  ischocoshake: false,
  Setchocoshaketrue: () => set({ ischocoshake: true }),
  Setchocoshakefalse: () => set({ ischocoshake: false }),

  iscookieandcreambanaccino: false,
  Setcookieandcreambanaccinotrue: () =>
    set({ iscookieandcreambanaccino: true }),
  Setcookieandcreambanaccinofalse: () =>
    set({ iscookieandcreambanaccino: false }),

  isgreenteabanaccino: false,
  Setgreenteabanaccinotrue: () => set({ isgreenteabanaccino: true }),
  Setgreenteabanaccinofalse: () => set({ isgreenteabanaccino: false }),

  isjavachipbanaccino: false,
  Setjavachipbanaccinotrue: () => set({ isjavachipbanaccino: true }),
  Setjavachipbanaccinofalse: () => set({ isjavachipbanaccino: false }),

  islemonstrawberrysmoothie: false,
  Setlemonstrawberrysmoothietrue: () =>
    set({ islemonstrawberrysmoothie: true }),
  Setlemonstrawberrysmoothiefalse: () =>
    set({ islemonstrawberrysmoothie: false }),

  islemonyogurtsmoothie: false,
  Setlemonyogurtsmoothietrue: () => set({ islemonyogurtsmoothie: true }),
  Setlemonyogurtsmoothiefalse: () => set({ islemonyogurtsmoothie: false }),

  ismangosmoothie: false,
  Setmangosmoothietrue: () => set({ ismangosmoothie: true }),
  Setmangosmoothiefalse: () => set({ ismangosmoothie: false }),

  ismintchocobanaccino: false,
  Setmintchocobanaccinotrue: () => set({ ismintchocobanaccino: true }),
  Setmintchocobanaccinofalse: () => set({ ismintchocobanaccino: false }),

  isstrawberrypeachsmoothie: false,
  Setstrawberrypeachsmoothietrue: () =>
    set({ isstrawberrypeachsmoothie: true }),
  Setstrawberrypeachsmoothiefalse: () =>
    set({ isstrawberrypeachsmoothie: false }),

  isstrawberrysmoothie: false,
  Setstrawberrysmoothietrue: () => set({ isstrawberrysmoothie: true }),
  Setstrawberrysmoothiefalse: () => set({ isstrawberrysmoothie: false }),

  isvanillashake: false,
  Setvanillashaketrue: () => set({ isvanillashake: true }),
  Setvanillashakefalse: () => set({ isvanillashake: false }),

  //////////////////////teaade/////////////////////////

  ischamomilelycheetea: false,
  Setchamomilelycheeteatrue: () => set({ ischamomilelycheetea: true }),
  Setchamomilelycheeteafalse: () => set({ ischamomilelycheetea: false }),

  ischamomile: false,
  Setchamomiletrue: () => set({ ischamomile: true }),
  Setchamomilefalse: () => set({ ischamomile: false }),

  isyujaappletea: false,
  Setyujaappleteatrue: () => set({ isyujaappletea: true }),
  Setyujaappleteafalse: () => set({ isyujaappletea: false }),

  isearlgrey: false,
  Setearlgreytrue: () => set({ isearlgrey: true }),
  Setearlgreyfalse: () => set({ isearlgrey: false }),

  isgingerlemontea: false,
  Setgingerlemonteatrue: () => set({ isgingerlemontea: true }),
  Setgingerlemonteafalse: () => set({ isgingerlemontea: false }),

  isgrapefruitade: false,
  Setgrapefruitadetrue: () => set({ isgrapefruitade: true }),
  Setgrapefruitadefalse: () => set({ isgrapefruitade: false }),

  isgrapefruithibiscustea: false,
  Setgrapefruithibiscusteatrue: () => set({ isgrapefruithibiscustea: true }),
  Setgrapefruithibiscusteafalse: () => set({ isgrapefruithibiscustea: false }),

  isgreengrapeade: false,
  Setgreengrapeadetrue: () => set({ isgreengrapeade: true }),
  Setgreengrapeadefalse: () => set({ isgreengrapeade: false }),

  ishibiscus: false,
  Sethibiscustrue: () => set({ ishibiscus: true }),
  Sethibiscusfalse: () => set({ ishibiscus: false }),

  ishoneygrapefruittea: false,
  Sethoneygrapefruitteatrue: () => set({ ishoneygrapefruittea: true }),
  Sethoneygrapefruitteafalse: () => set({ ishoneygrapefruittea: false }),

  ishoneylemontea: false,
  Sethoneylemonteatrue: () => set({ ishoneylemontea: true }),
  Sethoneylemonteafalse: () => set({ ishoneylemontea: false }),

  isjejugreentangerinetea: false,
  Setjejugreentangerineteatrue: () => set({ isjejugreentangerinetea: true }),
  Setjejugreentangerineteafalse: () => set({ isjejugreentangerinetea: false }),

  isjujubeblackherbaltea: false,
  Setjujubeblackherbalteatrue: () => set({ isjujubeblackherbaltea: true }),
  Setjujubeblackherbalteafalse: () => set({ isjujubeblackherbaltea: false }),

  islemonade: false,
  Setlemonadetrue: () => set({ islemonade: true }),
  Setlemonadefalse: () => set({ islemonade: false }),

  islemonpepperminttea: false,
  Setlemonpeppermintteatrue: () => set({ islemonpepperminttea: true }),
  Setlemonpeppermintteafalse: () => set({ islemonpepperminttea: false }),

  ismintyujapeartea: false,
  Setmintyujapearteatrue: () => set({ ismintyujapeartea: true }),
  Setmintyujapearteafalse: () => set({ ismintyujapeartea: false }),

  isnewpeachicedtea: false,
  Setnewpeachicedteatrue: () => set({ isnewpeachicedtea: true }),
  Setnewpeachicedteafalse: () => set({ isnewpeachicedtea: false }),

  ispeachade: false,
  Setpeachadetrue: () => set({ ispeachade: true }),
  Setpeachadefalse: () => set({ ispeachade: false }),

  ispearbellflowerroottea: false,
  Setpearbellflowerrootteatrue: () => set({ ispearbellflowerroottea: true }),
  Setpearbellflowerrootteafalse: () => set({ ispearbellflowerroottea: false }),

  ispeppermint: false,
  Setpepperminttrue: () => set({ ispeppermint: true }),
  Setpeppermintfalse: () => set({ ispeppermint: false }),

  //////////////////////bread/////////////////////////

  isclubsandwich: false,
  Setclubsandwichtrue: () => set({ isclubsandwich: true }),
  Setclubsandwichfalse: () => set({ isclubsandwich: false }),

  iscustarddonut: false,
  Setcustarddonuttrue: () => set({ iscustarddonut: true }),
  Setcustarddonutfalse: () => set({ iscustarddonut: false }),

  iseggbaconsandwich: false,
  Seteggbaconsandwichtrue: () => set({ iseggbaconsandwich: true }),
  Seteggbaconsandwichfalse: () => set({ iseggbaconsandwich: false }),

  ishamcheeseenglishmuffin: false,
  Sethamcheeseenglishmuffintrue: () => set({ ishamcheeseenglishmuffin: true }),
  Sethamcheeseenglishmuffinfalse: () =>
    set({ ishamcheeseenglishmuffin: false }),

  ishotchickengrilledpanini: false,
  Sethotchickengrilledpaninitrue: () =>
    set({ ishotchickengrilledpanini: true }),
  Sethotchickengrilledpaninifalse: () =>
    set({ ishotchickengrilledpanini: false }),

  isjalapenobulgogisandwich: false,
  Setjalapenobulgogisandwichtrue: () =>
    set({ isjalapenobulgogisandwich: true }),
  Setjalapenobulgogisandwichfalse: () =>
    set({ isjalapenobulgogisandwich: false }),

  isonionbagel: false,
  Setonionbageltrue: () => set({ isonionbagel: true }),
  Setonionbagelfalse: () => set({ isonionbagel: false }),

  ispaulycreamcheese: false,
  Setpaulycreamcheesetrue: () => set({ ispaulycreamcheese: true }),
  Setpaulycreamcheesefalse: () => set({ ispaulycreamcheese: false }),

  ispeperonigrilledcheesepanini: false,
  Setpeperonigrilledcheesepaninitrue: () =>
    set({ ispeperonigrilledcheesepanini: true }),
  Setpeperonigrilledcheesepaninifalse: () =>
    set({ ispeperonigrilledcheesepanini: false }),

  isplainbagel: false,
  Setplainbageltrue: () => set({ isplainbagel: true }),
  Setplainbagelfalse: () => set({ isplainbagel: false }),

  isquattrocheesegrilledpanini: false,
  Setquattrocheesegrilledpaninitrue: () =>
    set({ isquattrocheesegrilledpanini: true }),
  Setquattrocheesegrilledpaninifalse: () =>
    set({ isquattrocheesegrilledpanini: false }),

  istunasandwich: false,
  Settunasandwichtrue: () => set({ istunasandwich: true }),
  Settunasandwichfalse: () => set({ istunasandwich: false }),

  //////////////////////dessert/////////////////////////

  isalmondbonbonmacaron: false,
  Setalmondbonbonmacarontrue: () => set({ isalmondbonbonmacaron: true }),
  Setalmondbonbonmacaronfalse: () => set({ isalmondbonbonmacaron: false }),

  isamericancookie: false,
  Setamericancookietrue: () => set({ isamericancookie: true }),
  Setamericancookiefalse: () => set({ isamericancookie: false }),

  ischocochipcookie: false,
  Setchocochipcookietrue: () => set({ ischocochipcookie: true }),
  Setchocochipcookiefalse: () => set({ ischocochipcookie: false }),

  ischocolatemacaron: false,
  Setchocolatemacarontrue: () => set({ ischocolatemacaron: true }),
  Setchocolatemacaronfalse: () => set({ ischocolatemacaron: false }),

  iscookieandcreammacaron: false,
  Setcookieandcreammacarontrue: () => set({ iscookieandcreammacaron: true }),
  Setcookieandcreammacaronfalse: () => set({ iscookieandcreammacaron: false }),

  isdessertshoppingbag: false,
  Setdessertshoppingbagtrue: () => set({ isdessertshoppingbag: true }),
  Setdessertshoppingbagfalse: () => set({ isdessertshoppingbag: false }),

  isgreenteawhitecookie: false,
  Setgreenteawhitecookietrue: () => set({ isgreenteawhitecookie: true }),
  Setgreenteawhitecookiefalse: () => set({ isgreenteawhitecookie: false }),

  isinjeolmimacaron: false,
  Setinjeolmimacarontrue: () => set({ isinjeolmimacaron: true }),
  Setinjeolmimacaronfalse: () => set({ isinjeolmimacaron: false }),

  ismarlenkacake_cocoa: false,
  Setmarlenkacake_cocoatrue: () => set({ ismarlenkacake_cocoa: true }),
  Setmarlenkacake_cocoafalse: () => set({ ismarlenkacake_cocoa: false }),

  ismarlenkacake_walnut: false,
  Setmarlenkacake_walnuttrue: () => set({ ismarlenkacake_walnut: true }),
  Setmarlenkacake_walnutfalse: () => set({ ismarlenkacake_walnut: false }),

  ismilkmacaron: false,
  Setmilkmacarontrue: () => set({ ismilkmacaron: true }),
  Setmilkmacaronfalse: () => set({ ismilkmacaron: false }),

  ismintchocomacaron: false,
  Setmintchocomacarontrue: () => set({ ismintchocomacaron: true }),
  Setmintchocomacaronfalse: () => set({ ismintchocomacaron: false }),

  israspberrymacaron: false,
  Setraspberrymacarontrue: () => set({ israspberrymacaron: true }),
  Setraspberrymacaronfalse: () => set({ israspberrymacaron: false }),

  isvanillamacaron: false,
  Setvanillamacarontrue: () => set({ isvanillamacaron: true }),
  Setvanillamacaronfalse: () => set({ isvanillamacaron: false }),

  isyellowcheesemacaron: false,
  Setyellowcheesemacarontrue: () => set({ isyellowcheesemacaron: true }),
  Setyellowcheesemacaronfalse: () => set({ isyellowcheesemacaron: false }),

  //////////////////////MD/////////////////////////

  ispoint_9900: false,
  Setpoint_9900true: () => set({ ispoint_9900: true }),
  Setpoint_9900false: () => set({ ispoint_9900: false }),

  ispoint_10000: false,
  Setpoint_10000true: () => set({ ispoint_10000: true }),
  Setpoint_10000false: () => set({ ispoint_10000: false }),

  ispoint_30000: false,
  Setpoint_30000true: () => set({ ispoint_30000: true }),
  Setpoint_30000false: () => set({ ispoint_30000: false }),

  ispoint_50000: false,
  Setpoint_50000true: () => set({ ispoint_50000: true }),
  Setpoint_50000false: () => set({ ispoint_50000: false }),

  isacrylkeyring_typea: false, //smart store price
  Setacrylkeyring_typeatrue: () => set({ isacrylkeyring_typea: true }),
  Setacrylkeyring_typeafalse: () => set({ isacrylkeyring_typea: false }),

  isacrylkeyring_typeb: false, //smart store price
  Setacrylkeyring_typebtrue: () => set({ isacrylkeyring_typeb: true }),
  Setacrylkeyring_typebfalse: () => set({ isacrylkeyring_typeb: false }),

  isacrylkeyring_typec: false, //smart store price
  Setacrylkeyring_typectrue: () => set({ isacrylkeyring_typec: true }),
  Setacrylkeyring_typecfalse: () => set({ isacrylkeyring_typec: false }),

  isacrylkeyring_typed: false, //smart store price
  Setacrylkeyring_typedtrue: () => set({ isacrylkeyring_typed: true }),
  Setacrylkeyring_typedfalse: () => set({ isacrylkeyring_typed: false }),

  isdripbag_blend: false,
  Setdripbag_blendtrue: () => set({ isdripbag_blend: true }),
  Setdripbag_blendfalse: () => set({ isdripbag_blend: false }),

  isethifacekeyring: false,
  Setethifacekeyringtrue: () => set({ isethifacekeyring: true }),
  Setethifacekeyringfalse: () => set({ isethifacekeyring: false }),

  isethimonitordoll: false, //smart store price
  Setethimonitordolltrue: () => set({ isethimonitordoll: true }),
  Setethimonitordollfalse: () => set({ isethimonitordoll: false }),

  ismaskingtape_babybokthi: false, //smart store price
  Setmaskingtape_babybokthitrue: () => set({ ismaskingtape_babybokthi: true }),
  Setmaskingtape_babybokthifalse: () =>
    set({ ismaskingtape_babybokthi: false }),

  ismaskingtape_babyethi: false, //smart store price
  Setmaskingtape_babyethitrue: () => set({ ismaskingtape_babyethi: true }),
  Setmaskingtape_babyethifalse: () => set({ ismaskingtape_babyethi: false }),

  ismemopad_babybokthi: false, //smart store price
  Setmemopad_babybokthitrue: () => set({ ismemopad_babybokthi: true }),
  Setmemopad_babybokthifalse: () => set({ ismemopad_babybokthi: false }),

  ismemopad_babyethi: false, //smart store price
  Setmemopad_babyethitrue: () => set({ ismemopad_babyethi: true }),
  Setmemopad_babyethifalse: () => set({ ismemopad_babyethi: false }),

  ismousepad_babybokthi: false, //smart store price
  Setmousepad_babybokthitrue: () => set({ ismousepad_babybokthi: true }),
  Setmousepad_babybokthifalse: () => set({ ismousepad_babybokthi: false }),

  ismousepad_babyethi: false, //smart store price
  Setmousepad_babyethitrue: () => set({ ismousepad_babyethi: true }),
  Setmousepad_babyethifalse: () => set({ ismousepad_babyethi: false }),

  isnote_babyethiandbokthi: false, //smart store price
  Setnote_babyethiandbokthitrue: () => set({ isnote_babyethiandbokthi: true }),
  Setnote_babyethiandbokthifalse: () =>
    set({ isnote_babyethiandbokthi: false }),

  ispouch_babyethiandbokthi: false, //smart store price
  Setpouch_babyethiandbokthitrue: () =>
    set({ ispouch_babyethiandbokthi: true }),
  Setpouch_babyethiandbokthifalse: () =>
    set({ ispouch_babyethiandbokthi: false }),

  isremovablesticker_babybokthi: false, //smart store price
  Setremovablesticker_babybokthitrue: () =>
    set({ isremovablesticker_babybokthi: true }),
  Setremovablesticker_babybokthifalse: () =>
    set({ isremovablesticker_babybokthi: false }),

  isremovablesticker_babyethi: false, //smart store price
  Setremovablesticker_babyethitrue: () =>
    set({ isremovablesticker_babyethi: true }),
  Setremovablesticker_babyethifalse: () =>
    set({ isremovablesticker_babyethi: false }),

  isremovablesticker_babyethiandbokthi: false, //smart store price
  Setremovablesticker_babyethiandbokthitrue: () =>
    set({ isremovablesticker_babyethiandbokthi: true }),
  Setremovablesticker_babyethiandbokthifalse: () =>
    set({ isremovablesticker_babyethiandbokthi: false }),

  isreusabletubler_pink: false,
  Setreusabletubler_pinktrue: () => set({ isreusabletubler_pink: true }),
  Setreusabletubler_pinkfalse: () => set({ isreusabletubler_pink: false }),

  isreusabletubler_white: false,
  Setreusabletubler_whitetrue: () => set({ isreusabletubler_white: true }),
  Setreusabletubler_whitefalse: () => set({ isreusabletubler_white: false }),

  issmarttok_babyethi: false,
  Setsmarttok_babyethitrue: () => set({ issmarttok_babyethi: true }),
  Setsmarttok_babyethifalse: () => set({ issmarttok_babyethi: false }),

  issmarttok_babybokthi: false, //smart store price
  Setsmarttok_babybokthitrue: () => set({ issmarttok_babybokthi: true }),
  Setsmarttok_babybokthifalse: () => set({ issmarttok_babybokthi: false }),

  ismodalexit: false,
  Setismodalexittrue: () => set({ ismodalexit: true }),
  Setismodalexitfalse: () => set({ ismodalexit: false }),
}));

//const { value, setinput } = viewstatus();

export const OptionOfMenu = OptionStatus;
