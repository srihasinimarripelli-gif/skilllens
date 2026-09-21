import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Camera, ShieldCheck, Zap, ArrowRight, Layers } from 'lucide-react';
import { Button } from '../components/Button';
import { ThemeToggle } from '../components/ThemeToggle';
import { SKILLS } from '../data/mockData';

export const Landing: React.FC = () => {
  const navigate = useNavigate();

  const previewSkills = SKILLS.filter((s) => s.flagship).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-250">
      {/* Top Brand Bar */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5 cursor-pointer select-none" onClick={() => navigate('/')}>
          <div className="w-10 h-10 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shadow-xs">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              SkillLens
            </span>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium -mt-1 hidden sm:block">
              Hands-On Learning App
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <button
            onClick={() => navigate('/signin')}
            className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Sign In
          </button>
          <Button
            onClick={() => navigate('/signup')}
            variant="primary"
            size="sm"
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Content */}
      <main className="max-w-7xl mx-auto w-full my-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (Content & CTAs) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/80 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 dark:text-blue-300 mb-4">
              <span>Interactive Practice Coach</span>
            </div>

            {/* Headlines */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight mb-4 max-w-xl">
              Learn practical hands-on skills with real feedback
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed mb-8">
              Step-by-step masterclasses, instructional video guides, and camera-guided drills to build muscle memory and technique.
            </p>

            {/* 3 Key Value Props */}
            <div className="w-full max-w-lg grid grid-cols-3 gap-3 text-left mb-8">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <Camera className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Hands-Free</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Camera tracking</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Live Advice</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Angle & form tips</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">67 Drills</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">10 craft areas</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3">
              <Button
                onClick={() => navigate('/signup')}
                variant="primary"
                size="lg"
                fullWidth
                className="flex-1"
              >
                <span>Start Learning Free</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                onClick={() => navigate('/signin')}
                variant="secondary"
                size="lg"
                fullWidth
                className="flex-1"
              >
                <span>Browse Catalog</span>
              </Button>
            </div>

            {/* Privacy footnote */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Private & on-device · Works offline</span>
            </div>
          </div>

          {/* Right Column: Clean Product Mockup / Skill Preview */}
          <div className="lg:col-span-5 w-full flex flex-col gap-3">
            <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Featured Masterclasses
                </span>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Video + Practice</span>
              </div>

              <div className="flex flex-col gap-2.5">
                {previewSkills.map((skill) => (
                  <div
                    key={skill.id}
                    onClick={() => navigate('/signin')}
                    className="category-card-interactive p-3 cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase">
                        {skill.difficulty} · {skill.duration}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-0.5">{skill.name}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">{skill.description}</p>
                    </div>
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 shrink-0">View →</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full py-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-2">
        <span>SkillLens © 2026. Practical Skill Learning System.</span>
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <span>Private Focused</span>
          <span>·</span>
          <span>Accessible</span>
          <span>·</span>
          <span>Multilingual</span>
        </div>
      </footer>
    </div>
  );
};
