import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";



const  Forgot  = () => {

   
  
return(

  <React.Fragment>

<Container className="pt-5">

<Form>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>

      <Button variant="primary" type="submit" >
        ENVIAR
      </Button>
</Form>

<Form>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingrese el Codigo</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Button variant="primary" type="submit" >
        ENVIAR
      </Button>
</Form>
    
</Container>

    
     

      
  </React.Fragment>
   
)



}

export default Forgot;