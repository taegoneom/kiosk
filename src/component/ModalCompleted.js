import React from "react";

import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { show, hide } from "react-functional-modal";
import { AppViewStatus } from "./ViewStatus";
import { CustomOptions } from "./Orderdata";
function ModalCompleted() {
  const { SetOrderSelect } = AppViewStatus();
  const { setreceipt, setsum, sum } = CustomOptions();
  return (
    <>
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
          <div>결제가 완료되었습니다.</div>
          <div>{sum} 원</div>

          <Button
            onClick={() => {
              hide();
              setreceipt([]);
              setsum(0);
              SetOrderSelect(1);
            }}
          >
            주문완료
          </Button>
        </Card>
      </div>
    </>
  );
}

export default ModalCompleted;
