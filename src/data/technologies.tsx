import {
  Database,
  FigmaLogo,
  GithubLogo,
  IconProps,
  Laptop,
} from "phosphor-react";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

interface Techs {
  title: string;
  description: string;
  icon: ReactNode;
}

export const technologies: Techs[] = [
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
