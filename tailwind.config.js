/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F5F7FA',
          dark: '#0B1220',
        },
        surface: {
          light: '#FFFFFF',
          'light-subtle': '#F8FAFC',
          dark: '#142238',
          'dark-elevated': '#1B2C47',
          'dark-card': '#111D30',
        },
        primary: {
          DEFAULT: '#19B99A',
          hover: '#149F83',
          dark: '#0F7662',
          light: '#E6FAF5',
          muted: 'rgba(25, 185, 154, 0.12)',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
          dark: '#B45309',
          muted: 'rgba(245, 158, 11, 0.12)',
        },
        danger: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
          dark: '#B91C1C',
          muted: 'rgba(239, 68, 68, 0.12)',
        },
        info: {
          DEFAULT: '#0EA5E9',
          light: '#E0F2FE',
          dark: '#0369A1',
          muted: 'rgba(14, 165, 233, 0.12)',
        },
        cyber: {
          border: {
            light: '#E2E8F0',
            dark: '#213350',
            'dark-subtle': '#1B2B43',
          },
          text: {
            light: '#0F172A',
            'light-muted': '#64748B',
            dark: '#F8FAFC',
            'dark-muted': '#94A3B8',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'subtle-light': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-light': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'subtle-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'card-dark': '0 8px 30px -4px rgba(0, 0, 0, 0.5)',
        'teal-glow': '0 0 20px rgba(25, 185, 154, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
