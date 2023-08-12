import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PostProductos } from "../../Controllers/Productos/funcionesProductos";

const FormularioProductos = (props) => {


  const [nombreProducto, setNombreProducto] = useState("");
  const [fechaProducto, setFechaProducto] = useState("");
  const [descripcionProducto, setDescripcionProducto] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una API o realizar otras acciones
    console.log({
      Nombre_producto: nombreProducto,
      Fecha_producto: fechaProducto,
      Descripcion_producto: descripcionProducto,
    });

    const data_env={
      Nombre_producto: nombreProducto,
      Fecha_producto: fechaProducto,
      Descripcion_producto: descripcionProducto,
    }

    //ENVIO DATOS Y OBTENGO NUEVAMENTE LA LISTA 
   let data= await PostProductos(data_env)
   props.onDataFromChild(data);
 
   //FIN

   props.handleClose();


  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nombreProducto">
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control
          type="text"
          value={nombreProducto}
          onChange={(e) => setNombreProducto(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="fechaProducto">
        <Form.Label>Fecha del Producto</Form.Label>
        <Form.Control
          type="date"
          value={fechaProducto}
          onChange={(e) => setFechaProducto(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="descripcionProducto">
        <Form.Label>Descripción del Producto</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={descripcionProducto}
          onChange={(e) => setDescripcionProducto(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-4">
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioProductos;
