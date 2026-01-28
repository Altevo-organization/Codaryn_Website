import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z
    .string()
    .email("Veuillez entrer une adresse email valide"),
  company: z
    .string()
    .max(100, "Le nom de l'entreprise ne peut pas dépasser 100 caractères")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .regex(
      /^(\+33|0)[1-9](\d{2}){4}$|^$/,
      "Veuillez entrer un numéro de téléphone valide (format français)"
    )
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(5, "Le sujet doit contenir au moins 5 caractères")
    .max(200, "Le sujet ne peut pas dépasser 200 caractères"),
  message: z
    .string()
    .min(20, "Votre message doit contenir au moins 20 caractères")
    .max(5000, "Votre message ne peut pas dépasser 5000 caractères"),
  // Honeypot field - should be empty
  website: z.string().max(0, "").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const contactApiSchema = contactFormSchema.extend({
  // Additional server-side validation if needed
});

export type ContactApiData = z.infer<typeof contactApiSchema>;
