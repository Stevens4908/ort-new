import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";
import logo from '../../../assets/images/logo.png'



const  Register  = () => {

   
  
return(

  <React.Fragment>

<Container className="centrar">
  <Row>

        <div className='row justify-content-end px-0 pt-4 pb-4'>
            <div className='col-md-9 col-9 fondo-ortellus bordes'>
                <h3 className="text-white">REGISTRATE AQUÍ</h3>
            </div>
        </div>

    <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Button variant="success" type="submit" className="offset-4 fondo-ortellus">
            REGISTRARSE
          </Button>
    </Form>


        <Row className="justify-content-center pt-3"> 
          <Col md={6} xs={4} >
            <img src={logo} className="img-fluid" alt="logo"></img>
          </Col>
        </Row>
        
  </Row>
</Container>

    
     

      
  </React.Fragment>
   
)



}

export default Register;