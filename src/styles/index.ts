import { createStitches } from "@stitches/react";

export const {
  config,
  globalCss,
  keyframes,
  theme,
  css,
  getCssText,
  createTheme,
  styled,
} = createStitches({
  theme: {
    colors: {
      "base-white": "#FFFFFF",
      "base-background": "#F3F6FD",
      "base-card": "#F3F2F2",
      "base-input": "#EDEDED",
      "base-button": "#E6E5E5",
      "base-hover": "#D7D5D5",
      "base-label": "#8D8686",
      "base-text": "#574F4D",
      "base-subtitle": "#403937",
      "base-title": "#272221",
      "base-error": "#f84747",
      "base-border": "#E6E6E6",
      "base-tag": "#5D5D5D",
      "brand-yellow": "#FFEF5C",
      "brand-linkedin": "#0077B5",
      "brand-youtube": "#FF0000",
    },
    fontSizes: {
      "title-title-xl": "4rem",
      "title-title-l": "3.5rem",
      "title-title-m": "2rem",
      "title-title-s": "1.25rem",
      "title-title-xs": "1.125rem",
      "text-regular-l": "1.125rem",
      "text-bold-l": "1.25rem",
      "text-regular-m": "1rem",
      "text-bold-m": "1rem",
      "text-regular-s": "0.875rem",
      "text-bold-s": "0.75rem",
      "components-tag": "0.625rem",
      "components-button-g": "0.875rem",
      "components-button-s": "0.75rem",
    },
    shadows: {
      default: "8px 8px 16px #c9c9c9, -8px -8px 16px #ffffff"
    },
    fonts: {
      lato: "Lato",
      poppins: "Poppins",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  media: {
    laptopG: "(min-width: 1025px)",
    laptop: "(max-width: 1024px)",
    tablet: "(max-width: 768px)",
    mobileXGMax: "(max-width: 600px)",
    mobileXGMin: "(min-width: 600px)",
    mobileG: "(max-width: 500px)",
    mobileM: "(max-width: 385px)",
    mobileP: "(min-width: 320px)"
  },
});
