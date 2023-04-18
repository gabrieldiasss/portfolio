import { techs } from "../../data/techs";
import { StaticImageData } from "next/image";
import { BallCanvas } from "../canvas";
import { Paragraph, Title } from "../Typography";
import { SkillsContainer, SkillsContent } from "./styles";
/* 
interface Ball {
    name: string;
    icon: StaticImageData;
  } */

export function Skills() {
  return (
    <SkillsContainer>
      <Title>Skills</Title>
      <Paragraph size="m" fonts="lato">Possuo uma sólida experiência nas tecnologias mencionadas.</Paragraph>

      <SkillsContent>
        {techs.map((tech) => (
          <div key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </SkillsContent>
    </SkillsContainer>
  );
}
