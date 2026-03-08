import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { aiService } from '../data/aiService';

const ForecastingChart = () => {
  const data = aiService.getForecastingData();

  return (
    <div className="chart-container forecasting">
      <div className="chart-header">
        <h3>🔮 Predicción de Ocupación Hospitalaria</h3>
        <p className="chart-desc">Basado en modelos predictivos de series temporales</p>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#646cff" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#646cff" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPred" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9c27b0" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#9c27b0" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="fecha" stroke="var(--text-secondary)" />
            <YAxis stroke="var(--text-secondary)" domain={[0, 100]} unit="%" />
            <Tooltip 
              contentStyle={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="real" 
              stroke="#646cff" 
              fillOpacity={1} 
              fill="url(#colorReal)" 
              name="Ocupación Real"
              strokeWidth={3}
            />
            <Area 
              type="monotone" 
              dataKey="predicho" 
              stroke="#9c27b0" 
              strokeDasharray="5 5" 
              fillOpacity={1} 
              fill="url(#colorPred)" 
              name="Predicción IA"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ForecastingChart;
