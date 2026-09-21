import type { User } from '../types';

const AUTH_KEYS = {
  USERS: 'skilllens_users',
  CURRENT_USER: 'skilllens_current_user',
};

const DEFAULT_DEMO_USER: User = {
  id: 'user-demo-1',
  name: 'Alex Vance',
  email: 'alex@skilllens.ai',
  password: 'password123',
  interests: ['cat-1', 'cat-2', 'cat-5'],
  createdAt: new Date('2026-01-01').toISOString(),
  language: 'en',
};

export const authService = {
  getUsers(): User[] {
    try {
      const data = localStorage.getItem(AUTH_KEYS.USERS);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to read users from localStorage', e);
    }
    // Seed default demo user
    this.saveUsers([DEFAULT_DEMO_USER]);
    return [DEFAULT_DEMO_USER];
  },

  saveUsers(users: User[]): void {
    try {
      localStorage.setItem(AUTH_KEYS.USERS, JSON.stringify(users));
    } catch (e) {
      console.error('Failed to save users to localStorage', e);
    }
  },

  getCurrentUser(): User | null {
    try {
      const data = localStorage.getItem(AUTH_KEYS.CURRENT_USER);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Failed to read current user from localStorage', e);
    }
    return null;
  },

  setCurrentUser(user: User | null): void {
    try {
      if (user) {
        localStorage.setItem(AUTH_KEYS.CURRENT_USER, JSON.stringify(user));
      } else {
        localStorage.removeItem(AUTH_KEYS.CURRENT_USER);
      }
    } catch (e) {
      console.error('Failed to set current user in localStorage', e);
    }
  },

  signIn(email: string, password: string): { success: boolean; user?: User; error?: string } {
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !password) {
      return { success: false, error: 'Please enter your email and password.' };
    }

    const users = this.getUsers();
    const found = users.find((u) => u.email.toLowerCase() === trimmedEmail);

    if (!found || found.password !== password) {
      return { success: false, error: 'Email or password is incorrect.' };
    }

    this.setCurrentUser(found);
    return { success: true, user: found };
  },

  signUp(data: {
    name: string;
    email: string;
    password: string;
    interests?: string[];
  }): { success: boolean; user?: User; error?: string } {
    const trimmedName = data.name.trim();
    const trimmedEmail = data.email.trim().toLowerCase();

    if (!trimmedName) {
      return { success: false, error: 'Please enter your name.' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    if (!data.password || data.password.length < 6) {
      return { success: false, error: 'Password must contain at least 6 characters.' };
    }

    const users = this.getUsers();
    const existing = users.find((u) => u.email.toLowerCase() === trimmedEmail);
    if (existing) {
      return { success: false, error: 'An account with this email already exists.' };
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      name: trimmedName,
      email: trimmedEmail,
      password: data.password,
      interests: data.interests || [],
      createdAt: new Date().toISOString(),
      language: 'en',
    };

    const updatedUsers = [...users, newUser];
    this.saveUsers(updatedUsers);
    this.setCurrentUser(newUser);

    return { success: true, user: newUser };
  },

  signOut(): void {
    this.setCurrentUser(null);
  },

  updateUser(updates: Partial<User>): User | null {
    const current = this.getCurrentUser();
    if (!current) return null;

    const updatedUser = { ...current, ...updates };
    const users = this.getUsers().map((u) => (u.id === current.id ? updatedUser : u));

    this.saveUsers(users);
    this.setCurrentUser(updatedUser);
    return updatedUser;
  },
};
