import { createPortal } from 'react-dom';

const ModalPortal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    console.error("Modal root isn't found");
    return null;
  }

  return createPortal(children, modalRoot);
};

export default ModalPortal;
