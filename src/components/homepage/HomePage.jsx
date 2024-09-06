import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const HomePage = () => {
    return (
        <div>
            <header>
                <h1>Home Page</h1>
            </header>
            <main>
                <div className="pages"> <Link to='/Accordian'> Accordian </Link> </div>
                <div className="pages"> <Link to='RandomColor'> RandomColor </Link> </div>
                <div className="pages"> <Link to='StarRating'>  StarRating </Link> </div>
                <div className="pages"> <Link to='ImageSlider'> ImageSlider </Link> </div>
                <div className="pages"> <Link to='ExpenseTracker'> ExpenseTracker</Link> </div>
                <div className="pages"> <Link to='ShoppingCart'> ShoppingCart </Link> </div>
                <div className="pages"> <Link to='WeatherApp'> WeatherApp  </Link> </div>
                <div className="pages"> <Link to='ScrollToSection'> ScrollToSection </Link> </div>
                <div className="pages"> <Link to='UseWindowResizetest'> UseWindowResizetest </Link> </div>
                <div className="pages"> <Link to='TestUseOutsideClick'> TestUseOutsideClick </Link> </div>
                <div className="pages"> <Link to='UseFetchHookTest'> UseFetchHookTest </Link> </div>
                <div className="pages"> <Link to='FeatureFlags'> FeatureFlags </Link> </div>
                <div className="pages"> <Link to='ScrolltoTopAndBottom'> ScrolltoTopAndBottom </Link> </div>
                <div className="pages"> <Link to='TicTacToe'> TicTacToe </Link> </div>
                <div className="pages"> <Link to='LoadMoreData'> LoadMoreData </Link> </div>
                <div className="pages"> <Link to='TreeView'> TreeView </Link> </div>
                <div className="pages"> <Link to='QrCodeGenerator'> QrCodeGenerator</Link> </div>
                <div className="pages"> <Link to='SearchAutoComplete'> SearchAutoComplete </Link> </div>
                <div className="pages"> <Link to='GithubProfileFinder'> GithubProfileFinder</Link> </div>
                <div className="pages"> <Link to='ModalTest'> ModalTest</Link> </div>
                <div className="pages"> <Link to='TabTest'> TabTest</Link> </div>
                <div className="pages"> <Link to='ScrollIndicator'> ScrollIndicator</Link> </div>
                <div className="pages"> <Link to='LightDarkMode'> LightDarkMode</Link> </div>
                <div className="pages"> <Link to='RecipeApp'> RecipeApp</Link> </div>
            </main>
        </div >
    )
}

export default HomePage