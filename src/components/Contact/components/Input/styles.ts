import { styled } from "../../../../../styles";

export const InputContainer = styled("div", {

})

export const InputStyled = styled("input", {

    marginTop: "0.5rem",
    padding: "0 1rem",
    width: "95%",

    height: "3rem",
    borderRadius: 8,
    border: "2px solid $base-border",

    "&:focus": {
        border: "2px solid $brand-yellow",
        outline: "none"
    }
})