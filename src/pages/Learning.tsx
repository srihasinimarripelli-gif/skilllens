import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Play,
  Check,
  AlertTriangle,
  ShieldAlert,
  Wrench,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { LearningVideo } from '../components/LearningVideo';
import { SKILLS, CATEGORIES } from '../data/mockData';
import { storageService } from '../services/storage';
import { PageTransition } from '../components/PageTransition';

export const Learning: React.FC = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();

  const skill = SKILLS.find((s) => s.id === skillId) || SKILLS[0];
  const category = CATEGORIES.find((c) => c.id === skill.categoryId);

  // Active step in the step-by-step tutorial (0-indexed)
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Mark skill as learning in storage on mount
  useEffect(() => {
    storageService.markSkillViewed(skill.id);
  }, [skill.id]);

  const learning = skill.learning;
  const totalSteps = learning.steps.length;
  const currentStep = learning.steps[activeStepIndex] || learning.steps[0];

  const handleNextStep = () => {
    if (activeStepIndex < totalSteps - 1) {
      setActiveStepIndex((prev) => prev + 1);
    } else {
      storageService.markSkillCompleted(skill.id);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex((prev) => prev - 1);
    }
  };

  const progressPercent = Math.round(((activeStepIndex + 1) / totalSteps) * 100);

  return (
    <div className="min-h-screen pb-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-250">
      <Header
        showBack
        onBack={() => navigate(`/skills/${skill.id}`)}
        title={skill.name}
        subtitle={`${category?.name || 'Craft'} · Lesson`}
      />

      <PageTransition className="px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto w-full flex flex-col gap-6">
        {/* Top Course Meta & Progress */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 block mb-1">
                {category?.name || 'Skill Tutorial'}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                {skill.name}
              </h1>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-medium text-slate-700 dark:text-slate-300">
                {skill.difficulty}
              </span>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <div className="flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span>{skill.duration}</span>
              </div>
            </div>
          </div>

          {/* Simple Blue Progress Bar */}
          <div className="flex flex-col gap-1.5 mt-4">
            <div className="flex items-center justify-between text-xs font-medium text-slate-600 dark:text-slate-400">
              <span>Progress: Step {activeStepIndex + 1} of {totalSteps}</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* PROMINENT VIDEO PLAYER */}
        <LearningVideo
          video={learning.video}
          skillId={skill.id}
          skillName={skill.name}
        />

        {/* STEP DETAILS CARD */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-xs flex flex-col gap-6 transition-colors duration-250">
          {/* Step Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
              <span>Step {activeStepIndex + 1}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {currentStep.title}
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed font-normal">
              {currentStep.explanation}
            </p>
          </div>

          {/* Coach Tip if available */}
          {currentStep.coachTip && (
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 flex items-start gap-3 text-xs text-blue-900 dark:text-blue-200">
              <div className="w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                i
              </div>
              <div>
                <strong className="font-semibold block mb-0.5">Technique Note</strong>
                <p className="text-blue-800 dark:text-blue-300/90 leading-relaxed">{currentStep.coachTip}</p>
              </div>
            </div>
          )}

          {/* WHAT YOU NEED (Tools & Materials) */}
          {((skill.tools && skill.tools.length > 0) || (learning.materials && learning.materials.length > 0)) && (
            <div className="border-t border-slate-100 dark:border-slate-700 pt-5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>What you need</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200">
                {skill.tools.map((t, idx) => (
                  <div key={`tool-${idx}`} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-750/50 border border-slate-200/80 dark:border-slate-700">
                    <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 stroke-[2.5]" />
                    <span>{t}</span>
                  </div>
                ))}
                {learning.materials?.map((m, idx) => (
                  <div key={`mat-${idx}`} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-750/50 border border-slate-200/80 dark:border-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 stroke-[2.5]" />
                    <span>{m.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* COMMON MISTAKES (Small warning cards) */}
          {learning.commonMistakes && learning.commonMistakes.length > 0 && (
            <div className="border-t border-slate-100 dark:border-slate-700 pt-5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Common mistakes to avoid</span>
              </h3>
              <div className="flex flex-col gap-2">
                {learning.commonMistakes.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
                    <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-semibold">{item.mistake}</span>
                      <span className="text-amber-800 dark:text-amber-300/90">{item.correction}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SAFETY (Simple safety information box) */}
          {((learning.safety && learning.safety.length > 0) || (skill.safetyNotes && skill.safetyNotes.length > 0)) && (
            <div className="border-t border-slate-100 dark:border-slate-700 pt-5">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-750/50 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-slate-100">
                  <ShieldAlert className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider">Safety & Workspace</h4>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1 pl-1">
                  {(learning.safety || skill.safetyNotes).map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* BOTTOM STEP NAVIGATION */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
            <Button
              onClick={handlePrevStep}
              disabled={activeStepIndex === 0}
              variant="outline"
              size="md"
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Step</span>
            </Button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {activeStepIndex < totalSteps - 1 ? (
                <Button
                  onClick={handleNextStep}
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handleNextStep();
                    navigate(`/practice/${skill.id}`);
                  }}
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Start Practice</span>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Quick jump to interactive practice session */}
        <div className="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left transition-colors duration-250">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Ready to test your technique?</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Use your camera for real-time form checks and feedback.</p>
          </div>
          <Button
            onClick={() => navigate(`/practice/${skill.id}`)}
            variant="primary"
            size="md"
            className="shrink-0"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Open Practice Studio</span>
          </Button>
        </div>
      </PageTransition>
    </div>
  );
};
