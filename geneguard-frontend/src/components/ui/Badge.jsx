const variants = {
  high: 'bg-red-100 text-red-700 border border-red-200',
  low: 'bg-medical-100 text-medical-700 border border-medical-200',
  default: 'bg-slate-100 text-slate-700 border border-slate-200',
  primary: 'bg-primary-100 text-primary-700 border border-primary-200',
};

export default function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
