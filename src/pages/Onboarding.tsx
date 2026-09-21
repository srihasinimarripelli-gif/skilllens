import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Camera, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '../components/Button';
import { ThemeToggle } from '../components/ThemeToggle';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { CATEGORIES } from '../data/mockData';

export const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useApp();
  const { currentUser } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);

  const userFirstName = currentUser?.name ? currentUser.name.split(' ')[0] : '';
  const userInterests = currentUser?.interests || [];

  const steps = [
    {
      icon: Compass,
      title: userFirstName
        ? `Welcome to SkillLens, ${userFirstName}!`
        : t.onboarding.step1Title,
      description: userInterests.length > 0
        ? `We've personalized your learning paths for: ${userInterests
            .map((id) => CATEGORIES.find((c) => c.id === id)?.name.split(' ')[0])
            .filter(Boolean)
            .join(', ')}.`
        : t.onboarding.step1Desc,
      tag: '67 Hands-on Skills',
      preview: (
        <div className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-750/50 border border-slate-200 dark:border-slate-700 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-slate-100">
            <span className="text-blue-600 dark:text-blue-400 font-bold">Personalized for You</span>
            <span className="text-slate-500 dark:text-slate-400">10 Categories</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-left text-xs text-slate-700 dark:text-slate-200">
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
              <span>🎨</span>
              <span className="font-medium">Roller Painting</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
              <span>🧵</span>
              <span className="font-medium">Straight Stitching</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
              <span>💅</span>
              <span className="font-medium">Nail Polish</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
              <span>🧶</span>
              <span className="font-medium">Crochet Basics</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Camera,
      title: t.onboarding.step2Title,
      description: t.onboarding.step2Desc,
      tag: 'Workspace Setup',
      preview: (
        <div className="w-full p-5 rounded-xl bg-slate-50 dark:bg-slate-750/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
          <div className="w-full h-28 rounded-lg bg-white dark:bg-slate-800 border-2 border-dashed border-blue-200 dark:border-blue-800 flex flex-col items-center justify-center p-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-1">
              <Camera className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              Position your hands inside the frame
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Recommended distance: 30-45 cm
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: Sparkles,
      title: t.onboarding.step3Title,
      description: t.onboarding.step3Desc,
      tag: 'Practical Coaching',
      preview: (
        <div className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-750/50 border border-slate-200 dark:border-slate-700 flex flex-col gap-2.5 text-left">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-slate-100">
            <span>Coaching Observations</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold">
              Real-Time
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>"Consistent pace • Tool angle steady at 45°"</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
            <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
            <span>"Try applying slightly lighter, even pressure"</span>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/home');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = steps[currentStep];
  const Icon = step.icon;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col justify-center items-center px-4 sm:px-6 py-10 relative transition-colors duration-250">
      {/* Top right theme toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        {/* Brand Header */}
        <div className="flex items-center gap-2.5 mb-6 select-none">
          <div className="w-10 h-10 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shadow-xs">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            SkillLens
          </span>
        </div>

        {/* Card */}
        <div className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-5 transition-colors duration-250">
          {/* Step Progress Dots */}
          <div className="flex items-center justify-center gap-2">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentStep
                    ? 'w-8 bg-blue-600 dark:bg-blue-500'
                    : idx < currentStep
                    ? 'w-3 bg-blue-300 dark:bg-blue-700'
                    : 'w-3 bg-slate-200 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Step Content */}
          <div className="text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              <Icon className="w-6 h-6" />
            </div>

            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
              Step {currentStep + 1} of {steps.length} · {step.tag}
            </span>

            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
              {step.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mb-4">
              {step.description}
            </p>

            {/* Step Preview Illustration */}
            <div className="w-full">{step.preview}</div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-700">
            {currentStep > 0 ? (
              <Button onClick={handleBack} variant="outline" size="md">
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>
            ) : (
              <button
                onClick={() => navigate('/home')}
                className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer px-3 py-2"
              >
                Skip Intro
              </button>
            )}

            <Button onClick={handleNext} variant="primary" size="md" className="px-6">
              <span>{currentStep === steps.length - 1 ? 'Go to Home' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
