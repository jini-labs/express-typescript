import cors, { CorsOptions } from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { router } from './router';
import log4js from 'log4js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const logger = log4js.configure('src/config/log.config.json').getLogger();

const corsOptions: CorsOptions = {
  origin: ['http://localhost:3000'],
  methods: [ 'GET', 'POST', 'PUT', 'DELET' ],
  allowedHeaders: [ 'Content-Type', 'X-Requested-With',  'Authorization' ],
}

app.use(cors(corsOptions));

// ミドルウェア設定
app.use(express.json());

// 
app.use('/users',router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  logger.log(`Server is running on port: ${port}`);
});
