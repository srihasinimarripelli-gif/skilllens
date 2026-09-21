// Practice State Machine & Observation Types

export type PracticeState =
  | 'CAMERA_PERMISSION'
  | 'CAMERA_READY'
  | 'NO_SUBJECT'
  | 'POOR_FRAME'
  | 'READY_TO_PRACTICE'
  | 'OBSERVING'
  | 'INSUFFICIENT_OBSERVATION'
  | 'VALID_OBSERVATION'
  | 'COMPLETED';

export interface VisualSignal {
  id: string;
  label: string;
  status: 'detected' | 'not_detected' | 'observing' | 'unreliable';
  detail: string;
  reliable: boolean; // if false -> marked "Not reliably detected by camera"
  evidenceCount: number;
}

export interface PracticeStepDefinition {
  stepNumber: number;
  title: string;
  instruction: string;
  expectedMotion: 'stationary' | 'fine' | 'alternating' | 'sweeping' | 'circular';
  requiredTools?: string[];
  requiredMaterials?: string[];
}

export interface SkillPracticeRule {
  skillId: string;
  skillName: string;
  requiredSubject: string;
  requiredBodyParts: string[];
  requiredTools: string[];
  optionalTools: string[];
  requiredMaterials: string[];
  optionalMaterials: string[];
  steps: PracticeStepDefinition[];
  observableSignals: {
    id: string;
    label: string;
    description: string;
    reliable: boolean;
  }[];
  minimumObservationSeconds: number;
  initialCoachGuidance: string;
}

export interface FrameObservation {
  timestamp: number;
  brightnessOk: boolean;
  motionDetected: boolean;
  motionEnergy: number; // 0 - 100%
  subjectVisible: boolean;
  handsVisible: boolean;
  handsNearSubject: boolean;
  alternatingMotion: boolean;
  motionCadenceHz: number;
  activeZone: 'left' | 'right' | 'center' | 'both' | 'none';
}

export interface ObservationBufferSummary {
  totalFrames: number;
  validObservationFrames: number;
  validObservationSeconds: number;
  handsInFramePercent: number;
  subjectInFramePercent: number;
  motionDetectedPercent: number;
  alternatingMotionDetected: boolean;
  averageCadence: number;
  hasSufficientData: boolean;
  signals: VisualSignal[];
  calculatedScore: number | null; // null if insufficient data
}
