import React from "react";
import { Table } from "react-bootstrap";

const TablaClientes = ({ clientes }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre Completo</th>
          <th>Cédula</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Dirección</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((item, index) => (
          <tr key={index}>
            <td>{item.Nombre_Completo}</td>
            <td>{item.Cedula}</td>
            <td>{item.Telefono}</td>
            <td>{item.Email}</td>
            <td>{item.Direccion}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaClientes;
