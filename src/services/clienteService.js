// src/services/clienteService.js
import { getToken } from './auth';

export const getMetricas = async (clienteId) => {
  const token = getToken();
  const response = await fetch(`${process.env.REACT_APP_API_URL}/clientes/${clienteId}/metricas`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

export const getRutinas = async (clienteId) => {
  const token = getToken();
  const response = await fetch(`${process.env.REACT_APP_API_URL}/clientes/${clienteId}/rutinas`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

export const getPlanesNutricionales = async (clienteId) => {
  const token = getToken();
  const response = await fetch(`${process.env.REACT_APP_API_URL}/clientes/${clienteId}/planesnutricionales`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};
