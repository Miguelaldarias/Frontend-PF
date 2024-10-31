// src/services/profileService.js
import axios from 'axios';

// Crear una métrica para un cliente
export const create_metrica = async (clienteId, data, token) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/metricas/`, {
        cliente_id: clienteId,
        ...data
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Crear una rutina para un cliente
export const create_rutina = async (clienteId, data, token) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/rutinas/`, {
        cliente_id: clienteId,
        ...data
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Crear un plan nutricional para un cliente
export const create_plan_nutricional = async (clienteId, data, token) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/planesnutricionales/`, {
        cliente_id: clienteId,
        ...data
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Obtener las métricas de un cliente
export const fetchClienteMetrics = async (clienteId, token) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/metricas/${clienteId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Obtener las rutinas de un cliente
export const fetchClienteRoutines = async (clienteId, token) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/rutinas/${clienteId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Obtener los planes nutricionales de un cliente
export const fetchClientePlans = async (clienteId, token) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/planesnutricionales/${clienteId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Actualizar perfil (cliente o entrenador)
export const updateProfile = async (data, token) => {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/profile`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

// Obtener el perfil del cliente utilizando el token
export const fetchClienteProfileWithToken = async (token) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/clientes/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Obtener el perfil del entrenador utilizando el token
export const fetchEntrenadorProfileWithToken = async (token) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/entrenadores/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Obtener los clientes asignados a un entrenador
export const fetchClientesByEntrenador = async (entrenadorId, token) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/entrenadores/${entrenadorId}/clientes`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
