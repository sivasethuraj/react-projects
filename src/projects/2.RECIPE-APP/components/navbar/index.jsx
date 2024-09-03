import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context';

const Navbar = () => {

    const { searchParam, setSearchParam, handleSubmit } = useContext( GlobalContext );

    return (
        <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
            <h2 className='text-2xl font-sembold'>
                <NavLink to={ '/recipe-app' } >Foodrecipe</NavLink>
            </h2>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text" name='search' placeholder='Enter Items...'
                    className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200'
                    onChange={ ( e ) => setSearchParam( e.target.value ) }
                    value={ searchParam }
                />
            </form>
            <ul className='flex gap-5'>
                <li className='text-black hover:text-gray-700 duration-300'>
                    <NavLink to={ '/recipe-app/home' } >Home</NavLink>
                </li>
                <li className='text-black hover:text-gray-700 duration-300'>
                    <NavLink to={ '/recipe-app/favorites' }>Favorites</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar