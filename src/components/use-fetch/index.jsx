import { useEffect, useState } from 'react'

const useFetch = ( url, options = {} ) => {

    const [ data, setData ] = useState( null );
    const [ pending, setPending ] = useState( null );
    const [ error, setError ] = useState( null );

    const fetchData = async () => {
        setPending( true );
        try {
            const response = await fetch( url, { ...options } );
            if ( !response.ok ) throw new Error( response.statusText );

            const result = await response.json();
            setError( null );
            setData( result );
            setPending( false );

        } catch ( error ) {
            setError( `${error}.error occured!` );
            setPending( false );
        }
    }

    useEffect( () => {
        fetchData();
    }, [ url ] );

    return {
        data, error, pending
    };
}

export default useFetch