// @mui
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// components
import { useSettingsContext } from 'src/components/settings';
import Widget from 'src/sections/widget';
import Calls from './calltable';
import PendingCall from './pendingcalltable';
// ----------------------------------------------------------------------

export default function NetworkView() {
  const settings = useSettingsContext();
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4">View</Typography>
      <hr />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={2}>
          <Widget
            title="Your Calls"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            onClick={() => handleTabChange('all')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Widget
            title="Your Pending Calls"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
            onClick={() => handleTabChange('direct')}
          />
        </Grid>
      </Grid>
      <hr />
     { activeTab === 'all' &&  <Calls/>}
     {activeTab === 'direct' && <PendingCall/>}
     <hr/>
    </Container>
  );
}
