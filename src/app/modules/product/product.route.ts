import { Router } from 'express'
import { CProduct } from './product.controller'

const router = Router()

router.post('/', CProduct.cCreateProduct)

router.get('/', CProduct.cGetAllProducts)

router.get('/:productId', CProduct.cGetProductById)

router.put('/:productId', CProduct.cUpdateProduct)

router.delete('/:productId', CProduct.cDeleteProduct)

export default router
