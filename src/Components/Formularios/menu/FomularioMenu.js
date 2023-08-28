import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


import Modal from 'react-bootstrap/Modal';



function FormularioMenu() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  const [idReceta, setIdReceta] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los valores ingresados, como enviarlos a un servidor.
  };



  return (

<React.Fragment>

 <Button variant="primary" onClick={handleShow} className='mb-3'>
      Crear Menú
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>


<Form onSubmit={handleSubmit}>
      <Form.Group controlId="idReceta">
        <Form.Label>Id Receta</Form.Label>
        <Form.Control
          type="text"
          value={idReceta}
          onChange={(e) => setIdReceta(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="precio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="descripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>

        
      </Modal.Body>
     
    </Modal>
    


</React.Fragment>

   

    
   
  );
}

export default FormularioMenu;
