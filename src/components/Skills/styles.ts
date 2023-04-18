import { styled } from "../../../styles";

export const TechnologiesContainer = styled("section", {
  marginTop: "2rem",
  position: "relative",

  img: {
    height: 700
  }
});

export const TechnologiesContent = styled("div", {
  marginTop: "2rem",
  maxWidth: 1120,
  margin: "0 auto",
});

export const TechnologiesCardContainer = styled("div", {
  marginTop: "2rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "2rem",
});

