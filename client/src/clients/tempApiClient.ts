import { toCamelCase } from "../utils/toCamelCase"


interface TempResponse {
  data: any
  message: string
  status: number
}

class TempClient {
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

  // TEMPERATURE REQUESTS
  fetchTemperatures = async () => {
     let path = 'temperature'

    const response = await this.request<TempResponse>(path)
    return response
  }

}

export const tempClient = new TempClient()
