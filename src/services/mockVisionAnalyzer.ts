import type { Skill, AnalysisFrameResult, MetricScore, FeedbackItem, SkillAnalysisResult } from '../types';
import type { VisionAnalyzer } from './visionAnalyzer';

// Helper to check if a skill is one of the 4 flagship skills or variants
function isFlagshipSkill(skill: Skill): 'roller' | 'stitch' | 'nail' | 'crochet' | null {
  const id = skill.id.toLowerCase();
  const name = skill.name.toLowerCase();

  if (id.includes('roller') || name.includes('roller')) return 'roller';
  if (id.includes('stitch') || name.includes('stitching') || name.includes('straight stitch')) return 'stitch';
  if (id.includes('nail') || name.includes('nail polish') || name.includes('polish')) return 'nail';
  if (id.includes('crochet') || name.includes('crochet')) return 'crochet';

  return null;
}

/**
 * analyzeSkill - Core simulated analysis function.
 * Evaluates any skill in the database based on its defined metrics.
 * Returns overallScore, metricScores, positiveFeedback, improvementFeedback, safetyFeedback.
 * NOTE: This is a simulated mock analyzer. No external vision AI or real computer vision model is invoked.
 */
export function analyzeSkill(
  skill: Skill,
  durationSeconds: number = 30,
  metricOverrides?: Record<string, number>
): SkillAnalysisResult {
  const flagshipType = isFlagshipSkill(skill);

  // Evaluate metric scores based on the metrics defined by the skill
  const metricScores: MetricScore[] = skill.metrics.map((m, index) => {
    let score: number;
    if (metricOverrides && metricOverrides[m.id] !== undefined) {
      score = Math.min(99, Math.max(65, Math.round(metricOverrides[m.id])));
    } else {
      // Dynamic baseline score between 80 and 94 with slight realistic variance per metric
      const seed = ((index * 13) + durationSeconds + (skill.name.length * 7)) % 15;
      score = Math.min(96, Math.max(76, 82 + seed));
    }

    let status: 'optimal' | 'improving' | 'needs_work' = 'optimal';
    let feedback = `Form maintained consistent alignment with the ${m.target} target.`;

    if (score >= 90) {
      status = 'optimal';
      feedback = `Excellent precision! Seamlessly matched the ${m.target} benchmark.`;
    } else if (score >= 82) {
      status = 'improving';
      feedback = `Solid control approaching ${m.target}. Technique cadence is stabilizing nicely.`;
    } else {
      status = 'needs_work';
      feedback = `Slight deviation from ${m.target}. Focus on stabilizing hand speed and angle.`;
    }

    // Flagship tailored metric feedback
    if (flagshipType === 'roller') {
      if (m.id === 'coverage' || m.name.toLowerCase().includes('coverage')) {
        feedback = score >= 88
          ? 'Uniform paint deposit without thin patches or roller bead lines.'
          : 'Slight light spots detected. Maintain even roller contact on the return pass.';
      } else if (m.id === 'stroke_consistency' || m.name.toLowerCase().includes('consistency')) {
        feedback = score >= 88
          ? 'Smooth M-pattern vertical passes with consistent wall pressure.'
          : 'Speed varied during downward pull. Keep stroke cadence steady.';
      } else if (m.id === 'edge_accuracy' || m.name.toLowerCase().includes('edge')) {
        feedback = score >= 88
          ? 'Controlled 1/4-inch tape clearance without roller head sliding.'
          : 'Close to tape boundary. Slow down near edge intersections.';
      }
    } else if (flagshipType === 'stitch') {
      if (m.id === 'line_deviation' || m.name.toLowerCase().includes('deviation')) {
        feedback = score >= 88
          ? 'Stitch path stayed within 1.1mm of reference throat plate guide.'
          : 'Minor fabric drift observed. Guide gently with fingertips without pulling.';
      } else if (m.id === 'alignment' || m.name.toLowerCase().includes('alignment')) {
        feedback = score >= 88
          ? 'Consistent parallel distance maintained along the seam allowance.'
          : 'Seam margin narrowed slightly mid-run. Keep eye on the presser foot notch.';
      } else if (m.id === 'movement_consistency' || m.name.toLowerCase().includes('movement')) {
        feedback = score >= 88
          ? 'Rhythmic fabric feed rate matched to needle cycle tempo.'
          : 'Pacing surged slightly. Let feed dogs pull fabric without resistance.';
      }
    } else if (flagshipType === 'nail') {
      if (m.id === 'coverage' || m.name.toLowerCase().includes('coverage')) {
        feedback = score >= 88
          ? 'Even lacquer distribution across the nail plate with no pooling.'
          : 'Slight thickness variation at lateral sidewalls. Lighten brush fan pressure.';
      } else if (m.id === 'boundary_accuracy' || m.name.toLowerCase().includes('boundary')) {
        feedback = score >= 88
          ? 'Preserved clean 1mm cuticle clearance gap across all passes.'
          : 'Bead approached eponychium. Push bead back gently before pulling down.';
      } else if (m.id === 'symmetry' || m.name.toLowerCase().includes('symmetry')) {
        feedback = score >= 88
          ? 'Equal lateral curved strokes on both left and right contours.'
          : 'Right stroke arc slightly wider than left. Anchor hand for symmetry.';
      }
    } else if (flagshipType === 'crochet') {
      if (m.id === 'stitch_consistency' || m.name.toLowerCase().includes('consistency')) {
        feedback = score >= 88
          ? 'Chained loops share uniform height and width across the entire sequence.'
          : 'Loop sizes varied slightly. Keep hook throat depth consistent.';
      } else if (m.id === 'spacing' || m.name.toLowerCase().includes('spacing') || m.name.toLowerCase().includes('tension')) {
        feedback = score >= 88
          ? 'Consistent yarn feed over working index finger with balanced tension.'
          : 'Tension tightened toward the end. Relax grip on working yarn.';
      } else if (m.id === 'hand_movement' || m.name.toLowerCase().includes('movement') || m.name.toLowerCase().includes('rhythm')) {
        feedback = score >= 88
          ? 'Fluid wrist rotation and clean hook release through previous loop.'
          : 'Wrist movement stiffened. Pivot from wrist rather than elbow.';
      }
    }

    return {
      id: m.id,
      name: m.name,
      score,
      target: m.target,
      feedback,
      status,
    };
  });

  // Calculate overall technique score
  const overallScore = metricScores.length > 0
    ? Math.round(metricScores.reduce((acc, curr) => acc + curr.score, 0) / metricScores.length)
    : 85;

  // Generate Positive Feedback ("What You Did Well")
  let positiveFeedback: string[] = [];
  if (flagshipType === 'roller') {
    positiveFeedback = [
      'Clean, parallel roller passes with no paint slinging or edge bead buildup.',
      'Maintained even hand pressure during both upward deposit and downward distribution strokes.',
      'Controlled roller edge distance neatly along boundaries without scraping the drywall.',
    ];
  } else if (flagshipType === 'stitch') {
    positiveFeedback = [
      'Accurate seam guidance keeping fabric edge parallel to the throat plate guideline.',
      'Steady hand steering without pushing or dragging against the machine feed dogs.',
      'Safe 3-inch finger buffer distance maintained consistently from the needle path.',
    ];
  } else if (flagshipType === 'nail') {
    positiveFeedback = [
      'Clean execution of the 3-stroke lacquer sequence (center bead first, followed by lateral arcs).',
      'Preserved the optimal 1mm cuticle clearance with zero lacquer pooling in proximal folds.',
      'Firm hand stabilization with a resting pinky tripod anchor on the work surface.',
    ];
  } else if (flagshipType === 'crochet') {
    positiveFeedback = [
      'Consistent loop tension with balanced yarn draw through the hook throat.',
      'Fluid wrist rotation and natural hook angle relative to the working yarn feed.',
      'Uniform chain diameter and steady stitch cadence without jerky micro-pulls.',
    ];
  } else {
    // Dynamic generation for all other crafts
    positiveFeedback = [
      `Strong form consistency in ${skill.name} with controlled hand orientation.`,
      `Technique cadence stayed closely aligned with the ${skill.metrics[0]?.name || 'target'} metric.`,
      `Smooth recovery and tool stability observed throughout the drill.`,
    ];
  }

  // Generate Improvement Feedback ("Improve Next Time")
  let improvementFeedback: string[] = [];
  if (flagshipType === 'roller') {
    improvementFeedback = [
      'Perform a lighter, feathered backroll pass in a single upward direction to level wet sheen lines.',
      'Reload the roller ramp before paint layer starts dragging dry on the wall section.',
    ];
  } else if (flagshipType === 'stitch') {
    improvementFeedback = [
      'Keep the non-dominant index finger slightly lighter on the trailing edge to prevent micro-drift.',
      'Ease machine speed slightly when approaching corners or fabric intersections.',
    ];
  } else if (flagshipType === 'nail') {
    improvementFeedback = [
      'Wipe more bead volume off the backside of the brush neck before capping the free edge.',
      'Allow an extra 30 seconds for self-leveling before moving to the adjacent finger.',
    ];
  } else if (flagshipType === 'crochet') {
    improvementFeedback = [
      'Relax working index finger slightly to prevent chain tension from tightening progressively.',
      'Keep hook rotation angle steady as the hook beak passes through the working loop.',
    ];
  } else {
    // Dynamic generation for other crafts
    const lowestMetric = [...metricScores].sort((a, b) => a.score - b.score)[0];
    const mistakeAdvice = skill.learning?.commonMistakes?.[0]?.correction;
    improvementFeedback = [
      mistakeAdvice || `Refine ${lowestMetric ? lowestMetric.name : 'technique cadence'} closer to the ${lowestMetric ? lowestMetric.target : 'optimal target'}.`,
      'Keep tool grip slightly more relaxed to prevent late-session hand fatigue.',
    ];
  }

  // Generate Safety Feedback ("Safety Feedback")
  let safetyFeedback: string[] = [];
  if (flagshipType === 'roller') {
    safetyFeedback = [
      skill.safetyNotes[0] || 'Maintain a firm two-foot stance and avoid overextending your reach to prevent lower back fatigue.',
      skill.safetyNotes[1] || 'Ensure adequate cross-ventilation in the room to disperse paint vapors.',
    ];
  } else if (flagshipType === 'stitch') {
    safetyFeedback = [
      skill.safetyNotes[0] || 'Keep fingers at least 1-2 inches clear of the needle plate; always stop motor before adjusting pins.',
      skill.safetyNotes[1] || 'Maintain an upright neutral spine to avoid neck strain while observing seam guides.',
    ];
  } else if (flagshipType === 'nail') {
    safetyFeedback = [
      skill.safetyNotes[0] || 'Work in a well-ventilated space to avoid inhaling solvent fumes.',
      'Keep acetone bottles sealed and rest wrists comfortably on a flat, padded surface.',
    ];
  } else if (flagshipType === 'crochet') {
    safetyFeedback = [
      skill.safetyNotes[0] || 'Keep wrists in a neutral, relaxed position to reduce repetitive carpal strain.',
      'Take 30-second micro-breaks every 10 minutes to roll shoulders and flex finger joints.',
    ];
  } else {
    safetyFeedback = skill.safetyNotes && skill.safetyNotes.length > 0
      ? [...skill.safetyNotes]
      : ['Maintain neutral wrist angles and comfortable posture during repetitive drills.'];
  }

  return {
    overallScore,
    metricScores,
    positiveFeedback,
    improvementFeedback,
    safetyFeedback,
  };
}

