/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import LogController from './log.controller';

const log = new LogController();
const router = Router();

router.post('/log', log.saveToLog);

export default router;
