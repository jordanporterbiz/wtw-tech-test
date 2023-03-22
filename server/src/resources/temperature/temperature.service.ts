import TemperatureModel from './temperature.model.js';
import Temperature from './temperature.interface.js';
import  csvtojson  from 'csvtojson';

const csvFilePath = './src/resources/temperature/temperatures.csv';


class TemperatureService {
    private temperature = TemperatureModel;

    public async getAllTemperatures(): Promise<Temperature[]> {
        try {
            const temps = await this.temperature.find();
            return temps;
        } catch (error) {
            throw new Error('Unable to retrieve city data');
        }
    }

    public async seedTemperatures(): Promise<void> {
        try {
                csvtojson().fromFile(csvFilePath).then((tempData) => {
                tempData.forEach(async (temperature: Temperature) => {
                    const newTemperature = new this.temperature(temperature);
                    await newTemperature.save();
                }); 
            }); 
            console.log('Temperatures have been seeded.')
        } catch (error) {
            throw new Error('Unable to seed temperature data');
      
        }
    }

}

export default TemperatureService;
