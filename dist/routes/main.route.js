"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const task_route_1 = __importDefault(require("./task.route"));
routes.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to week 15'
    });
});
routes.use('/', task_route_1.default);
exports.default = routes;
