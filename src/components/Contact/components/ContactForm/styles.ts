import { styled } from "../../../../styles";

export const ContactFormContainer = styled("form", {
  background: "$base-white",
  padding: "2rem",
  borderRadius: 16,
  width: "90%",
  maxWidth: 500,

  button: {
    width: "100%",
    marginTop: "2rem",
    height: "3rem",
    borderRadius: 8,
    border: 0,
    background: "$brand-yellow",

    "&:hover": {
      transition: "0.2s",
      filter: "brightness(0.9)",
    },

    "&:disabled": {
      background: "$base-error",
      cursor: "not-allowed",
    },
  },
});

export const FieldContainer = styled("div", {
  "& + div": {
    marginTop: "2rem",
  },

  label: {
    fontFamily: "$lato",
  },
});
