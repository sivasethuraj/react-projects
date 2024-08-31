import useFetch from '.'

const UseFetchHookTest = () => {

    const { data, error, pending } = useFetch( "https://dummyjson.com/products?limit=100", {} );

    return (
        <div style={ { minHeight: "50vh" } }>
            <h1>Use Fetch Hook</h1>
            { pending ? <h3>Pending ! Please wait</h3> : null }
            { error !== '' ? <h3>{ error }</h3> : null }
            {
                data && data.products && data.products.length ?
                    data.products.map( ( item ) => <p key={ item.key }>{ item.title }</p> )
                    : null
            }
        </div>
    )
}

export default UseFetchHookTest