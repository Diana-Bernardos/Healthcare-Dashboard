import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { indicadoresCalidad } from '../data/mockData';

export default function CalidadChart() {
  const getColor = (entry) => {
    const { indicador, valor, meta } = entry;
    const higherIsBetter = indicador === 'Satisfacción paciente';
    const cumple = higherIsBetter ? valor >= meta : valor <= meta;
    return cumple ? '#0d9488' : valor > meta * 1.2 ? '#dc2626' : '#f59e0b';
  };

  return (
    <div className="chart-card">
      <h3>Indicadores de calidad</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={indicadoresCalidad} layout="vertical" margin={{ top: 10, right: 30, left: 100, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8f4f8" />
          <XAxis type="number" tick={{ fill: '#2c5f7a' }} />
          <YAxis type="category" dataKey="indicador" tick={{ fill: '#2c5f7a', fontSize: 11 }} width={95} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #0d9488' }}
            formatter={(value, name, props) => [`${value} ${props.payload.unidad}`, `Meta: ${props.payload.meta} ${props.payload.unidad}`]}
          />
          <Bar dataKey="valor" radius={[0, 4, 4, 0]}>
            {indicadoresCalidad.map((entry, index) => (
              <Cell key={index} fill={getColor(entry)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
