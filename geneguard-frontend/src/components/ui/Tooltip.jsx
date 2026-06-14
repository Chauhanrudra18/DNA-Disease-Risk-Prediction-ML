import { Info } from 'lucide-react';

export default function Tooltip({ text, children }) {
  return (
    <div className="group relative inline-flex items-center">
      {children || (
        <Info className="h-4 w-4 cursor-help text-slate-400 transition-colors hover:text-medical-500" />
      )}
      <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {text}
        <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
      </div>
    </div>
  );
}
