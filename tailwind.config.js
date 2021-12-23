/** @format */

module.exports = {
  content: [
    './pages/index.js',
    './pages/kitchen/index.js',
    './components/navbar.js',
    './components/dropdown.js',
  ],
  theme: {
    minWidth: {
      '4/5': '80%',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
