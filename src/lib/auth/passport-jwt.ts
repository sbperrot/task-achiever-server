import { User } from '../../models';
import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;
import passportJWT from "passport-jwt";
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (email: string, password: string, cb: Function) => {
        return User.findOne({ where: { email, password } })
            .then(user => {
                if (!user) {
                    return cb(null, false, { message: 'Incorrect email or password.' });
                }
                return cb(null, user.get({ plain: true }), { message: 'Logged In Successfully' });
            })
            .catch(err => {
                console.log("errrrrro ", err)
                cb(err)
            });
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
},
    (jwtPayload, cb) => {
        return User.findByPk(jwtPayload.id)
            .then((user: any) => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));