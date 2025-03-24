    import ReactDOM from "react-dom";
import { Backdrop, ModalContent } from "./Modal.styled";

    function Modal(props) {
      if (!props.isOpen) return null;
      
      return ReactDOM.createPortal(
        <Backdrop className="backdrop" onClick={props.onClose}>
       
          <ModalContent className="modal-content" onClick={(e) => e.stopPropagation()}>
            {props.children}
          </ModalContent>
        </Backdrop>,
        document.querySelector("#modal-root")
      );
    }

    export default Modal;
