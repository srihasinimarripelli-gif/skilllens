import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

import { Landing } from './pages/Landing';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';
import { Onboarding } from './pages/Onboarding';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { SkillDetail } from './pages/SkillDetail';
import { Learning } from './pages/Learning';
import { Practice } from './pages/Practice';
import { Results } from './pages/Results';
import { Progress } from './pages/Progress';
import { Profile } from './pages/Profile';
import { AnimatedBackground } from './components/AnimatedBackground';

// Scroll to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppProvider>
          <BrowserRouter>
            <ScrollToTop />
            {/* Global Subtle Background */}
            <AnimatedBackground />
            {/* Responsive Container: Adapts from full-width mobile to spacious max-w-7xl on desktop */}
            <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col items-center text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-100 dark:selection:bg-blue-900/50 selection:text-blue-900 dark:selection:text-blue-100 theme-transition">
              <div className="w-full max-w-7xl min-h-screen bg-white dark:bg-slate-900 relative flex flex-col theme-transition">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Landing />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />

                  {/* Protected Routes */}
                  <Route
                    path="/onboarding"
                    element={
                      <ProtectedRoute>
                        <Onboarding />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/home"
                    element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/skills"
                    element={
                      <ProtectedRoute>
                        <Skills />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/skills/:skillId"
                    element={
                      <ProtectedRoute>
                        <SkillDetail />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/skills/:skillId/learn"
                    element={
                      <ProtectedRoute>
                        <Learning />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/practice/:skillId"
                    element={
                      <ProtectedRoute>
                        <Practice />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/results"
                    element={
                      <ProtectedRoute>
                        <Results />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/progress"
                    element={
                      <ProtectedRoute>
                        <Progress />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />

                  {/* Fallback */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </AppProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
