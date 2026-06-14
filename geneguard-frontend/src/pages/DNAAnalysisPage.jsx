import { useState } from 'react';
import { FileSpreadsheet, Microscope } from 'lucide-react';
import { api } from '../api/mockApi';
import { useAnalysis } from '../context/AnalysisContext';
import { PageHeader, Card } from '../components/ui';
import DNAForm from '../components/dna/DNAForm';
import CSVUpload from '../components/dna/CSVUpload';
import AIProcessingScreen from '../components/processing/AIProcessingScreen';

export default function DNAAnalysisPage() {
  const [tab, setTab] = useState('form');
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const { setPrediction } = useAnalysis();

  const runPrediction = async (features) => {
    setLoading(true);
    setProcessing(true);
    try {
      const { data } = await api.predict(features);
      setPrediction(data);
    } catch {
      setProcessing(false);
      setLoading(false);
    }
  };

  const runBatchPrediction = async (rows) => {
    setLoading(true);
    setProcessing(true);
    try {
      const { data } = await api.predictBatch(rows);
      setPrediction(data[0]);
    } catch {
      setProcessing(false);
      setLoading(false);
    }
  };

  const handleProcessingComplete = () => {
    setProcessing(false);
    setLoading(false);
  };

  if (processing) {
    return <AIProcessingScreen onComplete={handleProcessingComplete} />;
  }

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="DNA Analysis"
        description="Enter DNA sequence features manually or upload a CSV dataset for batch prediction."
      />

      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setTab('form')}
          className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
            tab === 'form'
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Microscope className="h-4 w-4" />
          Manual Entry
        </button>
        <button
          onClick={() => setTab('csv')}
          className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
            tab === 'csv'
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <FileSpreadsheet className="h-4 w-4" />
          CSV Upload
        </button>
      </div>

      <Card>
        {tab === 'form' ? (
          <DNAForm onSubmit={runPrediction} loading={loading} />
        ) : (
          <CSVUpload onRunPrediction={runBatchPrediction} />
        )}
      </Card>
    </div>
  );
}
