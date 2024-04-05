// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import CallStatusForm from './form';
import CallStatusTable from './table';

// ----------------------------------------------------------------------

export default function CallStatusView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Call Status </Typography>

      <hr/>
      <CallStatusForm/>
      <hr/>
      <CallStatusTable/>
      <hr/>
    </Container>
  );
}
