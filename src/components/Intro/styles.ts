import { styled } from "../../../styles";

export const IntroContainer = styled("div", {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",

    marginTop: "2rem",

    img: {
        borderRadius: "50%"
    },

    p: {
        maxWidth: 800,
        textAlign: "center"
    }
});

export const AchievementNumbers = styled("div", {
    display: "flex",
    alignItems: "center",
    backgroundColor: "$base-white",
    padding: "2rem",

    flex: 1,

    marginTop: "1rem",

    gap: "3rem",
    borderRadius: 8,

    div: {
        textAlign: "center"
    }
})