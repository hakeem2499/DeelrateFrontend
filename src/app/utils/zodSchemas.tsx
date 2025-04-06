import { z } from "zod"


export const saveSeatSchema = z.object({
    firstName: z
        .string()
        .min(3, 'First Name must be at least three characters')
        .max(15, 'First Name cannot be more than 15 characters'),
    lastName: z
        .string()
        .min(3, 'Last Name must be at least three characters')
        .max(15, 'Last Name cannot be more than 15 characters'),
    email: z.string().email(),
    digitalAssetInterest: z.enum(['RealEstate', 'SME', 'Commodity', 'Infrastructure'], {
        errorMap: () => ({ message: "Please select a valid Asset" }),
    }),
    agreeToTerms: z.boolean()
        .refine(val => val, {
            message: "You must accept the terms and conditions",
        }),


})

export type SaveSeatType = z.infer<typeof saveSeatSchema>

export const newsletterSchema = z.object({
    email: z.string().email(),
    agreeToTerms: z.boolean()
        .refine(val => val, {
            message: "You must accept the terms and conditions",
        }),
})

export type NewsletterType = z.infer<typeof newsletterSchema>

export const ContactUsSchema = z.object({
    firstName: z.string()
        .min(3, 'First name must be at least 3 characters')
        .max(15, 'First name cannot exceed 15 characters')
        .trim(),

    lastName: z.string()
        .min(3, 'Last name must be at least 3 characters')
        .max(15, 'Last name cannot exceed 15 characters')
        .trim(),

    email: z.string()
        .email('Please enter a valid email address')
        .transform(email => email.toLowerCase().trim()),

    jurisdiction: z.enum([
        'Nigeria', 'Europe', 'Africa', 'Asia',
        'United States', 'United Kingdom', 'Canada',
        'Not Incorporated', 'Other'
    ], {
        errorMap: () => ({ message: "Please select a valid jurisdiction" })
    }),

    isSponsor: z.boolean(),
    agreeToTerms: z.boolean()
        .refine(val => val, {
            message: "You must accept the terms and conditions",
        }),

    message: z.string()
        .min(10, 'Message must be at least 10 characters')
        .max(500, 'Message cannot exceed 500 characters')
        .optional()
        .transform(val => val || undefined) // Use undefined instead of null
}).refine(
    (data) => data.isSponsor || data.message,
    {
        message: "Message is required when not a sponsor",
        path: ["message"]
    }
);

export type ContactUsType = z.infer<typeof ContactUsSchema>


