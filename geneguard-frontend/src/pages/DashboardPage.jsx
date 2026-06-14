import { useEffect, useState } from 'react';
import { Dna, AlertTriangle, CheckCircle, Target, BarChart3 } from 'lucide-react';
import { api } from '../api/mockApi';
import { PageHeader, StatCard, Card } from '../components/ui';
import RiskPieChart from '../components/charts/RiskPieChart';
import FeatureImportanceChart from '../components/charts/FeatureImportanceChart';
import DiseaseFrequencyChart from '../components/charts/DiseaseFrequencyChart';
import MutationChart from '../components/charts/MutationChart';

export default function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [charts, setCharts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.getDashboardStats(), api.getDashboardCharts()])
      .then(([statsRes, chartsRes]) => {
        setStats(statsRes.data);
        setCharts(chartsRes.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-medical-200 border-t-medical-600" />
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Analytics Dashboard"
        description="Overview of DNA samples, risk predictions, and model performance metrics."
      />

      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total DNA Samples"
          value={stats.totalSamples.toLocaleString()}
          icon={Dna}
          color="primary"
        />
        <StatCard
          title="High Risk Cases"
          value={stats.highRiskCases.toLocaleString()}
          icon={AlertTriangle}
          color="red"
        />
        <StatCard
          title="Low Risk Cases"
          value={stats.lowRiskCases.toLocaleString()}
          icon={CheckCircle}
          color="medical"
        />
        <StatCard
          title="Prediction Accuracy"
          value={`${stats.predictionAccuracy}%`}
          icon={Target}
          color="green"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-800">
            <BarChart3 className="h-5 w-5 text-medical-500" />
            Risk Distribution
          </h3>
          <RiskPieChart data={charts.riskDistribution} />
        </Card>

        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">Feature Importance</h3>
          <FeatureImportanceChart data={charts.featureImportance} />
        </Card>

        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">Disease Frequency</h3>
          <DiseaseFrequencyChart data={charts.diseaseFrequency} />
        </Card>

        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">Mutation Analysis</h3>
          <MutationChart data={charts.mutationAnalysis} />
        </Card>
      </div>
    </div>
  );
}
