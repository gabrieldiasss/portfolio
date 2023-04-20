import { useForm, FormProvider } from "react-hook-form";
import { Paragraph, Title } from "../Typography";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  ContactContainer,
  ContactContent,
  ContactInfos,
} from "./styles";
import { ContactForm } from "./components/ContactForm";

const sendEmailSchema = zod.object({
  name: zod.string().min(1, "Informe seu nome"),
  email: zod.string().email({ message: 'E-mail inválido' }),
  subject: zod.string().min(1, "Informe sobre o assunto"),
  message: zod.string().min(1, "Escreva a mensagem"),
});

export type emailData = zod.infer<typeof sendEmailSchema>;

export type SendEmailFormData = emailData;



export function Contact() {

  const sendEmail = useForm<SendEmailFormData>({
    resolver: zodResolver(sendEmailSchema),
  });

  return (
    <ContactContainer>
      <ContactContent>
        <ContactInfos>
          <Title size="m">Entre em contato</Title>
          <Paragraph fonts="lato">
            Para obter mais informações sobre mim e agendar uma conversa para
            nos conhecermos melhor, por favor, envie-me um e-mail.
          </Paragraph>
        </ContactInfos>

        <FormProvider {...sendEmail}>
          <ContactForm />
        </FormProvider>
      </ContactContent>
    </ContactContainer>
  );
}
