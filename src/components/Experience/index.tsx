import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceContainer } from "./styles";
import { Tag } from "phosphor-react";
import { Paragraph, Title } from "../Typography";
import { BackgroundImage } from "../BackgroundImage";
import ParceleCart from '../../assets/logo-parcelecart.svg'
import Adc from '../../assets/logo-adc.png'
import Image from "next/image";

export function Experience() {
  return (
    <ExperienceContainer>
      <Title size="m">Experiência</Title>

      {/* <Image src={ParceleCart} width={1200} alt="" /> */}

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#55D4C1", color: "#A4A4A4" }}
          contentArrowStyle={{ borderRight: "7px solid  #55D4C1" }}
          date="Abril de 2021 - O momento"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<Image src={Adc} width="40" height="50" alt=""/>}
        >
          <Title color="white" className="vertical-timeline-element-title">
            Instrutor
          </Title>
          <Paragraph
            style={{ margin: 0 }}
            fonts="lato"
            color="gray-100"
            size="s"
            weight="bold"
            className="vertical-timeline-element-subtitle"
          >
            Além do Código
          </Paragraph>
          <Paragraph color="gray-100" fonts="lato">
            Sou instrutor Front-end e cuido da parte da criação de conteúdo do
            canal, com o desenvolvimento de pequenos projetos com as tecnologias
            mais usadas na web e administrando cursos. <b>Compentências: </b> HTML, CSS,
            Javascript, Typescript, ReactJS, Styled-Components.
          </Paragraph>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#364261", color: "#A4A4A4" }}
          contentArrowStyle={{ borderRight: "7px solid  #364261" }}
          date="Dez de 2022 - Fev de 2023"
          iconStyle={{ background: "#000", color: "#fff" }}
          // icon={<Image src={ParceleCart} alt="" />}
        >
          <Title color="white" className="vertical-timeline-element-title">
            Desenvolvedor Frontend Jr
          </Title>
          <Paragraph
            style={{ margin: 0 }}
            fonts="lato"
            color="gray-100"
            size="s"
            weight="bold"
            className="vertical-timeline-element-subtitle"
          >
            Parcele Cart
          </Paragraph>
          <Paragraph color="gray-100" fonts="lato">
            Responsável pelo desenvolvimento de novas funcionalidades com grande
            grau de importância para o sistema. Além disso, trabalhando em
            diversas melhorias e efetuando manutenções na plataforma. 
           <b> Compentências:</b> Typescript, ReactJS, NextJS, GIT, Stitches (CSS in
            JS), Testes unitários, MaterialUI, consumo de API’s GraphQL.
          </Paragraph>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <BackgroundImage sizeBackground="large" />
    </ExperienceContainer>
  );
}
