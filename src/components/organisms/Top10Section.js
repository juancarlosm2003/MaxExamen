import React from 'react';
import './Top10Section.css';
import { link } from 'framer-motion/client';

const top10Data = [
  {
    id: 1,
    title: 'The Last of Us',
    image: 'https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_.jpg',
    link: 'https://play.max.com/show/93ba22b1-833e-47ba-ae94-8ee7b9eefa9a'  
  },
  {
    id: 2,
    title: 'Love & Death',
    image: 'https://m.media-amazon.com/images/M/MV5BYjkwYzU3MWItMzkwMi00MmZhLWEzMzAtZDcwN2MwYTU0NTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    link: 'https://play.max.com/show/f7b16534-5a7b-4e0e-906f-406d25e6b7af'
  },
  {
    id: 3,
    title: 'Hacks',
    image: 'https://m.media-amazon.com/images/M/MV5BMGI5NTE0ODMtOTdlYS00MjY1LWE0ZWUtZTg2M2FmZmUwZGMwXkEyXkFqcGc@._V1_.jpg',
    link: 'https://play.max.com/show/67e940b7-aab2-46ce-a62b-c7308cde9de7'
  },
  {
    id: 4,
    title: 'Miedo Profundo',
    image: 'https://m.media-amazon.com/images/M/MV5BM2MyMDk2NjMtNTFlYy00ZmFhLTkwZmEtNWMwNzFmMDhlYzcyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    link: 'https://play.max.com/movie/eff0e361-c3b3-4a94-a618-df079cc7be07'
  },
  {
    id: 5,
    title: 'Found',
    image: 'https://m.media-amazon.com/images/M/MV5BOGVmOTg0ZWEtMWIwNS00NjkwLThiYWMtOWJmNGFkZWJhYzVhXkEyXkFqcGc@._V1_.jpg',
    link: 'https://play.max.com/show/a83f2f0a-1a91-4374-99f2-c218d6fcef27'
  },
  {
    id: 6,
    title: 'Euphoria',
    image: 'https://m.media-amazon.com/images/M/MV5BZjVlN2M2N2MtOWViZC00MzIxLTlhZWEtMTIwNDIwMzE3ZWJiXkEyXkFqcGc@._V1_.jpg',
    link: 'https://play.max.com/show/4ffd33c9-e0d6-4cd6-bd13-34c266c79be0'
  },
  {
    id: 7,
    title: 'Succession',
    image: 'https://m.media-amazon.com/images/M/MV5BNTEwNTFkZTktMzI1OC00YmRjLWE5NTUtYmZhMmJlNGUxMWU1XkEyXkFqcGc@._V1_.jpg',
    link: 'https://play.max.com/show/a8484031-f244-4661-9fb7-0932bd1ba872'
  },
  {
    id: 8,
    title: 'Barry',
    image: 'https://m.media-amazon.com/images/M/MV5BYzdlYWZkNjQtMWYwNi00YjNkLTljYjgtZjRhMmQ2YTQ1MWQ0XkEyXkFqcGc@._V1_.jpg',
    link: 'https://play.max.com/show/179bdb1c-83f8-4ab7-87ef-47ce3b566a13'
  },
  {
    id: 9,
    title: 'Chernobyl',
    image: 'https://m.media-amazon.com/images/M/MV5BNzU0OTI4YTQtNGQ1ZS00ZjA4LTg3MTMtZjkyZWNjN2RiZDJmXkEyXkFqcGc@._V1_.jpg',
    link: 'https://play.max.com/mini-series/396999a6-3fff-4af3-802b-10c46d10deff'
  },
  {
    id: 10,
    title: 'Game of Thrones',
    image: 'https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    link: 'https://play.max.com/show/4f6b4985-2dc9-4ab6-ac79-d60f0860b0ac'
  }
];

function Top10Section() {
  return (
    <div className="top10-section">
      <div className="top10-title-container">
        <h2>
          TOP 10 <span>SERIES</span>
        </h2>
        <span>HOY</span>
      </div>
      <div className="top10-container">
        {top10Data.map((item, index) => (
          <div className="top10-card" key={item.id}>
            <div className="top10-number">{index + 1}</div>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.title} style={{ cursor: 'pointer' }} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top10Section;

