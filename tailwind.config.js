// /** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.8s ease-out',
      'slide-up': 'slideUp 0.6s ease-out',
      'float': 'float 3s ease-in-out infinite',
      'glitch-1': 'glitch1 2s infinite',
      'spin-slow': 'spin 8s linear infinite',
      'spin-slow-reverse': 'spin 10s linear infinite reverse',
      'spin-very-slow': 'spin 20s linear infinite',
      'spin-very-slow-reverse': 'spin 25s linear infinite reverse',
      'gradient': 'gradient 3s ease infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      slideUp: {
        '0%': { opacity: '0', transform: 'translateY(30px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
      glitch1: {
        '0%, 100%': { transform: 'translate(0)' },
        '20%': { transform: 'translate(-2px, 2px)' },
        '40%': { transform: 'translate(-2px, -2px)' },
        '60%': { transform: 'translate(2px, 2px)' },
        '80%': { transform: 'translate(2px, -2px)' },
      },
      gradient: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
    },
    backgroundSize: {
      '200%': '200% 200%',
    },
  },
};
export const plugins = [];