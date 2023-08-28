import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import Select from 'react-select';
import { PostReceta } from '../../Controllers/Recetas/FuncionesRecetas';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';






const FormularioRecetas = (props) => {

const handleIngredientesChange = selectedOptions => {
    setIngredientes(selectedOptions);
  };

  const [nombrePlato, setNombrePlato] = useState('');
  const [fotografia, setFotografia] = useState('');
  const [ingredientes, setIngredientes] = useState([]);




  const handleSubmit = async (e) => {


    
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una API o realizar otras acciones
    console.log({
      Nombre_Plato: nombrePlato,
      Fotografia: fotografia,
      Ingredientes: ingredientes,
   
    });


    const data_env={
      Nombre_Plato: nombrePlato,
      Fotografia: fotografia,
      Ingredientes: JSON.stringify(ingredientes.map(item => item.value)),
      }

  console.log(data_env)

  //ENVIO DATOS Y OBTENGO NUEVAMENTE LA LISTA 
  let data= await PostReceta(data_env)
  
  props.onDataFromChild(data);

  //FIN

  props.handleClose();















/*
  console.log(inventario)
  const [nombrePlato, setNombrePlato] = useState('');
  const [fotografia, setFotografia] = useState('');
  const [ingredientes, setIngredientes] = useState([]);

  
  const handleSubmit = event => {
    event.preventDefault();
    // Aquí puedes enviar los datos a tu backend o realizar las operaciones necesarias
    console.log('Nombre del plato:', nombrePlato);
    console.log('Fotografía:', fotografia);
    console.log('Ingredientes:', ingredientes);
  };
*/
}

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nombrePlato">
        <Form.Label>Nombre del Plato</Form.Label>
        <Form.Control
          type="text"
          value={nombrePlato}
          onChange={e => setNombrePlato(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="fotografia">
        <Form.Label>Fotografía</Form.Label>
        <Form.Control
          type="file"
          value={fotografia}
          onChange={e => setFotografia(e.target.value)}
        />
        {fotografia && <Image src={fotografia} thumbnail />}
      </Form.Group>

      <Form.Group controlId="ingredientes">
        <Form.Label>Ingredientes</Form.Label>
        <Select
          options={props.inventario}
          isMulti
          //value={ingredientes}
          onChange={handleIngredientesChange}
        />
      </Form.Group>

      <Button className="mt-3" type="submit">Guardar</Button>
    </Form>
  );
};

export default FormularioRecetas;
