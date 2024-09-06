import React, { useEffect, useState } from 'react'
import Search from '../search'
const Weather = () => {

    const [ search, setSearch ] = useState( '' );
    const [ loading, setLoading ] = useState( false );
    const [ weatherData, setWeatherData ] = useState( null );

    const fetchWeatherData = async ( param ) => {
        setLoading( true );
        try {
            const APIKEY = ''; //your api secret key
            const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${APIKEY}`;

            const response = await fetch( APIURL );
            const data = await response.json();
            console.log( data );
            if ( data ) {
                setWeatherData( data );
                setLoading( false );
            }

        } catch ( error ) {
            console.log( error.message );
            setLoading( false );
        }
    };

    const handleSearch = () => {
        fetchWeatherData( search );
    };

    const getCurrentDate = () => {
        return new Date().toLocaleDateString( 'en-us', {
            weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
        } );
    };

    useEffect( () => {
        fetchWeatherData( 'bangalore' );
    }, [] );

    return (
        <div>
            <Search
                search={ search }
                setSearch={ setSearch }
                handleSearch={ handleSearch }
            />
            {
                loading ? <div className='loading'>Loading...</div>
                    : weatherData && weatherData?.id ? <div>
                        <div className='city-name'>
                            <h2> { weatherData?.name }, <span>{ weatherData?.sys?.country }</span></h2></div>
                        <div className="date">
                            <span>{ getCurrentDate() }</span>
                        </div>
                        <div className='temp'>{ weatherData?.main?.temp }</div>
                        <p className='description'>{ weatherData?.weather[ 0 ] ? weatherData.weather[ 0 ].description : '' }</p>
                        <div className="weather-info">
                            <div className="column">
                                <div>
                                    <p className='wind'>{ weatherData?.wind?.speed }</p>
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                            <div className="column">
                                <div>
                                    <p className='humidity'>{ weatherData?.main?.humidity }</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        : <div>
                            <h3>Invalid City Name</h3>
                            <p>Please! Enter Correct City Name</p>
                        </div>
            }
        </div>
    )
}

export default Weather