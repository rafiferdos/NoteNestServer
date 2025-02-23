import { Router } from 'express'
import { CProduct } from './product.controller'
import auth from '../../middlewares/auth'

const router = Router()

router.post('/', auth('admin'), CProduct.cCreateProduct)

router.get('/', CProduct.cGetAllProducts)

router.get('/:productId', CProduct.cGetProductById)

router.put('/:productId', auth('admin'), CProduct.cUpdateProduct)

router.delete('/:productId', auth('admin'), CProduct.cDeleteProduct)

export const RProduct = router
