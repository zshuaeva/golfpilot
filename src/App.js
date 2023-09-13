import * as React from 'react';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import './App.css';
import Scorecard from './scorecard/scorecard';
import ClubGuide from './clubGuide/clubguide';


function App() {



  return (
    <div className='appContainer'>

      <div className='app'>
      <Divider>
        <Chip label="Scorecard" />
        </Divider>
        <div className="scorecardcomponent">
        <Scorecard />
        </div>

        <Divider>
        <Chip label="Club Guide" />
        </Divider>

        <div className="clubguidecomponent">
          <ClubGuide />
        </div>

      </div>
    </div>
  );
}

export default App;
