import React, { useState, useRef } from 'react';
import './Navbar.css';
import { FaSearch, FaRegBookmark, FaUserCircle } from 'react-icons/fa';

function Navbar() {
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 300); // 300 ms de retraso
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img src="/MAX-rebrand-logo.png" alt="Max logo" className="logo" />
        </a>
      </div>


      <ul className="nav-links">
        <li className="active">Inicio</li>
        <li>Series</li>
        <li>Películas</li>
        <li>
          <a href="/" title="HBO">
            <img src="\HBO.png" alt="HBO logo" className="logo" />
          </a>
        </li>
        <li>Niños y Familia</li>
      </ul>

      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaRegBookmark className="icon" />
        <div
          className="user-icon"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaUserCircle className="icon" />
          {isHovering && (
            <div
              className="user-popup"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="popup-section user-header">Perfil 1</div>
              <div className="popup-section">Administrar perfiles</div>
              <div className="popup-section">Ajustes</div>
              <div className="popup-section">Cuenta</div>
              <div className="popup-section">Suscripción</div>
              <div className="popup-section">Privacidad</div>
              <div className="popup-section">Ayuda</div>
              <div className="popup-section logout">Cerrar sesión</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
