import styled from 'styled-components';

export const AuthBlock = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const AuthText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.16px;
`;

export const IconUser = styled.svg`
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 10px;

  fill: var(--color-white);
  background-color: var(--color-accent);
`;

export const AuthLogoutBlock = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
`;
