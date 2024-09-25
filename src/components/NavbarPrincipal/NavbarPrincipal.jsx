import React from 'react';
import './navbarPrincipal.css';
import { useNavigate } from "react-router-dom";

export default function NavbarPrincipal() {

  const navigate=useNavigate();

  //Funciones para navegar 
  function goMain(){
    navigate('/')
  }

  function goAreas(){
    navigate('/areas')
  }

  function goEquipo(){
    navigate('/equipo')
  }

  function goPatrocinios(){
    navigate('/patrocinios')
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="ruta-del-logo.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a onClick={goMain}>Nosotros</a></li>
        <li><a onClick={goAreas}>Areas</a></li>
        <li><a onClick={goEquipo}>Equipo</a></li>
        <li><a onClick={goPatrocinios}>Patrocinios</a></li>
      </ul>
    </nav>
  );
}
