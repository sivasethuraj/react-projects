import React, { useRef } from 'react'

const ScrollToSection = () => {

    const ref = useRef();
    const data = [ {
        label: 'First card',
        style: {
            width: "100%",
            height: "600px",
            background: "red",
        }
    }, {
        label: 'Second card',
        style: {
            width: "100%",
            height: "600px",
            background: "gray",
        }
    }, {
        label: 'Third card',
        style: {
            width: "100%",
            height: "600px",
            background: "blue",
        }
    }, {
        label: 'Fourth card',
        style: {
            width: "100%",
            height: "600px",
            background: "green",
        }
    }, {
        label: 'Fifth card',
        style: {
            width: "100%",
            height: "600px",
            background: "orange",
        }
    } ];

    const handleScrollToSection = () => {

        let position = ref.current.getBoundingClientRect().top;
        window.scrollTo( {
            top: position,
            behavior: 'smooth'
        } );
    };

    return (
        <div><h1>ScrollToSection</h1>
            <button onClick={ handleScrollToSection }>Click to Scroll</button>
            {
                data.map( ( dataItem, index ) => <div style={ dataItem.style } ref={ index === 3 ? ref : null }>
                    <h3>{ dataItem.label }</h3>
                </div> )
            }
        </div>

    )
}

export default ScrollToSection