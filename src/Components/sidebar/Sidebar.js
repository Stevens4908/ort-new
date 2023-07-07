import React from "react"
import '../sidebar/sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {FaPeopleGroup} from 'react-icons/fa6' 
import {MdTableBar} from 'react-icons/md' 
import {RiCoupon3Fill  } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { PiBookOpenTextFill } from "react-icons/pi";



const Sidebar = () => {



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

        <React.Fragment>

             <section className="sidebar" >

                {/*<div className="x">*/}
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
                           
                {/*</div>*/}
                
                
             </section>

        </React.Fragment>

        

    )




}

export default Sidebar;