/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#17ffec",
          200: "#A2FFDE",
          300: "#73FFDA",
          400: "#51FFE0",
          500: "#17FFEC",
          600: "#10D9DB",
          700: "#0BA6B7",
          800: "#077993",
          900: "#04597A",
        },
      },
      fontFamily: {
        raleway: ["Raleway"],
      },
    },
  },
  plugins: [],
};
