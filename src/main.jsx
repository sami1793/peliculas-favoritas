import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { MovieProvider } from './context/MovieProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MovieProvider>
  </React.StrictMode>
)
