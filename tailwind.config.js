/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'valorant': ['VALORANT', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'tungsten': ['Tungsten-Bold'],
      },
      backgroundImage:{
        'lecourt': 'url("/public/lecourt.png")'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

