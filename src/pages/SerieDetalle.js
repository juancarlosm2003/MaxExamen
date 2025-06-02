// SerieDetalle.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './SerieDetalle.css';

// Puedes remplazar esto con un fetch real o un JSON importado
const series = [
  {
    id: 'the-last-of-us',
    title: 'The Last of Us',
    image: 'https://m.media-amazon.com/images/I/91vYd51fQxL._AC_UF1000,1000_QL80_.jpg',
    description: 'Joel y Ellie cruzan un Estados Unidos postapocalíptico en una historia de supervivencia emocional y física.',
    classification: '16+',
    seasons: '1 temporada',
    genre: 'Drama, Acción, Postapocalíptico'
  },
  {
    id: 'lazarus',
    title: 'Lazarus',
    image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/lazarus-anime-key-art.jpg',
    description: 'Año 2052. Cuando una droga milagrosa se vuelve mortal, un grupo de forajidos llamado Lazarus debe salvar al mundo.',
    classification: '16+',
    seasons: '1 temporada',
    genre: 'Ciencia ficción, Acción, Anime'
  }
];

function SerieDetalle() {
  const { id } = useParams();
  const serie = series.find(s => s.id === id);

  if (!serie) return <div className="serie-detalle-error">Serie no encontrada.</div>;

  return (
    <div className="serie-detalle">
      <div className="serie-banner" style={{ backgroundImage: `url(${serie.image})` }}>
        <div className="overlay">
          <div className="contenido">
            <h1>{serie.title}</h1>
            <div className="tags">
              <span>{serie.classification}</span>
              <span>{serie.seasons}</span>
              <span>{serie.genre}</span>
            </div>
            <p>{serie.description}</p>
            <button className="ver-ahora">Ver ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SerieDetalle;
