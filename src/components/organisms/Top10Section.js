import React from 'react';
import './Top10Section.css';
const top10Data = [
  {
    id: 1,
    title: 'The Last of Us',
    image: 'https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 2,
    title: 'Love & Death',
    image: 'https://m.media-amazon.com/images/M/MV5BYjkwYzU3MWItMzkwMi00MmZhLWEzMzAtZDcwN2MwYTU0NTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 3,
    title: 'Hacks',
    image: 'https://m.media-amazon.com/images/M/MV5BMGI5NTE0ODMtOTdlYS00MjY1LWE0ZWUtZTg2M2FmZmUwZGMwXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 4,
    title: 'Miedo Profundo',
    image: 'https://m.media-amazon.com/images/M/MV5BM2MyMDk2NjMtNTFlYy00ZmFhLTkwZmEtNWMwNzFmMDhlYzcyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 5,
    title: 'Found',
    image: 'https://m.media-amazon.com/images/M/MV5BOGVmOTg0ZWEtMWIwNS00NjkwLThiYWMtOWJmNGFkZWJhYzVhXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 6,
    title: 'Euphoria',
    image: 'https://m.media-amazon.com/images/M/MV5BZjVlN2M2N2MtOWViZC00MzIxLTlhZWEtMTIwNDIwMzE3ZWJiXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 7,
    title: 'Succession',
    image: 'https://m.media-amazon.com/images/M/MV5BNTEwNTFkZTktMzI1OC00YmRjLWE5NTUtYmZhMmJlNGUxMWU1XkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 8,
    title: 'Barry',
    image: 'https://m.media-amazon.com/images/M/MV5BYzdlYWZkNjQtMWYwNi00YjNkLTljYjgtZjRhMmQ2YTQ1MWQ0XkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 9,
    title: 'Chernobyl',
    image: 'https://m.media-amazon.com/images/M/MV5BNzU0OTI4YTQtNGQ1ZS00ZjA4LTg3MTMtZjkyZWNjN2RiZDJmXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 10,
    title: 'Game of Thrones',
    image: 'https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  }
];
function Top10Section() {
  return (
    <div className="top10-section">
      <h2 className="section-title">Top 10 series de hoy</h2>
      <div className="top10-container">
        {top10Data.map((item, index) => (
          <div className="top10-card" key={item.id}>
            <div className="top10-number">{index + 1}</div>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top10Section;