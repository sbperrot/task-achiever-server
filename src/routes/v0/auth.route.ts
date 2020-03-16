import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { User } from '../../models/user.model';

const router = express.Router();

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    passport.authenticate('local', {
        session: false,
    }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({message: 'Something is not right', user: user });
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            // generate a signed son web token with the contents of user object and return it in the response
            const token = jwt.sign(user, 'your_jwt_secret');
            return res.json({ user, token });
        });
    })(req, res);
});

router.post('/', async (req : Request, res : Response ) => {
    const { firstName, lastName, userName, password, email } = req.body;
    const payload = await User.findOrCreate({ where: { firstName, lastName, userName, password, email }});
    const user = payload[0].get({ plain: true });
    if (!user) {
        return res.status(400).json({message: 'Something is not right', user: user });
    }
    req.login(user, { session: false }, (err) => {
        if (err) res.send(err)
        const token = jwt.sign(user, 'your_jwt_secret');
        return res.json({ user, token });
    });
});

export default router;