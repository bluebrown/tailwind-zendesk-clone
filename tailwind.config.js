module.exports = {
  theme: {
    extend: {
      width: {
        "15px": "15px",
        "14": "60px",
        "72": "330px"
      },
      colors: {
        zengreen: "#78a300",
        "teal-1000": "#03363D",
        gray: {
          "100": "#F8F9F9",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121"
        }
      }
    }
  },
  variants: {
    borderWidth: ["responsive", "last"],
    borderRadius: ["responsive", "first", "last"]
  },
  plugins: []
};
