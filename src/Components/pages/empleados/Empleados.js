import React from "react"
import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container } from "react-bootstrap";
import FormularioEmpleados from "../../Formularios/empleados/Formulario_Empleados";
import TablaEmpleados from "../../Formularios/empleados/Tabla_Empleados";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
//import { Link } from "react-router-dom";

const  Empleados  = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  

return(
    
<React.Fragment>    
    <Container className="py-3">
  
  
    <>
      <Button variant="primary" onClick={handleShow} className="mb-3">
       Crea Empleados
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormularioEmpleados/>
        </Modal.Body>
    {/*    <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          </Modal.Footer>*/}
      </Modal>
    </>

   
    <TablaEmpleados empleados={[]}/>
    </Container>
  
</React.Fragment>
)
}

export default Empleados;