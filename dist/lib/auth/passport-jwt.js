"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const passport_1 = __importDefault(require("passport"));
const LocalStrategy = require('passport-local').Strategy;
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const JWTStrategy = passport_jwt_1.default.Strategy;
const ExtractJWT = passport_jwt_1.default.ExtractJwt;
passport_1.default.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, cb) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.User.findOne({ where: { email, password } })
        .then(user => {
        if (!user) {
            return cb(null, false, { message: 'Incorrect email or password.' });
        }
        return cb(null, user.get({ plain: true }), { message: 'Logged In Successfully' });
    })
        .catch(err => {
        console.log("errrrrro ", err);
        cb(err);
    });
})));
passport_1.default.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
}, (jwtPayload, cb) => {
    return models_1.User.findByPk(jwtPayload.id)
        .then((user) => {
        return cb(null, user);
    })
        .catch(err => {
        return cb(err);
    });
}));
//# sourceMappingURL=passport-jwt.js.map