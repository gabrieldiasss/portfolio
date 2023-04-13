import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoorhing": "antialiased",
  },

  "input, textarea": {
    fontFamily: "$title",
    color: "$base-label",
  },

  button: {
    fontFamily: "$title",
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
});
