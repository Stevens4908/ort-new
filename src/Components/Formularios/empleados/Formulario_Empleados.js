import React, { useState } from 'react';

const Formulario_Empleados = () => {
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cargo, setCargo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al servidor o realizar otras acciones con los datos del formulario.
    console.log({
      nombre,
      cedula,
      telefono,
      cargo,
      direccion,
      email,
      fechaIngreso,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="cedula" className="form-label">Cédula</label>
        <input type="text" className="form-control" id="cedula" value={cedula} onChange={(e) => setCedula(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">Teléfono</label>
        <input type="text" className="form-control" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="cargo" className="form-label">Cargo</label>
        <input type="text" className="form-control" id="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="direccion" className="form-label">Dirección</label>
        <input type="text" className="form-control" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="fecha_ingreso" className="form-label">Fecha de ingreso</label>
        <input type="date" className="form-control" id="fecha_ingreso" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default Formulario_Empleados;
