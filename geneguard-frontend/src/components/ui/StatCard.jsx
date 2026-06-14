export default function StatCard({ title, value, subtitle, icon: Icon, trend, color = 'primary' }) {
  const colors = {
    primary: 'bg-primary-50 text-primary-600',
    medical: 'bg-medical-50 text-medical-600',
    red: 'bg-red-50 text-red-500',
    green: 'bg-emerald-50 text-emerald-600',
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
          {subtitle && <p className="mt-1 text-xs text-slate-400">{subtitle}</p>}
          {trend && (
            <p className="mt-2 text-xs font-medium text-emerald-600">{trend}</p>
          )}
        </div>
        {Icon && (
          <div className={`rounded-xl p-3 ${colors[color]}`}>
            <Icon className="h-6 w-6" />
          </div>
        )}
      </div>
    </div>
  );
}
