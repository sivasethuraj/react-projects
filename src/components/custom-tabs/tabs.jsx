import React, { useState } from 'react'
import './styles.css'
const Tabs = ( { tabContent, onChange } ) => {

    const [ currentTabIndex, setCurrentTabIndex ] = useState( 0 );

    const handleOnClick = ( index ) => {

        setCurrentTabIndex( index );
        onChange( index );
    }
    return (
        <div className="wrapper">
            <div className="heading">
                {
                    tabContent.map( ( tabItem, index ) => (
                        <div className={ `tab-item ${currentTabIndex === index ? 'active' : ''}` } onClick={ () => handleOnClick( index ) } key={ tabItem.label }>
                            <span className="labe">{ tabItem.label }</span>
                        </div>
                    ) )
                }
            </div>

            <div className="content">
                {
                    tabContent[ currentTabIndex ] && tabContent[ currentTabIndex ].content
                }
            </div>
        </div>
    )
}

export default Tabs