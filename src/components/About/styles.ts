import { styled } from "../../../styles";

export const AboutContainer = styled("section", {
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  padding: "2rem 0",
  marginTop: "2rem",
});

export const AboutContent = styled("div", {
  display: "flex",
  alignItems: "stretch",
  maxWidth: 1120,
  margin: "0 auto",
  marginTop: "2rem",

  gap: "2rem",
  p: {
    lineHeight: "200%",
  },
});

export const AboutInfos = styled("div", {});
