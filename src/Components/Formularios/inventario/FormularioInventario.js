import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PostInventario } from "../../Controllers/Inventario/FuncionesInventario";

const FormularioInventario = (props) => {

  const [nombreProducto, setNombreProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [unidadMedida, setUnidadMedida] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [precioTotal, setPrecioTotal] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una API o realizar otras acciones
    console.log({
      Nombre_Producto: nombreProducto,
      Categoria: categoria,
      Cantidad: cantidad,
      Unidad_Medida: unidadMedida,
      Precio_Unitario: precioUnitario,
      Precio_Total: precioTotal,
      Fecha_Ingreso: fechaIngreso,
      Fecha_Vencimiento: fechaVencimiento,
    });

    const data_env={
        Nombre_Producto: nombreProducto,
        Categoria: categoria,
        Cantidad: cantidad,
        Unidad_Medida: unidadMedida,
        Precio_Unitario: precioUnitario,
        Precio_Total: precioTotal,
        Fecha_Ingreso: fechaIngreso,
        Fecha_Vencimiento: fechaVencimiento,
      }

  

  //ENVIO DATOS Y OBTENGO NUEVAMENTE LA LISTA 
  let data= await PostInventario(data_env)
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

      <Form.Group controlId="categoria">
        <Form.Label>Categoría</Form.Label>
        <Form.Control
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="cantidad">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control
          type="text"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="unidadMedida">
        <Form.Label>Unidad de Medida</Form.Label>
        <Form.Control
          type="text"
          value={unidadMedida}
          onChange={(e) => setUnidadMedida(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="precioUnitario">
        <Form.Label>Precio Unitario</Form.Label>
        <Form.Control
          type="text"
          value={precioUnitario}
          onChange={(e) => setPrecioUnitario(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="precioTotal">
        <Form.Label>Precio Total</Form.Label>
        <Form.Control
          type="text"
          value={precioTotal}
          onChange={(e) => setPrecioTotal(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="fechaIngreso">
        <Form.Label>Fecha de Ingreso</Form.Label>
        <Form.Control
          type="date"
          value={fechaIngreso}
          onChange={(e) => setFechaIngreso(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="fechaVencimiento">
        <Form.Label>Fecha de Vencimiento</Form.Label>
        <Form.Control
          type="date"
          value={fechaVencimiento}
          onChange={(e) => setFechaVencimiento(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioInventario;
