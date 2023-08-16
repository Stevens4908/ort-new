import React from "react";
import { Table } from "react-bootstrap";

const TablaInventario = ({ inventario }) => {
    
  return (
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
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaInventario;
