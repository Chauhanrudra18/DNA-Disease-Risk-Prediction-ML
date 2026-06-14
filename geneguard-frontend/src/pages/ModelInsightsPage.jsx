import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { api } from '../api/mockApi';
import { PageHeader, StatCard, Card } from '../components/ui';
import FeatureImportanceChart from '../components/charts/FeatureImportanceChart';
import { Target, Crosshair, RefreshCw, BarChart2, TrendingUp } from 'lucide-react';

export default function ModelInsightsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getModelInsights().then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading || !data) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-medical-200 border-t-medical-600" />
      </div>
    );
  }

  const { metrics, featureImportance, confusionMatrix, rocCurve, classificationReport } = data;

  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader
        title="Model Insights"
        description="Machine learning analytics dashboard with performance metrics and evaluation visualizations."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard title="Accuracy" value={`${(metrics.accuracy * 100).toFixed(1)}%`} icon={Target} color="primary" />
        <StatCard title="Precision" value={`${(metrics.precision * 100).toFixed(1)}%`} icon={Crosshair} color="medical" />
        <StatCard title="Recall" value={`${(metrics.recall * 100).toFixed(1)}%`} icon={RefreshCw} color="green" />
        <StatCard title="F1 Score" value={`${(metrics.f1Score * 100).toFixed(1)}%`} icon={BarChart2} color="red" />
        <StatCard title="AUC Score" value={`${(metrics.aucScore * 100).toFixed(1)}%`} icon={TrendingUp} color="primary" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">Confusion Matrix</h3>
          <div className="mx-auto max-w-xs">
            <table className="w-full text-center text-sm">
              <thead>
                <tr className="text-xs text-slate-500">
                  <th className="p-2" />
                  <th className="p-2">Pred HIGH</th>
                  <th className="p-2">Pred LOW</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-xs font-semibold text-slate-500">Actual HIGH</td>
                  <td className="rounded-lg bg-emerald-100 p-4 text-lg font-bold text-emerald-700">
                    {confusionMatrix[0][0]}
                  </td>
                  <td className="rounded-lg bg-red-50 p-4 text-lg font-bold text-red-400">
                    {confusionMatrix[0][1]}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-xs font-semibold text-slate-500">Actual LOW</td>
                  <td className="rounded-lg bg-red-50 p-4 text-lg font-bold text-red-400">
                    {confusionMatrix[1][0]}
                  </td>
                  <td className="rounded-lg bg-emerald-100 p-4 text-lg font-bold text-emerald-700">
                    {confusionMatrix[1][1]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">ROC Curve</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={rocCurve}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="fpr" label={{ value: 'FPR', position: 'insideBottom', offset: -5 }} tick={{ fontSize: 11 }} />
              <YAxis label={{ value: 'TPR', angle: -90, position: 'insideLeft' }} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line type="monotone" dataKey="tpr" stroke="#0891b2" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">Feature Importance</h3>
          <FeatureImportanceChart data={featureImportance} />
        </Card>

        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">Classification Report</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs uppercase text-slate-500">
                <th className="py-2 pr-4">Class</th>
                <th className="py-2 pr-4">Precision</th>
                <th className="py-2 pr-4">Recall</th>
                <th className="py-2 pr-4">F1-Score</th>
                <th className="py-2">Support</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(classificationReport).map(([cls, vals]) => (
                <tr key={cls} className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-700">{cls} RISK</td>
                  <td className="py-3 pr-4 text-slate-600">{(vals.precision * 100).toFixed(1)}%</td>
                  <td className="py-3 pr-4 text-slate-600">{(vals.recall * 100).toFixed(1)}%</td>
                  <td className="py-3 pr-4 text-slate-600">{(vals.f1 * 100).toFixed(1)}%</td>
                  <td className="py-3 text-slate-600">{vals.support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
