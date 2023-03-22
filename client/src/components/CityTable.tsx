import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { City, DataContext } from '../contexts/dataContext'
import { useContext } from 'react'

const CityTable = (cities: any) => {
  const { setSelectedCity } = useContext(DataContext)
  const tableContents = cities?.props?.map((city: City) => {
    return (
      <TableRow
        key={city.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        onClick={() => setSelectedCity(city.city_id)}
      >
        <TableCell component="th" scope="row">
          {city.name}
        </TableCell>
        <TableCell align="right">{city.population}</TableCell>
        <TableCell align="right">{city.maxTemp}</TableCell>
      </TableRow>
    )
  })

  return (
    <div>
      <TableContainer component={Paper} sx={{ height: '500px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>City </TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Max Temp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableContents}</TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CityTable
