import { achievements } from "../../../../data/achievement";
import { AchievementContainer } from "../AchievementContainer";
import { AchievementNumbersContainer } from "./styles";

export function AchievementNumbers() {
  return (
    <AchievementNumbersContainer>
      {achievements.map((achievement) => (
        <AchievementContainer key={achievement.description} data={achievement} />
      ))}
    </AchievementNumbersContainer>
  );
}
