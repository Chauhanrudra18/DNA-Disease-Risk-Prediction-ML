import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';

export default function ExplainableAI({ contributions }) {
  return (
    <Card>
      <h3 className="text-lg font-bold text-slate-900">Why This Prediction Was Made</h3>
      <p className="mt-1 text-sm text-slate-500">
        Feature contributions to the disease risk prediction
      </p>

      <div className="mt-6 space-y-5">
        {contributions.map((item) => (
          <div key={item.feature}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">{item.feature}</span>
              <span className="text-sm font-bold text-primary-600">
                +{item.percentage}%
              </span>
            </div>
            <ProgressBar
              value={item.percentage}
              max={100}
              color="primary"
              showLabel={false}
              size="sm"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
