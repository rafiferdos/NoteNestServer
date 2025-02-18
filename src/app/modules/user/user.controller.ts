import { SUser } from './user.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { StatusCodes } from 'http-status-codes'

const cRegisterUser = catchAsync(async (req, res) => {
  const userData = req.body
  const result = await SUser.sRegisterUser(userData)

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User registered successfully',
    data: result,
  })
})

const cGetAllUsers = catchAsync(async (_req, res) => {
  const result = await SUser.sGetAllUsers()

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'All users fetched successfully',
    data: result,
  })
})

export const CUser = {
  cRegisterUser,
  cGetAllUsers,
}
