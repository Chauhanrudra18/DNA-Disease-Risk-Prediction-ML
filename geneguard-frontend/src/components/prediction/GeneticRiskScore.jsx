import ProgressBar from '../ui/ProgressBar';
import Card from '../ui/Card';

export default function GeneticRiskScore({ score }) {
  return (
    <Card>
      <h3 className="text-lg font-bold text-slate-900">Genetic Risk Score</h3>
      <p className="mt-2 text-sm text-slate-500">
        A custom engineered score calculated from mutation indicators, nucleotide composition,
        sequence characteristics, and k-mer frequencies.
      </p>

      <div className="mt-6 flex items-center gap-6">
        <div className="text-center">
          <span className="text-5xl font-extrabold text-primary-700">{score}</span>
          <span className="text-2xl font-medium text-slate-400"> / 100</span>
        </div>
        <div className="flex-1">
          <ProgressBar value={score} color="gradient" size="lg" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-5 gap-2">
        {Array.from({ length: 5 }, (_, i) => {
          const threshold = (i + 1) * 20;
          const active = score >= threshold - 20;
          return (
            <div
              key={i}
              className={`h-2 rounded-full transition-colors ${
                active ? 'bg-gradient-to-r from-medical-400 to-primary-500' : 'bg-slate-100'
              }`}
            />
          );
        })}
      </div>
    </Card>
  );
}
