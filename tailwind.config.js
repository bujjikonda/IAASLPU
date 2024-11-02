/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iaas: {
          orange: '#F9B026',
          green: '#70AD47',
          white: '#FFFFFF',
          black: '#000000'
        }
      }
    },
  },
  plugins: [],
}