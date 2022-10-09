/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  presets: [
    require('./theme-preset.js')
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '80v': '80vh'
      }
    },
  },
  plugins: [],
}
