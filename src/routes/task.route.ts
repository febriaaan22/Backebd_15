import express from 'express'
import cors from 'cors'
import clientAccess from '../middlewares/cors'
import { getAllTask, getOneTask, createTask, updateTask, deleteTask } from '../controllers/task.controller'

const taskRoutes = express.Router()

taskRoutes.get('/v1/tasks',cors(clientAccess.limitedClient), getAllTask)
taskRoutes.get('/v1/tasks/:id',cors(clientAccess.limitedClient), getOneTask)
taskRoutes.post('/v1/tasks', cors(clientAccess.limitedClient), createTask)

taskRoutes.options('/v1/tasks/:id', cors(clientAccess.globalClient))
taskRoutes.options('/v1/tasks', cors(clientAccess.limitedClient))
taskRoutes.patch('/v1/tasks/:id', cors(clientAccess.globalClient), updateTask)
taskRoutes.delete('/v1/tasks/:id', cors(clientAccess.globalClient), deleteTask)

export default taskRoutes