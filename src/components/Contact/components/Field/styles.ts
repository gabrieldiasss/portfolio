import { styled } from "../../../../../styles";

export const FieldContainer = styled("div", {

    "& + div": {
        marginTop: "2rem"
    },

    label: {
        fontFamily: "$lato"
    },
})