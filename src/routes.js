import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/login';
import Registros from './pages/Registros';
import Dashboard from './components/dashboard/Dashboard';
import ClienteProfile from './components/profile/ClienteProfile';
import EntrenadorProfile from './components/profile/EntrenadorProfile';
import EditProfileForm from './components/profile/EditProfileForm';
import ProfileView from './components/profile/ProfileView';
import Instalaciones from './pages/Instalaciones';
import Programas from './pages/Programas';
import Nosotros from './pages/Nosotros';

const AppRoutes = () => {
  const [user, setUser] = useState(null);  // Estado para almacenar la información del usuario autenticado
  const [token, setToken] = useState(null);  // Estado para almacenar el token JWT

  // La obtención de un usuario autenticado (puede venir de localStorage o una API)
  useEffect(() => {
    const loggedUser = localStorage.getItem('user');

    if (loggedUser) {
        try {
            const parsedUser = JSON.parse(loggedUser);
            setUser(parsedUser);
        } catch (error) {
            console.error("Error parsing JSON from localStorage:", error);
            localStorage.removeItem('user');  // Eliminar el item si no es válido para evitar futuros errores
        }
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setUser={setUser} setToken={setToken} />} />       {/* Pasamos setUser y setToken a Login para actualizar el estado */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/registros/*" element={<Registros />} />
      <Route path="/profile/cliente" element={<ClienteProfile user={user} token={token} />} />       {/* Pasar user y token como props */}
      <Route path="/profile/entrenador" element={<EntrenadorProfile user={user} token={token} />} />    {/* Pasar user y token como props */}
      <Route path="/profile/edit" element={<EditProfileForm user={user} token={token} />} />      {/* Pasar user y token como props */}
      <Route path="/profile" element={<ProfileView user={user} />} />
      <Route path="/instalaciones" element={<Instalaciones />} />
      <Route path="/programas" element={<Programas />} />
      <Route path="/nosotros" element={<Nosotros />} />

    </Routes>
  );
};

export default AppRoutes;
