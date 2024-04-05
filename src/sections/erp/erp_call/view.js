import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// components
import { useSettingsContext } from 'src/components/settings';
import Widget from 'src/sections/widget';
import Attendcallform from './attendcallform';
import ForwardCalls from './forwarded_call_table';
import AllCalls from './call_table';
import ResolvedCalls from './resolved_call_table';

// ----------------------------------------------------------------------

export default function CallView() {
  const settings = useSettingsContext();
  const [activeTab, setActiveTab] = useState('all'); // Initial state to show AllCalls component

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Request Call </Typography>
      <hr />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={2} style={{'cursor':'pointer'}}>
          <Widget
            title="Pending / Work In Progress Call"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            onClick={() => handleTabChange('all')} // Set activeTab to 'all' when clicked
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2} style={{'cursor':'pointer'}}>
          <Widget
            title="Resolved Call"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
            onClick={() => handleTabChange('resolved')} // Set activeTab to 'resolved' when clicked
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2} style={{'cursor':'pointer'}}>
          <Widget
            title="Forwarded Call"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
            onClick={() => handleTabChange('forwarded')} // Set activeTab to 'forwarded' when clicked
          />
        </Grid>
      </Grid>
      <hr />
      {activeTab === 'all' && <AllCalls />}
      {activeTab === 'resolved' && <ResolvedCalls />}
      {activeTab === 'forwarded' && <ForwardCalls />}
      <hr/>
      <Attendcallform />
      <hr/>
    </Container>
  );
}
