import * as Yup from "yup";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {
  Button,
  ButtonCross,
  H2,
  Input,
  Label,
  StyledError,
  StyledForm,
} from "./ForgotPassword.styled";
import { Formik } from "formik";
import { toast } from "react-toastify";

// getAuth - повертає об'єкт автентифікації, а
// sendPasswordResetEmail - надсилає електронного листа для скидання пароля на вказану електронну пошту.

function ForgotPassword({ toggleModal }) {
  const handlePasswordReset = (values) => {
    const email = values.email;
    const auth = getAuth();
    //щоб отримати об'єкт автентифікації.
    // Він використовується для виконання операцій з автентифікації в Firebase.

    // метод для скидання пароля
    sendPasswordResetEmail(auth, email)
      //метод  для відправки посилання на електронну пошту користувача для скидання пароля.

      .then(() => {
        toast.success(
          "Password reset instructions have been sent to your email."
        );
        toggleModal();
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          toast.warn("Invalid email format. Try again.");
        } else if (error.code === "auth/user-not-found") {
          toast.warn("No user found with this email.");
        } else {
          toast.warn("Error occurred. Please try again.");
        }
      });
  };

  return (
    <div>
      <ButtonCross onClick={toggleModal}>
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
      </ButtonCross>
      <H2>Password recovery</H2>
      <p style={{ marginBottom: "20px" }}>
        Please enter your email address to receive a link to reset your password
      </p>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        })}
        onSubmit={handlePasswordReset}
      >
        <StyledForm>
          <Label>
            <Input type="email" name="email" placeholder="Enter your email" />
            <StyledError name="email" component="div" />
          </Label>

          <Button type="submit">Reset password</Button>
        </StyledForm>
      </Formik>
    </div>
  );
}

export default ForgotPassword;
