import express from 'express'
import { CCart } from './cart.controller'
import auth from '../../middlewares/auth'

const router = express.Router()

router.get('/', auth(), CCart.cGetCart)

router.post('/', auth(), CCart.cAddToCart)

export const RCart = router
