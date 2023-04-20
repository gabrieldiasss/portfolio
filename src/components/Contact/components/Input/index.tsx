import { InputHTMLAttributes, forwardRef } from "react";
import { InputContainer, InputStyled } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  placeholder: string
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, placeholder, className, ...props }, ref) => {
    return (
      <InputContainer>
        <InputStyled placeholder={placeholder} />
      </InputContainer>
    );
  }
);
