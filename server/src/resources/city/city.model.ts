import { Schema, model, Document } from 'mongoose';
import City from './city.interface.js';

const CitySchema = new Schema({
    city_id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    population: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
});

export default model<City>('City', CitySchema);