import React from "react"
import '../header/header.css'
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Link } from "react-router-dom";
//import {FaPeopleGroup} from 'react-icons/fa6' 
import {MdTableBar} from 'react-icons/md' 
//import {RiCoupon3Fill  } from "react-icons/ri";
//import { FaUserTie } from "react-icons/fa";
import { PiBookOpenTextFill } from "react-icons/pi";
import {FaCircleUser} from 'react-icons/fa6' 
/*import {FaLocationDot} from 'react-icons/fa6'
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import {FaFacebook} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa6'
import {FaFacebookMessenger} from 'react-icons/fa6'
import {FaTwitter} from 'react-icons/fa6'
import {FaTiktok} from 'react-icons/fa6' */
import logo from '../../assets/images/logo.png'

import { FaUserGroup } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

import { MdOutlineFastfood } from "react-icons/md";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md"; 
import {BiFoodMenu} from "react-icons/bi";
import { FaBoxes } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import { Navbar} from "react-bootstrap";
//import {Col} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = ({cerrar}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleLinkClick  = () => setShow(false);



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
        }
  
         
         
     ];


return(

<header className="header p-0">


    

      
        <div className="offcanvas p-0 ">

            <Offcanvas show={show} onHide={handleClose} responsive="lg" className="offcanvas">
                <Offcanvas.Header closeButton>
                
                <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <div className="res-sidebar">
                            <ul>
                                {lista.map((item, index) => (
                                <li key={index} >
                                    <Link to={item.to} className={item.className} onClick={handleLinkClick}>
                                    {item.icon} {item.text}
                                    </Link>
                                </li>
                                    ))}
                            </ul>
                                    {/*<div className="container text-center">
                                        <Link to="menu"> <button className="boton " onClick={handleLinkClick}>   Menu   </button> </Link>
                                </div>*/}
                    </div>
                            

                </Offcanvas.Body>
            </Offcanvas>

        </div>





            
            
                
        <Navbar bg="light" data-bs-theme="light" >
            <Container>


 
                     <Navbar.Brand >

                        <Button variant="primary" className="d-lg-none fondo-ortellus" onClick={() => setShow(true)}>
                            <i ><FaBars /></i>
                        </Button>

                    </Navbar.Brand>
                                
                    <Navbar.Brand href="#home">

                        <img
                        src={logo}
                        width="90"
                        height="60"
                        className="d-inline-block align-middle"
                        alt="React Bootstrap logo"
                        />

                    </Navbar.Brand>                
    

   
                <Nav className="ms-auto align-middle">
                    <Nav.Link href="#home" className="d-none d-lg-block"><h3 className="align-middle">Home</h3></Nav.Link>
                    <div className="vr" />
                    <Nav.Link href="#pricing" className="d-none d-lg-block align-middle"><h3>Usuario</h3></Nav.Link>

                    <h2><NavDropdown title={<FaCircleUser/> }id="basic-nav-dropdown" className="ps-5 ps-md-0">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    <span className="text-dark" onClick={cerrar} style={{cursor:'pointer'}}>Cerrar sesión</span>
                    </NavDropdown.Item>
                    </NavDropdown></h2>
                </Nav> 
   
              

            </Container>
        </Navbar>
                  
  
 

</header>

)



}

export default Header;