import { ReactNode } from "react";
import { Paragraph, Title } from "../../../Typography";
import { TechnologiesCardContainer } from "./styles";

interface TechnologiesCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function TechnologiesCard({
  title,
  description,
  icon,
}: TechnologiesCardProps) {
  return (
    <TechnologiesCardContainer>
      {icon}
      <Title>{title}</Title>
      <Paragraph fonts="lato">{description}</Paragraph>
    </TechnologiesCardContainer>
  );
}
