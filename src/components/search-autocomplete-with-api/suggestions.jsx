import React from 'react'
import "./styles.css"

const Suggestions = ( { data, handleClick } ) => {
    return (
        <ul>
            {
                data && data.length ?
                    data.map( ( item, index ) => <li key={ index } onClick={ handleClick } className='suggestion-item'>{ item }</li> )
                    : null
            }
        </ul>
    )
}

export default Suggestions