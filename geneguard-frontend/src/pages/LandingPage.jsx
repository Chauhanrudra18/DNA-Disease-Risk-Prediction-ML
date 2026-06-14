import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/landing/HeroSection';
import StatsSection from '../components/landing/StatsSection';
import PipelineSection from '../components/landing/PipelineSection';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PipelineSection />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Ready to Analyze Your DNA Data?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Start predicting disease risk with our AI-powered genetic analysis platform.
            Supports manual entry and CSV batch upload.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/dna-analysis">
              <Button variant="medical" size="lg" icon={ArrowRight}>
                Get Started
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg">
                Explore Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
