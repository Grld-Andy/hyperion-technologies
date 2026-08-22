import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { cssVarNames, themes, type ThemeMode, type ThemePalette } from '../constants/theme';

export interface ThemeContextValue {
  mode: ThemeMode;
  palette: ThemePalette;
  toggle: () => void;
  setMode: (mode: ThemeMode) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = 'hyperion-theme';

function readInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* storage may be unavailable (private mode); fall through */
  }
  return 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(readInitialMode);

  useEffect(() => {
    const root = document.documentElement;
    const palette = themes[mode];
    (Object.keys(palette) as Array<keyof ThemePalette>).forEach((key) => {
      root.style.setProperty(cssVarNames[key], palette[key]);
    });
    root.dataset.theme = mode;
    root.style.colorScheme = mode;
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
  }, [mode]);

  const toggle = useCallback(() => {
    setMode((m) => (m === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, palette: themes[mode], toggle, setMode }),
    [mode, toggle],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
