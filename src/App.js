import React, { useEffect } from "react";

import { AppViewStatus } from "./component/ViewStatus";
import MenuSelecterMain from "./component/MenuSelecterMain";
import Cart from "./component/Cart";
import { CustomOptions } from "./component/Orderdata";
import Modalonemenu from "./component/Modalonemenu";
import { show } from "react-functional-modal";
import KioskMain from "./component/KioskMain";
import KioskHeader from "./component/KioskHeader";
var flag = true;

function App() {
  // use it in the function, get all the students
  const { value } = AppViewStatus();
  const { valueoflist, setvalueoflist } = CustomOptions();
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  }
  React.useEffect(() => {
    setScreenSize();
  });

  ///////////////////////////////////////////
  if (flag) {
    var vl = [];
    for (var k = 0; k < 51; k++) {
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
    console.log(valueoflist);
    flag = false;
    console.log(flag);
  }
  return (
    <div
      style={{
        display: "absolute",
        direction: "column",
      }}
    >
      {value === 1 ? (
        <div style={{}}>
          <div
            style={{
              display: "absolute",
              direction: "row",
            }}
          >
            {KioskHeader()}
          </div>
          <body>
            <KioskMain></KioskMain>
          </body>
        </div>
      ) : (
        <p></p>
      )}

      {value === 2 ? (
        <div
          className="container"
          style={{
            display: "absolute",
            justifyContent: "center",
            alignItems: "center",
            absoluteDirection: "column",
          }}
        >
          <div
            style={{
              display: "absolute",
              direction: "column",
            }}
          >
            {KioskHeader()}
          </div>
          <MenuSelecterMain
            className="item"
            style={{ absoluteDirection: "column", justifyContent: "center" }}
          />
          <Cart
            className="item"
            style={{ absoluteDirection: "column", justifyContent: "center" }}
          />
        </div>
      ) : (
        <p></p>
      )}
      {value === 3 ? (
        <div
          className="container"
          style={{
            display: "absolute",
            justifyContent: "center",
            alignItems: "center",
            absoluteDirection: "column",
          }}
        >
          <div style={{ display: "absolute" }}>{KioskHeader()}</div>
          <MenuSelecterMain
            className="item"
            style={{ absoluteDirection: "column", justifyContent: "center" }}
          />
          <body>
            <Cart
              className="item"
              style={{ absoluteDirection: "column", justifyContent: "center" }}
            />
          </body>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
