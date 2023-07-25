/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f9e6d4",
          100: "#e8c9a7",
          200: "#d3a777",
          300: "#bf8851",
          400: "#aa6a2b", // default
          500: "#8e5209",
          600: "#6c3e00",
          700: "#4a2a00",
          800: "#281500",
          900: "#140b00",
        },
        gray: {
          0: "#f7f7f7",
          100: "#e6e6e6",
          200: "#d0d0d0",
          300: "#a0a0a0",
          400: "#808080",
          500: "#605959",
          600: "#403c3c",
          700: "#302828",
          800: "#201c1c",
          900: "#100e0e",
        },
      },
    },
  },
  
  plugins: [require("@tailwindcss/typography")],
};
