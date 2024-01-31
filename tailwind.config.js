/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "rgba(var(--primary))",
        "primary-light": "rgba(var(--primary-light))",
        "theme": "rgba(var(--theme))",
        "title": "rgba(var(--title))",
        "card": "rgba(var(--card))",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          xl: "1280px",
        },
        maxWidth: {
          DEFAULT: "max-w-xl",
        },
      },
      transitionProperty: {
        height: "max-height",
      },
    },
  },
  plugins: [],
};

