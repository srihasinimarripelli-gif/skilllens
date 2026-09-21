import type { PracticeSession, UserProfile, Language, SkillLearningStatus } from '../types';

const STORAGE_KEYS = {
  PROFILE: 'skilllens_user_profile',
  SESSIONS: 'skilllens_practice_sessions',
  LATEST_SESSION: 'skilllens_latest_session',
  LEARNING_PROGRESS: 'skilllens_learning_progress',
};

function getActiveUserId(): string | null {
  try {
    const raw = localStorage.getItem('skilllens_current_user');
    if (raw) {
      const u = JSON.parse(raw);
      return u?.id || null;
    }
  } catch {
    return null;
  }
  return null;
}

function getActiveUserName(): string {
  try {
    const raw = localStorage.getItem('skilllens_current_user');
    if (raw) {
      const u = JSON.parse(raw);
      return u?.name || 'Alex Vance';
    }
  } catch {
    return 'Alex Vance';
  }
  return 'Alex Vance';
}

function getUserKey(baseKey: string): string {
  const userId = getActiveUserId();
  return userId ? `${baseKey}_${userId}` : baseKey;
}

export interface LearningProgressData {
  viewedSkillIds: string[];
  completedSkillIds: string[];
  watchedVideoSkillIds: string[];
  lastLearnedSkillId: string | null;
}

const DEFAULT_LEARNING_PROGRESS: LearningProgressData = {
  viewedSkillIds: ['skill-roller-painting', 'skill-straight-stitching'],
  completedSkillIds: ['skill-roller-painting'],
  watchedVideoSkillIds: ['skill-roller-painting'],
  lastLearnedSkillId: 'skill-roller-painting',
};

const DEFAULT_PROFILE: UserProfile = {
  name: 'Alex Vance',
  learnerLevel: 'Apprentice Craftsman',
  streakDays: 4,
  totalPractices: 6,
  overallScore: 88,
  language: 'en',
  settings: {
    feedbackFrequency: 'continuous',
    sensitivity: 'normal',
    audioCoaching: true,
  },
};

const INITIAL_SESSIONS: PracticeSession[] = [
  {
    id: 'session-init-1',
    skillId: 'skill-roller-painting',
    skillName: 'Roller Painting',
    categoryId: 'cat-1',
    categoryName: 'Painting & Decoration',
    score: 89,
    metricScores: [
      { id: 'coverage', name: 'Coverage', score: 91, target: '92%', feedback: 'Solid uniform coverage across 9x9ft drywall panel.', status: 'optimal' },
      { id: 'stroke_consistency', name: 'Stroke Consistency', score: 88, target: '88%', feedback: 'Good M-pattern pass without roller line marks.', status: 'optimal' },
      { id: 'edge_accuracy', name: 'Edge Accuracy', score: 88, target: '95%', feedback: 'Stayed 1/4 inch within baseboard tape margin.', status: 'improving' },
    ],
    feedback: [
      { type: 'strength', text: 'Consistent pressure maintained along vertical strokes.' },
      { type: 'improvement', text: 'Backroll lighter on the final upward pass to level wet sheen.' },
      { type: 'safety', text: 'Keep two feet firmly planted to prevent back strain.' },
    ],
    timestamp: Date.now() - 1000 * 60 * 60 * 22, // 22 hours ago
    durationSeconds: 240,
  },
  {
    id: 'session-init-2',
    skillId: 'skill-straight-stitching',
    skillName: 'Straight Stitching',
    categoryId: 'cat-2',
    categoryName: 'Tailoring & Fashion',
    score: 86,
    metricScores: [
      { id: 'line_deviation', name: 'Line Deviation', score: 87, target: '<1.5mm', feedback: 'Stitch path stayed within 1.2mm of fabric guide mark.', status: 'optimal' },
      { id: 'alignment', name: 'Alignment Stability', score: 85, target: '94%', feedback: 'Parallel edge alignment maintained along curve.', status: 'improving' },
      { id: 'movement_consistency', name: 'Movement Consistency', score: 86, target: '90%', feedback: 'Smooth hand feeding without pulling fabric forward.', status: 'optimal' },
    ],
    feedback: [
      { type: 'strength', text: 'Good finger placement keeping 3-inch clearance from needle plate.' },
      { type: 'improvement', text: 'Keep left index finger slightly lighter on the trailing edge.' },
      { type: 'safety', text: 'Always stop motor before adjusting fabric pins.' },
    ],
    timestamp: Date.now() - 1000 * 60 * 60 * 46, // 2 days ago
    durationSeconds: 195,
  },
  {
    id: 'session-init-3',
    skillId: 'skill-nail-polish-application',
    skillName: 'Nail Polish Application',
    categoryId: 'cat-5',
    categoryName: 'Beauty, Skincare & Makeup',
    score: 92,
    metricScores: [
      { id: 'coverage', name: 'Coverage', score: 94, target: '95%', feedback: 'Even 3-stroke layer with no cuticle pooling.', status: 'optimal' },
      { id: 'boundary_accuracy', name: 'Boundary Accuracy', score: 91, target: '92%', feedback: 'Clean 1mm cuticle spacing maintained on all digits.', status: 'optimal' },
      { id: 'symmetry', name: 'Curvature Symmetry', score: 91, target: '90%', feedback: 'Symmetrical lateral arcs on thumbnail.', status: 'optimal' },
    ],
    feedback: [
      { type: 'strength', text: 'Excellent resting pinky anchor creating a vibration-free hand position.' },
      { type: 'improvement', text: 'Ensure the free edge cap pass has slightly less bead volume.' },
      { type: 'safety', text: 'Good ventilation maintained throughout drill.' },
    ],
    timestamp: Date.now() - 1000 * 60 * 60 * 70, // 3 days ago
    durationSeconds: 310,
  },
];

