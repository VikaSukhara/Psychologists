import styled from "styled-components";
import { Field, ErrorMessage } from "formik";
import { Form as FormikForm } from "formik";

// Стилізований компонент для форми
export const FormStyled = styled(FormikForm)`
  display: flex;
  //   flex-direction: column;
  gap: 18px;
  max-width: 400px;

  /* Прибирає останній відступ у формі */
  & > *:last-child {
    margin-bottom: 22px; /* Прибирає останній відступ */
  }
`;

export const H2 = styled.h2`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: var(--heading-color)
  margin-bottom: 20px;
`;

export const P = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--paragraph-color);
  margin-bottom: 40px;
`;

export const Img = styled.img`
  border-radius: 15px;
  width: 44px;
  height: 44px;
  background: #e0e0e0, url("path_to_image");
`;

export const PsychologistWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: var(--heading-color);
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const ButtonLogIn = styled.button`
  border-radius: 30px;
  padding: 16px 196px;
  width: 438px;
  height: 52px;
  background: var(--button-bg);
  margin-top: 40px;

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: var(--button-text);

  transition: var(--button-transition); /* Плавний перехід */

  &:hover {
    transform: scale(var(--button-scale));; /* Збільшення на 5% */
  }
`;

export const Label = styled.label``;
export const Input = styled(Field)`
  width: 472px;
  height: 52px;
  box-sizing: border-box;
  border: var(--border);
  border-radius: 12px;
  padding: 18px 18px;

  flex: 1;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #007bff;
  }

  &::placeholder {
    color: var(--span-color--);

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 15px;
`;

export const InputAria = styled(Field)`
  width: 270px;
  height: 70px;
  padding: 5px;
  border: var(--border);
  border-radius: 10px;

  &::placeholder {
    color: var(--span-color);
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0%;
    transform: translateY(-20px);
  }

  @media (min-width: 768px) {
    width: 430px;
    height: 100px;
    padding: 16px;
    border-radius: 12px;

    &::placeholder {
      height: 116px;
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media (min-width: 768px) {
    width: 472px;
    &::placeholder {
      transform: translateY(-30px);
    }
  }
`;

export const InputContainers = styled.div`
  display: flex;
  gap: 12px;
  max-width: 472px; /* Контролюємо ширину контейнера */
`;
