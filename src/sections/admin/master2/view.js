// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import AssignTerritoryForm from './form';
import AssignTerritoryTable from './table';

// ----------------------------------------------------------------------

export default function Master2View() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Assign Engineer Territory </Typography>
      <hr/>
      <AssignTerritoryForm/>
      <hr/>
      <AssignTerritoryTable/>
      <hr/>
    </Container>
  );
}
