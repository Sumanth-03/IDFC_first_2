/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
            sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      backgroundColor:{
        primary:'#9C1D26',
        secondary: '#fcc92d',
        turtiary:'#d50170',
        footer:'#2a2b2c',
        buttonBG:'#ba6167'
      },
      textColor: { 
        primary: '#9C1D26',
        secondary: '#fcc92d',
        turtiary: '#d50170',
        footer: '#2a2b2c',
      },
      ringColor: {
        'primary': '#9C1D26',
        'secondary': '#fcc92d', 
        'tertiary': '#d50170',
      },  
      borderColor: {
        'primary': '#9C1D26',
      },

    },
  },
  plugins: [],
});

