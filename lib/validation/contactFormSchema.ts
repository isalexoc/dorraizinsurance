import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address (e.g., john@example.com)")
    .max(100, "Email address must be less than 100 characters"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[\d\s\-\+\(\)]+$/, "Phone number can only contain digits, spaces, hyphens, plus signs, and parentheses"),
  insuranceType: z
    .string()
    .min(1, "Please select an insurance type"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message must be less than 1000 characters"),
  consent: z.boolean().optional(),
});
