export default function RiskGauge({ probability, risk, confidence }) {
  const isHigh = risk === 'HIGH';
  const color = isHigh ? '#ef4444' : '#06b6d4';
  const circumference = 2 * Math.PI * 90;
  const offset = circumference - (probability / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width="220" height="220" className="-rotate-90">
          <circle cx="110" cy="110" r="90" fill="none" stroke="#e2e8f0" strokeWidth="14" />
          <circle
            cx="110"
            cy="110"
            r="90"
            fill="none"
            stroke={color}
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm font-medium text-slate-500">Risk Probability</span>
          <span className="text-4xl font-bold text-slate-900">{probability}%</span>
        </div>
      </div>

      <div
        className={`mt-6 rounded-2xl px-8 py-3 text-xl font-extrabold tracking-wide ${
          isHigh
            ? 'bg-red-100 text-red-700 border border-red-200'
            : 'bg-medical-100 text-medical-700 border border-medical-200'
        }`}
      >
        {risk} RISK
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Confidence: <span className="font-bold text-slate-800">{confidence}%</span>
      </p>
    </div>
  );
}
