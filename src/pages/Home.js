// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/home.sass';

// Importar las imágenes para cada artículo
import logoImage from '../assets/images/Logo.jpg';
import nutritionImage from '../assets/images/nutricion.jpg';
import functionalImage from '../assets/images/entrenamientofuncional.jpg';
import diferencialImage from '../assets/images/diferencias.jpg';
import communityImage from '../assets/images/comunidad.jpg';
import welcomeImage from '../assets/images/directo.jpg';
import facilitiesImage from '../assets/images/comentarios.jpg';

const Home = () => {
  return (
    <div className="home-container">
      {/* Encabezado */}
      <header className="main-header">
        <div className="logo">
          <img src={logoImage} alt="GymSport" />
        </div>
        <nav className="nav-links">
          <Link to="/instalaciones">Instalaciones</Link>
          <Link to="/programas">Programas y Actividades</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/registros" className="btn btn-secondary">Regístrate</Link>
        </nav>
      </header>

      {/* Eslogan */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a GymSport</h1>
          <p>Donde tu transformación comienza. Únete a nuestra comunidad y alcanza tus metas de fitness.</p>
        </div>
      </section>

      {/* Artículo de Bienvenida */}
      <section className="welcome-article">
        <div className="welcome-content">
          <img src={welcomeImage} alt="Bienvenida" />
          <div className="text-content">
            <h2>Bienvenida del Director</h2>
            <p>
              En GymSport estamos comprometidos con tu bienestar y éxito. Nuestro equipo de entrenadores profesionales y nuestras instalaciones de primer nivel están diseñadas para ayudarte a alcanzar tu máximo potencial. Con nuestros programas personalizados y la mejor tecnología fitness, te aseguramos que cada paso de tu transformación será acompañado con motivación y entusiasmo. ¡Nos alegra tenerte aquí y ser parte de tu progreso hacia un estilo de vida más saludable y feliz!
            </p>
          </div>
        </div>
      </section>

      {/* Artículos Relacionados */}
      <section className="articles">
        <h2>Artículos Destacados</h2>
        <div className="article-list">
          {/* Consejos de Nutrición */}
          <article className="article-item" style={{ backgroundImage: `url(${nutritionImage})` }}>
            <div className="article-overlay">
              <h3>Consejos de Nutrición</h3>
              <div className="article-text">
                <p>Una nutrición adecuada es esencial para alcanzar tus objetivos. Aquí te dejamos dos consejos para mejorar tu alimentación:</p>
                <ul>
                  <li>Consume proteínas adecuadas para la recuperación muscular.</li>
                  <li>Evita los azúcares procesados y opta por carbohidratos complejos para tener energía constante.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Beneficios del Entrenamiento Funcional */}
          <article className="article-item" style={{ backgroundImage: `url(${functionalImage})` }}>
            <div className="article-overlay">
              <h3>Beneficios del Entrenamiento Funcional</h3>
              <div className="article-text">
                <p>El entrenamiento funcional mejora tu calidad de vida. Aquí algunos de sus beneficios:</p>
                <ul>
                  <li>Fortalece grupos musculares esenciales para las actividades diarias.</li>
                  <li>Mejora el equilibrio, la coordinación y la resistencia.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Nuevo Artículo: Comunidad GymSport */}
          <article className="article-item" style={{ backgroundImage: `url(${communityImage})` }}>
            <div className="article-overlay">
              <h3>Nuestra Comunidad GymSport</h3>
              <div className="article-text">
                <p>Únete a una comunidad donde la motivación y el trabajo en equipo son la clave del éxito. Con nosotros, nunca estarás solo en tu viaje hacia un estilo de vida más saludable.</p>
              </div>
            </div>
          </article>


          {/* ¿Qué nos diferencia? */}
          <article className="article-item" style={{ backgroundImage: `url(${diferencialImage})` }}>
            <div className="article-overlay">
              <h3>¿Qué nos diferencia?</h3>
              <div className="article-text">
                <p>En GymSport ofrecemos un enfoque personalizado para cada miembro. Nuestros entrenadores certificados diseñan planes de entrenamiento y nutrición personalizados, apoyándote en cada paso. El ambiente acogedor y motivante hará que cada visita sea una experiencia única y gratificante.</p>
              </div>
            </div>
          </article>

          {/* Comentarios de Nuestros Clientes */}
          <article className="article-item" style={{ backgroundImage: `url(${facilitiesImage})` }}>
            <div className="article-overlay">
              <h3>Nuestros Clientes</h3>
              <div className="article-text">
                <p>Algunos de nuestros clientes comparten sus experiencias:</p>
                <ul>
                  <li>"Gracias a GymSport logré alcanzar mis metas, los entrenadores son los mejores." - Juan Pérez</li>
                  <li>"Un gimnasio donde te sientes como en casa. La motivación aquí es increíble." - María García</li>
                  <li>"Los programas de entrenamiento son muy efectivos. Estoy viendo resultados rápidamente." - Ana Rodríguez</li>
                  <li>"Las instalaciones y el equipo de última tecnología hacen la diferencia." - José López</li>
                  <li>"El ambiente positivo y la atención del personal son inigualables." - Luisa Fernández</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="contact-form">
        <h2>Contacta con Nosotros</h2>
        <form>
          <input type="text" name="nombre" placeholder="Tu Nombre" required />
          <input type="email" name="email" placeholder="Tu Correo Electrónico" required />
          <textarea name="mensaje" placeholder="Tu Mensaje" rows="4" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </section>

      {/* Pie de Página */}
      <footer className="main-footer">
        <div className="footer-content">
          <p>Ubicación: Baeza, Jaén</p>
          <p>Teléfono: +34 123 456 789 | Mail: info@gymsport.com | WhatsApp: +34 123 456 789 | Instagram: @gymsport</p>
          <p>Aviso Legal | Inicio | Términos y Condiciones | Política de Privacidad | Política de Cookies</p>
          <p>Patrocinadores y Colaboradores</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
