/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require('@tailwindcss/typography')],
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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // '--tw-prose-body': theme('colors.pink[800]'),
            '--tw-prose-headings': theme('colors.theme.4'),
            // '--tw-prose-lead': theme('colors.pink[700]'),
            // '--tw-prose-links': theme('colors.pink[900]'),
            // '--tw-prose-bold': theme('colors.pink[900]'),
            // '--tw-prose-counters': theme('colors.pink[600]'),
            // '--tw-prose-bullets': theme('colors.pink[400]'),
            // '--tw-prose-hr': theme('colors.pink[300]'),
            // '--tw-prose-quotes': theme('colors.pink[900]'),
            // '--tw-prose-quote-borders': theme('colors.pink[300]'),
            // '--tw-prose-captions': theme('colors.pink[700]'),
            '--tw-prose-code': theme('colors.black'),
            '--tw-prose-pre-code': theme('colors.black'),
            '--tw-prose-pre-bg': theme('colors.theme.1'),
            // '--tw-prose-th-borders': theme('colors.pink[300]'),
            // '--tw-prose-td-borders': theme('colors.pink[200]'),
            // '--tw-prose-invert-body': theme('colors.pink[200]'),
            // '--tw-prose-invert-headings': theme('colors.white'),
            // '--tw-prose-invert-lead': theme('colors.pink[300]'),
            // '--tw-prose-invert-links': theme('colors.white'),
            // '--tw-prose-invert-bold': theme('colors.white'),
            // '--tw-prose-invert-counters': theme('colors.pink[400]'),
            // '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            // '--tw-prose-invert-hr': theme('colors.pink[700]'),
            // '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            // '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            // '--tw-prose-invert-captions': theme('colors.pink[400]'),
            // '--tw-prose-invert-code': theme('colors.white'),
            // '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            // '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            // '--tw-prose-invert-td-borders': theme('colors.pink[700]'),

            ':is(h1,h2,h3,h4,h5,h6) a': {
              color: 'var(--tw-prose-headings)',
              textDecoration: 'none',
              fontWeight: 'inherit'
            },
          },
        },
      })
    },
  }
}

