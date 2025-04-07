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
  
    window.addEventListener('keydown', onEscapeClick);
    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [toggleModal]);


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
        {/* Ця функція зупиняє подальше спливання події, тобто не дозволяє
        батьківським елементам теж отримати цю подію. Якщо клікнути на
        .modal-content, подія не дійде до div (модалки), бо stopPropagation()
        зупиняє її. Але якщо клікнути поза .modal-content, то onClick=
        {closeModal} спрацює і модалка закриється. */}
        {/* e.target – це елемент, на який натиснув користувач. e.currentTarget – це
        елемент, на якому висить обробник події (бекдроп). Якщо користувач
        клікнув саме на бекдроп (а не на модальне вікно), викликається
        toggleModal(), тобто модалка закривається. 👉 Це дозволяє закривати
        модалку при натисканні за її межами. */}
        {children}
      </ModalContent>
    </Backdrop>,
    document.querySelector("#modal-root")
  );
}

export default Modal;
