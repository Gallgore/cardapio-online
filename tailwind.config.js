/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans':['Roboto','sans-serif']
    },
    extend: {
      backgroundImage:{
        "home":"URL('/src/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

