"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(require("./helmet"));
const morgan_1 = __importDefault(require("./morgan"));
const xRequestId_1 = __importDefault(require("./xRequestId"));
const middleWares = (app) => {
    (0, helmet_1.default)(app);
    (0, morgan_1.default)(app);
    app.use(xRequestId_1.default);
};
exports.default = middleWares;
