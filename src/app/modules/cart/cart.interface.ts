import { Types } from 'mongoose'

export interface ICartItem {
  productId: Types.ObjectId
  quantity: number
}

export interface ICart {
  userId: string
  items: ICartItem[]
  totalPrice: number
}
