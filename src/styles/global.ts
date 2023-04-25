import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    background: "$base-background",
    "-webkit-font-smoorhing": "antialiased",
  },

  html: {
    height: "100vh",
    scrollBehavior: "smooth",

    "@laptop": {
      fontSize: "80%",
    },
  },

  "input, textarea": {
    fontFamily: "$poppins",
    color: "$base-text",

    "&::placeholder": {
      color: "$base-label",
    },
  },

  button: {
    fontFamily: "$poppins",
    color: "$base-title",
    cursor: "pointer",
    fontWeight: 600,
  },

  ul: {
    listStyle: "none",
  },

  a: {
    textDecoration: "none",
    color: "$base-text",
  },

  img: {
    cursor: "pointer",
  },

  
});
