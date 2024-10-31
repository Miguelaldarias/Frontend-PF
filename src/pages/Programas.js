// src/pages/Programas.js
import React from 'react';
import '../assets/styles/programas.sass';

// Importar imágenes para cada actividad
import functionalImage from '../assets/images/programas/entrenamiento_funcional.jpg';
import yogaImage from '../assets/images/programas/yoga.jpg';
import crossfitImage from '../assets/images/programas/CrossFit.jpg';
import boxeoImage from '../assets/images/programas/boxeo.jpg';
import nutricionImage from '../assets/images/programas/nutrición2.jpg';

const Programas = () => {
  return (
    <div className="programas-container">
      <h1>Programas y Actividades</h1>
      <p>Ofrecemos una variedad de programas que se adaptan a todos los niveles y objetivos. Desde clases de alta intensidad hasta programas personalizados de entrenamiento de fuerza y resistencia.</p>

      <section className="program-section">
        <div className="program-activity" style={{ backgroundImage: `url(${functionalImage})` }}>
          <div className="activity-overlay">
            <h2>Entrenamiento Funcional</h2>
            <p>Mejora tu fuerza, movilidad y resistencia con nuestras sesiones de entrenamiento funcional, adecuadas para todas las edades.</p>
          </div>
        </div>

        <div className="program-activity" style={{ backgroundImage: `url(${yogaImage})` }}>
          <div className="activity-overlay">
            <h2>Yoga</h2>
            <p>Encuentra tu equilibrio mental y físico con nuestras clases de yoga, ideales para todos los niveles de experiencia.</p>
          </div>
        </div>

        <div className="program-activity" style={{ backgroundImage: `url(${crossfitImage})` }}>
          <div className="activity-overlay">
            <h2>CrossFit</h2>
            <p>Mejora tu fuerza y resistencia con nuestros entrenamientos intensivos de CrossFit, diseñados para desafiarte.</p>
          </div>
        </div>

        <div className="program-activity" style={{ backgroundImage: `url(${boxeoImage})` }}>
          <div className="activity-overlay">
            <h2>Boxeo Fitness</h2>
            <p>Entrena como un boxeador, quema calorías y mejora tu resistencia con nuestras emocionantes clases de boxeo fitness.</p>
          </div>
        </div>

        <div className="program-activity" style={{ backgroundImage: `url(${nutricionImage})` }}>
          <div className="activity-overlay">
            <h2>Planes Nutricionales Personalizados</h2>
            <p>Complementa tu entrenamiento con planes nutricionales diseñados por nuestros expertos para lograr tus objetivos de salud.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programas;
