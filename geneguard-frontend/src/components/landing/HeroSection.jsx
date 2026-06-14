import { Link } from 'react-router-dom';
import { ArrowRight, Dna, BarChart3 } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="gradient-hero relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-medical-400 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-slide-up">
            <span className="inline-flex items-center rounded-full border border-medical-400/30 bg-medical-500/10 px-4 py-1.5 text-xs font-semibold text-medical-300">
              AI-Powered Healthcare Analytics
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              AI-Powered Genetic Disease Risk Prediction
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Analyze DNA sequence characteristics and predict disease risk using machine
              learning, feature engineering, and explainable AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/dna-analysis">
                <Button variant="medical" size="lg" icon={Dna}>
                  Analyze DNA
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="secondary" size="lg" icon={BarChart3}>
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <DNAIllustration />
              <div className="mt-6 grid grid-cols-2 gap-4">
                <MiniPreview title="Risk Analysis" value="HIGH / LOW" />
                <MiniPreview title="Features" value="9 DNA Metrics" />
                <MiniPreview title="Accuracy" value="94.2%" />
                <MiniPreview title="Samples" value="5,000+" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniPreview({ title, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-slate-400">{title}</p>
      <p className="mt-1 text-lg font-bold text-white">{value}</p>
    </div>
  );
}

function DNAIllustration() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="relative">
        <div className="flex gap-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div
                className="h-4 w-4 rounded-full bg-medical-400 shadow-lg shadow-medical-400/50"
                style={{ transform: `translateX(${Math.sin(i) * 12}px)` }}
              />
              <div className="h-16 w-0.5 bg-gradient-to-b from-medical-400 to-primary-500" />
              <div
                className="h-4 w-4 rounded-full bg-primary-400 shadow-lg shadow-primary-400/50"
                style={{ transform: `translateX(${Math.cos(i) * 12}px)` }}
              />
            </div>
          ))}
        </div>
        <div className="absolute -right-4 -top-4 rounded-lg bg-medical-500/20 px-3 py-1.5 text-xs font-medium text-medical-300">
          DNA Helix
        </div>
      </div>
    </div>
  );
}
