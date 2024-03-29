/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        'gray-black': 'rgb(25,25,25)',
        'light-gray' : 'rgb(240,240,240)',
        'select' : 'rgb(94,94,94)',
        'strong' : 'rgb(194,194,193)',
        'select-hover' : 'rgb(160,160,160)', 
        'alert' : 'rgb(61,61,60)',
        'button-bg' : '#191919',
        'error-red' : 'rgb(193,59,47)'
      },
      spacing: {
        '44': '44%',
        '56': '56%',
        '366': '366px',
        '230' : '230px',
      },
      lineHeight: {
        'leading-11': '3rem',
      }
    },
  },
  plugins: [],
}

