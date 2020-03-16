"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const passport_1 = __importDefault(require("passport"));
const tasksRouter = __importStar(require("./tasks.route"));
const usersRouter = __importStar(require("./users.route"));
const authRouter = __importStar(require("./auth.route"));
router.use('/auth', authRouter.default);
router.use('/tasks', passport_1.default.authenticate('jwt', { session: false }), tasksRouter.default);
router.use('/users', passport_1.default.authenticate('jwt', { session: false }), usersRouter.default);
exports.default = router;
//# sourceMappingURL=index.js.map