import React, { useEffect } from "react";
import zustand from "zustand";

import {
  CardActions,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { AppViewStatus } from "./ViewStatus";
import { MenuStatus } from "./MenuViewStatus";
import { createTheme } from "@mui/material";
import { elementAcceptingRef } from "@mui/utils";

function KioskHeader() {
  // use it in the function, get all the students
  const { value, SetOrderSelect } = AppViewStatus();

  const {
    valueofmenu,
    SetSuggest,
    SetCake,
    SetNewMenu,
    SetComboMenu,
    SetCoffee,
    SetDecaf,
    SetMilk,
    SetJuiceDrink,
    SetSmoothie,
    SetTeaAde,
    SetBread,
    SetDessert,
    SetMD,
  } = MenuStatus();

  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;

  var input = [];
  var input2 = [];
  for (var i = 0; i < 15; i++) {
    input.push("black");
    input2.push("white");
  }

  if (valueofmenu == 1) {
    input[1] = "white";
    input2[1] = "pink";
  } else if (valueofmenu == 2) {
    input[2] = "white";
    input2[2] = "pink";
  } else if (valueofmenu == 3) {
    input[3] = "white";
    input2[3] = "pink";
  } else if (valueofmenu == 4) {
    input[4] = "white";
    input2[4] = "pink";
  } else if (valueofmenu == 5) {
    input[5] = "white";
    input2[5] = "pink";
  } else if (valueofmenu == 6) {
    input[6] = "white";
    input2[6] = "pink";
  } else if (valueofmenu == 7) {
    input[7] = "white";
    input2[7] = "pink";
  } else if (valueofmenu == 8) {
    input[8] = "white";
    input2[8] = "pink";
  } else if (valueofmenu == 9) {
    input[9] = "white";
    input2[9] = "pink";
  } else if (valueofmenu == 10) {
    input[10] = "white";
    input2[10] = "pink";
  } else if (valueofmenu == 11) {
    input[11] = "white";
    input2[11] = "pink";
  } else if (valueofmenu == 12) {
    input[12] = "white";
    input2[12] = "pink";
  } else if (valueofmenu == 13) {
    input[13] = "white";
    input2[13] = "pink";
  } else;

  function Modalonemenu() {
    useEffect(() => {
      document.body.style = `overflow: hidden`;
      return () => (document.body.style = `overflow: auto`);
    }, []);
  }

  return (
    <div style={{ top: 0, left: 0, bottom: "15vw" }}>
      {value === 1 ? (
        <>
          <img
            src="images/greenbanalogo.png"
            style={{
              width: "200px",
              height: "35px",
              top: 0,
              margin: "5vw 0vw 15vw 2.02vw",
            }}
          />

          <img
            src="images/header_words.png"
            style={{
              position: "relative",
              width: "90vw",
              height: "18vw ",
              margin: "10vw 5vw 15vw 5vw",
            }}
          />
        </>
      ) : (
        <div></div>
      )}

      {value === 2 || value === 3 ? (
        <div
          style={{
            top: 0,
            left: 0,
            position: "absolute",
          }}
        >
          <Card
            raised
            sx={{ margin: "0 auto", padding: "0vw" }}
            style={{
              backgroundColor: "#F5F5F5",
              width: "10.18vw",
              height: "3.15vw",
              borderRadius: "1.46vw",

              boxShadow: "0vw 0vw red",
            }}
          >
            <img
              src="images/leftarrow.png"
              style={{
                width: "1vh",
                height: "2.64vw",
              }}
            ></img>
            <Typography
              onClick={SetOrderSelect}
              style={{
                width: "6.22vw",
                height: "1.76vw",

                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",

                textAlign: "center",
              }}
            >
              처음으로
            </Typography>
          </Card>

          <h1
            style={{
              fontFamily: "inter",
              fontStyle: "Bold",

              textAlign: "center",

              fontWeight: 700,
            }}
          >
            주문하기
          </h1>
          <div style={{ display: "flex" }}>
            <Button
              onClick={SetSuggest}
              sx={{ color: input[1], backgroundColor: input2[1], id: "idx1" }}
              style={{
                color: input[1],
                backgroundColor: input2[1],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",
                textAlign: "center",

                width: "1vw",
                height: "2vw",
                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              추천
            </Button>
            <Button
              onClick={SetCake}
              sx={{ color: input[2], backgroundColor: input2[2], id: "idx2" }}
              style={{
                color: input[2],
                backgroundColor: input2[2],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",

                textAlign: "center",

                width: "1vw",
                height: "2vw",

                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              케이크
            </Button>
            <Button
              onClick={SetNewMenu}
              sx={{ color: input[3], backgroundColor: input2[3], id: "idx3" }}
              style={{
                color: input[3],
                backgroundColor: input2[3],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",

                textAlign: "center",

                width: "1vw",
                height: "2vw",

                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              신메뉴
            </Button>
            <Button
              onClick={SetComboMenu}
              sx={{ color: input[4], backgroundColor: input2[4], id: "idx4" }}
              style={{
                color: input[4],
                backgroundColor: input2[4],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",
                textAlign: "center",

                width: "1vw",
                height: "2vw",
                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              세트
            </Button>
            <Button
              onClick={SetCoffee}
              sx={{ color: input[5], backgroundColor: input2[5], id: "idx5" }}
              style={{
                color: input[5],
                backgroundColor: input2[5],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",

                textAlign: "center",

                width: "1vw",
                height: "2vw",
                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              커피
            </Button>
            <Button
              onClick={SetDecaf}
              sx={{ color: input[6], backgroundColor: input2[6], id: "idx6" }}
              style={{
                color: input[6],
                backgroundColor: input2[6],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",

                textAlign: "center",

                width: "1vw",
                height: "2vw",

                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              디카페인커피
            </Button>
            <Button
              onClick={SetMilk}
              sx={{ color: input[7], backgroundColor: input2[7], id: "idx7" }}
              style={{
                color: input[7],
                backgroundColor: input2[7],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",
                textAlign: "center",

                width: "1vw",
                height: "2vw",
                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              밀크티&amp;라떼
            </Button>
          </div>
          <div style={{ display: "flex" }}>
            <Button
              onClick={SetJuiceDrink}
              sx={{ color: input[8], backgroundColor: input2[8], id: "idx8" }}
              style={{
                color: input[8],
                backgroundColor: input2[8],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",

                textAlign: "center",

                width: "1vw",
                height: "2vw",

                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              주스&amp;드링크
            </Button>
            <Button
              onClick={SetSmoothie}
              sx={{ color: input[9], backgroundColor: input2[9], id: "idx9" }}
              style={{
                color: input[9],
                backgroundColor: input2[9],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",

                textAlign: "center",

                width: "1vw",
                height: "2vw",

                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              스무디
            </Button>
            <Button
              onClick={SetTeaAde}
              sx={{
                color: input[10],
                backgroundColor: input2[10],
                id: "idx10",
              }}
              style={{
                color: input[10],
                backgroundColor: input2[10],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",

                textAlign: "center",

                width: "1vw",
                height: "2vw",

                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              차&amp;에이드
            </Button>
            <Button
              onClick={SetBread}
              sx={{
                color: input[11],
                backgroundColor: input2[11],
                id: "idx11",
              }}
              style={{
                color: input[11],
                backgroundColor: input2[11],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",

                textAlign: "center",

                width: "1vw",
                height: "2vw",

                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              브레드
            </Button>
            <Button
              onClick={SetDessert}
              sx={{
                color: input[12],
                backgroundColor: input2[12],
                id: "idx12",
              }}
              style={{
                color: input[12],
                backgroundColor: input2[12],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",

                textAlign: "center",

                width: "1vw",
                height: "2vw",

                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              디저트
            </Button>
            <Button
              onClick={SetMD}
              sx={{
                color: input[13],
                backgroundColor: input2[13],
                id: "idx13",
              }}
              style={{
                color: input[13],
                backgroundColor: input2[13],
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",

                textAlign: "center",

                width: "1vw",
                height: "2vw",

                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            >
              MD
            </Button>
            <Button
              sx={{ color: "black", backgroundColor: "white" }}
              style={{
                color: "black",
                backgroundColor: "white",
                alignItems: "center",
                fontFamily: "inter",
                fontStyle: "Semi Bold",

                fontSize: "0.2rem",

                textAlign: "center",

                width: "1vw",
                height: "2vw",

                boxShadow:
                  "inset 0.07vw 0.07vw 0.07vw 0.07vw rgba(0, 0, 0, 0.1)",
                padding: "0vw",
                display: "inlineFlex",
              }}
            ></Button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default KioskHeader;
