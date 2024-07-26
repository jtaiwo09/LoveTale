import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().trim().min(1, "Phone number is required"),
});

export type loginSchemaType = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  firstName: z.string().trim().min(3, "First name is required"),
  lastName: z.string().trim().min(3, "Last name is required"),
  interestedIn: z.string().trim().min(3, "Please select an option"),
  email: z.string().trim().min(3, "Email is required"),
  phone: z.string().trim().min(3, "Phone number is required"),
  gender: z.string().trim().min(3, "Gender is required"),
  dob: z.union([
    z.date({
      required_error: "A date of birth is required.",
    }),
    z.null(),
  ]),
  country: z.string().trim().min(1, "Please select your country"),
});

export type registerSchemaType = z.infer<typeof registerSchema>;

export const filterSchema = z.object({
  viewStyle: z.string(),
  location: z.string(),
});

export type filterSchemaType = z.infer<typeof filterSchema>;
