import { styled } from "../../../../styles";

export const CardProjectContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "2rem",
});

const ProjectBase = styled("div", {
  backgroundColor: "$base-white",
  borderRadius: 8,
  padding: "2rem",
  boxShadow: "$default",
});

export const ProjectDesktop = styled(ProjectBase, {
  img: {
    width: "100%",
    objectFit: "cover",
    marginTop: "1rem",
  },
});

export const ProjectMobile = styled(ProjectBase, {
  backgroundColor: "$base-white",
});
