import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import RecipeItem from '../../components/recipe-list'

const Favorites = () => {

    const { loading, favoritesList } = useContext( GlobalContext );


    if ( loading ) return <div>Loading... Please Wait!</div>
    return (
        <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
            {
                favoritesList && favoritesList.length > 0 ?
                    favoritesList.map( ( item ) => <RecipeItem item={ item } key={ item.id } /> )
                    : <div>
                        <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing is added in favorites</p>
                    </div>
            }
        </div>
    )
}

export default Favorites