import React from "react";
import { Table } from "react-bootstrap";

const TablaFacturaciones = ({ facturaciones }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Producto</th>
          <th>Total</th>
          <th>Mesa</th>
        </tr>
      </thead>
      <tbody>
        {facturaciones.map((item, index) => (
          <tr key={index}>
            <td>{item.Cliente}</td>
            <td>{item.Producto}</td>
            <td>{item.total}</td>
            <td>{item.mesa}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaFacturaciones;
