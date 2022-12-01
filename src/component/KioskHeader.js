import React from "react";
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
  return (
    <div>
      {value === 1 ? (
        <div>
          <header>
            <img
              src="images/bana_logo_img04.png"
              width={"250vw"}
              height={"50vw"}
              style={{ top: 0, margin: "15px 0px 0px 15px" }}
            />
            <div style={{ align: "left", margin: "0px 0px 0px 20px" }}>
              <p
                style={{
                  fontSize: "6vw",
                  margin: "0px 0px 0px 0px",
                  lineHeight: "300%",
                }}
                align="left"
              >
                어디서 드시겠습니까?
              </p>
              <p
                style={{
                  fontSize: "3vw",
                  margin: "0px 0px 50px 0px",
                  lineHeight: "0%",
                }}
                align="left"
              >
                주문 후에는 컵 변경이 불가한 점 양해 부탁드립니다.
              </p>
            </div>
          </header>
        </div>
      ) : (
        <p></p>
      )}

      {value === 2 || value === 3 ? (
        <div>
          <Button
            onClick={SetOrderSelect}
            variant="outlined"
            size="medium"
            color="secondary"
          >
            처음으로
          </Button>
          <h1
            style={{
              textAlign: "center",
              fontSize: "3vh",
              margin: "0px 0px 0px 0px",
            }}
          >
            주문하기
          </h1>

          <Grid
            container
            direction={"row"}
            spacing={1}
            alignItems={"flex-start"}
            justifycontent={"space-around"}
          >
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={SetSuggest}
                sx={{ width: "125px", padding: "0px" }}
              >
                추천
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={SetCake}
                sx={{ width: "125px", padding: "0px" }}
              >
                케이크
              </Button>
            </Grid>
            {/* <Grid item >
            <Button variant= "contained" size="small" color="primary" onClick={SetNewMenu}>신메뉴</Button>
           </Grid> */}
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={SetComboMenu}
                sx={{ width: "125px", padding: "0px" }}
              >
                세트
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={SetCoffee}
                sx={{ width: "125px", padding: "0px" }}
              >
                커피
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={SetDecaf}
                sx={{ width: "125px", padding: "0px" }}
              >
                디카페인 커피
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={SetMilk}
                sx={{ width: "125px", padding: "0px" }}
              >
                밀크티&라떼
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={1}
            alignItems={"flex-start"}
            justifycontent={"space-around"}
          >
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={SetJuiceDrink}
                sx={{ width: "125px", padding: "0px" }}
              >
                주스&드링크
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={SetSmoothie}
                sx={{ width: "125px", padding: "0px" }}
              >
                스무디&바나치노
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={SetTeaAde}
                sx={{ width: "125px", padding: "0px" }}
              >
                차&에이드
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={SetBread}
                sx={{ width: "125px", padding: "0px" }}
              >
                브레드
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={SetDessert}
                sx={{ width: "125px", padding: "0px" }}
              >
                디저트
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={SetMD}
                sx={{ width: "125px", padding: "0px" }}
              >
                MD
              </Button>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default KioskHeader;
