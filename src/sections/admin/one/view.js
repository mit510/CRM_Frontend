// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import ForwardCallForm from './form';
import ForwardTable from './table';

// ----------------------------------------------------------------------

export default function OneView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Forward Call </Typography>
      <hr/>
      <ForwardCallForm/>
      <hr/>
      <ForwardTable/>
      <hr/>
    </Container>
  );
}
