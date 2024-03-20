/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ["Outfit", 'sans-serif'],
        'quicksand': ["Quicksand", 'sans-serif']
      },
      colors: {
        'yellow': '#F8B700',
        'horde': '#E02929',
        'alliance': '#6699FF'
      }
    },
  },
  plugins: [],
}