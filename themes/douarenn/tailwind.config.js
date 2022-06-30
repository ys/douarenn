const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: "media",
  plugins: [require('@tailwindcss/typography'),],
  variants: {
    extend: {
      typography: ["dark"],
    }
  },
  theme: {
    extend: {
    colors: {
      gray: colors.warmGray,
      indigo: colors.indigo,
      teal: colors.teal,
      orange: colors.orange,
      amber: colors.amber,
      bluegray: colors.blueGray,
      rose: colors.rose,
      red: colors.red,
      douarenn: {
        "50": "#32707d",
        "100": "#286673",
        "200": "#1e5c69",
        "300": "#14525f",
        "400": "#0a4855",
        "500": "#003e4b",
        "600": "#003441",
        "700": "#002a37",
        "800": "#00202d",
        "900": "#001623"
      },
      dark: "#2d2f34",
      darker: "#1F2023",
      primary: "#003E4B",
    },
      fontFamily: {
        mono: [
          "rokkitt",
          "-ui-monospace",
          "SFMono-Regular",
          "ui-monospace",
          "Monaco",
          "Andale Mono",
          "Ubuntu Mono",
          "monospace"
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif"
        ],
        serif: [
          "-apple-system-ui-serif",
          "Iowan Old Style",
          "Apple Garamond",
          "Baskerville",
          "Times New Roman",
          "Droid Serif",
          "Times",
          "Source Serif Pro",
          "serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol"
        ],
        body: ['"rokkitt"', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              marginTop: 0,
              marginBottom: 0
            }
          }
        }
      }
    }
  }
};
