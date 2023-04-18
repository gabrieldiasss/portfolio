import { Paragraph, Title } from "../Typography";
import { TechnologiesCardContainer } from "./styles";

interface TechnologiesCardProps {
    title: string,
    description: string
}

export function TechnologiesCard({ title, description }: TechnologiesCardProps) {
  return (
    <TechnologiesCardContainer>
      <Title>{title}</Title>
      <Paragraph fonts="lato">
        {description}
      </Paragraph>
    </TechnologiesCardContainer>
  );
}
