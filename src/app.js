import express from 'express'
import { pingRoutes } from './routes/ping.routes.js'

const app = express()

app.use('/api/ping', pingRoutes)

export default app
