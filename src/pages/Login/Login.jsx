import { Field, Form, Formik } from "formik";
import { loginFormInitialValues, loginValidationSchema } from "../../consts/InitialValues";
import { TextField } from "formik-mui";
import { FormContainer, Title, AddButton } from "../../styles/LoginRegisterStyles";
import axios from "axios";
import { MainColor, BgColor } from "../../consts/Colors";

const Login = () => {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const login = axios.get(
        "/login", values
        );
      alert("you are now logged in");
      console.log(login)
      resetForm();
    } catch (error) {
      alert(`${error}, login failed`);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <FormContainer>
        <Title>Log In</Title>
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
                Log In
              </AddButton>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </div>
  )
};

export default Login;