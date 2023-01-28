/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      openSans: ["openSans", "sans-serif"],
      semiBold: ["semiBold", "sans-serif"],
      uniNeueLight: ["uniNeueLight", "sans-serif"],
      uniNeueBook: ["uniNeueBook", "sans-serif"],
      uniNeueRegular: ["uniNeueRegular", "sans-serif"],
      uniNeueBold: ["uniNeueBold", "sans-serif"],
    },
    colors: {
      main: "#02C3A5",
      hearth: "#ED5C5C",
    },
    extend: {
      backgroundImage: {
        'main-background': "url('../../public/images/background.jpeg')",
        'identita-background' : "url('../../public/images/identita.jpeg')",
        'servizi-background' : "url('../../public/images/servizi.jpeg')",
        'risorse-background' : "url('../../public/images/risorse.jpeg')",
        'donazioni-background' : "url('../../public/images/donazioni.jpeg')",
        'contatti-background' : "url('../../public/images/contatti.jpeg')",
        'disclaimer-background' : "url('../../public/images/disclaimer.jpeg')",
      },
    },
  },
  plugins: [],
});
