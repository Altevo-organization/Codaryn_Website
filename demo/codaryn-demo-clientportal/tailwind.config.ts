import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0C',
        surface: {
          DEFAULT: '#0F1115',
          raised: '#16191f',
          hover: '#1c2028',
        },
        accent: {
          DEFAULT: '#4F7CFF',
          hover: '#6b93ff',
          muted: 'rgba(79, 124, 255, 0.12)',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.06)',
          strong: 'rgba(255, 255, 255, 0.1)',
        },
        text: {
          primary: '#F0F2F5',
          secondary: '#8B93A0',
          muted: '#555E6B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.65rem',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
        elevated: '0 4px 16px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}

export default config
