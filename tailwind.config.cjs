/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
      },
      colors: {
        "c-brightOrange": "hsl(31, 77%, 52%)",
        "c-darkCyan": "hsl(184, 100%, 22%)",
        "c-veryDarkCyan": "hsl(179, 100%, 13%)",
        "c-transparentWhite": "hsla(0, 0%, 100%, 0.75)",
        "c-veryLightGray": "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
};
