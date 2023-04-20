import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceContainer } from "./styles";
import { BackgroundImage } from "../BackgroundImage";
import { Title } from "../Typography";
import { Timeline } from "./components/Timeline";
import { experiences } from "../../data/experiences";

export function Experience() {
  
  return (
    <ExperienceContainer>
      <Title size="m">Experiência</Title>
      <VerticalTimeline>
        {experiences.map((experience) => (
          <Timeline experience={experience as any}  />
        ))}
      </VerticalTimeline>
      <BackgroundImage sizeBackground="large" />
    </ExperienceContainer>
  );
}
