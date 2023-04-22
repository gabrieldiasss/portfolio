import { SendEmailFormData } from "../..";
import { Input } from "../Input";
import { ContactFormContainer, FieldContainer } from "./styles";
import { useFormContext } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function ContactForm() {
    const { handleSubmit, register, formState, reset } = useFormContext<SendEmailFormData>();

  const { errors } = formState as unknown as ErrorsType;

  function handleSendEmail(data: SendEmailFormData) {

    const paramsData: SendEmailFormData = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    }

    emailjs.send("service_52jzgp7", "template_rkjtmgt", paramsData, "2BV606uxGF_BxmULw")
      .then(() => {
        toast.success("Email enviado com sucesso!")
      })
      .catch((error) => {
        toast.error("Algo de errado aconteceu")
      })

      reset()
  }

  return (
    <ContactFormContainer onSubmit={handleSubmit(handleSendEmail)}>
      <FieldContainer>
        <label>Nome</label>
        <Input
          {...register("name")}
          placeholder="Ex. Amanda Silva"
          error={errors.name?.message}
        />
      </FieldContainer>

      <FieldContainer>
        <label>Email</label>
        <Input
          {...register("email")}
          placeholder="Ex. amandasilva@gmail.com"
          error={errors.email?.message}
        />
      </FieldContainer>

      <FieldContainer>
        <label>Assunto</label>
        <Input
          {...register("subject")}
          placeholder="Vaga para desenvolvedor"
          error={errors.subject?.message}
        />
      </FieldContainer>

      <FieldContainer>
        <label>Mensagem</label>
        <Input
          {...register("message")}
          placeholder="Escreva sua mensagem..."
          error={errors.message?.message}
        />
      </FieldContainer>

      <button type="submit">Enviar</button>
    </ContactFormContainer>
  );
}
