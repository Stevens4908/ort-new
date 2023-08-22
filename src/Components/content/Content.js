import React , { useEffect } from "react"
import '../content/content.css'
import { Route, Routes } from "react-router-dom"
/*import AgregarEquipo from "../pages/agregar_equipo/AgregarEquipo"
import Mesas from "../pages/mesas/Mesas"
import Equis from "../Equis"
import CrearCupon from "../pages/crear_cupon/CrearCupon"
import CrearProovedor from "../pages/crear_proovedor/CrearProovedor"
import CostosFijos from "../pages/costos_fijos/CostosFijos"
import Menu from "../pages/menu/Menu"
import NumeroMesas from "../pages/mesas/NumeroMesas"
import MesasAtendidas from "../pages/mesas/MesasAtendidas"
import GestionMesas from "../pages/mesas/GestionMesas"*/
import { useLocation } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import Clientes from "../pages/clientes/Clientes"
import Mesas2 from "../pages/mesas/Mesas2"
import Productos from "../pages/productos/Productos"
import Facturaciones from "../pages/facturaciones/Facturaciones"
import Restaurantes from "../pages/restaurantes/Restaurantes"
import Pedidos from "../pages/pedidos/Pedidos"
import Empleados from "../pages/empleados/Empleados"
import Menu from "../pages/menu/Menu";
import Inventario from "../pages/inventario/Inventario";
import Recetas from "../pages/recetas/Recetas";

const Content = () => {

    const location = useLocation();


    useEffect(() => {
       
        const contentContainer = document.getElementById('content-container');
        if (contentContainer) {
          contentContainer.scrollTo(0, 0);
        }
      }, [location]);



   
    return(



<main className="content">
    <PerfectScrollbar id="content-container">
        

        {/*<div className="contenedor">*/}
                <Routes>

                    
               {/*  <Route path="agregarequipos" element={<AgregarEquipo/>} />

                    <Route path="mesas" element={<Mesas/>}>
                        <Route path="equis" element={<Equis/>}/>
                        <Route path="numeromesas" element={<NumeroMesas/>} >
                           
                        </Route>
                        <Route path="mesasatendidas" element={<MesasAtendidas/>}/>
                        <Route path="gestionmesas" element={<GestionMesas/>}/>
                    </Route>  
                         
                    <Route path="/crearcupon" element={<CrearCupon/>}/>
                    <Route path="/crearproovedor" element={<CrearProovedor/>}/>
                    <Route path="/costosfijos" element={<CostosFijos/>}/>
                    <Route path="/menu" element={<Menu/>}/> */ }

                    <Route path="/empleados" element={<Empleados/>}/>
                    <Route path="/clientes" element={<Clientes/>}/>
                    <Route path="/mesas" element={<Mesas2/>}/>
                    <Route path="/productos" element={<Productos/>}/>
                    <Route path="/facturaciones" element={<Facturaciones/>}/>
                    <Route path="/restaurantes" element={<Restaurantes/>}/>
                    <Route path="/pedidos" element={<Pedidos/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/inventario" element={<Inventario/>}/>
                    <Route path="/recetas" element={<Recetas/>}/>
                    
                </Routes>
        {/*</div>*/}
    </PerfectScrollbar>     
</main>
 


    )




}

export default Content;