/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: "Cormorant Garamond",
        'noto': ["Noto Serif Khojki"],
        'lora':["Lora"]
      },
      backgroundImage: {
        light: "url('../public/day-sky.jpg')",
        dark: "url('../public/night_sky.jpg')",
      },
      colors: {
        green: "#00AAB1",
        grey: "#1A3434",
        greengrey: "#95B0B1",
        lightBlue: "#E1FFFF",
        opaquegreen: "rgb(0,170,177,0.5)",
        greyish: "#324B4C",
        opaquegreyish: "rgba(112,139,139,0.5)",
        darkgreen: "#00242A"
      },
    },
  },
  plugins: [],
};
