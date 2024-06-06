import { z } from 'zod'


export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    contact_phone: z.string(),
    phone_verified: z.boolean(),
    email: z.string(),
    email_verified: z.boolean(),
    password: z.string(),
    created_at: z.string(),
    updated_at: z.string()
    
})
