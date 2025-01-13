/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Scans the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE9789", // Custom primary color
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Custom font family
      },
    },
  },
  plugins: [],
};
