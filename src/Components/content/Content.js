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

const Content = () => {

    return(

<main className="content">

        {/*<div className="contenedor">*/}
                <Routes>

                    
                    <Route path="agregarequipos" element={<AgregarEquipo/>} />
                    <Route path="/mesas" element={<Mesas/>}/>   
                        
                   
                    <Route path="mesas/equis" element={<Equis/>}/>
                    <Route path="/crearcupon" element={<CrearCupon/>}/>
                    <Route path="/crearproovedor" element={<CrearProovedor/>}/>
                    <Route path="/costosfijos" element={<CostosFijos/>}/>
                    <Route path="/menu" element={<Menu/>}/>

                </Routes>
        {/*</div>*/}
                
</main>

    )




}

export default Content;