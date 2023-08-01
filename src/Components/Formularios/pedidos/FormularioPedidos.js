import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormularioPedidos = () => {

  const [nombrePedido, setNombrePedido] = useState("");
  const [fechaPedido, setFechaPedido] = useState("");
  const [precio, setPrecio] = useState("");
  const [descuento, setDescuento] = useState("");
  const [envio, setEnvio] = useState("");
  const [tipoPago, setTipoPago] = useState("");
  const [estado, setEstado] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una API o realizar otras acciones
    console.log({
      nombre_pedido: nombrePedido,
      fecha_pedido: fechaPedido,
      precio: precio,
      descuento: descuento,
      envio: envio,
      tipo_pago: tipoPago,
      estado: estado,
      direccion: direccion,
      telefono: telefono,
      descripcion: descripcion,
    });
  };

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nombrePedido">
        <Form.Label>Nombre del Pedido</Form.Label>
        <Form.Control
          type="text"
          value={nombrePedido}
          onChange={(e) => setNombrePedido(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="fechaPedido">
        <Form.Label>Fecha del Pedido</Form.Label>
        <Form.Control
          type="date"
          value={fechaPedido}
          onChange={(e) => setFechaPedido(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="precio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="text"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="descuento">
        <Form.Label>Descuento</Form.Label>
        <Form.Control
          type="text"
          value={descuento}
          onChange={(e) => setDescuento(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="envio">
        <Form.Label>Envío</Form.Label>
        <Form.Control
          type="text"
          value={envio}
          onChange={(e) => setEnvio(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="tipoPago">
        <Form.Label>Tipo de Pago</Form.Label>
        <Form.Control
          type="text"
          value={tipoPago}
          onChange={(e) => setTipoPago(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="estado">
        <Form.Label>Estado</Form.Label>
        <Form.Control
          type="text"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
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

      <Form.Group controlId="telefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
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
    
  );
};

export default FormularioPedidos;
