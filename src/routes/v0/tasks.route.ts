import express, { Request, Response } from 'express';
import { Task } from '../../models';

const router = express.Router();

router.get('/', async (req : Request, res : Response ) => {
    const tasks = await Task.findAll({ include: Task.user });
    res.json(tasks);
});

export default router;