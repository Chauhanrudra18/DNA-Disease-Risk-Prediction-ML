import { Link } from 'react-router-dom';
import { useAnalysis } from '../context/AnalysisContext';
import { PageHeader, Card, Button } from '../components/ui';
import RiskGauge from '../components/prediction/RiskGauge';
import GeneticRiskScore from '../components/prediction/GeneticRiskScore';
import ExplainableAI from '../components/prediction/ExplainableAI';
import DiseaseCards from '../components/prediction/DiseaseCards';
import HealthRecommendations from '../components/prediction/HealthRecommendations';
import { Dna, ArrowRight } from 'lucide-react';

export default function PredictionsPage() {
  const { prediction } = useAnalysis();

  if (!prediction) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <Dna className="h-16 w-16 text-slate-300" />
        <h2 className="mt-4 text-xl font-bold text-slate-700">No Prediction Available</h2>
        <p className="mt-2 max-w-md text-slate-500">
          Run a DNA analysis first to generate disease risk predictions.
        </p>
        <Link to="/dna-analysis" className="mt-6">
          <Button variant="medical" icon={ArrowRight}>
            Analyze DNA
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader
        title="Prediction Results"
        description="AI-powered disease risk prediction based on DNA sequence feature analysis."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="flex items-center justify-center !py-10">
          <RiskGauge
            probability={prediction.probability}
            risk={prediction.risk}
            confidence={prediction.confidence}
          />
        </Card>
        <GeneticRiskScore score={prediction.geneticRiskScore} />
      </div>

      <ExplainableAI contributions={prediction.explainableAI} />

      <div>
        <h3 className="mb-4 text-lg font-bold text-slate-900">
          Possible Diseases Associated With This Prediction
        </h3>
        <DiseaseCards diseases={prediction.possibleDiseases} risk={prediction.risk} />
      </div>

      <div>
        <h3 className="mb-4 text-lg font-bold text-slate-900">Health Recommendations</h3>
        <HealthRecommendations />
      </div>
    </div>
  );
}
