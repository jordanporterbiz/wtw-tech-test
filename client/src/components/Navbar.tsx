import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../contexts/dataContext'

interface Country {
  country: string
  abbreviation: string
}
interface Props {
  countries: Country[]
}
function Navbar(props: Props) {
  const { selectedCountry, setSelectedCountry } = useContext(DataContext)

  const { countries } = props

  useEffect(() => {
    if (!countries?.length) return
    setSelectedCountry(countries[0])
  }, [countries])

  const handleChange = (e: SelectChangeEvent<string | Country>) => {
    const selectedCountry = countries?.find(
      (country) => country.abbreviation === e.target.value
    )
    setSelectedCountry(selectedCountry!)
  }

  const items = countries.length
    ? countries.map((country: Country, idx: Number) => {
        return (
          <MenuItem
            key={country.country}
            value={country.abbreviation}
            defaultValue={country.abbreviation}
            selected={idx === 0}
          >
            {country.country}
          </MenuItem>
        )
      })
    : [
        <MenuItem
          key="NO COUNTRIES"
          value={''}
          defaultValue={'NO COUNTRIES'}
          selected={true}
        >
          No Countries
        </MenuItem>
      ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WTW - Tech Test
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="country-select-label">Country</InputLabel>
            <Select
              labelId="country-select-label"
              id="country-select"
              value={selectedCountry?.abbreviation || ''}
              label="Country"
              onChange={(e) => handleChange(e)}
            >
              {items}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
