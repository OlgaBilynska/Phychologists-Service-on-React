import { Field } from 'formik';
import styled from 'styled-components';

export const LogInTitle = styled.h1`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
`;

export const LogInText = styled.p`
  color: rgba(25, 26, 21, 0.5);
  font-size: 16px;
  line-height: 1.25;
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  max-width: 438px;
`;

export const ErrorText = styled.p`
  color: var(--color-accent);
  margin-top: 6px;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 52px;
  border: 1px solid #191a151a;
  border-radius: 12px;
  padding: 16px 18px;
  font-size: 16px;
  line-height: 1.25;

  &::placeholder {
    color: var(--color-text);
  }
`;

export const FormikWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-bottom: 40px;
`;

export const InputWrapper = styled.label`
  position: relative;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
