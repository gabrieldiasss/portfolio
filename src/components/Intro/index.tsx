import Image, { ImageLoader } from "next/image";
import { Paragraph, Title } from "../Typography";
import { AchievementNumbers, IntroContainer, TitleContainer } from "./styles";
import { StaticImageData } from "next/image";

const ProfileImage = ({ src }: StaticImageData) => {
  return `https://github.com/${src}`;
};

export function Intro() {
  return (
    <IntroContainer>
      <Image
        loader={ProfileImage as ImageLoader}
        src={"/gabrieldiasss.png"}
        width={70}
        height={70}
        alt="Gabriel Dias"
      />
      <TitleContainer>
        <Title size="xl" weight="medium">
          Olá, sou Gabriel
        </Title>
      </TitleContainer>
      <Title size="l" weight="medium">
        um desenvolvedor web com
      </Title>
      <Paragraph fonts="poppins" weight="regular" size="l">
        grande paixão pela criação de interfaces de usuário inovadoras e
        funcionais, sempre buscando aprimorar suas habilidades e se manter
        atualizado com as mais recentes tecnologias e tendências do mercado. 💻
      </Paragraph>

      <AchievementNumbers>
        <div>
          <Title>3</Title>
          <Paragraph size="s" fonts="poppins">
            ANOS DE EXPERIÊNCIA
          </Paragraph>
        </div>

        <div>
          <Title>+ 10</Title>
          <Paragraph size="s" fonts="poppins">
            CONHECIMENTOS TÉCNICOS
          </Paragraph>
        </div>

        <div>
          <Title>+ 240K</Title>
          <Paragraph size="s" fonts="poppins">
            VISUALIZAÇÕES NO YOUTUBE
          </Paragraph>
        </div>

        <div>
          <Title>+ 3</Title>
          <Paragraph size="s" fonts="poppins">
            ANOS DE EXPERIÊNCIA
          </Paragraph>
        </div>
      </AchievementNumbers>
    </IntroContainer>
  );
}
