import './App.css';
import Introduction from './components/Introduction/Introduction';
import { PicturesWall } from './components/PicturesWall/PicturesWall';
import { ScrollingFooter } from './components/ScrollingFooter/ScrollingFooter';
import { SlidingImages } from './components/SlidingImages/SlidingImages';
import { StartScreen } from './components/StartScreen/StartScreen';
import { WhiteSilhouettes } from './components/WhiteSilhouettes/WhiteSilhouettes';

function App() {
  return (
    <div>
      {/* <StartScreen /> */}
      <Introduction />
      <ScrollingFooter />
      <SlidingImages />
      <WhiteSilhouettes />
      <PicturesWall />
    </div>
  );
}

export default App;
