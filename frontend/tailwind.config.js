/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        main_bg: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,.7)), url('../src/assets/bg.webp')",
      }
    },
  },
  plugins: [],
}

