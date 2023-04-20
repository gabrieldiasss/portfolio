import Image from "next/image";
import Logo from "../../assets/logo.svg";
import { Paragraph, Title } from "../Typography";
import { CopyrightContainer, FooterContainer, FooterContent, LogoContainer } from "./styles";
import { Copyright } from "phosphor-react";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <Image src={Logo} width={40} height={40} alt="" />
        </LogoContainer>

        <CopyrightContainer>
          <Copyright color="#f5f5f5" />
          <Paragraph fonts="lato" color="gray-100" >2023 Gabriel Dias</Paragraph>
        </CopyrightContainer>
      </FooterContent>
    </FooterContainer>
  );
}
