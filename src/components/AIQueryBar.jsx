import React, { useState } from 'react';
import { aiService } from '../data/aiService';

const AIQueryBar = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    const result = aiService.processQuery(query);
    setResponse(result);
  };

  return (
    <div className="ai-query-container">
      <form onSubmit={handleSearch} className="ai-query-form">
        <div className="ai-input-wrapper">
          <span className="ai-icon">✨</span>
          <input
            type="text"
            placeholder="Pregunta a la IA (ej: ¿Cuál es el servicio más caro?)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="ai-input"
          />
          <button type="submit" className="ai-submit-btn">Consultar</button>
        </div>
      </form>
      
      {response && (
        <div className={`ai-response animate-fade-in ${response.type}`}>
          <p>{response.answer}</p>
          <button onClick={() => setResponse(null)} className="ai-close-btn">×</button>
        </div>
      )}
    </div>
  );
};

export default AIQueryBar;
