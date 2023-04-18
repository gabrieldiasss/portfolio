import { styled } from "../../../styles";

export const ProjectsContainer = styled("section", {
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  padding: "2rem 0",
  marginTop: "2rem",
  position: "relative",
});

export const HeaderProjects = styled("header", {
  display: "flex",
  flex: 1,
  justifyContent: "space-between"
});

export const FilterProjects = styled("div", {
    display: "flex",
    gap: "1rem"
});

export const Tag = styled('div', {
    fontFamily: "$poppins",
    fontWeight: 500,
    color: "$base-tag",
    border: "2px solid $base-border",
    padding: "0.25rem 1rem",
    borderRadius: 8,
    cursor: "pointer"
});

export const ProjectsContent = styled("div", {
  maxWidth: 1120,
  margin: "0 auto",
  marginTop: "2rem",

  gap: "2rem",
});

export const PersonalProjectContainer = styled("main", {
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem"
})  

export const MainPersonalProjects = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem"
})

export const SecondaryPersonalProjects = styled("div", {

})