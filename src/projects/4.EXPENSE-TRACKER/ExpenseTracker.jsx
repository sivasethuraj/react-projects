import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import theme from './theme'
import GlobalState from './context'
import App from './App'

const ExpenseTracker = () => {
    return (
        <GlobalState>
            <ChakraProvider theme={ theme }>
                <App />
            </ChakraProvider>
        </GlobalState>
    )
}

export default ExpenseTracker