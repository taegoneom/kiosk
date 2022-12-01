import React, { useEffect } from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import { AppViewStatus } from "./component/ViewStatus";
import MenuSelecterMain from "./component/MenuSelecterMain";
import Cart from "./component/Cart";
import { CustomOptions } from "./component/Orderdata";

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

  useEffect(() => {
    document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  if (flag) {
    var vl = [];
    for (var k = 0; k < 51; k++) {
      //천잔넘으면 좃된다.
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
    /////////////////////////////////////
    document.documentElement.addEventListener(
      "touchstart",
      function (event) {
        //확대방지코드
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      },
      false
    );

    var lastTouchEnd = 0;

    document.documentElement.addEventListener(
      "touchend",
      function (event) {
        //확대방지코드
        var now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      },
      false
    );

    ///////////////////////////////////////////

    setvalueoflist(vl);
    var vl = [];
    console.log(valueoflist);
    flag = false;
    console.log(flag);
  }
  return (
    <div>
      {value === 1 ? (
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {console.log(valueoflist)}
          <Header className="item" style={{}} />
          <Content
            className="item"
            style={{ flexDirection: "row", justifyContent: "center" }}
          />
        </div>
      ) : (
        <p></p>
      )}

      {value === 2 ? (
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Header
            className="item"
            style={{ flexDirection: "row", justifyContent: "center" }}
          />
          <MenuSelecterMain
            className="item"
            style={{ flexDirection: "row", justifyContent: "center" }}
          />
          <Cart
            className="item"
            style={{ flexDirection: "row", justifyContent: "center" }}
          />
        </div>
      ) : (
        <p></p>
      )}
      {value === 3 ? (
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Header
            className="item"
            style={{ flexDirection: "row", justifyContent: "center" }}
          />
          <MenuSelecterMain
            className="item"
            style={{ flexDirection: "row", justifyContent: "center" }}
          />
          <Cart
            className="item"
            style={{ flexDirection: "row", justifyContent: "center" }}
          />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
