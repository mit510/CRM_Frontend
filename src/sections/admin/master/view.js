// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import TerritoryForm from './form';
import TerritoryTable from './table';

// ----------------------------------------------------------------------

export default function MasterView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Territory Master </Typography>
      <hr/>
      <TerritoryForm/>
      <hr/>
      <TerritoryTable/>
      <hr/>
    </Container>
  );
}
