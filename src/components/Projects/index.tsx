import { CardProject } from "../CardProject";
import { Title } from "../Typography";
import {
  FilterProjects,
  HeaderProjects,
  ProjectsContainer,
  ProjectsContent,
  Tag,
} from "./styles";

export function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsContent>
        <HeaderProjects>
          <Title>Meus Projetos</Title>

          <FilterProjects>
            <Tag>ReactJS</Tag>
            <Tag>ReactJS</Tag>
          </FilterProjects>
        </HeaderProjects>

        <CardProject />
        <CardProject />
      </ProjectsContent>
    </ProjectsContainer>
  );
}
