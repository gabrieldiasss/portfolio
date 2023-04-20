import { Input } from "../Input";
import { FieldContainer } from "./styles";

interface FieldProps {
  label: string,
  placeholder: string,
}

export function Field({ label, placeholder }: FieldProps) {
  return (
    <FieldContainer>
      <label>{label}</label>
      <Input placeholder={placeholder} />
    </FieldContainer>
  );
}
