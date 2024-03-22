/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fuente1 : ["fuente1", "Sans-serif"],
        fuente2 : ["fuente2", "Sans-serif"],
        fuente3 : ["fuente3", "Sans-serif"],
        fuente4 : ["fuente4", "sans-serif"],
        fuente5 : ["fuente5", "sans-serif"],
        fuente6 : ["fuente6", "sans-serif"],
      },
      colors:{
        color1: "#0F1627",
        color2: "#C0C0C0",
        color3: "#365E28",
      },
    }
  },
  plugins: [],
}