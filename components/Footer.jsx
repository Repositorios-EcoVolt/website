import React from "react";
import "./css/footer.css";
import { FaXTwitter, FaInstagram, FaLinkedin} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Sección de contacto */}
        <div className="contact">
          <p className="title">Contáctanos en:</p>
          <p >ecovoltccm@gmail.com</p>
        </div>

        {/* Sección de ubicación */}
        <div className="location">
          <p className="title">Ubicación:</p>
          <p>
            Prol. Canal de Miramontes, Coapa, San Bartolo el Chico, <br />
            14380, Tlalpan, Ciudad de México, CDMX
          </p>
        </div>

        {/* Botones de acción */}
        <div className="actions">
          <button className="join-btn">Únete a nosotros</button>
          <button className="donate-btn">Haz una donación</button>
        </div>

        {/* Redes sociales */}
        <div className="socials">
          <p className="title">Conócenos más en:</p>
          <div className="icons">
            <a href="https://x.com/ecovoltccm/" target="_blank" rel="noopener noreferrer"><FaXTwitter className="icon" /></a>
            <a href="https://www.instagram.com/ecovoltccm/" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a>
            <a href="https://mx.linkedin.com/company/eshellccm" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
          </div>
        </div>
      </div>

      {/* Línea separadora y derechos */}
      <div className="footer-bottom">
        <p>© Escudería Borregos Shell CCM. EcoVolt 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
