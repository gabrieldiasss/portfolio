import { styled } from "../../styles";

export const IntroContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  width: "90%",
  margin: "0 auto",

  "@tablet": {
    textAlign: "center",
  },

  marginTop: "2rem",

  img: {
    borderRadius: "50%",
  },

  p: {
    maxWidth: 800,
    textAlign: "center",
  },
});

export const TitleContainer = styled("div", {
  background: "$brand-yellow",
  marginTop: "2rem",
  padding: "0.25rem 3rem",
  borderRadius: 8,
});
