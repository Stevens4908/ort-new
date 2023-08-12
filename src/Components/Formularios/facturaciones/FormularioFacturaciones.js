import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PostFacturaciones } from "../../Controllers/Facturaciones/funcionesFacturaciones";

const FormularioFacturaciones = (props) => {

  const [cliente, setCliente] = useState("");
  const [producto, setProducto] = useState("");
  const [total, setTotal] = useState("");
  const [mesa, setMesa] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una API o realizar otras acciones
    console.log({
      Cliente: cliente,
      Producto: producto,
      total: total,
      mesa: mesa,
    });

    const data_env={
      Cliente: cliente,
      Producto: producto,
      total: total,
      mesa: mesa,
    }

//ENVIO DATOS Y OBTENGO NUEVAMENTE LA LISTA 
   let data= await PostFacturaciones(data_env)
    props.onDataFromChild(data);
  
    //FIN

    props.handleClose();

  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="cliente">
        <Form.Label>Cliente</Form.Label>
        <Form.Control
          type="text"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="producto">
        <Form.Label>Producto</Form.Label>
        <Form.Control
          type="text"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="total">
        <Form.Label>Total</Form.Label>
        <Form.Control
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="mesa">
        <Form.Label>Mesa</Form.Label>
        <Form.Control
          type="text"
          value={mesa}
          onChange={(e) => setMesa(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-4">
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioFacturaciones;
