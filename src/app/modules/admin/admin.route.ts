import express from 'express'
import auth from '../../middlewares/auth'
import { CAdmin } from './admin.controller'

const router = express.Router()
router.patch('/users/:userId/deactive', auth('admin'), CAdmin.cMakeUserDeactive)

export const RAdmin = router
