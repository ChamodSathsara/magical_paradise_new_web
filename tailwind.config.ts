import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        jungle: {
          DEFAULT: '#0b2f26',
          deep: '#072019',
          light: '#14493c',
          muted: '#3d6157',
        },
        gold: {
          DEFAULT: '#c8a24a',
          light: '#e0c483',
          dark: '#9a7a2f',
        },
        sand: {
          DEFAULT: '#f6f1e6',
          dark: '#e8dfcb',
        },
        ivory: '#fffdf8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        // NOTE: the original vite project's config had this value accidentally
        // replaced with its `content` file-glob array (a bug), which meant
        // `max-w-content` resolved to nothing. Restored to a sensible content
        // container width — adjust if you had a different intended value.
        content: '80rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,47,38,0.04), 0 12px 32px -16px rgba(11,47,38,0.18)',
        lift: '0 24px 60px -24px rgba(11,47,38,0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
