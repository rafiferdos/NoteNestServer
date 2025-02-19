import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { VProduct } from "./product.validation";
import { SProduct } from "./product.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const cCreateProduct = catchAsync(async (req, res) => {
  const validatedData = VProduct.vCreateProductSchema.parse(req.body)
  const product = await SProduct.sCreateProduct(validatedData)

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Product created successfully',
    data: product,
  })
})

const cGetAllProducts = catchAsync(async (req, res) => {
  const searchTerm = req.query.searchTerm as string
  const products = await SProduct.sGetAllProducts(searchTerm)
  
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Products fetched successfully',
    data: products,
  })
})

const cGetProductById = catchAsync(async (req, res) => {
  const product = await SProduct.sGetProductById(req.params.productId)
  if (!product) {
    sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      success: false,
      message: 'Product not found',
    })
    return
  }
})

