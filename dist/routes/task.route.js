"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cors_2 = __importDefault(require("../middlewares/cors"));
const task_controller_1 = require("../controllers/task.controller");
const taskRoutes = express_1.default.Router();
taskRoutes.get('/v1/tasks', (0, cors_1.default)(cors_2.default.limitedClient), task_controller_1.getAllTask);
taskRoutes.get('/v1/tasks/:id', (0, cors_1.default)(cors_2.default.limitedClient), task_controller_1.getOneTask);
taskRoutes.post('/v1/tasks', (0, cors_1.default)(cors_2.default.limitedClient), task_controller_1.createTask);
taskRoutes.options('/v1/tasks/:id', (0, cors_1.default)(cors_2.default.globalClient));
taskRoutes.options('/v1/tasks', (0, cors_1.default)(cors_2.default.limitedClient));
taskRoutes.patch('/v1/tasks/:id', (0, cors_1.default)(cors_2.default.globalClient), task_controller_1.updateTask);
taskRoutes.delete('/v1/tasks/:id', (0, cors_1.default)(cors_2.default.globalClient), task_controller_1.deleteTask);
exports.default = taskRoutes;
