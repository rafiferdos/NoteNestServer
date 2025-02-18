type TRole = 'admin' | 'user'

export type TUser = {
  name: string
  email: string
  password: string
  role: TRole
  isActive?: boolean
}
