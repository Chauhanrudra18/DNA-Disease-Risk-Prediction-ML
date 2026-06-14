import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

export default function DiseaseFrequencyChart({ data }) {
  const chartData = data.slice(0, 8).map((d) => ({
    disease: d.disease.length > 12 ? d.disease.slice(0, 12) + '…' : d.disease,
    count: d.count,
    risk: d.risk,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="disease" tick={{ fontSize: 10 }} angle={-30} textAnchor="end" height={70} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#1e40af" radius={[6, 6, 0, 0]} name="Frequency" />
      </BarChart>
    </ResponsiveContainer>
  );
}
