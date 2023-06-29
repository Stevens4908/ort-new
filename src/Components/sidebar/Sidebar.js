import React from "react"
import '../sidebar/sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



const Sidebar = ({colapsar}) => {

    
   
    return(

        <React.Fragment>

             <section className={`sidebar ${colapsar ? 'colapsar' : '' } `}>
                <ul>
                    <li>
                        <Link to="agregarequipos" className="text-white">Agregar Equipo</Link>
                    </li>
                    <li>
                        <Link to="mesas" className="text-white">Mesas</Link>
                    </li>
                </ul>
             </section>

        </React.Fragment>

        

    )




}

export default Sidebar;