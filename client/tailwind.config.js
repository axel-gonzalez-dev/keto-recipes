/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'green': {
        DEFAULT: '#4caf50'
      },
      'orange': {
        DEFAULT: '#ff9800'
      },
      'white': {
        DEFAULT: '#fafafa'
      },
      'gray': {
        DEFAULT: '#424242'
      },
      'violet': {
        DEFAULT: '#3f51b5'
      }
    }
  },
  plugins: [],
}
