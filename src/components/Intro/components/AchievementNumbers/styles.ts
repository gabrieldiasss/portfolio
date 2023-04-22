import { styled } from "../../../../styles";

export const AchievementNumbersContainer = styled("div", {
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
  
    /* div: {
      textAlign: "center",
    }, */
  });