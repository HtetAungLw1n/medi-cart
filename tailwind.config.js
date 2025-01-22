/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00897B",
        secondary: "#43A047",
        accent: "#BBDEFB",
        background: "#F5F5F5",
        textcolor: "#212121",
      },
      fontFamily: {
        lexend: ["Lexend"],
      },
    },
  },
  plugins: [],
};
