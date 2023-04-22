import { styled } from "../../styles/index";
import LinkRouter from "next/link";

export const HeaderContainer = styled("header", {
  display: "flex",
  alignItems: "center",
  maxWidth: 980,
  margin: "0 auto",
  background: "$base-white",
  boxShadow: "2px 2px 7px #D7D5D5",
  borderRadius: 100,
  width: "90%",


  marginTop: "2rem",

  height: "5rem",
});

export const HeaderContent = styled("div", {
  display: "flex",
  alignItems: "center",


  justifyContent: "space-between",
  padding: "0 2rem",
  flex: 1,

  div: {
    display: "flex",
    alignItems: 'center',

    svg: {
      "@laptopG": {
        display: "none",
      },
  
      "@laptop": {
        display: "block",
      },
    },

    "@laptop": {
      display: "flex",
      justifyContent: "space-between",
      flex: 1,
    },
  },
});

export const Navigation = styled("nav", {

  ul: {
    display: "flex",
    marginLeft: "1rem",

    "@laptop": {
      display: "none"
    }
  },

  li: {
    padding: "0 1rem",
  },
});

export const Link = styled(LinkRouter, {
  padding: "0 1rem",
  fontSize: "1rem",
  fontFamily: "$lato",
  cursor: "pointer",
  fontWeight: 700,

  variants: {
    socialNetwork: {
      linkedin: {
        "&:hover": {
          color: "$brand-linkedin",
        },
      },
      youtube: {
        "&:hover": {
          color: "$brand-youtube",
        },
      },
      github: {
        "&:hover": {
          color: "#000000",
        },
      },
    },
  },
});

export const Button = styled("button", {
  background: "$brand-yellow",
  border: 0,
  outline: "none",
  height: "2.5rem",
  padding: "0 2rem",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  borderRadius: 100,

  "&:hover": {
    transition: ".3s",
    filter: "brightness(0.95)",
  },
});
