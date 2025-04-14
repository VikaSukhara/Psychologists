import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(243, 243, 243, 1);
  margin-right: auto;
  margin-left: auto;
`;

export const Container = styled.div`
  padding: 10px 10px;
  // overflow: scroll;
  // height: 568px;

  @media (min-width: 768px) {
    padding: 40px 40px;
    // height: 736px;
  }
  @media (min-width: 1440px) {
    padding: 0 128px;
    max-width: 1440px;
    margin: 64px auto;
  }
`;

export const SelectWrap = styled.div`
  margin-bottom: 32px;
  width: 226px;
`;

export const Label = styled.label`
  gap: 8px;
  display: flex;
  flex-direction: column;
  color: rgb(138, 138, 137);

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
`;

export const Select = styled.select`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 10px;
  width: 100%;
  height: 40px;
  background: var(--main-color);
  color: var(--text-color);

  & option:checked {
    cursor: pointer;
    color: var(--text-color);

    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0%;
  }

  & option {
    cursor: pointer;
    color: gray;

    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    border-radius: 14px;
  }

  @media (min-width: 768px) {
    padding: 10px 18px;
    border-radius: 14px;
    width: 226px;
    height: 48px;

    & option:checked {
      font-size: 18px;
      font-weight: 500;
    }

    & option {
      font-size: 18px;

      border-radius: 14px;
    }
    & select option {
      border-radius: 14px;
    }
  }
`;

export const Button = styled.button`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: var(--button-text);
  border-radius: 30px;
  padding: 14px 48px;
  width: 176px;
  height: 48px;
  background: var(--button-bg);

  margin: 0 auto;
  display: flex;

  transition: var(--button-transition);

  &:hover {
    transform: scale(var(--button-scale));
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;
export const NotFound = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-top: 100px;
  color: var(--highlight-color);
`;

export const LoaderContainerStyle = styled.div`
  display: flex; // Використовуємо flex для центровання
  justify-content: center; // Горизонтальне центровання
  align-items: center; // Вертикальне центровання
  margin: 250px 0;
`;

export const Ul = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  @media (min-width: 1440px) {
    width: 1184px;
  }
`;
