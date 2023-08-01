import React from "react";
import { Table } from "react-bootstrap";

const TablaRestaurantes = ({ restaurantes }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Dirección</th>
        </tr>
      </thead>
      <tbody>
        {restaurantes.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre}</td>
            <td>{item.direccion}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaRestaurantes;
