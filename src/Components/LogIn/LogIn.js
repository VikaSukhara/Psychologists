import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  Button,
  ButtonLogIn,
  H2,
  Input,
  Label,
  P,
  StyledError,
} from "./LogIn.styled";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/action";
import { logIn } from "../redux/userSlice";

const LogInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function LogIn({ toggleModal }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={toggleModal}>
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

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LogInSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form data", values);
          dispatch(logIn(values));
          resetForm(); // Очищуємо форму
          toggleModal(); // Закриваємо модалку ✅

          signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log("User logged in:", user);
            })
            .catch((err) => {
              console.log("Wrong email or password. Try again", err.message);
            });
        }}
      >
        <Form style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <Label>
            <Input type="email" name="email" placeholder="Enter your email" />
            <StyledError name="email" component="div" />
          </Label>

          <Label>
            {" "}
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <StyledError name="password" component="div" />
          </Label>

          <ButtonLogIn type="submit">Log In</ButtonLogIn>
        </Form>
      </Formik>
    </div>
  );
}

export default LogIn;
