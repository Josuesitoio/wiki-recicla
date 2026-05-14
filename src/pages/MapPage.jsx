import { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Clock, Phone, MapPin, Navigation, Star, Search, Filter } from 'lucide-react';
import './MapPage.css';

// Fix for default Leaflet icon issue in React
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const mockCenters = [
  {
    id: 1,
    name: "Centro Reciclaje Navojoa Centro",
    position: [27.0750, -109.4400],
    address: "Blvd. Cuauhtémoc Sur 120",
    hours: "Lun - Sáb: 8:00 AM - 6:00 PM",
    contact: "642 123 4567",
    rating: 4.8,
    materials: ["Plásticos", "Cartón", "Aluminio"]
  },
  {
    id: 2,
    name: "Recicladora del Mayo",
    position: [27.0680, -109.4500],
    address: "Calle Pesqueira Nte. 34",
    hours: "Lun - Vie: 9:00 AM - 5:00 PM",
    contact: "642 987 6543",
    rating: 4.5,
    materials: ["Papel", "Cartón", "Vidrio"]
  },
  {
    id: 3,
    name: "Acopio Ecológico Norte",
    position: [27.0850, -109.4300],
    address: "Av. Abasolo Este 500",
    hours: "Todos los días: 7:00 AM - 8:00 PM",
    contact: "642 555 0000",
    rating: 4.9,
    materials: ["Aluminio", "Electrónicos", "Metales"]
  },
  {
    id: 4,
    name: "Eco-Centro Sur",
    position: [27.0550, -109.4450],
    address: "Blvd. Lázaro Cárdenas 210",
    hours: "Lun - Sab: 8:00 AM - 4:00 PM",
    contact: "642 111 2233",
    rating: 4.6,
    materials: ["Orgánicos", "Plásticos"]
  },
  {
    id: 5,
    name: "Punto Verde Universitario",
    position: [27.0700, -109.4200],
    address: "Campus ITSON Sur",
    hours: "Lun - Vie: 8:00 AM - 8:00 PM",
    contact: "642 999 8877",
    rating: 5.0,
    materials: ["Electrónicos", "Pilas", "Papel"]
  }
];

const allMaterials = ["Todos", "Plásticos", "Cartón", "Papel", "Vidrio", "Aluminio", "Electrónicos", "Orgánicos", "Metales", "Pilas"];

// Helper component to recenter map
const MapController = ({ center }) => {
  const map = useMap();
  if (center) {
    map.flyTo(center, 15, { duration: 1.5 });
  }
  return null;
};

const MapPage = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCenter, setSelectedCenter] = useState(null);
  
  // Filter logic
  const filteredCenters = mockCenters.filter(center => {
    const matchesFilter = activeFilter === "Todos" || center.materials.includes(activeFilter);
    const matchesSearch = center.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          center.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleCenterClick = (center) => {
    setSelectedCenter(center.position);
    // In a real app, we'd also open the popup programmically. 
    // For this prototype, flying to it is a good UX start.
  };

  return (
    <div className="map-page container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Explorador de Centros de Acopio</h1>
        <p className="page-subtitle">Encuentra exactamente dónde llevar tus materiales. Filtra por tipo de residuo, busca por zona o explora la lista completa de centros disponibles en Navojoa.</p>
      </div>

      {/* Filters and Search Bar */}
      <div className="map-controls glass-card">
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Buscar por nombre o calle..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="filter-chips">
          <Filter size={20} className="filter-icon" />
          <div className="chips-container">
            {allMaterials.map(mat => (
              <button 
                key={mat} 
                className={`chip ${activeFilter === mat ? 'active' : ''}`}
                onClick={() => setActiveFilter(mat)}
              >
                {mat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="map-layout">
        {/* List View */}
        <div className="centers-list glass-card">
          <div className="list-header">
            <h3>{filteredCenters.length} Centros encontrados</h3>
          </div>
          <div className="list-scroll">
            {filteredCenters.length > 0 ? (
              filteredCenters.map(center => (
                <div 
                  key={center.id} 
                  className="center-card"
                  onClick={() => handleCenterClick(center)}
                >
                  <div className="center-card-header">
                    <h4>{center.name}</h4>
                    <span className="rating"><Star size={14} className="star-icon" fill="currentColor"/> {center.rating}</span>
                  </div>
                  <p className="address"><MapPin size={14} /> {center.address}</p>
                  <p className="hours"><Clock size={14} /> {center.hours}</p>
                  
                  <div className="materials-tags">
                    {center.materials.map((mat, i) => (
                      <span key={i} className="tag">{mat}</span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No se encontraron centros que acepten "{activeFilter}" con la búsqueda actual.</p>
                <button className="btn-outline" onClick={() => {setActiveFilter("Todos"); setSearchQuery("");}}>Limpiar Filtros</button>
              </div>
            )}
          </div>
        </div>

        {/* Map View */}
        <div className="map-container glass-card">
          <MapContainer center={[27.0728, -109.4437]} zoom={13} scrollWheelZoom={true} className="leaflet-map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            
            <MapController center={selectedCenter} />

            {filteredCenters.map(center => (
              <Marker key={center.id} position={center.position}>
                <Popup className="custom-popup">
                  <div className="popup-content">
                    <h3 className="popup-title">{center.name}</h3>
                    <p className="popup-address">{center.address}</p>
                    
                    <div className="popup-info">
                      <Clock size={16} className="popup-icon" />
                      <span>{center.hours}</span>
                    </div>
                    
                    <div className="popup-info">
                      <Phone size={16} className="popup-icon" />
                      <span>{center.contact}</span>
                    </div>

                    <button className="btn-directions">
                      <Navigation size={14} /> Cómo Llegar
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
