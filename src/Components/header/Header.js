import React from "react"
import '../header/header.css'
import { FaBars } from "react-icons/fa6";


const Header = ({clickColapsar}) => {

 

return(

<header className="header">

<h1 className="">
    <i className="burger"><FaBars  onClick={clickColapsar} /></i>
    
    el header
</h1>



</header>

)



}

export default Header;