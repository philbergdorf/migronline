import konstaConfig from 'konsta/config'

/** @type {import('tailwindcss').Config} */
export default konstaConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // App is light-only ("Harvest"); never auto-switch to dark.
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: '#23543A',
        primary: '#3DA35D',
        cream: '#FBF7EF',
        surface: '#FFFDF8',
        sand: '#F2ECDF',
        hairline: '#ece5d6',
        ink: '#2A2A24',
        muted: '#6b6656',
        label: '#6f6a58',
        berry: '#B03A6E',
        citrus: '#E8952B',
        tomato: '#D9503A',
      },
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        sans: ['Nunito', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        chip: '12px',
        btn: '16px',
        card: '24px',
        sheet: '36px',
      },
      boxShadow: {
        cta: '0 10px 22px -8px rgba(35,84,58,.5)',
        checkout: '0 14px 28px -10px rgba(35,84,58,.6)',
        soft: '0 4px 12px -6px rgba(42,42,36,.25)',
        chip: '0 3px 8px -5px rgba(42,42,36,.3)',
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(.34,1.56,.64,1)',
      },
    },
  },
  plugins: [],
})
