import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { PROCESSING_STEPS } from '../../data/constants';

export default function AIProcessingScreen({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= PROCESSING_STEPS.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete?.();
            navigate('/predictions');
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 900);

    return () => clearInterval(interval);
  }, [onComplete, navigate]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-lg text-center">
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-medical-200 opacity-30" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-medical-500">
            <Loader2 className="h-10 w-10 animate-spin text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900">AI Analysis in Progress</h2>
        <p className="mt-2 text-slate-500">Processing your DNA sequence data...</p>

        <div className="mt-10 space-y-3">
          {PROCESSING_STEPS.map((step, index) => {
            const isActive = index === currentStep;
            const isDone = index < currentStep;

            return (
              <div
                key={step}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-500 ${
                  isActive
                    ? 'border-medical-300 bg-medical-50 shadow-sm'
                    : isDone
                    ? 'border-emerald-200 bg-emerald-50'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                ) : isActive ? (
                  <Loader2 className="h-5 w-5 animate-spin text-medical-500" />
                ) : (
                  <div className="h-5 w-5 rounded-full border-2 border-slate-200" />
                )}
                <span
                  className={`text-sm font-medium ${
                    isActive ? 'text-medical-700' : isDone ? 'text-emerald-700' : 'text-slate-400'
                  }`}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
