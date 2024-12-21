/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif']
      },
      boxShadow: {
        'card-elevation-1':'0px 5px 22px 0px rgba(0, 0, 0, 0.04)',
        'card-elevation-2': '0px 0px 0px 1px rgba(0, 0, 0, 0.06)',
        'card-elevation-3': '0px 1px 2px 0px rgba(0, 0, 0, 0.08)',
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'}, 
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xs': {'max': '370px'}
    }
  },
  plugins: [],
}