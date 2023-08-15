/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
      },
    },
  },
  plugins: [],
}


