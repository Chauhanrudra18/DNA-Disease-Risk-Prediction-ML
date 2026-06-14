import { Target, Dna, Layers, TrendingUp } from 'lucide-react';
import { DASHBOARD_STATS } from '../../data/constants';

const stats = [
  {
    label: 'Model Accuracy',
    value: `${DASHBOARD_STATS.modelAccuracy}%`,
    icon: Target,
    color: 'primary',
  },
  {
    label: 'DNA Features Processed',
    value: DASHBOARD_STATS.featuresProcessed,
    icon: Dna,
    color: 'medical',
  },
  {
    label: 'Disease Categories',
    value: DASHBOARD_STATS.diseaseCategories,
    icon: Layers,
    color: 'green',
  },
  {
    label: 'Predictions Generated',
    value: DASHBOARD_STATS.predictionsGenerated.toLocaleString(),
    icon: TrendingUp,
    color: 'red',
  },
];

const colors = {
  primary: 'text-primary-600 bg-primary-50',
  medical: 'text-medical-600 bg-medical-50',
  green: 'text-emerald-600 bg-emerald-50',
  red: 'text-red-500 bg-red-50',
};

export default function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className={`inline-flex rounded-xl p-3 ${colors[stat.color]}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
