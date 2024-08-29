import './App.css';
// import Accordian from './components/accordian';
// import RandomColor from './components/random-color';
// import StarRating from './components/star-rating';
// import ImageSlider from './components/image-slider';
// import LoadMoreData from './components/load-more-data';
// import TreeView from './components/tree-view'
// import menus from './components/tree-view/data'
// import QrCodeGenerator from './components/qr-code-generator';
// import LightDarkMode from './components/light-dark-mode';
// import ScrollIndicator from './components/scroll-indicator';
// import TabTest from './components/custom-tabs/tab-test';
// import ModalTest from './components/custom-modal/modal-test'
// import GithubProfileFinder from './components/github-profile-finder'
// import SearchAutoComplete from './components/search-autocomplete-with-api'
// import TicTacToe from './components/tic-tac-toe'
import FeatureFlags from './components/feature-flag'
import FeatureFlagGlobalState from './components/feature-flag/context';

function App () {
  return (
    <div className="App">
      {/* <Accordian /> */ }
      {/* <RandomColor /> */ }
      {/* <StarRating /> */ }
      {/* <ImageSlider url={ "https://picsum.photos/v2/list" } page={ "1" } limit={ "10" } /> */ }
      {/* <LoadMoreData /> */ }
      {/* <TreeView menus={ menus } /> */ }
      {/* <QrCodeGenerator /> */ }
      {/* <LightDarkMode /> */ }
      {/* <ScrollIndicator /> */ }
      {/* <TabTest /> */ }
      {/* <ModalTest /> */ }
      {/* <GithubProfileFinder /> */ }
      {/* <SearchAutoComplete /> */ }
      {/* <TicTacToe /> */ }
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