export class MockVisionAnalyzer implements VisionAnalyzer {
  private activeSkill: Skill | null = null;
  private intervalId: number | null = null;
  private frameCount: number = 0;
  private metricHistory: Record<string, number[]> = {};
  private onFrameCallback: ((result: AnalysisFrameResult) => void) | null = null;

  startAnalysis(skill: Skill, onFrame: (result: AnalysisFrameResult) => void): void {
    this.activeSkill = skill;
    this.onFrameCallback = onFrame;
    this.frameCount = 0;
    this.metricHistory = {};

    // Initialize metrics baseline between 78 and 91
    skill.metrics.forEach((m, idx) => {
      this.metricHistory[m.id] = [80 + ((idx * 4) % 12)];
    });

    // Run simulated inference loop every 850ms
    this.intervalId = window.setInterval(() => {
      this.processSimulatedFrame();
    }, 850);

    // Trigger initial frame immediately
    this.processSimulatedFrame();
  }

  private processSimulatedFrame(): void {
    if (!this.activeSkill || !this.onFrameCallback) return;

    this.frameCount++;
    const currentMetrics: Record<string, number> = {};

    // Drift metrics smoothly with realistic human tremor/learning curve
    this.activeSkill.metrics.forEach((m) => {
      const history = this.metricHistory[m.id] || [82];
      const lastVal = history[history.length - 1];
      // realistic small delta between -2.5 and +3.5
      const delta = (Math.random() * 6) - 2.4;
      const newVal = Math.min(99, Math.max(70, Math.round(lastVal + delta)));
      history.push(newVal);
      currentMetrics[m.id] = newVal;
    });

    // Select dynamic coaching message
    const liveGuidance = this.getRotatingCoachingMessage(this.activeSkill, this.frameCount, currentMetrics);

    // Dynamic tracking landmarks customized for flagship skills
    const trackingPoints = this.getTrackingPoints(this.activeSkill, this.frameCount);

    const timeRatio = (this.frameCount % 12) / 12;
    const boundingBox = {
      x: 22 + Math.sin(timeRatio * Math.PI * 2) * 3,
      y: 20 + Math.cos(timeRatio * Math.PI * 2) * 2,
      width: 56,
      height: 60,
    };

    const result: AnalysisFrameResult = {
      timestamp: Date.now(),
      confidence: 0.95 + (Math.random() * 0.04),
      statusMessage: 'Simulated AI Form Tracking Active',
      simulatedMetrics: currentMetrics,
      liveGuidance,
      trackingPoints,
      boundingBox,
    };

    this.onFrameCallback(result);
  }

