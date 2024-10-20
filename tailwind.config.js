export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif'],
        hussar: ['hussar', 'sans-serif'],
        zuumerough: ['zuumer', 'sans-serif']


      },
    colors: {
      "bornow-black": "#000000",
      "bornow-green": "#0c795d",
    }
  }},
  plugins: [],
}

