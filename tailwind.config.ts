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
        // BUINTEL Primary Colors - Blue & Cyan
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066FF', // Main primary blue
          600: '#004DBF',
          700: '#003A8F',
          800: '#002660',
          900: '#001330',
        },
        // Secondary - Cyan Accent
        secondary: {
          50: '#e6f9ff',
          100: '#cce8ff',
          200: '#99d0ff',
          300: '#66b8ff',
          400: '#33a0ff',
          500: '#00D9FF', // Main cyan
          600: '#00A8CC',
          700: '#007F99',
          800: '#005666',
          900: '#002D33',
        },
        // Accent Colors
        accent: {
          orange: '#FF6B35',
          purple: '#7C3AED',
          green: '#10B981',
          red: '#EF4444',
        },
        // Neutral grays
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
        // PANTONE 7546 C — verde oscuro corporativo Buintel (legacy)
        brand: {
          50:  '#e8f2ef',
          100: '#c4ddd6',
          200: '#9cc7bb',
          300: '#72b09f',
          400: '#529e8b',
          500: '#318c77',
          600: '#2a7d6a',
          700: '#226b5a',
          800: '#1a5a4b',
          900: '#0e3d31',
          950: '#082920',
        },
        // Colores de apoyo
        slate: {
          950: '#020b0a',
          900: '#071211',
          800: '#0d1f1d',
          700: '#142e2b',
          600: '#1e4540',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0066FF 0%, #00D9FF 50%, #00A8CC 100%)',
        'gradient-dark': 'linear-gradient(180deg, #020b0a 0%, #111827 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(0,102,255,0.1) 0%, rgba(0,217,255,0.05) 100%)',
        'mesh-primary': 'radial-gradient(ellipse at 20% 50%, rgba(0,102,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,217,255,0.2) 0%, transparent 60%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'scan': 'scan 3s linear infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.6s ease-out forwards',
        'slideInRight': 'slideInRight 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(0,102,255,0.3)',
        'glow-lg': '0 0 80px rgba(0,102,255,0.2)',
        'glow-cyan': '0 0 40px rgba(0,217,255,0.2)',
        'card': '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'elevation': '0 20px 25px -5px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
