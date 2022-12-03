import React, { useEffect } from "react";

import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { show, hide } from "react-functional-modal";
import { AppViewStatus } from "./ViewStatus";
import { CustomOptions } from "./Orderdata";
function ModalCompleted() {
  const { SetOrderSelect } = AppViewStatus();
  const { setreceipt, setsum, sum, setcoun } = CustomOptions();

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <>
      <div>
        <Card
          raised
          sx={{ margin: "0 auto", padding: "0vw" }}
          style={{
            width: "90vw",
            height: "140vw",
            borderRadius: "1.17vw",
            marginTop: "1.46vw",
          }}
        >
          <div>결제가 완료되었습니다.</div>
          <div>{sum} 원</div>

          <Button
            onClick={() => {
              hide();
              setreceipt([]);
              setsum(0);
              setcoun(0);
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
