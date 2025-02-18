import { z } from 'zod'

const vLoginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address')
    .trim(),
  password: z.string({ required_error: 'Password is required' }),
})

export const VAuth = { vLoginSchema }
