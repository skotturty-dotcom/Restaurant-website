/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1E3A34',
          dark: '#142723',
          light: '#2A4E46',
          deep: '#0F1E1B',
        },
        gold: {
          DEFAULT: '#C79A45',
          light: '#E0B55C',
          dark: '#9E772E',
          muted: '#D4AF37',
        },
        terracotta: {
          DEFAULT: '#D65A31',
          dark: '#B0431F',
          light: '#E5734C',
        },
        ivory: {
          DEFAULT: '#F8F6F2',
          dark: '#F0ECE3',
          light: '#FCFBF9',
        },
        darkText: '#1F1F1F',
        mutedText: '#6F6F6F',
        borderLine: '#E8E3DA',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 20px 40px -15px rgba(30, 58, 52, 0.08)',
        goldGlow: '0 0 25px rgba(199, 154, 69, 0.25)',
        cardHover: '0 25px 50px -12px rgba(30, 58, 52, 0.15)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C79A45 0%, #E0B55C 50%, #9E772E 100%)',
        'dark-gradient': 'linear-gradient(180deg, #142723 0%, #1E3A34 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #F8F6F2 0%, #F0ECE3 100%)',
      }
    },
  },
  plugins: [],
}
