import type { Skill, AnalysisFrameResult, MetricScore, FeedbackItem, SkillAnalysisResult } from '../types';

export type { SkillAnalysisResult };

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

export { analyzeSkill, MockVisionAnalyzer } from './mockVisionAnalyzer';
