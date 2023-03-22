import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { ChartData } from '../contexts/dataContext'

interface ChartDataProps {
  chartData: ChartData[]
}

export default function TempChart(chartDataProps: ChartDataProps) {
  const data = [
    {
      city_id: 1,
      min: 4000,
      max: 2400,
      avg: 2400
    },
    {
      city_id: 2,
      min: 3000,
      max: 1398,
      avg: 2210
    },
    {
      city_id: 3,
      min: 2000,
      max: 9800,
      avg: 2290
    },
    {
      city_id: 4,
      min: 2780,
      max: 3908,
      avg: 2000
    }
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={chartDataProps.chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Temperature in degrees celsius" />
        <YAxis />

        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="min" stroke="#8884d8" />
        <Line type="monotone" dataKey="max" stroke="#82ca9d" />
        <Line type="monotone" dataKey="avg" stroke="#ff5858" />
      </LineChart>
    </ResponsiveContainer>
  )
}
