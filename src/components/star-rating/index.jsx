import React from 'react'
import { useState } from 'react';
import "./styles.css"

import { FaStar } from 'react-icons/fa'

const StarRating = ( { noOfStars = 5 } ) => {

    const [ rating, setRating ] = useState( 0 );
    const [ hover, setHover ] = useState( 0 );

    const handleClick = ( currentIndex ) => {
        setRating( currentIndex );
    };
    const handleMouseEnter = ( currentIndex ) => {
        setHover( currentIndex );
    };
    const handleMouseLeave = () => {
        setHover( rating );
    };

    return (
        <div className='star-rating'>
            {
                [ ...Array( noOfStars ) ].map( ( _, index ) => {
                    index += 1;

                    return <FaStar
                        className={ index <= ( hover || rating ) ?
                            "active" : "inactive"
                        }
                        key={ index }
                        onClick={ () => handleClick( index ) }
                        onMouseEnter={ () => handleMouseEnter( index ) }
                        inMouseLeave={ () => handleMouseLeave() }
                        size={ 40 }
                    />
                } )
            }
        </div>
    )
}

export default StarRating