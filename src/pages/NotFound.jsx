import React from 'react';
import './css/notFound.css'
import logo from '../assets/LogoEcoVoltW.png';

function NotFound() {
  return (
    <div className="notfound-container">
      <img src={logo} alt="EcoVolt Logo" className="notfound-image" />
      <p className="notfound-text">La página que buscas no existe</p>
    </div>
  );
}

export default NotFound;
