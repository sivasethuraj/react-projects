import React, { useContext } from 'react'

import Accordian from '../accordian/';
import RandomColor from '../random-color';
import TreeView from '../tree-view'
import LightDarkMode from '../light-dark-mode';
import TicTacToe from '../tic-tac-toe'
import { FeatureFlagContext } from './context';



const FeatureFlags = () => {

    const { loading, enabledFlags } = useContext( FeatureFlagContext );

    const componentToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />,
        },
        {
            key: 'showTicTacToe',
            component: < TicTacToe />,
        },
        {
            key: 'showRandomColor',
            component: <RandomColor />,
        },
        {
            key: 'showAccordian',
            component: < Accordian />,
        },
        {
            key: 'showTreeView',
            component: <TreeView />,
        },
    ];

    const checkEnabledflags = ( getCurrentKey ) => {
        return enabledFlags[ getCurrentKey ];
    }
    if ( loading ) return <div>Loading Data... Please Wait</div>

    return (
        <div>
            <h1>FeatureFlags</h1>
            {
                componentToRender.map( ( componentItem ) => (
                    checkEnabledflags( componentItem.key ) ?
                        <div key={ componentItem.key } style={ { height: "90vh" } }>{ componentItem.component }</div>
                        : null
                ) )
            }
        </div>
    )
}

export default FeatureFlags