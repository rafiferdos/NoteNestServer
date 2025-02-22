import { StatusCodes } from 'http-status-codes'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { SCart } from './cart.service'

const cGetCart = catchAsync(async (req, res) => {
  const result = await SCart.sGetCart(req.user.id)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Cart retrieved successfully',
    data: result,
  })
})

const cAddToCart = catchAsync(async (req, res) => {
  const { productId, quantity } = req.body
  const result = await SCart.sAddToCart(req.user.id, productId, quantity)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Product added to cart successfully',
    data: result,
  })
})

export const CCart = {
  cGetCart,
  cAddToCart,
}
