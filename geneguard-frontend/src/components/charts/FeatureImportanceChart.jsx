import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function FeatureImportanceChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis type="number" domain={[0, 20]} tick={{ fontSize: 12 }} />
        <YAxis
          type="category"
          dataKey="feature"
          width={110}
          tick={{ fontSize: 11 }}
        />
        <Tooltip />
        <Bar dataKey="importance" fill="#0891b2" radius={[0, 6, 6, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
