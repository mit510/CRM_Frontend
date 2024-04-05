// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import PendingCallForm from './form';
import PendingCall from './table';

// ----------------------------------------------------------------------

export default function Report1View() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Pending Calls </Typography>
      <hr/>
      <PendingCallForm/>
      <hr/>
      <PendingCall/>
      <hr/>
    </Container>
  );
}
