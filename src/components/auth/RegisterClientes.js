// src/components/auth/RegisterCliente.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/register_cliente.sass';


const RegisterCliente = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: '',
    peso: '',
    grasa_corporal: '',
    objetivo: '',
    contraseña: '',
    entrenador_id: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/clientes/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Registro de cliente exitoso');
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
    <div className="register-cliente-container">
      <h2>Registro Cliente</h2>
      <p className="welcome-message">¡Únete a nosotros y comienza tu transformación con GymSport!</p>
      <form onSubmit={handleSubmit} className="register-form">
        {['nombre', 'email', 'edad', 'peso', 'grasa_corporal', 'objetivo', 'contraseña', 'entrenador_id'].map((field, index) => (
          <div key={index} className="input-group">
            <label>{field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')}:</label>
            <input
              type={field === 'edad' || field === 'peso' || field === 'grasa_corporal' ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required={field !== 'entrenador_id'}
              placeholder={`Ingrese su ${field.replace('_', ' ')}`}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Registrar Cliente</button>
      </form>
    </div>
  );
};

export default RegisterCliente;
