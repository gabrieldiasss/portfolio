import { Paragraph, Title } from "../Typography";
import {
  TechnologiesCardContainer,
  TechnologiesContainer,
  TechnologiesContent,
} from "./styles";
import { BackgroundImage } from "../BackgroundImage";
import { TechnologiesCard } from "./components/TechnologiesCard";
import { Database, FigmaLogo, GithubLogo, Laptop } from "phosphor-react";

const technologies = [
  {
    title: "Front-end",
    description:
      "Para o desenvolvimento de interfaces, utilizo frequentemente HTML,CSS, Javascript, Typescript, ReactJS, NextJS. Consumindo API's Rest e GraphQl.",
    icon: <Laptop size={32} color="#61DAFB" />,
  },
  {
    title: "Back-end",
    description:
      "Apesar de ser um desenvolvedor focado em Front-end, também já construi API's Rest com NodeJS e MongoDB.",
    icon: <Database size={32} color="#55D4C1" />,
  },
  {
    title: "UI/UX",
    description:
      "Faço a criação do design para meus projetos através do Figma.",
    icon: <FigmaLogo size={32} color="#8047F8" />,
  },
  {
    title: "Versionamento",
    description:
      "Na minha experiência anterior, utilizei amplamente o Git e o GitHub em meu trabalho, aplicando práticas como o GitFlow, gerenciando múltiplas branches, abrindo pull requests e participando de revisões de código.",
    icon: <GithubLogo size={32} />,
  },
];

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
