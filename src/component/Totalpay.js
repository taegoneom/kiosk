import React from "react";
import { CustomOptions } from "./Orderdata";

function Totalpay() {
  const { sum } = CustomOptions();

  return <div>{sum}원</div>;
}

export default Totalpay;
