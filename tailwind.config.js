/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'inter':['Inter', 'sans-serif'],
      'opensans':['Open Sans', 'sans-serif'],
      'publicsans':['Public Sans', 'sans-serif'],
      "poppins":['Poppins', 'sans-serif'],
    "montserrat": ['Montserrat', 'sans-serif']
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
})