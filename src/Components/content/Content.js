import React from "react"
import '../content/content.css'
import { Route, Routes } from "react-router-dom"
import AgregarEquipo from "../pages/agregar_equipo/AgregarEquipo"
import Mesas from "../pages/mesas/Mesas"
import Equis from "../Equis"
import CrearCupon from "../pages/crear_cupon/CrearCupon"
import CrearProovedor from "../pages/crear_proovedor/CrearProovedor"
import CostosFijos from "../pages/costos_fijos/CostosFijos"
import Menu from "../pages/menu/Menu"
import NumeroMesas from "../pages/mesas/NumeroMesas"
import MesasAtendidas from "../pages/mesas/MesasAtendidas"
import GestionMesas from "../pages/mesas/GestionMesas"
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

const Content = () => {

    return(



<main className="content">
    <PerfectScrollbar>
        

        {/*<div className="contenedor">*/}
                <Routes>

                    
                    <Route path="agregarequipos" element={<AgregarEquipo/>} />

                    <Route path="mesas" element={<Mesas/>}>
                        <Route path="equis" element={<Equis/>}/>
                        <Route path="numeromesas" element={<NumeroMesas/>}>
                           
                        </Route>
                        <Route path="mesasatendidas" element={<MesasAtendidas/>}/>
                        <Route path="gestionmesas" element={<GestionMesas/>}/>
                    </Route>  
                         
                   
                    

                    <Route path="/crearcupon" element={<CrearCupon/>}/>
                    <Route path="/crearproovedor" element={<CrearProovedor/>}/>
                    <Route path="/costosfijos" element={<CostosFijos/>}/>
                    <Route path="/menu" element={<Menu/>}/>

                </Routes>
        {/*</div>*/}
    </PerfectScrollbar>     
</main>
 


    )




}

export default Content;