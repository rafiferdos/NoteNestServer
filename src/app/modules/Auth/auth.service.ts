import Jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'
import AppError from '../../errors/AppError'
import { MUser } from '../user/user.model'
import { TLoggedInUser } from './auth.interface'
import bcrypt from 'bcrypt'
import config from '../../config'

const sLoginUser = async (payload: TLoggedInUser) => {
  const isUserExist = await MUser.findOne({ email: payload.email })
  if (!isUserExist) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Invalid email or password')
  }

  const isUserActive = isUserExist?.isActive
  if (!isUserActive) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'User is not active')
  }

  const isPasswordMatch = await bcrypt.compare(
    payload.password,
    isUserExist.password,
  )
  if (!isPasswordMatch) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Invalid email or password')
  }
  const JwtPayload = {
    id: isUserExist.id,
    name: isUserExist?.name,
    email: isUserExist?.email,
    role: isUserExist?.role,
    isActive: isUserExist?.isActive,
  }
  const accessToken = Jwt.sign(JwtPayload, config.jwt_access_token as string, {
    expiresIn: '1d',
  })
  return {
    accessToken,
  }
}

export const SAuth = {
  sLoginUser,
}
