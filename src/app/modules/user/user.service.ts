import { TUser } from './user.interface'
import { MUser } from './user.model'

const sRegisterUser = async (payload: TUser) => await MUser.create(payload)

const sGetAllUsers = async () => await MUser.find()

const sGetOneUser = async (id: string) => await MUser.findById(id)

export const SUser = {
  sRegisterUser,
  sGetAllUsers,
  sGetOneUser,
}
