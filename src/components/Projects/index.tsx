import { BackgroundImage } from "../BackgroundImage";
import { CardProject } from "../CardProject";
import { CardProjectSecondary } from "../CardProjectSecondary";
import { Title } from "../Typography";
import {
  FilterProjects,
  HeaderProjects,
  MainPersonalProjects,
  PersonalProjectContainer,
  ProjectsContainer,
  ProjectsContent,
  SecondaryPersonalProjects,
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

        <PersonalProjectContainer>
          <MainPersonalProjects>
            <CardProject />
            <CardProject />
          </MainPersonalProjects>

          <SecondaryPersonalProjects>
            <CardProjectSecondary />
          </SecondaryPersonalProjects>
        </PersonalProjectContainer>
      </ProjectsContent>

      <BackgroundImage />
    </ProjectsContainer>
  );
}
