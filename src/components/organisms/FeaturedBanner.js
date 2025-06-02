import React from 'react';
import './FeaturedBanner.css';
import { motion } from 'framer-motion';

function FeaturedBanner() {
  return (
    <div className="banner">
      <motion.div
        className="banner-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="banner-title">FOUND</h1>
        <div className="banner-tags">
          <span className="tag">Nuevo Episodio</span>
          <span className="tag">16+</span>
          <span className="tag">2 temporadas</span>
        </div>
        <p className="banner-description">
          Gabi Mosley y su equipo de gestión de crisis aseguran que siempre haya alguien que se ocupe de las personas desaparecidas olvidadas.
        </p>
        <motion.button
          className="banner-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ir a la serie
        </motion.button>
      </motion.div>
    </div>
  );
}

export default FeaturedBanner;
