import React from "react";
import { Table } from "react-bootstrap";

const TablaProductos = ({ productos }) => {
  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre del Producto</th>
          <th>Fecha del Producto</th>
          <th>Descripción del Producto</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((item, index) => (
          <tr key={index}>
            <td>{item.Nombre_producto}</td>
            <td>{item.Fecha_producto}</td>
            <td>{item.Descripcion_producto}</td>
          </tr>
        ))}
      </tbody>
    </Table>

  );
};

export default TablaProductos;
