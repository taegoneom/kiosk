import React from 'react';
import { MenuStatus} from "./MenuViewStatus"; 
import { Grid,Card, CardMedia, CardContent, Typography } from '@material-ui/core';

function MenuSelecterMain() {

    function temp(){
      return alert("drink");
    }
    const {valueofmenu,SetSuggest,SetPopular,SetNewMenu,SetComboMenu,SetCoffee,SetDecaf,SetMilk,SetJuiceDrink,SetSmoothie,SetTeaAde,SetBread,SetDessert,SetMD}=MenuStatus();
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;



    return (
        <div style={{overflow:"scroll", width:window.innerWidth, height:"700px"}}>

      {valueofmenu===1?<div  style={{display:valueofmenu===1?"block":'none'}}>
        <Grid container direction={"row"}  spacing={3} alignContent={"space-evenly"} Content={'left'} >
          <Grid item xs={4}>
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/suggest/strawberryyogurtdrink.png"
              onClick={temp}
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >딸기요거트드링크</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
           
          </Grid>
          <Grid item xs={4}>
          <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/suggest/raspberrymacaron.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center' >산딸기마카롱</Typography>
              <Typography align='center' >가격</Typography>
              </CardContent>
              </Card>
          </Grid>
          <Grid item xs={4}>
          <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/suggest/peachyogurtdrink.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >복숭아요거트드링크</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={4}>
             <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/suggest/newpeachicedtea.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >NEW복숭아아이스티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
          </Grid>
          <Grid item xs={4}>
           <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/suggest/jejugreentangerinetea.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >제주청귤티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>           
          </Grid>
          <Grid item xs={4}>
           <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/suggest/honeylemontea.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >허니레몬티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
          </Grid>
        </Grid>        
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={4}>
          
           <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/suggest/almondbonbonmacaron.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >아몬드봉봉마카롱</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={4}>
            
 
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/suggest/banaricano.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >바나리카노</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
           
          </Grid>
          <Grid item xs={4}>
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/suggest/honeygrapefruittea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >허니자몽티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>

        </div>:<p></p>}

        {valueofmenu===2?<div style={{display:valueofmenu===2?"block":'none'}}>

        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
          <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/cake/tiramisu.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >티라미수</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
          </Grid>
          <Grid item xs={3}>
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=  "menuimages/cake/burntcheesecake.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >번트치즈케이크</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
          </Grid>
          <Grid item xs={3}>
          
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=   "menuimages/cake/carrotcake.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >당근케이크</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/cake/hazelnutchocolatecake.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  sx={{margin:"0%",padding:"0%"}}>헤이즐넛초콜릿케이크</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>


        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/cake/oreomilkcake.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >오레오우유케이크</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/cake/strawberrytiramisu.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >딸기티라미수</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>





        </div>:<p></p>}

        {valueofmenu===3?<div style={{display:valueofmenu===3?"block":'none'}}>

        </div>:<p></p>}

        {valueofmenu===4?<div style={{display:valueofmenu===4?"block":'none'}}>

        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/setmenu/coffeedonutset.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >커피&도넛세트</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=  "menuimages/setmenu/coffeeonionbagelset.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >커피&어니언베이글세트</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
           
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=  "menuimages/setmenu/coffeeplainbagelset.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >커피&플레인베이글세트</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/setmenu/cuatrocheesegrilledpaniniset.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >콰트로치즈그릴드파니니 세트</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/setmenu/hamcheesemuffinset.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >햄치즈머핀세트</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=    "menuimages/setmenu/pepperonigrilledcheesepaniniset.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >페퍼로니그릴드치즈파니니 세트</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
          
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/setmenu/hotchickengrilledcheesepaniniset.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >핫치킨그리드치즈파니니 세트</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/setmenu/macaronset(8+1).png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >마카롱세트8+1</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        </div>:<p></p>}

        {valueofmenu===5?<div  style={{display:valueofmenu===5?"block":'none'}}>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/coffee/americano.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >아메리카노</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/coffee/banaricano.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >바나리카노</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/coffee/cafelatte.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >카페라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/coffee/cinnamonlatte.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >시나몬라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/coffee/coldbrew.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >콜드브루</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/coffee/condensedmilkcafelatte.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >연유라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
               
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/coffee/creamylatte.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >크리미라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/coffee/dolcecoldbrew.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >돌체 콜드브루</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >

          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/coffee/espresso.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >에스프레소</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/coffee/honeyamericano.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >허니아메리카노</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/coffee/milkcaramelmacchiato.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >밀크카라멜마키아또</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/coffee/pistachiocafelatte.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >피스타치오카페라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/coffee/signatureamericano.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >시그니처아메리카노</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/coffee/signaturecoldbrew.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >시그니처콜드브루</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/coffee/vanillacoldbrew.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >바닐라 콜드브루</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/coffee/vanillalatte.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >바닐라라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        </div>:<p></p>}

        {valueofmenu===6?<div style={{display:valueofmenu===6?"block":'none'}}>

        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/decaf/decafamericano.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >디카페인 아메리카노</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/decaf/decafbanaricano.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >디카페인 바나리카노</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/decaf/decafcafelatte.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >디카페인 카페라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/decaf/decafcinnamonlatte.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >디카페인 시나몬라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/decaf/decafcondensedmilkcafelatte.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >디카페인 연유라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/decaf/decafcreamylatte.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >디카페인 크리미라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/decaf/decafespresso.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >디카페인 에스프레소</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/decaf/decafhoneyamericano.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >디카페인 허니아메리카노</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/decaf/decafmilkcaramelmacchiato.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >디카페인 밀크카라멜마키아또</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/decaf/decafpistachiocafelatte.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >디카페인 피스타치오</Typography>
              <Typography align='center'  >가격</Typography>
    
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/decaf/decafvanillalatte.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >디카페인 바닐라라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        </div>:<p></p>}

        {valueofmenu===7?<div style={{display:valueofmenu===7?"block":'none'}}>
      
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/milktea_latte/blacksugarbubbletea.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >흑당버블티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/blacksugarmilktea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >흑당밀크티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/chaimilktea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >차이밀크티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/classicmilktea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >클래식밀크티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/dalgonalatte.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >달고나라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/earlgreybubbletea.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >얼그레이버블티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/earlgreymilktea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >얼그레이밀크티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/greentealatte.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >녹차라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/oatmeallatte.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >오트밀라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/pistachiolatte.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >피스타치오라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/realchoco.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >리얼초코</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/realvanillabean.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >리얼바닐라빈</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/ripepersimmonlatte.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >홍시라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/royalmilktea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >로열밀크티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/strawberrylatte.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >딸기라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/milktea_latte/toffeenutlatte.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >토피넛라떼</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        </div>:<p></p>}

        {valueofmenu===8?<div style={{display:valueofmenu===8?"block":'none'}}>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/juicedrink/goldmedalapplejuice.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >골드메달 애플쥬스</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/juicedrink/goldmedalapplesparkling.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >골드메달 애플스파클링</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/juicedrink/mangojuice.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >망고쥬스</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/juicedrink/peachyogurtdrink.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >복숭아요거트드링크</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/juicedrink/perrierlemon.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >페리에레몬</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/juicedrink/perrierlime.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >페리에라임</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/juicedrink/plainyogurtdrink.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >플레인요거트드링크</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/juicedrink/ripepersimmonjuice.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >홍시쥬스</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/juicedrink/strawberrybananajuice.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >딸기바나나쥬스</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
             <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/juicedrink/strawberryjuice.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >딸기쥬스</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/juicedrink/strawberryyogurtdrink.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >딸기요거트드링크</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/juicedrink/tomatofreshjuice.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >토마토생과일쥬스</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        </div>:<p></p>}

        {valueofmenu===9?<div style={{display:valueofmenu===9?"block":'none'}}>
        
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/banaccino_smoothie/chocoshake.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >초코쉐이크</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/banaccino_smoothie/cookie&creambanaccino.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >쿠앤크바나치노</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/banaccino_smoothie/greenteabanaccino.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >녹차바나치노</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/banaccino_smoothie/javachipbanaccino.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >자바칩바나치노</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/banaccino_smoothie/lemonstrawberrysmoothie.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >레몬딸기스무디</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/banaccino_smoothie/lemonyogurtsmoothie.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >레몬요거트스무디</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/banaccino_smoothie/mangosmoothie.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >망고스무디</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/banaccino_smoothie/mintchocolatebanaccino.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >민트초코바나치노</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/banaccino_smoothie/strawberrypeachsmoothie.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >딸기복숭아스무디</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/banaccino_smoothie/strawberrysmoothie.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >딸기스무디</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/banaccino_smoothie/vanillashake.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >바닐라쉐이크</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        </div>:<p></p>}

        {valueofmenu===10?<div style={{display:valueofmenu===10?"block":'none'}}>
      
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/tea_ade/chamomilelycheetea.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >캐모마일리치티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
  
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/tea_ade/chamomiletea.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >캐모마일</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
               
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/tea_ade/citronappletea.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >유자애플티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/tea_ade/earlgreytea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >얼그레이</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/tea_ade/gingerlemontea.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >생강레몬티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/tea_ade/grapefruitade.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >자몽에이드</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/tea_ade/grapefruithibiscustea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >자몽히비스커스티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/tea_ade/greengrapeade.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >청포도에이드</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/tea_ade/hibiscustea.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >히비스커스</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/tea_ade/honeygrapefruittea.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >허니자몽티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/tea_ade/honeylemontea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >허니레몬티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/tea_ade/jejugreentangerinetea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >제주청귤티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/tea_ade/jujubeblackherbaltea.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >대추쌍화차</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/tea_ade/lemonade.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >레몬에이드</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/tea_ade/lemonpepperminttea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >레몬페퍼민트티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=  "menuimages/tea_ade/mintyujapeartea.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >민트유자페어티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/tea_ade/newpeachicedtea.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >NEW복숭아아이스티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
               
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/tea_ade/peachade.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >복숭아에이드</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/tea_ade/pearbellflowerroottea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >배도라지차</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/tea_ade/peppermint tea.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >페퍼민트</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        </div>:<p></p>}

        {valueofmenu===11?<div style={{display:valueofmenu===11?"block":'none'}}>
        
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/bread/clubsandwich.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >클럽샌드위치</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
               
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/bread/custarddonut.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >커스터드도넛</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/bread/eggbaconsandwich.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >에그베이컨샌드위치</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/bread/hamcheeseenglishmuffin.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >햄치즈잉글리시머핀</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/bread/hotchickengrilledcheesepanini.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >핫치킨그릴드치즈파니니</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/bread/jalapenobulgogisandwich.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >할라피뇨불고기샌드위치</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/bread/onionbagel.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >어니언베이글</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/bread/paulycreamcheese.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >폴리크림치즈</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/bread/peperonigrilledcheesepanini.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >페퍼로니그릴드치즈파니니</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/bread/plainbagel.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >플레인베이글</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
           
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=  "menuimages/bread/quatrocheesegrilledpanini.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >콰트로치즈그릴드파니니</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/bread/tunasandwich.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >튜나샌드위치</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        </div>:<p></p>}

        {valueofmenu===12?<div style={{display:valueofmenu===12?"block":'none'}}>
        
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/dessert/almondbonbonmacaron.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >아몬드봉봉마카롱</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/dessert/americancookie.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >아메리칸쿠키</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/dessert/chocochipcookie.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >초코칩쿠키</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/dessert/chocolatemacaron.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >초콜릿마카롱</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>
 
 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/dessert/cookeandcreammacaron.png"
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >쿠키앤크림마카롱</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
 
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/dessert/dessertshoppingbag.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >디저트쇼핑백</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
           
          </Grid>
          <Grid item xs={3}>
         
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=    "menuimages/dessert/greenteawhitecookie.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >말차화이트쿠키</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
         
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=    "menuimages/dessert/injeolmimacaron.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >인절미마카롱</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/dessert/marlenkacake(cocoa).png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >말렌카케이크(코코아)</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
         
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=    "menuimages/dessert/marlenkacake(walnut).png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >말렌카케이크(호두)</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
        
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=     "menuimages/dessert/milkmacaron.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >우유마카롱</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
       
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=       "menuimages/dessert/mintchocolatemacaron.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >민트초코마카롱</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/dessert/raspberrymacaron.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >산딸기마카롱</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/dessert/vanillamacaron.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >바닐라마카롱</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/dessert/yellowcheesemacaron.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >황치즈마카롱</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>

        </Grid>
        </div>:<p></p>}

        {valueofmenu===13?<div style={{display:valueofmenu===13?"block":'none'}}>
        
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/md/9900point.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >바나프레소 상품권 9,900원권</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/md/10000point.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >바나프레소 상품권 1만원권</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/md/30000point.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >바나프레소 상품권 3만원권</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
           
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=  "menuimages/md/50000point.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >바나프레소 상품권 5만원권</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/md/acrylickeyringatype.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >아크릴키링_A타입</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
               
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/md/acrylickeyringbtype.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >아크릴키링_B타입</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
            
 
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/md/acrylickeyringctype.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >아크릴키링_C타입</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
           
          </Grid>
          <Grid item xs={3}>
           
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=  "menuimages/md/acrylickeyringdtype.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >아크릴키링_D타입</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/md/dripbagblend.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >드립백(블렌드)</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>

            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=             "menuimages/md/ethifacekeyring.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >에티얼굴키링</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/md/ethimonitorplush.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >에티모니터인형</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/md/maskingtapebabybokthi.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >마스킹테이프_베이비복티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/md/maskingtapebabyethi.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >마스킹테이프_베이비에티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
               
 
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/md/memopadbabybokthi.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >메모패드_베이비복티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/md/memopadbabyethi.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >메모패드_베이비에티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
           
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image=  "menuimages/md/mousepadbabybokthi.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >마우스패드_베이비복티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/md/mousepadbabyethi.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >마우스패드_베이비에티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/md/notebabyethibokthi.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >노트_베이비에티&복티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/md/pouchbabyethibokthi.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >파우치_베이비에티&복티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/md/removablestickerbabybokthi.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >리무버블스티커_베이비복티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/md/removablestickerbabyethi.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >리무버블스티커_베이비에티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
              
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/md/removablestickerbabyethibokthi.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >리무버블스티커_베이비에티&복티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/md/reusabletumblerpink.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >리유저블텀블러(핑크)</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/md/reusabletumblerwhite.png"  
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >리유저블텀블러(화이트)</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        <Grid container direction={"row"}   spacing={3} alignItems={'flex-start'} Content={'left'} >
          <Grid item xs={3}>

 <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image= "menuimages/md/smarttok_babyethi.png" 
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >스마트톡_베이비에티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
          <Grid item xs={3}>
             
            <Card raised sx={{margin: "0 auto",padding:"0px"}} style={{width:"200px",height:"250px", borderRadius:"16px",marginTop:"20px"}}>
              <CardMedia
              alignItems="center"
              component="img"
              
              image="menuimages/md/smarttokbabybokthi.png"   
              onClick={temp} 
              sx={{ padding: "0px", objectFit:"contain"}}/>
              <CardContent sx={{padding:"0px"}}>
              <Typography align='center'  >스마트톡_베이비복티</Typography>
              <Typography align='center'  >가격</Typography>
              </CardContent>
              </Card>
 
           
          </Grid>
        </Grid>
        </div>:<p></p>}

        </div>
    );
}

export default MenuSelecterMain;