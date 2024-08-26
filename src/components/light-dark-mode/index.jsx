import useLocalStorage from './useLocalStorage';
import './styles.css'

const LightDarkMode = () => {

    const [ theme, setTheme ] = useLocalStorage( 'theme', "dark" );

    const changeTheme = () => {
        setTheme( theme === 'light' ? 'dark' : 'light' );
    };

    return (
        <div className='light-dark-mode' data-theme={ theme }>
            <div className="container">
                <p>{ theme } theme</p>
                <button onClick={ () => changeTheme() }>
                    Change Theme
                </button>
            </div>
        </div>
    )
}

export default LightDarkMode