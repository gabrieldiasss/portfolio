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

export const AchievementNumbers = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  backgroundColor: "$base-white",
  padding: "2rem",

  flexWrap: "wrap",

  flex: 1,

  marginTop: "1rem",

  gap: "3rem",
  borderRadius: 8,

  "@tablet": {
    gridTemplateColumns: "1fr 1fr"
  },

  div: {
    textAlign: "center",
  },
});

export const TitleContainer = styled("div", {
  background: "$brand-yellow",
  marginTop: "2rem",
  padding: "0.25rem 3rem",
  borderRadius: 8,
});
