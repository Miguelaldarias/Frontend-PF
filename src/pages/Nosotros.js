// src/pages/Nosotros.js
import React from 'react';
import '../assets/styles/nosotros.sass';

// Importar imágenes de los entrenadores
import entrenador1Image from '../assets/images/nosotros/entrenador_personal.jpg';
import entrenador2Image from '../assets/images/nosotros/entrenadora_crossfit.jpg';
import entrenador3Image from '../assets/images/nosotros/entrenadora_yoga.jpg';

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h1>Sobre Nosotros</h1>
      <p>
        En GymSport, somos más que un gimnasio, somos una comunidad comprometida con ayudarte a alcanzar tus metas de salud y fitness de la manera más efectiva y sostenible posible.
        Ofrecemos programas innovadores, equipos de última tecnología y un ambiente inclusivo para asegurarnos de que cada miembro de nuestra comunidad se sienta apoyado y motivado.
      </p>

      {/* Diferenciadores */}
      <section className="diferenciadores">
        <h2>¿Qué nos diferencia?</h2>
        <p>
          Nuestro enfoque personalizado y la tecnología de vanguardia nos permiten diseñar entrenamientos que se adapten a las necesidades de cada uno de nuestros miembros.
          Estamos orgullosos de contar con un equipo de entrenadores certificados que te ayudarán a cada paso del camino para que alcances tus objetivos.
        </p>
      </section>

      {/* Entrenadores Destacados */}
      <section className="entrenadores-destacados">
        <h2>Nuestro Equipo</h2>
        <div className="entrenadores">
          <div className="entrenador">
            <img src={entrenador1Image} alt="Entrenador 1" />
            <h3>Juan Pérez</h3>
            <p>Especialista en entrenamiento funcional y coach de motivación. Más de 10 años de experiencia ayudando a clientes a alcanzar su máximo potencial físico y mental.</p>
          </div>

          <div className="entrenador">
            <img src={entrenador2Image} alt="Entrenador 2" />
            <h3>María González</h3>
            <p>Nutricionista deportiva y entrenadora de CrossFit. María combina sus conocimientos de nutrición con entrenamientos de alta intensidad para maximizar los resultados de sus clientes.</p>
          </div>

          <div className="entrenador">
            <img src={entrenador3Image} alt="Entrenador 3" />
            <h3>Alicia Ramírez</h3>
            <p>Entrenador personal con certificación en yoga y pilates. Alicia se especializa en ayudar a sus clientes a mejorar la flexibilidad y reducir el estrés mediante técnicas integradas de movimiento consciente.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
