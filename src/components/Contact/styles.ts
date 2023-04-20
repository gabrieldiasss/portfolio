import { styled } from "../../../styles";

export const ContactContainer = styled("section", {
    marginTop: "4rem",
    paddingBottom: "2rem",
})

export const ContactContent = styled("div", {
    maxWidth: 1120,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
})

export const ContactInfos = styled("div", {
    p: {
        maxWidth: 500
    },

    img: {
        marginTop: "2rem"
    }
})

export const ContactForm = styled("div", {
    background: "$base-white",
    padding: "2rem",
    borderRadius: 16,
    width: "90%",

    button: {
        width: "100%",
        marginTop: "2rem",
        height: "3rem",
        borderRadius: 8,
        border: 0,
        background: "$brand-yellow",

        "&:hover": {
            transition: "0.2s",
            filter: "brightness(0.9)"
        }
    }
})
