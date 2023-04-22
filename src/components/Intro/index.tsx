import Image, { ImageLoader } from "next/image";
import { Paragraph, Title } from "../Typography";
import { IntroContainer, TitleContainer } from "./styles";
import { StaticImageData } from "next/image";
import { AchievementNumbers } from "./components/AchievementNumbers";

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

      <AchievementNumbers />
    </IntroContainer>
  );
}
