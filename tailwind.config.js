module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      slate: {
        light: "#2F363D",
        DEFAULT: "#24292E",
        dark: "#151617"
      },
      snow: {
        light: "#FFFFFF",
        DEFAULT: "#F6F8FA",
        dark: "#E1E6EB"
      },
      ice: "#89DCEE",
      sky: "#0165E2",
      purple: "#6B7ABB"
    },
    extend: {
      keyframes: {
        slide: {
          "0%, 100%": {transform: "translateX(0px)"},
          "50%": {transform: "translateX(3px)"}
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "slide": "slide 3s linear infinite",
        "wiggle": "wiggle 1s linear infinite"

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
