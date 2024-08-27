import React from 'react'
import Tabs from './tabs'


const RandomComponent = () => {
    return <h1>Some random component</h1>
};

const TabTest = () => {

    const tab = [
        {
            label: "TAB 1",
            content: <h1>Content for tab 1</h1>
        },
        {
            label: "TAB 2",
            content: <h1> Content for tab 2</h1>
        },
        {
            label: "TAB 3",
            content: <RandomComponent />
        },
    ];

    const handleChange = ( currentTabIndex ) => {
        console.log( currentTabIndex )
    };

    return (
        <Tabs tabContent={ tab } onChange={ handleChange } />
    )
}

export default TabTest