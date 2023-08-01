import React from "react";
import { Table } from "react-bootstrap";

const TablaMesa = ({ mesas }) => {
  return (
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
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaMesa;
