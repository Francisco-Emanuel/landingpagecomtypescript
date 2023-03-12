/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'base': ['"Cormorant Upright"', 'serif'],
      'alt': ['"Open Sans"', 'sans-serif']
    }
  },
  plugins: [],
}
