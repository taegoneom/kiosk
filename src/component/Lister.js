import React from "react";
import { CustomOptions } from "./Orderdata";
import { Button } from "@material-ui/core";
import { ReactDOM } from "react";
function Lister() {
  const { receipt, setreceipt, sum, setsum } = CustomOptions();
  let flag = true;
  if (receipt == undefined) {
    flag = false;
    return <div></div>;
  } else {
    flag = true;
  }
  return (
    <>
      <ul>
        {receipt.map((item) => {
          return (
            <li>
              {console.log(item.ritemid)}
              {item.rtemperature} {item.rmenuname} {item.rmenuamount}{" "}
              {item.rmenuprice}
              <br></br>
              {item.ritemoptiondescription}
              <Button
                id="item.ritemid"
                onClick={() => {
                  setsum(0);
                  var element = document.getElementById("item.ritemid");
                  var parent = element.parentNode;
                  var menuid = item.rmenuid;

                  var temp = receipt;
                  for (const [key, value] of Object.entries(temp)) {
                    if (value.rmenuid === item.rmenuid) {
                      temp.splice(key, 1);
                      setsum(sum - value.rmenuprice * value.rmenuamount);
                      setreceipt(temp);
                      break;
                    }
                  }

                  // parent.remove();
                  //   element.remove();
                }}
              >
                삭제
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Lister;
