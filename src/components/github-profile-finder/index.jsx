import React, { useState, useEffect } from 'react'
import User from './User';
import './styles.css'

const GithubProfileFinder = () => {

    const [ username, setUsername ] = useState( 'sivasethuraj' );
    const [ userData, setuserData ] = useState( null );
    const [ loading, setLoading ] = useState( false );
    const [ errMsg, setErrMsg ] = useState( '' );

    const fetchGithuUserData = async () => {
        try {

            setLoading( true );
            const response = await fetch( `https://api.github.com/users/${username}` );
            const data = await response.json();

            if ( data ) {
                setuserData( data );
                setLoading( false );
                setUsername( '' );
            }

        } catch ( error ) {

            setErrMsg( error );
            setLoading( false );
        }
    };

    useEffect( () => {
        fetchGithuUserData();
    }, [] );

    const handleSubmit = () => {
        fetchGithuUserData();
    }

    if ( loading ) {
        return <div>Loading... Please wait</div>
    }
    if ( errMsg !== '' ) {
        return <div>Error Occured { errMsg.message }</div>
    }
    return (
        <div className="github-profile-conta">
            <div className="input-wrapper">
                <input
                    type="text"
                    name='search-by-username'
                    placeholder='Search Github Username...'
                    value={ username }
                    onChange={ ( e ) => setUsername( e.target.value ) } />
                <button onClick={ handleSubmit }>Search</button>
            </div>

            { userData !== null ?
                <User user={ userData } />
                : null
            }
        </div>
    )
}

export default GithubProfileFinder