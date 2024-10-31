// src/components/profile/ClienteProfile.js
import React, { useEffect, useState } from 'react';
import { fetchClienteProfileWithToken, fetchClienteMetrics, fetchClienteRoutines, fetchClientePlans } from '../../services/profileService';
import '../../assets/styles/cliente_profile.sass';

const ClienteProfile = () => {
    const [cliente, setCliente] = useState(null);
    const [metrics, setMetrics] = useState([]);
    const [routines, setRoutines] = useState([]);
    const [plans, setPlans] = useState([]);
    const [showMetricsHistory, setShowMetricsHistory] = useState(false);
    const [showRoutinesHistory, setShowRoutinesHistory] = useState(false);
    const [showPlansHistory, setShowPlansHistory] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const clienteProfile = await fetchClienteProfileWithToken(token);
                setCliente(clienteProfile);
                const metricsData = await fetchClienteMetrics(clienteProfile.id, token);
                setMetrics(metricsData);
                const routinesData = await fetchClienteRoutines(clienteProfile.id, token);
                setRoutines(routinesData);
                const plansData = await fetchClientePlans(clienteProfile.id, token);
                setPlans(plansData);
            } catch (error) {
                console.error("Error al recuperar el perfil y los datos:", error);
            }
        };

        fetchProfile();
    }, [token]);

    if (!cliente) return <div>Loading...</div>;

    // Obtener la última métrica, rutina y plan nutricional
    const latestMetric = metrics[metrics.length - 1];
    const latestRoutine = routines[routines.length - 1];
    const latestPlan = plans[plans.length - 1];

    return (
        <div className="cliente-profile">
            <div className="overlay"></div>
            <div className="content">
                <div className="profile-info">
                    <h2>Perfil de Cliente</h2>
                    <p><strong>Nombre:</strong> {cliente.nombre}</p>
                    <p><strong>Email:</strong> {cliente.email}</p>
                    <p><strong>Edad:</strong> {cliente.edad}</p>
                    <p><strong>Peso:</strong> {cliente.peso}</p>
                    <p><strong>Objetivo:</strong> {cliente.objetivo}</p>
                </div>

                {/* Última Métrica */}
                <div className="metricas">
                    <h3>Métricas</h3>
                    {latestMetric ? (
                        <div className="item">
                            <p><strong>Peso:</strong> {latestMetric.peso}</p>
                            <p><strong>Grasa Corporal:</strong> {latestMetric.grasa_corporal}</p>
                            <p><strong>Rendimiento:</strong> {latestMetric.rendimiento}</p>
                            <p><strong>Informe:</strong> {latestMetric.informe}</p>
                        </div>
                    ) : (
                        <p>No hay métricas registradas.</p>
                    )}
                    <button className="btn btn-secondary" onClick={() => setShowMetricsHistory(!showMetricsHistory)}>
                        {showMetricsHistory ? 'Ocultar Historial' : 'Ver Historial Completo'}
                    </button>
                    {showMetricsHistory && metrics.length > 1 && (
                        <div className="historial">
                            {metrics.slice(0, -1).map((metric) => (
                                <div className="item" key={metric.id}>
                                    <p><strong>Peso:</strong> {metric.peso}</p>
                                    <p><strong>Grasa Corporal:</strong> {metric.grasa_corporal}</p>
                                    <p><strong>Rendimiento:</strong> {metric.rendimiento}</p>
                                    <p><strong>Informe:</strong> {metric.informe}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Última Rutina */}
                <div className="rutinas">
                    <h3>Rutinas</h3>
                    {latestRoutine ? (
                        <div className="item">
                            <p><strong>Nombre de Rutina:</strong> {latestRoutine.nombre}</p>
                            <p><strong>Descripción:</strong> {latestRoutine.descripcion}</p>
                        </div>
                    ) : (
                        <p>No hay rutinas registradas.</p>
                    )}
                    <button className="btn btn-secondary" onClick={() => setShowRoutinesHistory(!showRoutinesHistory)}>
                        {showRoutinesHistory ? 'Ocultar Historial' : 'Ver Historial Completo'}
                    </button>
                    {showRoutinesHistory && routines.length > 1 && (
                        <div className="historial">
                            {routines.slice(0, -1).map((routine) => (
                                <div className="item" key={routine.id}>
                                    <p><strong>Nombre de Rutina:</strong> {routine.nombre}</p>
                                    <p><strong>Descripción:</strong> {routine.descripcion}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Último Plan Nutricional */}
                <div className="planes">
                    <h3>Planes Nutricionales</h3>
                    {latestPlan ? (
                        <div className="item">
                            <p><strong>Nombre del Plan:</strong> {latestPlan.nombre}</p>
                            <p><strong>Descripción:</strong> {latestPlan.descripcion}</p>
                        </div>
                    ) : (
                        <p>No hay planes nutricionales registrados.</p>
                    )}
                    <button className="btn btn-secondary" onClick={() => setShowPlansHistory(!showPlansHistory)}>
                        {showPlansHistory ? 'Ocultar Historial' : 'Ver Historial Completo'}
                    </button>
                    {showPlansHistory && plans.length > 1 && (
                        <div className="historial">
                            {plans.slice(0, -1).map((plan) => (
                                <div className="item" key={plan.id}>
                                    <p><strong>Nombre del Plan:</strong> {plan.nombre}</p>
                                    <p><strong>Descripción:</strong> {plan.descripcion}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClienteProfile;
