import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Sección izquierda */}
        <div className="footer-section">
          <p>
            Contáctanos en:{" "}
            <a href="mailto:ecovoltccm@gmail.com" className="footer-link">
              ecovoltccm@gmail.com
            </a>
          </p>
          <p>
            Ubicación: <br />
            Prol. Canal de Miramontes, Coapa, San Bartolo el Chico, <br />
            14380, Tlalpan, Ciudad de México, CDMX
          </p>
        </div>

        {/* Sección central */}
        <div className="footer-section center">
          <div className="footer-buttons">
            <button className="footer-button join-button">Únete a nosotros</button>
            <button className="footer-button donate-button">Haz una donación</button>
          </div>
        </div>

        {/* Sección derecha */}
        <div className="footer-section right">
          <p>Conócenos más en:</p>
          <div className="social-icons">
            <i className="icon"><FaFacebook /></i>
            <i className="icon"><FaTwitter /></i>
            <i className="icon"><FaInstagram /></i>
          </div>
        </div>
      </div>

      {/* Créditos */}
      <div className="footer-credits">
        © Escudería Borregos Shell CCM. EcoVolt 2024
      </div>
    </footer>
  );
}

export default Footer;
