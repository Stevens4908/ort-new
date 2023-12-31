import './App.css'
import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes} from "react-router-dom"
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
import ProtectedRoutes from './Components/utils/ProtectedRoutes';
import { useLocalStorage } from 'react-use';
import Rol from './Components/accesos/forms/Rol';
import NumeroMesas from './Components/pages/mesas/NumeroMesas';
import MesasAtendidas from './Components/pages/mesas/MesasAtendidas';
import GestionMesas from './Components/pages/mesas/GestionMesas';
//import Header from './Components/header/Header';
//import 'react-perfect-scrollbar/dist/css/styles.css';
//import PerfectScrollbar from 'react-perfect-scrollbar'






function App() {
 
 const [User, setUser] = useLocalStorage('sha')

 const cerrar = () => {
  setUser(false)
  window.location.href = "/"

}
  

  return (
<React.Fragment>


<Router>

  <Routes>

    <Route path='*' element={<Acceso/>}>
        <Route path="forgot" element={<Forgot/>} />
        <Route path="register" element={<Register/>} />
        <Route path="rol" element={<Rol/>} />
    </Route>

    <Route element={<ProtectedRoutes canActivate={User}/>}>
      <Route path="dashboard/*" element={<Dashboard cerrar={cerrar}/>} >
        
          <Route path="agregarequipos" element={<AgregarEquipo/>} />

          <Route path="mesas" element={<Mesas/>}>
              <Route path="equis" element={<Equis/>}/>
              <Route path="numeromesas" element={<NumeroMesas/>}>
                    
                    
              </Route>
              <Route path="gestionmesas" element={<GestionMesas/>}/>
              <Route path="mesasatendidas" element={<MesasAtendidas/>}/>  
          </Route>   
                         
                      
          

          <Route path="crearcupon" element={<CrearCupon />}/>
          <Route path="crearproovedor" element={<CrearProovedor/>}/>
          <Route path="costosfijos" element={<CostosFijos/>}/>
          <Route path="menu" element={<Menu />}/>

      </Route> 
    </Route>
   
     

  </Routes>

</Router>



</React.Fragment>
      



  )
}

export default App