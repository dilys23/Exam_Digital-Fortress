/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: "#3498db",
        light: "#3498db",
        gray: "#3498db",
        lightGray: "#3498db",
        orange: "#3498db",

      }
    },
  },
  plugins: [],
}