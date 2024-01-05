import Button from 'components/Button';
import {
  HeaderWrapper,
  LogoStyled,
  LogoAccent,
  NavItemStyled,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoStyled>
        <LogoAccent>psychologists.</LogoAccent>services
      </LogoStyled>
      <NavItemStyled>Home</NavItemStyled>
      <NavItemStyled>Psychologists</NavItemStyled>
      <Button>Log In</Button>
      <Button>Registration</Button>
    </HeaderWrapper>
  );
};

export default Header;
