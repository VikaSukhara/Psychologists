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

  opacity: ${({ isOpen }) =>
    isOpen ? 1 : 0}; /* Плавно змінюється прозорість */
  visibility: ${({ isOpen }) =>
    isOpen
      ? "visible"
      : "hidden"}; /* Використовуємо visibility для зменшення помилок */
  transition: opacity 0.8s ease, visibility 0s 0.8s; /* Плавна зміна opacity, delay для visibility */
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

    transform: translateY(-50px); /* Початкова позиція модалки знизу */
    transition: transform 0.8s ease; /* Плавне переміщення */
  }

  ${({ isOpen }) =>
    isOpen && `transform: translateY(0);`}/* Позиція модалки при відкритті */
`;

