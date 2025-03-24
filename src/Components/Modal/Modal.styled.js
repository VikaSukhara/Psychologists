import styled from "styled-components";
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Напівпрозорий чорний фон */
  display: flex;
  justify-content: center;
  align-items: center; /* Центрує модалку */
  z-index: 1000; /* Забезпечує, щоб бекдроп був поверх іншого контенту */
`;

/* Стилі для контенту модалки */
export const ModalContent = styled.div`
  background-color: white;
  padding: 64px;
  position: relative;
  border-radius: 30px;
  width: 565px;
  height: 579px;
`;
