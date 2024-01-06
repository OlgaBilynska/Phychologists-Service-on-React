import { useState } from 'react';
import Button from 'components/Button';
import PopUpWindow from 'components/PopUpWindow';
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
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

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
            <div onClick={toggleModal}>
              <Button
                backgroundColor="transparent"
                border="rgba(25, 26, 21, 0.20)"
                color="var(--color-text)"
                fontSize="16px"
              >
                Log In
              </Button>
            </div>
            <div onClick={toggleModal}>
              <Button onClick={toggleModal} fontSize="16px">
                Registration
              </Button>
            </div>
          </ButtonBlockStyled>
        </HeaderContentWrapper>
      </ContainerStyled>
      {showModal && <PopUpWindow onClick={toggleModal}>Modal</PopUpWindow>}
    </HeaderWrapper>
  );
};

export default Header;
