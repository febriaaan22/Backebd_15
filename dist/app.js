"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const main_route_1 = __importDefault(require("./routes/main.route"));
const db_connection_1 = require("./config/db.connection");
const middlewares_1 = __importDefault(require("./middlewares"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
(0, middlewares_1.default)(app);
app.use(main_route_1.default);
db_connection_1.db.on('error', console.error.bind(console, 'connection error: '));
db_connection_1.db.once('open', function () {
    console.log('Connected to database');
});
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});
