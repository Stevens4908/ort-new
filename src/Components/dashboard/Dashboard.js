import React from "react"
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Content from "../content/Content";
import '../dashboard/dashboard.css'
import { BrowserRouter as Router } from "react-router-dom";





const  Dashboard  = () => {


  
return(
  <React.Fragment>



    <Router>

          <div className="dashboard">

              <Header  />
              <Sidebar  />
              <Content/>

   
          </div>



    </Router>
      
     

      
  </React.Fragment>
   
)



}

export default Dashboard;