import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Compass, Video, BarChart2, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useApp();

  const currentPath = location.pathname;

  const navItems = [
    {
      label: t.nav.home,
      path: '/home',
      icon: Home,
      isActive: currentPath === '/home',
    },
    {
      label: t.nav.skills,
      path: '/skills',
      icon: Compass,
      isActive: currentPath.startsWith('/skills') && !currentPath.includes('/learn'),
    },
    {
      label: t.nav.practice,
      path: '/practice/skill-roller-painting',
      icon: Video,
      isActive: currentPath.startsWith('/practice'),
      isCenter: true,
    },
    {
      label: t.nav.progress,
      path: '/progress',
      icon: BarChart2,
      isActive: currentPath === '/progress' || currentPath === '/results',
    },
    {
      label: t.nav.profile,
      path: '/profile',
      icon: User,
      isActive: currentPath === '/profile',
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-3 pt-1.5 pb-[max(1rem,calc(0.5rem+env(safe-area-inset-bottom,0px)))] shadow-sm transition-colors duration-250">
      <div className="flex items-center justify-around relative max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;

          if (item.isCenter) {
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center -mt-5 group cursor-pointer focus:outline-none"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-all ${
                    item.isActive
                      ? 'bg-blue-700 dark:bg-blue-600 text-white ring-4 ring-blue-100 dark:ring-blue-900/40'
                      : 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 active:scale-95'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={`text-[10px] mt-1 font-medium ${
                    item.isActive ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-colors cursor-pointer focus:outline-none ${
                item.isActive
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {item.isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </div>
              <span className="text-[10px] mt-1 font-medium tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
