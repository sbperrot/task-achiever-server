import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import { Database } from './services';
import { Task, User, TaskList } from './models';
import session from 'express-session';

require('./lib/auth/passport-jwt');

export default class Server {
    readonly port: number;

    constructor(_port: number) {
        this.port = _port;
    }

    /**
     * start
     * public method to start the current server using port class property
     */
    public start = async () => {
        await Database.syncModels();
        const user = await User.create({ firstName: 'Sébastien', lastName: 'Perrot', email: 'sebastien.perrot@saegus.com', password: 'test1234' });
        const taskList = await TaskList.create({ label: 'My Tasklist', user_id: user.id });
        const task = await Task.create({ label: 'This is a task', user_id: user.id, task_list_id: taskList.get('id') });
        const app = express();
        app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: { secure: true }
        }));
        app.use(bodyParser.json());
        app.use('/api', routes);
        app.listen(this.port, () => {
            console.info(`Server listening on port : ${this.port}`);
        });
    };
};
