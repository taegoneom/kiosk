import React from "react";
import { CustomOptions } from "./Orderdata";
import { Button, Typography } from "@material-ui/core";
import { ReactDOM } from "react";
import Summer from "./Summer";
function Lister() {
  const { receipt, setreceipt, sum, setsum, coun, setcoun } = CustomOptions();
  let flag = true;
  if (receipt == undefined) {
    flag = false;
    return <div></div>;
  } else {
    flag = true;
  }
  var oh = 0;

  return (
    <>
      <div>
        <div>
          <ul
            overflow="scroll"
            style={{
              height: "20vh",
              padding: "0px",
              marginLeft: "10vw",
              display: "list-item",
              textAlign: "left",
              overflow: "hidden",
              overflowY: "scroll",
            }}
          >
            {receipt.map((item) => {
              return (
                <ul
                  style={{
                    listStyle: "decimal",
                    fontFamily: "Inter",
                    fontStyle: "Regular",
                    fontWeight: 400,
                    fontSize: " 1rem",
                    color: "#FFFFFF",
                  }}
                >
                  {item.rtemperature === "HOT"
                    ? "따듯한 "
                    : item.rtemperature === "ICED"
                    ? "시원한 "
                    : ""}
                  {""}
                  {item.rmenuname} {item.rmenuamount} {item.rmenuprice}{" "}
                  <Button
                    id="item.ritemid"
                    onClick={() => {
                      var element = document.getElementById("item.ritemid");
                      var parent = element.parentNode;
                      var menuid = item.rmenuid;

                      var temp = receipt;
                      for (const [key, value] of Object.entries(temp)) {
                        //엔트리 삭제
                        if (value.rmenuid === item.rmenuid) {
                          temp.splice(key, 1);
                          setreceipt(temp);
                          break;
                        }
                      }

                      var a = 0;

                      var temp = receipt;
                      for (const [key, value] of Object.entries(temp)) {
                        a++;
                      }
                      var b = Summer(receipt);
                      setsum(b);
                      setcoun(a);
                      // parent.remove();
                      //   element.remove();
                    }}
                  >
                    삭제
                  </Button>
                  <br></br>
                  <Typography
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "Regular",
                      fontWeight: 400,
                      fontSize: "1.32vw",
                      lineHeight: "1.68vw",
                      color: "#FFFFFF",
                    }}
                  >
                    {item.ritemoptiondescription != "" ? "옵션 - " : ""}{" "}
                    {item.ritemoptiondescription}
                  </Typography>
                </ul>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Lister;
