import {
  Dna,
  Settings2,
  Calculator,
  Brain,
  Target,
  HeartPulse,
  Lightbulb,
  ChevronDown,
} from 'lucide-react';

const steps = [
  { label: 'DNA Sequence Features', icon: Dna },
  { label: 'Feature Engineering', icon: Settings2 },
  { label: 'Genetic Risk Score Calculation', icon: Calculator },
  { label: 'Machine Learning Analysis', icon: Brain },
  { label: 'HIGH / LOW Risk Prediction', icon: Target },
  { label: 'Disease Recommendation', icon: HeartPulse },
  { label: 'Explainable AI Insights', icon: Lightbulb },
];

export default function PipelineSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">ML Pipeline Workflow</h2>
          <p className="mt-3 text-slate-500">
            From raw DNA features to actionable disease risk predictions
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2">
          {steps.map((step, index) => (
            <div key={step.label} className="flex w-full max-w-lg flex-col items-center">
              <div className="flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:border-medical-300 hover:shadow-card-hover">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-medical-500 text-white">
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-slate-400">Step {index + 1}</p>
                  <p className="font-semibold text-slate-800">{step.label}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ChevronDown className="my-1 h-5 w-5 text-medical-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
