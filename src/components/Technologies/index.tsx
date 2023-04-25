import { Paragraph, Title } from "../Typography";
import {
  TechnologiesCardContainer,
  TechnologiesContainer,
  TechnologiesContent,
} from "./styles";
import { BackgroundImage } from "../BackgroundImage";
import { TechnologiesCard } from "./components/TechnologiesCard";
import { technologies } from "../../data/technologies";

export function Skills() {
  return (
    <TechnologiesContainer data-aos="fade-up">
      <TechnologiesContent>
        <Title>Tecnologias</Title>
        <Paragraph size="m" fonts="poppins">
          Experienciei o uso dessas tecnologias no contexto do desenvolvimento
          web.
        </Paragraph>

        <TechnologiesCardContainer>
          {technologies.map((technologie) => (
            <TechnologiesCard
              key={technologie.title}
              title={technologie.title}
              description={technologie.description}
              icon={technologie.icon}
            />
          ))}
        </TechnologiesCardContainer>
      </TechnologiesContent>

      <BackgroundImage sizeBackground="small" />
    </TechnologiesContainer>
  );
}
