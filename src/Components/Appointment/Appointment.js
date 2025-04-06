import { Formik } from "formik";
import {
  ButtonLogIn,
  FormStyled,
  H2,
  Img,
  Input,
  InputAria,
  InputContainers,
  Label,
  P,
  PsychologistWrap,
  StyledError,
} from "./Appointment.styled";
import * as Yup from "yup";

const Appointment = ({ psychologist, toggleModal, id }) => {
  const AppointmentSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    phone: Yup.number().min(8, "Too Short!").required("Required"),
    time: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    comment: Yup.string().required("Required"),
  });

  return (
    <div>
      <H2>Make an appointment with a psychologists</H2>
      <P>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </P>
      <PsychologistWrap>
        <Img src={psychologist.avatar_url} alt="psychologists' avatar" />
        <div>
          {" "}
          <p>Your psychologists</p>
          <p>{psychologist.name}</p>
        </div>
      </PsychologistWrap>

      <Formik
        initialValues={{
          name: "",
          phone: "",
          time: "",
          email: "",
          comment: "",
        }}
        validationSchema={AppointmentSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm(); // Очищуємо форму
          toggleModal(); // Закриваємо модалку ✅
        }}
      >
        <FormStyled
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        >
          <Label>
            <Input type="text" name="name" placeholder="Name" />
            <StyledError name="name" component="div" />
          </Label>

          <InputContainers>
            <Label>
              <Input
                style={{ width: "232px" }}
                type="number"
                name="phone"
                placeholder="+380"
              />
              <StyledError name="phone" component="div" />
            </Label>

            <Label>
              <Input
                style={{ width: "232px" }}
                type="time"
                name="time"
                placeholder="00:00"
              />
              <StyledError name="time" component="div" />
            </Label>
          </InputContainers>

          <Label>
            <Input type="email" name="email" placeholder="Enter your email" />
            <StyledError name="email" component="div" />
          </Label>

          <Label>
            <InputAria name="comment" placeholder="Comment" />
            <StyledError name="comment" component="div" />
          </Label>

          <ButtonLogIn type="submit" onClick={() => console.log("click")}>
            Send
          </ButtonLogIn>
        </FormStyled>
      </Formik>
    </div>
  );
};

export default Appointment;
