import { Router, Request, Response, NextFunction } from 'express';
import  Controller from '../../utils/interfaces/controller.interface.js';
import HttpException from '../..//utils/exceptions/http.exception.js';
import validationMiddleware from '../../middleware/validation.middleware.js';
import validate from '../../resources/city/city.validation.js';
import CityService from './city.service.js'; 


class CityController implements Controller {
    public path = '/cities';
    public router = Router();
    private cityService
    

    constructor() {
        this.initialiseRoutes();
        this.cityService = new CityService();

    }

    private initialiseRoutes(): void {
        this.router.get(`${this.path}`, this.getAllCities);
        this.router.post(`${this.path}`, this.seedCities);
    }

    private getAllCities = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const cities = await this.cityService.getAllCities();
            res.status(200).json(cities);
        } catch (e) {
            next(new HttpException(500, e.message));
        }
    }


    private seedCities = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
             await this.cityService.seedCities();
            res.status(201).json({ success: 'Success! Cities have been seeded.' });
        } catch (e) {
            next(new HttpException(500, e.message));
        }
    }

}

export default CityController;
