import React from 'react';
import { aiService } from '../data/aiService';

const SentimentAnalysis = () => {
  const metrics = aiService.getSentimentMetrics();

  return (
    <div className="sentiment-analysis">
      <div className="sentiment-header">
        <h3>🗣️ Analizador de Sentimiento IA</h3>
        <p>Análisis en tiempo real de encuestas de satisfacción</p>
      </div>
      
      <div className="sentiment-grid">
        <div className="sentiment-stat">
          <div className="stat-value positivo">{metrics.ratioPositivo}%</div>
          <div className="stat-label">Feedback Positivo</div>
        </div>
        <div className="sentiment-stat">
          <div className="stat-value negativo">{metrics.ratioNegativo}%</div>
          <div className="stat-label">Feedback Negativo</div>
        </div>
      </div>

      <div className="sentiment-topics">
        <div className="topic-item">
          <span className="topic-icon positive">⭐</span>
          <div className="topic-content">
            <strong>Punto Fuerte:</strong>
            <p>{metrics.topElogio}</p>
          </div>
        </div>
        <div className="topic-item">
          <span className="topic-icon negative">⚠️</span>
          <div className="topic-content">
            <strong>Área de Mejora:</strong>
            <p>{metrics.topQueja}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
