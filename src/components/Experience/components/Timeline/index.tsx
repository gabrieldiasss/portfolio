import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Image from "next/image";
import { Paragraph, Title } from "../../../Typography";

interface TimelineProps {
  experience: {
    role: string;
    company: string;
    description: string;
    date: string;
    icon: string;
    color: string;
  };
}

export function Timeline({ experience }: TimelineProps) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: `${experience.color}`, color: "#A4A4A4"}}
      contentArrowStyle={{ borderRight: `7px solid  ${experience.color}` }}
      date={experience.date}
      iconStyle={{
        background: "#655ED2",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
      icon={<Image src={experience.icon} width={30} height={30} alt="" />}
    >
      <Title color="white" className="vertical-timeline-element-title">
        {experience.role}
      </Title>
      <Paragraph
        style={{ margin: 0 }}
        fonts="lato"
        color="gray-100"
        size="s"
        weight="bold"
        className="vertical-timeline-element-subtitle"
      >
        {experience.company}
      </Paragraph>
      <Paragraph color="gray-100" fonts="lato">
        {experience.description}
      </Paragraph>
    </VerticalTimelineElement>
  );
}
