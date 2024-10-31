// src/services/auth.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Función de login que será usada en login.js
export const login = async (email, contraseña) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, contraseña }), // Usar 'contraseña' como en el backend
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }

    return data; // Devolver datos de login (token, role, etc.)
  } catch (error) {
    console.error('Error en el login:', error);
    throw error;
  }
};

// Hook useAuth para manejar autenticación en otros componentes
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Verificar token almacenado en localStorage al cargar la app
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token) {
      fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch(() => {
          logout(); // Limpiar datos si hay error
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setUser(null);
    navigate('/login');
  };

  return {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };
};

export default useAuth;
