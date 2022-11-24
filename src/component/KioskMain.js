import React from "react";
import Grid from '@material-ui/core/Grid';
import { AppViewStatus } from "./ViewStatus";

function KioskMain() {

    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;

if(vw<4){
    vw=2;
}

// use it in the function, get all the students
//const value = AppViewStatus(input => value);
// get the function from the store to add students
//const setinput = AppViewStatus(input => input.setinput);

    const {SetForHere,SetToGo} = AppViewStatus();


    function togo() {//2;

        SetToGo();


    }
    function forhere() {//3
        SetForHere();

    }

    return (
        

        <div>
    <Grid container justifyContent={"space-between"} direction={"row"} spacing={0}  flexDirection="row">
        	
            <Grid item paddingTop={"200px"} paddingLeft={"45px"} ><button><img src="images/app_benefit_img04.png" onClick={togo} style={{width:vw*30, height:vw*30,boxShadow:"5px 5px 5px #000"}} /></button>
            <p>테이크아웃</p><p>1회용 컵</p><p>자원 재활용법에따라 매장 내 일회용 컵</p><p>(플라스틱 컵)사용이 금지되어 있습니다.</p></Grid>
    	    <Grid item paddingTop={"200px"} paddingRight={"45px"}><button><img src="images/app_benefit_img01.png" onClick={forhere} style={{width:vw*30, height:vw*30,boxShadow:"5px 5px 5px #000"}} /></button>
            <p>매장</p><p>종이컵</p></Grid>
    </Grid>
    </div>
    );


}

export default KioskMain;