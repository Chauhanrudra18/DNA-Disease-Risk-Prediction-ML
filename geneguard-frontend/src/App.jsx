import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnalysisProvider } from './context/AnalysisContext';
import DashboardLayout from './components/layout/DashboardLayout';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import DNAAnalysisPage from './pages/DNAAnalysisPage';
import PredictionsPage from './pages/PredictionsPage';
import DiseaseRecommendationsPage from './pages/DiseaseRecommendationsPage';
import ModelInsightsPage from './pages/ModelInsightsPage';
import DatasetInsightsPage from './pages/DatasetInsightsPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <AnalysisProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dna-analysis" element={<DNAAnalysisPage />} />
            <Route path="/predictions" element={<PredictionsPage />} />
            <Route path="/disease-recommendations" element={<DiseaseRecommendationsPage />} />
            <Route path="/model-insights" element={<ModelInsightsPage />} />
            <Route path="/dataset-insights" element={<DatasetInsightsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AnalysisProvider>
  );
}
