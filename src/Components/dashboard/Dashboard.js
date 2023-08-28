import React from "react"
import Header from "../header/Header";
//import Sidebar from "../sidebar/Sidebar";
import Content from "../content/Content";
import '../dashboard/dashboard.css'
import { Sidebar } from "../sidebar/Sidebar";
//import { BrowserRouter as Router } from "react-router-dom";
//import { Route, Routes } from "react-router-dom"
//import Login from "../logins/Login";





const  Dashboard  = ({cerrar}) => {


  
return(
  <React.Fragment>



          <div className="dashboard">
          
              <Header  cerrar={cerrar}/>
              <Sidebar  />
              <Content/>

   
          </div>

      

      
  </React.Fragment>
   
)



}

export default Dashboard;