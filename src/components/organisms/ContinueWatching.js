import React from 'react';
import './ContinueWatching.css';

const continueData = [
  {
    id: 1,
    title: 'Arma Mortal 3',
    episode: '',
    year: '1992',
    rating: '16+',
    image: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/173f63da-98aa-4a20-9ddf-98cec7dc15f5/0722cb381d6279ff2fb65b7dc7a9a881b7da9d39.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom',
    progress: 70
  },
  {
    id: 2,
    title: 'Euphoria',
    episode: 'T1 E2 Stuntin’ Like My Daddy',
    year: '',
    rating: '18+',
    image: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/4ffd33c9-e0d6-4cd6-bd13-34c266c79be0/d757bc3c-63d1-11ee-a42d-12adcdd08855?host=wbd-images.prod-vod.h264.io&partner=beamcom',
    progress: 45
  },
  {
    id: 3,
    title: 'The Last of Us',
    episode: 'T2 E3 El Camino',
    year: '',
    rating: '16+',
    image: 'https://beam-images.warnermediacdn.com/2025-03/the-last-of-us-s2-og-image.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com',
    progress: 25
  },
  {
    id: 4,
    title: 'Arma Mortal 2',
    episode: '',
    year: '1989',
    rating: '16+',
    image: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/791d30ca-9981-4c51-91f3-6189463098d4/3125d77cbf99632cae33a6ba74446460aa3965e0.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom',
    progress: 10
  }
];

function ContinueWatching() {
  return (
    <div className="section">
      <h2 className="section-title">Continuar viendo</h2>
      <div className="scroll-container">
        {continueData.map((item) => (
          <div className="watch-card" key={item.id}>
            <div className="watch-image-container">
              <img src={item.image} alt={item.title} />
              <div className="play-icon">▶</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${item.progress}%` }}></div>
              </div>
            </div>
            <div className="watch-info">
              <p className="episode">{item.episode || item.title}</p>
              <p className="meta">{item.rating} {item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContinueWatching;
