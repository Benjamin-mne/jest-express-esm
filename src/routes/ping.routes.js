import { Router } from 'express'
import { sendPong } from '../controller/ping.controller.js'

export const pingRoutes = Router()

pingRoutes.get('/', sendPong)
