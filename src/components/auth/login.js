// src/components/auth/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth';
import '../../assets/styles/login.sass';
import logo from '../../assets/images/Logo.jpg'; // Ruta para importar la imagen del logo


const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, contraseña);
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('role', data.role);
      navigate(`/profile/${data.role}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="slogan">
          <h1>Transforma tu vida en GymSport</h1>
          <p>Únete a nosotros para alcanzar tus metas de fitness y ser parte de una comunidad motivadora.</p>
        </div>
      </div>
      <div className="login-form">
        <img src={logo} alt="GymSport" className="gym-logo" />
        <form onSubmit={handleSubmit}>
          <h2>Iniciar Sesión</h2>
          {error && <div className="error-message">{error}</div>}
          <div className="input-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Contraseña:</label>
            <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
