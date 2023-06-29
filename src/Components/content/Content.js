import React from "react"
import '../content/content.css'
import { Route, Routes } from "react-router-dom"
import AgregarEquipo from "../pages/agregar_equipo/AgregarEquipo"
import Mesas from "../pages/mesas/Mesas"

const Content = () => {

    return(

<main className="content">

                <Routes>
                    <Route path="/" element="" />
                    <Route path="/agregarequipos" element={<AgregarEquipo/>} />
                    <Route path="/mesas" element={<Mesas/>} />
                </Routes>
</main>

    )




}

export default Content;