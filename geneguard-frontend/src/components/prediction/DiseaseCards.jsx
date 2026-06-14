import {
  Thermometer,
  Wind,
  Bug,
  Sparkles,
  Heart,
  Bone,
  UtensilsCrossed,
  Activity,
  Brain,
  Droplets,
  Flame,
} from 'lucide-react';
import Card from '../ui/Card';

const diseaseIcons = {
  'Common Cold': Thermometer,
  'Seasonal Allergy': Wind,
  Flu: Bug,
  'Skin Allergy': Sparkles,
  'Mild Hypertension': Heart,
  'Mild Joint Pain': Bone,
  'Food Poisoning': UtensilsCrossed,
  Cancer: Activity,
  Diabetes: Droplets,
  'Heart Disease': Heart,
  Stroke: Brain,
  "Alzheimer's": Brain,
  'Kidney Disease': Droplets,
  'Lung Disease': Flame,
};

export default function DiseaseCards({ diseases, risk }) {
  const isHigh = risk === 'HIGH';

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {diseases.map((disease) => {
        const Icon = diseaseIcons[disease.name] || Activity;
        return (
          <Card key={disease.name} hover className="!p-5">
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  isHigh ? 'bg-red-50 text-red-500' : 'bg-medical-50 text-medical-600'
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800">{disease.name}</h4>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${
                        isHigh ? 'bg-red-400' : 'bg-medical-400'
                      }`}
                      style={{ width: `${disease.relevanceScore}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-600">
                    {disease.relevanceScore}%
                  </span>
                </div>
                <p className="mt-1 text-[10px] text-slate-400">Relevance Score</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
