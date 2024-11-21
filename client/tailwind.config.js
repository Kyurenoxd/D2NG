/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0a0a',
        'block-dark': '#0d0d0d',
        'text-light': '#ffffff',
        'text-gray': '#9ca3af',
        'border-gray': '#2a2a2a',
        'accent-gold': '#C4B454',
      },
      fontFamily: {
        funnel: ['Funnel Display', 'sans-serif'],
        onest: ['var(--font-onest)'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' }
        },
        'magic-particle-1': {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0' },
          '50%': { transform: 'translate(10px, -10px) scale(1.2)', opacity: '1' },
          '100%': { transform: 'translate(20px, -20px) scale(0)', opacity: '0' }
        },
        'magic-particle-2': {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0' },
          '50%': { transform: 'translate(10px, 10px) scale(1.2)', opacity: '1' },
          '100%': { transform: 'translate(20px, 20px) scale(0)', opacity: '0' }
        },
        'magic-particle-3': {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0' },
          '50%': { transform: 'translate(-10px, -10px) scale(1.2)', opacity: '1' },
          '100%': { transform: 'translate(-20px, -20px) scale(0)', opacity: '0' }
        }
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
        'magic-particle-1': 'magic-particle-1 1.5s ease-in-out infinite',
        'magic-particle-2': 'magic-particle-2 1.5s ease-in-out infinite 0.2s',
        'magic-particle-3': 'magic-particle-3 1.5s ease-in-out infinite 0.4s'
      }
    },
  },
  plugins: [],
} 