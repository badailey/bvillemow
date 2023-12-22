/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              margin: "auto",
            },
          },
        },
      },
      colors: {
        brand: "#EF9B9B",
        "brand-dark": "#E86D6D",
        "brand-light": "#F6C5C5",
        "brand-gray-lightest": "#E5E5E5",
        "brand-gray-light": "#CCCCCC",
        "brand-gray-medium": "#818181",
        "brand-gray-dark": "#6B6B6B",
        "brand-gray-darkest": "#333333"
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

