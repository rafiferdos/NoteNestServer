import express from 'express'
import { CCart } from './cart.controller'

const router = express.Router()

router.get('/', CCart.cGetCart)

router.post('/', CCart.cAddToCart)

export default router
