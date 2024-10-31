// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const role = localStorage.getItem('role');

  return (
    <div className="dashboard">
      <h1>Bienvenido al Dashboard</h1>

      {role === 'cliente' && (
        <div>
          <h2>Opciones para Clientes</h2>
          <Link to="/profile/cliente">Ver Perfil</Link>
          <Link to="/metrics">Ver Métricas</Link>
        </div>
      )}

      {role === 'entrenador' && (
        <div>
          <h2>Opciones para Entrenadores</h2>
          <Link to="/profile/entrenador">Ver Perfil</Link>
          <Link to="/manage-clients">Gestionar Clientes</Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
