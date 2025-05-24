import React, { useRef } from 'react';
import './HorizontalSection.css';

const mockData = [
  {
    id: 1,
    title: 'The Last of Us',
    image: 'https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_.jpg',
    label: 'Nuevo Episodio'
  },
  {
    id: 2,
    title: 'Love & Death',
    image: 'https://m.media-amazon.com/images/M/MV5BYjkwYzU3MWItMzkwMi00MmZhLWEzMzAtZDcwN2MwYTU0NTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    label: 'Nuevo Episodio'
  },
  {
    id: 3,
    title: 'Hacks',
    image: 'https://m.media-amazon.com/images/M/MV5BMGI5NTE0ODMtOTdlYS00MjY1LWE0ZWUtZTg2M2FmZmUwZGMwXkEyXkFqcGc@._V1_.jpg',
    label: 'Nuevo Episodio'
  },
  {
    id: 4,
    title: 'Miedo Profundo',
    image: 'https://m.media-amazon.com/images/M/MV5BM2MyMDk2NjMtNTFlYy00ZmFhLTkwZmEtNWMwNzFmMDhlYzcyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    label: ''
  },
  {
    id: 5,
    title: 'Found',
    image: 'https://m.media-amazon.com/images/M/MV5BOGVmOTg0ZWEtMWIwNS00NjkwLThiYWMtOWJmNGFkZWJhYzVhXkEyXkFqcGc@._V1_.jpg',
    label: 'Nuevo Episodio'
    
  },
  {
    id: 6,
    title: 'IT',
    image: 'https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_.jpg',
    label: ''
  },
];

function HorizontalSection({ title }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="scroll-wrapper">
        <button className="scroll-button left" onClick={() => scroll('left')}>&#10094;</button>
        <div className="scroll-container" ref={scrollRef}>
          {mockData.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />
              {item.label && <span className="label">{item.label}</span>}
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scroll('right')}>&#10095;</button>
      </div>
    </div>
  );
}

export default HorizontalSection;
