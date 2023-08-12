import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PostPedidos } from "../../Controllers/Pedidos/funcionesPedidos";

const FormularioPedidos = (props) => {

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

  const handleSubmit = async (e) => {

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

    const data_env={
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
    }

//ENVIO DATOS Y OBTENGO NUEVAMENTE LA LISTA 
   let data= await PostPedidos(data_env)
    props.onDataFromChild(data);
  
    //FIN

    props.handleClose();

  };

  return (

    <Form onSubmit={handleSubmit} className="mb-2">
      <Form.Group controlId="nombrePedido" className="mb-3">
        <Form.Label>Nombre del Pedido</Form.Label>
        <Form.Control
          type="text"
          value={nombrePedido}
          onChange={(e) => setNombrePedido(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="fechaPedido" className="mb-3">
        <Form.Label>Fecha del Pedido</Form.Label>
        <Form.Control
          type="date"
          value={fechaPedido}
          onChange={(e) => setFechaPedido(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="precio" className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="text"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="descuento" className="mb-3">
        <Form.Label>Descuento</Form.Label>
        <Form.Control
          type="text"
          value={descuento}
          onChange={(e) => setDescuento(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="envio" className="mb-3">
        <Form.Label>Envío</Form.Label>
        <Form.Control
          type="text"
          value={envio}
          onChange={(e) => setEnvio(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="tipoPago" className="mb-3">
        <Form.Label>Tipo de Pago</Form.Label>
        <Form.Control
          type="text"
          value={tipoPago}
          onChange={(e) => setTipoPago(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="estado" className="mb-3">
        <Form.Label>Estado</Form.Label>
        <Form.Control
          type="text"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="direccion" className="mb-3">
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="telefono" className="mb-3">
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

      <Button variant="primary" type="submit" className="mt-4">
        Enviar
      </Button>
    </Form>
    
  );
};

export default FormularioPedidos;
