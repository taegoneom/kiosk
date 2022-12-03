import React, { useEffect } from "react";

import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
} from "@material-ui/core";
import { show, hide } from "react-functional-modal";
import ModalCompleted from "./ModalCompleted";
import { CustomOptions } from "./Orderdata";
function ModalGetNumber() {
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  const { phonenum, setphonenum } = CustomOptions();

  return (
    <>
      <div>
        <img
          src="images/couponandpoints.png"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "90vh",
            margin: "0vh 0px 0px 0vw",
            zIndex: 0,
          }}
        ></img>
        <button
          onClick={() => {
            setphonenum([phonenum, 1]);
          }}
          style={{
            position: "absolute",
            zIndex: 1,
            width: "25vw",
            height: "6vh",
            left: 0,
            bottom: 0,
            margin: "0vw 0vw 65vw 10vw",
          }}
        >
          btn1
        </button>
        <button
          onClick={() => {
            setphonenum([phonenum, 2]);
          }}
          style={{
            position: "absolute",
            zIndex: 2,
            width: "25vw",
            height: "6vh",
            left: 0,
            bottom: 0,
            margin: "0vw 0vw 65vw 38vw",
          }}
        >
          btn2
        </button>
        <button
          onClick={() => {
            setphonenum([phonenum, 3]);
          }}
          style={{
            position: "absolute",
            zIndex: 3,
            width: "25vw",
            height: "6vh",
            margin: "3vw 1vw 1vw 1vw",
            left: 0,
            bottom: 0,
            margin: "0vw 0vw 65vw 65vw",
          }}
        >
          btn3
        </button>
        <button
          onClick={() => {
            setphonenum([phonenum, 4]);
          }}
          style={{
            position: "absolute",
            zIndex: 4,
            width: "25vw",
            height: "6vh",
            left: 0,
            bottom: 0,
            margin: "0vw 0vw 48vw 10vw",
          }}
        >
          btn4
        </button>
        <button
          onClick={() => {
            setphonenum([phonenum, 5]);
          }}
          style={{
            position: "absolute",
            zIndex: 5,
            width: "25vw",
            height: "6vh",
            left: 0,
            bottom: 0,
            margin: "0vw 0vw 48vw 38vw",
          }}
        >
          btn5
        </button>
        <button
          onClick={() => {
            setphonenum([phonenum, 6]);
          }}
          style={{
            position: "absolute",
            zIndex: 6,
            width: "25vw",
            height: "6vh",
            left: 0,
            bottom: 0,
            margin: "0vw 0vw 48vw 65vw",
          }}
        >
          btn6
        </button>
        <button
          onClick={() => {
            setphonenum([phonenum, 7]);
          }}
          style={{
            position: "absolute",
            zIndex: 7,
            width: "25vw",
            height: "6vh",
            left: 0,
            bottom: 0,
            margin: "0vw 0vw 32vw 10vw",
          }}
        >
          btn7
        </button>
        <button
          onClick={() => {
            setphonenum([phonenum, 8]);
          }}
          style={{
            position: "absolute",
            zIndex: 8,
            width: "25vw",
            height: "6vh",
            left: 0,
            bottom: 0,
            margin: "0vw 0vw 32vw 38vw",
          }}
        >
          btn8
        </button>
        <button
          onClick={() => {
            setphonenum([phonenum, 9]);
          }}
          style={{
            position: "absolute",
            zIndex: 9,
            width: "25vw",
            height: "6vh",
            left: 0,
            bottom: 0,
            margin: "0vw 0vw 32vw 65vw",
          }}
        >
          btn9
        </button>
        <button
          onClick={() => {
            setphonenum([phonenum, 0]);
          }}
          style={{
            position: "absolute",
            zIndex: 10,
            width: "25vw",
            height: "6vh",
            bottom: 0,
            left: 0,
            margin: "0vw 0vw 15vw 38vw",
          }}
        >
          zer0 here
        </button>
        <button
          style={{
            position: "absolute",
            zIndex: 15,
            width: "25vw",
            height: "6vh",
            left: 0,
            bottom: 0,
            margin: "0vw 0vw 15vw 65vw",
          }}
          onClick={() => {
            setphonenum(phonenum.slice(0, phonenum.length - 1));
          }}
        >
          remove
        </button>
        <button
          style={{
            position: "absolute",
            zIndex: 11,
            width: "25vw",
            height: "6vh",
            bottom: 0,
            left: 0,
            margin: "5vw 0vw 15vw 10vw",
          }}
          onClick={() => {
            hide();
            hide();
            show(
              <div>
                <ModalCompleted></ModalCompleted>
              </div>
            );
          }}
        >
          적립하기
        </button>
        <button
          style={{
            position: "absolute",
            zIndex: 11,
            width: "35vw",
            height: "6vh",
            bottom: 0,
            right: 0,
            margin: "0vw 10vw 0vw 0vw",
          }}
          onClick={() => {
            hide();
            hide();
            show(
              <div>
                <ModalCompleted></ModalCompleted>
              </div>
            );
          }}
        >
          적립하기
        </button>
        <button
          style={{
            position: "absolute",
            zIndex: 12,
            width: "25vw",
            height: "4vh",
            left: 0,
            top: 0,
            margin: "1vw 1vw 1vw 4vw",
          }}
          onClick={() => {
            hide();
          }}
        >
          취소하기
        </button>
        <button
          style={{
            position: "absolute",
            zIndex: 14,
            width: "35vw",
            height: "6vh",
            left: 0,
            bottom: 0,
            margin: "0vw 1vw 1vw 10vw",
          }}
          onClick={() => {
            hide();
          }}
        >
          취소하기
        </button>
        <Typography
          style={{
            position: "absolute",
            zIndex: 14,
            width: "50vw",
            height: "6vh",
            left: 0,
            fontSize: "2.3rem",
            bottom: 0,
            margin: "0vw 0vw 83vw 37vw",
          }}
        >
          {phonenum}
        </Typography>
      </div>
    </>
  );
}

export default ModalGetNumber;
