/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
      fontFamily:{
        'roboto-mono':["Roboto Mono", "monospace"],
        'nunito':["Nunito", "sans-serif"]
      },
  theme: {
    extend: {},
  },
  plugins: [],
}

