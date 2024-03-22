import React, { useState } from 'react';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ExamenReact1 = () => {
  const [parcial1, setParcial1] = useState('');
  const [parcial2, setParcial2] = useState('');
  const [parcial3, setParcial3] = useState('');
  const [mensaje, setMensaje] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const notaFinal = parseFloat(parcial1) + parseFloat(parcial2) + parseFloat(parcial3);
    if (isNaN(notaFinal) || notaFinal < 0 || notaFinal > 100) {
      alert('Por favor, ingrese notas válidas.');
      return;
    }
    if (notaFinal >= 90) {
      setMensaje('Sobresaliente');
    } else if (notaFinal >= 80) {
      setMensaje('Muy Bueno');
    } else if (notaFinal >= 60) {
      setMensaje('Bueno');
    } else {
      setMensaje('Reprobado');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Calificador de notas</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="parcial1">Primer Parcial (30%)</Label>
          <Input
            type="number"
            name="parcial1"
            id="parcial1"
            value={parcial1}
            onChange={(e) => setParcial1(e.target.value)}
            placeholder="Ingrese la nota del primer parcial"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="parcial2">Segundo Parcial (30%)</Label>
          <Input
            type="number"
            name="parcial2"
            id="parcial2"
            value={parcial2}
            onChange={(e) => setParcial2(e.target.value)}
            placeholder="Ingrese la nota del segundo parcial"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="parcial3">Tercer Parcial (40%)</Label>
          <Input
            type="number"
            name="parcial3"
            id="parcial3"
            value={parcial3}
            onChange={(e) => setParcial3(e.target.value)}
            placeholder="Ingrese la nota del tercer parcial"
            required
          />
        </FormGroup>
        <Button color="primary">Calcular</Button>
      </Form>
      {mensaje && (
        <Alert className="mt-3" color={mensaje === 'Reprobado' ? 'danger' : 'success'}>
          {`Su resultado es: ${mensaje}`}
        </Alert>
      )}
    </div>
  );
};

export default ExamenReact1;
