import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";



const  Register  = () => {

   
  
return(

  <React.Fragment>

<Container className="pt-5">

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="text" placeholder="enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>

      <Button variant="primary" type="submit">
        REGISTRARSE
      </Button>
</Form>
    
</Container>

    
     

      
  </React.Fragment>
   
)



}

export default Register;