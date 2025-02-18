import express from 'express'
import { validateRequest } from '../../middlewares/validateRequest'
import { VUser } from './user.validation'
import { CUser } from './user.controller'

const router = express.Router()

router.post('/', validateRequest(VUser.vUserSchema), CUser.cRegisterUser)
router.get('/register', CUser.cGetAllUsers)

export const RUser = router
