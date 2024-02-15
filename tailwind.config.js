/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      colors: {
        tertiary: '#B0B0C6',
        primary: '#202332',
        secondary: '#66667F',
        lines: '#D8DAE5',
        inverted: '#202332',
      },
    },
  },
  plugins: [],
};
