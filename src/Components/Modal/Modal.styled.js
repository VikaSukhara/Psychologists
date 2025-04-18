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
  align-items: center;
  z-index: 1000;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0s 0.6s; /* Плавно змінюється прозорість */
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 25px 30px;
  position: relative;
  border-radius: 25px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 64px;
    border-radius: 30px;
    width: 599px;
    max-height: 859px;
`;
