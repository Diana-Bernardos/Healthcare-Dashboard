import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ocupacionHospitalaria } from '../data/mockData';

export default function OcupacionChart() {
  return (
    <div className="chart-card">
      <h3>Ocupación hospitalaria (%)</h3>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={ocupacionHospitalaria} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorOcupacion" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0284c7" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0284c7" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8f4f8" />
          <XAxis dataKey="mes" tick={{ fill: '#2c5f7a' }} />
          <YAxis domain={[70, 100]} tick={{ fill: '#2c5f7a' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #0284c7' }}
            formatter={(value) => [`${value}%`, 'Ocupación']}
          />
          <Area type="monotone" dataKey="ocupacion" stroke="#0284c7" fillOpacity={1} fill="url(#colorOcupacion)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
