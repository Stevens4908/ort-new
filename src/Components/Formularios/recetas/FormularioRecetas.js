import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import Select from 'react-select';
import { PostReceta } from '../../Controllers/Recetas/FuncionesRecetas';

const FormularioRecetas = (props) => {
  const handleIngredientesChange = selectedOptions => {
    setIngredientes(selectedOptions);
  };
  const [validationErrors, setValidationErrors] = useState({
    Nombre_Plato: null,
    Fotografia: null,
    Ingredientes: null,
   
  });
  const [nombrePlato, setNombrePlato] = useState('');
  const [fotografia, setFotografia] = useState(null);
  const [ingredientes, setIngredientes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!nombrePlato || !nombrePlato.trim()) {
      errors.Nombre_Plato = "Este campo es obligatorio";
    } else {
      errors.Nombre_Plato = null; // Establece el mensaje de error en null cuando no hay errores
    }

    if (fotografia === null) {
      errors.Fotografia = "Este campo es obligatorio";
    } else {
      errors.Fotografia = null;
    }

    if (!ingredientes || ingredientes.length === 0) {
      errors.Ingredientes = "Debes seleccionar al menos un ingrediente";
    } else {
      errors.Ingredientes = null;
    }


    // Si hay errores, mostrarlos y no enviar la solicitud
    if (Object.values(errors).some((error) => error !== null)) {
      setValidationErrors(errors);
      return;
    }

    // Crear un objeto FormData para enviar la imagen
    const formData = new FormData();
    formData.append('Nombre_Plato', nombrePlato);
    formData.append('Fotografia', fotografia); // Fotografia es el archivo seleccionado
    formData.append('Ingredientes', JSON.stringify(ingredientes.map(item => item.value)));

    // Enviar el formulario al servidor
    try {
      const response = await PostReceta(formData);
      console.log('Respuesta del servidor:', response);

      // Realizar otras acciones después de enviar el formulario si es necesario
      props.onDataFromChild(response);
      props.handleClose();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  const handleFotografiaChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile instanceof File) {
      setFotografia(selectedFile);
    }
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
        {validationErrors.Nombre_Plato && (
          <p className="text-danger">{validationErrors.Nombre_Plato}</p>
        )}
      </Form.Group>

      <Form.Group controlId="fotografia">
        <Form.Label>Fotografía</Form.Label>
        <Form.Control
          type="file"
          name="fotografia"
          onChange={handleFotografiaChange}
        />
        {fotografia && <Image src={URL.createObjectURL(fotografia)} thumbnail />}
        {validationErrors.Fotografia && (
          <p className="text-danger">{validationErrors.Fotografia}</p>
        )}
      </Form.Group>

      <Form.Group controlId="ingredientes">
        <Form.Label>Ingredientes</Form.Label>
        <Select
          options={props.inventario}
          isMulti
          value={ingredientes}
          onChange={handleIngredientesChange}
        />
          {validationErrors.Ingredientes && (
          <p className="text-danger">{validationErrors.Ingredientes}</p>
        )}
      </Form.Group>

      <Button className="mt-3" type="submit">Guardar</Button>
    </Form>
  );
};

export default FormularioRecetas;
