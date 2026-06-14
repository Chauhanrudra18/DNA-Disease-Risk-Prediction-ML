import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { APP_NAME, APP_TAGLINE } from '../../data/constants';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-medical-500">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-slate-900">{APP_NAME}</p>
              <p className="text-xs text-slate-500">{APP_TAGLINE}</p>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/dashboard" className="hover:text-primary-600">Dashboard</Link>
            <Link to="/dna-analysis" className="hover:text-primary-600">DNA Analysis</Link>
            <Link to="/model-insights" className="hover:text-primary-600">Model Insights</Link>
            <Link to="/about" className="hover:text-primary-600">About</Link>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {APP_NAME}. Biotechnology & Healthcare Analytics Platform.
        </p>
      </div>
    </footer>
  );
}
