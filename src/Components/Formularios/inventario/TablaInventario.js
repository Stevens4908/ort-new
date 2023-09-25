
import { Table, Form, Button } from "react-bootstrap";
import React, { useState } from "react";

const TablaInventario = ({ inventario, setInventario }) => {
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si el formulario de edición está abierto
  const [editedInventa, setEditedInveta] = useState({});
  const handleEliminar = async (id) => {
    try {
      // Realiza una solicitud DELETE a la API para eliminar el elemento con el ID proporcionado.
      await fetch(`http://127.0.0.1:8000/api/deleteinventario/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Puedes incluir cualquier otro encabezado necesario, como token de autenticación, si es relevante.
        },
      });

      // Actualiza la vista eliminando el elemento de la lista de inventario.
      const nuevoInventario = inventario.filter(item => item.id !== id);
      setInventario(nuevoInventario);
    } catch (error) {
      console.error("Error al eliminar el elemento:", error);
    }
  };

  const handleEditar = (inve) => {
    // Cuando se hace clic en "Editar", guarda los valores de la mesa en editedMesa
    setEditedInveta({
      Nombre_Producto: inve.Nombre_Producto,
      Categoria: inve.Categoria,
      Cantidad: inve.Cantidad,
      Unidad_Medida: inve.Unidad_Medida,
      Precio_Unitario: inve.Precio_Unitario,
      Precio_Total: inve.Precio_Total,
      Fecha_Ingreso: inve.Fecha_Ingreso,
      Fecha_Vencimiento: inve.Fecha_Vencimiento,
      id: inve.id,
    });
    // Abre el formulario de edición
    setIsEditing(true);
  };

  

  const handleGuardar = async () => {
    try {
      // Envía los datos editados al servidor
      await fetch(`http://127.0.0.1:8000/api/updinveta/${editedInventa.id}`, {
        method: 'PUT', // Puedes usar 'PATCH' si la API lo admite
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedInventa),
      });

      // Cierra el formulario de edición
      setIsEditing(false);

      // Actualiza la lista de mesas con los datos editados
      const updatedMesas = inventario.map(item => {
        if (item.id === editedInventa.id) {
          return editedInventa;
        }
        return item;
      });
      setInventario(updatedMesas);
    } catch (error) {
      console.error("Error al actualizar el elemento:", error);
    }
  };
  return (
    <div>
    {isEditing ? ( // Renderiza el formulario de edición si isEditing es true
    <Form>
   <Form.Group controlId="disponibilidadMesa">
     <Form.Label>Nombre Producto</Form.Label>
     <Form.Control
       type="text"
       name="Nombre_Producto"
       value={editedInventa.Nombre_Producto}
       onChange={(e) => setEditedInveta({ ...editedInventa, Nombre_Producto: e.target.value })}
     />
   </Form.Group>

   <Form.Group controlId="registrarMesa">
     <Form.Label>Categoria</Form.Label>
     <Form.Control
       type="text"
       name="Categoria"
       value={editedInventa.Categoria}
       onChange={(e) => setEditedInveta({ ...editedInventa, Categoria: e.target.value })}
     />
   </Form.Group>

   <Form.Group controlId="observacion">
     <Form.Label>Cantidad</Form.Label>
     <Form.Control
       as="textarea"
       rows={3}
       name="Cantidad"
       value={editedInventa.Cantidad}
       onChange={(e) => setEditedInveta({ ...editedInventa, Cantidad: e.target.value })}
     />
   </Form.Group>

   <Form.Group controlId="observacion">
     <Form.Label>Unidad de Medida</Form.Label>
     <Form.Control
       as="textarea"
       rows={3}
       name="Unidad_Medida"
       value={editedInventa.Unidad_Medida}
       onChange={(e) => setEditedInveta({ ...editedInventa, Unidad_Medida: e.target.value })}
     />
   </Form.Group>

   <Form.Group controlId="observacion">
     <Form.Label>Precio Unitario</Form.Label>
     <Form.Control
       as="textarea"
       rows={3}
       name="Precio_Unitario"
       value={editedInventa.Precio_Unitario}
       onChange={(e) => setEditedInveta({ ...editedInventa, Precio_Unitario: e.target.value })}
     />
   </Form.Group>

   <Form.Group controlId="observacion">
     <Form.Label>Precio Total</Form.Label>
     <Form.Control
       as="textarea"
       rows={3}
       name="Precio_Total"
       value={editedInventa.Precio_Total}
       onChange={(e) => setEditedInveta({ ...editedInventa, Precio_Total: e.target.value })}
     />
   </Form.Group>

   <Form.Group controlId="observacion">
     <Form.Label>Fecha Ingreso</Form.Label>
     <Form.Control
       as="textarea"
       rows={3}
       name="Fecha_Ingreso"
       value={editedInventa.Fecha_Ingreso}
       onChange={(e) => setEditedInveta({ ...editedInventa, Fecha_Ingreso: e.target.value })}
     />
   </Form.Group>

   <Form.Group controlId="observacion">
     <Form.Label>Fecha Vencimiento</Form.Label>
     <Form.Control
       as="textarea"
       rows={3}
       name="Fecha_Vencimiento"
       value={editedInventa.Fecha_Vencimiento}
       onChange={(e) => setEditedInveta({ ...editedInventa, Fecha_Vencimiento: e.target.value })}
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
          <th>Nombre del Producto</th>
          <th>Categoría</th>
          <th>Cantidad</th>
          <th>Unidad de Medida</th>
          <th>Precio Unitario</th>
          <th>Precio Total</th>
          <th>Fecha de Ingreso</th>
          <th>Fecha de Vencimiento</th>
        </tr>
      </thead>
      <tbody>
        {inventario.map((item, index) => (
          <tr key={index}>
            <td>{item.Nombre_Producto}</td>
            <td>{item.Categoria}</td>
            <td>{item.Cantidad}</td>
            <td>{item.Unidad_Medida}</td>
            <td>{item.Precio_Unitario}</td>
            <td>{item.Precio_Total}</td>
            <td>{item.Fecha_Ingreso}</td>
            <td>{item.Fecha_Vencimiento}</td>
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

export default TablaInventario;
