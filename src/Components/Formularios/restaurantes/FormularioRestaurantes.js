import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PostRestaurantes } from "../../Controllers/Restaurantes/functionsrestaurantes";

const FormularioRestaurantes = (props) => {


  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");

  const  handleSubmit =  async (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una API o realizar otras acciones
    console.log({
      nombre: nombre,
      direccion: direccion,
    });

    const data_env={
      nombre: nombre,
      direccion: direccion,
    }

//ENVIO DATOS Y OBTENGO NUEVAMENTE LA LISTA 
   let data= await PostRestaurantes(data_env)
    props.onDataFromChild(data);
  
    //FIN
  };

  return (
    
    <Form onSubmit={handleSubmit}>
    
      <Form.Group controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="direccion">
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioRestaurantes;
