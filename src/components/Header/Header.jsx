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
import LogInForm from 'components/LogInForm';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = content => {
    setShowModal(prevState => !prevState);
    setModalContent(content);
  };

  return (
    <HeaderWrapper>
      <ContainerStyled>
        <HeaderContentWrapper>
          <LogoAndNav>
            <LogoStyled to="/">
              <LogoAccent>
                psychologists<DotAccent>.</DotAccent>
              </LogoAccent>
              services
            </LogoStyled>
            <NavBlockStyled>
              <li>
                <NavItemStyled to="/">Home</NavItemStyled>
              </li>
              <li>
                <NavItemStyled to="/psychologists">Psychologists</NavItemStyled>
              </li>
            </NavBlockStyled>
          </LogoAndNav>
          <ButtonBlockStyled>
            <div onClick={() => toggleModal('login')}>
              <Button
                backgroundcolor="transparent"
                border="rgba(25, 26, 21, 0.20)"
                color="var(--color-text)"
                fontSize="16px"
                type="button"
              >
                Log In
              </Button>
            </div>
            <div onClick={() => toggleModal('registration')}>
              <Button type="button" fontSize="16px">
                Registration
              </Button>
            </div>
          </ButtonBlockStyled>
        </HeaderContentWrapper>
      </ContainerStyled>
      {showModal && (
        <PopUpWindow onClick={toggleModal}>
          {modalContent === 'login' ? <LogInForm /> : <RegistrationForm />}
        </PopUpWindow>
      )}
    </HeaderWrapper>
  );
};

export default Header;
