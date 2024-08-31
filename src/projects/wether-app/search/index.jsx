
const Search = ( { search, setSearch, handleSearch } ) => {

    return (
        <div className='search-engine'>
            <input
                type="text"
                className='city-search'
                placeholder='Enter City Name'
                name='search'
                value={ search }
                onChange={ ( e ) => setSearch( e.target.value ) }
            />

            <button
                className='search-btn'
                onClick={ handleSearch }
            >Search</button>
        </div>
    )
}

export default Search