  /**
   * Generates dynamic, rotating coaching messages matching user examples:
   * - "AI Coach is analyzing your technique..."
   * - "Tracking technique..."
   * - "Coverage: 88%"
   * - "Stroke Consistency: 82%"
   * - "Try maintaining a steadier movement."
   */
  private getRotatingCoachingMessage(
    skill: Skill,
    frame: number,
    metrics: Record<string, number>
  ): string {
    const flagshipType = isFlagshipSkill(skill);

    // Cycle through rotating patterns
    const step = frame % 6;

    if (step === 0) {
      return 'AI Coach is analyzing your technique...';
    }

    if (step === 1) {
      return 'Tracking technique...';
    }

    if (step === 2 && skill.metrics[0]) {
      const m = skill.metrics[0];
      const val = metrics[m.id] || 86;
      return `${m.name}: ${val}%`;
    }

    if (step === 3 && skill.metrics[1]) {
      const m = skill.metrics[1];
      const val = metrics[m.id] || 84;
      return `${m.name}: ${val}%`;
    }

    if (step === 4) {
      return 'Try maintaining a steadier movement.';
    }

    // Step 5: Flagship specific craftsman cue
    if (flagshipType === 'roller') {
      const cues = [
        'Coverage looking uniform. Keep roller passes parallel.',
        'Stroke speed optimal. Maintain even hand pressure on downward pull.',
        'Edge alignment steady. Avoid rolling past border tape.',
      ];
      return cues[(frame >> 1) % cues.length];
    }

    if (flagshipType === 'stitch') {
      const cues = [
        'Fabric feed rate steady. Keep hands 3 inches clear of needle.',
        'Seam alignment on track with throat plate guide line.',
        'Slight angle shift detected — gently guide with left thumb.',
      ];
      return cues[(frame >> 1) % cues.length];
    }

    if (flagshipType === 'nail') {
      const cues = [
        'Optimal 1mm cuticle clearance maintained.',
        '3-stroke lacquer sequence recognized: center, left, right.',
        'Steadiness at 94%. Free edge capping smooth.',
      ];
      return cues[(frame >> 1) % cues.length];
    }

    if (flagshipType === 'crochet') {
      const cues = [
        'Loop tension is balanced. Wrist rotation fluid.',
        'Consistent hook angle relative to working yarn feed.',
        'Slight tension variation — relax index finger slightly.',
      ];
      return cues[(frame >> 1) % cues.length];
    }

    return `Maintaining steady ${skill.name} posture and cadence.`;
  }

