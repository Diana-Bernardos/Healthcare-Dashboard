import { 
  estanciaMedia, 
  ocupacionHospitalaria, 
  costesPorServicio, 
  indicadoresCalidad,
  historialOcupacion,
  feedbackPacientes
} from './mockData';

/**
 * Servicio IA para simular procesamiento de lenguaje natural, detección de anomalías,
 * predicciones y análisis de sentimiento.
 */
export const aiService = {
  /**
   * Procesa una consulta en lenguaje natural y devuelve una respuesta estructurada.
   */
  processQuery: (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('coste') || q.includes('caro') || q.includes('dinero')) {
      const maxCoste = [...costesPorServicio].sort((a, b) => b.coste - a.coste)[0];
      return {
        answer: `El servicio con mayor coste es ${maxCoste.servicio} con ${maxCoste.coste.toLocaleString()}€.`,
        type: 'financial'
      };
    }
    
    if (q.includes('estancia') || q.includes('días') || q.includes('tiempo')) {
      const maxEstancia = [...estanciaMedia].sort((a, b) => b.dias - a.dias)[0];
      return {
        answer: `El servicio con mayor estancia media es ${maxEstancia.servicio} (${maxEstancia.dias} días).`,
        type: 'clinical'
      };
    }

    if (q.includes('ocupación') || q.includes('lleno')) {
      const actual = ocupacionHospitalaria[ocupacionHospitalaria.length - 1];
      return {
        answer: `La ocupación actual del hospital es del ${actual.ocupacion}%.`,
        type: 'operational'
      };
    }

    if (q.includes('reingresos') || q.includes('calidad')) {
      const reingresos = indicadoresCalidad.find(i => i.indicador.includes('reingresos'));
      return {
        answer: `La tasa de reingresos actual es del ${reingresos.valor}${reingresos.unidad}, frente a una meta del ${reingresos.meta}%.`,
        type: 'quality'
      };
    }

    return {
      answer: "No estoy seguro de cómo responder a eso. Prueba con '¿Cuál es el servicio más caro?' o '¿Cómo va la ocupación?'.",
      type: 'unknown'
    };
  },

  /**
   * Analiza los datos en busca de anomalías.
   */
  detectAnomalies: () => {
    const anomalies = [];
    
    const lastOcupacion = ocupacionHospitalaria[ocupacionHospitalaria.length - 1];
    if (lastOcupacion.ocupacion > 93) {
      anomalies.push({
        id: 'anom-1',
        severity: 'warning',
        message: `Ocupación crítica détectada en ${lastOcupacion.mes}: ${lastOcupacion.ocupacion}%`,
        impact: 'Saturación de servicios'
      });
    }

    const espera = indicadoresCalidad.find(i => i.indicador === "Tiempo espera medio");
    if (espera && espera.valor > espera.meta) {
      anomalies.push({
        id: 'anom-2',
        severity: 'error',
        message: `Tiempo de espera excesivo: ${espera.valor} min (Meta: ${espera.meta} min)`,
        impact: 'Satisfacción del paciente'
      });
    }

    return anomalies;
  },

  /**
   * Obtiene datos de predicción para ocupación.
   */
  getForecastingData: () => {
    return historialOcupacion;
  },

  /**
   * Analiza el sentimiento del feedback de pacientes.
   */
  getSentimentMetrics: () => {
    const total = feedbackPacientes.length;
    const positivos = feedbackPacientes.filter(f => f.sentimiento === 'positivo').length;
    const negativos = feedbackPacientes.filter(f => f.sentimiento === 'negativo').length;
    
    return {
      ratioPositivo: (positivos / total * 100).toFixed(0),
      ratioNegativo: (negativos / total * 100).toFixed(0),
      topQueja: "Tiempo de espera en Urgencias",
      topElogio: "Profesionalidad del personal"
    };
  },

  /**
   * Genera recomendaciones inteligentes basadas en datos cruzados.
   */
  getSmartRecommendations: () => {
    const recommendations = [];
    
    const lastOcupacion = ocupacionHospitalaria[ocupacionHospitalaria.length - 1].ocupacion;
    if (lastOcupacion > 90) {
      recommendations.push({
        id: 'rec-1',
        title: "Optimización de Camas",
        action: "Reasignar 5 camas de post-operatorio a Medicina Interna para aliviar el cuello de botella en ingresos.",
        impact: "Reducción de espera en un 12%"
      });
    }

    const cirugia = costesPorServicio.find(s => s.servicio === "Cirugía General");
    if (cirugia.coste > cirugia.ingresos * 1.1) {
      recommendations.push({
        id: 'rec-2',
        title: "Revisión de Consumibles",
        action: "El coste de materiales en Cirugía supera el margen. Evaluar nuevos proveedores de suturas.",
        impact: "Ahorro potencial de 45.000€/mes"
      });
    }

    const espera = indicadoresCalidad.find(i => i.indicador === "Tiempo espera medio").valor;
    if (espera > 40) {
      recommendations.push({
        id: 'rec-3',
        title: "Triaje Inteligente",
        action: "Activar el protocolo de refuerzo en triaje para amortiguar el pico de demanda previsto.",
        impact: "Mejora de satisfacción en +5ptos"
      });
    }

    return recommendations;
  },

  /**
   * Genera un resumen inteligente de los KPIs.
   */
  getExecutiveSummary: () => {
    return "El hospital muestra una tendencia de ocupación al alza, alcanzando niveles críticos este mes. Las predicciones IA sugieren un pico del 95% para enero. Aunque la mayoría de indicadores de calidad están en meta, el tiempo de espera y el sentimiento negativo sobre Urgencias requieren atención inmediata.";
  }
};
