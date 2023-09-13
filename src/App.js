import React, { useState } from 'react';
import './App.css';
import Scorecard from './scorecard/scorecard';
import ClubGuide from './clubGuide/clubguide';
import TabNav from './nav/nav';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, selectedComponent) => {
    setSelectedTab(selectedComponent);
  };

  return (
    <div className='appContainer'>
      <div className='app'>
        <TabNav value={selectedTab} onChange={handleTabChange} />
        <div className="tabContent">
          {selectedTab === 0 && (
            <div className="scorecardcomponent">
              <Scorecard />
            </div>
          )}
          {selectedTab === 1 && (
            <div className="clubguidecomponent">
              <ClubGuide />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
