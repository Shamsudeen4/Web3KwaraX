/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        primary: "#0E1939",
        secondary: "#48CAE4",
        tertiary: "#0B132B"
      },
      screens: {
        'sm': {'min': '330px', 'max': '767px'},  
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px'},
      }
    },
  },
  plugins: [],
}