import React from "react";

function Summer(receipt) {
  var sum = 0;
  for (const [key, value] of Object.entries(receipt)) {
    sum += value.rmenuamount * value.rmenuprice;
  }
  // parent.remove();
  //   element.remove();

  return sum;
}

export default Summer;
