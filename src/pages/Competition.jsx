import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EcoMarathon from '../assets/EcoMarathon.jpg';
import Sustainability from '../assets/Sustainability.png';
import Participation1 from '../assets/Participation1.jpg';
import Participation2 from '../assets/Participation2.jpg';
import Participation3 from '../assets/Participation3.jpg';
import Participation4 from '../assets/Participation4.jpg';
import Participation5 from '../assets/Participation5.jpg';
import Participation6 from '../assets/Participation6.jpg';
import Participation7 from '../assets/Participation7.JPG';
import Participation8 from '../assets/Participation8.jpg';
import './css/competition.css';

function Competition() {
  const galleryImages = [
    Participation1,
    Participation2,
    Participation3,
    Participation4,
    Participation5,
    Participation6,
    Participation7,
    Participation8
  ];

  const offTrackAwards = [
    "Reducción de Huella de Carbono - Enfoque en sostenibilidad.",
    "Simulate to Innovate' - Uso de simulaciones en diseño.",
    "Premio de Comunicación - Estrategia en redes sociales."
  ];

  return (
    <>
      <Navbar />

      <div className="competition-hero-section">
        <div className="competition-overlay"></div>
        <div className="competition-hero-text">
          <h1>Enfocados en la meta</h1>
          <p>No en el obstáculo</p>
        </div>
      </div>

      <section className="competition-info-section">
        <div className="competition-content">
          <img src={EcoMarathon} alt="EcoMarathon" />
          <div className="competition-text">
            <h2>Shell Eco-marathon</h2>
            <p>
              Shell Eco-marathon es uno de los programas de ingeniería de eficiencia energética más
              importantes del mundo para estudiantes. Su propósito es expandir los límites de lo que
              es técnicamente posible e inspirar a las nuevas generaciones a convertirse en los científicos
              e ingenieros que liderarán las soluciones energéticas del futuro.
            </p>
          </div>
        </div>

        <div className="competition-content competition-reverse">
          <img src={Sustainability} alt="Sustentabilidad" />
          <div className="competition-text">
            <h2>La competencia</h2>
            <p>
              La competencia global anual en la región de las Américas, con sede en Indianápolis, EE.UU.,
              reúne a universidades de todo el mundo para demostrar innovación y excelencia en movilidad eléctrica.
              Dividida en tres regiones, la competencia en América cuenta con la participación de más
              de 100 universidades y 1,200 estudiantes de todo el continente.
            </p>
          </div>
        </div>
      </section>

      <section className="competition-participation-section">
        <h2 className="competition-participation-title">Nuestra Participación</h2>
        <p className="competition-participation-description">
          La escudería compite en el Shell Eco-marathon en la categoría de prototipos eléctricos con
          baterías de litio (BEV). Hemos participado en varios premios off-track del Shell Eco-marathon,
          obteniendo reconocimientos como:
        </p>

        <ul className="competition-offtrack-list">
          {offTrackAwards.map((award, index) => (
            <li key={index} className="competition-offtrack-item">{award}</li>
          ))}
        </ul>

        <div className="competition-gallery-container">
          {galleryImages.map((image, index) => (
            <div key={index} className="competition-gallery-item">
              <img src={image} alt={`Participación ${index + 1}`} className="competition-gallery-image" />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Competition;
