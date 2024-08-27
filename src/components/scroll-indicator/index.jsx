import React, { useEffect, useState } from 'react'
import JSONdata from './data.json';
import './styles.css'

const ScrollIndicator = ( { url } ) => {

    const [ data, setData ] = useState( [] );
    const [ loading, setLoading ] = useState( false );
    const [ errMsg, setErrMsg ] = useState( '' );
    const [ scrollPercentage, setScrollPercentage ] = useState( 0 );

    // const fetchData = async ( getUrl ) => {
    //     try {
    //         setLoading( true );
    //         const response = await fetch( getUrl );
    //         const data = await response.json();

    //         if ( data && data.length && data.length > 0 ) {

    //             setData( data );
    //             setLoading( false );
    //         }

    //     } catch ( error ) {
    //         console.log( error.message );
    //         setErrMsg( error.message );
    //         setLoading( false );
    //     }
    // };

    // useEffect( () => {
    //     fetchData();
    // }, [ url ] );

    useEffect( () => {
        setLoading( true );
        setData( JSONdata.products );
        setLoading( false );
    }, [] );

    const handleScrollPercentage = () => {
        // console.log(
        //     document.body.scrollTop,
        //     document.documentElement.scrollTop,
        //     document.documentElement.scrollHeight,
        //     document.documentElement.clientHeight
        // );

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage( ( howMuchScrolled / height ) * 100 );
    };

    useEffect( () => {
        window.addEventListener( 'scroll', handleScrollPercentage );

        return () => window.removeEventListener( 'scroll', handleScrollPercentage );
    }, [] );

    if ( loading ) {
        return <div>Loading... Please Wait</div>
    }
    if ( errMsg ) {
        return <div>Error Occured { errMsg }</div>
    }

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-container">
                    <div className="current-progress-bar" style={ { width: `${scrollPercentage}%` } }>

                    </div>
                </div>
            </div>

            <div className="data-container">
                {
                    <div className="data-container">
                        {
                            data && data.length && data.length > 0 ?
                                data.map( ( dataItem, index ) => <p key={ index }>{ dataItem.title }</p> )
                                : null
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default ScrollIndicator