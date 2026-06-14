export default function ProgressBar({
  value,
  max = 100,
  color = 'primary',
  showLabel = true,
  size = 'md',
}) {
  const percentage = Math.min((value / max) * 100, 100);
  const colors = {
    primary: 'bg-primary-500',
    medical: 'bg-medical-500',
    red: 'bg-red-500',
    gradient: 'bg-gradient-to-r from-medical-500 to-primary-600',
  };
  const heights = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' };

  return (
    <div>
      {showLabel && (
        <div className="mb-1.5 flex justify-between text-sm">
          <span className="font-medium text-slate-600">{value} / {max}</span>
          <span className="text-slate-400">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full overflow-hidden rounded-full bg-slate-100 ${heights[size]}`}>
        <div
          className={`${heights[size]} rounded-full transition-all duration-700 ease-out ${colors[color]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
