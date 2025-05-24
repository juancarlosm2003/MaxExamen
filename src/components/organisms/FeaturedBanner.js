import React from 'react';
import './FeaturedBanner.css';

function FeaturedBanner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">FOUND</h1>
        <div className="banner-tags">
          <span className="tag">Nuevo Episodio</span>
          <span className="tag">16+</span>
          <span className="tag">2 temporadas</span>
        </div>
        <p className="banner-description">
          Gabi Mosley y su equipo de gestión de crisis aseguran que siempre haya alguien que se ocupe de las personas desaparecidas olvidadas.
        </p>
        <button className="banner-button">Ir a la serie</button>
      </div>
    </div>
  );
}

export default FeaturedBanner;
