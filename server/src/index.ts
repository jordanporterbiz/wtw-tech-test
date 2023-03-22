import "dotenv/config";
import 'module-alias/register.js';
import validateEnv from "./utils/validateEnv.js"; 
import App from "./app.js";
import CityController from "./resources/city/city.controller.js";
import TemperatureController from "./resources/temperature/temperature.controller.js";
import mongoose from 'mongoose';

validateEnv();
const app = new App([
    new CityController(),
    new TemperatureController(),
], 5001);

const uri = "mongodb+srv://JordanPorter:iNtXDpkrYNJrIKcf@wtw-cluster0.zu3mqr6.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri).then(
    () => { 
        console.log('Connected to MongoDB')
    },
  ).catch((err: Error) => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
    process.exit();
  })

app.listen();

