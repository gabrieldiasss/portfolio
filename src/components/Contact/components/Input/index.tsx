import { InputHTMLAttributes, forwardRef } from "react";
import { InputContainer, InputStyled } from "./styles";
import { Paragraph } from "../../../Typography";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {

    return (
      <InputContainer>
        <InputStyled {...props} ref={ref} />
        <Paragraph weight="bold" fonts="lato" color="error">{error}</Paragraph>
      </InputContainer>
    );
  }
);
