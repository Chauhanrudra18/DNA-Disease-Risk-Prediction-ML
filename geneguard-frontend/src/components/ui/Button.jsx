const variants = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 shadow-md shadow-primary-600/20',
  secondary:
    'bg-white text-primary-700 border border-primary-200 hover:bg-primary-50',
  outline:
    'bg-transparent text-slate-600 border border-slate-300 hover:bg-slate-50',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  medical:
    'bg-medical-600 text-white hover:bg-medical-700 shadow-md shadow-medical-600/20',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
}
