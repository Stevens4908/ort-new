import React from "react"
import '../header/header.css'
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Link } from "react-router-dom";
import {FaPeopleGroup} from 'react-icons/fa6' 
import {MdTableBar} from 'react-icons/md' 
import {RiCoupon3Fill  } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { PiBookOpenTextFill } from "react-icons/pi";
import {FaCircleUser} from 'react-icons/fa6' 
import {FaLocationDot} from 'react-icons/fa6'
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import {FaFacebook} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa6'
import {FaFacebookMessenger} from 'react-icons/fa6'
import {FaTwitter} from 'react-icons/fa6'
import {FaTiktok} from 'react-icons/fa6'


import Container from 'react-bootstrap/Container';



const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const lista = [
        {
        to: "agregarequipos",
        text: "Agregar Equipo",
        icon: <FaPeopleGroup />,
        className: "text-white"
        },
        {
        to: "mesas",
        text: "Mesas",
        icon: <MdTableBar />,
        className: "text-white"
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
        }
    ];


return(

<header className="header ">


    

      
<div className="offcanvas">
    <Offcanvas show={show} onHide={handleClose} responsive="lg" className="offcanvas">
        <Offcanvas.Header closeButton="text-white" >
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

            <div className="res-sidebar">
                    <ul>
                        {lista.map((item, index) => (
                        <li key={index}>
                            <Link to={item.to} className={item.className}>
                            {item.icon} {item.text}
                            </Link>
                        </li>
                            ))}
                    </ul>
                            <div className="container text-center">
                                <button className="boton">Menu</button>
                            </div>
            </div>
                    

        </Offcanvas.Body>
    </Offcanvas>
</div>


<Container fluid>
      
      
        
      <div className="row  ">
        <div className="col-12">
            <div className="row ">

                <div className="col-2 col-md-1">
                    <Button variant="primary" className="d-lg-none" onClick={handleShow}>
                    <i ><FaBars /></i>
                    </Button>
                </div>

                <div className="col-7 col-md-4 bg-info">
                    <div className="row">
                        <div className="col-7  px-0">
                            <h5 className="text-start">Buenas tardes:</h5>
                            <h5 className="text-start">ID/Usuario</h5>
                            <p className="text-white text-end headhide">Recuerda completar tus tareas</p>
                        </div>
                        
                        <div className="col-2 d-flex">
                            <div className="row d-flex align-items-start">
                                <div className="col-12 justify-content-start">
                                        <i style={{fontSize: "4rem"}} className="pt-0" ><FaCircleUser/></i>
                                </div>
                                    
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="col-4 col-md-4 bg-warning headhide">
                            <h5 className="text-center">Tienes dudas? Contactanos</h5>
                            <div className="row justify-content-center">
                                
                                    <div className="col-md-1 text-end">
                                            <FaLocationDot/>
                                    </div>
                                    <div className="col-md-1">
                                            <BsTelephoneFill/>
                                    </div>
                                    <div className="col-md-1 text-start">
                                            <IoMdMail/>
                                    </div>
 
                            </div>
                            <div className="row justify-content-center pt-3" >
                                <div className="col-md-1"><i><FaFacebook/></i></div>
                                <div className="col-md-1"><i><FaFacebookMessenger/></i></div>
                                <div className="col-md-1"><i><FaInstagram/></i></div>
                                <div className="col-md-1"><i><FaTwitter/></i></div>
                                <div className="col-md-1"><i><FaTiktok/></i></div>
                            </div>
                </div>

                <div className="col-3 col-md-2 bg-success">

                </div>
            </div>
        </div>
    </div>           


     
      
    </Container>



    
{/*

<Navbar expand="lg" className="bg-body-tertiary bg-info">
      <Container fluid className="bg-warning">















      <div className="row pt-0">
        <div className="col-md-12">
            <div className="row">

                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-9  px-0">
                            <h5 className="text-end">Buenas tardes:</h5>
                            <h5 className="text-end">ID/Usuario</h5>
                            <h4 className="text-info text-end">Recuerda completar tus tareas</h4>
                        </div>
                        
                        <div className="col-md-3 d-flex">
                            <div className="row d-flex align-items-start">
                                <div className="col-md-12">
                                        <i style={{fontSize: "4rem"}} className="pt-0" ><FaCircleUser/></i>
                                </div>
                                    
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="col-md-3  headhide">
                            <h5 className="text-center">Tienes dudas? Contactanos</h5>
                            <div className="row justify-content-center">
                                
                                    <div className="col-md-1 text-end">
                                            <FaLocationDot/>
                                    </div>
                                    <div className="col-md-1">
                                            <BsTelephoneFill/>
                                    </div>
                                    <div className="col-md-1 text-start">
                                            <IoMdMail/>
                                    </div>
 
                            </div>
                            <div className="row justify-content-center pt-3" >
                                <div className="col-md-1"><i><FaFacebook/></i></div>
                                <div className="col-md-1"><i><FaFacebookMessenger/></i></div>
                                <div className="col-md-1"><i><FaInstagram/></i></div>
                                <div className="col-md-1"><i><FaTwitter/></i></div>
                                <div className="col-md-1"><i><FaTiktok/></i></div>
                            </div>
                </div>

                <div className="col-md-3 bg-success">

                </div>
            </div>
        </div>
    </div>           



</Container>
    </Navbar>

                      */  }

        {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">




         
          </Nav>

                        </Navbar.Collapse>*/}

      









{/*<div className="container">
    <div className="row pt-1">
        <div className="col-md-12">
            <div className="row">

                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-9  px-0">
                            <h5 className="text-end">Buenas tardes:</h5>
                            <h5 className="text-end">ID/Usuario</h5>
                            <h4 className="text-info text-end">Recuerda completar tus tareas</h4>
                        </div>
                        
                        <div className="col-md-3 d-flex separador">
                            <div className="row d-flex align-items-start">
                                <div className="col-md-12">
                                        <i style={{fontSize: "4rem"}} className="pt-0" ><FaCircleUser/></i>
                                </div>
                                    
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="col-md-3  ">
                            <h5 className="text-center">Tienes dudas? Contactanos</h5>
                            <div className="row justify-content-center">
                                
                                    <div className="col-md-1 text-end">
                                            <FaLocationDot/>
                                    </div>
                                    <div className="col-md-1">
                                            <BsTelephoneFill/>
                                    </div>
                                    <div className="col-md-1 text-start">
                                            <IoMdMail/>
                                    </div>
 
                            </div>
                            <div className="row justify-content-center pt-4" >
                                <div className="col-md-1"><i><FaFacebook/></i></div>
                                <div className="col-md-1"><i><FaFacebookMessenger/></i></div>
                                <div className="col-md-1"><i><FaInstagram/></i></div>
                                <div className="col-md-1"><i><FaTwitter/></i></div>
                                <div className="col-md-1"><i><FaTiktok/></i></div>
                            </div>
                </div>

                <div className="col-md-3 bg-success">

                </div>
            </div>
        </div>
    </div>           
</div>
*/}    


</header>

)



}

export default Header;