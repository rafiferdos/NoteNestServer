import { model, Schema } from 'mongoose'
import { ICart, ICartItem } from './cart.interface'

const mCartItemSchema = new Schema<ICartItem>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'products',
    required: [true, 'Product ID is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity must be positive'],
  },
})

const mCartSchema = new Schema<ICart>({
  userId: {
    type: String,
    required: [true, 'User ID is required'],
  },
  items: {
    type: [mCartItemSchema],
    default: [],
  },
  totalPrice: {
    type: Number,
    required: true,
    min: [0, 'Total price must be positive'],
  },
})

export const MCart = model<ICart>('cart', mCartSchema)
