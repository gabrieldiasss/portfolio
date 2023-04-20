import { styled } from "../../styles";

export const FooterContainer = styled("footer", {
  backgroundColor: "#2E3B59",
});

export const FooterContent = styled("div", {
  display: "flex",
  alignItems: "center",
  maxWidth: 1120,
  margin: "0 auto",
  padding: "1rem",
  justifyContent: "space-between",
});

export const LogoContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const CopyrightContainer = styled("div", {
  gap: "1rem",
  display: "flex",
  alignItems: "center",
});
