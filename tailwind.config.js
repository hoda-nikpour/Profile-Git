// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        greatvibes: ['"Great Vibes"', 'cursive'], 
        playfair: ['"Playfair Display"', 'serif'], // For text1 and text2
      },
    },
  },
  plugins: [],
}
