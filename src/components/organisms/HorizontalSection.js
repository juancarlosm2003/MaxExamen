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
  {
    id: 7,
    title: 'Duster',
    image: 'https://m.media-amazon.com/images/M/MV5BYWI3NDVjODctYTM2MS00YzZhLWJjOTItN2JmYTY5ODdkYTY4XkEyXkFqcGc@._V1_.jpg',
    label: 'Nuevo Episodio'
  },
  {
    id: 8,
    title: 'Mickey 17',
    image: 'https://m.media-amazon.com/images/M/MV5BN2UyMWYzYTctNmUxYS00MzI1LWFiNzgtY2I4ZjQ0MDJjYzJkXkEyXkFqcGc@._V1_.jpg',
    label: 'Nuevo'
  },
  {
  id: 9,  
  title: 'Mi novia Polly',
    image: 'https://m.media-amazon.com/images/M/MV5BMTcxMDMwODg3Nl5BMl5BanBnXkFtZTYwMTM4NTY3._V1_FMjpg_UX1000_.jpg',
    label: ''
  },
  {
    id: 10,
    title: 'The Flash',
    image: 'https://m.media-amazon.com/images/M/MV5BYjUwMzAwOTAtZjQzYy00MmFhLWE5N2EtYTZiYmI3NTY5NDdiXkEyXkFqcGc@._V1_.jpg',
    label: ''
  },
  {
    id: 11,
    title: 'The Big Bang Theory',
    image: 'https://m.media-amazon.com/images/M/MV5BZjgzY2QyNzItNDhhYi00ZWIwLWFjN2UtZDJkN2MxYWNjMmJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    label: ''
  },
  {
    id: 12,
    title: 'The Matrix',
    image: 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg',
    label: ''
  }
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
