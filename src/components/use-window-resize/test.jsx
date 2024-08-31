import React from 'react'
import useWindowResize from '.'

const UseWindowResizetest = () => {

    const windowSize = useWindowResize();
    const { width, height } = windowSize;

    return (
        <div style={ { minHeight: "50vh" } }>
            <h1>Use Window Resize Hook</h1>
            <p>Width is { width }</p>
            <p>Height is { height }</p>
        </div>
    )
}

export default UseWindowResizetest