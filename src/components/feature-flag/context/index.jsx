import React, { createContext, useEffect, useState } from 'react'
import featureFlagCall from '../data';

export const FeatureFlagContext = createContext( null );

const FeatureFlagGlobalState = ( { children } ) => {

    const [ loading, setLoading ] = useState( false );
    const [ enabledFlags, setEnabledFlags ] = useState( {} );

    const fetchFeatureFlags = async () => {
        try {
            setLoading( true );
            const response = await featureFlagCall();
            setEnabledFlags( response );
            setLoading( false );

        } catch ( error ) {
            console.log( error.message );
            setLoading( false );
            throw new Error( error.message );
        }
    };

    useEffect( () => {
        fetchFeatureFlags();
    }, [] );

    return (
        <FeatureFlagContext.Provider value={ { loading, enabledFlags } }>
            { children }
        </FeatureFlagContext.Provider>
    )
}

export default FeatureFlagGlobalState