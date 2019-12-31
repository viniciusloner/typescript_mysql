import { Router } from 'express'
const router = Router()
import { indexRoutes } from '../controllers/index.controller'

router.route('/')
    .get(indexRoutes)

export default router 