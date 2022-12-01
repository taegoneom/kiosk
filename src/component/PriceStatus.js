import create from "zustand";

// set method로 상태 변경 가능
const PriceStatus = create((set) => ({
  ///////////////////////cake////////////////////////
  tiramisu: 5500,
  tiramisustrawberry: 6000,
  hazelnutchocolatecake: 6000,
  carrotcake: 5500,
  burntcheesecake: 6000,
  oreomilkcake: 6000,

  //////////////////////combo/////////////////////////
  coffeeanddonutset: 3900,
  coffeeandonionbagelset: 3900,

  coffeeandplainbagelset: 3900,
  quattrocheesegrilledpaniniset: 5900,
  hamcheessmuffinset: 5200,
  peperonigrilledcheesepaniniset: 5900,
  hotchickengrilledpaniniset: 5900,
  macaronset8plus1: 16800, //excluded bag and +1 price.
  //////////////////////coffee/////////////////////////
  americano: 2500,
  banaricano: 4000,
  cafelatte: 3300,
  cinnamonlatte: 4300,
  coldbrew: 3300,
  condensedlatte: 4300,
  creamylatte: 3800,
  dolcecoldbrew: 4500,
  espresso: 2500,
  honeyamericano: 3000,
  milkcaramelmacciato: 4300,
  pistachiocafelatte: 4300,
  signatureamericano: 2700,
  signaturecoldbrew: 3500,
  vanillacoldbrew: 4000,
  vanillalatte: 3800,
  //////////////////////decaf/////////////////////////
  decafamericano: 2800,
  decafbanaricano: 4600,
  decafcafelatte: 3600,
  decafcinnamonlatte: 4600,
  decafcondensed: 4600,
  decafcreamylatte: 4100,
  decafespresso: 2800,
  decafhoneyamericano: 3300,
  decafmilkcaramelmacciato: 4600,
  decafpistachio: 4600,
  decafvanillalatte: 4100,
  //////////////////////milk/////////////////////////
  blacksugarbubbletea: 4300,
  blacksugarmilktea: 3800,
  chaimilktea: 4000,
  classicmilktea: 4000,
  dalgonalatte: 3800,
  earlgreybubbletea: 4300,
  earlgreymilktea: 3800,
  greentealatte: 3800,
  oatmeallatte: 3500,
  pistachiolatte: 3800,
  realchoco: 3500,
  realvanillabean: 3500,
  ripepersimmonlatte: 4000,
  royalmilktea: 4000,
  strawberrylatte: 4000,
  toffeenutlatte: 3800,
  //////////////////////juicedrink/////////////////////////
  goldmedalapplejuice: 3500, //from web
  goldmedalsparkling: 3500, // from web
  mangojuice: 4000,
  peachyogurtdrink: 4300,
  perrierlemon: 3300,
  perrierlime: 3300,
  plainyogurtdrink: 3500,
  ripepersimmonjuice: 4000,
  strawberrybananajuice: 4300,
  strawberryjuice: 4000,
  strawberryyogurtdrink: 4000,
  tomatofreshjuice: 4300,
  //////////////////////smothiebanaccino/////////////////////////
  chocoshake: 4500,
  cookieandcreambanaccino: 4500,
  greenteabanaccino: 4500,
  javachipbanaccino: 4500,
  lemonstrawberrysmoothie: 4000,
  lemonyogurtsmoothie: 4000,
  mangosmoothie: 4000,
  mintchocobanaccino: 4500,
  strawberrypeachsmoothie: 4000,
  strawberrysmoothie: 4000,
  vanillashake: 4500,
  //////////////////////teaade/////////////////////////
  chamomilelycheetea: 3500,
  chamomile: 2800,
  yujaappletea: 4000,
  earlgrey: 2800,
  gingerlemontea: 4000,
  grapefruitade: 3800,
  grapefruithibiscustea: 3800,
  greengrapeade: 3800,
  hibiscus: 2800,
  honeygrapefruittea: 3800,
  honeylemontea: 3800,
  jejugreentangerinetea: 3500,
  jujubeblackherbaltea: 4000,
  lemonade: 3800,
  lemonpepperminttea: 3800,
  mintyujapeartea: 3500,
  newpeachicedtea: 3500,
  peachade: 4300,
  pearbellflowerroottea: 4000,
  peppermint: 2800,
  //////////////////////bread/////////////////////////
  clubsandwich: 4500,
  custarddonut: 1900,
  eggbaconsandwich: 5000,
  hamcheeseenglishmuffin: 3200,
  hotchickengrilledpanini: 3900,
  jalapenobulgogisandwich: 5000,
  onionbagel: 1900,
  paulycreamcheese: 900,
  peperonigrilledcheesepanini: 3900,
  plainbagel: 1900,
  quattrocheesegrilledpanini: 3900,
  tunasandwich: 4500,
  //////////////////////dessert/////////////////////////
  almondbonbonmacaron: 2100,
  americancookie: 1300,
  chocochipcookie: 1300,
  chocolatemacaron: 2100,
  cookieandcreammacaron: 2100,
  dessertshoppingbag: 500,
  greenteawhitecookie: 1300,
  injeolmimacaron: 2100,
  marlenkacake_cocoa: 5500,
  marlenkacake_walnut: 5500,
  milkmacaron: 2100,
  mintchocomacaron: 2100,
  raspberrymacaron: 2100,
  vanillamacaron: 2100,
  yellowcheesemacaron: 2100,
  //////////////////////MD/////////////////////////
  point_9900: 9900,
  point_10000: 10000,
  point_30000: 30000,
  point_50000: 50000,
  acrylkeyring_typea: 3900, //smart store price
  acrylkeyring_typeb: 3900, //smart store price
  acrylkeyring_typec: 3900, //smart store price
  acrylkeyring_typed: 3900, //smart store price
  dripbag_blend: 6500,
  ethifacekeyring: 6000,
  ethimonitordoll: 9000, //smart store price
  maskingtape_babybokthi: 4500, //smart store price
  maskingtape_babyethi: 4500, //smart store price
  memopad_babybokthi: 2000, //smart store price
  memopad_babyethi: 2000, //smart store price
  mousepad_babybokthi: 5000, //smart store price
  mousepad_babyethi: 5000, //smart store price
  note_babyethiandbokthi: 8000, //smart store price
  pouch_babyethiandbokthi: 12000, //smart store price
  removablesticker_babybokthi: 1500, //smart store price
  removablesticker_babyethi: 1500, //smart store price
  removablesticker_babyethiandbokthi: 1500, //smart store price
  reusabletubler_pink: 4500,
  reusabletubler_white: 4500,
  smarttok_babyethi: 9000,
  smarttok_babybokthi: 9000, //smart store price
}));

//const { value, setinput } = viewstatus();

export const MenuPriceStatus = PriceStatus;
