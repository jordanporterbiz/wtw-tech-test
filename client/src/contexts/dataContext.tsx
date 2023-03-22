import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState
} from 'react'

export interface City {
  city_id: number
  country: string
  name: string
  population: number
  maxTemp?: string
}

// export interface Temperature {
//   min: number
//   max: number
//   avg: number
// }

export interface Temperature {
  city_id: number
  temp: number
  date: Date
}

export interface Country {
  country: string
  abbreviation: string
}

export interface ChartData {
  city_id: number
  min: number
  max: number
  avg: number
}

interface DataPoints extends PropsWithChildren {
  children?: React.ReactNode
  cities: City[]
  temperatures: Temperature[]
  countries: Country[]
  chartData: ChartData[]
  selectedCountry?: Country
  filteredCities?: City[]
  setSelectedCountry(country: Country): void
  setSelectedCity(city_id: number): void
}

export const DataContext = createContext<DataPoints>({
  cities: [],
  temperatures: [],
  countries: [],
  chartData: [],
  selectedCountry: undefined,
  filteredCities: undefined,
  setSelectedCountry: () => {},
  setSelectedCity: () => {}
})

export const DataContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cities, setCities] = useState<City[]>([])
  const [temperatures, setTemperatures] = useState<Temperature[]>([])
  const [countries, setCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>()
  const [selectedCity, setSelectedCity] = useState<number | undefined>()
  const [filteredCities, setFilteredCities] = useState<City[]>([])
  const [chartData, setChartData] = useState<ChartData[]>([])

  // Add async function to fetch data from API
  const getCities = async () => {
    const url = 'http://localhost:5001/api/cities'
    const cityData = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('city data', { data })
        setCities(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const getTemperatures = async () => {
    const url = 'http://localhost:5001/api/temperature'
    const tempData = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('temp data', { data })

        setTemperatures(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const getCountries = async () => {
    const response = await fetch('/countries-with-country-code.json')
    const data = await response.json()
    setCountries([...data])
  }

  const getMaxTemp = (city: City) => {
    return (
      temperatures
        .filter((t) => t.city_id === city.city_id)
        .sort((a, b) => b.temp! - a.temp!)?.[0] || 'No Data'
    )
  }

  const findCitiesAndCalcMaxTemp = (country: Country) => {
    const foundCities = cities
      .filter((c) => c.country === country.abbreviation)
      .map((c) => {
        const maxTemp = getMaxTemp(c)
        return { ...c, maxTemp: maxTemp.temp.toString() }
      })
    setFilteredCities(foundCities)
  }

  const calcChartData = (city: any) => {
    const cityTemps = temperatures.filter((t) => t.city_id === city.city_id)
    const min = Math.min(...cityTemps.map((t) => t.temp))
    const max = Math.max(...cityTemps.map((t) => t.temp))
    const avg = cityTemps.reduce((a, b) => a + b.temp, 0) / cityTemps.length

    return { city_id: city.city_id, min, max, avg }
  }

  const initData = async () => {
    await getCountries()
    await getCities()
    await getTemperatures()
  }

  useEffect(() => {
    if (filteredCities?.length) {
      setChartData(filteredCities?.map((city) => calcChartData(city)))
    }
  }, [filteredCities])

  useEffect(() => {
    if (selectedCountry) {
      findCitiesAndCalcMaxTemp(selectedCountry)
      calcChartData(selectedCountry)
    }
  }, [selectedCountry, cities])

  useEffect(() => {
    initData()
  }, [])

  return (
    <DataContext.Provider
      value={{
        cities,
        temperatures,
        countries,
        selectedCountry,
        filteredCities,
        chartData,
        setSelectedCountry,
        setSelectedCity
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
