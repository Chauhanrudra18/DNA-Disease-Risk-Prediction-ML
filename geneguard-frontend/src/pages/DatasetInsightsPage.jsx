import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { api } from '../api/mockApi';
import { PageHeader, Card } from '../components/ui';

const COLORS = ['#ef4444', '#06b6d4'];

export default function DatasetInsightsPage() {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getDatasetInsights({ risk: filter }).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [filter]);

  if (loading || !data) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-medical-200 border-t-medical-600" />
      </div>
    );
  }

  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader
        title="Dataset Insights"
        description="Interactive visualizations of DNA feature distributions from the synthetic disease dataset."
        action={
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-medical-400"
          >
            <option value="all">All Risk Levels</option>
            <option value="HIGH">HIGH Risk Only</option>
            <option value="LOW">LOW Risk Only</option>
          </select>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">GC Content Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data.gcContent}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="range" tick={{ fontSize: 9 }} angle={-45} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#1e40af" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">AT Content Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data.atContent}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="range" tick={{ fontSize: 9 }} angle={-45} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#0891b2" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">Mutation Frequency</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data.mutationFrequency}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="status" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">Disease Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data.diseaseDistribution}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {data.diseaseDistribution.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="lg:col-span-2">
          <h3 className="mb-4 font-semibold text-slate-800">Sequence Length Distribution</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data.sequenceLength}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="length" tick={{ fontSize: 11 }} label={{ value: 'Length (bp)', position: 'insideBottom', offset: -5 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
