import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { SAdmin } from './admin.service'
import AppError from '../../errors/AppError'
import { StatusCodes } from 'http-status-codes'
import sendResponse from '../../utils/sendResponse'

const cMakeUserDeactive = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params
  const result = await SAdmin.sMakeUserDeactive(userId)

  if (!result)
    throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to make user deactive')

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User is deactived successfully',
    data: result,
  })
})

// todo: implement admin crud operations

export const CAdmin = {
  cMakeUserDeactive,
}
