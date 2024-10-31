// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Importar BrowserRouter
import AppRoutes from './routes'; // Importar las rutas definidas en routes.js
import './assets/styles/main.sass'; // Importar estilos globales

const App = () => {
  return (
    <div className="app-container">
      <AppRoutes /> {/* Renderizar las rutas definidas */}
    </div>
  );
};

export default App;
