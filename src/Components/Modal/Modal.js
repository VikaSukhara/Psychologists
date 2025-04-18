import ReactDOM from "react-dom";
import { Backdrop, ModalContent } from "./Modal.styled";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Modal({ isOpen, toggleModal, children }) {
  useEffect(() => {
    const onEscapeClick = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", onEscapeClick);
    return () => {
      window.removeEventListener("keydown", onEscapeClick);
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
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }} // when is open
        exit={{ opacity: 0, scale: 0.8 }} //when is close
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <ModalContent
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          isOpen={isOpen}
        >
          {children}
        </ModalContent>
      </motion.div>
    </Backdrop>,
    document.querySelector("#modal-root")
  );
}

export default Modal;
