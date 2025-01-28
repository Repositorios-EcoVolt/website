import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="../assets/LogoEcovolt.svg" alt="Logo" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Página Principal
            </a>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("nosotros")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link">Acerca de nosotros ▼</span>
            {dropdown === "nosotros" && (
              <div className="dropdown">
                <a href="#">Historia</a>
                <a href="#">Misión y Visión</a>
                <a href="#">Valores</a>
                <a href="#">Áreas</a>
                <a href="#">Flujo de trabajo</a>
                <a href="#">Miembros</a>
                <a href="#">¿Por qué unirse?</a>
              </div>
            )}
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Acerca de la competencia
            </a>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("prototipos")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link">Prototipos ▼</span>
            {dropdown === "prototipos" && (
              <div className="dropdown">
                <a href="#">Prototipo 2025</a>
                <a href="#">Prototipo 2024</a>
                <a href="#">Prototipo 2023</a>
              </div>
            )}
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Trayectoria
            </a>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("patrocinadores")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link">Patrocinadores ▼</span>
            {dropdown === "patrocinadores" && (
              <div className="dropdown">
                <a href="#">2025</a>
                <a href="#">2024</a>
                <a href="#">2023</a>
              </div>
            )}
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Lo más nuevo
            </a>
          </li>
        </ul>
        <button className="login-button">Iniciar sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
