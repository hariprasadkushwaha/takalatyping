/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        wine: '#7B112C',
        navy: '#0B1F3A',
        royal: '#532B88',
        saffron: '#F59E0B',
      },
      boxShadow: {
        glass: '0 18px 60px rgba(11,31,58,0.18)',
        glow: '0 20px 60px rgba(123,17,44,0.28)',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
