import { styled } from "../../styles";

export const AboutContainer = styled("section", {
  padding: "2rem 0",
  marginTop: "2rem",
});

export const AboutContent = styled("div", {
  display: "flex",
  alignItems: "stretch",
  maxWidth: 980,
  width: "90%",
  margin: "0 auto",
  marginTop: "2rem",

  "@laptop": {
    flexDirection: "column",

    img: {
      width: "100%",
      height: "auto",
    },
  },

  gap: "2rem",
  p: {
    lineHeight: "160%",
  },
});

export const AboutInfos = styled("div", {});
