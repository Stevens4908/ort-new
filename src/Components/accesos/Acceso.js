import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container } from "react-bootstrap";
import '../accesos/acceso.css'
import Logins from "./forms/Logins";
import Forgot from "./forms/Forgot";
import Register from "./forms/Register";
import { Route, Routes } from "react-router-dom"





const  Acceso  = () => {


  
return(

<React.Fragment>

    <div className="acceso">

        <div className="container contenedor-acceso">

                <div className="row ">
                    <div className="col-md-12 col-12 ">
                        <Routes>
                            <Route path="" element={<Logins/>} />
                            <Route path="forgot" element={<Forgot/>} />
                            <Route path="register" element={<Register/>} />
                        </Routes>
                    </div>
                </div>
        

        </div>

    </div>

    
</React.Fragment>
   
)



}

export default Acceso;