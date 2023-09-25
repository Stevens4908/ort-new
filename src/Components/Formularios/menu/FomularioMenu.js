import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { PostMenu } from '../../Controllers/menu/FuncionesMenus';
//import Select from 'react-select';


function FormularioMenu(props) {
  const [validationErrors, setValidationErrors] = useState({
    Id_Receta: null,
    Precio: null,
    descripcion: null,
   });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  const [idReceta, setIdReceta] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  

  const [id, setClientes] = useState([]);
  useEffect(() => {
      fetch("http://127.0.0.1:8000/api/recetaid")
        .then(response => response.json())
        .then(datareact => setClientes(datareact.data))
        .catch(error => console.error(error));
    }, []);
      ///FIN
    console.log(id);

    const handleSubmit =  async (event) => {
    
      event.preventDefault();
  
      const errors = {};
  
      if (!idReceta.trim()) {
        errors.Id_Receta = "Este campo es obligatorio";
      } else {
        errors.Id_Receta = null; // Establece el mensaje de error en null cuando no hay errores
      }
  
      if (!precio.trim()) {
        errors.Precio = "Este campo es obligatorio";
      } else {
        errors.Precio = null;
      }
  
      if (!descripcion.trim()) {
        errors.descripcion = "Este campo es obligatorio";
      } else {
        errors.descripcion = null;
      }
  
    
      // Si hay errores, mostrarlos y no enviar la solicitud
      if (Object.values(errors).some((error) => error !== null)) {
        setValidationErrors(errors);
        return;
      }
      // Aquí puedes realizar acciones con los valores ingresados, como enviarlos a un servidor.
      console.log({
        Id_Receta: idReceta,
        Precio: precio,
        descripcion: descripcion,
       
      });
  
      const formData={
        Id_Receta: idReceta,
        Precio: precio,
        descripcion: descripcion,
        }
        let data= await PostMenu(formData);
        //props.onDataFromChild(data);
       //handleClose()
       props.onDataFromChild(data);
       handleClose();
       
       
      
    
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


<Form onSubmit={handleSubmit} >
      
      <Form.Group controlId="idReceta">
        <Form.Label>Id Receta</Form.Label>
        <Form.Select aria-label="Default select example" options={props.inventario}
        value={idReceta}
          //onChange={handleIngredientesChange}
          onChange={(e) => setIdReceta(e.target.value)}>
          <option>Selecciona una receta</option>
          {id.map((item) => (
          <option key={item.id} value={item.id}>
          {item.Nombre_Plato} {/* Supongamos que el nombre es el campo que quieres mostrar */}
          </option>
          ))}
      </Form.Select>
        {validationErrors.Id_Receta && (
          <p className="text-danger">{validationErrors.Id_Receta}</p>
        )}
      </Form.Group>
      

      <Form.Group controlId="precio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        {validationErrors.Precio && (
          <p className="text-danger">{validationErrors.Precio}</p>
        )}
      </Form.Group>

      <Form.Group controlId="descripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
         {validationErrors.descripcion && (
          <p className="text-danger">{validationErrors.descripcion}</p>
        )}
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