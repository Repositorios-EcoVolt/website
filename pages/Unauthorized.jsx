import React from 'react';
import './css/unauthorized.css'
import logo from '../assets/LogoEcoVoltW.png';

function Unauthorized() {
  return (
    <div className="unauthorized-container">
      <img src={logo} alt="EcoVolt Logo" className="unauthorized-image" />
      <p className="unauthorized-text">No tienes el acceso para ingresar a esta sección</p>
    </div>
  );
}

export default Unauthorized;
