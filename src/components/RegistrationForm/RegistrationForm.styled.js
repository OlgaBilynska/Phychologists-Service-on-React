import styled from 'styled-components';

export const RegTitle = styled.h1`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
`;

export const RegText = styled.p`
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

export const EyeIcon = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16.83px;
  width: 20px;
  height: 20px;
  stroke: var(--color-text);
  fill: var(--color-white);
`;
