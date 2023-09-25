import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PostMesas } from "../../Controllers/Mesas/funcionesMesas";

const FormularioMesas = (props) => {
  const [validationErrors, setValidationErrors] = useState({
    Disponibilidad_mesa: null,
    Registrar_mesa: null,
    Observacion: null,
   
  });
  const [disponibilidadMesa, setDisponibilidadMesa] = useState("");
  const [registrarMesa, setRegistrarMesa] = useState("");
  const [observacion, setObservacion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!disponibilidadMesa.trim()) {
      errors.Disponibilidad_mesa = "Este campo es obligatorio";
    } else {
      errors.Disponibilidad_mesa = null; // Establece el mensaje de error en null cuando no hay errores
    }

    if (!registrarMesa.trim()) {
      errors.Registrar_mesa = "Este campo es obligatorio";
    } else {
      errors.Registrar_mesa = null;
    }

    if (!observacion.trim()) {
      errors.Observacion = "Este campo es obligatorio";
    } else {
      errors.Observacion = null;
    }


    // Si hay errores, mostrarlos y no enviar la solicitud
    if (Object.values(errors).some((error) => error !== null)) {
      setValidationErrors(errors);
      return;
    }



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
          
        />
        {validationErrors.Disponibilidad_mesa && (
          <p className="text-danger">{validationErrors.Disponibilidad_mesa}</p>
        )}
      </Form.Group>

      <Form.Group controlId="registrarMesa">
        <Form.Label>Registrar Mesa</Form.Label>
        <Form.Control
          type="text"
          value={registrarMesa}
          onChange={(e) => setRegistrarMesa(e.target.value)}
          
        />
        {validationErrors.Registrar_mesa && (
          <p className="text-danger">{validationErrors.Registrar_mesa}</p>
        )}
      </Form.Group>

      <Form.Group controlId="observacion">
        <Form.Label>Observación</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={observacion}
          onChange={(e) => setObservacion(e.target.value)}
        />
         {validationErrors.Observacion && (
          <p className="text-danger">{validationErrors.Observacion}</p>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-4">
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioMesas;
