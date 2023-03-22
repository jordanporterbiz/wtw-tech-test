
import { Schema, model, Document } from 'mongoose';
import Temperature from './temperature.interface.js';

const TemperatureSchema = new Schema({
    city_id: {
        type: Number,
        required: true,
    },
    temp: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true
});

export default model<Temperature>('Temperature', TemperatureSchema);