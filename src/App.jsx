import EstanciaMediaChart from './components/EstanciaMediaChart';
import OcupacionChart from './components/OcupacionChart';
import CostesChart from './components/CostesChart';
import CalidadChart from './components/CalidadChart';
import KpiCards from './components/KpiCards';
import AIQueryBar from './components/AIQueryBar';
import AnomalyGuard from './components/AnomalyGuard';
import ForecastingChart from './components/ForecastingChart';
import SentimentAnalysis from './components/SentimentAnalysis';
import SmartRecommendations from './components/SmartRecommendations';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Healthcare Analytics Dashboard</h1>
        <p className="subtitle">Métricas hospitalarias en tiempo real</p>
        <AIQueryBar />
      </header>

      <main className="main">
        <AnomalyGuard />
        <KpiCards />

        <div className="ai-featured-grid">
          <ForecastingChart />
          <div className="ai-featured-side">
            <SentimentAnalysis />
            <SmartRecommendations />
          </div>
        </div>

        <section className="charts-section">
          <EstanciaMediaChart />
          <OcupacionChart />
        </section>

        <section className="charts-section">
          <CostesChart />
          <CalidadChart />
        </section>
      </main>

      <footer className="footer">
        <span>Datos simulados • React + Recharts • SQL schema</span>
      </footer>
    </div>
  );
}

export default App;
