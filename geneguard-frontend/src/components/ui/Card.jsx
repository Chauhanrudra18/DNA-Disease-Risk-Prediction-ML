export default function Card({ children, className = '', hover = false, ...props }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 ${
        hover ? 'hover:shadow-card-hover hover:-translate-y-0.5' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
