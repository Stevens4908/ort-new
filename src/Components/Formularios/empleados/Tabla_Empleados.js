import React from 'react';
import { Table } from 'react-bootstrap';

const Tabla_Empleados = ({ empleados }) => {
  return (
    <Table  bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cédula</th>
          <th>Teléfono</th>
          <th>Cargo</th>
          <th>Dirección</th>
          <th>Email</th>
          <th>Fecha de Ingreso</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((empleado, index) => (
          <tr key={index}>
            <td>{empleado.nombre}</td>
            <td>{empleado.cedula}</td>
            <td>{empleado.telefono}</td>
            <td>{empleado.cargo}</td>
            <td>{empleado.direccion}</td>
            <td>{empleado.email}</td>
            <td>{empleado.fecha_ingreso}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tabla_Empleados;
