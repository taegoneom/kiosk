import React from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { show, hide } from "react-functional-modal";
import ModalCompleted from "./ModalCompleted";
import { CustomOptions } from "./Orderdata";
import Lister from "./Lister";
import ModalGetNumber from "./ModalGetNumber";

function ModalPaymentchecker() {
  const { sum } = CustomOptions();
  return (
    <>
      <div>
        <Card
          raised
          sx={{ margin: "0 auto", padding: "0vw" }}
          style={{
            width: "90vw",
            height: "45vh",
            borderRadius: "1.17vw",
            marginTop: "1.46vw",
          }}
        >
          <Button
            onClick={() => {
              hide();
            }}
          >
            이전으로
          </Button>
          <div>최종결제금액 : {sum}</div>
          <Button
            onClick={() => {
              hide();
              show(
                <div>
                  <ModalCompleted></ModalCompleted>
                </div>
              );
            }}
          >
            카드를 끝까지 밀어넣어주세요.
          </Button>
        </Card>
      </div>
    </>
  );
}

export default ModalPaymentchecker;
