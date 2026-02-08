'use client';

import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

const THEME_KEY = 'theme';

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const dark = document.documentElement.classList.contains('dark');
    setIsDark(dark);
  }, []);

  const toggle = () => {
    const nextDark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem(THEME_KEY, nextDark ? 'dark' : 'light');
    setIsDark(nextDark);
  };

  if (isDark === null) {
    return (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-transparent" aria-hidden />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-300 bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-zinc-100 transition-colors"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
