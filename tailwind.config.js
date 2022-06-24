const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ['src/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Merriweather', ...defaultTheme.fontFamily.serif],
        'mono': ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
    }
  },
  plugins: [],
}
