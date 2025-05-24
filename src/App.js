import Navbar from './components/organisms/Navbar';
import FeaturedBanner from './components/organisms/FeaturedBanner';
import HorizontalSection from './components/organisms/HorizontalSection';
import Top10Section from './components/organisms/Top10Section';
import ContinueWatching from './components/organisms/ContinueWatching';
import BannerCarousel from './components/organisms/BannerCarousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerCarousel />
      <HorizontalSection title="Destacados" />
      <Top10Section />
      <ContinueWatching />
    </div>
  );
}

export default App;
