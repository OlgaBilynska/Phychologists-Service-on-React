import { useEffect } from 'react';
import ModalPortal from './ModalPortal';
import sprite from '../../assets/sprite.svg';
import {
  BackdropModal,
  ModalContainer,
  ModalChildrenWrapper,
  CloseBtn,
} from './PopUpWindow.styled';

const PopUpWindow = ({ children, onClick }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClick();
    }
  };

  const handleCloseClick = () => {
    onClick();
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <ModalPortal>
      <BackdropModal onClick={handleBackdropClick}>
        <ModalContainer>
          <CloseBtn onClick={handleCloseClick}>
            <use href={`${sprite}#icon-x`} />
          </CloseBtn>
          <ModalChildrenWrapper>{children}</ModalChildrenWrapper>
        </ModalContainer>
      </BackdropModal>
    </ModalPortal>
  );
};

export default PopUpWindow;
