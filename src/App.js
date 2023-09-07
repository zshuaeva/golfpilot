import './App.css';
import Nav from './nav/nav';
import Scorecard from './scorecard/scorecard';

function App() {
  return (
    <div className='app'>
      <Nav />
      <div className="scorecardcomponent">
      <Scorecard />
      </div>
    </div>
  );
}

export default App;
