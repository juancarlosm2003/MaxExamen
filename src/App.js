// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/organisms/Navbar';
import BannerCarousel from './components/organisms/BannerCarousel';
import HorizontalSection from './components/organisms/HorizontalSection';
import Top10Section from './components/organisms/Top10Section';
import ContinueWatching from './components/organisms/ContinueWatching';
import SerieDetalle from './pages/SerieDetalle';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BannerCarousel />
              <HorizontalSection title="Destacados" />
              <Top10Section />
              <ContinueWatching />
            </>
          }
        />
        <Route path="/serie/:id" element={<SerieDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
