/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#bae0ff',
          300: '#7cc5fe',
          400: '#36a3fd',
          500: '#0c87eb',
          600: '#0071d5',
          700: '#005db0',
          800: '#004c8c',
          900: '#003b6f',
          950: '#00264d',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#dcd1ff',
          300: '#c3adff',
          400: '#a57eff',
          500: '#8a4fff',
          600: '#7a2ff7',
          700: '#6d1de0',
          800: '#5a1bb8',
          900: '#4a1a96',
          950: '#2e0e6b',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.25)',
          dark: 'rgba(0, 0, 0, 0.15)',
          primary: 'rgba(12, 135, 235, 0.15)',
          secondary: 'rgba(138, 79, 255, 0.15)',
        },
        gradient: {
          'blue-start': '#0071d5',
          'blue-end': '#00c6fb',
          'purple-start': '#7a2ff7',
          'purple-end': '#c084fc',
          'pink-start': '#db2777',
          'pink-end': '#f472b6',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'slide-down': 'slideDown 0.7s ease-out',
        'slide-left': 'slideLeft 0.7s ease-out',
        'slide-right': 'slideRight 0.7s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'blur-in': 'blurIn 0.7s ease-out',
        'rotate-slow': 'rotate 8s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'text-gradient': 'textGradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blurIn: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
        textGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hard': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'inner-light': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'inner-medium': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.1)',
        'glow-primary': '0 0 15px rgba(12, 135, 235, 0.5)',
        'glow-secondary': '0 0 15px rgba(138, 79, 255, 0.5)',
        'glow-accent': '0 0 15px rgba(236, 72, 153, 0.5)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'bounce-start': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'bounce-end': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, var(--gradient-blue-start), var(--gradient-blue-end))',
        'gradient-secondary': 'linear-gradient(to right, var(--gradient-purple-start), var(--gradient-purple-end))',
        'gradient-accent': 'linear-gradient(to right, var(--gradient-pink-start), var(--gradient-pink-end))',
        'shimmer': 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%)',
      },
      perspective: {
        'none': 'none',
        '500': '500px',
        '1000': '1000px',
        '2000': '2000px',
      },
      rotate: {
        'y-3': 'rotateY(3deg)',
        'x-3': 'rotateX(3deg)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-primary': {
          background: 'linear-gradient(to right, #0071d5, #00c6fb)',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'background-size': '200% 200%',
        },
        '.text-gradient-secondary': {
          background: 'linear-gradient(to right, #7a2ff7, #c084fc)',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'background-size': '200% 200%',
        },
        '.text-gradient-accent': {
          background: 'linear-gradient(to right, #db2777, #f472b6)',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'background-size': '200% 200%',
        },
        '.glass-effect': {
          'background': 'rgba(255, 255, 255, 0.15)',
          'backdrop-filter': 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-effect-dark': {
          'background': 'rgba(0, 0, 0, 0.15)',
          'backdrop-filter': 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.text-shadow-sm': {
          'text-shadow': '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        '.perspective-none': {
          perspective: 'none',
        },
        '.perspective-500': {
          perspective: '500px',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        '.transform-gpu': {
          transform: 'translateZ(0)',
        },
        '.rotate-y-3': {
          transform: 'rotateY(3deg)',
        },
        '.rotate-x-3': {
          transform: 'rotateX(3deg)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
} 