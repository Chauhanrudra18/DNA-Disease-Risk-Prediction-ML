import { useState, useCallback } from 'react';
import { Upload, FileCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { REQUIRED_CSV_COLUMNS } from '../../data/constants';
import { parseCSV } from '../../utils/csvValidator';
import { useAnalysis } from '../../context/AnalysisContext';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function CSVUpload({ onRunPrediction }) {
  const { setCsvData } = useAnalysis();
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState('');

  const processFile = useCallback(
    (file) => {
      setError(null);
      setSuccess(false);
      setFileName(file.name);

      if (!file.name.endsWith('.csv')) {
        setError('Only CSV files are supported.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = parseCSV(e.target.result);
          setPreview(result);
          setCsvData(result.rows);
          setSuccess(true);
        } catch (err) {
          setError(err.message);
          setPreview(null);
          setCsvData(null);
        }
      };
      reader.readAsText(file);
    },
    [setCsvData]
  );

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) processFile(file);
  };

  return (
    <div className="space-y-6">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`relative rounded-2xl border-2 border-dashed p-10 text-center transition-all duration-300 ${
          dragOver
            ? 'border-medical-400 bg-medical-50'
            : 'border-slate-200 bg-slate-50 hover:border-medical-300'
        }`}
      >
        <Upload className="mx-auto h-10 w-10 text-slate-400" />
        <p className="mt-4 font-semibold text-slate-700">Drag & Drop DNA Data CSV</p>
        <p className="mt-1 text-sm text-slate-500">or click to browse files</p>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileInput}
          className="absolute inset-0 cursor-pointer opacity-0"
        />
        <p className="mt-4 text-xs text-slate-400">
          Required columns: {REQUIRED_CSV_COLUMNS.join(', ')}
        </p>
      </div>

      {error && (
        <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {error}
        </div>
      )}

      {success && (
        <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          <span>
            <strong>{fileName}</strong> uploaded successfully — {preview?.rows.length} rows validated.
          </span>
        </div>
      )}

      {preview && (
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-semibold text-slate-800">
              <FileCheck className="h-5 w-5 text-medical-500" />
              Dataset Preview
            </h3>
            <span className="text-xs text-slate-400">{preview.rows.length} records</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
                  {REQUIRED_CSV_COLUMNS.map((col) => (
                    <th key={col} className="px-3 py-2 font-semibold">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {preview.rows.slice(0, 5).map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    {REQUIRED_CSV_COLUMNS.map((col) => (
                      <td key={col} className="px-3 py-2 text-slate-600">{row[col]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {preview.rows.length > 5 && (
            <p className="mt-3 text-xs text-slate-400">
              Showing 5 of {preview.rows.length} rows
            </p>
          )}
          <div className="mt-6">
            <Button variant="medical" onClick={() => onRunPrediction?.(preview.rows)}>
              Run Prediction
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
