/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'bellefair': ['Bellefair', 'sans'],
        'barlowc': ['Barlow Condensed', 'sans'],
        'barlow' : ['Barlow', 'sans'],
      },
    },
  },
  plugins: [],
}

