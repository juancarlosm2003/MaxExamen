import Navbar from './components/organisms/Navbar';
import FeaturedBanner from './components/organisms/FeaturedBanner';
import HorizontalSection from './components/organisms/HorizontalSection';
import Top10Section from './components/organisms/Top10Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FeaturedBanner />
      <HorizontalSection title="Destacados" />
      <Top10Section />
    </div>
  );
}

export default App;
