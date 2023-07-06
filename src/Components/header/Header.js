import React from "react"
import '../header/header.css'
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Link } from "react-router-dom";
import {FaPeopleGroup} from 'react-icons/fa6' 
import {MdTableBar} from 'react-icons/md' 
import {RiCoupon3Fill  } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { PiBookOpenTextFill } from "react-icons/pi";


const Header = ({clickColapsar}) => {

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

<header className="header">


    <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
    </Button>

      
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
    



<h1 className="">
    <i className="burger"><FaBars  onClick={clickColapsar} /></i>
    
    el header
</h1>



</header>

)



}

export default Header;