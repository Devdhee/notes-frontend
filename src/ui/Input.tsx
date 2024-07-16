import styled from "styled-components";

interface InputProps {
  type: "text" | "password" | "email" | "tel" | "search";
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 1rem 2.5rem;
  font-size: 1.3rem;
  border: 1px solid #ccc;
  border-radius: 2rem;
  width: 100%;

  &:focus {
    border-color: var(--color-grey-600);
    outline: none;
  }
`;

function Input({
  type,
  label,
  placeholder,
  value,
  onChange,
  required,
  name,
}: InputProps) {
  return (
    <InputWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        id={name}
        name={name}
      />
    </InputWrapper>
  );
}

export default Input;
