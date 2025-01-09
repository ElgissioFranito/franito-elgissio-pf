/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        textColor : {
          "DEFAULT" : "var(--text-color)",
          "10" : "var(--text-color-10)",
          "20" : "var(--text-color-20)",
          "50" : "var(--text-color-50)",
          "80" : "var(--text-color-80)",
        },
        primary: {
          "DEFAULT" : "var(--primary)",
          "10" : "var(--primary-10)",
          "20" : "var(--primary-20)",
          "50" : "var(--primary-50)",
        },
        secondary: {
          "DEFAULT" : "var(--secondary)",
          "10" : "var(--secondary-10)",
          "20" : "var(--secondary-20)",
          "50" : "var(--secondary-50)",
        },
        tertiary: {
          "DEFAULT" : "var(--tertiary)",
          "10" : "var(--tertiary-10)",
          "20" : "var(--tertiary-20)",
          "50" : "var(--tertiary-50)",
        },
        four: {
          "DEFAULT" : "var(--four)",
          "10" : "var(--four-10)",
          "20" : "var(--four-20)",
          "50" : "var(--four-50)",
        },
        five: {
          "DEFAULT" : "var(--five)",
          "10" : "var(--five-10)",
          "20" : "var(--five-20)",
          "50" : "var(--five-50)",
        },
      },

      transitionProperty: {
        colors: 'background-color, border-color, color, fill, stroke, border, all',
      },
    },
  },
  plugins: [],
}

