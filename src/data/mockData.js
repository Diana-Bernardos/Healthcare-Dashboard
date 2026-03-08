// Datos simulados para Healthcare Analytics Dashboard
// Representan resultados de consultas SQL sobre el esquema hospitalario

export const estanciaMedia = [
  { servicio: "Medicina Interna", dias: 5.2, altas: 342 },
  { servicio: "Cirugía General", dias: 3.8, altas: 218 },
  { servicio: "Traumatología", dias: 4.5, altas: 156 },
  { servicio: "Cardiología", dias: 6.1, altas: 189 },
  { servicio: "Neumología", dias: 7.3, altas: 124 },
  { servicio: "Neurología", dias: 5.9, altas: 98 },
  { servicio: "Pediatría", dias: 2.8, altas: 267 },
  { servicio: "Urgencias", dias: 1.2, altas: 892 },
];

export const ocupacionHospitalaria = [
  { mes: "Jul", ocupacion: 78 },
  { mes: "Ago", ocupacion: 82 },
  { mes: "Sep", ocupacion: 85 },
  { mes: "Oct", ocupacion: 88 },
  { mes: "Nov", ocupacion: 91 },
  { mes: "Dic", ocupacion: 94 },
  { mes: "Ene", ocupacion: 89 },
  { mes: "Feb", ocupacion: 86 },
  { mes: "Mar", ocupacion: 84 },
];

export const costesPorServicio = [
  { servicio: "Medicina Interna", coste: 1250000, ingresos: 980000 },
  { servicio: "Cirugía General", coste: 2100000, ingresos: 1850000 },
  { servicio: "Traumatología", coste: 890000, ingresos: 720000 },
  { servicio: "Cardiología", coste: 1650000, ingresos: 1420000 },
  { servicio: "Neumología", coste: 720000, ingresos: 610000 },
  { servicio: "Neurología", coste: 980000, ingresos: 850000 },
  { servicio: "Pediatría", coste: 540000, ingresos: 480000 },
  { servicio: "Urgencias", coste: 1890000, ingresos: 1650000 },
];

export const indicadoresCalidad = [
  { indicador: "Satisfacción paciente", valor: 87, meta: 85, unidad: "%" },
  { indicador: "Tasa reingresos 30d", valor: 4.2, meta: 5, unidad: "%" },
  { indicador: "Tiempo espera medio", valor: 42, meta: 45, unidad: "min" },
  { indicador: "Tasa infecciones", valor: 1.8, meta: 2, unidad: "%" },
  { indicador: "Mortalidad ajustada", valor: 0.92, meta: 1, unidad: "ratio" },
];

// Datos históricos más extensos para Forecasting
export const historialOcupacion = [
  { fecha: "2024-01", real: 75 },
  { fecha: "2024-02", real: 78 },
  { fecha: "2024-03", real: 82 },
  { fecha: "2024-04", real: 80 },
  { fecha: "2024-05", real: 85 },
  { fecha: "2024-06", real: 88 },
  { fecha: "2024-07", real: 91 },
  { fecha: "2024-08", real: 94 },
  { fecha: "2024-09", real: 89 },
  { fecha: "2024-10", real: 86 },
  { fecha: "2024-11", real: 84 },
  { fecha: "2024-12", real: 92, predicho: 92 },
  { fecha: "2025-01", predicho: 95 },
  { fecha: "2025-02", predicho: 93 },
  { fecha: "2025-03", predicho: 88 },
];

// Comentarios para Sentiment Analysis
export const feedbackPacientes = [
  { id: 1, texto: "El personal de enfermería fue excepcional, muy atentos.", sentimiento: "positivo", categoria: "Personal" },
  { id: 2, texto: "La comida llegó fría varios días seguidos.", sentimiento: "negativo", categoria: "Restauración" },
  { id: 3, texto: "Tiempo de espera excesivo en urgencias, más de 4 horas.", sentimiento: "negativo", categoria: "Esperas" },
  { id: 4, texto: "Instalaciones muy limpias y modernas.", sentimiento: "positivo", categoria: "Limpieza" },
  { id: 5, texto: "Me costó mucho conseguir que me explicaran el tratamiento.", sentimiento: "neutral", categoria: "Comunicación" },
  { id: 6, texto: "Grandes profesionales en cardiología.", sentimiento: "positivo", categoria: "Médico" },
];

export const resumenKpis = {
  estanciaMediaGlobal: 4.6,
  ocupacionActual: 84,
  costeTotalMensual: 9820000,
  calidadPromedio: 87,
};
