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
        // PANTONE 7546 C — verde oscuro corporativo Buintel
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
        'gradient-brand': 'linear-gradient(135deg, #0e3d31 0%, #318c77 50%, #52c4a0 100%)',
        'gradient-dark': 'linear-gradient(180deg, #020b0a 0%, #071211 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(49,140,119,0.1) 0%, rgba(14,61,49,0.05) 100%)',
        'mesh-green': 'radial-gradient(ellipse at 20% 50%, rgba(49,140,119,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(14,61,49,0.2) 0%, transparent 60%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'scan': 'scan 3s linear infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
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
      },
      boxShadow: {
        'glow': '0 0 40px rgba(49,140,119,0.3)',
        'glow-lg': '0 0 80px rgba(49,140,119,0.2)',
        'card': '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
