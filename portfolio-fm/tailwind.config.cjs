/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1a202c",
        colorNoise: "#111111",
      },
      backgroundImage: {
        imageNoise: "url('/src/assets/noise-transparent.png')",
      },
      animation: {
        bganimation: "bganimation 1s infinite",
      },
      keyframes: {
        bganimation: {
          "0%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-5%)" },
          "20%": { transform: "translate(-10%,5%)" },
          "30%": { transform: "translate(5%,-10%)" },
          "40%": { transform: "translate(-5%,15%)" },
          "50%": { transform: "translate(-10%,5%)" },
          "60%": { transform: "translate(15%,0)" },
          "70%": { transform: "translate(0,10%)" },
          "80%": { transform: "translate(-15%,0)" },
          "90%": { transform: "translate(10%,5%)" },
          "100%": { transform: "translate(5%,0)" },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },

  keyFramg: {},
  plugins: [],
};
