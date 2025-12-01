// MVP Types
export interface MVPType {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  icon: string;
  example: string;
  animationType: 'curtain' | 'phone' | 'puzzle' | 'spotlight' | 'click' | 'coins' | 'door' | 'network';
}

// Statistics
export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

// Case Study
export interface CaseStudy {
  id: string;
  name: string;
  nameEn: string;
  country: 'iran' | 'global';
  logo: string;
  mvpDescription: string;
  currentStatus: string;
  timeline: TimelineEvent[];
  keyLessons: string[];
  image: string;
}

export interface TimelineEvent {
  year: number;
  event: string;
}

// Market Testing Stage
export interface MarketTestingStage {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// Testing Tool
export interface TestingTool {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  features: string[];
  url: string;
}

// Metric
export interface Metric {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  formula?: string;
  benchmark: string;
  data: MetricDataPoint[];
}

export interface MetricDataPoint {
  label: string;
  value: number;
}

// Quiz
export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  score: number;
}

export interface QuizResult {
  min: number;
  max: number;
  title: string;
  description: string;
  color: string;
}

// Checklist Item
export interface ChecklistItem {
  id: string;
  text: string;
  description: string;
  completed: boolean;
}

// Navigation Item
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Lean Startup Cycle Segment
export interface CycleSegment {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  steps: string[];
  color: string;
}
