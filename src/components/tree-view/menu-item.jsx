import React, { useState } from 'react'
import MenuList from './menu-list'
import { FaMinus, FaPlus } from 'react-icons/fa'

const MenuItem = ( { item } ) => {
    const [ showChildren, setShowChildren ] = useState( {} );

    const toggleChildren = ( currentLabel ) => {
        setShowChildren( {
            ...showChildren,
            [ currentLabel ]: !showChildren[ currentLabel ],
        } );
    }
    return (
        <li>
            <div className="menu-item">
                <p>{ item.label }</p>
                {
                    item && item.children && item.children.length > 0 ?
                        <span onClick={ () => toggleChildren( item.label ) }>
                            {
                                showChildren[ item.label ] ?
                                    <FaMinus color='#fff' size={ 25 } />
                                    : <FaPlus color='#fff' size={ 25 } />
                            }
                        </span>
                        : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && showChildren[ item.label ] ?
                    <MenuList list={ item.children } />
                    : null
            }
        </li>
    )
}

export default MenuItem