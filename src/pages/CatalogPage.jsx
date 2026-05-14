import { useState } from 'react';
import { 
  ChevronDown, Droplets, Package, AlignCenterVertical as Recycle, 
  Wine, BatteryWarning, Sprout, CheckCircle2, XCircle, TreePine
} from 'lucide-react';
import './CatalogPage.css';

const materials = [
  {
    id: 'plasticos',
    title: 'Plásticos (PET, HDPE)',
    icon: <Droplets className="material-icon" />,
    color: '#0288d1',
    impact: 'Reciclar 1 tonelada de plástico ahorra 5,774 kWh de energía y 16.3 barriles de petróleo.',
    aceptados: ['Botellas de agua y refresco (PET 1)', 'Botes de leche, jugo y detergente (HDPE 2)', 'Envases de champú y limpieza limpios'],
    noAceptados: ['Bolsas de plástico delgadas (si no se especifica en el centro)', 'Unicel (EPS)', 'Envases con residuos tóxicos, solventes o pintura'],
    content: {
      limpieza: 'Enjuaga ligeramente para remover restos de comida o líquidos. Déjalos escurrir boca abajo.',
      clasificacion: 'Separa por tipo (PET transparente, PET color, HDPE grueso). Retira las tapas (suelen ser de otro plástico, PP 5, y se donan o acopian aparte).',
      preparacion: 'Aplasta las botellas pisándolas o comprimiéndolas para ahorrar hasta un 70% de espacio. Almacena en costales o bolsas grandes transparentes.'
    }
  },
  {
    id: 'papel',
    title: 'Papel y Cartón',
    icon: <Package className="material-icon" />,
    color: '#8d6e63',
    impact: 'Por cada tonelada de cartón reciclado se salvan 17 árboles y se ahorran 50,000 litros de agua.',
    aceptados: ['Cajas de cartón corrugado', 'Periódicos y revistas', 'Cuadernos (sin espiral ni pastas duras)', 'Hojas de máquina (impresas o blancas)'],
    noAceptados: ['Cartón manchado con grasa (cajas de pizza, comida rápida)', 'Papel higiénico o servilletas usadas', 'Papel térmico (tickets de compra)', 'Cartón encerado (algunos vasos de café)'],
    content: {
      limpieza: 'Asegúrate de que todo el material esté 100% seco y libre de humedad, grasa o restos de alimentos.',
      clasificacion: 'Haz pacas o montones separados: uno de cartón corrugado, otro de papel blanco de oficina, y otro de revistas/periódico.',
      preparacion: 'Desarma todas las cajas para que queden planas. Amarra los montones con cuerda de algodón o mételos bien doblados en cajas de cartón más grandes.'
    }
  },
  {
    id: 'aluminio',
    title: 'Aluminio y Metales',
    icon: <Recycle className="material-icon" />,
    color: '#78909c',
    impact: 'El aluminio puede reciclarse infinitas veces sin perder calidad. Ahorra el 95% de la energía comparado con extraer aluminio virgen.',
    aceptados: ['Latas de refresco y cerveza', 'Latas de conservas (hojalata) limpias', 'Papel aluminio limpio', 'Cacerolas o sartenes viejos de metal'],
    noAceptados: ['Latas con restos de pintura, barniz o químicos peligrosos', 'Papel aluminio con grasa quemada o comida muy pegada', 'Aerosoles presurizados (peligro de explosión)'],
    content: {
      limpieza: 'Vacía por completo las latas. Un enjuague rápido con el agua residual de los platos es suficiente para evitar malos olores e insectos.',
      clasificacion: 'Distingue entre latas de aluminio (refrescos, NO se pegan al imán) y latas de hojalata/acero (conservas, SÍ se pegan al imán).',
      preparacion: 'Aplasta las latas de aluminio para reducir volumen. A las latas de conservas puedes meterles la tapa hacia adentro para evitar cortes al manipularlas.'
    }
  },
  {
    id: 'vidrio',
    title: 'Vidrio',
    icon: <Wine className="material-icon" />,
    color: '#388e3c',
    impact: 'Reciclar vidrio reduce la contaminación del aire en un 20% y la del agua en un 50%, derritiéndose a menor temperatura.',
    aceptados: ['Frascos de conservas, salsas, mermeladas', 'Botellas de vino, cerveza, licores', 'Frascos de perfumes (quitando el atomizador)'],
    noAceptados: ['Espejos o cristales de ventanas', 'Focos o bombillas de iluminación', 'Vasos, tazas o vajillas rotas', 'Cristal de hornos o refractarios (Pyrex)'],
    content: {
      limpieza: 'Enjuaga bien para quitar restos de azúcar o alimentos que atraen abejas. No es necesario quitar las etiquetas de papel adhesivo.',
      clasificacion: 'Generalmente se pide separar por colores: Transparente (cristal), Verde y Ámbar/Café.',
      preparacion: 'Retira tapas de metal o corchos. Maneja con muchísimo cuidado en cajas de cartón resistente o arpillas, nunca en bolsas plásticas delgadas por riesgo grave de rotura y cortes.'
    }
  },
  {
    id: 'electronicos',
    title: 'Electrónicos (E-Waste) y Pilas',
    icon: <BatteryWarning className="material-icon" />,
    color: '#f57c00',
    impact: 'Los electrónicos contienen metales pesados (como plomo y mercurio) que si llegan a la tierra contaminan los mantos freáticos por cientos de años.',
    aceptados: ['Celulares, tablets y cargadores viejos', 'Laptops, CPUs y periféricos (ratones, teclados)', 'Pilas alcalinas y recargables', 'Cables rotos o en desuso'],
    noAceptados: ['Baterías de auto o plomo-ácido (requieren un centro industrial especial)', 'Focos ahorradores rotos (liberan vapor de mercurio)', 'Electrodomésticos grandes con gas (refrigeradores) sin purgar'],
    content: {
      limpieza: 'Limpia el polvo superficial. Si las pilas han derramado ácido (polvo blanco cristalizado), manipúlalas estrictamente con guantes gruesos y lentes.',
      clasificacion: 'Mantén las pilas en un contenedor de plástico rígido (como un bote grueso de PET) completamente separado del resto de los aparatos electrónicos.',
      preparacion: 'Cubre los polos (puntas) de las pilas con cinta adhesiva de aislar para evitar cortocircuitos e incendios por fricción. No desarmes los aparatos electrónicos si no sabes hacerlo.'
    }
  },
  {
    id: 'organicos',
    title: 'Residuos Orgánicos (Composta)',
    icon: <Sprout className="material-icon" />,
    color: '#795548',
    impact: 'Al compostar, evitas que los orgánicos se pudran en vertederos sin oxígeno, lo cual genera gas metano (25 veces más potente que el CO2).',
    aceptados: ['Cascarones de huevo triturados', 'Restos de frutas, verduras y cáscaras', 'Borra de café y bolsitas de té (sin grapa)', 'Hojas secas, ramitas y pasto del jardín'],
    noAceptados: ['Carnes, huesos o pescado (atraen plagas, ratas y huelen muy mal)', 'Grasas, aceites líquidos o salsas', 'Heces de mascotas (perros/gatos)', 'Productos lácteos o pan'],
    content: {
      limpieza: 'Evita a toda costa que los restos vegetales vengan mezclados con plásticos (ej. recuerda quitar las pequeñas pegatinas a la fruta).',
      clasificacion: 'Equilibra materiales "Verdes" (húmedos, ricos en nitrógeno como restos de fruta) y "Cafés" (secos, ricos en carbono como hojas secas o cartón picado sin tinta).',
      preparacion: 'Pica los restos en trozos pequeños para acelerar su descomposición. Puedes usar una compostera comercial, armar un lombricompostero o simplemente enterrarlos en tu jardín (método de zanja).'
    }
  }
];

