import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import Select from 'react-select';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';

const options = [
  { value: 'ingrediente1', label: 'Ingrediente 1' },
  { value: 'ingrediente2', label: 'Ingrediente 2' },
  { value: 'ingrediente3', label: 'Ingrediente 3' },
  { value: 'ingrediente4', label: 'Ingrediente 4' },
  { value: 'ingrediente5', label: 'Ingrediente 5' },
  // Agrega más ingredientes según sea necesario
];

const FormularioRecetas = () => {
  const [nombrePlato, setNombrePlato] = useState('');
  const [fotografia, setFotografia] = useState('');
  const [ingredientes, setIngredientes] = useState([]);

  const handleIngredientesChange = selectedOptions => {
    setIngredientes(selectedOptions);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Aquí puedes enviar los datos a tu backend o realizar las operaciones necesarias
    console.log('Nombre del plato:', nombrePlato);
    console.log('Fotografía:', fotografia);
    console.log('Ingredientes:', ingredientes);
  };

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
        <Form.Label>Fotografía (URL)</Form.Label>
        <Form.Control
          type="text"
          value={fotografia}
          onChange={e => setFotografia(e.target.value)}
        />
        {fotografia && <Image src={fotografia} thumbnail />}
      </Form.Group>

      <Form.Group controlId="ingredientes">
        <Form.Label>Ingredientes</Form.Label>
        <Select
          options={options}
          isMulti
          value={ingredientes}
          onChange={handleIngredientesChange}
        />
      </Form.Group>

      <Button className="mt-3" type="submit">Guardar</Button>
    </Form>
  );
};

export default FormularioRecetas;
