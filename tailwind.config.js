/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
      },
    },
  },
  plugins: [],
}

