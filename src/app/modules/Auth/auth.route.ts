import express from 'express'
import { validateRequest } from '../../middlewares/validateRequest'
import { VAuth } from './auth.validation'
import { CAuth } from './auth.controller'

const router = express.Router()

router.post('/', validateRequest(VAuth.vLoginSchema), CAuth.cLoginUser)

export const RAuth = router
