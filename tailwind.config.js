/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brandPink: '#D900FF',
        brandCyan: '#00F0FF'
      },
      boxShadow: {
        glow: '0 0 20px rgba(217,0,255,0.4)'
      }
    }
  },
  plugins: []
};
