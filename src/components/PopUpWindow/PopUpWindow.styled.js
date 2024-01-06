import styled from 'styled-components';

export const BackdropModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: #191a1599;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 64px;

  min-width: 566px;
  border-radius: 30px;

  background-color: var(--color-white);
`;

export const ModalChildrenWrapper = styled.div`
  margin: 0 auto;
`;

export const CloseBtn = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
  width: 32px;
  height: 32px;
  stroke: var(--color-text);
`;
