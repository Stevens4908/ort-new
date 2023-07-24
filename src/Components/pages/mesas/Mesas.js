import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  NavLink, Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import {MdTableBar} from 'react-icons/md' 
import '../mesas/mesas.css'
import {FaCircleUser} from 'react-icons/fa6' 

const Mesas = () => {



    return (


<React.Fragment>

    <Container fluid>

        <Row className='fondo-ortellus xu ' >
            <Col md={3} xs={5} className='' style={{borderRight:"1px solid white"}}> <NavLink className="iconos-mesas" to="numeromesas"> <Row><Col xs={2} md={2}><MdTableBar/></Col> <Col xs={9} md={9}>Numero de Mesas</Col></Row> </NavLink> </Col>
            <Col md={3} xs={5} className=''> <NavLink className="iconos-mesas" to="mesasatendidas"> <Row><Col xs={2} md={2}><MdTableBar/></Col>  <Col xs={9} md={9}>Mesas Atendidas</Col></Row>   </NavLink> </Col>
            <Col md={6} xs={2} className=' d-flex justify-content-end '>
                <Row className=''> <Col md={12} className='d-flex  align-items-center' > <FaCircleUser className='' style={{fontSize:"3em"}}/></Col> 
                </Row>  
            </Col>
        </Row>

    </Container>
              
    <Outlet/>

</React.Fragment>


    )


}

export default Mesas;