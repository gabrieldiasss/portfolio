import { DownloadSimple } from "phosphor-react";
import {
  Button,
  HeaderContainer,
  HeaderContent,
  Link,
  Navigation,
} from "./styles";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import jsPDF from "jspdf";

function saveCurriculum() {
  const doc = new jsPDF('portrait', 'px', 'a4', false)
  doc.addImage("https://i.ibb.co/SRPjNVR/Curriculo-7-1.png", 'PNG', 0, 0, 417, 653)
  doc.save("cv-gabriel-dias")
}

//<a href="https://ibb.co/sy2fjsy"><img src="https://i.ibb.co/SRPjNVR/Curriculo-7-1.png" alt="Curriculo-7-1" border="0"></a>

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <Image src={Logo} width={50} height={50} alt="" />

          <Navigation>
            <ul>
              <li>
                <Link href="">Sobre</Link>
              </li>
              <li>
                <Link href="">Trabalhos</Link>
              </li>
              |
              <li>
                <Link
                  socialNetwork="linkedin"
                  target="_blank"
                  href="https://www.linkedin.com/in/gabrieldiasss/"
                  prefetch
                  title="Veja meu perfil no Linkedin"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  socialNetwork="github"
                  target="_blank"
                  href="https://www.linkedin.com/in/gabrieldiasss/"
                  prefetch
                  title="Veja meu Github"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  socialNetwork="youtube"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCtQ8Ki9M945TsBVXS_7zWNg"
                  prefetch
                  title="Assista meu canal no Youtube"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </Navigation>
        </div>

          <Button onClick={saveCurriculum}>
            <DownloadSimple size={24} />
            Currículo
          </Button>
      </HeaderContent>
    </HeaderContainer>
  );
}
