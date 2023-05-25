import { FocusEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 300px;
  height: 60px;
  border: 1px solid darkgray;
  border-radius: 10px;
  padding: 0 10px;
`;

const InputMessage = styled.p`
  margin: 2px 0 0 0;
  font-size: small;
  color: red;
  height: 20px;
  width: 100%;
`;

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'date';
  placeholder?: string;
  autoComplete?: 'on' | 'off';
  id?: string;
  useFormRegisterReturn?: UseFormRegisterReturn<string>;
  error?: string;
  className?: string;
}

const Input = (props: InputProps) => {
  const { type, placeholder, autoComplete, id, useFormRegisterReturn, error, className } = props;

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (type === 'date' && !event.target.value) {
      event.target.type = 'date';
    }
  };

  return (
    <div className={className}>
      <StyledInput
        id={id}
        type={type === 'date' ? 'text' : type}
        placeholder={placeholder}
        autoComplete={autoComplete ? autoComplete : 'off'}
        onFocus={handleFocus}
        {...useFormRegisterReturn}
      />
      {error && <InputMessage>{error}</InputMessage>}
    </div>
  );
};

export default Input;
