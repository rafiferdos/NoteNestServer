import { StatusCodes } from "http-status-codes"
import AppError from "../../errors/AppError"
import { MUser } from "../user/user.model"

const sMakeUserDeactive = async (userId: string) => {
  const targetUser = await MUser.findById(userId)
  if (!targetUser) throw new AppError(StatusCodes.NOT_FOUND, 'User not found')
  
  const result = await MUser.findByIdAndUpdate(
    userId,
    { isActive: false },
    { new: true }
  )
  return result
}

// todo: implement admin crud operations

export const SAdmin = {
  sMakeUserDeactive
}