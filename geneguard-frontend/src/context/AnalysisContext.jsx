import { createContext, useContext, useState, useCallback } from 'react';
import { DEFAULT_FORM_VALUES } from '../data/constants';

const AnalysisContext = createContext(null);

export function AnalysisProvider({ children }) {
  const [formData, setFormData] = useState(DEFAULT_FORM_VALUES);
  const [prediction, setPrediction] = useState(null);
  const [csvData, setCsvData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const updateFormData = useCallback((updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(DEFAULT_FORM_VALUES);
    setPrediction(null);
    setCsvData(null);
  }, []);

  const value = {
    formData,
    setFormData,
    updateFormData,
    prediction,
    setPrediction,
    csvData,
    setCsvData,
    isProcessing,
    setIsProcessing,
    resetForm,
  };

  return (
    <AnalysisContext.Provider value={value}>{children}</AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (!context) {
    throw new Error('useAnalysis must be used within AnalysisProvider');
  }
  return context;
}
