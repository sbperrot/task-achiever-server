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
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const passport_1 = __importDefault(require("passport"));
const user_model_1 = require("../../models/user.model");
const router = express_1.default.Router();
router.post('/login', (req, res, next) => {
    console.log(req.body);
    passport_1.default.authenticate('local', {
        session: false,
    }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({ message: 'Something is not right', user: user });
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            // generate a signed son web token with the contents of user object and return it in the response
            const token = jsonwebtoken_1.default.sign(user, 'your_jwt_secret');
            return res.json({ user, token });
        });
    })(req, res);
});
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, userName, password, email } = req.body;
    const payload = yield user_model_1.User.findOrCreate({ where: { firstName, lastName, userName, password, email } });
    const user = payload[0].get({ plain: true });
    if (!user) {
        return res.status(400).json({ message: 'Something is not right', user: user });
    }
    req.login(user, { session: false }, (err) => {
        if (err)
            res.send(err);
        const token = jsonwebtoken_1.default.sign(user, 'your_jwt_secret');
        return res.json({ user, token });
    });
}));
exports.default = router;
//# sourceMappingURL=auth.route.js.map