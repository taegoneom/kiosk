import React from "react";

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

function ModalGetNumber() {
  return (
    <>
      <div>
        this screen is empty templete for point ./////////////////
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
            적립하기
          </Button>

          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardContent sx={{ padding: "0px" }}></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              ></Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              ></Card>
            </Grid>
          </Grid>
        </Card>
      </div>
    </>
  );
}

export default ModalGetNumber;
