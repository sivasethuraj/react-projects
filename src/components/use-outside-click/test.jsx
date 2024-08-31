import React, { useRef, useState } from 'react'
import useOutsideClick from '.';

const TestUseOutsideClick = () => {

    const [ showContent, setShowContent ] = useState( false );
    const ref = useRef();
    useOutsideClick( ref, () => setShowContent( false ) );

    const style = {
        button: {
            fontSize: "1rem",
            fontWeight: "bold",
            color: "white",
            background: "skyblue",
            border: ".2em solid skyblue",
            outline: "none",
            padding: ".2em .5em",
            borderRadius: ".3em",
            cursor: "pointer"
        },
        content: {
            width: "40rem",
            margin: ".2em auto",
            border: ".2em solid skyblue",
            padding: ".2em .5em",
            borderRadius: ".3em",
        }
    }
    return (
        <div style={ { minHeight: "50vh" } }>
            {
                showContent ? <div style={ style.content } ref={ ref }>
                    <h1>This is random content</h1>
                    <p>click outside to close this .</p>
                    <p>It won't close if you click inside of this content.</p>
                </div>
                    : <button style={ style.button } onClick={ () => setShowContent( true ) }>Show Content</button>
            }
        </div>
    )
}

export default TestUseOutsideClick