import { Paragraph } from "../../../Typography";
import { Title } from "../../../Typography";
import { CardProjectContainer, ProjectDesktop, ProjectMobile } from "./styles";
import Project from "../../../../assets/project.png";
import Image from "next/image";
import { TagSection } from "../TagSection";

export function CardProject() {
  return (
    <CardProjectContainer>
      <ProjectDesktop>
        <Title size="s">Github blog</Title>
        <Paragraph size="m" fonts="lato" weight="regular">
          Github Blog é um blog baseado em repositórios do GitHub
        </Paragraph>
        <Image src={Project} width={undefined} height={200} alt="" />
        <TagSection />
      </ProjectDesktop>

      <ProjectMobile></ProjectMobile>
    </CardProjectContainer>
  );
}
