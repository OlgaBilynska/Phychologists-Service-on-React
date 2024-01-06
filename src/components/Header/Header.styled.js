import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 24px 0px;

  border-bottom: 1px solid rgba(25, 26, 21, 0.1);
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoStyled = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.4px;
`;

export const LogoAccent = styled.span`
  color: var(--color-accent);
  font-weight: 700;
  letter-spacing: -0.4px;
`;

export const DotAccent = styled.span`
  font-weight: 500;
`;

export const NavItemStyled = styled.p`
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonBlockStyled = styled.div`
  display: flex;
  gap: 8px;
`;

export const NavBlockStyled = styled.div`
  display: flex;
  gap: 40px;
`;

export const LogoAndNav = styled.div`
  display: flex;
  gap: 130px;
  align-items: center;
`;

export const BtnLogIn = styled.button`
  padding: 14px 39px;

  border-radius: 30px;
  border: 1px solid rgba(25, 26, 21, 0.2);

  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.16px;
  background-color: transparent;
`;
