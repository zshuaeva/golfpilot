import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabNav(props) {
  return (
    <Box sx={{ width: '100%', bgcolor: 'lightgrey' }}>
      <Tabs value={props.value} onChange={props.onChange} centered>
        <Tab label="Scorecard" />
        <Tab label="Club Guide" />
        <Tab label="Coming Soon" disabled />
      </Tabs>
    </Box>
  );
}

export default TabNav;
