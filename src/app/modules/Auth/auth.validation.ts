import { z } from 'zod'

const vLoginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address')
    .trim(),
  passcode: z
    .string({ required_error: 'Passcode is required' })
    .min(6, 'Passcode must be at least 6 characters')
    .max(20, 'Passcode must be at most 20 characters'),
})

export const VAuth = { vLoginSchema }
