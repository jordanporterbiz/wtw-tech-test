import express, { Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import Controller from './utils/interfaces/controller.interface.js';
import ErrorMiddleware from './middleware/error.middleware.js';
import helmet from 'helmet';
import mongoose from 'mongoose';

class App {

    
    public express: Application;
    public port: number; 

    public mongoose: mongoose.Mongoose;

    constructor(controllers: Controller[], port: number) {
        this.express = express();
        this.port = port;

        this.initialiseMiddleware();
        this.initialiseControllers(controllers);
        this.initialiseErrorHandling();
    }

    private initialiseMiddleware(): void {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(compression());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(compression());
    }

    private initialiseControllers(controllers: Controller[]): void {
        controllers.forEach((controller) => {
            this.express.use('/api', controller.router);
        });
    }

    private initialiseErrorHandling(): void {
        this.express.use(ErrorMiddleware);
    }



    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }


}


export default App;

