import React, { useEffect, useState } from 'react';
import { aiService } from '../data/aiService';

const AnomalyGuard = () => {
  const [anomalies, setAnomalies] = useState([]);

  useEffect(() => {
    const detected = aiService.detectAnomalies();
    setAnomalies(detected);
  }, []);

  if (anomalies.length === 0) return null;

  return (
    <div className="anomaly-guard">
      <div className="anomaly-header">
        <span className="guard-icon">🛡️</span>
        <h3>Guardián de Calidad IA</h3>
        <span className="anomaly-count">{anomalies.length} anomalías detectadas</span>
      </div>
      <div className="anomaly-list">
        {anomalies.map(ano => (
          <div key={ano.id} className={`anomaly-item ${ano.severity}`}>
            <div className="anomaly-msg">
              <strong>{ano.message}</strong>
              <p>Impacto: {ano.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnomalyGuard;
