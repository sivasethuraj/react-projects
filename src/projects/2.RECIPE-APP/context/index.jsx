import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext( null );

const GlobalState = ( { children } ) => {

    const [ searchParam, setSearchParam ] = useState( '' );
    const [ loading, setLoading ] = useState( false );
    const [ recipeList, setrecipeList ] = useState( [] );
    const [ recipeListData, setrecipeListData ] = useState( null );
    const [ favoritesList, setFavoritesList ] = useState( [] );

    const navigate = useNavigate();

    const handleSubmit = async ( event ) => {
        event.preventDefault();
        setLoading( true );

        try {
            const res = await fetch( `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}` );
            const data = await res.json();

            if ( data?.data?.recipes ) {
                setrecipeList( data.data.recipes );
                setLoading( false );
                setSearchParam( '' );
                navigate( '/recipe-app/home' );
            }
        } catch ( error ) {
            console.log( error.message );
            setLoading( false );
            setSearchParam( '' );
        }
    };

    const handleAddFavorite = ( getCurrentItem ) => {
        let cpyFavoritesList = [ ...favoritesList ];
        const index = cpyFavoritesList.findIndex( item => item.id === getCurrentItem.id );

        if ( index === -1 ) {
            cpyFavoritesList.push( getCurrentItem );
        } else {
            cpyFavoritesList.splice( index );
        }
        setFavoritesList( cpyFavoritesList );
    };

    return (
        <GlobalContext.Provider value={ { searchParam, setSearchParam, handleSubmit, loading, recipeList, recipeListData, setrecipeListData, favoritesList, setFavoritesList, handleAddFavorite } }>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalState