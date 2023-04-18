import { Paragraph, Title } from "../Typography";
import {
  CardProjectSecondaryContainer,
  CardProjectSecondaryContent,
} from "./styles";
import Project from "../../assets/project.png";
import Image from "next/image";
import { TagSection } from "../TagSection";

export function CardProjectSecondary() {
  return (
    <CardProjectSecondaryContainer>
      <Image src={Project} width={230} height={150} alt="" />
      <CardProjectSecondaryContent>
        <div>
          <Title size="s" weight="semibold">
            Projeto do curso
          </Title>
          <Paragraph size="m" fonts="lato">
            Uma história inspiradora de coragem e criatividade, à medida que
            enfrentamos obstáculos e abraçamos a mudança.
          </Paragraph>
        </div>

        <TagSection />
      </CardProjectSecondaryContent>
    </CardProjectSecondaryContainer>
  );
}
