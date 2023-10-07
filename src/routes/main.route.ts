import express from 'express'
import { Request, Response } from 'express'
const routes = express.Router()
import taskRoutes from './task.route'

routes.get('/', (req: Request, res : Response) => {
    res.status(200).json({
        success: true,
        message: 'Assignment Week 15! CORS'
    })
})

routes.use('/', taskRoutes)

export default routes;