import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border-radius: 30px;
  background-color: ${props => props.backgroundcolor || 'var(--color-accent)'};
  color: ${props => props.color || 'var(--color-white)'};
  border-color: ${props => props.border || 'transparent'};
  font-size: ${props => props.fontSize || '20px'};
  font-weight: 500;
  display: ${props => props.display || 'block'};
  padding: ${props => props.padding || '18px 50px'};
  width: ${props => props.width};
  letter-spacing: -0.16px;
  line-height: 1.25;

  &:hover {
    background-color: #fbc75e;
  }
`;
