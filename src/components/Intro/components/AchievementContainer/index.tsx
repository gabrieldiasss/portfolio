import { Paragraph, Title } from "../../../Typography";
import CountUp from "react-countup";
import { AchievementContainerStyles } from "./styles";

interface AchievementContainerProps {
    data: {
        count: number;
        duration: number;
        description: string;
    }
}

export function AchievementContainer({data}: AchievementContainerProps) {
  return (
    <AchievementContainerStyles>
      <Title>
      { data.count > 1000 ? "+" : "" }<CountUp start={0} end={data.count} duration={data.duration} delay={0} />
      </Title>
      <Paragraph size="s" fonts="poppins">
        {data.description}
      </Paragraph>
    </AchievementContainerStyles>
  );
}
