import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
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
        "brand-dark": "#BD6969",
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
} satisfies Config;
