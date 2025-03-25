import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

export const H2 = styled.h2`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #191a15;
  margin-bottom: 20px;
`;

export const P = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 40px;
`;

export const Button = styled.button`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #191a15;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const ButtonLogIn = styled.button`
  border-radius: 30px;
  padding: 16px 196px;
  width: 438px;
  height: 52px;
  background: #3470ff;
  margin-top: 40px;

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
`;



export const Label = styled.label``;
export const Input = styled(Field)`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  border: 1px solid rgba(17, 16, 28, 0.1);
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