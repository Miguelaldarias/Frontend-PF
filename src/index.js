// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importar el componente principal de la aplicación
import { BrowserRouter } from 'react-router-dom'; // Importar BrowserRouter para el enrutamiento
import './assets/styles/main.sass'; // Importar los estilos globales

// Crear el root para React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar el componente App dentro de BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
