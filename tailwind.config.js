const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      width: {
        "sidebar": "60px",
        "menu": "330px",
        'dropdown-large': '400px',

      },
      colors: {
        green: {
          ...colors.green,
          '500': "#78a300",
        },
        teal: {
          ...colors.teal,
          '900': "#03363D",
        },
        gray: {
          ...colors.gray,
          "100": "#F8F9F9",
        }
      }
    }
  },
  variants: {
    cursor: ["responsive", "focus"],
    width: ["responsive", "focus"],
    display: ['responsive', 'group-hover'],
  },
  plugins: []
};
