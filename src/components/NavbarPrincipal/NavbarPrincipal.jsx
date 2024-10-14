import { useNavigate } from "react-router-dom";
import img from './../../assets/img/Logo EcoVolt.png'
import React from 'react';
import './navbarPrincipal.css';

export default function NavbarPrincipal() {

  const navigate = useNavigate();

  // Funciones para navegar 
  function goMain(){
    navigate('/')
  }

  function goAcerca(){
    navigate('/acerca')
  }

  function goCompetencia(){
    navigate('/competencia')
  }

  function goPrototipos(){
    navigate('/prototipos')
  }

  function goTrayectoria(){
    navigate('/trayectoria')
  }

  function goPatrocinios(){
    navigate('/patrocinios')
  }

  function goContacto(){
    navigate('/contacto')
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={img} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a onClick={goMain}>Página principal</a></li>
        <li><a onClick={goAcerca}>Acerca de nosotros</a></li>
        <li><a onClick={goCompetencia}>Acerca de la competencia</a></li>
        <li><a onClick={goPrototipos}>Prototipos</a></li>
        <li><a onClick={goTrayectoria}>Trayectoria</a></li>
        <li><a onClick={goPatrocinios}>Patrocinadores</a></li>
        <li><a onClick={goContacto}>Contacto</a></li>
      </ul>

      <button>
        Iniciar Sesión
      </button>
    </nav>
  );
}
