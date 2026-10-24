import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatsCounter } from "@/components/stats-counter";
import { FeaturesSection } from "@/components/features-section";
import { CurriculumExplorer } from "@/components/curriculum-explorer";
import { QuestionShowcase } from "@/components/question-showcase";
import { WorkflowSteps } from "@/components/workflow-steps";
import { InteractiveDemo } from "@/components/interactive-demo";
import { PackagesSection } from "@/components/packages-section";
import { ComparisonTable } from "@/components/comparison-table";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

import {
  fetchPlans,
  fetchCurriculumStats,
  fetchClasses,
  fetchSubjects,
  fetchSampleQuestions
} from "@/lib/api";

// Revalidate data dynamically every 60 seconds
export const revalidate = 60;

export default async function LandingPage() {
  // Fetch real dynamic data concurrently from backend
  const [plans, stats, classes, subjects, sampleQuestions] = await Promise.all([
    fetchPlans(),
    fetchCurriculumStats(),
    fetchClasses(),
    fetchSubjects(),
    fetchSampleQuestions({ limit: 12 })
  ]);

  console.log(plans);
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsCounter stats={stats} />
        <InteractiveDemo />
        <FeaturesSection />
        <CurriculumExplorer classes={classes} subjects={subjects} />
        {/* <QuestionShowcase questions={sampleQuestions} /> */}
        <WorkflowSteps />
        <PackagesSection plans={plans} />
        <ComparisonTable />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
