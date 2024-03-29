module.exports = {
  purge: [
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'telebyte-green': '#7CA45D',
      },
    },

    fontFamily: {
      body: ['Rubik'],
    },
  },
  variants: {
    extend: {
      padding: ['first'],
      borderWidth: ['first'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