const CatalogPage = () => {
  const [openId, setOpenId] = useState(materials[0].id);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="catalog-page container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Catálogo Detallado de Materiales</h1>
        <p className="page-subtitle">Conviértete en un experto del reciclaje. Conoce exactamente qué materiales puedes llevar a los centros de acopio, cuáles evitar, y cómo tu esfuerzo impacta directamente a nuestro planeta.</p>
      </div>

      <div className="accordion-container glass-card">
        {materials.map((mat) => (
          <div key={mat.id} className={`accordion-item ${openId === mat.id ? 'open' : ''}`}>
            <button 
              className="accordion-header" 
              onClick={() => toggleAccordion(mat.id)}
              style={{ '--theme-color': mat.color }}
            >
              <div className="header-left">
                <div className="icon-wrapper" style={{ backgroundColor: `${mat.color}20`, color: mat.color }}>
                  {mat.icon}
                </div>
                <h3>{mat.title}</h3>
              </div>
              <ChevronDown className={`chevron ${openId === mat.id ? 'rotate' : ''}`} />
            </button>
            
            <div className="accordion-content-wrapper">
              <div className="accordion-content">
                
                {/* Impact Banner */}
                <div className="impact-banner" style={{ borderLeftColor: mat.color }}>
                  <TreePine size={24} color={mat.color} className="impact-icon"/>
                  <div>
                    <h4>Impacto Ambiental</h4>
                    <p>{mat.impact}</p>
                  </div>
                </div>

                {/* Dos and Don'ts */}
                <div className="rules-grid">
                  <div className="rule-card accept">
                    <h4><CheckCircle2 size={18} /> Sí Aceptados</h4>
                    <ul>
                      {mat.aceptados.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rule-card reject">
                    <h4><XCircle size={18} /> NO Aceptados</h4>
                    <ul>
                      {mat.noAceptados.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Step Grid */}
                <h4 className="steps-title">Proceso de Preparación</h4>
                <div className="step-grid">
                  <div className="step-card">
                    <h5>1. Limpieza</h5>
                    <p>{mat.content.limpieza}</p>
                  </div>
                  <div className="step-card">
                    <h5>2. Clasificación</h5>
                    <p>{mat.content.clasificacion}</p>
                  </div>
                  <div className="step-card">
                    <h5>3. Preparación</h5>
                    <p>{mat.content.preparacion}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
