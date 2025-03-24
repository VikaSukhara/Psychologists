// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';

import { Button, ButtonLogIn, H2, P } from "./LogIn.styled";

// const SignInSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Required'),
//     password: Yup.string()
//       .min(5, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//   });

function LogIn({ onClose }) {
  return (
    <div>
      <Button onClick={onClose}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 8L8 24"
            stroke="#191A15"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 8L24 24"
            stroke="#191A15"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>

      <H2>Log in</H2>
      <P>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </P>
      <label>
        {" "}
        <input type="email" name="email" id="email" />
      </label>

      <input type="password" name="password" id="password" />
      <ButtonLogIn>Log In</ButtonLogIn>
    </div>
  );
}

export default LogIn;
