import './App.css';
import Scorecard from './scorecard/scorecard';
import ClubGuide from './clubGuide/clubguide';

function App() {
  return (
    <div className='appContainer'>
      <div className='app'>
        <div className="scorecardcomponent">
        <Scorecard />
        </div>
        <div className="clubguidecomponent">
          <ClubGuide />
        </div>
      </div>
    </div>
  );
}

export default App;
