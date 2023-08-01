import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormularioMesas = () => {
  const [disponibilidadMesa, setDisponibilidadMesa] = useState("");
  const [registrarMesa, setRegistrarMesa] = useState("");
  const [observacion, setObservacion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una API o realizar otras acciones
    console.log({
      Disponibilidad_mesa: disponibilidadMesa,
      Registrar_mesa: registrarMesa,
      Observacion: observacion,
    });
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

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioMesas;
