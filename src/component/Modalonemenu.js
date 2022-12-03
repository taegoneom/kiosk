import React, { useEffect } from "react";

import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { show, hide } from "react-functional-modal";
import { AppViewStatus } from "./ViewStatus";
import { CustomOptions } from "./Orderdata";
import { RotateLeft } from "@mui/icons-material";
function Modalonemenu() {
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          top: 0,
          left: 0,
        }}
      >
        {console.log("running one only popup")}
        <Card
          raised
          sx={{}}
          style={{
            top: 0,
            backgroundColor: "#FFFFFF",
            width: "70vw",
            height: "30vh",
            borderRadius: "0.73vw",
            boxShadow: "0vw 0vw red",
            margin: "0vw 0vw 0vw 15vw",
          }}
        >
          <img
            src="images/iconmodalfirst.png"
            style={{
              width: "19vw",
              height: "19vw",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              margin: "3vh 0vw 0vw 26vw",
            }}
          />
          <Typography
            style={{
              width: "70vw",
              height: "3vh",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "1.2rem",
              textAlign: "center",
              color: "#F06489",
            }}
          >
            매장 이용 고객님!
          </Typography>
          <Typography
            style={{
              width: "70vw",
              height: "3vh",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "1.2rem",
              textAlign: "center",
              color: "#000000",
            }}
          >
            1인 1메뉴 부탁드립니다.
          </Typography>
          <Typography
            style={{
              width: "70vw",
              height: "3vh",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "1.2rem",
              textAlign: "center",
              color: "#000000",
            }}
          >
            추가 컵은 제공되지 않습니다.
          </Typography>

          <img
            src="images/comfirmbigpin.png"
            style={{
              width: "30vw",
              height: "5vh",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              margin: "2.5vh 0vw 0vh 20vw",
            }}
            onClick={() => {
              hide();
            }}
          ></img>
        </Card>
      </div>
    </>
  );
}

export default Modalonemenu;
