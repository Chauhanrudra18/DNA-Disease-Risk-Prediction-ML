import { Link } from 'react-router-dom';
import { useAnalysis } from '../context/AnalysisContext';
import { PageHeader, Button } from '../components/ui';
import DiseaseCards from '../components/prediction/DiseaseCards';
import HealthRecommendations from '../components/prediction/HealthRecommendations';
import { HIGH_DISEASES, LOW_DISEASES } from '../data/constants';
import { HeartPulse, ArrowRight } from 'lucide-react';

export default function DiseaseRecommendationsPage() {
  const { prediction } = useAnalysis();

  const defaultHigh = HIGH_DISEASES.map((name, i) => ({
    name,
    relevanceScore: 95 - i * 3,
  }));
  const defaultLow = LOW_DISEASES.map((name, i) => ({
    name,
    relevanceScore: 93 - i * 3,
  }));

  const diseases = prediction?.possibleDiseases ?? defaultLow;
  const risk = prediction?.risk ?? 'LOW';

  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader
        title="Disease Recommendations"
        description="Possible diseases associated with genetic risk predictions. Only HIGH and LOW risk categories are supported."
        action={
          !prediction && (
            <Link to="/dna-analysis">
              <Button variant="medical" size="sm" icon={ArrowRight}>
                Run Analysis
              </Button>
            </Link>
          )
        }
      />

      {prediction ? (
        <div className="rounded-xl border border-medical-200 bg-medical-50 p-4">
          <p className="text-sm text-medical-700">
            Showing recommendations for your latest prediction:{' '}
            <strong>{prediction.risk} RISK</strong> ({prediction.probability}% probability)
          </p>
        </div>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="flex items-center gap-2 text-sm text-slate-600">
            <HeartPulse className="h-4 w-4" />
            Displaying default LOW risk disease recommendations. Run an analysis for personalized results.
          </p>
        </div>
      )}

      <div>
        <h3 className="mb-4 text-lg font-bold text-slate-900">
          {risk} Risk — Associated Diseases
        </h3>
        <DiseaseCards diseases={diseases} risk={risk} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-600">
            HIGH Risk Diseases
          </h4>
          <DiseaseCards
            diseases={defaultHigh}
            risk="HIGH"
          />
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-medical-600">
            LOW Risk Diseases
          </h4>
          <DiseaseCards
            diseases={defaultLow}
            risk="LOW"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-bold text-slate-900">Health Recommendations</h3>
        <HealthRecommendations />
      </div>
    </div>
  );
}
