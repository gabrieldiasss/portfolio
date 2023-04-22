import Image from "next/image";
import { Paragraph, Title } from "../Typography";
import { AboutContainer, AboutContent, AboutInfos } from "./styles";
import AboutMeImage from "../../assets/about-image.png";

export function About() {
  return (
    <AboutContainer id="about" >
      <AboutContent>
        <Image
          src={AboutMeImage}
          width={460}
          height={560}
          alt="Sobre Gabriel Dias"
        />

        <AboutInfos>
          <Title size="m" weight="medium">
            Um pouco sobre mim
          </Title>

          <Title size="s" weight="medium">
            Conheça um pouco da minha trajetória e carreira.
          </Title>
          <Paragraph fonts="poppins" weight="regular" size="s">
            Meu nome é Gabriel Dias, atualmente tenho 18 anos e moro em Santo
            André, São Paulo. Em maio de 2020, descobri o mundo da programação e
            comecei a estudar Python por meio do Curso em Vídeo, foi aí que dei
            meus primeiros passos, aprendendo assuntos básicos sobre lógica. No
            entanto, após um mês estudando Python e lógica de programação,
            comecei a sentir um pouco de insatisfação, pois não conseguia ver
            resultados visuais atraentes. Foi então que descobri conteúdos sobre
            desenvolvimento front-end isso me despertou interesse, e comecei a
            estudar e me dedicar ao desenvolvimento de interfaces de usuário,
            construindo sites bonitos e funcionais. Após 1 ano estudando por
            conta, criei um canal no Youtube onde foi um divisor de águas na
            minha vida, por lá encontrei minha verdadeira paixão, que é a
            criação de conteúdo. Participar de todo processo de criação de um
            projeto como esse é fantástico, consegui ganhar mais conhecimento,
            agreguei valor para vida de centenas de milhares de pessoas e todos
            os dias recebe mensagens de agradecimento pelo conteúdo. Se você
            desejar conhecer mais sobre minha trajetória e minha vida pessoal,
            ficarei muito grato em marcar um bate-papo para conversarmos.
          </Paragraph>
        </AboutInfos>
      </AboutContent>
    </AboutContainer>
  );
}
