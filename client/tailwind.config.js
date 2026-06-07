/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      colors: {
        stone: { 50: '#fafaf9', 100: '#f5f5f4', 900: '#1c1917' },
        moss: { 400: '#4a5240', 600: '#363d30' },
        trail: { 500: '#8b7355' },
      },
    },
  },
  plugins: [],
}