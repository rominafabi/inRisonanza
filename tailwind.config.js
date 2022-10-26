/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url('../../public/images/background.jpeg')",
      },
    },
  },
  plugins: [],
};
