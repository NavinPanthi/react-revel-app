/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        lg: "1.5rem",
        xl: "2.5rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        ppurple: "#865CD0",
        pred: "#F43434",
        pgray: "#6B6D81",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
