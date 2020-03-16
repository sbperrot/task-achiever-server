"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const passport_1 = __importDefault(require("passport"));
const LocalStrategy = require('passport-local').Strategy;
passport_1.default.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, cb) => {
    return models_1.User.findOne({ where: { email, password } })
        .then(user => {
        if (!user) {
            return cb(null, false, { message: 'Incorrect email or password.' });
        }
        return cb(null, user, { message: 'Logged In Successfully' });
    })
        .catch(err => cb(err));
}));
//# sourceMappingURL=passport-jwt.js.map