import React,{useEffect} from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import { AppViewStatus } from "./component/ViewStatus";
import MenuSelecterMain from "./component/MenuSelecterMain";
import Cartaccordion from "./component/Cartaccordion";
import Sumorder from "./component/Sumorder";
function App() {
 



  // use it in the function, get all the students
  const {value} = AppViewStatus();


  function setScreenSize() {
 
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  }
    React.useEffect(() => {
      setScreenSize();
    });


    useEffect(() => {
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }, []);



  return (
    <div>
    {value===1?<div className="container" style={{display:"flex",flexDirection:"column"}}>
      <Header className="item" style={{}} />
      <Content className="item" style={{flexDirection:"row", justifyContent:"center"}}/>
    </div>:<p></p>}

    {value===2?<div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <Header className="item" style={{flexDirection:"row", justifyContent:"center"}} />
      <MenuSelecterMain className="item" style={{flexDirection:"row", justifyContent:"center"}} />  
      <Cartaccordion></Cartaccordion>
      <Sumorder></Sumorder>
    </div>:<p></p>}
    {value===3?<div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <Header className="item" style={{flexDirection:"row", justifyContent:"center"}}/>
      <MenuSelecterMain className="item" style={{flexDirection:"row", justifyContent:"center"}} />  
      <Cartaccordion></Cartaccordion>
      <Sumorder></Sumorder>
    </div>:<p></p>}
    </div>
    );
}


export default App;
