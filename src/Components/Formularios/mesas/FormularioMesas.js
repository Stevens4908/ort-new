import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PostMesas } from "../../Controllers/Mesas/funcionesMesas";

const FormularioMesas = (props) => {

  const [disponibilidadMesa, setDisponibilidadMesa] = useState("");
  const [registrarMesa, setRegistrarMesa] = useState("");
  const [observacion, setObservacion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una API o realizar otras acciones
    console.log({
      Disponibilidad_mesa: disponibilidadMesa,
      Registrar_mesa: registrarMesa,
      Observacion: observacion,
    });

    const data_env={
      Disponibilidad_mesa: disponibilidadMesa,
      Registrar_mesa: registrarMesa,
      Observacion: observacion,
    }

    //ENVIO DATOS Y OBTENGO NUEVAMENTE LA LISTA 
   let data= await PostMesas(data_env)
   props.onDataFromChild(data);
 
   //FIN

   props.handleClose();

  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="disponibilidadMesa">
        <Form.Label>Disponibilidad de Mesa</Form.Label>
        <Form.Control
          type="text"
          value={disponibilidadMesa}
          onChange={(e) => setDisponibilidadMesa(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="registrarMesa">
        <Form.Label>Registrar Mesa</Form.Label>
        <Form.Control
          type="text"
          value={registrarMesa}
          onChange={(e) => setRegistrarMesa(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="observacion">
        <Form.Label>Observación</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={observacion}
          onChange={(e) => setObservacion(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-4">
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioMesas;
