/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'max-height'
      }
    },
  },
  plugins: [],
}

