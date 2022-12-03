import React, { useState, useEffect } from "react";
import { Box, Button, Card, Typography } from "@material-ui/core";
import { CustomOptions } from "./Orderdata";
import ModalPaymentchecker from "./ModalPaymentchecker";
import { show, hide } from "react-functional-modal";
import Lister from "./Lister";
import Modalonemenu from "./Modalonemenu";
import { CardOverflow } from "@mui/joy";
import { AppViewStatus } from "./ViewStatus";
import ModalGetNumber from "./ModalGetNumber";
function Cart() {
  const {
    setvalueoflist,

    coun,
    setcoun,
    onemenuflag,
    onemenudisable,
    setsum,
    onemenuenable,
    setreceipt,
    receipt,
    sumparser,
    setsumparser,
    sum,
    addsum,
    optionitem,
    optioniced,
    optionhot,
  } = CustomOptions();
  const { Setmanual, value } = AppViewStatus();

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  if (onemenuflag) {
    onemenudisable();
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "38vh",
      }}
    >
      <Card
        raised
        sx={{ margin: "0 auto", padding: "0vw", CardOverflow: "scroll" }}
        style={{
          width: "100vw",
          height: "36vh",
          borderRadius: "2.2vw",
          left: "0vw",
          bottom: "0vh",
          background: "#C7C7C7",
          position: "absolute",
        }}
      >
        <div>
          <Lister></Lister>
        </div>
      </Card>

      <Card
        raised
        sx={{ margin: "0 auto", padding: "0vw" }}
        style={{
          width: "100vw",
          height: "24vh",
          borderRadius: "2.2vw",
          left: "0vw",
          bottom: "0vh",
          background: "#5E5E5E",
          position: "absolute",
        }}
      ></Card>

      <Box position="absolute" style={{ right: "23vw", bottom: "10vh" }}>
        <Typography
          style={{
            fontFamily: "Inter",
            fontStyle: "Medium",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#F06489",
          }}
        >
          결제금액:&nbsp;
        </Typography>
        <Typography
          style={{
            fontFamily: "Inter",
            fontStyle: "Medium",
            fontWeight: 700,
            fontSize: "1rem",

            color: "#FFFFFF",
          }}
        >
          {sum}원
        </Typography>
      </Box>

      <Typography
        style={{
          margin: "1vw 1vw 1vw 1vw",
          width: "18.6vw",
          height: "15.08vw",
          left: "5vw",
          top: "140.75vw",
          position: "absolute",
          fontFamily: "Inter",
          fontStyle: "Medium",
          fontWeight: 700,
          fontSize: "1rem",

          color: "#F5F5F5",
        }}
      >
        총 주문수량<br></br>총 주문금액<br></br> 할인금액
      </Typography>
      <Typography
        style={{
          margin: "1vw 1vw 1vw 1vw",
          width: "16.1vw",
          height: "15.08vw",
          left: "25vw",
          top: "140.75vw",
          position: "absolute",
          fontFamily: "Inter",
          fontStyle: "Medium",
          fontWeight: 700,
          fontSize: "1rem",

          color: "#FFFFFF",
        }}
      >
        {coun}개<br></br>
        {sum}원
      </Typography>

      <Typography
        style={{
          margin: "1vw 1vw 1vw 1vw",
          width: "16.1vw",
          height: "15.08vw",
          left: "25vw",
          top: "151.75vw",
          position: "absolute",
          fontFamily: "Inter",
          fontStyle: "Medium",
          fontWeight: 700,
          fontSize: "1rem",

          color: "#F06489",
        }}
      >
        {0}원
      </Typography>

      <img
        onClick={() => {
          Setmanual(1);
          console.log("changing status");
          console.log(value);
          onemenuenable();
          setreceipt([]);
          setcoun(0);
          setvalueoflist([]);
        }}
        style={{
          position: "absolute",
          width: "19.04vw",
          height: "8.78vw",
          left: "5vw",
          top: "160.75vw",
        }}
        src="images/cancelorder.png"
      ></img>
      <img
        onClick={() => {
          show(
            <div>
              <ModalGetNumber></ModalGetNumber>
            </div>
          );
        }}
        style={{
          position: "absolute",
          width: "35.58vw",
          height: "9.22vw",
          left: "61.36vw",
          top: "160.75vw",
        }}
        src="images/cardpay.png"
      ></img>
      {onemenuflag ? (
        show(
          <div>
            <Modalonemenu></Modalonemenu>
          </div>
        )
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Cart;
