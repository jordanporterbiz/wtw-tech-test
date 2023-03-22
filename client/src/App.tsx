import Layout from './components/layout'
import './App.css'
import { DataContextProvider } from './contexts/dataContext'

export default function App() {
  return (
    <DataContextProvider>
      <Layout />
    </DataContextProvider>
  )
}
