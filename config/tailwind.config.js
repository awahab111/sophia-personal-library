/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      digital: ["DS-Digital", "sans-serif"]
    },
    extend: {
      colors: {
        'off-white': '#F3F3F7',
      },
    }
  },
  plugins: [],
}