  private getTrackingPoints(
    skill: Skill,
    frame: number
  ): { x: number; y: number; label: string }[] {
    const flagshipType = isFlagshipSkill(skill);
    const timeRatio = (frame % 10) / 10;
    const wave1 = Math.sin(timeRatio * Math.PI * 2);
    const wave2 = Math.cos(timeRatio * Math.PI * 2);

    if (flagshipType === 'roller') {
      return [
        { x: 50 + wave1 * 6, y: 35 + wave2 * 8, label: 'Roller Core' },
        { x: 42 - wave1 * 4, y: 70 + wave1 * 4, label: 'Handle Grip' },
        { x: 62 + wave2 * 5, y: 32 + wave1 * 6, label: 'Overlap Margin' },
      ];
    }

    if (flagshipType === 'stitch') {
      return [
        { x: 50, y: 46 + wave1 * 1.5, label: 'Needle Guide' },
        { x: 34 + wave1 * 3, y: 55 + wave2 * 3, label: 'Left Steering Pad' },
        { x: 65 - wave2 * 3, y: 56 - wave1 * 3, label: 'Seam Margin' },
      ];
    }

    if (flagshipType === 'nail') {
      return [
        { x: 50 + wave1 * 2, y: 38 + wave2 * 4, label: 'Brush Bead' },
        { x: 50, y: 56, label: 'Cuticle Baseline' },
        { x: 32 + wave2 * 2, y: 72 + wave1 * 2, label: 'Pinky Tripod Anchor' },
      ];
    }

    if (flagshipType === 'crochet') {
      return [
        { x: 48 + wave1 * 5, y: 44 + wave2 * 5, label: 'Hook Throat' },
        { x: 36 - wave2 * 4, y: 58 + wave1 * 3, label: 'Tension Finger' },
        { x: 60 + wave2 * 4, y: 48 - wave1 * 4, label: 'Chain Loop' },
      ];
    }

    return [
      { x: 48 + wave1 * 6, y: 45 + wave2 * 5, label: 'Lead Hand' },
      { x: 36 - wave1 * 4, y: 60 + wave2 * 4, label: 'Anchor Wrist' },
      { x: 56 + wave2 * 5, y: 40 - wave1 * 3, label: 'Tool Contact' },
    ];
  }

