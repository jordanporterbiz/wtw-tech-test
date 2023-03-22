import { toCamelCase } from "../utils/toCamelCase"

interface CityResponse {
  data: any
  message: string
  status: number
}

class CityClient {
  request = async <T>(endpoint: string): Promise<T> => {
    // Can use string interpolation here to build the url if you want
    let uri = `/api/${endpoint}`

    const requestParams = {
      method: 'GET',
      json: true,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    const response = await fetch(uri, requestParams)

    if (!response.ok) {
      const { message } = await response.json()
      throw new Error(message)
    }
    const json = await response.json()
    const formattedData = toCamelCase(json)
    return formattedData
  }

  // CITY REQUESTS
  fetchCards = async (queryParams?: Record<string, any>) => {
     let path = 'cities'
    const response = await this.request<CityResponse>(path)
    return response
  }

}

export const cityClient = new CityClient()
