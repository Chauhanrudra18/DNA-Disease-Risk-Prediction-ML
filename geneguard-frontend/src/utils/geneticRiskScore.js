export function calculateGeneticRiskScore(features) {
  const gcDeviation = Math.abs((features.GC_Content ?? 50) - 50) / 50;
  const kmer = features.kmer_3_freq ?? 0.2;
  const mutation = features.Mutation_Flag ?? 0;
  const seqLen = features.Sequence_Length ?? 98;

  const score =
    mutation * 35 +
    gcDeviation * 20 +
    kmer * 60 +
    ((seqLen - 80) / 52) * 12;

  return Math.min(Math.max(Math.round(score), 0), 100);
}

export function getExplainableContributions(features) {
  const mutation = (features.Mutation_Flag ?? 0) * 35;
  const gc = (Math.abs((features.GC_Content ?? 50) - 50) / 50) * 20;
  const kmer = (features.kmer_3_freq ?? 0.2) * 60;
  const seqLen = (((features.Sequence_Length ?? 98) - 80) / 52) * 12;

  const items = [
    { feature: 'Mutation Flag Detected', contribution: mutation, label: 'Mutation Flag' },
    { feature: 'GC Content Pattern', contribution: gc, label: 'GC Content' },
    { feature: 'k-mer Frequency', contribution: kmer, label: 'k-mer Frequency' },
    { feature: 'Sequence Length', contribution: seqLen, label: 'Sequence Length' },
  ];

  const total = items.reduce((sum, i) => sum + i.contribution, 0) || 1;

  return items
    .map((item) => ({
      ...item,
      percentage: Math.round((item.contribution / total) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);
}
