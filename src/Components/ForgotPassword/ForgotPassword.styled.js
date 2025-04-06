import styled from "styled-components";
import { Field, ErrorMessage , Form} from "formik";




export const H2 = styled.h2`
  text-align: center;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: var(--heading-color);
  margin-bottom: 30px;
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
  border-radius: 30px;

  width: 438px;
  height: 52px;

  margin-top: 40px;

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  background: var(--button-bg);
  color: #fbfbfb;
`;
export const ButtonCross = styled.button`
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

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
align-items: center;
gap:15px;
`
export const Label = styled.label``;
export const Input = styled(Field)`
  width: 438px;
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
  &: hover {
    color: rgb(22, 91, 251);
  }
`;
