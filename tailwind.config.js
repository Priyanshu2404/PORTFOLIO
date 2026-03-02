/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Enable class-based dark mode
  darkMode: 'class',

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};