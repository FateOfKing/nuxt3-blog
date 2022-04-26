const colors = require('tailwindcss/colors')

module.exports = {
  // prefix: '',
  content: [],
  theme: {
    extend: {},
    colors: {
      'black-bg-color': '#333',
      "gray-page-bg-color": '#f4f5f5',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'maxmd': {
        'max': '1023px'
      },
      // => @media (max-width: 1023px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },

  },
  plugins: [],

  corePlugins: {}
}