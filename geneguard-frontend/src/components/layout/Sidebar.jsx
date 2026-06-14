import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Dna,
  Target,
  HeartPulse,
  Brain,
  Database,
  Info,
  Activity,
} from 'lucide-react';
import { APP_NAME } from '../../data/constants';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/dna-analysis', label: 'DNA Analysis', icon: Dna },
  { to: '/predictions', label: 'Predictions', icon: Target },
  { to: '/disease-recommendations', label: 'Disease Recommendations', icon: HeartPulse },
  { to: '/model-insights', label: 'Model Insights', icon: Brain },
  { to: '/dataset-insights', label: 'Dataset Insights', icon: Database },
  { to: '/about', label: 'About', icon: Info },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-medical-500">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">{APP_NAME}</h2>
            <p className="text-[10px] text-slate-400">Healthcare Analytics</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-slate-100 p-4">
          <div className="rounded-xl bg-gradient-to-r from-primary-50 to-medical-50 p-4">
            <p className="text-xs font-semibold text-primary-700">ML Model Status</p>
            <p className="mt-1 text-[10px] text-slate-500">Active • HIGH/LOW Classification</p>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-[10px] font-medium text-emerald-600">Ready</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
