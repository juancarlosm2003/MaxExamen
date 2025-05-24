import React from 'react';
import './BannerCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const banners = [
  {
    title: 'Lazarus',
    description: 'Año 2052. Cuando una droga milagrosa se vuelve mortal, un grupo de forajidos llamado Lazarus debe salvar al mundo.',
    tags: ['16+', '1 temporada'],
    image: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/7479ef42-c1ac-4473-854e-5a5c35894e35/546e380d-fe21-11ef-93b6-12953788022d?host=wbd-images.prod-vod.h264.io&partner=beamcom'
  },
  {
    title: 'The Last of Us',
    description: 'Joel y Ellie cruzan un Estados Unidos postapocalíptico en una historia de supervivencia emocional y física.',
    tags: ['16+', '1 temporada'],
    image: 'https://beam-images.warnermediacdn.com/2025-03/the-last-of-us-s2-og-image.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com'
  },
  {
    title: 'The White Lotus',
    description: 'Vacaciones de lujo se tornan oscuras mientras los huéspedes de un exclusivo resort enfrentan secretos y tensiones.',
    tags: ['18+', '2 temporadas'],
    image: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/14f9834d-bc23-41a8-ab61-5c8abdbea505/8d46dbc1-ebf9-11ef-986f-1256c76f6c81?host=wbd-images.prod-vod.h264.io&partner=beamcom'
  }
];

function BannerCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className="banner-swiper"
    >
      {banners.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="banner-slide"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="banner-content">
              <h1 className="banner-title">{item.title}</h1>
              <div className="banner-tags">
                {item.tags && item.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <p className="banner-description">{item.description}</p>
              <div className="banner-buttons">
                <button className="banner-button primary">Ver serie</button>
                <button className="banner-button secondary">Ir a la serie</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BannerCarousel;
