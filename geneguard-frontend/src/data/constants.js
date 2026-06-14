export const APP_NAME = 'GeneGuard AI';
export const APP_TAGLINE =
  'AI-Powered Genetic Disease Risk Prediction and Disease Recommendation System';

export const DNA_FEATURES = [
  {
    key: 'GC_Content',
    label: 'GC Content',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    tooltip:
      'Percentage of guanine (G) and cytosine (C) nucleotides in the DNA sequence. Influences sequence stability and gene expression.',
  },
  {
    key: 'AT_Content',
    label: 'AT Content',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    tooltip:
      'Percentage of adenine (A) and thymine (T) nucleotides. Complements GC content (typically sums to 100%).',
  },
  {
    key: 'Sequence_Length',
    label: 'Sequence Length',
    type: 'number',
    min: 64,
    max: 132,
    step: 1,
    tooltip:
      'Total number of base pairs in the analyzed DNA sequence segment.',
  },
  {
    key: 'Num_A',
    label: 'Num A',
    type: 'number',
    min: 15,
    max: 34,
    step: 1,
    tooltip: 'Count of adenine (A) nucleotides in the sequence.',
  },
  {
    key: 'Num_T',
    label: 'Num T',
    type: 'number',
    min: 15,
    max: 34,
    step: 1,
    tooltip: 'Count of thymine (T) nucleotides in the sequence.',
  },
  {
    key: 'Num_C',
    label: 'Num C',
    type: 'number',
    min: 15,
    max: 34,
    step: 1,
    tooltip: 'Count of cytosine (C) nucleotides in the sequence.',
  },
  {
    key: 'Num_G',
    label: 'Num G',
    type: 'number',
    min: 15,
    max: 34,
    step: 1,
    tooltip: 'Count of guanine (G) nucleotides in the sequence.',
  },
  {
    key: 'kmer_3_freq',
    label: 'k-mer 3 Frequency',
    type: 'number',
    min: 0.1,
    max: 0.3,
    step: 0.01,
    tooltip:
      'Frequency of 3-nucleotide (trinucleotide) patterns. Captures local sequence motifs relevant to genetic analysis.',
  },
  {
    key: 'Mutation_Flag',
    label: 'Mutation Flag',
    type: 'select',
    options: [
      { value: 0, label: '0 – No Mutation Detected' },
      { value: 1, label: '1 – Mutation Detected' },
    ],
    tooltip:
      'Binary indicator (0 or 1) signaling whether a genetic mutation has been detected in the sequence.',
  },
];

export const REQUIRED_CSV_COLUMNS = DNA_FEATURES.map((f) => f.key);

export const LOW_DISEASES = [
  'Common Cold',
  'Seasonal Allergy',
  'Flu',
  'Skin Allergy',
  'Mild Hypertension',
  'Mild Joint Pain',
  'Food Poisoning',
];

export const HIGH_DISEASES = [
  'Cancer',
  'Diabetes',
  'Heart Disease',
  'Stroke',
  "Alzheimer's",
  'Kidney Disease',
  'Lung Disease',
];

export const HEALTH_RECOMMENDATIONS = [
  {
    title: 'Regular Health Monitoring',
    description: 'Schedule periodic checkups to track vital signs and genetic risk markers over time.',
    icon: 'Activity',
  },
  {
    title: 'Maintain Balanced Diet',
    description: 'Follow a nutrient-rich diet supporting cellular health and immune function.',
    icon: 'Apple',
  },
  {
    title: 'Routine Medical Checkups',
    description: 'Consult healthcare professionals for preventive screenings aligned with your risk profile.',
    icon: 'Stethoscope',
  },
  {
    title: 'Healthy Lifestyle Practices',
    description: 'Incorporate regular exercise, adequate sleep, and stress management into daily routines.',
    icon: 'Heart',
  },
  {
    title: 'Preventive Care Awareness',
    description: 'Stay informed about early warning signs and evidence-based preventive interventions.',
    icon: 'Shield',
  },
];

export const PROCESSING_STEPS = [
  'Analyzing DNA Features...',
  'Extracting Sequence Patterns...',
  'Calculating Genetic Risk Score...',
  'Running Machine Learning Model...',
  'Generating Disease Recommendations...',
  'Preparing Explainable AI Report...',
];

export const DEFAULT_FORM_VALUES = {
  GC_Content: 50,
  AT_Content: 50,
  Sequence_Length: 98,
  Num_A: 24,
  Num_T: 24,
  Num_C: 25,
  Num_G: 25,
  kmer_3_freq: 0.2,
  Mutation_Flag: 0,
};

export const DASHBOARD_STATS = {
  totalSamples: 5000,
  highRiskCases: 2029,
  lowRiskCases: 2971,
  predictionAccuracy: 94.2,
  modelAccuracy: 94.2,
  featuresProcessed: 9,
  diseaseCategories: 14,
  predictionsGenerated: 5000,
};

export const FEATURE_IMPORTANCE = [
  { feature: 'GC_Content', importance: 16.1 },
  { feature: 'AT_Content', importance: 16.0 },
  { feature: 'kmer_3_freq', importance: 13.6 },
  { feature: 'Num_C', importance: 12.3 },
  { feature: 'Num_G', importance: 12.2 },
  { feature: 'Num_T', importance: 12.0 },
  { feature: 'Num_A', importance: 11.9 },
  { feature: 'Mutation_Flag', importance: 2.9 },
  { feature: 'Sequence_Length', importance: 3.0 },
];

export const MODEL_METRICS = {
  accuracy: 0.942,
  precision: 0.938,
  recall: 0.945,
  f1Score: 0.941,
  aucScore: 0.967,
};
