import React from "react"
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Content from "../content/Content";
import '../dashboard/dashboard.css'
import { BrowserRouter as Router } from "react-router-dom";





const  Dashboard  = () => {


const[colapsar, setColapsar] = React.useState(false)

 

    const clickColapsar = () => {
      setColapsar(!colapsar);
     
    };

  
return(
  <React.Fragment>



      <Router>

<div className="dashboard">

            <Header clickColapsar={clickColapsar} />
            <Sidebar  colapsar={colapsar} />

            <Content>

                 

            </Content>

             

    </div>



    </Router>
      
     

      
    </React.Fragment>
   
)



}

export default Dashboard;