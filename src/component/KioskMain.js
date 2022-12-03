import React, { useEffect } from "react";
import { AppViewStatus } from "./ViewStatus";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box,
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
    //2

    SetToGo();
  }
  function forhere() {
    //3
    SetForHere();
  }
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);
  return (
    <div
      style={{
        display: "absolute",
        textAlign: "center",
        float: "left",
        top: "15vw",
      }}
    >
      <img
        display="absolute"
        src="images/logoimageraw1.png"
        onClick={togo}
        style={{
          display: "absolute",
          width: "35vw",
          height: "35vw",
          margin: "5vw 10vw 0vw 10vw",
        }}
      ></img>
      <img
        src="images/logoimageraw2.png"
        onClick={forhere}
        style={{
          display: "absolute",
          width: "35vw",
          height: "35vw",
          display: "absolute",
          margin: "10vw 0vw 0vw 0vw",
        }}
      ></img>
    </div>
  );
}

export default KioskMain;
