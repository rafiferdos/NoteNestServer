import { Router } from 'express'
import { RUser } from '../modules/user/user.route'
import { RAuth } from '../modules/Auth/auth.route'
import { RAdmin } from '../modules/admin/admin.route'
import { RCart } from '../modules/cart/cart.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth/register',
    route: RUser,
  },
  {
    path: '/auth/login',
    route: RAuth,
  },
  {
    path: '/admin',
    route: RAdmin,
  },
  {
    path: '/cart',
    route: RCart,
  },
]

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

export default router
