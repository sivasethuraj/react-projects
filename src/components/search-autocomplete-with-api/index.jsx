import React, { useEffect, useState } from 'react'
import Suggestions from './suggestions'
import './styles.css'

const SearchAutoComplete = () => {

    const [ loading, setLoading ] = useState( false );
    const [ users, setUsers ] = useState( [] );
    const [ errors, setErrors ] = useState( null );
    const [ searchParam, setSearchParam ] = useState( '' );
    const [ showDropdown, setShowDropdown ] = useState( false );
    const [ filteredUsers, setFilteredUsers ] = useState( [] );

    const fetchListOfUsers = async () => {
        try {
            setLoading( true );
            const response = await fetch( "https://dummyjson.com/users" );
            const data = await response.json();

            if ( data && data.users && data.users.length ) {

                const names = data.users.map( ( userItem ) => userItem.firstName );
                setUsers( names );

                // for later offline usage:
                localStorage.setItem( 'users', JSON.stringify( names ) )

                setErrors( null );
                setLoading( false );
            }
        } catch ( error ) {
            console.log( error.message );
            setErrors( error );
            setLoading( false );
        }
    }
    useEffect( () => {
        try {
            const userNames = JSON.parse( localStorage.getItem( 'users' ) );


            if ( userNames && userNames.length ) {
                setLoading( true );
                setUsers( userNames );
                setErrors( null );
                setLoading( false );
            } else {
                fetchListOfUsers();
            }
        } catch ( error ) {
            console.log( error.message );
            setErrors( error );
            setLoading( false );
        }
    }, [] );

    const handleChange = ( e ) => {
        const query = e.target.value.toLowerCase();
        setSearchParam( query );

        if ( query.length > 1 ) {
            const filteredData = users && users.length ?
                users.filter( ( item ) => item.toLowerCase().indexOf( query ) > -1 )
                : [];

            setFilteredUsers( filteredData );
            setShowDropdown( true );
        } else {
            setShowDropdown( false );
        }
    };

    const handleClick = ( e ) => {
        setShowDropdown( false );
        setSearchParam( e.target.textContent );
        setFilteredUsers( [] );
    }

    if ( loading ) {
        return <div>Loading ... Please wait</div>
    }
    if ( errors ) {
        return <div>Error Occured { errors.message }</div>
    }
    return (
        <div className="search-autocomplete-container">
            <input
                type="text"
                name='search-users'
                placeholder='Search Users Here...'
                value={ searchParam }
                onChange={ handleChange }
                className='autocomplete-input-box'
            />

            {
                showDropdown && <Suggestions
                    data={ filteredUsers }
                    handleClick={ handleClick }
                />
            }
        </div>
    )
}

export default SearchAutoComplete