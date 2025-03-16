import * as yup from "yup";

export type RegisterFormType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerFormValidationSchema = () =>
  yup.object({
    email: yup.string().required("*required field").email("invalid format"),
    password: yup.string().required("*required field"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "not match password")
      .required("*required field"),
  });
