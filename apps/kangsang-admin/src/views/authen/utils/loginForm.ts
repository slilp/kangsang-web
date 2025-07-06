import { z } from "zod";

export const loginFormValidationSchema = z.object({
  email: z.string().min(1, "*required field").email("invalid format"),
  password: z.string().min(1, "*required field"),
});

export type LoginFormType = z.infer<typeof loginFormValidationSchema>;
