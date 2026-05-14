import { FileText, Download as DownloadIcon, Printer, Calendar, BatteryWarning, Wine, Sprout, AlertTriangle, Smile, Award } from 'lucide-react';
import './DownloadsPage.css';

const DownloadsPage = () => {
  return (
    <div className="downloads-page container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Kit de Separación para el Hogar</h1>
        <p className="page-subtitle">Descarga e imprime nuestras plantillas gratuitas para marcar los botes de basura en tu casa. Sigue los estándares locales para facilitar tu visita al centro de acopio.</p>
      </div>

      <div className="kit-grid">
        <div className="kit-card glass-card">
          <div className="kit-image-placeholder pl">
            <FileText size={48} color="#0288d1" />
            <span>Etiqueta Plásticos</span>
          </div>
          <div className="kit-info">
            <h3>Etiqueta Bote Azul (Plásticos)</h3>
            <p>Incluye iconos de botellas PET y recipientes HDPE aceptados.</p>
            <button className="btn-primary full-width">
              <DownloadIcon size={18} />
              Descargar PDF
            </button>
          </div>
        </div>

        <div className="kit-card glass-card">
          <div className="kit-image-placeholder pa">
            <FileText size={48} color="#8d6e63" />
            <span>Etiqueta Papel/Cartón</span>
          </div>
          <div className="kit-info">
            <h3>Etiqueta Bote Café (Papel/Cartón)</h3>
            <p>Instrucciones visuales para mantener el papel seco y sin grasa.</p>
            <button className="btn-primary full-width">
              <DownloadIcon size={18} />
              Descargar PDF
            </button>
          </div>
        </div>

        <div className="kit-card glass-card">
          <div className="kit-image-placeholder al">
            <FileText size={48} color="#78909c" />
            <span>Etiqueta Aluminio</span>
          </div>
          <div className="kit-info">
            <h3>Etiqueta Bote Gris (Aluminio)</h3>
            <p>Guía para latas de aluminio y cómo aplastarlas correctamente.</p>
            <button className="btn-primary full-width">
              <DownloadIcon size={18} />
              Descargar PDF
            </button>
          </div>
        </div>

        <div className="kit-card glass-card">
          <div className="kit-image-placeholder vi">
            <Wine size={48} color="#388e3c" />
            <span>Etiqueta Vidrio</span>
          </div>
          <div className="kit-info">
            <h3>Etiqueta Bote Verde (Vidrio)</h3>
            <p>Instrucciones de seguridad para frascos y botellas de vidrio transparente, ámbar y verde.</p>
            <button className="btn-primary full-width">
              <DownloadIcon size={18} />
              Descargar PDF
            </button>
          </div>
        </div>

        <div className="kit-card glass-card">
          <div className="kit-image-placeholder el">
            <BatteryWarning size={48} color="#f57c00" />
            <span>Etiqueta Electrónicos</span>
          </div>
          <div className="kit-info">
            <h3>Etiqueta Bote Naranja (Peligrosos)</h3>
            <p>Identificador especial para pilas, baterías, cables y pequeños electrónicos del hogar.</p>
            <button className="btn-primary full-width">
              <DownloadIcon size={18} />
              Descargar PDF
            </button>
          </div>
        </div>

        <div className="kit-card glass-card">
          <div className="kit-image-placeholder cal">
            <Calendar size={48} color="#8e24aa" />
            <span>Calendario Familiar</span>
          </div>
          <div className="kit-info">
            <h3>Plantilla: Calendario de Recolección</h3>
            <p>Organiza en familia los días de recolección o visitas al centro de acopio. Pégalo en tu refrigerador.</p>
            <button className="btn-primary full-width">
              <DownloadIcon size={18} />
              Descargar PDF
            </button>
          </div>
        </div>

        <div className="kit-card glass-card">
          <div className="kit-image-placeholder or">
            <Sprout size={48} color="#795548" />
            <span>Etiqueta Orgánicos</span>
          </div>
          <div className="kit-info">
            <h3>Etiqueta Bote Marrón (Composta)</h3>
            <p>Para restos de frutas, verduras, cascarones y café. ¡Ideal si estás empezando tu propia composta!</p>
            <button className="btn-primary full-width">
              <DownloadIcon size={18} />
              Descargar PDF
            </button>
          </div>
        </div>

        <div className="kit-card glass-card">
          <div className="kit-image-placeholder no">
            <AlertTriangle size={48} color="#d32f2f" />
            <span>Guía: Qué NO Reciclar</span>
          </div>
          <div className="kit-info">
            <h3>Póster: Evita la Contaminación</h3>
            <p>Una guía visual rápida de lo que NO debes poner en los botes de reciclaje (ej. servilletas sucias, unicel).</p>
            <button className="btn-primary full-width">
              <DownloadIcon size={18} />
              Descargar PDF
            </button>
          </div>
        </div>

        <div className="kit-card glass-card">
          <div className="kit-image-placeholder kid">
            <Smile size={48} color="#ffb300" />
            <span>Niños Sustentables</span>
          </div>
          <div className="kit-info">
            <h3>Tarjetas Educativas para Niños</h3>
            <p>Tarjetas coloreables e interactivas para que los más pequeños aprendan a separar la basura jugando.</p>
            <button className="btn-primary full-width">
              <DownloadIcon size={18} />
              Descargar PDF
            </button>
          </div>
        </div>

        <div className="kit-card glass-card">
          <div className="kit-image-placeholder aw">
            <Award size={48} color="#fbc02d" />
            <span>Reconocimiento</span>
          </div>
          <div className="kit-info">
            <h3>Diploma Familiar</h3>
            <p>Un certificado de "Hogar Sustentable" para imprimir y premiar el esfuerzo de tu familia al completar un mes reciclando.</p>
            <button className="btn-primary full-width">
              <DownloadIcon size={18} />
              Descargar PDF
            </button>
          </div>
        </div>
      </div>

      <div className="instructions-banner glass-card">
        <div className="banner-content">
          <Printer size={32} className="banner-icon" />
          <div className="banner-text">
            <h3>¿Cómo utilizar estas etiquetas?</h3>
            <p>Descarga los archivos PDF, imprímelos en hojas tamaño carta (preferentemente en papel adhesivo o sujétalos con cinta transparente) y pégalos en tus contenedores de basura designados. ¡Involucra a toda tu familia!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
