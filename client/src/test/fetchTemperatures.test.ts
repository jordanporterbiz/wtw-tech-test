

describe('fetch temperatures from API', () => { 
    it('should fetch temperatures', async () => { 
        
        const fetchTemperatures = async () => {
            const response = await fetch('http://localhost:5001/api/temperature');
            const temperatures = await response.json();
            return temperatures;
        };
        
        const temperatures = await fetchTemperatures(); 
        expect(temperatures[0]).toEqual(
        { 
            __v: 0,
            _id: '6419c5f088f0835612ea7b7f',
            city_id: 1, 
            createdAt: "2023-03-21T14:57:55.260Z",
            date: '2014-01-01T00:00:00.000Z', 
            temp: 8.640839,             
            updatedAt: "2023-03-21T14:57:55.260Z",
        }
        ); 


    }, 10000); 
    });

    export {}