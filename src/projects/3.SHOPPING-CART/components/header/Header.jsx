import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='flex items-center justify-between h-20 max-w-6xl mx-auto'>
            <Link to={ '/shopping-cart/' }>
                <div className="ml-5">
                    <h1 className='text-red-900 font-bold text-xl sm:text-2xl md:text-2xl cursor-pointer tracking-wide'>
                        REACT REDUX SHOPPING CART
                    </h1>
                </div>
            </Link>

            <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">

                <Link to={ '/shopping-cart/' }>
                    <li className='cursor-pointer list-none'>Home</li>
                </Link>
                <Link to={ '/shopping-cart/cart' }>
                    <li className='cursor-pointer list-none'>Cart</li>
                </Link>

            </ul>
        </nav>
    )
}

export default Header