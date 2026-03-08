import React from 'react';
import { aiService } from '../data/aiService';

const SmartRecommendations = () => {
  const recs = aiService.getSmartRecommendations();

  return (
    <div className="smart-recommendations">
      <div className="recs-header">
        <h3>🚀 Recomendaciones Prescriptivas IA</h3>
        <p>Sugerencias activas para la optimización operativa</p>
      </div>
      
      <div className="recs-list">
        {recs.map(rec => (
          <div key={rec.id} className="rec-card">
            <div className="rec-heading">
              <strong>{rec.title}</strong>
              <span className="rec-impact">{rec.impact}</span>
            </div>
            <p className="rec-action">{rec.action}</p>
            <button className="rec-apply-btn">Planificar Acción</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartRecommendations;
