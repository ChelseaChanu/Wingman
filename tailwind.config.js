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
      }
    },
  },
  plugins: [],
}