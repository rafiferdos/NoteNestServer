import { z } from 'zod'
import { ProductCategory } from './product.interface'

const vCreateProductSchema = z.object({
  name: z.string().nonempty('Name is required'),
  brand: z.string().nonempty('Brand is required'),
  price: z.number().positive('Price must be positive'),
  imageUrl: z.string().url('Invalid URL'),
  category: z.nativeEnum(ProductCategory, { message: 'Invalid category' }),
  description: z.string().nonempty('Description is required'),
  quantity: z.number().positive('Quantity must be positive'),
  inStock: z.boolean(),
})

const vUpdateProductSchema = z.object({
  name: z.string().optional(),
  brand: z.string().optional(),
  price: z.number().positive('Price must be positive').optional(),
  imageUrl: z.string().url('Invalid URL').optional(),
  category: z
    .nativeEnum(ProductCategory, { message: 'Invalid category' })
    .optional(),
  description: z.string().optional(),
  quantity: z.number().positive('Quantity must be positive').optional(),
  inStock: z.boolean().optional(),
})

export const VProduct = {
  vCreateProductSchema,
  vUpdateProductSchema,
}
