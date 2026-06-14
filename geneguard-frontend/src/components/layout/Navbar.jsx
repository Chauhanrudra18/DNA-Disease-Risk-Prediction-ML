import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { APP_NAME } from '../../data/constants';
import Button from '../ui/Button';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-medical-400 to-primary-500">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white">{APP_NAME}</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="hidden text-sm text-slate-300 hover:text-white sm:block">
            Dashboard
          </Link>
          <Link to="/about" className="hidden text-sm text-slate-300 hover:text-white sm:block">
            About
          </Link>
          <Link to="/dna-analysis">
            <Button variant="medical" size="sm">
              Analyze DNA
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
