import { CardProject } from "./components/CardProject";
import { Title } from "../Typography";
import {
  FilterProjects,
  HeaderProjects,
  MainPersonalProjects,
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

        <MainPersonalProjects>
          <CardProject />
          <CardProject />
        </MainPersonalProjects>
        <CardProject />
        <CardProject />
      </ProjectsContent>
    </ProjectsContainer>
  );
}
