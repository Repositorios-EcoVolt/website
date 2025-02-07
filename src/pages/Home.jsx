import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MoreThanSpeed from '../assets/MoreThanSpeed.jpg';
import Sustainability from '../assets/Sustainability.png';
import './css/home.css';

function Home() {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>EcoVolt CCM</h1>
          <p>Sé el cambio que el mundo necesita</p>
        </div>
      </div>

      <section className="info-section">
        <div className="content">
          <img src={MoreThanSpeed} alt="Más allá de la velocidad" className="left" />
          <div className="text">
            <h2>Más allá de la velocidad</h2>
            <p>
              Desde 2017, la Escudería Shell Borregos CCM ha estado impulsando la innovación en el
              Tecnológico de Monterrey Campus CCM a través de vehículos eléctricos de alta eficiencia
              energética. Nuestro enfoque va más allá de la velocidad y la competencia; buscamos marcar 
              la diferencia en la eficiencia energética y la sostenibilidad.
            </p>
          </div>
        </div>

        <div className="content reverse">
          <img src={Sustainability} alt="Sustentabilidad" className="right" />
          <div className="text">
            <h2>Sustentabilidad</h2>
            <p>
              No solo nos esforzamos por superar límites en nuestros vehículos, 
              sino que también exploramos nuevos horizontes con materiales amigables 
              con el medio ambiente en la creación de prototipos. Esto nos ha llevado 
              a ganar el premio "Carbon Footprin Reduction" en dos ocasiones.
            </p>
          </div>
        </div>
      </section>

      <section className="video-section">
        <h2 className="video-title">¡Orgullosamente Borregos!</h2>
        <p className="video-description">
          Atribuimos nuestro éxito al arduo trabajo de nuestros talentosos miembros, quienes son la fuerza
          motriz detrás de nuestro equipo. Creemos en el poder del trabajo en equipo y sabemos que solo
          juntos podemos lograr resultados extraordinarios.
        </p>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/FredXiBkwng" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
