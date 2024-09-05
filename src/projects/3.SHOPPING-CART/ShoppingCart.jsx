import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/header/Header'

const ShoppingCart = () => {
    return (
        <div>
            <Header />

            <Routes>
                <Route exact path='/shopping-cart/' element={ <Home /> } />
                <Route exact path='/shopping-cart/cart' element={ <Cart /> } />
            </Routes>
        </div>
    )
}

export default ShoppingCart