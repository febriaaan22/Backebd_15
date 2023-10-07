import express from 'express';
import 'dotenv/config';
import routes from './routes/main.route';
import { db } from './config/db.connection';
import middleWares from './middlewares';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
middleWares(app)
app.use(routes);

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected to database');
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});