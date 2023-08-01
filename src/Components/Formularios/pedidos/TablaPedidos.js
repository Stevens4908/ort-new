import React from "react";
import { Table } from "react-bootstrap";

const TablaPedidos = ({ pedidos }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre del Pedido</th>
          <th>Fecha del Pedido</th>
          <th>Precio</th>
          <th>Descuento</th>
          <th>Envío</th>
          <th>Tipo de Pago</th>
          <th>Estado</th>
          <th>Dirección</th>
          <th>Teléfono</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre_pedido}</td>
            <td>{item.fecha_pedido}</td>
            <td>{item.precio}</td>
            <td>{item.descuento}</td>
            <td>{item.envio}</td>
            <td>{item.tipo_pago}</td>
            <td>{item.estado}</td>
            <td>{item.direccion}</td>
            <td>{item.telefono}</td>
            <td>{item.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaPedidos;
