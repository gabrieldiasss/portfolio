import { Paragraph, Title } from "../Typography";
import { Field } from "./components/Field";
import {
  ContactContainer,
  ContactContent,
  ContactForm,
  ContactInfos,
} from "./styles";
import Email from '../../assets/contact.png'

export function Contact() {
  return (
    <ContactContainer>
      <ContactContent>
        <ContactInfos>
          <Title size="m" >Entre em contato</Title>
          <Paragraph fonts="lato">
            Para obter mais informações sobre mim e agendar uma conversa para
            nos conhecermos melhor, por favor, envie-me um e-mail.
          </Paragraph>
        </ContactInfos>

        <ContactForm>
          <Field label="Nome" placeholder="Ex. Amanda Silva" />
          <Field label="Email" placeholder="Ex. amandasilva@gmail.com" />
          <Field label="Assunto" placeholder="Vaga para desenvolvedor" />
          <Field label="Mensagem" placeholder="Escreva sua mensagem..." />
          <button>Enviar</button>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
}
