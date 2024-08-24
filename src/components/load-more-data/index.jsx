import React, { useEffect, useState } from 'react'
import './styles.css'

const LoadMoreData = () => {

    const [ loading, setLoading ] = useState( false );
    const [ products, setProducts ] = useState( [] );
    const [ count, setCount ] = useState( 0 );
    const [ disablebtn, setDisableBtn ] = useState( false );

    const fetchProducts = async () => {
        try {
            setLoading( true );
            const response = await fetch( `https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 10}` );
            const result = await response.json();

            if ( result && result.products && result.products.length ) {
                setProducts( ( prevData ) => [ ...prevData, ...result.products ] );
                setLoading( false );
            }

        } catch ( error ) {
            console.log( error );
            setLoading( false );
        }
    }

    useEffect( () => {
        fetchProducts();
    }, [ count ] );

    useEffect( () => {
        if ( products && products.length >= 100 ) {
            setDisableBtn( true )
        }
    } )

    if ( loading ) {
        return <div>Loading Products ...</div>
    }
    return (
        <div className="container">
            <div className="product-container">
                {
                    products && products.length ?
                        products.map( ( item, index ) => <div key={ index } className='product'>
                            <img src={ item.thumbnail } alt={ item.title } />
                            <p>{ item.title }</p>
                        </div> )
                        : null
                }
            </div>
            <div className="button-container">
                <button onClick={ () => setCount( count + 1 ) } disabled={ disablebtn }>Load More Data</button>
            </div>
        </div>
    )
}

export default LoadMoreData