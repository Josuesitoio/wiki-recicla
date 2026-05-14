import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import CatalogPage from './pages/CatalogPage';
import DownloadsPage from './pages/DownloadsPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa" element={<MapPage />} />
          <Route path="/materiales" element={<CatalogPage />} />
          <Route path="/kit" element={<DownloadsPage />} />
          <Route path="/participa" element={<CommunityPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
