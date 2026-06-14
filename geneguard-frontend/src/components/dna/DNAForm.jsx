import { DNA_FEATURES } from '../../data/constants';
import { useAnalysis } from '../../context/AnalysisContext';
import Tooltip from '../ui/Tooltip';
import Button from '../ui/Button';
import { RotateCcw, Microscope } from 'lucide-react';

export default function DNAForm({ onSubmit, loading }) {
  const { formData, updateFormData, resetForm } = useAnalysis();

  const handleChange = (key, value) => {
    updateFormData({ [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DNA_FEATURES.map((field) => (
          <div key={field.key} className="space-y-2">
            <div className="flex items-center gap-2">
              <label className="text-sm font-semibold text-slate-700">
                {field.label}
              </label>
              <Tooltip text={field.tooltip} />
            </div>
            {field.type === 'select' ? (
              <select
                value={formData[field.key]}
                onChange={(e) => handleChange(field.key, Number(e.target.value))}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-medical-400 focus:ring-2 focus:ring-medical-100"
              >
                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="number"
                min={field.min}
                max={field.max}
                step={field.step}
                value={formData[field.key]}
                onChange={(e) => handleChange(field.key, parseFloat(e.target.value))}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-medical-400 focus:ring-2 focus:ring-medical-100"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-6">
        <Button type="submit" variant="medical" icon={Microscope} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze DNA'}
        </Button>
        <Button type="button" variant="outline" icon={RotateCcw} onClick={resetForm}>
          Reset
        </Button>
      </div>
    </form>
  );
}
