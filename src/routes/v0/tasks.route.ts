import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req : Request, res : Response ) => {
    res.json({ task : 'This is a test' });
});

export default router;