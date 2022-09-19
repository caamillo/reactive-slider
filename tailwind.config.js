/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.js', './src/**/*.js', './public/*.html'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '800px',
        lg: '976px',
        xl: '1440px'
      },
    },
  },
  plugins: [],
}
