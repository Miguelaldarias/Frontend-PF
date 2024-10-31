// src/services/entrenadorService.js

// Función para obtener el token del localStorage
const getToken = () => localStorage.getItem('token');

// Obtener la lista de clientes asignados al entrenador
export const getClientesAsignados = async () => {
  const token = getToken();
  const response = await fetch(`${process.env.REACT_APP_API_URL}/entrenador/clientes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener la lista de clientes asignados');
  }

  return await response.json();
};

// Obtener el perfil de un cliente específico
export const getClienteProfile = async (clienteId) => {
  const token = getToken();
  const response = await fetch(`${process.env.REACT_APP_API_URL}/cliente/profile/${clienteId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener el perfil del cliente');
  }

  return await response.json();
};

// Crear una métrica para un cliente
export const createMetrica = async (metricaData) => {
  const token = getToken();
  const response = await fetch(`${process.env.REACT_APP_API_URL}/metricas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(metricaData),
  });

  if (!response.ok) {
    throw new Error('Error al crear la métrica');
  }

  return await response.json();
};

// Crear una rutina para un cliente
export const createRutina = async (rutinaData) => {
  const token = getToken();
  const response = await fetch(`${process.env.REACT_APP_API_URL}/rutinas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(rutinaData),
  });

  if (!response.ok) {
    throw new Error('Error al crear la rutina');
  }

  return await response.json();
};

// Crear un plan nutricional para un cliente
export const createPlanNutricional = async (planData) => {
  const token = getToken();
  const response = await fetch(`${process.env.REACT_APP_API_URL}/planesnutricionales`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(planData),
  });

  if (!response.ok) {
    throw new Error('Error al crear el plan nutricional');
  }

  return await response.json();
};
