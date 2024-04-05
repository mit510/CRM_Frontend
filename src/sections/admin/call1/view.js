// @mui
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// components
import { useSettingsContext } from 'src/components/settings';
import Widget from 'src/sections/widget';
import DirectCallEntry from './call_entry_2';
import CallEntry from './call_entry_1';

// ----------------------------------------------------------------------

export default function FiveView() {
  const settings = useSettingsContext();
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Call Entry</Typography>
      <hr />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={2} style={{'cursor':'pointer'}}>
          <Widget
            title="Call Entry"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            onClick={() => handleTabChange('all')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2} style={{'cursor':'pointer'}}>
          <Widget
            title="Direct Call Entry"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
            onClick={() => handleTabChange('direct')}
          />
        </Grid>
      </Grid>
      <hr />
     { activeTab === 'all' &&  <CallEntry/>}
     {activeTab === 'direct' && <DirectCallEntry/>}
     <hr/>
    </Container>
  );
}
