import React, { useContext, FC } from 'react'
import { DataContext } from '../contexts/dataContext'
import CityTable from './CityTable'
import Navbar from './Navbar'
import TempChart from './TempChart'

const Layout: FC = () => {
  const { countries, filteredCities, chartData } = useContext(DataContext)

  return (
    <div className="App">
      {countries && <Navbar countries={countries} />}

      <div className="container">
        <div className="temp-chart-container">
          <TempChart chartData={chartData} />
        </div>

        <div className="city-table-container">
          <CityTable props={filteredCities} />
        </div>
      </div>
    </div>
  )
}

export default Layout
