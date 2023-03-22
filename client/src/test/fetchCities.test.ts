

describe('fetch cities from API', () => { 
    it('should fetch cities from the backend API', async () => { 
        
        const fetchCities = async () => {
            const response = await fetch('http://localhost:5001/api/cities');
            const cities = await response.json();
            return cities;
        };
        
        const cities = await fetchCities(); 

        expect(cities[0]).toEqual(
        { 
            __v: 0,
            _id: "6419ca63deaaa796505c423b",
            city_id: 1,
            name: 'Tokyo',
            country: 'JP',
            population: 39105000,
            createdAt:'2023-03-21T15:16:51.842Z',
            updatedAt:'2023-03-21T15:16:51.842Z'
        }, 
        ); 


    }, 10000); 
    });

    export {}

    