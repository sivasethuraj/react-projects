import './App.css';
import { Route, Routes } from 'react-router-dom'
import ExpenseTracker from './projects/4.EXPENSE-TRACKER/ExpenseTracker';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'
import QrCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal/modal-test'
import GithubProfileFinder from './components/github-profile-finder'
import SearchAutoComplete from './components/search-autocomplete-with-api'
import TicTacToe from './components/tic-tac-toe'
import FeatureFlags from './components/feature-flag'
import FeatureFlagGlobalState from './components/feature-flag/context';
import UseFetchHookTest from './components/use-fetch/testUseFetch'
import TestUseOutsideClick from './components/use-outside-click/test'
import ScrolltoTopAndBottom from './components/scroll-to-top-and-bottom'
import ScrollToSection from './components/scroll-to-top-and-bottom/scroll-to-section'
import WeatherApp from './projects/1.WEATHER-APP/WeatherApp';
import RecipeApp from './projects/2.RECIPE-APP/RecipeApp';
import GlobalState from './projects/2.RECIPE-APP/context';
import ShoppingCart from './projects/3.SHOPPING-CART/ShoppingCart';
import UseWindowResizetest from './components/use-window-resize/test'
import HomePage from './components/homepage/HomePage';

function App () {
  return (
    <div className="App">
      <FeatureFlagGlobalState>
        <GlobalState>
          <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/Accordian' element={ <Accordian /> } />
            <Route path='RandomColor' element={ <RandomColor /> } />
            <Route path='StarRating' element={ < StarRating /> } />
            <Route path='ImageSlider' element={ <ImageSlider url={ "https://picsum.photos/v2/list" } page={ "1" } limit={ "10" } /> } />
            <Route path='ExpenseTracker' element={ <ExpenseTracker /> } />
            <Route path='ShoppingCart' element={ <ShoppingCart /> } />
            <Route path='WeatherApp' element={ <WeatherApp /> } />
            <Route path='ScrollToSection' element={ <ScrollToSection /> } />
            <Route path='UseWindowResizetest' element={ <UseWindowResizetest /> } />
            <Route path='TestUseOutsideClick' element={ <TestUseOutsideClick /> } />
            <Route path='UseFetchHookTest' element={ <UseFetchHookTest /> } />
            <Route path='FeatureFlags' element={ <FeatureFlags /> } />
            <Route path='ScrolltoTopAndBottom' element={ <ScrolltoTopAndBottom /> } />
            <Route path='TicTacToe' element={ <TicTacToe /> } />
            <Route path='LoadMoreData' element={ <LoadMoreData /> } />
            <Route path='TreeView' element={ <TreeView menus={ menus } /> } />
            <Route path='QrCodeGenerator' element={ <QrCodeGenerator /> } />
            <Route path='SearchAutoComplete' element={ <SearchAutoComplete /> } />
            <Route path='GithubProfileFinder' element={ <GithubProfileFinder /> } />
            <Route path='ModalTest' element={ <ModalTest /> } />
            <Route path='TabTest' element={ <TabTest /> } />
            <Route path='ScrollIndicator' element={ <ScrollIndicator /> } />
            <Route path='LightDarkMode' element={ <LightDarkMode /> } />
            <Route path='RecipeApp' element={ <RecipeApp /> } />
          </Routes>
        </GlobalState>
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
