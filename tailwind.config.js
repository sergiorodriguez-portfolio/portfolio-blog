module.exports = {
  // purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['"Damion"', "cursive"],
        barlow: [
          '"Barlow Semi Condensed"',
          '"sans-serif"',
          "Damion",
          "cursive"
        ],
        roboto: ["Roboto", '"sans-serif"']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
