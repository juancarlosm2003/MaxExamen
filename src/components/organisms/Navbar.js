import React from 'react';
import './Navbar.css';
import { FaSearch, FaRegBookmark, FaUserCircle } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">max</h1>
        <ul className="nav-links">
          <li className="active">Inicio</li>
          <li>Series</li>
          <li>Películas</li>
          <li>HBO</li>
          <li>Niños y Familia</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaRegBookmark className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
