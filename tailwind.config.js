/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1173d4",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "dark-card": "rgba(25, 38, 51, 0.7)", // Semi-transparent dark card background
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Adds form styles
    // Optional: add container queries if you plan to use them
    require('@tailwindcss/container-queries'),
  ],
};
