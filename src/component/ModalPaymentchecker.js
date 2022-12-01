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
          sx={{ margin: "0 auto", padding: "0px" }}
          style={{
            width: "90vw",
            height: "140vw",
            borderRadius: "16px",
            marginTop: "20px",
          }}
        >
          <Lister></Lister>
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
                  <ModalGetNumber></ModalGetNumber>
                </div>
              );
            }}
          >
            결제하기(카드)
          </Button>
        </Card>
      </div>
    </>
  );
}

export default ModalPaymentchecker;
