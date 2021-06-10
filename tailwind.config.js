module.exports = {
  // purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false,
  theme: {
    textShadow: {
      // defaults to {}
      default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      lg: "0 2px 10px rgba(0, 0, 0, 0.5)"
    },
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
    textShadow: ["responsive"],
    extend: {}
  },
  plugins: [
    require("tailwindcss-typography")({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      componentPrefix: "c-" // the prefix to use for text style classes
    })
  ]
}
