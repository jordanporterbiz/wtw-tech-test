import { Router, Request, Response, NextFunction } from 'express';
import  Controller from '../../utils/interfaces/controller.interface.js';
import HttpException from '../..//utils/exceptions/http.exception.js';
import validationMiddleware from '../../middleware/validation.middleware.js';
import validate from '../../resources/temperature/temperature.validation.js';
import TemperatureService from './temperature.service.js';


class TemperatureController implements Controller {
    public path = '/temperature';
    public router = Router();
    private temperatureService
    

    constructor() {
        this.initialiseRoutes();
        this.temperatureService = new TemperatureService();

    }

    private initialiseRoutes(): void {
        this.router.get(`${this.path}`, this.getAllTemperatures);
        this.router.post(`${this.path}`, this.seedTemperatures);
    }

    private getAllTemperatures = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const temps = await this.temperatureService.getAllTemperatures();
            res.status(200).json(temps);
        } catch (e) {
            next(new HttpException(500, e.message));
        }
    }


    private seedTemperatures = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
             await this.temperatureService.seedTemperatures();
            res.status(201).json({ success: 'Success! Temperatures have been seeded.' });
        } catch (e) {
            next(new HttpException(500, e.message));
        }
    }

}

export default TemperatureController;
