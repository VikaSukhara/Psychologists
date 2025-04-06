import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  Button,
  ButtonSignUp,
  H2,
  Input,
  P,
  StyledError,
} from "./Registration.styled";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/userSlice";
import { toast } from "react-toastify";

let RegistrationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function Registration({ toggleModal }) {
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
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8L24 24"
            stroke="#191A15"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <H2>Registration</H2>
      <P>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </P>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { resetForm }) => {
          createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          ).then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              //функція Firebase, дозволяє доповнити або змінити інформацію про користувача після того, як він зареєструвався або увійшов.
              displayName: values.name,
            }).then(() => {
              // Після оновлення профілю — логін
              dispatch(
                logIn({user:{
                  uid: user.uid,
                  name: user.displayName, // 🔄 Ми щойно встановили це
                  email: user.email,
                }})
               
              );
            });

            toast.success(
              `You have successfully registered, log in to your account`
            );
            resetForm(); // Очищуємо форму
            toggleModal(); // Закриваємо модалку ✅

            // Додаємо користувача в Redux Store
            dispatch(
              logIn({
                uid: user.uid,
                name: user.displayName,
                email: user.email,
              })
            );
          });
        }}
      >
        <Form style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <label>
            <Input name="name" placeholder="Enter your name" />
            <StyledError name="name" component="div" />
          </label>

          <label>
            <Input name="email" placeholder="Enter your email" />
            <StyledError name="email" component="div" />
          </label>

          <label>
            <Input name="password" placeholder="Enter your password" />
            <StyledError name="password" component="div" />
          </label>

          <ButtonSignUp type="submit">Sign Up</ButtonSignUp>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
