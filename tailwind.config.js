const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/**/**/*.{js,ts,jsx,tsx}',
    './utils/*.{js,ts,jsx,tsx}',
    './utils/**/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#5A7184',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111010'
        },
        'blue-gray': '#94A3B8',
        'blue-gray-2': '#475569',
        primary: '#8E4985',
        secondary: '#183B56',
        'primary-pink': '#F6D3E1',
        'blue-light': '#DCEDF6',
        'blue-light-2': '#7AE5FF',
        brown: {
          500: '#6C606B',
          800: '#221314'
        },
        'loyal-blue': '#183b56',
        'tint-blue': '#91C8E4',
        'tint-pink': '#f8d4e4',
        'royal-blue': '#1c3c54',
        nav: 'rgba(255, 255, 255, 0.6)',
        scroll: 'rgba(255, 255, 255, 0.6);'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700')
              },
              code: { color: theme('colors.blue.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        }
      }),
      height: {
        '66v': '66vh',
        '72v': '72vh',
        '80v': '80vh'
      },
      boxShadow: {
        'box-1': '5px 30px 56.13px 0px rgba(220, 237, 246, 0.70)'
      }
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
