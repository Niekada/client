import { Field, Form, Formik } from "formik";
import { loginFormInitialValues, loginValidationSchema } from "../../consts/InitialValues";
import { TextField } from "formik-mui";
import { FormContainer, Title, AddButton } from "../../styles/LoginRegisterStyles";
import axios from "axios";
import { MainColor, BgColor } from "../../assets/Colors";

const Register = () => {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const register = axios.post(
        "/register", values
        );
      alert("you are now registered");
      console.log(register)
      resetForm();
    } catch (error) {
      alert(`${error}, registration failed`);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <FormContainer>
        <Title>Register</Title>
        <Formik
          initialValues={loginFormInitialValues}
          onSubmit={onSubmit}
          validationSchema={loginValidationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                name="email"
                label="Email Address"
                sx={{ mb: 2, backgroundColor: BgColor, color: MainColor }}
                fullWidth
                required
              />
              <Field
                component={TextField}
                name="password"
                type="password"
                label="Password"
                sx={{ mb: 2, backgroundColor: BgColor, color: MainColor }}
                fullWidth
                required
              />
              <AddButton
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </AddButton>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </div>
  )
};

export default Register;