import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormularioRecetas from '../../Formularios/recetas/FormularioRecetas';
import {  GetInventarioLabel } from '../../Controllers/Inventario/FuncionesInventario';
import { GetReceta } from '../../Controllers/Recetas/FuncionesRecetas';

const Recetas = () => {

  const [inventario, setInventario]= useState([])

  const fetchData = async () => {
    try {
        const data = await GetInventarioLabel();
        setInventario(data);
    } catch (error) {
        console.error("Error al obtener inventario:", error);
    }
  };


  useEffect(() => {
    fetchData(); // Llamar a la función al montar el componente
  }, []);
    
      ///FIN






      const [receta, setReceta]= useState([])

      const fetchDatax = async () => {
        try {
            const data = await GetReceta();
            setReceta(data);
        } catch (error) {
            console.error("Error al obtener receta:", error);
        }
      };
    
    
      useEffect(() => {
        fetchDatax(); // Llamar a la función al montar el componente
      }, []);



      ///OBTIENE LOS DATOS DE FORMULARIO 
    const handleDataFromChild = (data) => {
    
      
      setReceta(data);
     
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Crear Receta
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormularioRecetas  handleClose={handleClose} onDataFromChild={handleDataFromChild} inventario={inventario} />
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Recetas