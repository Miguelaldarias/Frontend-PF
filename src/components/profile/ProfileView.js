// src/components/profile/ProfileView.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchClienteProfileWithToken, fetchEntrenadorProfileWithToken, updateProfile } from '../../services/profileService';
import EditProfile from './EditProfile';

const ProfileView = () => {
    const [profile, setProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const { role } = useParams();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (role === 'cliente') {
                    const clienteProfile = await fetchClienteProfileWithToken(token);
                    setProfile(clienteProfile);
                } else if (role === 'entrenador') {
                    const entrenadorProfile = await fetchEntrenadorProfileWithToken(token);
                    setProfile(entrenadorProfile);
                }
            } catch (error) {
                console.error('Error al cargar el perfil:', error);
            }
        };

        fetchProfile();
    }, [role, token]);

    const handleEdit = () => setIsEditing(true);

    const handleSave = () => {
        setIsEditing(false);
        // Recargar el perfil actualizado
        window.location.reload();
    };

    return (
        <div className="profile-view">
            <h1>{role === 'cliente' ? 'Perfil del Cliente' : 'Perfil del Entrenador'}</h1>
            {profile && !isEditing && (
                <div>
                    <p>Nombre: {profile.nombre}</p>
                    <p>Email: {profile.email}</p>
                    {role === 'cliente' ? (
                        <>
                            <p>Edad: {profile.edad}</p>
                            <p>Peso: {profile.peso}</p>
                            <p>Objetivo: {profile.objetivo}</p>
                        </>
                    ) : (
                        <>
                            <p>Años de experiencia: {profile.años_experiencia}</p>
                            <p>Especialidades: {profile.especialidades}</p>
                        </>
                    )}
                    <button onClick={handleEdit}>Editar Perfil</button>
                </div>
            )}
            {isEditing && (
                <EditProfile profile={profile} role={role} onSave={handleSave} />
            )}
        </div>
    );
};

export default ProfileView;
