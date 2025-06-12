import { z } from "zod";

const signupSchema = z.object({
  username: z.string().min(1, "Username is required"),
  firstname: z.string().min(1, "Firstname is required"),
  lastname: z.string().min(1, "Lastname is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("This is not a valid email"),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
});

const signinSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
});

const updateSchema = z.object({
  username: z.string().optional(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .optional(),
});

export { signupSchema, signinSchema, updateSchema };
