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
        'alliance': '#6699FF',
        'horde': '#E02929',
        'death-knight': '#C41F3B',
        'demon-hunter': '#A330C9',
        'druid': '#FF7D0A',
        'evoker': '#33937F',
        'hunter': '#ABD473',
        'mage': '#69CCF0',
        'monk': '#00FF96',
        'paladin': '#F58CBA',
        'priest': '#FFFFFF',
        'rogue': '#FFF569',
        'shaman': '#0070DE',
        'warlock': '#9482C9',
        'warrior': '#C79C6E'
      }
    },
  },
  plugins: [],
}