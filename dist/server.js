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
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const services_1 = require("./services");
const models_1 = require("./models");
const express_session_1 = __importDefault(require("express-session"));
class Server {
    constructor(_port) {
        /**
         * start
         * public method to start the current server using port class property
         */
        this.start = () => __awaiter(this, void 0, void 0, function* () {
            yield services_1.Database.syncModels();
            const user = yield models_1.User.create({ firstName: 'Sébastien', lastName: 'Perrot' });
            const taskList = yield models_1.TaskList.create({ label: 'My Tasklist', user_id: user.id });
            const task = yield models_1.Task.create({ label: 'This is a task', user_id: user.id, task_list_id: taskList.get('id') });
            const app = express_1.default();
            app.use(express_session_1.default({
                secret: 'keyboard cat',
                resave: false,
                saveUninitialized: true,
                cookie: { secure: true }
            }));
            app.use(body_parser_1.default.json());
            app.use('/api', routes_1.default);
            app.listen(this.port, () => {
                console.info(`Server listening on port : ${this.port}`);
            });
        });
        this.port = _port;
    }
}
exports.default = Server;
;
//# sourceMappingURL=server.js.map