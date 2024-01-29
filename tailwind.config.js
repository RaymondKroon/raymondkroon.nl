/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {  },
    extend: {
      fontFamily: {'sans': ['"Montserrat Variable"', ...defaultTheme.fontFamily.sans]},
      colors: {
        "off-white": '#f7e7ce',
        theme : {
          4: '#126973',
          3: '#618C74',
          1: '#F2B56B',
          2: '#F26938',
          5: '#A65341',
        }
      },
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
    },
  },
  plugins: [],
}

