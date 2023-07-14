import './App.css'
import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom"
import Dashboard from './Components/dashboard/Dashboard'
//import Login from './Components/logins/Login';
import Acceso from './Components/accesos/Acceso';


import AgregarEquipo from "../src/Components/pages/agregar_equipo/AgregarEquipo"
import Mesas from "../src/Components/pages/mesas/Mesas"
import Equis from "../src/Components/Equis"
import CrearCupon from "../src/Components/pages/crear_cupon/CrearCupon"
import CrearProovedor from "../src/Components/pages/crear_proovedor/CrearProovedor"
import CostosFijos from "../src/Components/pages/costos_fijos/CostosFijos"
import Forgot from './Components/accesos/forms/Forgot';
import Register from './Components/accesos/forms/Register';
import Menu from './Components/pages/menu/Menu';

function App() {
 
 

  return (
<React.Fragment>


<Router>

  <Routes>

    <Route path='/' element={<Acceso/>}>
        <Route path="forgot" element={<Forgot/>} />
        <Route path="register" element={<Register/>} />
    </Route>


    <Route path="dashboard" element={<Dashboard/>} >
       
        <Route path="agregarequipos" element={<AgregarEquipo/>} />
        <Route path="mesas" element={<Mesas/>}/>   
                          
                    
        <Route path="mesas/equis" element={<Equis/>}/>
        <Route path="crearcupon" element={<CrearCupon/>}/>
        <Route path="crearproovedor" element={<CrearProovedor/>}/>
        <Route path="costosfijos" element={<CostosFijos/>}/>
        <Route path="menu" element={<Menu/>}/>

    </Route>


     

  </Routes>

</Router>

    

</React.Fragment>
      



  )
}

export default App