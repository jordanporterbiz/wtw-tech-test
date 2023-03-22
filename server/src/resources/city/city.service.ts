import CityModel from './city.model.js';
import City from './city.interface.js';
import  csvtojson  from 'csvtojson';

const csvFilePath = './src/resources/city/cities.csv';


class CityService {

    private city = CityModel;


    public async getAllCities(): Promise<City[]> {
        try {
            const cities = await this.city.find();
            return cities;
        } catch (error) {
            throw new Error('Unable to retrieve city data');
        }
    }

    public async seedCities(): Promise<void> {
        try {
                csvtojson().fromFile(csvFilePath).then((cityData) => {
                cityData.forEach(async (city: City) => {
                    const newCity = new this.city(city);
                    await newCity.save();
                }); 
            }); 
            console.log('Cities have been seeded.')
        } catch (error) {
            throw new Error('Unable to seed city data');
      
        }
    }

}

export default CityService;
