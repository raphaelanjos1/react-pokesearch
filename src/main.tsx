import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './Theme'
import { QueryClientProvider, QueryClient } from 'react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </QueryClientProvider>,

  document.getElementById('root')
)
