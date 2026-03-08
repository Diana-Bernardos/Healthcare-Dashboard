import { resumenKpis } from '../data/mockData';
import { aiService } from '../data/aiService';

export default function KpiCards() {
  const kpis = [
    { label: 'Estancia media global', value: `${resumenKpis.estanciaMediaGlobal} días`, icon: '⏱' },
    { label: 'Ocupación actual', value: `${resumenKpis.ocupacionActual}%`, icon: '🛏' },
    { label: 'Coste total mensual', value: `€${(resumenKpis.costeTotalMensual / 1000000).toFixed(2)}M`, icon: '💰' },
    { label: 'Calidad promedio', value: `${resumenKpis.calidadPromedio}%`, icon: '⭐' },
  ];

  const summary = aiService.getExecutiveSummary();

  return (
    <div className="dashboard-top-section">
      <div className="kpi-grid">
        {kpis.map((kpi, i) => (
          <div key={i} className="kpi-card">
            <span className="kpi-icon">{kpi.icon}</span>
            <div>
              <p className="kpi-value">{kpi.value}</p>
              <p className="kpi-label">{kpi.label}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="ai-executive-summary">
        <div className="summary-header">
          <span>🧠</span>
          <h4>Resumen Ejecutivo IA</h4>
        </div>
        <p>{summary}</p>
      </div>
    </div>
  );
}
