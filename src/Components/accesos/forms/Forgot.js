import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";
import logo from '../../../assets/images/logo.png'



const  Forgot  = () => {

   
  
return(

  <React.Fragment>

<Container className="pt-5">

  

    <div className='row justify-content-end px-0 pt-4 pb-4'>
        <div className='col-md-11 fondo-ortellus '>
            <h3 className="text-white">OLVIDÉ MI CONTRASEÑA</h3>
        </div>
    </div>

<Form>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>

      <Button variant="success" type="submit" className="offset-5 fondo-ortellus" >
        ENVIAR
      </Button>
</Form>

<Form>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingrese el Codigo</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Button  variant="success" type="submit" className="fondo-ortellus offset-5">
        ENVIAR
      </Button>
</Form>

    <Row className="justify-content-center pt-3"> 
      <Col md={6} xs={4} >
        <img src={logo} className="img-fluid" alt="logo"></img>
      </Col>
    </Row>
    
</Container>

    
     

      
  </React.Fragment>
   
)



}

export default Forgot;