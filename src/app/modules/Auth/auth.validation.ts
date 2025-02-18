import { z } from 'zod'

const vLoginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address')
    .trim(),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters'),
})

export const VAuth = { vLoginSchema }
