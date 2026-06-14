import axios from 'axios';
import {
  DASHBOARD_STATS,
  FEATURE_IMPORTANCE,
  MODEL_METRICS,
  HIGH_DISEASES,
  LOW_DISEASES,
} from '../data/constants';
import {
  calculateGeneticRiskScore,
  getExplainableContributions,
} from '../utils/geneticRiskScore';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const USE_MOCK = import.meta.env.VITE_USE_MOCK !== 'false';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function predictFromFeatures(features) {
  const geneticRiskScore = calculateGeneticRiskScore(features);
  const mutation = features.Mutation_Flag ?? 0;
  const gc = features.GC_Content ?? 50;
  const kmer = features.kmer_3_freq ?? 0.2;

  const riskScore =
    mutation * 0.35 +
    (Math.abs(gc - 50) / 50) * 0.2 +
    kmer * 0.25 +
    (geneticRiskScore / 100) * 0.2;

  const isHigh = riskScore >= 0.45;
  const risk = isHigh ? 'HIGH' : 'LOW';
  const probability = isHigh
    ? Math.min(55 + geneticRiskScore * 0.4 + mutation * 8, 95)
    : Math.max(55 + (100 - geneticRiskScore) * 0.35, 60);
  const confidence = Math.min(88 + mutation * 4 + Math.abs(gc - 50) * 0.1, 98);

  const diseases = isHigh ? HIGH_DISEASES : LOW_DISEASES;
  const diseaseRecommendations = diseases.map((name, i) => ({
    name,
    relevanceScore: Math.max(72, 95 - i * 3 - (isHigh ? 0 : 2)),
  }));

  return {
    risk,
    riskLabel: `${risk} RISK`,
    probability: Math.round(probability),
    confidence: Math.round(confidence),
    geneticRiskScore,
    explainableAI: getExplainableContributions(features),
    possibleDiseases: diseaseRecommendations,
    features,
    timestamp: new Date().toISOString(),
  };
}

const mockApi = {
  async getDashboardStats() {
    await delay(400);
    return { data: DASHBOARD_STATS };
  },

  async getDashboardCharts() {
    await delay(500);
    return {
      data: {
        riskDistribution: [
          { name: 'HIGH Risk', value: DASHBOARD_STATS.highRiskCases, color: '#ef4444' },
          { name: 'LOW Risk', value: DASHBOARD_STATS.lowRiskCases, color: '#06b6d4' },
        ],
        featureImportance: FEATURE_IMPORTANCE,
        diseaseFrequency: [
          ...HIGH_DISEASES.map((d) => ({ disease: d, count: 2029, risk: 'HIGH' })),
          ...LOW_DISEASES.map((d) => ({ disease: d, count: 2971, risk: 'LOW' })),
        ],
        mutationAnalysis: [
          { category: 'Mutation Detected', high: 1040, low: 1387 },
          { category: 'No Mutation', high: 989, low: 1584 },
        ],
      },
    };
  },

  async predict(features) {
    await delay(1200);
    return { data: predictFromFeatures(features) };
  },

  async predictBatch(rows) {
    await delay(1500);
    return {
      data: rows.map((row) => predictFromFeatures(row)),
    };
  },

  async getModelInsights() {
    await delay(400);
    return {
      data: {
        metrics: MODEL_METRICS,
        featureImportance: FEATURE_IMPORTANCE,
        confusionMatrix: [
          [580, 45],
          [42, 833],
        ],
        rocCurve: Array.from({ length: 11 }, (_, i) => ({
          fpr: i / 10,
          tpr: Math.min(0.55 + (i / 10) * 0.48 + (i > 5 ? 0.05 : 0), 1),
        })),
        classificationReport: {
          HIGH: { precision: 0.93, recall: 0.95, f1: 0.94, support: 625 },
          LOW: { precision: 0.95, recall: 0.93, f1: 0.94, support: 875 },
        },
      },
    };
  },

  async getDatasetInsights(filters = {}) {
    await delay(500);
    const risk = filters.risk || 'all';
    const multiplier = risk === 'HIGH' ? 0.4 : risk === 'LOW' ? 0.6 : 1;

    return {
      data: {
        gcContent: Array.from({ length: 20 }, (_, i) => ({
          range: `${32 + i * 2}-${34 + i * 2}`,
          count: Math.round((180 + Math.random() * 80) * multiplier),
        })),
        atContent: Array.from({ length: 20 }, (_, i) => ({
          range: `${32 + i * 2}-${34 + i * 2}`,
          count: Math.round((175 + Math.random() * 85) * multiplier),
        })),
        mutationFrequency: [
          { status: 'No Mutation (0)', count: Math.round(2573 * multiplier) },
          { status: 'Mutation (1)', count: Math.round(2427 * multiplier) },
        ],
        diseaseDistribution: [
          { name: 'HIGH Risk Diseases', value: 2029 },
          { name: 'LOW Risk Diseases', value: 2971 },
        ],
        sequenceLength: Array.from({ length: 15 }, (_, i) => ({
          length: 64 + i * 5,
          count: Math.round(200 + Math.random() * 150),
        })),
      },
    };
  },
};

export const api = {
  getDashboardStats: () =>
    USE_MOCK ? mockApi.getDashboardStats() : apiClient.get('/dashboard/stats'),
  getDashboardCharts: () =>
    USE_MOCK ? mockApi.getDashboardCharts() : apiClient.get('/dashboard/charts'),
  predict: (features) =>
    USE_MOCK ? mockApi.predict(features) : apiClient.post('/predict', features),
  predictBatch: (rows) =>
    USE_MOCK ? mockApi.predictBatch(rows) : apiClient.post('/predict/batch', { rows }),
  getModelInsights: () =>
    USE_MOCK ? mockApi.getModelInsights() : apiClient.get('/model/insights'),
  getDatasetInsights: (filters) =>
    USE_MOCK
      ? mockApi.getDatasetInsights(filters)
      : apiClient.get('/dataset/insights', { params: filters }),
};
