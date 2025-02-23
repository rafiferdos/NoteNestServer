import { model, Schema } from 'mongoose'
import { IProduct, ProductCategory } from './product.interface'

const mProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price must be positive'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: Object.values(ProductCategory),
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity must be positive'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'In stock is required'],
    },
  },
  {
    timestamps: true,
  },
)

export const MProduct = model<IProduct>('products', mProductSchema)
