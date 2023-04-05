import { Field, Form, Formik } from "formik";
import { loginFormInitialValues, loginValidationSchema } from "../../consts/InitialValues";
import { TextField } from "formik-mui";
import styled from "styled-components";
import axios from "axios";
import { MainColor, BgColor } from "../../consts/Colors";

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
      <RegisterForm>
        <RegisterTitle>Register</RegisterTitle>
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
              <LoginButton
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </LoginButton>
            </Form>
          )}
        </Formik>
      </RegisterForm>
    </div>
  )
};

const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const RegisterTitle = styled.p`
  font-weight: 700;
  font-size: 34px;
  color: ${MainColor};
`;

const LoginButton = styled.button`
  margin-top: 24px;
  text-align: center;
  width: 250px;
  height: 50px;
  border: 2px solid ${MainColor};
  border-radius: 5px;
  background-color: ${BgColor};
  font-weight: 700;
  font-size: 34px;
  color: ${MainColor};

  &:active {
    transform: translateY(4px);
  }
`;

export default Register;