import React from "react"
import '../sidebar/sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavLink} from "react-router-dom";
/*import {FaPeopleGroup} from 'react-icons/fa6' 

import {RiCoupon3Fill  } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";*/
import { PiBookOpenTextFill } from "react-icons/pi";
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Container, Row } from "react-bootstrap";
import { FaUserGroup } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import {MdTableBar} from 'react-icons/md' 
import { MdOutlineFastfood } from "react-icons/md";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md"; 
import {BiFoodMenu} from "react-icons/bi";
import { FaBoxes } from "react-icons/fa";
import {FaClipboardList} from "react-icons/fa";


const lista = [
       /* {
        to: "agregarequipos",
        text: "Agregar Equipo",
        icon: <FaPeopleGroup />,
        className: "text-white"
        },
        {
        to: "mesas",
        text: "Mesas",
        icon: <MdTableBar />,
        className: "text-white "
        },
        {
        to: "crearcupon",
        text: "Crear Cupón",
        icon: <RiCoupon3Fill />,
        className: "text-white"
        },
        {
        to: "crearproovedor",
        text: "Crear Proovedor",
        icon: <FaUserTie/>,
        className: "text-white"   
        },
        {
        to: "costosfijos",
        text: "Costos Fijos",
        icon: <PiBookOpenTextFill/>,
        className: "text-white"   
        },*/
        {
            to: "empleados",
            text: "Empleados",
            icon: <FaUserGroup/>,
            className: "text-white"   
        },
        {
            to: "clientes",
            text: "Clientes",
            icon: <FaUsers/>,
            className: "text-white"   
        },
        {
            to: "mesas",
            text: "Mesas",
            icon: <MdTableBar/>,
            className: "text-white"   
        },
        {
            to: "productos",
            text: "Productos",
            icon: <MdOutlineFastfood/>,
            className: "text-white"   
        },
        {
            to: "facturaciones",
            text: "Facturaciones",
            icon: <PiBookOpenTextFill/>,
            className: "text-white"   
        },
        {
            to: "restaurantes",
            text: "Restaurantes",
            icon: <IoRestaurantSharp/>,
            className: "text-white"   
        },
        {
            to: "pedidos",
            text: "Pedidos",
            icon: <MdDeliveryDining/>,
            className: "text-white"   
        },
        {
            to: "menu",
            text: "Menú",
            icon: <BiFoodMenu/>,
            className: "text-white"   
        },
        {
            to: "inventario",
            text: "Inventario",
            icon: <FaBoxes/>,
            className: "text-white"   
        },
        {
            to: "recetas",
            text: "Recetas",
            icon: <FaClipboardList/>,
            className: "text-white"   
        }
 
        
        
    ];


const Sidebar = () => {



    


   
    return(

<React.Fragment>
       
<section className="sidebar  " >


    <PerfectScrollbar className="py-3">

        <Container className=" ">
            <Row className="">
           
                {/*<div className="x">*/}
                    <ul className="">
                        {lista.map((item, index) => (
                        <NavLink key={index} to={item.to} className={item.className} >   
                            <li  >
                                
                                {item.icon} {item.text}
                                
                            </li>
                        </NavLink>
                            ))}
                    </ul>
                         {/* <div className="container text-center">
                                <Link to="menu"> <button className="boton ">   Menu     </button> </Link>
                        </div> */}
                           
                {/*</div>*/}

            </Row>
        </Container>  


    </PerfectScrollbar>        
           
</section>

     
</React.Fragment>

        

    )




}

export { Sidebar, lista };