import * as yup from "yup";

export type LoginFormType = {
  email: string;
  password: string;
};

export const loginFormValidationSchema = () =>
  yup.object({
    email: yup.string().required("*required field").email("invalid format"),
    password: yup.string().required("*required field"),
  });
