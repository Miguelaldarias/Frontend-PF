// src/pages/Registros.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import RegisterClientes from '../components/auth/RegisterClientes';
import RegisterEntrenador from '../components/auth/RegisterEntrenador';
import '../assets/styles/registro.sass';

const Registros = () => {
  return (
    <div className="registros-container">
      <header className="registros-header">
        <h1>Registros de Clientes y Entrenadores</h1>
        <p className="subtitle">Seleccione una opción para comenzar el registro</p>
      </header>

      {/* Eslogan de bienvenida */}
      <section className="welcome-slogan">
        <h2>Bienvenido a la Familia GymSport</h2>
        <p>Nos alegra que quieras unirte a nuestra comunidad. ¡Estamos aquí para ayudarte a alcanzar tus objetivos de salud y fitness!</p>
      </section>

      <nav className="registros-nav">
        <Link to="/registros/clientes" className="btn btn-secondary">Registro de Clientes</Link>
        <Link to="/registros/entrenadores" className="btn btn-secondary">Registro de Entrenadores</Link>
      </nav>

      <div className="registros-content">
        <Routes>
          <Route path="clientes" element={<RegisterClientes />} />
          <Route path="entrenadores" element={<RegisterEntrenador />} />
        </Routes>
      </div>
    </div>
  );
};

export default Registros;
