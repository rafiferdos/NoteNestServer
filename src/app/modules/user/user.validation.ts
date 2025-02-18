import { z } from 'zod'

const vUserSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .nonempty({ message: 'Name cannot be empty' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email format' })
    .trim()
    .toLowerCase(),
  password: z.string({ required_error: 'Password is required' }),
  role: z
    .enum(['admin', 'user'], {
      invalid_type_error: 'Role must be either "admin" or "user"',
    })
    .default('user'),
  isBlocked: z.boolean().default(false),
})

export const VUser = { vUserSchema }
