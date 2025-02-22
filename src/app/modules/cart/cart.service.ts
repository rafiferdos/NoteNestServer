import { StatusCodes } from 'http-status-codes'
import AppError from '../../errors/AppError'
import { MProduct } from '../product/product.model'
import { MCart } from './cart.model'
import { Types } from 'mongoose'

const sGetCart = async (userId: string) =>
  await MCart.findOne({ userId }).populate('items.productId')

const sAddToCart = async (
  userId: string,
  productId: string,
  quantity: number,
) => {
  // retrieve the product details for stock and price
  const product = await MProduct.findById(productId)

  if (!product) throw new AppError(StatusCodes.NOT_FOUND, 'Product not found')
  if (quantity > product.quantity)
    throw new AppError(StatusCodes.BAD_REQUEST, 'Not enough stock')

  let cart = await MCart.findOne({ userId })

  if (!cart) {
    cart = new MCart({
      userId,
      items: [{ productId: new Types.ObjectId(productId), quantity }],
      totalPrice: product.price * quantity,
    })
  } else {
    const existingItem = cart.items.findIndex(
      (item) => item.productId.toString() === productId,
    )
    if (existingItem !== -1) {
      const newQuantity = cart.items[existingItem].quantity + quantity
      if (newQuantity > product.quantity)
        throw new AppError(StatusCodes.BAD_REQUEST, 'Not enough stock')
      cart.items[existingItem].quantity = newQuantity
    } else {
      cart.items.push({ productId: new Types.ObjectId(productId), quantity })
    }
    cart.totalPrice += product.price * quantity
  }
  await cart.save()
  await cart.populate('items.productId')
  return cart
}

export const SCart = {
  sGetCart,
  sAddToCart,
}
