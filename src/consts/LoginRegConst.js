import * as Yup from "yup";

import { emailValidation, requiredField } from "./Validation";

export const loginFormInitialValues = {
  email: "",
  password: "",
};

export const loginValidationSchema = Yup.object().shape(
  {
    email: Yup.string().email(emailValidation).required(requiredField),
    password: Yup.string().required(requiredField),
  }
);