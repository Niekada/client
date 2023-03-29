import { Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { loginFormInitialValues, loginValidationSchema } from "../../consts/LoginRegConst";
import { TextField } from "formik-mui";
import styled from "styled-components";
import axios from "axios";

const Register = () => {

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const register = axios.get(
        "/register", values
        );
      alert("you are now regostered");
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
                sx={{ mb: 2 }}
                fullWidth
                required
              />
              <Field
                component={TextField}
                name="password"
                type="password"
                label="Password"
                sx={{ mb: 2 }}
                fullWidth
                required
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ mb: 2 }}
                fullWidth
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </RegisterForm>
    </div>
  )
};

const RegisterForm = styled.div`
  margin: 20px auto,
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterTitle = styled.p`
  margin-top: 100px;
  font-size: 36px;
  font-weight: 500;
`;

export default Register;