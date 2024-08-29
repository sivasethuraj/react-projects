const dummyAPIResponse = {
    showLightAndDarkMode: false,
    showTicTacToe: true,
    showRandomColor: true,
    showAccordian: true,
    showTreeView: false,
};

const featureFlagCall = () => {
    return new Promise( ( resolve, reject ) => {
        if ( dummyAPIResponse ) {
            setTimeout(
                resolve( dummyAPIResponse ),
                500 );
        } else {
            reject( 'error occured' );
        }
    } );
};

export default featureFlagCall;