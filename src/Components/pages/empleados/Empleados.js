import React from "react"
import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container } from "react-bootstrap";
import FormularioEmpleados from "../../Formularios/empleados/Formulario_Empleados";
import TablaEmpleados from "../../Formularios/empleados/Tabla_Empleados";
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
//import { GetRestaurantes } from '../../Controllers/Restaurantes/functionsrestaurantes';
import { GetEmpleado } from "../../Controllers/Empleados/funcionesempleados";
//import { Link } from "react-router-dom";

const  Empleados  = () => {

  const [empleado, setEmpleados]= useState([])

  const fetchData1 = async () => {
    try {
        const data1 = await GetEmpleado();
        setEmpleados(data1);
    } catch (error) {
        console.error("Error al obtener restaurantes:", error);
    }
  };

  useEffect(() => {
    fetchData1(); // Llamar a la función al montar el componente
  }, []);


  const handleDataFromChild1 = (data1) => {
    
    console.log(data1);
    setEmpleados(data1);
   
  };

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
            <FormularioEmpleados handleClose={handleClose} onDataFromChild1={handleDataFromChild1}/>
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

   
    <TablaEmpleados empleados={empleado}/>
    </Container>
  
</React.Fragment>
)
}

export default Empleados;