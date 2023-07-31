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
import logo from '../../assets/images/logo.png'

import Container from 'react-bootstrap/Container';
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";


const Header = ({cerrar}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleLinkClick  = () => setShow(false);



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
                                    <div className="container text-center">
                                        <Link to="menu"> <button className="boton " onClick={handleLinkClick}>   Menu   </button> </Link>
                                    </div>
                    </div>
                            

                </Offcanvas.Body>
            </Offcanvas>

        </div>


        <Container fluid className=" ">
            
            
                
            <div className="row d-flex align-items-center ">
                <div className="col-12 ">
                    <div className="row d-flex align-items-center">

                        <div className="col-2 col-md-1  ">
                            <Button variant="primary" className="d-lg-none fondo-ortellus" onClick={() => setShow(true)}>
                            <i ><FaBars /></i>
                            </Button>
                        </div>

                        <div className="col-7 col-md-4 ">
                            <div className="row">
                                <div className="col-7  px-0">
                                    <h5 className="text-center">Buenas tardes:</h5>
                                    <h5 className="text-center">ID/Usuario</h5>
                                    <p className="text-dark text-center headhide" onClick={cerrar} style={{cursor:'pointer'}}>Cerrar sesión</p>
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

                        <div className="col-4 col-md-4  headhide">
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

                        <div className="col-3 col-md-2  ">

                                    <Row className="justify-content-center  d-flex align-items-center"> 
                                        <Col md={6} xs={12} >
                                            <img src={logo} className="img-fluid" alt="logo"></img>
                                        </Col>
                                    </Row>

                        </div>

                    </div>
                </div>
            </div>           


                    
                    
        </Container>



 
  


</header>

)



}

export default Header;