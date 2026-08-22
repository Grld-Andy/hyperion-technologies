/**
 * Design tokens extracted from the Hyperion Redesign mockup.
 *
 * `brand` values are mode-independent (the navy / gold / blue identity).
 * `themes` holds the two surface palettes; they are published to the document
 * as CSS custom properties by `ThemeProvider` so that `:hover` rules in
 * `index.css` can reference them too.
 */

export const brand = {
  navy: 'oklch(0.28 0.11 265)',
  navyDeep: 'oklch(0.24 0.06 265)',
  gold: 'oklch(0.79 0.135 84)',
  goldHover: 'oklch(0.86 0.13 86)',
  goldLight: 'oklch(0.88 0.09 88)',
  goldDim: 'oklch(0.66 0.12 83)',
  blue: 'oklch(0.45 0.19 264)',
  blueBright: 'oklch(0.5 0.2 264)',
  blueDark: 'oklch(0.44 0.2 264)',
  white: '#ffffff',
} as const;

export type ThemeMode = 'light' | 'dark';

export interface ThemePalette {
  pageBg: string;
  altBg: string;
  cardBg: string;
  headerBg: string;
  text: string;
  textMuted: string;
  border: string;
  inputBg: string;
}

export const themes: Record<ThemeMode, ThemePalette> = {
  light: {
    pageBg: '#ffffff',
    altBg: 'oklch(0.972 0.006 255)',
    cardBg: '#ffffff',
    headerBg: '#ffffff',
    text: 'oklch(0.19 0.035 265)',
    textMuted: 'oklch(0.53 0.032 258)',
    border: 'oklch(0.918 0.012 255)',
    inputBg: '#ffffff',
  },
  dark: {
    pageBg: 'oklch(0.15 0.028 265)',
    altBg: 'oklch(0.19 0.032 265)',
    cardBg: 'oklch(0.2 0.035 265)',
    headerBg: 'oklch(0.13 0.026 265)',
    text: 'oklch(0.95 0.01 250)',
    textMuted: 'oklch(0.7 0.02 258)',
    border: 'oklch(1 0 0 / 0.1)',
    inputBg: 'oklch(0.22 0.035 265)',
  },
};

/** Maps a palette to the CSS custom property names used across the app. */
export const cssVarNames: Record<keyof ThemePalette, string> = {
  pageBg: '--page-bg',
  altBg: '--alt-bg',
  cardBg: '--card-bg',
  headerBg: '--header-bg',
  text: '--text',
  textMuted: '--text-muted',
  border: '--border',
  inputBg: '--input-bg',
};

/** Shorthands for the `var(--x)` strings, so components stay readable. */
export const t = {
  pageBg: 'var(--page-bg)',
  altBg: 'var(--alt-bg)',
  cardBg: 'var(--card-bg)',
  headerBg: 'var(--header-bg)',
  text: 'var(--text)',
  textMuted: 'var(--text-muted)',
  border: 'var(--border)',
  inputBg: 'var(--input-bg)',
} as const;

export const fonts = {
  display: "'Plus Jakarta Sans', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const shadows = {
  lift: '0 18px 40px -18px oklch(0.28 0.11 265 / 0.35)',
  liftSoft: '0 18px 40px -18px oklch(0.28 0.11 265 / 0.2)',
  card: '0 1px 2px oklch(0.28 0.11 265 / 0.06), 0 24px 60px -24px oklch(0.28 0.11 265 / 0.25)',
  cardSoft: '0 1px 2px oklch(0.28 0.11 265 / 0.06), 0 8px 24px -12px oklch(0.28 0.11 265 / 0.18)',
  dropdown: '0 18px 40px -18px oklch(0.28 0.11 265 / 0.35)',
} as const;

export const layout = {
  maxWidth: 1280,
  gutter: 32,
} as const;

export const EASE = 'cubic-bezier(0.22,1,0.36,1)';
