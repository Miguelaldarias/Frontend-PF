// src/components/auth/RegisterEntrenador.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/register_entrenador.sass';

const RegisterEntrenador = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: '',
    DNI: '',
    especialidades: '',
    años_experiencia: '',
    contraseña: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/entrenadores/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Registro de entrenador exitoso');
        navigate('/login');
      } else {
        const errorData = await response.json();
        alert(`Error en el registro: ${errorData.detail}`);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Ocurrió un error en el registro. Intenta de nuevo.');
    }
  };

  return (
    <div className="register-entrenador-container">
      <h2>Registro Entrenador</h2>
      <p className="welcome-message">¡Únete al equipo de GymSport y ayuda a transformar vidas!</p>
      <form onSubmit={handleSubmit} className="register-form">
        {['nombre', 'email', 'edad', 'DNI', 'especialidades', 'años_experiencia', 'contraseña'].map((field, index) => (
          <div key={index} className="input-group">
            <label>{field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')}:</label>
            <input
              type={field === 'edad' || field === 'años_experiencia' ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              placeholder={`Ingrese su ${field.replace('_', ' ')}`}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Registrar Entrenador</button>
      </form>
    </div>
  );
};

export default RegisterEntrenador;
