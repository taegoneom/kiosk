import React from "react";
import { AppViewStatus } from "./ViewStatus";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import zustand from "zustand";
function KioskMain() {
  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;

  if (vw < 4) {
    vw = 2;
  }

  // use it in the function, get all the students
  //const value = AppViewStatus(input => value);
  // get the function from the store to add students
  //const setinput = AppViewStatus(input => input.setinput);

  const { SetForHere, SetToGo } = AppViewStatus();

  function togo() {
    //2;

    SetToGo();
  }
  function forhere() {
    //3
    SetForHere();
  }

  return (
    <div>
      <Grid container justifycontent={"space-around"} direction={"row"}>
        <Grid item marginleft={"4em"}>
          <Card
            raised
            sx={{ margin: "0 auto", padding: "0vw" }}
            style={{
              width: "40vw",
              height: "60vw",
              borderRadius: "16px",
              marginTop: "20px",
            }}
          >
            <CardMedia
              component="img"
              image="images/app_benefit_img04.png"
              onClick={togo}
              sx={{ padding: "0px", objectFit: "contain" }}
            />
            <CardContent sx={{ padding: "0px" }}>
              <Typography align="center">테이크아웃</Typography>
              <Typography align="center">1회용 컵</Typography>
              <Typography align="center">
                자원 재활용법에따라 매장 내 일회용 컵
              </Typography>
              <Typography align="center">
                (플라스틱 컵)사용이 금지되어 있습니다.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card
            raised
            sx={{ margin: "0 auto", padding: "0vw" }}
            style={{
              width: "40vw",
              height: "60vw",
              borderRadius: "16px",
              marginTop: "20px",
            }}
          >
            <CardMedia
              component="img"
              image="images/app_benefit_img01.png"
              onClick={forhere}
              sx={{ padding: "0px", objectFit: "contain" }}
            />
            <CardContent sx={{ padding: "0px" }}>
              <Typography align="center">매장</Typography>
              <Typography align="center">종이컵</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default KioskMain;
