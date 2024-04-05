import { Helmet } from 'react-helmet-async';
// sections
import OrecleView from 'src/sections/erp/erp_report1/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Report: Orecle Modulewise</title>
      </Helmet>

      
      <OrecleView/>
    </>
  );
}
