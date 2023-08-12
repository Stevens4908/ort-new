import React, { useState } from 'react';
//import { PostRestaurantes } from "../../Controllers/Restaurantes/functionsrestaurantes";
import { PostEmpleado } from '../../Controllers/Empleados/funcionesempleados';

const Formulario_Empleados = (props) => {


  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cargo, setCargo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');

  const handleSubmit = async (e) => {
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

    const data_env1={
      nombre: nombre,
      cedula: cedula,
      telefono: telefono,
      cargo: cargo,
      direccion: direccion,
      email: email,
      fecha_ingreso: fechaIngreso,
    };


   let data1= await PostEmpleado(data_env1)

    props.onDataFromChild1(data1);
  
    //FIN

    props.handleClose();
  


      
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input type="text" className="form-control    focus-ring focus-ring-dark  " id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
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
        <label htmlFor="direccion1" className="form-label">Dirección</label>
        <input type="text" className="form-control" id="direccion1" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
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
