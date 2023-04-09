import './styles/global.css'

import { Routes } from './Routes'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './lib/react-query'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}
