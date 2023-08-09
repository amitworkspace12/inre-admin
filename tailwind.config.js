/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'inter':['Inter', 'sans-serif'],
      'opensans':['Open Sans', 'sans-serif'],
      'publicsans':['Public Sans', 'sans-serif'],
      "poppins":['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        'login':"url('/src/assets/background.png')"
      },
      colors:{
        'bcolor':'#1A1A1A'
      }
    },
  },
  plugins: [],
}