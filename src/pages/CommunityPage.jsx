import { useState, useEffect } from 'react';
import { HelpCircle, BarChart3, MessageSquareHeart, Award, ChevronRight } from 'lucide-react';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import './CommunityPage.css';

const CommunityPage = () => {
  const [step, setStep] = useState(0); // 0-indexed for questions array
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [serverStats, setServerStats] = useState(0);

  // Load stats from Firebase on mount
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'survey_responses'));
        setServerStats(querySnapshot.size);
      } catch (err) {
        console.log('Error fetching stats from Firebase:', err);
      }
    };
    fetchStats();
  }, []);

  const questions = [
    {
      id: "q1_obstaculo",
      title: "¿Cuál es tu mayor obstáculo para reciclar diariamente?",
      options: ["No conozco ubicaciones cercanas", "Falta de tiempo en casa", "No pasa un servicio de recolección", "Confusión sobre cómo separar"]
    },
    {
      id: "q2_frecuencia",
      title: "Sé honesto: ¿Con qué frecuencia separas tu basura actualmente?",
      options: ["Diario / Siempre lo hago", "A veces / Solo cuando me acuerdo", "Casi nunca o nunca"]
    },
    {
      id: "q3_material",
      title: "¿Qué tipo de material te resulta más confuso o difícil de reciclar?",
      options: ["Plásticos y envases (PET, tapas)", "Cartón, papel y periódicos", "Envases de vidrio y botellas", "Chatarra electrónica y pilas"]
    },
    {
      id: "q4_pago",
      title: "¿Pagarías una cuota mensual accesible por recolección de reciclaje a domicilio?",
      options: ["Sí, pagaría por la comodidad", "Quizás, si es muy económico", "No, prefiero llevarlos yo mismo gratis"]
    },
    {
      id: "q5_fuente_info",
      title: "¿De dónde obtienes normalmente información sobre reciclaje o ecología?",
      options: ["Redes sociales (Facebook, Instagram)", "Familiares o amigos", "Campañas del gobierno municipal", "No suelo buscar esa información"]
    },
    {
      id: "q6_campanas",
      title: "¿Conoces las campañas del municipio de Navojoa sobre manejo de residuos?",
      options: ["Sí las conozco y participo", "Sí las conozco pero no participo", "No sabía que existían campañas"]
    },
    {
      id: "q7_botes",
      title: "¿Tienes botes separados para diferentes residuos en tu casa?",
      options: ["Sí, tengo más de 2 botes (plástico, cartón, etc)", "Solo dos: orgánico e inorgánico", "No, tiro todo en el mismo bote"]
    },
    {
      id: "q8_personas",
      title: "¿Cuántas personas viven en tu hogar actualmente?",
      options: ["1 a 2 personas", "3 a 4 personas", "5 o más personas"]
    },
    {
      id: "q9_motivacion",
      title: "¿Cuál es la principal razón por la que SÍ reciclas o reciclarías?",
      options: ["Proteger el medio ambiente", "Obtener un beneficio económico extra", "Sentido de deber cívico", "Mantener mi calle limpia"]
    },
    {
      id: "q10_distancia",
      title: "¿A qué distancia aproximada está el centro de acopio más cercano que conoces?",
      options: ["A menos de 10 minutos caminando", "A 10-20 minutos en auto", "Está muy lejos de mi casa", "No conozco ningún centro cercano"]
    },
    {
      id: "q11_vecinos",
      title: "¿Tus vecinos o comunidad cercana suelen reciclar?",
      options: ["Sí, la mayoría lo hace", "Solo algunas personas", "Casi nadie recicla en mi colonia", "No lo sé / Nunca me he fijado"]
    },
    {
      id: "q12_educacion",
      title: "¿Consideras que en las escuelas de Navojoa se enseña suficiente sobre reciclaje?",
      options: ["Sí, hay buena educación al respecto", "Se enseña teoría, pero falta mucha práctica", "No, hace falta muchísima educación ambiental"]
    },
    {
      id: "q13_lavado",
      title: "¿Estarías dispuesto a lavar y aplastar los envases si eso garantizara que se reciclen?",
      options: ["Ya lo hago siempre", "Lo haría si alguien me lo pidiera", "Me da mucha pereza / Preferiría no hacerlo"]
    },
    {
      id: "q14_incentivos",
      title: "¿Crees que tener incentivos (descuentos en tiendas locales) te motivaría a reciclar más?",
      options: ["Definitivamente sí, reciclaría el doble", "Probablemente sí", "Reciclaría igual con o sin incentivos"]
    },
    {
      id: "q15_talleres",
      title: "¿Asistirías a un taller comunitario gratuito sobre compostaje y reducción de basura?",
      options: ["¡Sí, me encantaría aprender más!", "Tal vez, depende del horario y lugar", "No por ahora"]
    }
  ];

  const handleAnswer = (optionText) => {
    const currentQuestion = questions[step];
    const newAnswers = { ...answers, [currentQuestion.id]: optionText };
    
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      submitSurvey(newAnswers);
    }
  };

  const submitSurvey = async (finalAnswers) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'survey_responses'), {
        ...finalAnswers,
        timestamp: serverTimestamp()
      });
      
      setHasVoted(true);
      setServerStats(prev => prev + 1);
    } catch (error) {
      console.error("Error al guardar en Firebase:", error);
      alert("Hubo un error al guardar tu respuesta. Revisa los permisos de Firebase.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFeedback = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get('message');
    
    try {
      await addDoc(collection(db, 'feedback'), {
        message: message,
        timestamp: serverTimestamp()
      });
      alert("¡Buzón enviado! Gracias por tu aporte.");
      e.target.reset();
    } catch (error) {
      console.error("Error al guardar feedback:", error);
      alert("Hubo un problema al enviar el buzón.");
    }
  }

  const currentQ = questions[step];
  const progressPercent = ((step + 1) / questions.length) * 100;

  return (
    <div className="community-page container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Tu Voz en la Comunidad</h1>
        <p className="page-subtitle">Gran Censo Ambiental Navojoa 2026. Esta es la encuesta más completa para entender las necesidades de nuestra ciudad.</p>
      </div>

      <div className="community-content">
        
        {/* DYNAMIC MULTI-STEP SURVEY */}
        <div className="survey-container glass-card">
          <div className="survey-header">
            <div className="survey-icon"><HelpCircle size={36} /></div>
            <div>
              <h2>Censo de Hábitos Sustentables ({questions.length} Preguntas)</h2>
              <p>Las respuestas se guardan en vivo y de forma anónima.</p>
            </div>
          </div>
          
          <div className="survey-content">
            
            {!hasVoted && !isSubmitting && (
              <div className="survey-step animate-fade-in">
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
                </div>
                <div className="step-indicator">Pregunta {step + 1} de {questions.length}</div>
                
                <h3 className="survey-question">{currentQ.title}</h3>
                
                <div className="simple-options">
                  {currentQ.options.map((option, idx) => (
                    <button 
                      key={idx} 
                      className="poll-btn-simple"
                      onClick={() => handleAnswer(option)}
                    >
                      <div className="poll-radio-circle"></div>
                      <span>{option}</span>
                      <ChevronRight className="ml-auto opacity-50" size={20} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isSubmitting && (
              <div className="submitting-state">
                <div className="spinner"></div>
                <p>Analizando respuestas y escribiendo en la base de datos...</p>
              </div>
            )}

            {hasVoted && (
              <div className="poll-results animate-fade-in">
                <div className="success-banner">
                  <div className="success-icon-wrapper">
                    <Award size={32} color="#fbc02d" />
                  </div>
                  <div className="success-text">
                    <h4>¡Completaste el Gran Censo!</h4>
                    <p>Increíble esfuerzo. Tus {questions.length} respuestas han sido registradas en la nube.</p>
                  </div>
                </div>

                <div className="your-answers">
                  <h4>Resumen de tu Perfil:</h4>
                  <ul className="answers-list-compact">
                    {questions.map((q) => (
                      <li key={q.id}>
                        <strong>{q.title.substring(0, 40)}...</strong>
                        <br/> <span className="answer-text">👉 {answers[q.id]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="poll-footer">
                  <BarChart3 size={16} /> <strong>{serverStats}</strong> encuestas totales completadas en la base de datos.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FEEDBACK BOX */}
        <div className="feedback-container glass-card">
          <div className="feedback-header">
             <MessageSquareHeart size={32} className="feedback-icon" />
             <h2>Buzón Abierto</h2>
          </div>
          <p>¿Tienes alguna idea para mejorar el sistema de recolección del municipio? Tu comentario es 100% anónimo.</p>
          <form onSubmit={handleFeedback}>
            <textarea name="message" className="feedback-textarea" placeholder="Escribe tu propuesta o comentario aquí..." rows="6" required></textarea>
            <button type="submit" className="btn-primary">Enviar Mensaje</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default CommunityPage;
