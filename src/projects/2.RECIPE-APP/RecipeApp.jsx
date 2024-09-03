import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Favorites from './pages/favorites'
import Details from './pages/details'

const RecipeApp = () => {
    return (
        <div>
            <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
                <Navbar />
                <Routes>
                    <Route path='/recipe-app/home' element={ <Home /> } />
                    <Route path='/recipe-app/favorites' element={ <Favorites /> } />
                    <Route path='/recipe-app/recipe-item/:id' element={ <Details /> } />
                </Routes>
            </div>
        </div>
    )
}

export default RecipeApp