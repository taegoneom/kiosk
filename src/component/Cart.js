import React from "react";
import { Button, Card } from "@material-ui/core";
import { CustomOptions } from "./Orderdata";
import ModalPaymentchecker from "./ModalPaymentchecker";
import { show, hide } from "react-functional-modal";
import { CartProvider } from "react-use-cart";
import ReactDOM from "react-dom";
import Lister from "./Lister";
function Cart() {
  const { receipt, sumparser, setsumparser, sum, addsum } = CustomOptions();

  return (
    <div>
      <div
        className="box-container"
        style={{ display: "flex", flexdirection: "row" }}
      >
        <div
          className="box1"
          style={{
            position: "flex-start",
            width: window.innerWidth * 0.6,
            height: "18vh",
            borderWidth: "3px",
            borderStyle: "solid",
          }}
        >
          <Lister></Lister>
        </div>
        <div
          className="box2"
          style={{
            position: "flex-end",
            width: window.innerWidth * 0.35,
            height: "18vh",
            borderWidth: "3px",
            borderStyle: "solid",
          }}
        >
          <div>총 금액</div>
          <div>{sum}</div>
          <Button
            onClick={() => {
              show(
                <div>
                  <ModalPaymentchecker></ModalPaymentchecker>
                </div>
              );
            }}
          >
            결제하기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
