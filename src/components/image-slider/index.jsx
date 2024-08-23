import React, { useEffect, useState } from 'react'
import "./styles.css"
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { BsArrowLeftCircleFill } from 'react-icons/bs';

const ImageSlider = ( { url, limit = 5, page = 1 } ) => {

    const [ images, setImages ] = useState( [] );
    const [ currentSlide, setCurrentSlide ] = useState( 0 );
    const [ errorMessage, setErrorMessage ] = useState( null );
    const [ loading, setLoading ] = useState( false );

    // "htpps://picsum.photos/v2/list"
    const fetchImages = async ( getURL ) => {
        try {
            setLoading( true );
            const response = await fetch( `${getURL}?page=${page}&limit=${limit}` );
            const data = await response.json();

            if ( data ) {
                setImages( data );
                setLoading( false );
            }
        } catch ( error ) {
            setErrorMessage( error.message );
            setLoading( false );
        }
    }

    const handleClick = ( direction ) => {
        if ( direction === "prev" ) {
            setCurrentSlide( currentSlide === 0 ? images.length - 1 : currentSlide - 1 );
        } else if ( direction === "next" ) {
            setCurrentSlide( currentSlide === images.length - 1 ? 0 : currentSlide + 1 );
        } else {
            return null;
        }

    };
    useEffect( () => {
        if ( url !== '' ) fetchImages( url );
    }, [ url ] );

    if ( loading ) {
        return <div>Loading data ! Please Wait..</div>
    }
    if ( errorMessage !== null ) {
        return <div>Error Occured { errorMessage }</div>
    }

    return (
        <div className='container'>
            <BsArrowLeftCircleFill onClick={ () => handleClick( "prev" ) } className='arrow arrow-left' />
            {
                images && images.length ?
                    images.map( ( imageItem, index ) => {
                        return <img
                            key={ imageItem.id }
                            src={ imageItem.download_url }
                            alt={ imageItem.download_url }
                            className={ currentSlide === index ? "active-image image" : "in-active-image image" }
                        />
                    } )
                    : null
            }
            <BsArrowRightCircleFill onClick={ () => handleClick( "next" ) } className="arrow arrow-right" />
            <span className='circle-indicators'>
                {
                    images && images.length ?
                        images.map( ( _, index ) => (
                            <button
                                key={ index }
                                className={ currentSlide === index ? "active-indicator indicator" : "in-active-indicator indicator" }
                                onClick={ () => setCurrentSlide( index ) }
                            ></button> ) )
                        : null
                }
            </span>
        </div>
    )
}

export default ImageSlider