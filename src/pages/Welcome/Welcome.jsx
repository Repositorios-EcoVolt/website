import React from "react";
import "./welcome.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";

function Welcome() {
  return (
    <>
      <Navbar />
      <div className="welcome-container">
        {/* Encabezado */}
        <section className="header-section">
          <h1>Escudería Shell Borregos CCM</h1>
          <p>Innovación y sostenibilidad en movimiento.</p>
        </section>

        {/* Inspiraciones y motivos */}
        <motion.section
          className="info-section"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Inspiraciones y Motivos</h2>
          <p>
            Impulsados por la visión de un futuro más sostenible, los miembros de la
            escudería se inspiran en la necesidad de desarrollar soluciones de transporte
            que reduzcan la huella de carbono y promuevan el uso eficiente de la energía.
            Su motivación principal es contribuir al avance tecnológico en el sector
            automotriz, enfocándose en la creación de vehículos que minimicen el impacto
            ambiental.
          </p>
        </motion.section>

        {/* Metas y logros */}
        <motion.section
          className="info-section"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Metas y Logros</h2>
          <ul>
            <li>Alcanzar la máxima eficiencia energética en sus prototipos.</li>
            <li>Utilizar tecnologías innovadoras y materiales sostenibles.</li>
            <li>
              Reconocimientos por el uso de fibras naturales y simulación computacional
              avanzada.
            </li>
          </ul>
          <p>
            La Escudería Shell Borregos CCM busca posicionarse como líder en innovación y
            sostenibilidad a nivel internacional.
          </p>
        </motion.section>

        {/* Video de introducción */}
        <motion.section
          className="info-section"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Historias desde la Pista</h2>
          <div className="video-container">
          <iframe
            className="rounded-lg shadow-md"
            src="https://www.youtube.com/embed/FredXiBkwng"
            title="Escudería Borregos - Historias desde la Pista"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          </div>
        </motion.section>

        {/* Imagen destacada */}
        <motion.section
          className="info-section"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2>¡Síguenos en redes sociales!</h2>
          <img
            src="https://www.shellecomarathon.com/assets/img/gallery-gallery/2022/brazil-car.jpg"
            alt="Vehículo de la escudería"
          />
          <p>
            Para más información, visita nuestra página oficial o nuestras redes
            sociales.
          </p>
        </motion.section>
      </div>
      <Footer />
    </>
  );
}

export default Welcome;
