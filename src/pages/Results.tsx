import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RotateCcw,
  CheckCircle2,
  Clock,
  ArrowRight,
  Info,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { storageService } from '../services/storage';
import { PageTransition } from '../components/PageTransition';

export const Results: React.FC = () => {
  const navigate = useNavigate();
  const session = storageService.getLatestSession();

  if (!session) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-250">
        <Header title="Practice Results" subtitle="No recent session" />
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 mb-3">
            <Info className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">No Practice Session Found</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mb-6">
            Complete a practice technique session with your camera to see your evaluation.
          </p>
          <Button onClick={() => navigate('/skills')} variant="primary" size="md">
            <span>Browse Skills</span>
          </Button>
        </main>
      </div>
    );
  }

  // Improvements / tips
  const improvementFeedback =
    session.improvementFeedback && session.improvementFeedback.length > 0
      ? session.improvementFeedback
      : session.feedback
          .filter((f) => f.type === 'improvement')
          .map((f) => f.text);

  const durationSecs = session.duration || session.durationSeconds || 30;

  return (
    <div className="min-h-screen pb-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-250">
      <Header
        title="Practice Complete"
        subtitle={`${session.skillName} · Technique Summary`}
      />

      <PageTransition className="px-4 sm:px-6 lg:px-8 py-8 max-w-3xl mx-auto w-full flex flex-col gap-6">
        {/* Top Summary / Encouragement Banner */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 text-center shadow-xs flex flex-col items-center transition-colors duration-250">
          {session.hasSufficientEvidence === false ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 text-xs font-semibold mb-4 border border-amber-200 dark:border-amber-800">
              <Info className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Incomplete Observation</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4 border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Visual Evidence Recorded</span>
            </div>
          )}

          <div className="flex flex-col items-center mb-3">
            <span className="text-5xl sm:text-6xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight leading-none">
              {session.hasSufficientEvidence === false ? '--' : session.score}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-2">
              Technique Evaluation Score
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
            {session.hasSufficientEvidence === false
              ? 'Not enough visual data to evaluate technique'
              : session.score >= 80
              ? 'Consistent technique observed across steps'
              : 'Practice completed — keep practicing to build rhythm'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 justify-center mb-2">
            <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
            <span>Observed for {durationSecs} seconds · Saved to your device</span>
          </p>

          {session.hasSufficientEvidence === false && (
            <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-xl text-left text-xs text-amber-800 dark:text-amber-300 max-w-lg">
              <p className="font-semibold mb-1">Why is there no score?</p>
              <p>
                SkillLens only evaluates technique when your hands and work area are continuously visible and active during the exercise. Practice for at least 4–5 continuous seconds with your camera pointed at your hands to generate a verified technique score.
              </p>
            </div>
          )}
        </div>

        {/* Visual Evidence Summary Table */}
        {session.signals && session.signals.length > 0 && (
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-xs flex flex-col gap-4 transition-colors duration-250">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Camera Evidence Checklist
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Signals observed by your browser camera during this session
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-700">
              {session.signals.map((signal) => (
                <div key={signal.id} className="py-3 flex items-start justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {signal.label}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {signal.detail}
                    </span>
                  </div>
                  <div className="shrink-0">
                    {!signal.reliable ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-2xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600" title="Requires tactile or ultra high-resolution hardware">
                        Not reliably detected
                      </span>
                    ) : signal.status === 'detected' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-2xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        Detected
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-2xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600">
                        Not Detected
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Breakdown of Results */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-xs flex flex-col gap-4 transition-colors duration-250">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-700 pb-3">
            Metric Observations:
          </h3>

          <div className="flex flex-col gap-4">
            {session.metricScores.map((metric) => (
              <div key={metric.id} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{metric.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500 text-xs">{metric.target}</span>
                    <span className="font-bold text-slate-900 dark:text-slate-100 w-12 text-right">
                      {session.hasSufficientEvidence === false ? '--' : `${metric.score}%`}
                    </span>
                  </div>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: session.hasSufficientEvidence === false ? '0%' : `${metric.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to improve */}
        {improvementFeedback.length > 0 && (
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-xs flex flex-col gap-3 transition-colors duration-250">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              Coaching Recommendations
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {improvementFeedback.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons: Practice Again & Continue Learning */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            onClick={() => navigate(`/practice/${session.skillId}`)}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto px-6"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Practice Again</span>
          </Button>

          <Button
            onClick={() => navigate(`/skills/${session.skillId}/learn`)}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto px-6"
          >
            <span>Continue Learning</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </PageTransition>
    </div>
  );
};
