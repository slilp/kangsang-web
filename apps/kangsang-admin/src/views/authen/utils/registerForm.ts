import { z } from "zod";

export const registerFormValidationSchema = z
  .object({
    email: z.string().min(1, "*required field").email("invalid format"),
    password: z.string().min(1, "*required field"),
    confirmPassword: z.string().min(1, "*required field"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "not match password",
    path: ["confirmPassword"],
  });

export type RegisterFormType = z.infer<typeof registerFormValidationSchema>;
