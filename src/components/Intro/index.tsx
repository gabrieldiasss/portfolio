import Image, { ImageLoader } from "next/image";
import { Paragraph, Title } from "../Typography";
import { AchievementNumbers, IntroContainer, TitleContainer } from "./styles";
import { StaticImageData } from "next/image";
import CountUp from "react-countup";

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
        <Title
          size={{ "@mobileXGMax": "l", "@mobileXGMin": "xl", "@mobileG": "m" }}
          weight="medium"
        >
          Olá, sou Gabriel
        </Title>
      </TitleContainer>
      <Title
        style={{ margin: "1rem 0" }}
        size={{ "@mobileXGMax": "l", "@mobileXGMin": "xl", "@mobileG": "m" }}
        weight="medium"
      >
        um desenvolvedor web com
      </Title>
      <Paragraph
        fonts="poppins"
        weight="regular"
        size={{ "@laptopG": "l", "@mobileG": "m" }}
      >
        grande paixão pela criação de interfaces de usuário inovadoras e
        funcionais, sempre buscando aprimorar suas habilidades e se manter
        atualizado com as mais recentes tecnologias e tendências do mercado. 💻
      </Paragraph>

      <AchievementNumbers>
        <div>
          <Title>
            <CountUp start={0} end={3} duration={3} delay={0} />
          </Title>
          <Paragraph size="s" fonts="poppins">
            ANOS DE EXPERIÊNCIA
          </Paragraph>
        </div>

        <div>
          <Title>
            + <CountUp start={0} end={10} duration={3} delay={0} />
          </Title>
          <Paragraph size="s" fonts="poppins">
            CONHECIMENTOS TÉCNICOS
          </Paragraph>
        </div>

        <div>
          <Title>
            + <CountUp start={0} end={240000} duration={1.5} delay={0} />
          </Title>
          <Paragraph size="s" fonts="poppins">
            VISUALIZAÇÕES NO YOUTUBE
          </Paragraph>
        </div>

        <div>
          <Title>
            + <CountUp start={0} end={4000} duration={1.5} delay={0} />
          </Title>
          <Paragraph size="s" fonts="poppins">
            SEGUIDORES ATIVOS
          </Paragraph>
        </div>
      </AchievementNumbers>
    </IntroContainer>
  );
}
