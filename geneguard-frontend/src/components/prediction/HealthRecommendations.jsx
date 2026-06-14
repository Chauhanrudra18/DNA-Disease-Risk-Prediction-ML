import {
  Activity,
  Apple,
  Stethoscope,
  Heart,
  Shield,
} from 'lucide-react';
import { HEALTH_RECOMMENDATIONS } from '../../data/constants';
import Card from '../ui/Card';

const iconMap = {
  Activity,
  Apple,
  Stethoscope,
  Heart,
  Shield,
};

export default function HealthRecommendations() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {HEALTH_RECOMMENDATIONS.map((rec) => {
        const Icon = iconMap[rec.icon] || Activity;
        return (
          <Card key={rec.title} hover className="!p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">{rec.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {rec.description}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
