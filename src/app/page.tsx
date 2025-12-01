import { HeroSection } from "@/components/sections/HeroSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { WhatIsMVPSection } from "@/components/sections/WhatIsMVPSection";
import { LeanCycleSection } from "@/components/sections/LeanCycleSection";
import { MVPTypesSection } from "@/components/sections/MVPTypesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { QuizSection } from "@/components/sections/QuizSection";
import { SnappCaseStudySection } from "@/components/sections/SnappCaseStudySection";
import { ChecklistSection } from "@/components/sections/ChecklistSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <WhatIsMVPSection />
      <LeanCycleSection />
      <MVPTypesSection />
      <CaseStudiesSection />
      <TimelineSection />
      <ToolsSection />
      <MetricsSection />
      <QuizSection />
      <SnappCaseStudySection />
      <ChecklistSection />
    </>
  );
}
