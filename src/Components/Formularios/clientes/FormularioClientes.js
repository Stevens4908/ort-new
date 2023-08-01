import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormularioClientes = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una API o realizar otras acciones
    console.log({
      Nombre_Completo: nombreCompleto,
      Cedula: cedula,
      Telefono: telefono,
      Email: email,
      Direccion: direccion,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nombreCompleto">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control
          type="text"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="cedula">
        <Form.Label>Cédula</Form.Label>
        <Form.Control
          type="text"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="telefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

      <Button variant="primary" type="submit" className="mt-5">
        Guardar
      </Button>
    </Form>
  );
};

export default FormularioClientes;
