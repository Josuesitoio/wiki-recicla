import { Link } from 'react-router-dom';
import { 
  Users, Building2, Landmark, Globe2, 
  MapPin, BookOpen, ArrowRight, Recycle, 
  Droplets, Zap, ChevronRight, Battery, 
  Coffee, Package, Monitor, HelpCircle,
  Mail, Phone
} from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-background-glow"></div>
        <div className="container hero-grid">
          <div className="hero-content glass-card">
            <div className="hero-badge">
              <span className="pulse-dot"></span> Actualizado para Navojoa, 2026
            </div>
            <h1 className="hero-title">
              Reciclar nunca fue tan <span className="text-highlight">fácil y claro.</span>
            </h1>
            <p className="hero-description">
              La primera plataforma ciudadana en Navojoa que elimina las dudas. 
              Encuentra centros de acopio verificados, aprende a separar tus residuos y contribuye a una ciudad más limpia.
            </p>
            <div className="hero-buttons">
              <Link to="/mapa" className="btn-primary-large">
                <MapPin size={22} />
                Explorar el Mapa
              </Link>
              <Link to="/materiales" className="btn-secondary-large">
                Catálogo de Materiales
              </Link>
            </div>
            
            <div className="hero-trust">
              <p>Confiado por ciudadanos y centros de:</p>
              <div className="trust-logos">
                <span>Col. Centro</span>
                <span className="dot">•</span>
                <span>Tierra Blanca</span>
                <span className="dot">•</span>
                <span>Sonora Sur</span>
                <span className="dot">•</span>
                <span>Mercado Municipal</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Ciudad Limpia" 
              className="hero-image"
            />
            <div className="hero-image-card glass-card">
              <Recycle size={24} color="var(--color-primary)" />
              <div>
                <strong>+5,000 kg</strong>
                <span>Reciclados este mes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK MATERIALS */}
      <section className="quick-materials">
        <div className="container">
          <div className="section-heading text-center">
            <h2>¿Qué deseas reciclar hoy?</h2>
            <p>Acceso rápido a las guías más consultadas por la comunidad</p>
          </div>
          
          <div className="materials-grid">
            <Link to="/materiales" className="material-card glass-card">
              <div className="material-icon-wrapper" style={{background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7'}}>
                <Coffee size={32} />
              </div>
              <h3>Plásticos PET</h3>
              <p>Botellas de agua, refrescos y envases limpios.</p>
              <span className="material-link">Ver guía <ChevronRight size={16} /></span>
            </Link>

            <Link to="/materiales" className="material-card glass-card">
              <div className="material-icon-wrapper" style={{background: 'rgba(217, 119, 6, 0.1)', color: '#d97706'}}>
                <Package size={32} />
              </div>
              <h3>Cartón y Papel</h3>
              <p>Cajas desarmadas, cuadernos, periódicos secos.</p>
              <span className="material-link">Ver guía <ChevronRight size={16} /></span>
            </Link>

            <Link to="/materiales" className="material-card glass-card">
              <div className="material-icon-wrapper" style={{background: 'rgba(147, 51, 234, 0.1)', color: '#9333ea'}}>
                <Monitor size={32} />
              </div>
              <h3>Electrónicos</h3>
              <p>Celulares, computadoras y electrodomésticos.</p>
              <span className="material-link">Ver guía <ChevronRight size={16} /></span>
            </Link>

            <Link to="/materiales" className="material-card glass-card">
              <div className="material-icon-wrapper" style={{background: 'rgba(220, 38, 38, 0.1)', color: '#dc2626'}}>
                <Battery size={32} />
              </div>
              <h3>Pilas y Baterías</h3>
              <p>Alcalinas, recargables y baterías de auto.</p>
              <span className="material-link">Ver guía <ChevronRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="how-grid">
            <div className="how-text">
              <h2>El camino hacia la sustentabilidad</h2>
              <p>Hemos diseñado un proceso de 3 pasos para asegurar que tus esfuerzos de reciclaje realmente funcionen y no terminen en el basurero municipal.</p>
              <Link to="/kit" className="btn-outline-large mt-4">
                Descargar Kit Hogar <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="how-steps glass-card">
              <div className="step-row">
                <div className="step-number-bubble">1</div>
                <div className="step-content">
                  <h4>Identifica y Limpia</h4>
                  <p>Revisa en nuestro catálogo si tu material es aceptado y aprende a lavarlo o aplastarlo correctamente.</p>
                </div>
              </div>
              <div className="step-divider"></div>
              <div className="step-row">
                <div className="step-number-bubble">2</div>
                <div className="step-content">
                  <h4>Encuentra tu Centro</h4>
                  <p>Usa el mapa interactivo para ver horarios reales, direcciones exactas y qué compran o reciben.</p>
                </div>
              </div>
              <div className="step-divider"></div>
              <div className="step-row">
                <div className="step-number-bubble">3</div>
                <div className="step-content">
                  <h4>Lleva y Registra</h4>
                  <p>Lleva tus materiales separados, exige tu ticket y siéntete orgulloso de reducir la contaminación local.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMPACT STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-box">
            <div className="stat-column">
              <h3>+15</h3>
              <p>Centros Verificados</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-column">
              <h3>6</h3>
              <p>Guías Detalladas</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-column">
              <h3>100%</h3>
              <p>Libre y Gratuito</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY ROLES */}
      <section className="roles-section">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Construido por y para la ciudad</h2>
            <p>Wiki Recicla es un ecosistema donde todos participan</p>
          </div>
          
          <div className="roles-grid">
            <div className="role-card glass-card">
              <div className="role-icon-bg"><Users className="role-icon citizen-icon" /></div>
              <h3>Ciudadanos</h3>
              <p>Dejan de tirar dinero a la basura, aprenden a separar y encuentran lugares cercanos.</p>
            </div>
            <div className="role-card glass-card">
              <div className="role-icon-bg"><Building2 className="role-icon center-icon" /></div>
              <h3>Centros de Acopio</h3>
              <p>Ganan visibilidad, reciben materiales mejor separados y aumentan su flujo de clientes.</p>
            </div>
            <div className="role-card glass-card">
              <div className="role-icon-bg"><Globe2 className="role-icon org-icon" /></div>
              <h3>Organizaciones</h3>
              <p>Pueden lanzar campañas de acopio masivo (ej. "Tapatón") y publicarlas en nuestra plataforma.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="faq-section">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Preguntas Frecuentes</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item glass-card">
              <h4><HelpCircle size={20} className="mr-2 inline" color="var(--color-primary)"/> ¿Tiene algún costo usar el mapa?</h4>
              <p>No, Wiki Recicla es una iniciativa comunitaria y será gratuita para siempre, tanto para ciudadanos como para los centros que deseen aparecer.</p>
            </div>
            <div className="faq-item glass-card">
              <h4><HelpCircle size={20} className="mr-2 inline" color="var(--color-primary)"/> ¿Los centros compran el material?</h4>
              <p>Depende del centro. En el mapa especificamos qué lugares compran materiales (como aluminio o cartón) y cuáles son solo puntos de donación voluntaria.</p>
            </div>
            <div className="faq-item glass-card">
              <h4><HelpCircle size={20} className="mr-2 inline" color="var(--color-primary)"/> Faltan centros en mi colonia, ¿qué hago?</h4>
              <p>¡Ayúdanos a agregarlos! Ve a la sección "Participa" en el menú superior y envíanos los datos del lugar para verificarlo y subirlo al mapa.</p>
            </div>
            <div className="faq-item glass-card">
              <h4><HelpCircle size={20} className="mr-2 inline" color="var(--color-primary)"/> ¿Puedo tirar vidrios rotos?</h4>
              <p>El vidrio roto es peligroso. Visita nuestra sección de "Materiales > Vidrio" para conocer la forma correcta de envolverlo antes de llevarlo al centro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="bottom-cta">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Transforma tu basura en recursos</h2>
              <p>Navojoa necesita ciudadanos informados. Empieza tu viaje sustentable hoy.</p>
              <Link to="/mapa" className="btn-primary-large cta-pulse">
                Ir al Mapa Interactivo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h3><Recycle size={24} className="inline mr-2" /> Wiki Recicla</h3>
            <p>Plataforma ciudadana para centralizar y facilitar el reciclaje en Navojoa, Sonora.</p>
          </div>
          <div className="footer-links">
            <h4>Navegación</h4>
            <Link to="/">Inicio</Link>
            <Link to="/mapa">Mapa de Centros</Link>
            <Link to="/materiales">Catálogo Educativo</Link>
            <Link to="/kit">Kit Hogar</Link>
            <Link to="/participa">Comunidad y Encuestas</Link>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p><Mail size={16} /> hola@wikirecicla.org</p>
            <p><Phone size={16} /> (642) 123-4567</p>
            <p><MapPin size={16} /> Navojoa, Sonora, México</p>
          </div>
        </div>

        <div className="container footer-creators">
          <h4>Creadores del Proyecto</h4>
          <div className="creators-list">
            <div className="creator">
              <img src="/creador1.jpeg" alt="Perla Marina" />
              <span>Perla Marina</span>
            </div>
            <div className="creator">
              <img src="/creador2.jpeg" alt="Sara Reyes" />
              <span>Sara Reyes</span>
            </div>
            <div className="creator">
              <img src="/creador3.jpeg" alt="Noe Josue" />
              <span>Noe Josue</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Wiki Recicla Navojoa. Todos los derechos reservados. Proyecto Comunitario.</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
