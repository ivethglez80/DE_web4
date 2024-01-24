/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fuente1 : ["Kunstler Script", "Sans-serif"],
      },
      colors:{
        color1: "#3F5134",
        color2: "#3F6443"
      },
    }
  },
  plugins: [],
}