  stopAnalysis(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  analyzeSkill(
    skill: Skill,
    durationSeconds?: number,
    metricOverrides?: Record<string, number>
  ): SkillAnalysisResult {
    return analyzeSkill(skill, durationSeconds, metricOverrides);
  }

  generateFinalSession(durationSeconds: number): {
    score: number;
    metricScores: MetricScore[];
    feedback: FeedbackItem[];
    positiveFeedback: string[];
    improvementFeedback: string[];
    safetyFeedback: string[];
  } {
    this.stopAnalysis();

    if (!this.activeSkill) {
      return {
        score: 85,
        metricScores: [],
        feedback: [{ type: 'strength', text: 'Good baseline session completed.' }],
        positiveFeedback: ['Completed practice session successfully.'],
        improvementFeedback: ['Practice regularly to build technique muscle memory.'],
        safetyFeedback: ['Ensure safe tool handling and good posture.'],
      };
    }

    // Compute average of history per metric to feed as overrides
    const metricOverrides: Record<string, number> = {};
    this.activeSkill.metrics.forEach((m) => {
      const history = this.metricHistory[m.id];
      if (history && history.length > 0) {
        const avg = history.reduce((a, b) => a + b, 0) / history.length;
        metricOverrides[m.id] = avg;
      }
    });

    const analysis = analyzeSkill(this.activeSkill, durationSeconds, metricOverrides);

    const feedback: FeedbackItem[] = [
      ...analysis.positiveFeedback.map((text) => ({ type: 'strength' as const, text })),
      ...analysis.improvementFeedback.map((text) => ({ type: 'improvement' as const, text })),
      ...analysis.safetyFeedback.map((text) => ({ type: 'safety' as const, text })),
    ];

    return {
      score: analysis.overallScore,
      metricScores: analysis.metricScores,
      feedback,
      positiveFeedback: analysis.positiveFeedback,
      improvementFeedback: analysis.improvementFeedback,
      safetyFeedback: analysis.safetyFeedback,
    };
  }
}
