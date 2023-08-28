import React from "react"
import '../header/header.css'
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import {FaCircleUser} from 'react-icons/fa6' 
import logo from '../../assets/images/logo.png'

import Container from 'react-bootstrap/Container';
import { Navbar} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { lista } from "../sidebar/Sidebar";





const Header = ({cerrar}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleLinkClick  = () => setShow(false);




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