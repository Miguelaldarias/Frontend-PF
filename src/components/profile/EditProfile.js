// src/components/profile/EditProfile.js
import React, { useState } from 'react';
import { updateProfile } from '../../services/profileService';
import '../../assets/styles/main.sass';

const EditProfile = ({ profile, role, onSave }) => {
    const [formData, setFormData] = useState({ ...profile });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProfile(formData, role);
            onSave(); // Recargar el perfil actualizado
        } catch (error) {
            console.error("Error al actualizar el perfil:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input name="nombre" value={formData.nombre} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input name="email" value={formData.email} onChange={handleChange} />
            </label>
            {/* Agrega campos adicionales para Cliente o Entrenador */}
            <button type="submit">Guardar Cambios</button>
        </form>
    );
};

export default EditProfile;
