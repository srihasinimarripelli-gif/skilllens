export type Language = 'en' | 'hi' | 'te' | 'kn' | 'ta' | 'ml';

export interface Category {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skillCount: number;
  gradient: string;
}

export interface MetricDefinition {
  id: string;
  name: string;
  target: string;
  unit: string;
  description: string;
}

export interface TutorialStep {
  stepNumber: number;
  title: string;
  explanation: string;
  visualHint?: string;
  coachTip?: string;
}

export interface ToolItem {
  name: string;
  detail?: string;
}

export interface MaterialItem {
  name: string;
  detail?: string;
}

export interface CommonMistake {
  mistake: string;
  correction: string;
}

export interface DemonstrationContent {
  title: string;
  description: string;
  keyFocusPoints: string[];
  visualType?: 'roller' | 'stitch' | 'nail' | 'crochet' | 'pottery' | 'knife' | 'generic';
}

export interface SkillVideo {
  url?: string;
  embedUrl: string;
  videoUrl?: string;
  thumbnail?: string;
  title: string;
  duration: string;
  description: string;
  source: string;
  language?: string;
}

export interface SkillLearningContent {
  objective: string[];
  introduction: string;
  tools: ToolItem[];
  materials: MaterialItem[];
  preparation: string[];
  steps: TutorialStep[];
  demonstration: DemonstrationContent;
  commonMistakes: CommonMistake[];
  tips: string[];
  safety: string[];
  video?: SkillVideo | null;
}

export type SkillLearningStatus =
  | 'Not Started'
  | 'Learning'
  | 'Learned'
  | 'Practiced'
  | 'Improving'
  | 'Mastered';

export interface Skill {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  steps: string[];
  tools: string[];
  safetyNotes: string[];
  metrics: MetricDefinition[];
  cameraPlacementTips: string;
  flagship?: boolean;
  learning: SkillLearningContent;
}

export interface MetricScore {
  id: string;
  name: string;
  score: number; // 0-100
  target: string;
  feedback: string;
  status: 'optimal' | 'needs_work' | 'improving';
}

export interface FeedbackItem {
  type: 'strength' | 'improvement' | 'safety';
  text: string;
}

export interface PracticeSession {
  id: string;
  skillId: string;
  skillName: string;
  categoryId: string;
  categoryName: string;
  category?: string;
  score: number; // 0-100
  metricScores: MetricScore[];
  feedback: FeedbackItem[];
  positiveFeedback?: string[];
  improvementFeedback?: string[];
  safetyFeedback?: string[];
  timestamp: number;
  durationSeconds: number;
  duration?: number;
  signals?: import('./practice').VisualSignal[];
  hasSufficientEvidence?: boolean;
}

export * from './practice';

export interface UserProfile {
  name: string;
  learnerLevel: string;
  streakDays: number;
  totalPractices: number;
  overallScore: number;
  language: Language;
  settings: {
    feedbackFrequency: 'continuous' | 'periodic' | 'low';
    sensitivity: 'normal' | 'high' | 'relaxed';
    audioCoaching: boolean;
  };
}

// Vision Analyzer Architecture
export interface AnalysisFrameResult {
  timestamp: number;
  confidence: number;
  statusMessage: string;
  simulatedMetrics: Record<string, number>;
  liveGuidance: string;
  trackingPoints: { x: number; y: number; label: string }[];
  boundingBox?: { x: number; y: number; width: number; height: number };
}

export interface SkillAnalysisResult {
  overallScore: number;
  metricScores: MetricScore[];
  positiveFeedback: string[];
  improvementFeedback: string[];
  safetyFeedback: string[];
}

export interface VisionAnalyzer {
  startAnalysis(skill: Skill, onFrame: (result: AnalysisFrameResult) => void): void;
  stopAnalysis(): void;
  generateFinalSession(durationSeconds: number): {
    score: number;
    metricScores: MetricScore[];
    feedback: FeedbackItem[];
    positiveFeedback: string[];
    improvementFeedback: string[];
    safetyFeedback: string[];
  };
  analyzeSkill(
    skill: Skill,
    durationSeconds?: number,
    metricOverrides?: Record<string, number>
  ): SkillAnalysisResult;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  interests: string[];
  createdAt: string;
  language?: Language;
}
