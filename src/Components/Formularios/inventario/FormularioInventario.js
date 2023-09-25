import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { PostInventario } from "../../Controllers/Inventario/FuncionesInventario";

const FormularioInventario = (props) => {
  
  const [validationErrors, setValidationErrors] = useState({
    Nombre_Producto: null,
    Categoria: null,
    Cantidad: null,
    Unidad_Medida: null,
    Precio_Unitario: null,
    Precio_Total: null,
    Fecha_Ingreso: null,
    Fecha_Vencimiento: null,
  });
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
    const errors = {};

    if (!nombreProducto.trim()) {
      errors.Nombre_Producto = "Este campo es obligatorio";
    } else {
      errors.Nombre_Producto = null; // Establece el mensaje de error en null cuando no hay errores
    }

    if (!categoria.trim()) {
      errors.Categoria = "Este campo es obligatorio";
    } else {
      errors.Categoria = null;
    }

    if (!cantidad.trim()) {
      errors.Cantidad = "Este campo es obligatorio";
    } else {
      errors.Cantidad = null;
    }

    if (!unidadMedida.trim()) {
      errors.Unidad_Medida = "Este campo es obligatorio";
    } else {
      errors.Unidad_Medida = null;
    }

    if (!precioUnitario.trim()) {
      errors.Precio_Unitario = "Este campo es obligatorio";
    } else {
      errors.Precio_Unitario = null;
    }

    if (!precioTotal.trim()) {
      errors.Precio_Total = "Este campo es obligatorio";
    } else {
      errors.Precio_Total = null;
    }

    if (!fechaIngreso.trim()) {
      errors.Fecha_Ingreso = "Este campo es obligatorio";
    } else {
      errors.Fecha_Ingreso = null;
    }

    if (!fechaVencimiento.trim()) {
      errors.Fecha_Vencimiento = "Este campo es obligatorio";
    } else {
      errors.Fecha_Vencimiento = null;
    }

    // Si hay errores, mostrarlos y no enviar la solicitud
    if (Object.values(errors).some((error) => error !== null)) {
      setValidationErrors(errors);
      return;
    }
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

    const formData = {
      Nombre_Producto: nombreProducto,
      Categoria: categoria,
      Cantidad: cantidad,
      Unidad_Medida: unidadMedida,
      Precio_Unitario: precioUnitario,
      Precio_Total: precioTotal,
      Fecha_Ingreso: fechaIngreso,
      Fecha_Vencimiento: fechaVencimiento,
    };
  

  //ENVIO DATOS Y OBTENGO NUEVAMENTE LA LISTA 
  //let data= await PostInventario(data_env)
  //props.onDataFromChild(data);

  //FIN

  //props.handleClose();
  


  try {
    const response = await PostInventario(formData);
    props.onDataFromChild(response);
    props.handleClose();
  
  } catch (error) {
    if (error.response && error.response.status === 422) {
      // Si el controlador Laravel devuelve errores de validación
      setValidationErrors(error.response.data.errors);
      console.log('Errores de validación:', error.response.data.errors);
    }
    // Puedes manejar otros tipos de errores aquí si es necesario
  }

  
};

  return (
    <Form onSubmit={handleSubmit}>
     <Form.Group controlId="nombreProducto">
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control
          type="text"
          value={nombreProducto}
          onChange={(e) => setNombreProducto(e.target.value)}
        />
        {validationErrors.Nombre_Producto && (
          <p className="text-danger">{validationErrors.Nombre_Producto}</p>
        )}
      </Form.Group>

      <Form.Group controlId="categoria">
        <Form.Label>Categoría</Form.Label>
        <Form.Control
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        {validationErrors.Categoria && (
          <p className="text-danger">{validationErrors.Categoria}</p>
        )}
      </Form.Group>

      <Form.Group controlId="cantidad">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control
          type="text"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        {validationErrors.Cantidad && (
          <p className="text-danger">{validationErrors.Cantidad}</p>
        )}
      </Form.Group>


      <Form.Group controlId="unidadMedida">
        <Form.Label>Unidad de Medida</Form.Label>
        <Form.Control
          type="text"
          value={unidadMedida}
          onChange={(e) => setUnidadMedida(e.target.value)}
        />
        {validationErrors.Unidad_Medida && (
          <p className="text-danger">{validationErrors.Unidad_Medida}</p>
        )}
      </Form.Group>

       <Form.Group controlId="precioUnitario">
        <Form.Label>Precio Unitario</Form.Label>
        <Form.Control
          type="text"
          value={precioUnitario}
          onChange={(e) => setPrecioUnitario(e.target.value)}
        />
        {validationErrors.Precio_Unitario && (
          <p className="text-danger">{validationErrors.Precio_Unitario}</p>
        )}
      </Form.Group>

      <Form.Group controlId="precioTotal">
        <Form.Label>Precio Total</Form.Label>
        <Form.Control
          type="text"
          value={precioTotal}
          onChange={(e) => setPrecioTotal(e.target.value)}
        />
        {validationErrors.Precio_Total && (
          <p className="text-danger">{validationErrors.Precio_Total}</p>
        )}
      </Form.Group>

      <Form.Group controlId="fechaIngreso">
        <Form.Label>Fecha de Ingreso</Form.Label>
        <Form.Control
          type="date"
          value={fechaIngreso}
          onChange={(e) => setFechaIngreso(e.target.value)}
        />
        {validationErrors.Fecha_Ingreso && (
          <p className="text-danger">{validationErrors.Fecha_Ingreso}</p>
        )}
      </Form.Group>

      <Form.Group controlId="fechaVencimiento">
        <Form.Label>Fecha de Vencimiento</Form.Label>
        <Form.Control
          type="date"
          value={fechaVencimiento}
          onChange={(e) => setFechaVencimiento(e.target.value)}
        />
        {validationErrors.Fecha_Vencimiento && (
          <p className="text-danger">{validationErrors.Fecha_Vencimiento}</p>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioInventario;
