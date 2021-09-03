/* eslint-disable import/no-unresolved */
import * as dotenv from 'dotenv';
import express from 'express';
import router from './api/log/log.route';

dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

app.listen(8080);
