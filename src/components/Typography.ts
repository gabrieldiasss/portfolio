import { styled } from "../../styles";

export const Title = styled("h1", {
  color: "$base-title",
  fontFamily: "$poppins",

  variants: {
    size: {
      xl: {
        fontSize: "$title-title-xl",
      },
      l: {
        fontSize: "$title-title-l",
      },
      m: {
        fontSize: "$title-title-m",
      },
      s: {
        fontSize: "$title-title-s",
      },
    },
    weight: {
      regular: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semibold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
    },
  },
});

export const Paragraph = styled("p", {
  color: "$base-text",

  variants: {
    size: {
      l: {
        fontSize: "$text-regular-l",
      },
      m: {
        fontSize: "$text-regular-m",
      },
      s: {
        fontSize: "$text-regular-s",
      },
    },

    fonts: {
      poppins: {
        fontFamily: "$poppins",
      },
    },

    weight: {
      regular: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semibold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
    },
  },
});
