import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context';

const Details = () => {

    const { id } = useParams();
    const { recipeListData, setrecipeListData, handleAddFavorite, favoritesList } = useContext( GlobalContext );

    const getRecipeDetails = async () => {
        const response = await fetch( `https://forkify-api.herokuapp.com/api/v2/recipes/${id}` );
        const data = await response.json();

        if ( data?.data?.recipe ) {
            setrecipeListData( data.data.recipe )
        }
    };

    useEffect( () => {
        getRecipeDetails();
        console.log( favoritesList, recipeListData );
    }, [] );

    return (
        <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>

            <div className="row-start-2 lg:row-start-auto">
                <div className="h-96 overflow-hidden rounded-xl group">
                    <img
                        src={ recipeListData?.image_url }
                        className='w-full h-full object-cover block group-hover:scale-105 duration-300'
                        alt='recipe-image'
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <span className='text-sm text-cyan-700 font-medium'>{ recipeListData?.publisher }</span>
                <h3 className='font-bold text-2xl truncate text-black'>{ recipeListData?.title }</h3>
                <div>
                    <button className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md  bg-black text-white'
                        onClick={ () => handleAddFavorite( recipeListData ) }>
                        {
                            favoritesList && favoritesList.length > 0 && favoritesList.findIndex( ( item ) => item.id === recipeListData?.id ) !== -1 ? 'Remove from favorites' : 'Add to favoirtes'
                        }</button>
                </div>
                <div>
                    <span className='text-2xl font-semibold text-black'>Ingredients</span>
                    <ul className='flex flex-col gap-3'>
                        {
                            recipeListData?.ingredients.map( ( ingredient, index ) => <li key={ index }>
                                <span className='text-2xl font-semibold text-black'>{ ingredient.quantity } { ingredient.unit }</span>
                                <span className='text-2xl font-semibold text-black'>{ ingredient.description }</span>
                            </li> )
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Details