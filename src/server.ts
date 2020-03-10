import express from 'express';
import { Request, Response } from "express";
import bodyParser from 'body-parser';
import routes from './routes';

export default class Server {
    readonly port : number;

    constructor(_port : number){
        this.port = _port;
    }

    /**
     * start
     * public method to start the current server using port class property
     */
    public start = () : void => {
        const app = express();
        app.use(bodyParser.json());

        app.use('/api', routes);

        app.get('/', (req : Request, res : Response) => {
            res.send('Salut le monde');
        });

        app.listen(this.port, () => {
            console.info(`Server listening on port : ${ this.port }`);
        });
    };


}