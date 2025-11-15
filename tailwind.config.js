/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // your main primary
          light: "#3b82f6", // optional
          dark: "#1e40af", // optional
        },
      },
    },
  },
  plugins: [],
};
