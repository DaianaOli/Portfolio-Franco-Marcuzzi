/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow:{
        'white': '3px -2px 7px #5A5858',
        'black':'3px -2px 7px #E4DFDF',
      },
      colors: {
        dark: "#1a202c",
        colorNoise: "#111111",
      },
      backgroundImage: {
        imageNoise: "url('/src/assets/noise-transparent.png')",
        bgWhite: "url(https://res.cloudinary.com/dcpcja2qg/image/upload/v1680013353/bgWhite_nigwyc.png)",
        bgDark: "url(https://res.cloudinary.com/dcpcja2qg/image/upload/v1680013353/bgDark_jujnzh.png)",
        White: "url(https://res.cloudinary.com/dcpcja2qg/image/upload/v1680018284/bg_bggenerator_com_dfz3zj.png)",
        Dark: "url(https://res.cloudinary.com/dcpcja2qg/image/upload/v1680018275/bg_bggenerator_com_1_e6t89u.png)",
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
