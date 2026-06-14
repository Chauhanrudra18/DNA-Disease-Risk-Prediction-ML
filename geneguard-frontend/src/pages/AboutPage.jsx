import { PageHeader, Card } from '../components/ui';
import {
  Dna,
  Brain,
  Calculator,
  Lightbulb,
  Server,
  Target,
} from 'lucide-react';

const sections = [
  {
    icon: Target,
    title: 'Problem Statement',
    content:
      'Develop a supervised machine learning model that predicts HIGH or LOW disease risk using DNA sequence characteristics including nucleotide composition, k-mer frequencies, sequence length, and mutation indicators.',
  },
  {
    icon: Dna,
    title: 'Dataset Overview',
    content:
      'The synthetic DNA disease dataset contains 5,000 samples with 9 DNA sequence features. Disease risk is classified into exactly two categories: HIGH (2,029 samples) and LOW (2,971 samples). Each risk level maps to a fixed set of 7 possible diseases.',
  },
  {
    icon: Calculator,
    title: 'Feature Engineering',
    content:
      'Features include GC_Content, AT_Content, Sequence_Length, nucleotide counts (Num_A, Num_T, Num_C, Num_G), kmer_3_freq, and Mutation_Flag. A custom Genetic Risk Score is engineered from mutation indicators, nucleotide composition, and k-mer frequencies.',
  },
  {
    icon: Brain,
    title: 'Genetic Risk Score',
    content:
      'A numerical score (0–100) calculated from weighted contributions of mutation flag, GC content deviation, k-mer frequency, and sequence length. Displayed as a score only — not classified as Low/Medium/High.',
  },
  {
    icon: Server,
    title: 'Machine Learning Pipeline',
    content:
      'DNA features → Feature Engineering → Genetic Risk Score → ML Classification (Random Forest / Decision Tree) → HIGH/LOW Prediction → Disease Recommendation → Explainable AI Report.',
  },
  {
    icon: Lightbulb,
    title: 'Explainable AI',
    content:
      'Feature contribution analysis shows which DNA characteristics most influenced each prediction, with percentage-based impact bars for mutation flag, GC content, k-mer frequency, and sequence length.',
  },
];

const techStack = [
  'React.js', 'React Router DOM', 'Tailwind CSS', 'Recharts', 'Axios', 'Lucide React',
  'Python', 'Scikit-learn', 'Pandas', 'Flask/FastAPI (Backend)',
];

export default function AboutPage() {
  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader
        title="About GeneGuard AI"
        description="AI-Powered Genetic Disease Risk Prediction and Disease Recommendation System"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.title} hover>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <section.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{section.content}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <h3 className="text-lg font-bold text-slate-900">Technology Stack</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}
