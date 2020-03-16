import express from 'express';
const router = express.Router();
import passport from 'passport';

import * as tasksRouter from './tasks.route';
import * as usersRouter from './users.route';
import * as authRouter from './auth.route';

router.use('/auth', authRouter.default);

router.use('/tasks', passport.authenticate('jwt', {session: false}), tasksRouter.default);
router.use('/users', passport.authenticate('jwt', {session: false}), usersRouter.default);

export default router;