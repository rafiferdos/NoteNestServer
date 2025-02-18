import { Request, Response } from 'express'
import config from '../../config'
import catchAsync from '../../utils/catchAsync'
import { SAuth } from './auth.service'
import sendResponse from '../../utils/sendResponse'
import { StatusCodes } from 'http-status-codes'

const cLoginUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body
  const { accessToken } = await SAuth.sLoginUser(payload)

  res.cookie('token', accessToken, {
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    httpOnly: true,
    sameSite: 'strict',
    secure: config.NODE_ENV !== 'development',
  })

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User logged in successfully',
    data: accessToken,
  })
})

export const CAuth = {
  cLoginUser,
}
