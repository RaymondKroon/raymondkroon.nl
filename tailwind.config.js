/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {  },
    extend: {
      colors: {
        "off-white": '#fcf5ea',
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