export const storageService = {
  getProfile(): UserProfile {
    try {
      const userKey = getUserKey(STORAGE_KEYS.PROFILE);
      const stored = localStorage.getItem(userKey);
      if (stored) {
        return JSON.parse(stored);
      }
      // Migrate from legacy global key if present
      if (userKey !== STORAGE_KEYS.PROFILE) {
        const legacy = localStorage.getItem(STORAGE_KEYS.PROFILE);
        if (legacy) {
          const parsed = JSON.parse(legacy);
          parsed.name = getActiveUserName() || parsed.name;
          this.saveProfile(parsed);
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to read profile from localStorage', e);
    }
    const defaultForUser: UserProfile = {
      ...DEFAULT_PROFILE,
      name: getActiveUserName() || DEFAULT_PROFILE.name,
    };
    this.saveProfile(defaultForUser);
    return defaultForUser;
  },

  saveProfile(profile: UserProfile): void {
    try {
      const userKey = getUserKey(STORAGE_KEYS.PROFILE);
      localStorage.setItem(userKey, JSON.stringify(profile));
      // Also update global key for legacy fallback
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.error('Failed to save profile to localStorage', e);
    }
  },

  updateLanguage(lang: Language): void {
    const profile = this.getProfile();
    profile.language = lang;
    this.saveProfile(profile);
  },

  getSessions(): PracticeSession[] {
    try {
      const userKey = getUserKey(STORAGE_KEYS.SESSIONS);
      const stored = localStorage.getItem(userKey);
      if (stored) {
        return JSON.parse(stored);
      }
      if (userKey !== STORAGE_KEYS.SESSIONS) {
        const legacy = localStorage.getItem(STORAGE_KEYS.SESSIONS);
        if (legacy) {
          const parsed = JSON.parse(legacy);
          this.saveSessions(parsed);
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to read sessions from localStorage', e);
    }
    // Seed initial sessions
    this.saveSessions(INITIAL_SESSIONS);
    return INITIAL_SESSIONS;
  },

  saveSessions(sessions: PracticeSession[]): void {
    try {
      const userKey = getUserKey(STORAGE_KEYS.SESSIONS);
      localStorage.setItem(userKey, JSON.stringify(sessions));
      localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
    } catch (e) {
      console.error('Failed to save sessions to localStorage', e);
    }
  },

  addSession(session: PracticeSession): void {
    // Ensure all required fields including category and duration are guaranteed
    const normalizedSession: PracticeSession = {
      ...session,
      category: session.category || session.categoryName || 'Craft',
      categoryName: session.categoryName || session.category || 'Craft',
      duration: session.duration !== undefined ? session.duration : session.durationSeconds,
      durationSeconds: session.durationSeconds !== undefined ? session.durationSeconds : (session.duration || 30),
      timestamp: session.timestamp || Date.now(),
    };

    const sessions = this.getSessions();
    const updatedSessions = [normalizedSession, ...sessions];
    this.saveSessions(updatedSessions);

    // Save as latest session for results page
    this.setLatestSession(normalizedSession);

    // Recalculate profile score and counts
    const profile = this.getProfile();
    profile.totalPractices = updatedSessions.length;
    const avgScore = Math.round(
      updatedSessions.reduce((acc, s) => acc + s.score, 0) / updatedSessions.length
    );
    profile.overallScore = avgScore;
    this.saveProfile(profile);
  },

  getLatestSession(): PracticeSession | null {
    try {
      const userKey = getUserKey(STORAGE_KEYS.LATEST_SESSION);
      const stored = localStorage.getItem(userKey);
      if (stored) {
        return JSON.parse(stored);
      }
      const sessions = this.getSessions();
      return sessions[0] || null;
    } catch (e) {
      console.error('Failed to read latest session', e);
      return null;
    }
  },

  setLatestSession(session: PracticeSession): void {
    try {
      const userKey = getUserKey(STORAGE_KEYS.LATEST_SESSION);
      localStorage.setItem(userKey, JSON.stringify(session));
      localStorage.setItem(STORAGE_KEYS.LATEST_SESSION, JSON.stringify(session));
    } catch (e) {
      console.error('Failed to save latest session', e);
    }
  },

  getBestScoreForSkill(skillId: string): number | null {
    const sessions = this.getSessions();
    const skillSessions = sessions.filter((s) => s.skillId === skillId);
    if (skillSessions.length === 0) return null;
    return Math.max(...skillSessions.map((s) => s.score));
  },

  getLearningProgress(): LearningProgressData {
    try {
      const userKey = getUserKey(STORAGE_KEYS.LEARNING_PROGRESS);
      const stored = localStorage.getItem(userKey);
      if (stored) {
        return JSON.parse(stored);
      }
      if (userKey !== STORAGE_KEYS.LEARNING_PROGRESS) {
        const legacy = localStorage.getItem(STORAGE_KEYS.LEARNING_PROGRESS);
        if (legacy) {
          const parsed = JSON.parse(legacy);
          this.saveLearningProgress(parsed);
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to read learning progress', e);
    }
    this.saveLearningProgress(DEFAULT_LEARNING_PROGRESS);
    return DEFAULT_LEARNING_PROGRESS;
  },

  saveLearningProgress(data: LearningProgressData): void {
    try {
      const userKey = getUserKey(STORAGE_KEYS.LEARNING_PROGRESS);
      localStorage.setItem(userKey, JSON.stringify(data));
      localStorage.setItem(STORAGE_KEYS.LEARNING_PROGRESS, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save learning progress', e);
    }
  },

  markSkillViewed(skillId: string): void {
    const progress = this.getLearningProgress();
    if (!progress.viewedSkillIds.includes(skillId)) {
      progress.viewedSkillIds.push(skillId);
    }
    progress.lastLearnedSkillId = skillId;
    this.saveLearningProgress(progress);
  },

  markSkillCompleted(skillId: string): void {
    const progress = this.getLearningProgress();
    if (!progress.viewedSkillIds.includes(skillId)) {
      progress.viewedSkillIds.push(skillId);
    }
    if (!progress.completedSkillIds.includes(skillId)) {
      progress.completedSkillIds.push(skillId);
    }
    progress.lastLearnedSkillId = skillId;
    this.saveLearningProgress(progress);
  },

  markVideoWatched(skillId: string): void {
    const progress = this.getLearningProgress();
    if (!progress.watchedVideoSkillIds) {
      progress.watchedVideoSkillIds = [];
    }
    if (!progress.watchedVideoSkillIds.includes(skillId)) {
      progress.watchedVideoSkillIds.push(skillId);
    }
    if (!progress.viewedSkillIds.includes(skillId)) {
      progress.viewedSkillIds.push(skillId);
    }
    this.saveLearningProgress(progress);
  },

  isVideoWatched(skillId: string): boolean {
    const progress = this.getLearningProgress();
    return Boolean(progress.watchedVideoSkillIds && progress.watchedVideoSkillIds.includes(skillId));
  },

  getSkillStatus(skillId: string): SkillLearningStatus {
    const bestScore = this.getBestScoreForSkill(skillId);
    if (bestScore !== null) {
      if (bestScore >= 90) return 'Mastered';
      if (bestScore >= 80) return 'Improving';
      return 'Practiced';
    }
    const progress = this.getLearningProgress();
    if (progress.completedSkillIds.includes(skillId)) {
      return 'Learned';
    }
    if (progress.viewedSkillIds.includes(skillId)) {
      return 'Learning';
    }
    return 'Not Started';
  },

  resetAllData(): void {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.SESSIONS);
    localStorage.removeItem(STORAGE_KEYS.LATEST_SESSION);
    localStorage.removeItem(STORAGE_KEYS.LEARNING_PROGRESS);
    this.saveProfile(DEFAULT_PROFILE);
    this.saveSessions(INITIAL_SESSIONS);
    this.saveLearningProgress(DEFAULT_LEARNING_PROGRESS);
  },
};
