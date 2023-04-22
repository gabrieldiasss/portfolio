import { styled } from "../../styles";

export const ContactContainer = styled("section", {
  marginTop: "4rem",
  paddingBottom: "2rem",
});

export const ContactContent = styled("div", {
  maxWidth: 1120,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",

  width: "90%",
  "@laptop": {
    gap: "2rem",
    gridTemplateColumns: "1fr",
  }
});

export const ContactInfos = styled("div", {
  p: {
    maxWidth: 500,
  },

  img: {
    marginTop: "2rem",
  },
});
