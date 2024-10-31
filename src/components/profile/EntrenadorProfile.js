// src/components/profile/EntrenadorProfile.js
import React, { useEffect, useState } from 'react';
import {
  fetchEntrenadorProfileWithToken,
  fetchClientesByEntrenador,
  create_metrica,
  create_rutina,
  create_plan_nutricional
} from '../../services/profileService';
import '../../assets/styles/entrenador_profile.sass';

const EntrenadorProfile = () => {
  const [entrenador, setEntrenador] = useState(null);
  const [clientes, setClientes] = useState([]);
  const [metricData, setMetricData] = useState({});
  const [routineData, setRoutineData] = useState({});
  const [planData, setPlanData] = useState({});
  const [expandedClient, setExpandedClient] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entrenadorData = await fetchEntrenadorProfileWithToken(token);
        setEntrenador(entrenadorData);

        const clientesData = await fetchClientesByEntrenador(entrenadorData.id, token);
        setClientes(clientesData);
      } catch (error) {
        console.error("Error al recuperar los datos:", error);
      }
    };
    fetchData();
  }, [token]);

  const handleInputChange = (setter, clienteId, e) => {
    setter((prevData) => ({
      ...prevData,
      [clienteId]: {
        ...prevData[clienteId],
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleCreate = async (createFunction, clienteId, data) => {
    try {
      await createFunction(clienteId, data[clienteId], token);
      alert('Creación realizada con éxito');
    } catch (error) {
      console.error("Error al crear:", error);
    }
  };

  const toggleClientSection = (clienteId) => {
    setExpandedClient((prevId) => (prevId === clienteId ? null : clienteId));
  };

  if (!entrenador) return <div>Loading...</div>;

  return (
    <div className="entrenador-profile">
      <div className="profile-info">
        <h2>Perfil de Entrenador</h2>
        <p><strong>Nombre:</strong> {entrenador.nombre}</p>
        <p><strong>Email:</strong> {entrenador.email}</p>
        <p><strong>Años de experiencia:</strong> {entrenador.años_experiencia}</p>
        <p><strong>Especialidades:</strong> {entrenador.especialidades}</p>
      </div>

      <div className="clientes-asignados">
        <h3>Clientes Asignados</h3>
        <div className="clientes-list">
          {clientes.length > 0 ? (
            clientes.map((cliente) => (
              <div className="cliente" key={cliente.id}>
                <div className="cliente-header">
                  <p><strong>Nombre:</strong> {cliente.nombre}</p>
                  <p><strong>Email:</strong> {cliente.email}</p>
                  <button className="btn btn-primary" onClick={() => toggleClientSection(cliente.id)}>
                    {expandedClient === cliente.id ? 'Ocultar Detalles' : 'Ver Detalles'}
                  </button>
                </div>

                {expandedClient === cliente.id && (
                  <div className="acciones">
                    {/* Crear Métrica */}
                    <div className="metrica-form">
                      <h4>Crear Métrica</h4>
                      <input type="number" name="peso" placeholder="Peso" onChange={(e) => handleInputChange(setMetricData, cliente.id, e)} />
                      <input type="number" name="grasa_corporal" placeholder="Grasa Corporal" onChange={(e) => handleInputChange(setMetricData, cliente.id, e)} />
                      <input type="text" name="rendimiento" placeholder="Rendimiento" onChange={(e) => handleInputChange(setMetricData, cliente.id, e)} />
                      <input type="text" name="informe" placeholder="Informe" onChange={(e) => handleInputChange(setMetricData, cliente.id, e)} />
                      <button onClick={() => handleCreate(create_metrica, cliente.id, metricData)}>Crear Métrica</button>
                    </div>

                    {/* Crear Rutina */}
                    <div className="rutina-form">
                      <h4>Crear Rutina</h4>
                      <input type="text" name="nombre" placeholder="Nombre de la rutina" onChange={(e) => handleInputChange(setRoutineData, cliente.id, e)} />
                      <input type="text" name="descripcion" placeholder="Descripción" onChange={(e) => handleInputChange(setRoutineData, cliente.id, e)} />
                      <input type="number" name="entrenador_id" placeholder="{entrenador.id}" onChange={(e) => handleInputChange(setRoutineData, cliente.id, e)} />
                      <button onClick={() => handleCreate(create_rutina, cliente.id, routineData)}>Crear Rutina</button>
                    </div>

                    {/* Crear Plan Nutricional */}
                    <div className="plan-form">
                      <h4>Crear Plan Nutricional</h4>
                      <input type="text" name="nombre" placeholder="Nombre del plan" onChange={(e) => handleInputChange(setPlanData, cliente.id, e)} />
                      <input type="text" name="descripcion" placeholder="Descripción" onChange={(e) => handleInputChange(setPlanData, cliente.id, e)} />
                      <input type="number" name="entrenador_id" placeholder="{entrenador.id}" onChange={(e) => handleInputChange(setPlanData, cliente.id, e)} />
                      <button onClick={() => handleCreate(create_plan_nutricional, cliente.id, planData)}>Crear Plan Nutricional</button>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No hay clientes asignados</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EntrenadorProfile;
