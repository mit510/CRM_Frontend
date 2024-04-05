// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import OrecleForm from './form';
import OrecleTable from './table';

// ----------------------------------------------------------------------

export default function OrecleView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Orecle Modulewise </Typography>

      <hr/>
      <OrecleForm/>
      <hr/>
      <OrecleTable/>
      <hr/>
    </Container>
  );
}
