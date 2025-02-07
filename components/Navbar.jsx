import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/LogoEcoVoltW.png';
import Alpha from '../assets/Alpha.jpg';
import Beta from '../assets/Beta.jpg';
import Gamma from '../assets/Gamma.jpg';
import "./css/navbar.css";

const prototypes = [
  { name: "EcoVolt Alpha", image: Alpha, description: "fium" },
  { name: "EcoVolt Beta", image: Beta, description: "kuchaw" },
  { name: "EcoVolt Gamma", image: Gamma, description: "brrrr" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  let closeTimeout = null;

  // Función para abrir el dropdown
  const handleMouseEnter = (menu) => {
    clearTimeout(closeTimeout);
    setOpenDropdown(menu);
  };

  // Función para cerrar el dropdown con un pequeño retraso
  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/">Página Principal</Link>
          </li>
          <li
            className="nav-item dropdown"
            onMouseEnter={() => handleMouseEnter("nosotros")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="#">Acerca de nosotros</Link>
            {openDropdown === "nosotros" && (
              <ul
                className="dropdown-menu"
                onMouseEnter={() => handleMouseEnter("nosotros")}
                onMouseLeave={handleMouseLeave}
              >
                <li><Link to="/history">Historia</Link></li>
                <li><Link to="/mision-vision">Misión y Visión</Link></li>
                <li><Link to="/values">Valores</Link></li>
                <li><Link to="/areas">Áreas</Link></li>
                <li><Link to="/team">Miembros</Link></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link to="/competition">Acerca de la competencia</Link>
          </li>
          <li
            className="nav-item dropdown"
            onMouseEnter={() => handleMouseEnter("prototipos")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="#">Prototipos</Link>
            {openDropdown === "prototipos" && (
              <ul
                className="dropdown-menu"
                onMouseEnter={() => handleMouseEnter("prototipos")}
                onMouseLeave={handleMouseLeave}
              >
                {prototypes.map((prototype, index) => (
                  <li key={index}>
                    <Link to={`/prototype/${prototype.name.replace(/\s+/g, "-")}`}>
                      {prototype.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link to="/achievements">Logros</Link>
          </li>
          <li className="nav-item">
            <Link to="/sponsors">Patrocinadores</Link>
          </li>
        </ul>
        <Link to="/login" className="login-btn">Iniciar sesión</Link>
      </div>
    </nav>
  );
};

export default Navbar;
