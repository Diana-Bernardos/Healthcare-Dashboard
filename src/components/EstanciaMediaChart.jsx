import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { estanciaMedia } from '../data/mockData';

export default function EstanciaMediaChart() {
  return (
    <div className="chart-card">
      <h3>Estancia media por servicio (días)</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={estanciaMedia} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8f4f8" />
          <XAxis dataKey="servicio" tick={{ fill: '#2c5f7a', fontSize: 11 }} />
          <YAxis tick={{ fill: '#2c5f7a' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #0d9488' }}
            formatter={(value) => [`${value} días`, 'Estancia media']}
          />
          <Bar dataKey="dias" fill="#0d9488" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
