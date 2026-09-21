import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../types';
import { authService } from '../services/authService';

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; user?: User; error?: string }>;
  signUp: (data: {
    name: string;
    email: string;
    password: string;
    interests?: string[];
  }) => Promise<{ success: boolean; user?: User; error?: string }>;
  signOut: () => void;
  updateUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => authService.getCurrentUser());
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Sync state on mount and ensure users are seeded
  useEffect(() => {
    const user = authService.getCurrentUser();
    setCurrentUser(user);
  }, []);

  const signIn = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; user?: User; error?: string }> => {
    setIsLoading(true);
    // Short realistic delay for UX loading feedback
    await new Promise((res) => setTimeout(res, 400));
    try {
      const result = authService.signIn(email, password);
      if (result.success && result.user) {
        setCurrentUser(result.user);
        return { success: true, user: result.user };
      }
      return { success: false, error: result.error || 'Invalid credentials' };
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (data: {
    name: string;
    email: string;
    password: string;
    interests?: string[];
  }): Promise<{ success: boolean; user?: User; error?: string }> => {
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 450));
    try {
      const result = authService.signUp(data);
      if (result.success && result.user) {
        setCurrentUser(result.user);
        return { success: true, user: result.user };
      }
      return { success: false, error: result.error || 'Failed to create account' };
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    authService.signOut();
    setCurrentUser(null);
  };

  const updateUser = (updates: Partial<User>) => {
    const updated = authService.updateUser(updates);
    if (updated) {
      setCurrentUser(updated);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        isLoading,
        signIn,
        signUp,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
