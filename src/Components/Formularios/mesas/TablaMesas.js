import { Table, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
//import MesaFormulario from "./MesaFormulario";

const TablaMesa = ({ mesas, setMesa  }) => {
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si el formulario de edición está abierto
  const [editedMesa, setEditedMesa] = useState({});
  const handleEliminar = async (id) => {
    try {
      // Realiza una solicitud DELETE a la API para eliminar el elemento con el ID proporcionado.
      await fetch(`http://127.0.0.1:8000/api/deletemesa/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Puedes incluir cualquier otro encabezado necesario, como token de autenticación, si es relevante.
        },
      });

      // Actualiza la vista eliminando el elemento de la lista de inventario.
      const nuevoInventario = mesas.filter(item => item.id !== id);
      setMesa(nuevoInventario);
    } catch (error) {
      console.error("Error al eliminar el elemento:", error);
    }
  };

  

  const handleEditar = (mesa) => {
    // Cuando se hace clic en "Editar", guarda los valores de la mesa en editedMesa
    setEditedMesa({
      Disponibilidad_mesa: mesa.Disponibilidad_mesa,
      Registrar_mesa: mesa.Registrar_mesa,
      Observacion: mesa.Observacion,
      id: mesa.id,
    });
    // Abre el formulario de edición
    setIsEditing(true);
  };

  

  const handleGuardar = async () => {
    try {
      // Envía los datos editados al servidor
      await fetch(`http://127.0.0.1:8000/api/updamesa/${editedMesa.id}`, {
        method: 'PUT', // Puedes usar 'PATCH' si la API lo admite
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedMesa),
      });

      // Cierra el formulario de edición
      setIsEditing(false);

      // Actualiza la lista de mesas con los datos editados
      const updatedMesas = mesas.map(item => {
        if (item.id === editedMesa.id) {
          return editedMesa;
        }
        return item;
      });
      setMesa(updatedMesas);
    } catch (error) {
      console.error("Error al actualizar el elemento:", error);
    }
  };

  return (
    <div>
       {isEditing ? ( // Renderiza el formulario de edición si isEditing es true
       <Form>
      <Form.Group controlId="disponibilidadMesa">
        <Form.Label>Disponibilidad de Mesa</Form.Label>
        <Form.Control
          type="text"
          name="Disponibilidad_mesa"
          value={editedMesa.Disponibilidad_mesa}
          onChange={(e) => setEditedMesa({ ...editedMesa, Disponibilidad_mesa: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="registrarMesa">
        <Form.Label>Registrar Mesa</Form.Label>
        <Form.Control
          type="text"
          name="Registrar_mesa"
          value={editedMesa.Registrar_mesa}
          onChange={(e) => setEditedMesa({ ...editedMesa, Registrar_mesa: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="observacion">
        <Form.Label>Observación</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="Observacion"
          value={editedMesa.Observacion}
          onChange={(e) => setEditedMesa({ ...editedMesa, Observacion: e.target.value })}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleGuardar}>
            Guardar
          </Button>
        </Form>
      ) : (
        
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Disponibilidad de Mesa</th>
          <th>Registrar Mesa</th>
          <th>Observación</th>
        </tr>
      </thead>
      <tbody>
        {mesas.map((item, index) => (
          <tr key={index}>
            <td>{item.Disponibilidad_mesa}</td>
            <td>{item.Registrar_mesa}</td>
            <td>{item.Observacion}</td>
            <td>
              <button
                onClick={() => handleEliminar(item.id)}
                className="btn btn-danger"
              >
                Eliminar
              </button>
              
              <button   className="btn btn-success" onClick={() => handleEditar(item)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    )}
    </div>
  );
};

export default TablaMesa;