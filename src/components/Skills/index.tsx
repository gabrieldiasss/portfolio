import { Paragraph, Title } from "../Typography";
import {
  TechnologiesCardContainer,
  TechnologiesContainer,
  TechnologiesContent,
} from "./styles";
import { BackgroundImage } from "../BackgroundImage";
import { TechnologiesCard } from "../TechnologiesCard";

const technologies = [
  {
    title: "Front-end",
    description:
      "Para o desenvolvimento de interfaces, utilizo frequentemente HTML,CSS, Javascript, Typescript, ReactJS, NextJS. Consumindo API's Rest e GraphQl.",
  },
  {
    title: "Back-end",
    description:
      "Apesar de ser um desenvolvedor focado em Front-end, também já construi API's Rest com NodeJS e MongoDB.",
  },
  {
    title: "UI/UX",
    description:
      "Faço a criação do design para meus projetos através do Figma.",
  },
  {
    title: "Versionamento",
    description:
      "Na minha experiência anterior, utilizei amplamente o Git e o GitHub em meu trabalho, aplicando práticas como o GitFlow, gerenciando múltiplas branches, abrindo pull requests e participando de revisões de código.",
  },
];

export function Skills() {
  return (
    <TechnologiesContainer>
      <TechnologiesContent>
        <Title>Tecnologias</Title>
        <Paragraph size="m" fonts="lato">
          Trabalhei com essas tecnologias dentro do desenvolvimento web.
        </Paragraph>

        <TechnologiesCardContainer>
          {technologies.map((technologie) => (
            <TechnologiesCard key={technologie.title} title={technologie.title} description={technologie.description} />
          ))}
        </TechnologiesCardContainer>
      </TechnologiesContent>

      <BackgroundImage sizeBackground="small" />
    </TechnologiesContainer>
  );
}
