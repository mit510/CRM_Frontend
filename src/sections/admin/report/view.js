// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import CloseCallForm from './form';
import CloseCallTable from './table';

// ----------------------------------------------------------------------

export default function ReportView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Close Calls </Typography>
      <hr/>
      <CloseCallForm/>
      <hr/>
      <CloseCallTable/>
      <hr/>
    </Container>
  );
}
