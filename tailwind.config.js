/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url('../../public/images/background.jpeg')",
        'identita-background' : "url('../../public/images/background-identita.jpeg')",
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
