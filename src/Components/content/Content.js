import React from "react"
import '../content/content.css'
import { Route, Routes } from "react-router-dom"
import AgregarEquipo from "../pages/agregar_equipo/AgregarEquipo"
import Mesas from "../pages/mesas/Mesas"
import Equis from "../Equis"
import CrearCupon from "../pages/crear_cupon/CrearCupon"
import CrearProovedor from "../pages/crear_proovedor/CrearProovedor"
import CostosFijos from "../pages/costos_fijos/CostosFijos"

const Content = () => {

    return(

<main className="content">

        <div className="contenedor">
                <Routes>

                    <Route path="/" element="" />
                    <Route path="/agregarequipos" element={<AgregarEquipo/>} />
                    <Route path="/mesas" element={<Mesas/>}>   
                        
                    </Route>
                    <Route path="mesas/equis" element={<Equis/>}></Route>
                    <Route path="/crearcupon" element={<CrearCupon/>}/>
                    <Route path="/crearproovedor" element={<CrearProovedor/>}/>
                    <Route path="/costosfijos" element={<CostosFijos/>}/>

                </Routes>
        </div>
                
</main>

    )




}

export default Content;