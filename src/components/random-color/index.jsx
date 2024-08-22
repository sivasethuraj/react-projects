import { useState } from "react";
import "./styles.css"

const RandomColor = () => {

    const [ mode, setMode ] = useState( 'hex' );
    const [ color, setColor ] = useState( '#000000' );
    const [ copied, setCopied ] = useState( false );

    const CSS = {
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: "1em",
    };

    const randomColorUtility = ( length ) => {
        return Math.floor( Math.random() * length );
    };

    const createRandomcolor = () => {

        if ( mode === "hex" ) {
            const hexArr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];

            let hexColor = "#";

            for ( let i = 0; i < 6; i++ ) {
                hexColor += hexArr[ randomColorUtility( hexArr.length ) ];
            }
            setColor( hexColor );
        } else {
            const R = randomColorUtility( 256 );
            const G = randomColorUtility( 256 );
            const B = randomColorUtility( 256 );

            const RGBcolor = `rgb(${R},${G},${B})`;
            setColor( RGBcolor );
        }
    };

    // const handleCopy = () => {
    //     navigator.clipboard.write( color );
    //     setCopied( true );
    // };

    return (
        <div className="container" style={ CSS }>
            <div className="buttons">

                <button onClick={ () => setMode( 'hex' ) }>
                    Create HEX Color
                </button>
                <button onClick={ () => setMode( 'rgb' ) }>Create RGB Color</button>
                <button onClick={ () => createRandomcolor() }>Generate Random Color</button>
            </div>
            <div className="display">
                <div className="display-value">
                    { color }
                </div>
            </div>
        </div>
    )
}

export default RandomColor;