import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Camera,
  Play,
  Pause,
  CheckCircle,
  Clock,
  RefreshCw,
  MessageSquare,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Check,
  EyeOff,
  Activity,
  Sparkles,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { SKILLS, CATEGORIES } from '../data/mockData';
import { storageService } from '../services/storage';
import { PageTransition } from '../components/PageTransition';
import { getSkillPracticeRules } from '../services/practiceRules';
import { VisionEngine } from '../services/visionEngine';
import type {
  PracticeState,
  SkillPracticeRule,
  FrameObservation,
  VisualSignal,
  ObservationBufferSummary,
  PracticeSession,
} from '../types';

export const Practice: React.FC = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();

  const skill = SKILLS.find((s) => s.id === skillId) || SKILLS[0];
  const category = CATEGORIES.find((c) => c.id === skill.categoryId);

  // Skill-specific rules
  const rules: SkillPracticeRule = getSkillPracticeRules(skill);

  // Step-aware state
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const currentStep = rules.steps[currentStepIndex] || rules.steps[0];

  // Session state
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  // Real Camera permissions & stream state
  const [cameraState, setCameraState] = useState<
    'idle' | 'requesting' | 'granted' | 'denied' | 'simulated'
  >('idle');
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Vision Engine & State Machine
  const visionEngineRef = useRef<VisionEngine | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [practiceState, setPracticeState] = useState<PracticeState>('CAMERA_PERMISSION');
  const [coachMessage, setCoachMessage] = useState<string>(rules.initialCoachGuidance);
  const [liveSignals, setLiveSignals] = useState<VisualSignal[]>(() =>
    rules.observableSignals.map((s) => ({
      id: s.id,
      label: s.label,
      status: s.reliable ? 'observing' : 'unreliable',
      detail: s.reliable ? 'Waiting for camera...' : 'Not reliably detected by camera',
      reliable: s.reliable,
      evidenceCount: 0,
    }))
  );
  const [currentObservation, setCurrentObservation] = useState<FrameObservation | null>(null);
  const [bufferSummary, setBufferSummary] = useState<ObservationBufferSummary | null>(null);

  // Initialize VisionEngine
  useEffect(() => {
    visionEngineRef.current = new VisionEngine();
    return () => {
      visionEngineRef.current?.reset();
    };
  }, []);

  // Request real camera access
  const requestCamera = useCallback(async () => {
    setCameraState('requesting');
    setCameraError(null);
    setPracticeState('CAMERA_PERMISSION');

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
            width: { ideal: 640 },
            height: { ideal: 480 },
          },
          audio: false,
        });

        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play().catch(() => {});
          };
        }
        setCameraState('granted');
        setPracticeState('CAMERA_READY');
      } else {
        setCameraError('Camera API is not supported on this browser or device.');
        setCameraState('denied');
      }
    } catch (err: any) {
      const msg =
        err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError'
          ? 'Camera access was denied. You can enable camera in your browser settings or test with the simulated mode.'
          : 'Could not access device camera. Check that another application is not using it.';
      setCameraError(msg);
      setCameraState('denied');
    }
  }, []);

  // Request camera automatically on mount
  useEffect(() => {
    requestCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [requestCamera]);

  // Main real-time Vision processing loop (15-20fps via requestAnimationFrame)
  useEffect(() => {
    let lastCheck = 0;

    const loop = (timestamp: number) => {
      if (timestamp - lastCheck > 65) {
        // ~15 fps throttle for CPU efficiency
        lastCheck = timestamp;

        if (
          visionEngineRef.current &&
          ((cameraState === 'granted' && videoRef.current) || cameraState === 'simulated')
        ) {
          const isSimulated = cameraState === 'simulated';
          const videoEl = videoRef.current;

          if (isSimulated || (videoEl && videoEl.readyState >= 2)) {
            const result = visionEngineRef.current.processVideoFrame(
              videoEl!,
              rules,
              isSimulated
            );

            // Update UI state based on REAL visual evidence
            if (isActive && !isPaused) {
              setPracticeState(result.state);
              setCoachMessage(result.coachMessage);
            } else if (!isActive) {
              // Pre-practice check: check framing before starting
              if (!result.observation.brightnessOk) {
                setPracticeState('POOR_FRAME');
                setCoachMessage('Lighting is too dark or washed out. Please adjust room light.');
              } else if (!result.observation.subjectVisible) {
                setPracticeState('NO_SUBJECT');
                setCoachMessage(
                  rules.skillId === 'skill-hair-braiding'
                    ? 'Move the camera so the hair area is clearly visible.'
                    : `Move camera to frame your ${rules.requiredSubject.toLowerCase()}.`
                );
              } else if (!result.observation.handsVisible) {
                setPracticeState('POOR_FRAME');
                setCoachMessage('Keep both hands visible in the frame.');
              } else {
                setPracticeState('READY_TO_PRACTICE');
                setCoachMessage('You are ready. Click Start Practice to begin.');
              }
            }

            setCurrentObservation(result.observation);
            setLiveSignals(result.signals);
            setBufferSummary(result.bufferSummary);
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [cameraState, isActive, isPaused, rules]);

  // Session timer loop
  useEffect(() => {
    let interval: number | null = null;
    if (isActive && !isPaused) {
      interval = window.setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval !== null) clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    visionEngineRef.current?.reset();
  };

  const handlePauseResume = () => {
    setIsPaused((prev) => !prev);
  };

  const handleStepChange = (dir: 'next' | 'prev') => {
    if (dir === 'next' && currentStepIndex < rules.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else if (dir === 'prev' && currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleComplete = () => {
    setIsActive(false);

    const summary =
      bufferSummary ||
      (visionEngineRef.current
        ? visionEngineRef.current.getBufferSummary(rules)
        : null);

    const hasSufficientEvidence = !!summary?.hasSufficientData;
    const finalScore = hasSufficientEvidence ? summary?.calculatedScore || 80 : 0;

    // Generate verified feedback based on actual observed signals
    const feedbackItems = [
      {
        type: 'strength' as const,
        text: summary?.handsInFramePercent && summary.handsInFramePercent >= 70
          ? 'Hands remained steadily framed within the active tracking zone.'
          : 'Started positioning hands in the workspace area.',
      },
      {
        type: 'improvement' as const,
        text: summary?.alternatingMotionDetected
          ? 'Good alternating cadence maintained. Continue practicing to refine tension consistency.'
          : 'Focus on maintaining a predictable, rhythmic movement cadence across passes.',
      },
      {
        type: 'safety' as const,
        text: skill.safetyNotes[0] || 'Keep comfortable posture and good lighting during practice.',
      },
    ];

    const session: PracticeSession = {
      id: `session-${Date.now()}`,
      skillId: skill.id,
      skillName: skill.name,
      categoryId: skill.categoryId,
      categoryName: category?.name || 'Craft',
      category: category?.name || 'Craft',
      timestamp: Date.now(),
      durationSeconds: Math.max(elapsedSeconds, 5),
      duration: Math.max(elapsedSeconds, 5),
      score: finalScore,
      hasSufficientEvidence,
      signals: summary?.signals || liveSignals,
      metricScores: skill.metrics.map((m) => {
        const isReliable = !m.id.includes('micro') && !m.id.includes('microns');
        return {
          id: m.id,
          name: m.name,
          score: hasSufficientEvidence ? (isReliable ? finalScore : 0) : 0,
          target: m.target,
          status: hasSufficientEvidence
            ? finalScore >= 85
              ? ('optimal' as const)
              : ('improving' as const)
            : ('needs_work' as const),
          feedback: hasSufficientEvidence
            ? isReliable
              ? 'Observed consistent technique in camera frame'
              : 'Not reliably detected by camera'
            : 'Insufficient observation to verify metric',
        };
      }),
      feedback: feedbackItems,
    };

    // Save session to local storage
    storageService.addSession(session);

    // Navigate to Results page with evidence payload
    navigate('/results', { state: { session } });
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // State status pills
  const renderStateBadge = () => {
    if (cameraState === 'simulated') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Demo Simulation Mode</span>
        </span>
      );
    }

    switch (practiceState) {
      case 'POOR_FRAME':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Poor Framing</span>
          </span>
        );
      case 'NO_SUBJECT':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
            <EyeOff className="w-3.5 h-3.5" />
            <span>Subject Not Visible</span>
          </span>
        );
      case 'READY_TO_PRACTICE':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <Check className="w-3.5 h-3.5" />
            <span>Ready to Practice</span>
          </span>
        );
      case 'OBSERVING':
      case 'INSUFFICIENT_OBSERVATION':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            <span>Observing Technique...</span>
          </span>
        );
      case 'VALID_OBSERVATION':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Valid Observation</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <span>Camera Connected</span>
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-250">
      <Header
        showBack
        onBack={() => navigate(`/skills/${skill.id}`)}
        title={skill.name}
        subtitle={`${category?.name || 'Craft'} · Real Practice Studio`}
      />

      <PageTransition className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 flex flex-col gap-5">
        {/* Step-Aware Header & Navigation */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Step {currentStep.stepNumber} of {rules.steps.length}
              </span>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {currentStep.title}
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
              {currentStep.instruction}
            </h1>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleStepChange('prev')}
              disabled={currentStepIndex === 0}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 px-1">
              {currentStepIndex + 1}/{rules.steps.length}
            </span>
            <button
              onClick={() => handleStepChange('next')}
              disabled={currentStepIndex === rules.steps.length - 1}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Next step"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Camera Feed & Viewport */}
        <div className="relative w-full aspect-video sm:aspect-[16/10] max-h-[480px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center">
          {/* Live Video Element */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`absolute inset-0 w-full h-full object-cover transform -scale-x-100 ${
              cameraState === 'granted' ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />

          {/* Fallback Display if Camera Access Not Granted */}
          {cameraState !== 'granted' && (
            <div className="absolute inset-0 w-full h-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-white z-10">
              {cameraState === 'denied' ? (
                <div className="max-w-md p-6 rounded-2xl bg-slate-800/95 border border-slate-700 flex flex-col items-center gap-3.5 shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-slate-700/80 flex items-center justify-center text-slate-300">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5">
                      Camera Access Needed for Practice
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                      {cameraError ||
                        'Visual observation requires access to your camera to detect hand movements.'}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2.5 w-full mt-2">
                    <Button
                      onClick={requestCamera}
                      variant="primary"
                      size="sm"
                      className="flex-1"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Retry Camera Permission</span>
                    </Button>
                    <Button
                      onClick={() => {
                        setCameraState('simulated');
                        setPracticeState('READY_TO_PRACTICE');
                      }}
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-slate-700 text-white border-slate-600 hover:bg-slate-600"
                    >
                      <span>Use Demo Simulation</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-3">
                    <Camera className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Connecting to your camera...
                  </h4>
                  <p className="text-xs text-slate-400">
                    Please approve camera permissions when prompted by your browser.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Clean Practice HUD Overlay (No Neon, No Flashy AI sci-fi) */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
            {/* Status pill */}
            <div className="pointer-events-auto shadow-sm">
              {renderStateBadge()}
            </div>

            {/* Timer & Cadence */}
            <div className="flex items-center gap-2 pointer-events-auto">
              {currentObservation?.motionDetected && (
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-white/90 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  <span>Motion: {currentObservation.motionEnergy}%</span>
                </span>
              )}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/60 text-white border border-white/10 text-xs font-mono backdrop-blur-xs">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{formatTime(elapsedSeconds)}</span>
              </div>
            </div>
          </div>

          {/* Simple Guide Target Frame */}
          <div className="absolute inset-8 sm:inset-12 pointer-events-none rounded-xl border border-dashed border-white/25 flex items-end justify-center pb-3">
            {!isActive && (
              <span className="text-xs text-white/85 bg-black/65 px-3 py-1.5 rounded-lg backdrop-blur-xs font-medium border border-white/10 shadow-sm">
                Position hands and {rules.requiredSubject.toLowerCase()} in frame
              </span>
            )}
          </div>
        </div>

        {/* HUD Observation Checklist & Coach Advice */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          {/* Left Column: What I'm Checking Checklist (md:col-span-6) */}
          <div className="md:col-span-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-xs flex flex-col gap-3.5 transition-colors duration-250">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Visual Evidence Checklist
              </h2>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                Camera observation
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {liveSignals.map((sig) => {
                if (!sig.reliable) {
                  return (
                    <div
                      key={sig.id}
                      className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 text-slate-500 dark:text-slate-400"
                    >
                      <span className="font-medium">{sig.label}</span>
                      <span className="text-[11px] italic font-normal text-slate-400 dark:text-slate-500">
                        Not reliably detected
                      </span>
                    </div>
                  );
                }

                return (
                  <div
                    key={sig.id}
                    className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-center gap-2">
                      {sig.status === 'detected' ? (
                        <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      ) : sig.status === 'not_detected' ? (
                        <div className="w-4 h-4 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-bold">✕</span>
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-400 flex items-center justify-center shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        </div>
                      )}
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {sig.label}
                      </span>
                    </div>
                    <span
                      className={`text-[11px] font-medium ${
                        sig.status === 'detected'
                          ? 'text-emerald-700 dark:text-emerald-400 font-semibold'
                          : sig.status === 'not_detected'
                          ? 'text-rose-600 dark:text-rose-400'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {sig.detail}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Minimum observation notice */}
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>
                Minimum observation window: {rules.minimumObservationSeconds}s of continuous movement.
              </span>
            </div>
          </div>

          {/* Right Column: Instructor Coach Advice & Evidence Scoring (md:col-span-6) */}
          <div className="md:col-span-6 flex flex-col gap-4">
            {/* Instructor Advice Box */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-xs flex flex-col gap-3 transition-colors duration-250">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Coach Observation</span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Live Guidance</span>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 flex flex-col gap-1">
                <span className="text-[11px] font-semibold text-blue-900 dark:text-blue-200 uppercase tracking-wide">
                  Visual Cue
                </span>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-200 leading-relaxed">
                  {coachMessage}
                </p>
              </div>

              {/* Verified Tools & Materials for this Skill */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-700 text-xs">
                <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  Required for this skill:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {rules.requiredMaterials.concat(rules.requiredTools).map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-medium"
                    >
                      {item}
                    </span>
                  ))}
                  {rules.requiredTools.length === 0 && rules.requiredMaterials.length <= 1 && (
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                      Hands only (no tools required)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Evidence-Based Readiness & Score Card */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-xs flex items-center justify-between gap-4 transition-colors duration-250">
              <div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
                  Technique Score
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                    {bufferSummary?.calculatedScore !== null && bufferSummary?.hasSufficientData
                      ? `${bufferSummary.calculatedScore}%`
                      : '--'}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {bufferSummary?.hasSufficientData
                      ? 'Based on observed cadence'
                      : 'Accumulating observation...'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Valid motion observed: {bufferSummary?.validObservationSeconds || 0}s / {rules.minimumObservationSeconds}s min
                </p>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-750 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center p-1 shrink-0">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 leading-none">Cadence</span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-1">
                  {currentObservation?.alternatingMotion ? 'Rhythmic' : currentObservation?.motionDetected ? 'Active' : 'Idle'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Session Controls Bar */}
        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 transition-colors duration-250">
          <div className="text-xs text-slate-600 dark:text-slate-400 text-center sm:text-left">
            {isActive
              ? 'Perform the step actions with steady movement, then click "Complete Practice".'
              : 'Frame your hands in front of the camera and click "Start Practice".'}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {!isActive ? (
              <Button
                onClick={handleStart}
                variant="primary"
                size="md"
                className="w-full sm:w-auto px-6"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Start Practice</span>
              </Button>
            ) : (
              <>
                <Button
                  onClick={handlePauseResume}
                  variant="outline"
                  size="md"
                  className="flex-1 sm:flex-none"
                >
                  {isPaused ? (
                    <>
                      <Play className="w-4 h-4 fill-current text-blue-600 dark:text-blue-400" />
                      <span>Resume</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>Pause</span>
                    </>
                  )}
                </Button>

                <Button
                  onClick={handleComplete}
                  variant="primary"
                  size="md"
                  className="flex-1 sm:flex-none px-6"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Complete Practice</span>
                </Button>
              </>
            )}
          </div>
        </div>
      </PageTransition>
    </div>
  );
};
