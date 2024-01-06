import Button from 'components/Button';
import { ContainerStyled } from 'components/Container/Container.styled';
import {
  HeaderWrapper,
  LogoStyled,
  LogoAccent,
  NavItemStyled,
  ButtonBlockStyled,
  NavBlockStyled,
  LogoAndNav,
  DotAccent,
  HeaderContentWrapper,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <ContainerStyled>
        <HeaderContentWrapper>
          <LogoAndNav>
            <LogoStyled>
              <LogoAccent>
                psychologists<DotAccent>.</DotAccent>
              </LogoAccent>
              services
            </LogoStyled>
            <NavBlockStyled>
              <NavItemStyled>Home</NavItemStyled>
              <NavItemStyled>Psychologists</NavItemStyled>
            </NavBlockStyled>
          </LogoAndNav>
          <ButtonBlockStyled>
            <Button
              backgroundColor="transparent"
              border="rgba(25, 26, 21, 0.20)"
              color="var(--color-text)"
              fontSize="16px"
            >
              Log In
            </Button>
            <Button fontSize="16px">Registration</Button>
          </ButtonBlockStyled>
        </HeaderContentWrapper>
      </ContainerStyled>
    </HeaderWrapper>
  );
};

export default Header;
