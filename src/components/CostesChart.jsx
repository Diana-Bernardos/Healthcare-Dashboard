import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { costesPorServicio } from '../data/mockData';

const formatCurrency = (value) => `€${(value / 1000).toFixed(0)}k`;

export default function CostesChart() {
  return (
    <div className="chart-card">
      <h3>Costes vs ingresos por servicio (€)</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={costesPorServicio} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8f4f8" />
          <XAxis dataKey="servicio" tick={{ fill: '#2c5f7a', fontSize: 10 }} />
          <YAxis tick={{ fill: '#2c5f7a' }} tickFormatter={formatCurrency} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #7c3aed' }}
            formatter={(value) => [formatCurrency(value), '']}
          />
          <Legend />
          <Bar dataKey="coste" name="Coste" fill="#7c3aed" radius={[4, 4, 0, 0]} />
          <Bar dataKey="ingresos" name="Ingresos" fill="#0d9488" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
