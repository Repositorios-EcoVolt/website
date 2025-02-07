import React from 'react';
import { FaDumbbell, FaMedal, FaBolt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Award1 from '../assets/Award1.JPG';
import Award2 from '../assets/Award2.jpg';
import Award3 from '../assets/Award3.jpg';
import './css/achievements.css';

function Achievements() {
  return (
    <>
      <Navbar />

      <div className="achievements-hero-section">
        <div className="achievements-overlay"></div>
        <div className="achievements-hero-text">
          <p>Resultados</p>
          <h1>Temporada 2023–2024</h1>
        </div>
      </div>

      <div className="achievements-icons-section">
        <div className="achievement-card">
          <FaDumbbell className="achievement-icon" />
          <h3>Fuerza y Resistencia</h3>
          <p>Hemos superado grandes desafíos físicos y técnicos.</p>
        </div>

        <div className="achievement-card">
          <FaMedal className="achievement-icon" />
          <h3>Premios y Reconocimientos</h3>
          <p>Orgullosos de haber obtenido múltiples galardones.</p>
        </div>

        <div className="achievement-card">
          <FaBolt className="achievement-icon" />
          <h3>Rapidez y Precisión</h3>
          <p>Nuestro equipo se destacó por su velocidad y exactitud.</p>
        </div>
      </div>

      <div className="achievements-info-section">
        <section className="achievements-info-section">
          <div className="achievements-content">
            <img src={Award1} alt="Huella Carbono" className="achievements-left" />
            <div className="achievements-text">
              <h2>1er lugar en Off-track Award América Reducción de huella de carbono</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.
              </p>
            </div>
          </div>

          <div className="achievements-content home-reverse">
            <img src={Award2} alt="Simulate to Innovate" className="achievements-right" />
            <div className="achievements-text">
              <h2>1er lugar en Off-track Award América Simulate to Innovate Award</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.
              </p>
            </div>
          </div>

          <div className="achievements-content">
            <img src={Award3} alt="Altair Global Student Contest" className="achievements-left" />
            <div className="achievements-text">
              <h2>1er lugar en el Altair Global Student Contest</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique non orci sed congue.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Achievements;
