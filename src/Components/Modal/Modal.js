import ReactDOM from "react-dom";
import { Backdrop, ModalContent } from "./Modal.styled";
import { useEffect } from "react";

function Modal({ isOpen, toggleModal, children }) {

  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    if (isOpen) {
      // Заборона на прокручування сторінки
      document.body.style.overflow = 'hidden';
    } else {
      // Відновлення прокручування сторінки, коли модалка закрита
      document.body.style.overflow = '';
    } 
    window.addEventListener('keydown', onEscapeClick);
    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [isOpen, toggleModal]);


  const onClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Backdrop className="backdrop" onClick={onClickBackdrop} isOpen={isOpen}>
      <ModalContent
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        isOpen={isOpen}
      >
        {children}
      </ModalContent>
    </Backdrop>,
    document.querySelector("#modal-root")
  );
}

export default Modal;
