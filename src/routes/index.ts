import express from 'express';
const router = express.Router();
import routes from './v0';

router.use('/v0', routes);

export default router;