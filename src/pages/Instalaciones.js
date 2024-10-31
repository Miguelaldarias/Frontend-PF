// src/pages/Instalaciones.js
import React from 'react';
import '../assets/styles/instalaciones.sass';

// Importar las imágenes para la galería
import img1 from '../assets/images/instalaciones./instalaciones1.jpg';
import img2 from '../assets/images/instalaciones./instalaciones2.jpg';
import img3 from '../assets/images/instalaciones./instalaciones3.jpg';
import img4 from '../assets/images/instalaciones./instalaciones4.jpg';
import img5 from '../assets/images/instalaciones./instalaciones5.jpg';
import img6 from '../assets/images/instalaciones./instalaciones6.jpg';

const Instalaciones = () => {
  return (
    <div className="instalaciones-container">
      <h1>Nuestras Instalaciones</h1>
      <p>
        Conoce nuestras modernas instalaciones equipadas con la última tecnología en fitness. Contamos con salas de pesas, áreas de entrenamiento funcional, y zonas de cardio para todo tipo de actividades físicas.
        Queremos brindarte el mejor ambiente para alcanzar todas tus metas.
      </p>
      <div className="image-gallery">
        <img src={img1} alt="Instalación 1" className="gallery-image" />
        <img src={img2} alt="Instalación 2" className="gallery-image" />
        <img src={img3} alt="Instalación 3" className="gallery-image" />
        <img src={img4} alt="Instalación 4" className="gallery-image" />
        <img src={img5} alt="Instalación 5" className="gallery-image" />
        <img src={img6} alt="Instalación 6" className="gallery-image" />
      </div>
    </div>
  );
};

export default Instalaciones;
