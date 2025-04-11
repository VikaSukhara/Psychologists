import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

export const H2 = styled.h2`
  font-family: var(--font-family);
  font-weight: 500;

  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: var(--heading-color);
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

export const Button = styled.button`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: var(--span-color: );
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const ButtonLogIn = styled.button`
  border-radius: 30px;


  height: 52px;
  background: var(--button-bg);
  margin-top: 40px;

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
 @media (min-width: 1440px) {  
 padding: 16px 196px;
 }


  transition: var(--button-transition); /* Плавний перехід */

  &:hover {
    transform: scale(var(--button-scale));-button-scale));; /* Збільшення на 5% */
  }
`;

export const Label = styled.label``;
export const Input = styled(Field)`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  border: var(--border);
  border-radius: 12px;
  padding: 18px 18px;

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

export const ButtonForgot = styled.button`
  transition: var(--button-transition); /* Плавний перехід */

  &: hover {
    color: rgb(22, 91, 251);
    transform: scale(var(--button-scale)); /* Збільшення на 5% */
  }
`;

export const InputPasswordWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
