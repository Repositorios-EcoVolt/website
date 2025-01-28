import React from 'react';
import "./prototype2.css"
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { FaCalendar, FaWeight, FaBolt, FaTrophy } from 'react-icons/fa';

function Prototype2() {
  return (
    <>
      <Navbar />
      <main>
        <section className="about-section">
          <div className="about-section-content">
            <img 
              src="https://iphonegr.reforma.com/libre/online07/imagetransformer2/ImageTransformer.aspx?img=https://img.gruporeforma.com/imagenes/960x640/6/468/5467172.jpg&imagencompleta=1" 
              alt="Imagen sobre nosotros" className="about-section-image" />
            <div className="about-section-text">
              <h2>Prototipo 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
              </p>
            </div>
          </div>
        </section>
        <section className="goals-achievements">
          <div className="goal-item left">
            <div className="goal-text">
              <div>
                <h3>Trayectoria</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex erat.
              </p>
              </div>
            </div>
            <img 
              src="https://www.shellecomarathon.com/2024-programme/_jcr_content/root/metadata.shellimg.jpeg/1710862131161/two-men-hugging-each-other.jpeg" 
              alt="Objetivos" 
              className="goal-image" />
          </div>
        </section>
        <section className="info-cards">
          <div className="cards-container">
            <div className="card">
              <FaCalendar size={50} />
              <div className="card-text">
                <h3>Año Debut</h3>
                <p>2010</p>
              </div>
            </div>
            <div className="card">
              <FaWeight size={50} />
              <div className="card-text">
                <h3>Peso</h3>
                <p>75kg</p>
              </div>
            </div>
            <div className="card">
              <FaBolt size={50} />
              <div className="card-text">
                <h3>Watts/km</h3>
                <p>300 W</p>
              </div>
            </div>
            <div className="card">
              <FaTrophy size={50} />
              <div className="card-text">
                <h3>Logros</h3>
                <p>Varios campeonatos ganados</p>
              </div>
            </div>
          </div>
        </section>
        <section className="video-section">
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Informativo"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Prototype2;
