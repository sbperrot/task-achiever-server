import express from 'express';
const router = express.Router();

import * as taskRouter from './tasks.route';

router.use('/tasks', taskRouter.default)

export default router;