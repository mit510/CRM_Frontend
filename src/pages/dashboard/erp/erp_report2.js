import { Helmet } from 'react-helmet-async';
import CloseCallView from 'src/sections/erp/erp_report2/view';
// sections


// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Report: Close Call</title>
      </Helmet>
    <CloseCallView/>
     
    </>
  );
}
