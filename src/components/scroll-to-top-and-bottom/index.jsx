import { useRef } from 'react';
import UseFetchHookTest from '../use-fetch/testUseFetch'

const ScrolltoTopAndBottom = () => {

    const handleScrollToTop = () => {
        window.scrollTo( {
            top: 0, left: 0, behavior: 'smooth'
        } )
    };
    const bottomref = useRef( null );

    const handleScrollToBottom = () => {
        bottomref.current.scrollIntoView( { behavior: 'smooth' } );
    };

    return (
        <div>
            <header>
                <h1>Scroll to top and bottom feature</h1>
                <h3>This is top section</h3>
                <button onClick={ handleScrollToBottom }>Scroll to Bottom</button>
            </header>
            <section>
                <UseFetchHookTest />
            </section>
            <footer>
                <button onClick={ handleScrollToTop }>Scroll to Top</button>
                <h3 ref={ bottomref }>This is bottom section</h3>
            </footer>
        </div>
    )
}

export default ScrolltoTopAndBottom