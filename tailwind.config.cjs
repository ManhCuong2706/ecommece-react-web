/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       boxShadow: {
        '3xl': '0 0 16px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
